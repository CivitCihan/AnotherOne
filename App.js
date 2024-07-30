import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ProfileScreen from './ProfileScreen';
import MusicReco from './MusicReco';
import FilmSeriesReco from './FilmSeriesReco';
import BookReco from './BookReco';
import ForgetPass from './ForgetPass';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MusicReco" component={MusicReco} />
        <Stack.Screen name="BookReco" component={BookReco} />
        <Stack.Screen name="FilmSeriesReco" component={FilmSeriesReco} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
