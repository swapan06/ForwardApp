import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
    welcomeText:{
        fontSize:textScale(24),
        textAlign:'left',
        color:colors.white,
        fontWeight:'bold',
        marginLeft:moderateScale(20)
    },
    continueText:{
        fontSize:15,
        textAlign:'left',
        marginLeft:moderateScale(20),
        color:colors.greyX,
        lineHeight:moderateScale(32),
        marginBottom:moderateScale(32)
    },
  
    
})
export default styles