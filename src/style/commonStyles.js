import {StyleSheet} from 'react-native';
import colors from '../style/colors';
import {height, moderateScale, moderateScaleVertical, textScale, width} from '../style/responsiveSize';
export const commonstyles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: colors.disabledlight,
        borderTopLeftRadius: moderateScale(8),
        borderTopRightRadius: moderateScale(8),
        height: moderateScale(80),
        position: 'absolute',
        borderTopWidth: moderateScale(0),
      },
      tabBariconStyle:{
        resizeMode: "contain",
        height: moderateScale(height - height / 1.06),
        width: moderateScale(width - width / 1.06),
      }
});