import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import responsiveSize, { moderateScale, moderateScaleVertical, textScale } from '../../../style/responsiveSize'

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    commentContainer: {
        width: width - 46,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: moderateScale(10)
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

    },
    location: {
        fontSize: textScale(13),
        color: colors.white,
        marginVertical: moderateScaleVertical(8)
    },
    divider: {
        marginTop: moderateScale(15)
    },
    uploadTimeTxt: {
        fontSize: textScale(13),
        color: colors.white,
        marginVertical: moderateScaleVertical(6)
    },
    captionArea: {

        paddingVertical: moderateScaleVertical(12),
        paddingHorizontal: width / 20,
    },
    commentView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(25) : moderateScaleVertical(20)
    }
})
export default styles