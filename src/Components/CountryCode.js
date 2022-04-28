import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
import { images } from '../constants/images';
import colors from '../style/colors';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../style/responsiveSize';
function CountryCode() {
  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');

  const onSelect = country => {
    setCountryFlag(country.cca2);
    setCountryCode(country.callingCode[0]);
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4C4C4C',
          borderRadius: moderateScaleVertical(10),
          height: moderateScaleVertical(50),
        //   marginTop: moderateScaleVertical(2),
          // flex: 0.6,
          // width:moderateScale(width/4.4),
          marginLeft: moderateScale(10),
        }}>
        <CountryPicker
          onSelect={onSelect}
          visible={false}
          countryCode={countryFlag}
          withCallingCode={true}
          withCallingCodeButton={countryCode}
          theme={{onBackgroundTextColor: colors?.white,backgroundColor:colors?.greyF}}
        />
        <Image
          source={images.downarrow}
          style={{
            height: moderateScale(width / 24),
            width: moderateScale(width / 24),
            resizeMode: 'contain',
            marginLeft: moderateScaleVertical(15),
          }}
        />
      </View>
    </>
  );
}
const style = StyleSheet.create({});

export default CountryCode;