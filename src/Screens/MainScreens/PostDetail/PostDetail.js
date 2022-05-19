import React from 'react';
import { images } from '../../../constants/images';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../PostDetail/style';
import ButtonComponent from '../../../Components/button';
import strings from '../../../constants/lang';
import colors from '../../../style/colors';


const PostDetail = ({ navigation, route }) => {
    const image = route?.params?.image;
    const data = route?.params?.item;
    return (
        <View style={styles.screen}>
            <ImageBackground source={{ uri: image }} style={styles.imgBackground}>
                <SafeAreaView style={{ justifyContent: 'space-between', flex: 1 }}>

                    {/* ------------------------Profile Pic, name & location----------------------------- */}
                    <View style={styles.locationContainer}>
                        <View style={styles.profilePhoto}>
                            <Image source={{ uri: data?.item?.user?.profile }} style={styles.profilePic} />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{data?.item?.user?.first_name}{data?.item?.user?.last_name}</Text>
                            <Text style={styles.location}>{data?.item?.location_name}</Text>
                        </View>
                        <TouchableOpacity style={styles.optionsBox} onPress={() => navigation.goBack()}>
                            <Image source={images.cross} style={styles.optionsImg} /> 
                        </TouchableOpacity>
                    </View>

                    {/* ------------------------Caption Area with View Map Button----------------------------- */}
                    <View style={styles.captionArea}>
                        <Text style={styles.captionTxt}>{data?.item?.description}</Text>
                        <Text style={styles.uploadTimeTxt}>{data?.item?.time_ago}</Text>
                        <ButtonComponent buttonText={strings.VIEW_MAP} textColor={colors.white} />
                    </View>

                </SafeAreaView>
            </ImageBackground>
        </View>

    );
};


export default PostDetail;