import React from 'react';
import {Image, StyleSheet, TextInput, View,Text,TouchableOpacity,} from 'react-native';
import colors from '../style/colors';

import {moderateScale, moderateScaleVertical} from '../style/responsiveSize';


const TextInputComponent = ({
  image = '',
  img = '',
  placeholder = '',
  placeholderTextColor = '',
  leftIcon = false,
  rightIcon = false,
  onchangetext= () =>{},
  keyboardtype,
  value='',
  viewstyle,
  rightText=false,
  righttext='',
  showpass,
  ...props
}) => {
  return (
    <View style={{...styles.viewcss,...viewstyle}}>
      {leftIcon && (
        <View style={{flex: 0.15}}>
          <Image source={image} style={styles.image} />
        </View>
      )}

      <View style={{flex: 1, marginLeft: moderateScale(16)}}>
        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={styles.inputtext}
          keyboardType={keyboardtype}
          value={value}
          onChangeText={onchangetext}
          keyboardAppearance={'dark'}
        />
      </View>
      {rightText && (
        <View style={{flex: 0.15}}>
          <TouchableOpacity activeOpacity={1}onPress={showpass}>
          <Text style={{color:colors.disabledlight}}>{righttext}</Text>
          </TouchableOpacity>
        </View>
      )}

      {rightIcon && (
        <View style={{flex: 0.15}}>
          <Image source={img} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    marginHorizontal: moderateScale(5),
  },
  viewcss: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greyF,
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(10),
    height: moderateScale(50),
  },
  inputtext: {
    paddingVertical: moderateScaleVertical(10),
    color: colors.white,
    flex: 1,
  },
});

export default TextInputComponent;