import React,{useState} from 'react'
import { Text, View, SafeAreaView, Image, KeyboardAvoidingView, ScrollView ,TouchableOpacity,Platform} from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import styles from './style'
import Header from '../../../Components/Header'
import ButtonComponent from '../../../Components/button'
import navigationStrings from '../../../navigation/navigationStrings'
import colors from '../../../style/colors'
import TextInputComponent from '../../../Components/TextInput'
import { moderateScale,moderateScaleVertical, textScale } from '../../../style/responsiveSize'
import CountryCode from '../../../Components/CountryCode'
import { useDispatch } from 'react-redux'
import actions from '../../../redux/actions'


function Login1({ navigation }) {

  const [phoneno, phone] = useState('');
  const [Password, password] = useState('');

  const dispatch = useDispatch()
      const data = { password,phone }

      const onLogin = async () => {

        let apiData = {
            phone:phoneno,
            phone_code: "91",
            device_token: 'KDKFJDKFDFKDFDF',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: Password,
            loginType: 'admin',

        }
        try {
            const res = await actions.login(apiData)
            console.log("Login api res_+++++",res)
            alert("User Login successfully....!!!")
            navigation.navigate(navigationStrings.HOME)
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }
  
  return (
    <WrapperContainer>
      <ScrollView scrollEnabled={false}>
        <Header leftImage={true}
                leftImageIcon ={images?.arrow}
                onPress={() => { navigation.navigate(navigationStrings.LOGIN) }}/>
        <Text style={styles.welcomeText}>{strings.WELCOME}</Text>
        <Text style={styles.continueText}>{strings.CONTINUE}</Text>

        <View >
          <View style={{marginHorizontal:moderateScale(10)}}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginVertical: moderateScale(16)
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
          </View>
        </View>
        <View style={{marginHorizontal:moderateScale(10)}}>
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
        <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:moderateScale(20),marginVertical:moderateScale(16)}}>
          <TouchableOpacity>
            <Text style={{fontSize:textScale(13),color:colors.white,}}>{strings.OTP}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize:textScale(13),color:colors.bottomBarGradientA,}} >{strings.FORGOT_PASSWORD}</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
      <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android'?'height':'padding'}>
        <View style={{paddingBottom:Platform.OS=== 'ios'?moderateScaleVertical(45):moderateScaleVertical(20)}}>
          <ButtonComponent buttonText={strings.LOGINS} textColor={colors.white} onPress={onLogin}/>
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default Login1