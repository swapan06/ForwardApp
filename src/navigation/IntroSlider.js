import React from 'react'
import AppIntroSlide from '../Screens/AuthScreens/AppIntroSlider/AppIntroSlide';
import Tutorial from '../Screens/AuthScreens/Tutorial/Tutorial';
import navigationStrings from './navigationStrings';

const IntroSlider = (Stack) => {
  return (
    <>
    <Stack.Screen  name ={navigationStrings.GETSTARTED} component={Tutorial} />
    </>
  )
}
export default IntroSlider