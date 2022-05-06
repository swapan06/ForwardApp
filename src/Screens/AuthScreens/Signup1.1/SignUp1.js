import React from 'react'
import { Text, View, SafeAreaView, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import styles from './style'
import Header from '../../../Components/Header'
import ButtonComponent from '../../../Components/button'
import colors from '../../../style/colors'
import { moderateScale, moderateScaleVertical, width, textScale } from '../../../style/responsiveSize'
import navigationStrings from '../../../navigation/navigationStrings'
import TextInputComponent from '../../../Components/TextInput'
import { commonstyles } from '../../../style/commonStyles'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'





function SignUp1({ navigation }) {
  return (
    <WrapperContainer>
      <Header
        leftImage={true}
        leftImageIcon={images?.arrow}
        onPress={() => { navigation.navigate(navigationStrings.SIGNUP) }} />
      <ScrollView>
        <View>
          <Text style={commonstyles.welcomeText}>{strings.CODE}</Text>
          <Text style={commonstyles.continueText}>{strings.EDIT_NUMBER}</Text>
        </View>


        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: moderateScale(20), marginVertical: moderateScale(16) }}>
          {/* <SmoothPinCodeInput
            cellStyle={{
              color: "white",
              backgroundColor: colors.greyF,
              borderRadius: moderateScale(8),
            }}
             textStyle={{
              fontSize: textScale(14),
              color: colors.white,
            }}
               value={code}
            // onTextChange={(otp) => setCode(otp)}
            onBackspace={() => console.log("No more back.")}  
            />
             */}
          
          <View style={{ flex: 0.15 }}>
            <TextInputComponent
            keyboardtype={'numeric'}
            
            />
          </View>
          <View style={{ flex: 0.15, }}>
            <TextInputComponent
             keyboardtype={'numeric'}
            />
          </View>
          <View style={{ flex: 0.15 }}>
            <TextInputComponent
             keyboardtype={'numeric'}
            />
          </View>
          <View style={{ flex: 0.15 }}>
            <TextInputComponent
             keyboardtype={'numeric'}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ marginLeft: moderateScale(20) }}>
        <Text style={{ fontSize: moderateScale(15), color: colors.white }}>{strings.RESEND_CODE}</Text>
      </View>
      <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
          <ButtonComponent buttonText={strings.VERIFY} textColor={colors.white} onPress={() => { navigation.navigate(navigationStrings.SETPASSWORD) }} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default SignUp1