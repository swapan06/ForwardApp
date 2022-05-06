import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
   
    textinputbg:{
        backgroundColor:colors.disabledlight,
    },
    otpinput:{
        padding:moderateScale(30)
    },
    
})
export default styles