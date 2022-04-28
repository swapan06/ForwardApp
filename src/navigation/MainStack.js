import React from 'react';
import HomeStack from './HomeStack';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name='home'
                component={HomeStack}
                options={{ headerShown: false }}
            />
        </>
    );
}