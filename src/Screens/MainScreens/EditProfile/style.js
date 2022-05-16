import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, textScale , moderateScaleVertical } from '../../../style/responsiveSize'



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
    editContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScaleVertical(20)
    },
    editButton:{
        height: moderateScale(width / 20),
        width: moderateScale(width / 20),
        alignSelf: 'flex-end',
        marginTop: moderateScaleVertical(-30),
        marginLeft: moderateScale(75),
    },




})
export default styles