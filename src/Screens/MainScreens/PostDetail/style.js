import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, moderateScaleVertical, textScale } from '../../../style/responsiveSize'



const styles = StyleSheet.create({
    imgBackground: {
        height: height,
        width: width,
        resizeMode: 'stretch',
        opacity: 0.9,
    },
    screen: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    locationContainer: {
        width: width - 46,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    profilePhoto: {
        marginRight: moderateScale(16),
        // flex:0.12
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: width / 2,
        resizeMode: 'cover',
    },
    nameContainer: {
        flex: 0.9,
        justifyContent: 'center'
    },
    name: {
        fontSize: textScale(16),
        color: colors.white,
        fontWeight:'bold'
    },
    location: {
        fontSize: textScale(13),
        color: colors.white,
        // paddingTop:moderateScale(1)
    },
    optionsBox: {
        flex: 0.1,
        justifyContent: 'center',
    },
    optionsImg: {
        alignSelf: 'flex-end'
    },
    captionArea: {
        paddingVertical: moderateScaleVertical(12),
        paddingHorizontal: width / 20,
    },
    captionTxt: {
        // fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(15),
        lineHeight: moderateScale(20),
        color: colors.white,
        marginBottom: moderateScale(10)
    },
    uploadTimeTxt: {
    //     fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(13),
        color: colors.white,
        marginBottom: moderateScale(12)
    },
  
   
})
export default styles