import React from 'react'
import {SafeAreaView,Text} from 'react-native'
import Header from '../../../Components/Header'
import WrapperContainer from '../../../Components/WrapperContainer'
import strings from '../../../constants/lang'
import { commonstyles } from '../../../style/commonStyles'
import styles from './style'

function Profile() {
  return (
 <WrapperContainer>
      <Header
      leftText={true}
      leftTextTitle={strings.PROFILE}
      leftTextStyle ={styles.leftTextStyle}
     />
     
       
 </WrapperContainer>
  )
}

export default Profile
