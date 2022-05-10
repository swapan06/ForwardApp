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

    const onEditProfile = async () => {
        let apiData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
        }
        console.log("Editprofile api  data : ", apiData)

        actions.editProfile(apiData)
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
                    <ButtonComponent buttonText={strings.SAVE_CHANGES} textColor={colors.white} onPress={onEditProfile} />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default EditProfile