import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
    leftTextStyle: {
        fontSize: textScale(16),
        color: colors.white
    },

    imageprofile: {
        height: moderateScale(width / 3.5),
        width: moderateScale(width / 3.5),
        borderRadius: moderateScale(width / 7),
    },




})
export default styles