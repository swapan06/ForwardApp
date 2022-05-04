import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, textScale,moderateScaleVertical } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
    leftTextStyle:{
        fontSize: textScale(16),
        color: colors.white
      },
      btnview:{
        flexDirection: 'row',
        marginVertical:moderateScaleVertical(15),
        alignItems:"center",
        marginLeft:moderateScale(20)
    },
    profileText:{
      fontSize:textScale(15),
      color:colors.white,
    },
  
})
export default styles