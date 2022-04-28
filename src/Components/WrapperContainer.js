import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import colors from '../style/colors';

import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

import strings from '../constants/lang';

const WrapperContainer = ({
  children,
  bgColor = colors.solidgrey,
  statusBarColor = colors.solidgrey,
  barStyle = 'light-content',
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{backgroundColor: bgColor, flex: 1}}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);