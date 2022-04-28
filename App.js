/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Route from './src/navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';



const App = () => {
  
  return (
    <Provider store={store}>
    <Route />
  </Provider>
  );
};


export default App;
