import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, textScale,moderateScaleVertical } from '../../../style/responsiveSize'
const styles = StyleSheet.create({
    leftTextStyle: {
        color: colors.white,
        fontSize: textScale(16)
    },
    profileImageStyle: {
        height: height / 10,
        width: height / 10,
    },
    iconStyle: {
        height: moderateScale(40),
        width: moderateScale(40),
        marginHorizontal: 20,
        borderRadius: moderateScale(20)
    },
    mainView: {
        flexDirection: 'row',
        marginVertical: moderateScaleVertical(10),
    }
    ,
    notificationText: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    nameText: {
        fontSize: textScale(16),
        color: colors.lightred,

    },

    detailsText: {
        fontSize: textScale(16),
        color: colors.white,
    },
    timeText:{
        fontSize:textScale(12),
        color: colors.greyY
    }
})
export default styles