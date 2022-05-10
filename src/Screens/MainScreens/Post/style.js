import { StyleSheet, Dimensions } from 'react-native'
import { color } from 'react-native-elements/dist/helpers';
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
    headTextStyle: {
        fontSize: textScale(16),
        color: colors.white,
        fontWeight: '600'
    },
    detailView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.greyF,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop:moderateScale(24),
        height: moderateScale(50),
        alignItems: 'center'
      },
      galleryText:{
          fontSize:textScale(16),
          color:colors.white,
          fontWeight:'bold',
          marginLeft:moderateScale(-32)
      },
      recentText:{
          fontSize:textScale(14),
          color:colors.white,
          paddingHorizontal:moderateScale(8)

      },
      downIcon:{
        marginRight:moderateScale(-10)
      },
      galleryPhoto: {
        width: width / 3,
        height: width / 3,
      },
      firstImage: {
        width: width,
        height: width,
      },
      cameraIcon:{
        width: width / 6,
        height: width / 6,
        marginBottom: moderateScale(28),
        position: 'absolute',
        right: moderateScale(16),
        bottom: 0
      },
  
})
export default styles