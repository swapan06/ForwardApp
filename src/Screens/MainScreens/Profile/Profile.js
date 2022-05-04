import React from 'react'
import {SafeAreaView,Text,View,Image} from 'react-native'
import Header from '../../../Components/Header'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import strings from '../../../constants/lang'
import { height, moderateScale,moderateScaleVertical, textScale } from '../../../style/responsiveSize'
import styles from './style'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import actions from '../../../redux/actions'
import navigationStrings from '../../../navigation/navigationStrings'


function Profile({navigation}) {
  const Logout = async () => {
    try {
      await GoogleSignin.signOut();
      actions.Logout();
      navigation.navigate(navigationStrings.LOGIN)
    } catch (error) {
      console.error(error);
    }
  }
  return (
 <WrapperContainer>
      <Header
      leftText={true}
      leftTextTitle={strings.PROFILE}
      leftTextStyle ={styles.leftTextStyle}
     />
     <View style={{height: height}}>
        <View style={styles.btnview}>
          <View style={{flex: 0.1}}>
            <Image source={images.userprofile} />
          </View>
          <View style={{flex: 0.8}}>
            <Text style={styles.profileText} onPress={() => { navigation.navigate(navigationStrings.EDIT_PROFILE) }}>{strings.EDIT_PROFILE}</Text>
          </View>
        </View>
        <View style={styles.btnview}>
          <View  style={{flex: 0.1}}>
            <Image source={images.key} />
          </View>
          <View  style={{flex: 0.8}}>
            <Text style={styles.profileText} onPress={() => { navigation.navigate(navigationStrings.CHANGE_PASSWORD) }}>{strings.CHANGE_PASSWORD}</Text>
          </View>
        </View>
        <View style={styles.btnview}>
          <View  style={{flex: 0.1}}>
            <Image source={images.logout} />
          </View>
          <View  style={{flex: 0.8}}>
            <Text style={styles.profileText} onPress={Logout}>{strings.SIGNOUT}</Text>
          </View>
        </View>
        </View>
 </WrapperContainer>
  )
}

export default Profile
