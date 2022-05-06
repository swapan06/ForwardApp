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
import { useSelector } from 'react-redux'


function SignUp({ navigation }) {



  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhone] = useState('');

  const data = { setFirstName, setLastName, setPassword, setEmail, setPhone, setConfirmPassword }

  const onSignup = async () => {

    let apiData = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      phone: phoneno,
      phone_code: '91',
      country_code: 'IN',
      device_token: 'sdfgdfhfjy ',
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password,

    }
    console.log("sending singup data", apiData)


    try {
      const res = await actions.signUp(apiData)
      console.log("singnup api res_+++++", res)
      alert("User signup successfully....!!!")
      navigation.navigate(navigationStrings.SIGNUP1)
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
                  value={null}
                  onchangetext={(event) => setFirstName(event)}
                />
              </View>
              <View style={{ flex: 0.5 }}>

                <TextInputComponent
                  viewstyle={styles.inputview}
                  placeholder={strings.LAST_NAME}
                  placeholderTextColor={colors.disabledlight}
                  value={null}
                  onchangetext={(event) => setLastName(event)}
                />
              </View>

            </View>
            <View style={{ marginVertical: moderateScale(16) }}>
              <TextInputComponent
                viewstyle={styles.inputview}
                placeholder={strings.EMAIL}
                placeholderTextColor={colors.disabledlight}
                value={null}
                onchangetext={(event) => setEmail(event)}
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
                  onchangetext={(event) => setPhone(event)}
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
                onchangetext={(event) => setPassword(event)}
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
                onchangetext={(event) => setPassword(event)}
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