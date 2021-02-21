# is-my-coffee-cold
'is-my-coffee-cold' is a progressive web application (PWA) built using Ionic, Capacitor, Angular, and Firebase as the core technologies. The application includes the ability to calculate how long until a coffee goes cold in a given location, CRUD functionality, and email authentication and gives users of the platform the ability to create and store objects to the Firebase 'firestore' No-SQL database.

## Table of Contents
* 	[General Information](#general-information)
*  [Technology Used](#technology-used)
* 	[Setup](#setup)
*  [Future Plans](#future-plans)
* [Alpha Version Demonstration](#alpha-version-demonstration)

## General Information
As previously stated, 'is-my-coffee-cold' is in simple terms an Angular progressive web application for native Android & iOS platforms that enables users to calculate how long until their coffee goes "cold" given the temperature of a supplied location.
The temperature that the coffee is deemed "cold" by the application is at approximately 40 degrees Celisus. This is because at this point for a majority of coffee bean varieties, the palette or flavours that can be tasted by the coffee drinker change from bitter to sweeter tones. 

The application allows for both manual entry and also for the user to be able to create a 'preference' object that stores the information of `country`, `city`, and `coffee type` once the user has been authenticated with an email adress and password combination. For example, the parameters of the temperature in Sydney, Australia alongisde the standard temperature of a 'flat white' coffee.
These 'preference' objects are then uploaded via the application to Google Firebase's 'firestore' No-SQL database. Naturally, when a user goes to select a pre-created 'preference' object, the application is reading their data from the database. The application then queries [OpenWeatherMap](https://openweathermap.org)'s API service to fetch the weather data for the supplied location. 

The mathematics used in developing the algorithm to equate at which point the temperature of the coffee ``t`` is less than the 'cold' threshold of `t_x = 40 // Degrees Celsius`, are relatively simple. The equation first makes use of [Newton's Rate of Cooling](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/newtons-law-of-cooling):
`T = Ce^{-kt}+T_a` in tandem with the [modified Euler method](http://www.physics.utah.edu/~detar/phys6720/handouts/ode/ode/node5.html) for interpolating polynomials. 

As I have not yet been able to find any real clear explanations of the modified Euler method outside of my degree, I will try to provide a brief summary here. In simple terms, in interpolation problems we are given a set of `(x, y)` points and our job is to find a function `f` that passes through these points. While, the second order Taylor method provides higher accuracy than Euler’s method, the requirement to differentiate `f(t,y)` makes it cumbersome to use. 
Suppose then, instead of differentiating `f(t,y)` exactly, we use a numerical approximation to the derivative. Given that the definition of the derivative of a function is the limiting value of the slope of the line connecting two nearby points on the curve, then for suitably small values of step-size `h` it is possible to use the following approximation of the derivate.

`f'(t_i,y_i)≈(f(t_(i+1),y_(i+1))−f(t_i,y_i))/h`

Then using Euler’s method to approximate `y_(i+1)` on the RHS to second order locally we derive what is called the modified Euler method. The mathematical explanation of this can be seen [here](http://www.physics.utah.edu/~detar/phys6720/handouts/ode/ode/node3.html). Notably, this equation does not take into account the impacts of say being indoors compared to outdoors or the material the coffee cup is made of. Rather it assumes that the temperature of the coffee will change in direct proportion to the surrounding temperature in the area.

## Technology Used
* @angular/common: ~10.0.0
* @angular/core: ~10.0.0
* @angular/fire: ^6.1.3
* @capactir/android: ^2.4.6
* @capacitor/ios: ^2.4.6
* @ionic-native/core: ^5.0.0
* @ionic/angular: ^5.5.4
* @ionic/cli: ^6.12.4
* firebase: ^8.2.7
* Node: 14.15.5
* npm: 6.14.11
* rxjs: ~6.5.5

## Setup
Please be aware the setup to build and run this application differs depending on the operating system (OS) of the machine you are cloning this repository to. The following instructions are for use on a MacOS device, please note that Xcode is only available on MacOS and only the Android version of the application can be built and run on Windows or Linux machines. If building for the Android version, simply replace all mentions of `iOS` with `Android`.


```
$ cd ../is-my-coffee-cold
$ npm install
$ sudo npm install -g capacitor
$ sudo npm install -g @ionic/cli
$ ionic -v
  6.12.4
$ ionic capacitor run ios --livereload --external
```

This will then launch the application on a simulator in Xcode (or an Android emulator from Android Studio if building for Android). To run the simulation simply press the 'play' button from the application. This simulated version of the application is representative of what it will look like in subsequent releases and future developments. Feel free to contact me if there are any issues, questions, or suggestions regarding this application via my contact page, [here](https://portfolio-website-76885.web.app/contact). 

## Future Plans
I plan to in future release this application for both Android and iOS devices on the Google Play and App Stores for public download and use. Beyond that additional developments and iterations on the appearance and overall quality of functionality of the application is planned for the near future.

## Alpha Version Demonstration
Screen shot of Login Page:

![alt-text](https://github.com/jamestkelly/is-my-coffee-cold/blob/main/Screenshots/HomeScreen.png)

Screen recording of application in simulator:

![alt-text](https://github.com/jamestkelly/is-my-coffee-cold/blob/main/Screenshots/Functionality.gif)