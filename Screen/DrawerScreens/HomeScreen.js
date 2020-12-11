// Import React and Component
import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Countries from '../utils/countryCodes.json';

// TODO:
//      ~ Implement code to parse the country name & code list for use in a 'picker'
//        wheel
//      ~ Implement code to parse the city name for use in a 'picker' wheel
//      ~ Implement code to select coffee type preference from a 'picker' wheel
//      ~ Have the application run the calculation using modified Euler to calculate how long
//        the user has until the coffee changes flavour
//      ~ Display time until the coffee changes flavour as a count-down timer on screen

let Locations = Object.keys(Countries).map(function (key) {
  return <Picker.Item key = {key} value = {key} label = {key} />
});

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
            Please select the country.
          </Text>
          <Picker selectedValue = {userCountry} onValueChange = {setCountry}>
            <Picker.Item label = "Australia" value = "AU"/>

          </Picker>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;