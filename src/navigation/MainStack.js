import React from 'react';
import Bottomnavigation from './Bottomnavigation';
import HomeStack from './HomeStack';
import navigationStrings from './navigationStrings';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.HOME}
                component={Bottomnavigation}
                options={{ headerShown: false }}
            />
        </>
    );
}