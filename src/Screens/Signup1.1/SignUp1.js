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


function SignUp1({navigation}) {
  return (
    <WrapperContainer>
      <Header />
      <Text style={styles.welcomeText}>{strings.CODE}</Text>
      <Text style={styles.continueText}>{strings.EDIT_NUMBER}</Text>
      <View style={{ marginLeft: moderateScale(20) }}>
        <Text style={{ fontSize: moderateScale(15), color: colors.white }}>{strings.RESEND_CODE}</Text>
      </View>
      <KeyboardAvoidingView enabled={true}>
        <View>
          <ButtonComponent buttonText={strings.VERIFY} textColor={colors.white}  onpress={() => {navigation.navigate(navigationStrings.SETPASSWORD)}} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default SignUp1