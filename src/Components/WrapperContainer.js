import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import colors from '../style/colors';
import Loader from './Loader';

const WrapperContainer = ({
  children,
  bgColor = colors.solidgrey,
  statusBarColor = colors.solidgrey,
  barStyle = 'light-content',
  isLoading='',
  withModal='',
 
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <Loader isLoading={isLoading} withModal={withModal} />
      <View style={{backgroundColor: bgColor, flex: 1, }}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);