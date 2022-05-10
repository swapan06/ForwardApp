import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
  descriptionView:{
    backgroundColor: colors.greyF,
    height: moderateScale(96),
    width: width - 24,
    margin: moderateScale(10),
    borderRadius: moderateScale(8),
    marginTop: moderateScale(16),
  },
  locationView:{
    backgroundColor: colors.sliderBGColor,
    height: width/3,
    height: moderateScale(48),
    width: width - 15,
    marginTop: moderateScale(16),
    borderRadius: moderateScale(8)
},
imageView: {
    marginLeft: moderateScale(16),
    marginTop: moderateScale(16),
    backgroundColor:colors.greyF,
    borderRadius: moderateScale(8),
    flexDirection:'row'
},
crossImage:{
    width: width / 18,
    height: width / 18,
    position: 'absolute',
    right: moderateScale(-10),
    top: 0
},
imageStyle: {
    height: width / 5,
    width: width / 5,
    borderRadius: moderateScale(8)
},
addImageView: {
    backgroundColor: colors.greyF,
    height: width / 5,
    width: width / 5,
    borderRadius: moderateScale(8),
    marginLeft: moderateScale(24),
    marginTop: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center'
},

 
 
  
})
export default styles