import React from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import { images } from '../../../constants/images'
import ButtonComponent from '../../../Components/button'
import strings from '../../../constants/lang'
import WrapperContainer from '../../../Components/WrapperContainer'
import { height, moderateScale, width } from '../../../style/responsiveSize';
import colors from '../../../style/colors'
import navigationStrings from '../../../navigation/navigationStrings'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import actions from '../../../redux/actions'
import { GetStarted, saveUserData } from '../../../redux/actions/auth'
import { GraphRequest, GraphRequestManager, LoginManager } from "react-native-fbsdk";
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

function Login({ navigation }) {
    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("user info", userInfo);
            const data = userInfo.user;
            // saveUserData(data)
            actions.saveUserData(data)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('error raise', error);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('error raise', error);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('error raise', error);
            } else {
                // some other error happened
            }
        }
    };

    const fblogin = (resCallback) => {
        LoginManager.logOut();
        return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
          result => {
            console.log("fb result==>>>>>>", result);
            if (result.declinedPermissions && result.declinedPermissions.includes("email")) {
              resCallback({ message: " Eamil is required" })
            }
            if (result.isCancelled) {
              console.log("error")
            } else {
              const infoRequest = new GraphRequest(
                '/me?fileds=email,name,picture,friend',
                null,
                resCallback
              );
              new GraphRequestManager().addRequest(infoRequest).start()
            }
          },
          function (error) {
            console.log("Login fail with error:" + error)
          }
        )
      }

       const onfbLogin = async () => {
        try {
          await fblogin(_responseInfoCallBack)
        } catch (error) {
          console.log("error raised", error)
      
        }
      }
     const _responseInfoCallBack = async (error, result) => {
        if (error) {
          console.log("error raised", error)
          return;
        }
        else {
          const data = result
          console.log("fb data+++++", data)
          actions.saveUserData(data)
      
        }
      
      }

    return (
        <WrapperContainer>
            {/* ---------------------------Image Logo with text------------------ */}
            <View style={{ height: height, }}>
                <View style={{ flex: 0.45, alignItems: "center" }}>
                    <Image style={styles.logoImage} source={images?.logo} />
                    <Text style={styles.loginText}>{strings.PRIVACY_TERM}</Text>
                </View>
                {/* -------------------------Login with GOOGLE,FACEBOOK , APPLE------------------- */}
                <View style={{ flex: 0.55 }}>
                    <ButtonComponent onpress={() => { navigation.navigate(navigationStrings.LOGIN1) }} textColor={colors.white} buttonText={strings.LOGIN_PHONENO} />
                    <Text style={styles.orText}> {strings.OR}</Text>
                    <TouchableOpacity >
                        <ButtonComponent leftIcon={true} icon={images.google} style={{ backgroundColor: "white", }} textColor={colors.black} buttonText={strings.GOOGLE_LOGIN} onpress={googleLogin} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonComponent leftIcon={true} icon={images.facebook} style={{ backgroundColor: "white", }} textColor={colors.black} buttonText={strings.FACEBOOK_LOGIN} onpress={onfbLogin} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonComponent leftIcon={true} icon={images.apple} style={{ backgroundColor: "white", }} textColor={colors.black} buttonText={strings.APPLE_LOGIN} />
                    </TouchableOpacity>
                    {/* ---------------------------Sign Up------------------------------ */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={styles.textstyle}>{strings.NEW_HERE}</Text>
                        <Text onPress={() => { navigation.navigate(navigationStrings.SIGNUP) }} style={styles.signupBtn}>{strings.SIGN_UP}</Text>
                    </View>
                </View>

            </View>

        </WrapperContainer>
    )
}

export default Login