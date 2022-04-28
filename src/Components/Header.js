import { Image } from 'react-native'
import React from 'react'
import WrapperContainer from './WrapperContainer'
import { moderateScale } from '../style/responsiveSize'
import { images } from '../constants/images'


const Header = () => {
  return (
   
        <Image  source={images?.arrow} style={{margin: moderateScale(20), marginTop: moderateScale(20)}}/>
       
  )
}

export default Header