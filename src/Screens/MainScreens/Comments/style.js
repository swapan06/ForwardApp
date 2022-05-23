import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../style/colors';
const { width, height } = Dimensions.get('window');
import { moderateScale, moderateScaleVertical, textScale } from '../../../style/responsiveSize'

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    commentContainer: {
        width: width - 6,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    profilePhoto: {
        marginRight: moderateScale(16),
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: width / 2,
        resizeMode: 'cover',
        marginHorizontal: moderateScale(15)
    },
    nameContainer: {
        flex: 0.9,
        justifyContent: 'center'
    },
    name: {
        fontSize: textScale(16),
        color: colors.white,
    },
    description: {
        fontSize: textScale(13),
        color: colors.white,
        marginVertical: moderateScaleVertical(2)
    },
    uploadTime: {
        color: colors.white,
        fontSize: textScale(13),
        marginVertical: moderateScaleVertical(6),
    },
    divider: {
        marginVertical: moderateScaleVertical(10),
    },
    timeText: {
        fontSize: textScale(13),
        color: colors.disabledlight,
        marginHorizontal: moderateScale(15)
    },
    captionArea: {
        paddingVertical: moderateScaleVertical(12),
        paddingHorizontal: width / 20,
    },
    commentView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(12) : moderateScaleVertical(20)
    },
    timeview: {
        marginTop: moderateScale(4),
        marginHorizontal: moderateScale(55),
    },
    commentText: {
        color: colors.whiteSmokeColor,
        marginVertical: moderateScaleVertical(5),
        fontSize: textScale(13),
    },
    postButton: {
        flex: 0.2,
        backgroundColor: colors.redB,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
})
export default styles