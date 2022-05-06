import React, { useState } from 'react'
import { View, Platform, KeyboardAvoidingView, ScrollView } from 'react-native'
import { moderateScale, moderateScaleVertical } from '../../../style/responsiveSize'
import strings from '../../../constants/lang'
import TextInputComponent from '../../../Components/TextInput'
import ButtonComponent from '../../../Components/button'
import WrapperContainer from '../../../Components/WrapperContainer'
import Header from '../../../Components/Header'
import { images } from '../../../constants/images'
import styles from './style'
import colors from '../../../style/colors'
import { useSelector } from 'react-redux'
import actions from '../../../redux/actions'



function ChangePassword({ navigation }) {
    const userStatus = useSelector(state => state.userStatus.userData);
    console.log(" change password", userStatus)
    const [state, setState] = useState({
        password: '',
        currentpassword: '',
    })

    const { password, currentpassword } = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const changePassword = async () => {
        let apiData = {
            user_id: userStatus?.id,
            password: password,
            current_password: currentpassword,
        }
        console.log("Updata Password data : ", apiData)
        try {
            const res = await actions.changePassword(apiData)
            console.log("updatepassword api res_+++++", res)
            alert("Updatepassword successfully....!!!")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }


    return (
        <WrapperContainer>
            <Header leftImage={true}
                leftImageIcon={images?.arrow}
                leftText={true}
                leftTextTitle={strings.CHANGE_PASSWORD}
                leftTextStyle={styles.leftTextStyle}
                onPress={() => navigation.goBack()} />
            <ScrollView>
                <View style={{ marginHorizontal: moderateScale(15) }}>
                    <View style={{ marginVertical: moderateScale(20) }}>
                        <TextInputComponent
                            viewstyle={styles.inputview}
                            placeholder={strings.CURRENT_PASSWORD}
                            placeholderTextColor={colors.disabledlight}
                            value={currentpassword}
                            rightText={true}
                            righttext={strings.SHOW}
                            onchangetext={(currentpassword) => updateState({ currentpassword})}
                        />
                    </View>
                    <View >
                        <TextInputComponent
                            viewstyle={styles.inputview}
                            placeholder={strings.PASSWORD}
                            placeholderTextColor={colors.disabledlight}
                            value={password}
                            rightText={true}
                            righttext={strings.SHOW}
                            onchangetext={(password) => updateState({ password })}
                        />
                    </View>
                </View>
            </ScrollView>

            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }} >
                    <ButtonComponent buttonText={strings.SAVE} textColor={colors.white} onPress={changePassword} />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default ChangePassword