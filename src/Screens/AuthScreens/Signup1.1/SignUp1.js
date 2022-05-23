import React, { useState } from 'react'
import { Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import Header from '../../../Components/Header'
import ButtonComponent from '../../../Components/button'
import colors from '../../../style/colors'
import { moderateScale,textScale } from '../../../style/responsiveSize'
import navigationStrings from '../../../navigation/navigationStrings'
import { commonstyles } from '../../../style/commonStyles'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import actions from '../../../redux/actions'
import styles from '../Signup1.1/style'

const SignUp1 = ({ navigation, route }) => {
  // const phone = route?.params?.data?.phone;
  // const phoneCode = route?.params?.data?.code;

  const apiData = route?.params?.data;
  console.log("NEW USER DATA IS:", apiData);

  const otp = apiData?.otp
  console.log(otp, 'otpdata--');

  const [code, setCode] = useState();
  const signupWithOtp = () => {

    if (otp == code) {
      actions.saveUserData(apiData)
      alert("Login successfully")
    } else {
      alert("wrong OTP")
    }
  }

  return (
    <WrapperContainer>
      <Header
        leftImage={true}
        leftImageIcon={images?.arrow}
        onPress={() => { navigation.navigate(navigationStrings.SIGNUP) }} />
      <ScrollView>
        <View>
          <Text style={commonstyles.welcomeText}>{strings.CODE} {apiData.phone_code} {apiData?.phone}</Text>
          <Text style={commonstyles.continueText}>{strings.EDIT_NUMBER}</Text>
          <Text style={styles.otpView}>{strings.OTP}{apiData?.otp}</Text>
        </View>


        <View style={styles.smoothinputView}>
          <SmoothPinCodeInput
            cellStyle={{
              color: colors.white,
              backgroundColor: colors.greyF,
              borderRadius: moderateScale(8),
            }}
            textStyle={{
              fontSize: textScale(14),
              color: colors.white,
            }}
            value={code}
            onTextChange={(otp) => setCode(otp)}
            onBackspace={() => console.log("No more back.")}
          />

        </View>
      </ScrollView>
      <View style={{ marginLeft: moderateScale(20) }}>
        <Text style={{ fontSize: moderateScale(15), color: colors.white }}>{strings.RESEND_CODE}</Text>
      </View>
      <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View style={commonstyles.buttonView}>
          <ButtonComponent buttonText={strings.VERIFY} textColor={colors.white} onPress={signupWithOtp} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default SignUp1