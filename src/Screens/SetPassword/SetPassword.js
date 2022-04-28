import React from 'react'
import { Text, View, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native'
import WrapperContainer from '../../Components/WrapperContainer'
import { images } from '../../constants/images'
import strings from '../../constants/lang'
import styles from './style'
import Header from '../../Components/Header'
import ButtonComponent from '../../Components/button'
import colors from '../../style/colors'
import { moderateScale, width } from '../../style/responsiveSize'
import navigationStrings from '../../navigation/navigationStrings'
import TextInputComponent from '../../Components/TextInput'


function SetPassword() {
  return (
    <WrapperContainer>
      <Header />
      <Text style={styles.welcomeText}>{strings.SET_PASSWORD}</Text>
      <Text style={styles.continueText}>{strings.UNIQUE_PASSWORD}</Text>
      <View style={{marginVertical:moderateScale(16)}}>
          <TextInputComponent
            viewstyle={styles.inputview}
            placeholder={strings.PASSWORD}
            placeholderTextColor={colors.disabledlight}
            value={null}
            rightText={true}
            righttext={strings.SHOW}
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
          />
        </View>
        
      <KeyboardAvoidingView enabled={true}>
        <View>
          <ButtonComponent buttonText={strings.GET_STARTED} textColor={colors.white}  onpress={() => {navigation.navigate(navigationStrings.SETPASSWORD)}} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default SetPassword