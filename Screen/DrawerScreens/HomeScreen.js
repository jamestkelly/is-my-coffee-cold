// Import React and Component
import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Countries from '../utils/countryCodes.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

// TODO:
//      ~ Implement code to parse the country name & code list for use in a 'picker'
//        wheel
//      ~ Implement code to parse the city name for use in a 'picker' wheel
//      ~ Implement code to select coffee type preference from a 'picker' wheel
//      ~ Have the application run the calculation using modified Euler to calculate how long
//        the user has until the coffee changes flavour
//      ~ Display time until the coffee changes flavour as a count-down timer on screen

// Import the countries & cities list files
const countries = require('../utils/countryCodes.json');
const cities = require('../utils/city.list.json');

// Function to convert country ISO code to flag
// ISO 3166-1 alpha-2
// Note: Does not support IE11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      margin: 10,
      fontSize: 18,
    }
  }
})

// Function to display the user selection of the country
function CountrySelect() {
  const classes = useStyles();

  return (
    <Autocomplete
      id = "country-select"
      style = {{ width: 300 }}
      options = {countries}
      classes = {{
        option: classes.option,
      }}
      autoHighLight
      getOptionLabel = {(option) => option.label}
      renderOption = {(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code})
        </React.Fragment>
      )}
      renderInput = {(params) => (
        <TextField
          {...params}
          label = "Select a country"
          variant = "outlined"
          inputProps = {{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  );
}

function CitySelect() {
  const classes = useStyles();

  return (
    <Autocomplete
      id = "city-select"
      style = {{ width: 300}}
      options = {cities}
      classes = {{
        option: classes.option,
      }}
      autoHighLight
      getOptionLabel = {(option) => option.label}
      renderOption = {(option) => (
        <React.Fragment>
          <span>{option.name}</span>
        </React.Fragment>
      )}
    />
  )
}

// Function to display home-screen page
const HomeScreen = () => {
  const [userCountry, setCountry] = useState('Australia');
  const [userCity, setCity] = useState('Brisbane');
  const [userCoffee, setCoffee] = useState(2);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
          </Text>
          <CountrySelect/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;