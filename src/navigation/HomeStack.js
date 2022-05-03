import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from './navigationStrings';
// import Login from '../Screens/Login/Login'
import Tutorial from '../Screens/AuthScreens/Tutorial/Tutorial';
import Login from '../Screens/AuthScreens/Login/Login';
import Bottomnavigation from './Bottomnavigation';

 

const Stack = createStackNavigator();
function HomeStack() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={navigationStrings.HOME} component={Bottomnavigation} options={{ headerShown: false }}  />
            </Stack.Navigator>
        </>
    )
}

export default HomeStack