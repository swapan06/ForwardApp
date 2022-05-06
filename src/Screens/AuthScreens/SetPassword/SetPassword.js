import React from 'react'
import { Text, View, SafeAreaView, Image, KeyboardAvoidingView,Platform ,ScrollView} from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import styles from './style'
import Header from '../../../Components/Header'
import ButtonComponent from '../../../Components/button'
import colors from '../../../style/colors'
import { moderateScale,moderateScaleVertical, width } from '../../../style/responsiveSize'
import navigationStrings from '../../../navigation/navigationStrings'
import TextInputComponent from '../../../Components/TextInput'
import { commonstyles } from '../../../style/commonStyles'



function SetPassword({navigation}) {
  return (
    <WrapperContainer>
      <Header leftImage={true}
                leftImageIcon ={images?.arrow}
                onPress={() => { navigation.navigate(navigationStrings.SIGNUP1) }} />
                <ScrollView>
      <Text style={styles.welcomeText}>{strings.SET_PASSWORD}</Text>
      <Text style={styles.continueText}>{strings.UNIQUE_PASSWORD}</Text>
      <View style={{marginHorizontal:moderateScale(15)}}>
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
        </View>
        </ScrollView>
        
      <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android'?'height':'padding'}>
        <View style={{paddingBottom:Platform.OS=== 'ios'?moderateScaleVertical(45):moderateScaleVertical(20)}} >
          <ButtonComponent buttonText={strings.GET_STARTED} textColor={colors.white}  onpress={() => {navigation.navigate(navigationStrings.SETPASSWORD)}} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default SetPassword