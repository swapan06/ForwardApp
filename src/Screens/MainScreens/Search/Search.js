import React from 'react'
import {Text,View} from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import strings from '../../../constants/lang'
import TextInputComponent from '../../../Components/TextInput'
import colors from '../../../style/colors'
import { height, moderateScale,moderateScaleVertical, textScale } from '../../../style/responsiveSize'
import styles from '../Profile/style'


function Search() {
  return (
   <WrapperContainer>
  <View style={{marginHorizontal:moderateScale(20),marginTop:moderateScale(15)}}>
          <TextInputComponent
            viewstyle={styles.inputview}
            placeholder={strings.ENTER_LOCATION}
            placeholderTextColor={colors.disabledlight}
            value={null}
            // rightText={true}
            // righttext={strings.ENTER_LOCATION}
          />
        </View>
   </WrapperContainer>
       
   
  )
}

export default Search