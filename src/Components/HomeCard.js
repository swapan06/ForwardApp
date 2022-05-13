import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
import React from 'react';
import {
    height,
    moderateScale,
    moderateScaleVertical,
    textScale,
    width,
} from '../style/responsiveSize';
import { images } from '../constants/images';
import strings from '../constants/lang';
import colors from '../style/colors';

export default function HomeCard({
    userProfile = '',
    menuButton = '',
    postImage = '',
    name = false,
    userName = '',
    lastName ='',
    location = '',
    caption ='',
    postTime='',
    commentCount='',
    likesCount='',
    onPress,
   
}) {
    return (
        <View style={styles.viewContainer}>
            <View style={{ flexDirection: 'row', paddingTop: moderateScale(10), justifyContent: "space-between", alignItems: 'center', marginHorizontal: moderateScale(16) }}>
                <View style={{ flexDirection: "row" }}>
                    <View >
                        <Image source={userProfile} style={styles.userProfile} />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: moderateScale(10) }}>
                        <Text style={{ color: colors.white, fontSize: textScale(16) }} >{userName}</Text>
                        <Text style={{ color: '#AEAEAE' }} >{location}  </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', height: height / 20 }}>
                    <Image source={images?.dots}/>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={onPress}>
                <Image source={{uri:postImage}} style={styles.postStyle} />
                </TouchableOpacity>
            </View>
            <View style={{
                marginHorizontal: moderateScale(16),
                marginVertical: moderateScale(10)
            }}>
                <Text style={{ color: colors.white }}>{caption}</Text>
                <Text style={{ color: colors.whiteOpacity50 ,marginTop:moderateScale(10)}}>{postTime}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: moderateScaleVertical(16),
                    flexWrap: "wrap",
                    paddingBottom: moderateScale(12)
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: colors.white }}>{strings.COMMENTS} {commentCount}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: colors.white }}>{strings.LIKES} {likesCount} </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={images?.direction} style={{ height: 10 }} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        width: moderateScale(width - 48),
        alignSelf: 'center',
        marginVertical: moderateScaleVertical(10),
        marginHorizontal: moderateScale(16),
        backgroundColor: '#4C4C4C',
        borderRadius: moderateScale(10),


    },
    userProfile: {
        height: moderateScale(width / 10),
        width: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
    },

    textStyle: {
        fontSize: textScale(13),
        color: 'red',
    },
    postStyle: {
        width: moderateScale(width - 68),
        height: moderateScale(width - 40),
        marginVertical: moderateScaleVertical(16),
        alignSelf: 'center',
    },
});