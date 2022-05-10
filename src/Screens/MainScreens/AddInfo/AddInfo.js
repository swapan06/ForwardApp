import React, { useState } from 'react'
import { View, Text, Image, KeyboardAvoidingView, Platform, ScrollView,TouchableOpacity ,Alert} from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import Header from '../../../Components/Header'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import { commonstyles } from '../../../style/commonStyles'
import { moderateScaleVertical, height } from '../../../style/responsiveSize'
import ButtonComponent from '../../../Components/button'
import colors from '../../../style/colors'
import styles from './style'
import TextInputComponent from '../../../Components/TextInput'
import ImageCropPicker from 'react-native-image-crop-picker'



const AddInfo=({ navigation ,route})=> {
    const image = route?.params?.image;
    console.log("Selected image is : ", image);
    const [allValues, setAllValues] = useState({
        description: '',
        location: '',
        post: [],
        imageType: null,
    });
    const { description, location, post, imageType } = allValues
    const changeHandler = (val) => {
        setAllValues (allValues => ({ ...allValues, ...val }));
    }
    const launchCamera = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    const launchGallery = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then(res => {
                changeHandler({ post: post.concat(res.path || res.sourceURL) });
                console.log('post', post);
            });
    }
    const selectImage = () =>
        Alert.alert(
            "Upload Image",
            "Choose an option",
            [
                {
                    text: "Camera",
                    onPress: launchCamera
                },
                {
                    text: "Gallery",
                    onPress: launchGallery,

                },
                { text: "Cancel", onPress: () => console.log("OK Pressed"), style: "cancel" }
            ]
        );
    return (
        <WrapperContainer>

            <Header leftImage={true}
                leftImageIcon={images?.arrow}
                leftText={true}
                leftTextTitle={strings.ADD_INFO}
                leftTextStyle={commonstyles.leftTextStyle}
                onPress={() => navigation.goBack()} />
            <ScrollView >
            <View style={{ flexDirection: 'row', }}>
                    <View style={styles.imageView}>
                        <Image source={image} style={styles.imageStyle} />
                    </View>
                    {post?post.map((element, index) => {
                        return (
                        <View style={styles.imageView}>
                            <Image source={{uri: element}} style={styles.imageStyle} />
                            <TouchableOpacity>
                            <Image source={images?.cross} style={styles.crossImage}/>
                            </TouchableOpacity>
                           
                        </View>
                        )
                    }) : null
                    }
                    <TouchableOpacity style={styles.addImageView} onPress={selectImage}>
                        <Image source={images.addicon} style={styles.addImage} />
                    </TouchableOpacity>
                </View>
                    <View style={styles.descriptionView}>
                        <TextInputComponent
                            viewstyle={styles.inputView}
                            placeholder={strings.WRITE_DESCRIPTION}
                            placeholderTextColor={colors.whiteOpacity50}
                            value={description}
                            onchangetext={(description) => changeHandler({ description })}
                        />
                    </View>
                    <View style={styles.locationView}>
                        <TextInputComponent
                            placeholder={strings.ADD_LOCATION}
                            placeholderTextColor={colors.whiteOpacity50}
                            value={location}
                            onChangetext={(location) => changeHandler({ location })}
                        />
                    </View>
            </ScrollView>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(35) : moderateScaleVertical(20) }} >
                    <ButtonComponent buttonText={strings.POST} textColor={colors.white} />
                </View>
            </KeyboardAvoidingView>

        </WrapperContainer>


    )
}

export default AddInfo