import React from 'react'
import { Text, View, SafeAreaView, Image,KeyboardAvoidingView,ScrollView ,Platform } from 'react-native'
import WrapperContainer from '../../Components/WrapperContainer'
import { images } from '../../constants/images'
import strings from '../../constants/lang'
import styles from './style'
import Header from '../../Components/Header'
import ButtonComponent from '../../Components/button'
import colors from '../../style/colors'
import { moderateScale, moderateScaleVertical,width } from '../../style/responsiveSize'
import TextInputComponent from '../../Components/TextInput'
import navigationStrings from '../../navigation/navigationStrings'
import CountryCode from '../../Components/CountryCode'

function SignUp({navigation}) {
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
                />
                  </View>
                    <View style={{flex:0.5}}>
                    
                <TextInputComponent
                  viewstyle={styles.inputview}
                  placeholder={strings.LAST_NAME}
                  placeholderTextColor={colors.disabledlight}
                  value={null}
                />
                  </View>
              
                </View>
                <View style={{marginVertical:moderateScale(16)}}>
                <TextInputComponent
                  viewstyle={styles.inputview}
                  placeholder={strings.EMAIL}
                  placeholderTextColor={colors.disabledlight}
                  value={null}
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
                />
              </View>
               
              </View>
              </View>
              
             
            </View>
          </ScrollView>
  
          <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android'?'height':'padding'}>
            <View style={{paddingBottom:Platform.OS=== 'ios'?moderateScaleVertical(45):moderateScaleVertical(20)}}>
            <ButtonComponent buttonText={strings.NEXT} textColor={colors.white} onpress={() => {navigation.navigate(navigationStrings.SIGNUP1)}}/>
           
            </View>
          </KeyboardAvoidingView>
        </WrapperContainer>
      
    )
}

export default SignUp