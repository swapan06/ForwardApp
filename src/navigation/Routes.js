import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import IntroSlider from './IntroSlider';


const Stack = createStackNavigator();
export default function Route() {
    const userStatus = useSelector(state => state.userStatus.userData);
    const intro = useSelector(state => state?.appIntro?.introData)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* {intro
                        ? IntroSlider(Stack)
                        : !!(userStatus || userStatus?.access_token)? MainStack(Stack) : AuthStack(Stack)} */}
                        {userStatus? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}