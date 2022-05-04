import React from 'react'
import Tutorial from '../Screens/AuthScreens/Tutorial/Tutorial';
import navigationStrings from './navigationStrings';

const IntroSlider = (Stack) => {
  return (
    <>
    <Stack.Screen  name ={navigationStrings.GETSTARTED} component={Tutorial} options={{ headerShown: false }} />
    </>
  )
}
export default IntroSlider