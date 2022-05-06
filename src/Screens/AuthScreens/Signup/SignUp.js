import React, { useState } from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import styles from './style'
import Header from '../../../Components/Header'
import ButtonComponent from '../../../Components/button'
import colors from '../../../style/colors'
import { moderateScale, moderateScaleVertical } from '../../../style/responsiveSize'
import TextInputComponent from '../../../Components/TextInput'
import navigationStrings from '../../../navigation/navigationStrings'
import CountryCode from '../../../Components/CountryCode'
import actions from '../../../redux/actions'
import { commonstyles } from '../../../style/commonStyles'
import validator from '../../../utils/Validation'
import { showError } from '../../../utils/helperFunctions'


function SignUp({ navigation }) {
  const [signUpData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phoneCode: '+91',
    countryCode: 'IN',
    deviceToken: '132456',
    deviceType: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
    password: ''
  })

  const { firstName, lastName, email, phone, phoneCode, countryCode, deviceToken, deviceType, password } = signUpData;
  const updateState = data => setSignupData(state => ({ ...signUpData, ...data }));

  const isValidData = () => {
    const error = validator({ firstName, lastName, email, phone, password });
    if (error) {
      showError(error)
      return;
    }
    return true;
  };
  const onSignup = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    let apiData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      phone_code: phoneCode,
      country_code: countryCode,
      device_token: deviceToken,
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password,

    }
    console.log("sending singup data", apiData)


    try {
      const res = await actions.signUp(apiData)
      console.log("singnup api res_+++++", res)
      alert("User signup successfully....!!!")
      navigation.navigate(navigationStrings.SIGNUP1, { data: res?.data })
    } catch (error) {
      console.log("error raised", error)
      alert(error?.message)
    }
  }

  return (
    <WrapperContainer>
      <Header
        leftImage={true}
        leftImageIcon={images?.arrow}
        onPress={() => { navigation.navigate(navigationStrings.LOGIN) }} />
      <ScrollView scrollEnabled={false}>
        <View >
          <View>
            <Text style={commonstyles.welcomeText}>{strings.CREATE_ACCOUNT}</Text>
            <Text style={commonstyles.continueText2}>{strings.CREATE_CONTINUE}</Text>
          </View>
          <View style={{ marginHorizontal: moderateScale(10) }}>
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
                  value={null}
                  onchangetext={event => updateState({ lastName: event })}
                />
              </View>

            </View>
            <View style={{ marginVertical: moderateScale(16) }}>
              <TextInputComponent
                viewstyle={styles.inputview}
                placeholder={strings.EMAIL}
                placeholderTextColor={colors.disabledlight}
                value={null}
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
                  value={null}
                  onchangetext={event => updateState({ phone: event })}
                />
              </View>

            </View>
            <View style={{ marginVertical: moderateScale(16) }}>
              <TextInputComponent
                viewstyle={styles.inputview}
                placeholder={strings.PASSWORD}
                placeholderTextColor={colors.disabledlight}
                value={null}
                rightText={true}
                righttext={strings.SHOW}
                onchangetext={event => updateState({ password: event })}
              />
            </View>
            <View >
              <TextInputComponent
                viewstyle={styles.inputview}
                placeholder={strings.CONFIRM_PASSWORD}
                placeholderTextColor={colors.disabledlight}
                value={null}
                rightText={true}
                righttext={strings.SHOW}
                onchangetext={event => updateState({ password: event })}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
          <ButtonComponent buttonText={strings.NEXT} textColor={colors.white} onPress={onSignup} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>

  )
}

export default SignUp