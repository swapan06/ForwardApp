import { StyleSheet } from 'react-native';
import colors from '../style/colors';
import { moderateScale, moderateScaleVertical, textScale } from '../style/responsiveSize';

export const commonstyles = StyleSheet.create({
  commontext: {
    color: colors.white,
    fontSize: textScale(24),
  },
  leftTextStyle: {
    color: colors.white,
    fontSize: textScale(16)
  },
  welcomeText: {
    fontSize: textScale(24),
    textAlign: 'left',
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: moderateScale(20)
  },
  continueText: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: moderateScale(20),
    color: colors.bottomBarGradientA,
    lineHeight: moderateScale(32)
  },
  continueText2: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: moderateScale(20),
    color: colors.greyX,
    lineHeight: moderateScale(32),
    marginBottom: moderateScale(32)
  },
  buttonView: {
    paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20)
  },
});