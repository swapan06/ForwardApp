import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();
export default function Route() {
    const userStatus = useSelector(state => state.userStatus.userData);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userStatus? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}