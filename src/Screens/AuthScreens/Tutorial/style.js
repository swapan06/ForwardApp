import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale ,textScale,moderateScaleVertical} from '../../../style/responsiveSize'



const styles = StyleSheet.create({
    tutorialContainer: {
        backgroundColor: colors.solidgrey,

    },
    slide: {
        height: height - height /3.9,
        backgroundColor: colors.greyF,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:moderateScale(57),
        marginBottom: moderateScale(108),
        marginLeft: moderateScale(24),
        marginRight:moderateScale(23),
        borderRadius: moderateScale(16)
    },
    imageStyle: {
        height: 245,
        marginBottom: 90

    },
    title: {
        fontSize: 22,
        color: colors.white,
        padding: 10
    },
    description: {
        fontSize: 13,
        color: colors.disabledlight,
        marginHorizontal: 48,
        textAlign: 'center',
    },
    startbtn:{
        fontSize:15,
         color: colors.white,
          lineHeight: 32
    },
    activedote:{
        height: moderateScale(4),
        width: moderateScale(20),
        right: moderateScale(110),
        backgroundColor:"red",
    },
    inactivedote:{
        width: moderateScale(30),
        height: moderateScale(4),
        backgroundColor: colors.white,
        right: moderateScale(110),
    },
    intobutton:{
        color:colors.white,
        fontSize:textScale(15),
        paddingTop:moderateScaleVertical(14),
        paddingRight:moderateScaleVertical(15)
    },


})
export default styles