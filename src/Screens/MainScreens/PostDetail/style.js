import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, moderateScaleVertical, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
  userprofile:{
   
        height: moderateScale(40),
        width: moderateScale(40),
        marginLeft: 20,
        borderRadius: moderateScale(20)
  },
  username:{
      fontSize:textScale(16),
      color:colors.white,
      marginHorizontal:moderateScale(20)
  },
  username1:{
    fontSize:textScale(13),
    color:colors.white,
    marginHorizontal:moderateScale(20)
   
},
crossimg:{
    marginHorizontal:moderateScale(80)
},
loremtext:{
    fontSize:textScale(15),
    color:colors.white,
    marginHorizontal:moderateScale(20)
},
timeText:{
    fontSize:textScale(13),
    color:colors.white,
    marginHorizontal:moderateScale(20),
    marginVertical:moderateScaleVertical(5)
},
bottomView:{flex:0.1 ,
     marginTop:moderateScale(570)},

})
export default styles