import React from 'react'
import { Text, View, SafeAreaView, Image, KeyboardAvoidingView, ScrollView ,TouchableOpacity} from 'react-native'
import WrapperContainer from '../../Components/WrapperContainer'
import { images } from '../../constants/images'
import strings from '../../constants/lang'
import styles from './style'
import Header from '../../Components/Header'
import ButtonComponent from '../../Components/button'
import navigationStrings from '../../navigation/navigationStrings'
import colors from '../../style/colors'
import TextInputComponent from '../../Components/TextInput'
import { moderateScale, textScale } from '../../style/responsiveSize'
import CountryCode from '../../Components/CountryCode'


function Login1({ navigation }) {
  return (
    <WrapperContainer>
      <ScrollView scrollEnabled={false}>
        <Header />
        <Text style={styles.welcomeText}>{strings.WELCOME}</Text>
        <Text style={styles.continueText}>{strings.CONTINUE}</Text>

        <View >
          <View>
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
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <TextInputComponent
            viewstyle={styles.inputview}
            placeholder={strings.PASSWORD}
            placeholderTextColor={colors.disabledlight}
            value={null}
            rightText={true}
            righttext={strings.SHOW}
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
      <KeyboardAvoidingView enabled={true}>
        <View>
          <ButtonComponent buttonText={strings.LOGINS} textColor={colors.white} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default Login1