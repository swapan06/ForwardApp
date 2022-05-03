import React, {useState}from 'react'
import { Text, View, SafeAreaView, Image,KeyboardAvoidingView,ScrollView ,Platform } from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import styles from './style'
import Header from '../../../Components/Header'
import ButtonComponent from '../../../Components/button'
import colors from '../../../style/colors'
import { moderateScale, moderateScaleVertical,width } from '../../../style/responsiveSize'
import TextInputComponent from '../../../Components/TextInput'
import navigationStrings from '../../../navigation/navigationStrings'
import CountryCode from '../../../Components/CountryCode'
import actions from '../../../redux/actions'
import axios from 'axios'
import { useDispatch } from 'react-redux'


const baseUrl = "http://192.168.100.101:8001/api/signup"


function SignUp({navigation}) {


      const [firstname, first_name] = useState('');
      const [lastname, last_name] = useState('');
      const [Password, password] = useState('');
      const [ShowPassword, showpassword] = useState('');
      const [Email, email] = useState('');
      const [phoneno, phone] = useState('');

      const dispatch = useDispatch()
      // actions.Submit(data)
      const data = { firstname,lastname, password,showpassword,email,phone }
  
  const onSignup = async () => {

    let apiData = {
        first_name: firstname,
        last_name: lastname,
        email: Email,
        phone: phoneno,
        phone_code: "91 ",
        country_code: " IN",
        device_token: 'sdfgdfhfjy ',
        device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
        password: Password,
    }

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
          left={true}
          onPress={() => {navigation.navigate(navigationStrings.LOGIN)}} />
           <ScrollView scrollEnabled={false}>
            <View style={styles.maincontainer}>
              <View>
                <Text style={styles.welcomeText}>{strings.CREATE_ACCOUNT}</Text>
                <Text style={styles.continueText}>{strings.CREATE_CONTINUE}</Text>
              </View>
              <View style={{marginHorizontal:moderateScale(10)}}> 
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <View style={{flex:0.5}}>
                  <TextInputComponent
                  viewstyle={styles.inputview}
                  placeholder={strings.FIRST_NAME}
                  placeholderTextColor={colors.disabledlight}
                  value={null}
                  onchangetext={(event) => first_name(event)}
                />
                  </View>
                    <View style={{flex:0.5}}>
                    
                <TextInputComponent
                  viewstyle={styles.inputview}
                  placeholder={strings.LAST_NAME}
                  placeholderTextColor={colors.disabledlight}
                  value={null}
                  onchangetext={(event) => last_name(event)}
                />
                  </View>
              
                </View>
                <View style={{marginVertical:moderateScale(16)}}>
                <TextInputComponent
                  viewstyle={styles.inputview}
                  placeholder={strings.EMAIL}
                  placeholderTextColor={colors.disabledlight}
                  value={null}
                  onchangetext={(event) => email(event)}
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
                  onchangetext={(event) => phone(event)}
                />
              </View>
               
              </View>
              <View style={{marginVertical:moderateScale(16)}}>
          <TextInputComponent
            viewstyle={styles.inputview}
            placeholder={strings.PASSWORD}
            placeholderTextColor={colors.disabledlight}
            value={null}
            rightText={true}
            righttext={strings.SHOW}
            onChangetext={(event) => password(event)}
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
            onChangetext={(event) => showpassword(event)}
          />
        </View>
              </View>
              
             
            </View>
          </ScrollView>
  
          <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android'?'height':'padding'}>
            <View style={{paddingBottom:Platform.OS=== 'ios'?moderateScaleVertical(45):moderateScaleVertical(20)}}>
            <ButtonComponent buttonText={strings.NEXT} textColor={colors.white} onpress={onSignup}/>
           
            </View>
          </KeyboardAvoidingView>
        </WrapperContainer>
      
    )
}

export default SignUp