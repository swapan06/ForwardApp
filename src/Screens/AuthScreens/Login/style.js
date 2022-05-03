import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height - height / 2.5,


    },
    logoImage: {
        width: moderateScale(width / 2.5),
        height: moderateScale(width / 2.5),
        resizeMode: 'contain',
        marginTop: moderateScale(50),
    },
    loginText: {
        fontSize: 13,
        color: colors.disabledlight,
        lineHeight: moderateScale(20),
        marginRight: moderateScale(23),
        marginLeft: moderateScale(23),
        marginTop: moderateScale(54),
        textAlign: 'center'
    },
    orText: {
        color: colors.white,
        fontSize: textScale(16),
        textAlign: 'center'
    },
    textstyle: {
        fontSize: textScale(14),
        color: colors.white,
        fontWeight:'bold'
    },
    signupBtn: {
        fontSize:textScale(14),
        color:colors.bottomBarGradientA,
        fontWeight:'bold'

    },


})
export default styles