import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from './navigationStrings';
// import Login from '../Screens/Login/Login'
import Tutorial from '../Screens/Tutorial/Tutorial';
import Login from '../Screens/Login/Login';

 

const Stack = createStackNavigator();
function HomeStack() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={navigationStrings.LOGIN} component={Login}     options={{ headerShown: false }}  />
            </Stack.Navigator>
        </>
    )
}

export default HomeStack