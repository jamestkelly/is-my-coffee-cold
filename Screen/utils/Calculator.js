export async function startCalculate(args) {
    let data = await getWeather(args);
    displayWeather(data[1]);
    timeMessage(parseFloat(data[0]));
}

async function getWeather(args) {
    const fetch = require('node-fetch');
    let countryCode = countryCheck(args[0]);
    let cityID = cityCheck(args[1], countryCode);
    var key = '92b30ef73aba0e9531f56ed3e67666a8';
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID +
    '&units=metric' + '&appid=' + key);
    const json = await response.json();
    let coffeeTemp = coffeeCheck(args[2]);
    let celsius = json.main.temp;
    let time = modifiedEuler(celsius, coffeeTemp);
    let data = [time, json];
    return data;
}

function countryCheck(countryName) {
    var countryData = require('./countryCodes.json');
    var countryCode = "";

    while (Boolean(countryCode) === false) {
        for (var i = 0; i < countryData.length; i++) {
            var tempName = countryData[i].Name;
            if (tempName === countryName) {
                countryCode = countryData[i].Code;
                break;
            }
        }
    }

    return countryCode;
}

function cityCheck(cityName, countryCode) {
    var cityData = require('./city.list.json');
    var cityCode = 0;

    while (Boolean(cityCode) === false) {
        for (var i = 0; i < cityData.length; i++) {
            var tempName = cityData[i].name;
            var tempCountry = cityData[i].country;
            if (cityName === tempName && countryCode === tempCountry) {
                var cityCode = cityData[i].id;
            }
        }
    }

    // TODO: Fix this to work for mobile
    if (Boolean(cityCode) === false) {
        console.log(messages.cityError);
    }

    return cityCode;
}

function coffeeCheck(coffeeType) {
    var coffeeData = [
        {"name": 'long black', "temperature": '80'},
        {"name": 'flat white', "temperature": '65'},
        {"name": 'latte', "temperature": '60'},
        {"name": 'cappuccino', "temperature": '70'}
    ];
    var coffeeTemperature = 80; // Degrees Celsius

    if (coffeeType >= 1 && coffeeType <= 5) {
        switch (coffeeType) {
            case '1':
                coffeeTemperature = coffeeData[0].temperature;
                break;

            case '2':
                coffeeTemperature = coffeeData[1].temperature;
                break;

            case '3':
                coffeeTemperature = coffeeData[2].temperature;
                break;

            case '4':
                coffeeTemperature = coffeeData[3].temperature;
                break;

            case '5':
                coffeeTemperature = coffeeData[0].temperature;
                break;
        }
    }
    else {
        // TODO: Implement code to output error message
    }
    return coffeeTemperature;
}

// Function to approximate the temperature of the coffee using the modified Euler
// method for approximating polynomials.
function modifiedEuler(cityTemperature, coffeeTemperature) {
    // Initialise known parameters
    var startTime = 0;
    var endTime = 40; // Minutes
    var steps = parseFloat(endTime * 60); // Calculate total steps
    var k = 0.1 // Positive constant for equation
    var undrinkable = 40; // Temperature for when a coffee's flavour palette changes
    let stepSize = parseFloat((endTime - startTime) / steps); // Calculate step-size
    var timeArray = new Array(steps);
    var tempArray = new Array(timeArray.length);
    var minutesTotal = 0;

    // Initialise the first position in the temperature array with the coffee serving
    // temperature
    timeArray[0] = parseFloat(startTime);
    tempArray[0] = coffeeTemperature;

    // Fill 'timeArray' with time incrementing by step size
    for (var i = 1; i < timeArray.length; i++) {
        timeArray[i] = parseFloat(timeArray[i - 1] + stepSize);
        //console.log(timeArray);
    }

    // Approximate the coffee temperature at each corresponding point in 'timeArray'
    for (var j = 0; j < tempArray.length - 1; j++) {
        var k1 = stepSize * ((k * -1) * (parseFloat(tempArray[j]) - parseFloat(cityTemperature)));
        var k2 = stepSize * ((k * -1) * (parseFloat(tempArray[j]) + k1 - parseFloat(cityTemperature)));
        tempArray[j + 1] = parseFloat(tempArray[j]) + 1/2 * parseFloat((k1 + k2));
    }

    // Perform iterations via for loop to calculate the time taken for the coffee
    // to become "undrinkable".
    for (var k = 0; k < tempArray.length; k++) {
        let temperature = tempArray[k];
        if (temperature < undrinkable) {
            minutesTotal = timeArray[k];
            break;
        }
    }

    var timeRemaining = minutesTotal * 60; // Calculate the time remaining
    return timeRemaining; // Assign time until coffee is cold in seconds
}