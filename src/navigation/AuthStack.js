import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from './navigationStrings';
import Tutorial from '../Screens/Tutorial/Tutorial';
import Login from '../Screens/Login/Login';
import Login1 from '../Screens/Login1.1/Login1';
import SignUp from '../Screens/Signup/SignUp';
import SignUp1 from '../Screens/Signup1.1/SignUp1';
import SetPassword from '../Screens/SetPassword/SetPassword';
 

export default function (Stack) {
    return (
        <>
            <Stack.Screen name={navigationStrings.GETSTARTED} component={Tutorial} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.LOGIN1} component={Login1}  options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp}  options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP1} component={SignUp1}  options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SETPASSWORD} component={SetPassword}  options={{ headerShown: false }} />
        </>
    );
}
