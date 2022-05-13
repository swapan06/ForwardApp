import React, { useState } from 'react'
import { View, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Alert , Text} from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import Header from '../../../Components/Header'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import { commonstyles } from '../../../style/commonStyles'
import { moderateScaleVertical } from '../../../style/responsiveSize'
import ButtonComponent from '../../../Components/button'
import colors from '../../../style/colors'
import styles from './style'
import TextInputComponent from '../../../Components/TextInput'
import ImageCropPicker from 'react-native-image-crop-picker'
import actions from '../../../redux/actions'
import navigationStrings from '../../../navigation/navigationStrings'



const AddInfo = ({ navigation, route }) => {
    console.log(navigation,"navigation>navigation");
    const image = route?.params?.image;
    console.log("Selected image is : ", image);
    const [allValues, setAllValues] = useState({
        description: '',
        location: '',
        post: [image],
        imageType: null,
    });
    const { description, location, post, imageType } = allValues
    const changeHandler = (val) => {
        setAllValues(allValues => ({ ...allValues, ...val }));
    }
    // -------------launch gallery and camera--------
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
                imageAdd(res.path)
                console.log('post', post);
            });
    }
    // ------------Alert-------------
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
    //  -----------Cancel function---------
    const cancelImage = (index) => {

        console.log("index>>>>", index)
        let newArray = [...post];

        newArray.splice(index, 1);

        changeHandler({ post: newArray });

    }
    // -------------iamge upload api -------------
    const imageAdd = (image) => {
        let apiData = new FormData()
        apiData.append('image', {
            uri: image,
            name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
            type: 'image/jpeg',
        })
        console.log("single pic API data : ", apiData)
        let header = { "Content-Type": "multipart/form-data" }
        actions.singleImgUpload(apiData, header)
            .then(res => {
                console.log(" image api res_+++++", res)
                alert(" api hit successfully....!!!")
                changeHandler({ post: post.concat(res.data) })
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
    }

    const onPost = () => {
        let apiData = new FormData();
        console.log("ddjhdsdhhds", post)
        post.map((item, index) => {
            console.log('item', item);
            apiData.append('images[]',item)
        });
        apiData.append('description', description)
        apiData.append('latitude', '3.222')
        apiData.append('longitude', '9.45682')
        apiData.append('location_name', location)
        apiData.append('type', 1)

        console.log("Post API data : ", apiData)
        let header = { "Content-Type": "multipart/form-data" }
        actions.postSend(apiData, header)
            .then(res => {
                console.log("post api res_+++++", res)
                navigation.navigate(navigationStrings.HOME)
                alert("post api hit successfully....!!!")
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
        // navigation.navigate(navigationStrings.HOME)
    }
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
                    <ScrollView horizontal={true}
                        bounces={false}
                        showsHorizontalScrollIndicator={false}>

                        {post ? post.map((element, index) => {

                            return (
                                <View style={styles.imageView}>
                                    <Image source={{ uri: element }} style={styles.imageStyle} />
                                    <TouchableOpacity onPress={() => cancelImage(index)}>
                                        <Image source={images?.cross}
                                            style={styles.crossImage} />
                                    </TouchableOpacity>

                                </View>
                            )
                        }) : null
                        }
                        <TouchableOpacity style={styles.addImageView} onPress={selectImage}>
                            <Image source={images.addicon} style={styles.addImage} />
                        </TouchableOpacity>
                    </ScrollView>
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
                        onchangetext={(location) => changeHandler({ location })}
                    />
                </View>
            </ScrollView>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(35) : moderateScaleVertical(20) }} >
                    <ButtonComponent buttonText={strings.POST} textColor={colors.white} onPress={onPost} />
                 </View>
            </KeyboardAvoidingView>

        </WrapperContainer>
    )
}

export default AddInfo