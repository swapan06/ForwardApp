import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, moderateScaleVertical, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
    leftTextStyle:{
        fontSize: textScale(16),
        color: colors.white
      },
      suggestText:{
        fontSize:textScale(15),
        color:colors.white,
      },
      mainContainer:{
        marginLeft:moderateScale(30),
        marginVertical:moderateScaleVertical(20),
      },
      flatText:{
        fontSize:textScale(15),
        color:colors.whiteY,
        marginVertical:moderateScaleVertical(10)
      },
      
})
export default styles