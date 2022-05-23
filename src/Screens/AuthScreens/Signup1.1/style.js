import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import { moderateScale, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({

    textinputbg: {
        backgroundColor: colors.disabledlight,
    },
    otpinput: {
        padding: moderateScale(30)
    },
    smoothinputView: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: moderateScale(20),
        marginVertical: moderateScale(16)
    },
    otpView:{
        marginHorizontal: moderateScale(20),
        color:colors.redC,
        fontSize:textScale(13),
        fontWeight:'bold'
    },
   
})
export default styles