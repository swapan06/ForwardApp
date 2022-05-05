import React from 'react'
import {Text,ImageBackground,View,Image,SafeAreaView,TouchableOpacity,ScrollView,KeyboardAvoidingView,Platform} from 'react-native'
import { images } from '../../../constants/images'
import { height, width } from '../../../style/responsiveSize';
import strings from '../../../constants/lang';
import styles from './style';
import colors from '../../../style/colors';
import { moderateScale, moderateScaleVertical} from '../../../style/responsiveSize'
import ButtonComponent from '../../../Components/button';

const  PostDetail = ({navigation ,route}) => {
   
   
  return (
    <View style={{flex:1}}>
<ImageBackground  source={images?.postimage} style={{height:height, width:width}} resizeMode='stretch'>
          
          <SafeAreaView>
          <ScrollView>
          <View style={{flexDirection:'row',flex:0.9}}>
              <View>
              <Image source={images?.editimage} style={styles.userprofile}/>
              </View>
              <View>
              <Text style={styles.username}>{strings.USERNAME}</Text>
              <Text  style={styles.username1}>{strings.LOCATIONS}</Text>
              </View>
              <View>
                  <TouchableOpacity  onPress={() => navigation.goBack()}>
                  <Image style={styles.crossimg} source={images?.cross}/>
                  </TouchableOpacity>
              </View>
        </View>
  
        <View style={styles.bottomView}>
        <View>
        <Text style={styles.loremtext}>{strings.LOREM_TEXT}</Text>
        </View>
        <View>
            <Text style={styles.timeText}>{strings.TIME}</Text>
        </View>
        <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
       <View style={{paddingBottom:Platform.OS=== 'ios'?moderateScaleVertical(45):moderateScaleVertical(20)}}>
         <ButtonComponent buttonText={strings.VIEW_MAP} textColor={colors.white}  />
       </View>
     </KeyboardAvoidingView>
      
        </View>
        </ScrollView>
          </SafeAreaView>
       
       
      </ImageBackground>
    </View>
       

  )
}

export default PostDetail