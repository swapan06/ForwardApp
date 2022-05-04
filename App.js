import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';

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
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';




const App = () => {

  useEffect(()=>{
    GoogleSignin.configure()
  }, [])
  
  return (
    <Provider store={store}>
    <Route />
  </Provider>
  );
};


export default App;
