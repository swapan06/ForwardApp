import React from 'react';
import { images } from '../../../constants/images';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../PostDetail/style';
import ButtonComponent from '../../../Components/button';
import strings from '../../../constants/lang';
import colors from '../../../style/colors';

// create a component
const PostDetail = ({ navigation, route }) => {
    const profile = route?.params?.postDetail?.item?.user?.profile;
    const userName = route?.params?.postDetail?.item?.user?.first_name;
    const lastName = route?.params?.postDetail?.item?.user?.last_name;
    const image = route?.params?.postDetail?.item?.images?.file[0];
    const location = route?.params?.postDetail?.item?.location_name;
    const description = route?.params?.postDetail?.item?.description;
    const postTime = route?.params?.postDetail?.item?.time_ago;
    return (
        <View style={styles.screen}>
            <ImageBackground source={{uri:image}} style={styles.imgBackground}>
                <SafeAreaView style={{ justifyContent: 'space-between', flex: 1 }}>

                    {/* ------------------------Profile Pic, name & location----------------------------- */}
                    <View style={styles.locationContainer}>
                        <View style={styles.profilePhoto}>
                            <Image source={{uri:profile}} style={styles.profilePic} />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{userName} {lastName}</Text>
                            <Text style={styles.location}>{location}</Text>
                        </View>
                        <TouchableOpacity style={styles.optionsBox} onPress={() => navigation.goBack()}>
                            <Image source={images.cross} style={styles.optionsImg} />
                        </TouchableOpacity>
                    </View>
                    
                    {/* ------------------------Caption Area with View Map Button----------------------------- */}
                    <View style={styles.captionArea}>
                        <Text style={styles.captionTxt}>{description}</Text>
                        <Text style={styles.uploadTimeTxt}>{postTime}</Text>
                     <ButtonComponent buttonText={strings.VIEW_MAP} textColor={colors.white} />
                    </View>

                </SafeAreaView>
            </ImageBackground>
        </View>

    );
};


export default PostDetail;