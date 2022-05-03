import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import ButtonComponent from '../../Components/button'
import WrapperContainer from '../../Components/WrapperContainer'
import Bottomnavigation from '../../navigation/Bottomnavigation'
import colors from '../../style/colors'
import strings from '../../constants/lang'
import navigationStrings from '../../navigation/navigationStrings'


function Home({navigation}) {
    return (
       <WrapperContainer>
       <ButtonComponent buttonText={strings.LOGOUT} textColor={colors.white} onpress={() => {navigation.navigate(navigationStrings.LOGIN)}}/>
       </WrapperContainer>
       
    )
}

export default Home