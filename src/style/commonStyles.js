import {StyleSheet} from 'react-native';
import colors from '../style/colors';
import {height, moderateScale, moderateScaleVertical, textScale, width} from '../style/responsiveSize';
export const commonstyles = StyleSheet.create({
  commontext: {
    color: colors.white,
    fontSize: textScale(24),
  },
});