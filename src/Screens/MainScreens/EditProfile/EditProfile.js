import React, { useState } from 'react'
import { View, Image, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView, ActionSheetIOS } from 'react-native'
import Header from '../../../Components/Header'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import styles from './style'
import TextInputComponent from '../../../Components/TextInput'
import CountryCode from '../../../Components/CountryCode'
import { moderateScale, moderateScaleVertical, width } from '../../../style/responsiveSize'
import colors from '../../../style/colors'
import ButtonComponent from '../../../Components/button'
import { useSelector } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker'
import actions from '../../../redux/actions'
import { singleImgUpload } from '../../../redux/actions/auth'





function EditProfile({ navigation }) {
    const userStatus = useSelector(state => state.userStatus.userData);
    console.log(userStatus, 'mudata>>>>>>>');
    const [countryCode, setCountryCode] = useState(userStatus?.phone_code);
    const [countryFlag, setCountryFlag] = useState(userStatus?.country_code);

    const onSelect = country => {
        setCountryFlag(country.cca2);
        setCountryCode(country.callingCode[0]);
    };
    const [isLoading, setIsLoading] = useState(true);
    const [state, setState] = useState({
        post: userStatus?.profile,
        firstName: userStatus?.first_name,
        lastName: userStatus?.last_name,
        email: userStatus?.email,
        phone: userStatus?.phone,
        profileImage: '',
        imageType: null,

    });

    const { firstName, lastName, email, phone, profileImage, post } = state;
    const updateState = (data) => setState(state => ({ ...state, ...data }));

    const onEditProfile = async () => {
        console.log("image", post)
        let form = new FormData();
        form.append('first_name', firstName);
        form.append('last_name', lastName);
        form.append('email', email);
        form.append('image', {
            uri: post,
            name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
            type: null,
        });

        console.log("udate profile API data : ", form)
        let header = { "Content-Type": "multipart/form-data" }
        actions.editProfile(form, header)
            .then(res => {
                console.log("Edit api res_+++++", res)
                alert("Updated Profile successfully....!!!")
                navigation.goBack();
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
    }


    const editImageUpload = (image) => {
        setIsLoading(true);

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
                console.log("edit image api res+++++", res)
                alert("edit image successfully....!!!")
                updateState({ post: res.data })
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
    }

    const onSelectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image, " edit image**");
            editImageUpload(image.path)
        });
    }


    return (
        <WrapperContainer>
            <Header leftImage={true}
                leftImageIcon={images?.arrow}
                leftText={true}
                leftTextTitle={strings.EDIT_PROFILE}
                leftTextStyle={styles.leftTextStyle}
                onPress={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.editContainer}>
                    <Image source={(post) ? { uri: post } : images.editimage} style={styles.imageprofile} />
                    <TouchableOpacity onPress={onSelectImage}>
                        <Image source={images.edit} style={styles.editButton} />
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
                    <ButtonComponent buttonText={strings.SAVE_CHANGES} textColor={colors.white} onPress={onEditProfile} />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default EditProfile