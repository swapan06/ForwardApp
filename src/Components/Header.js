import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { images } from '../constants/images';
import colors from '../style/colors';
import { moderateScale, moderateScaleVertical, textScale, width } from '../style/responsiveSize';


function Header({
  // Title = '',
  color = '',
  style,
  // right = false,
  // rightTitle = '',
  leftText = false,
  leftImage = false,
  leftImageStyle = '',
  leftImageIcon = '',
  leftTextTitle ='',
  leftTextStyle = '',

  centerText = false,
  centerImage = false,
  centerImageStyle = '',
  centerImageIcon = '',
  centerTextStyle = '',


  rightText = false,
  rightImage = false,
  rightImageStyle = '',
  rightImageIcon = '',
  rightTextStyle = '',

  onPress = '',
  ...props
}) {
  return (
    <View
      style={{
        marginHorizontal: moderateScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:moderateScale(10)
      }}>
      <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
        {leftImage && (
          <TouchableOpacity  {...props} onPress={onPress} style={{alignSelf:'center',marginRight: moderateScale(16)}}>
            <Image source={leftImageIcon} style={leftImageStyle} />
          </TouchableOpacity>
        )}
        {leftText && (
          <TouchableOpacity  {...props}>
            <Text style={leftTextStyle}>{leftTextTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 0.33, flexDirection: 'row' }}>
        {centerImage && (
          <Image source={centerImage} style={centerImageStyle} />
        )}
        {centerText && (
          <TouchableOpacity {...props}>
            <Text style={centerTextStyle}>{centerText}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 0.33, flexDirection: 'row', justifyContent:'flex-end'}}>
        {rightImage && (
          <Image source={rightImageIcon} style={rightImageStyle} />
        )}
        {rightText && (
          <TouchableOpacity {...props}>
            <Text style={rightTextStyle}>{rightTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  imagesize: {
    height: moderateScale(width / 20,),
    width: moderateScale(width / 20,),
    marginVertical: moderateScaleVertical(10),
    marginLeft: moderateScale(20),
    resizeMode: 'contain',
  },

})

       


export default Header