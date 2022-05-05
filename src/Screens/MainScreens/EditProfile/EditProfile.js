import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import Header from '../../../Components/Header'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import styles from './style'
import TextInputComponent from '../../../Components/TextInput'
import CountryCode from '../../../Components/CountryCode'
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../../style/responsiveSize'
import colors from '../../../style/colors'
import ButtonComponent from '../../../Components/button'
import { useSelector } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker'
// import { API_BASE_URL } from '../../../config/urls'
// import axios from 'axios'



function EditProfile({ navigation }) {
    const userStatus = useSelector(state => state.userStatus.userData);
    console.log(userStatus, 'mudata>>>>>>>');
    const [countryCode, setCountryCode] = useState(userStatus?.phone_code);
    const [countryFlag, setCountryFlag] = useState(userStatus?.country_code);

    const onSelect = country => {
        setCountryFlag(country.cca2);
        setCountryCode(country.callingCode[0]);
    };
    const [state, setState] = useState({
        firstName: userStatus?.first_name,
        lastName: userStatus?.last_name,
        email: userStatus?.email,
        phone: userStatus?.phone,
        profileImage: '',
        imageType: null,

    });

    const { firstName, lastName, email, phone, profileImage } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));

    const onSelectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image)
            updateState({
                profileImage: image?.sourceURL || image?.path,
                imageType: image?.mime
            })
            // imageUpload(image.path)
        });
    }
    //     const imageUpload = (imagePath) => {
    //         const imageData = new FormData()
    //         imageData.append("image", {
    //             uri: imagePath,
    //             name: 'image.png',
    //             type: 'image/png'
    //         })
    //         console.log("form data", imageData)
    //         axios({
    //             method: 'post',
    //             url: API_BASE_URL,
    //             data:imageData,
    //         })
    //             .then(function (response) {
    //                 console.log("image upload successfully", response)
    //             }).then((error) => {
    //                 console.log("error raised", error)
    //             })
    // }



    return (
        <WrapperContainer>
            <Header leftImage={true}
                leftImageIcon={images?.arrow}
                leftText={true}
                leftTextTitle={strings.EDIT_PROFILE}
                leftTextStyle={styles.leftTextStyle}
                onPress={() => navigation.goBack()} />
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: moderateScaleVertical(20) }}>
                    <Image source={(profileImage) ? { uri: profileImage } : images.editimage} style={styles.imageprofile} />
                    <TouchableOpacity onPress={onSelectImage}>
                        <Image
                            source={images.edit}
                            style={{
                                height: moderateScale(width / 20),
                                width: moderateScale(width / 20),
                                alignSelf: 'flex-end',
                                marginTop: moderateScaleVertical(-30),
                                marginLeft: moderateScale(75),

                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: moderateScale(15) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flex: 0.5 }}>
                            <TextInputComponent
                                viewstyle={styles.inputview}
                                placeholder={strings.FIRST_NAME}
                                placeholderTextColor={colors.disabledlight}
                                value={firstName}
                                onchangetext={event => updateState({ firstName: event })}

                            />
                        </View>
                        <View style={{ flex: 0.5 }}>

                            <TextInputComponent
                                viewstyle={styles.inputview}
                                placeholder={strings.LAST_NAME}
                                placeholderTextColor={colors.disabledlight}
                                value={lastName}
                                onchangetext={event => updateState({ lastName: event })}
                            />
                        </View>

                    </View>
                    <View style={{ marginVertical: moderateScale(16) }}>
                        <TextInputComponent
                            viewstyle={styles.inputview}
                            placeholder={strings.EMAIL}
                            placeholderTextColor={colors.disabledlight}
                            value={email}
                            onchangetext={event => updateState({ email: event })}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flex: 0.4 }}>
                            <CountryCode />
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <TextInputComponent
                                placeholder={strings.PHONE_NO}
                                viewstyle={styles.inputview}
                                placeholderTextColor={colors.disabledlight}
                                keyboardtype={'numeric'}
                                maxLength={10}
                                value={phone}
                                onchangetext={event => updateState({ phone: event })}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }} >
                    <ButtonComponent buttonText={strings.SAVE_CHANGES} textColor={colors.white} />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default EditProfile