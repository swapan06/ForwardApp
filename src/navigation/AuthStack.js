import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from './navigationStrings';
import Tutorial from '../Screens/AuthScreens/Tutorial/Tutorial';
import Login from '../Screens/AuthScreens/Login/Login';
import Login1 from '../Screens/AuthScreens/Login1.1/Login1';
import SignUp from '../Screens/AuthScreens/Signup/SignUp';
import SignUp1 from '../Screens/AuthScreens/Signup1.1/SignUp1';
import SetPassword from '../Screens/AuthScreens/SetPassword/SetPassword';
import Home from '../Screens/MainScreens/Home/Home';
 

export default function (Stack) {
    return (
        <>
            <Stack.Screen name={navigationStrings.GETSTARTED} component={Tutorial} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.LOGIN1} component={Login1}  options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp}  options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP1} component={SignUp1}  options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SETPASSWORD} component={SetPassword}  options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.HOME} component={Home}  options={{ headerShown: false }} />
        </>
    );
}
