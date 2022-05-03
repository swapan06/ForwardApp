import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { images } from '../constants/images';
import colors from '../style/colors';
import { moderateScale, moderateScaleVertical, textScale, width } from '../style/responsiveSize';



function Header ({
  Title = '',
  color = '',
  style,
  right = false,
  rightTitle = '',
  left = false,
  onPress = '',
}) {
  return (
   
    <View
    style={{
      marginHorizontal: moderateScale(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
    {left && (
      <TouchableOpacity onPress={onPress}>

        <Image source={images?.arrow} style={styles.imagesize} />
      

      </TouchableOpacity>
    )}
    <Text
      style={{
        fontSize: textScale(20),
        color: colors.black,
      }}>
      {Title}
    </Text>
    {right && (
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontSize: textScale(20),
            color: colors.black,
          }}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    )}
  </View>
);
}

const styles = StyleSheet.create({
imagesize: {
  height: moderateScale(width / 20 ,),
  width: moderateScale(width / 20,),
  marginVertical: moderateScaleVertical(10),
  marginLeft: moderateScale(10),
  resizeMode: 'contain'
}
})
       


export default Header