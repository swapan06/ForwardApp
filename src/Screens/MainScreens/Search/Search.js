import React from 'react'
import {Text,View,FlatList} from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import strings from '../../../constants/lang'
import TextInputComponent from '../../../Components/TextInput'
import colors from '../../../style/colors'
import { moderateScale } from '../../../style/responsiveSize'
import styles from '../Search/style'

const searchData = [
  {
    id: '1',
    name: strings.SECTOR55,
  },
  {
    id: '2',
    name: strings.SECTOR22,
  },
  {
    id: '3',
    name: strings.SECTOR48,
  },
  {
    id: '4',
    name: strings.SECTOR26,
  },
  {
    id: '5',
    name: strings.SECTOR40,
  },
  {
    id: '6',
    name: strings.SECTOR67,
  },
]
function Search() {
  
  return (
   <WrapperContainer>
  <View style={{marginHorizontal:moderateScale(20),marginTop:moderateScale(15)}}>
          <TextInputComponent
            viewstyle={styles.inputview}
            placeholder={strings.ENTER_LOCATION}
            placeholderTextColor={colors.disabledlight}
            value={null}
          />
        </View>
        <View style={styles.mainContainer}>
                <Text style={styles.suggestText}>{strings.SUGGESTIONS}</Text>
                <FlatList
                    horizontal={false}
                    data={searchData}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(element) => {
                        return (<View>
                            <Text style={styles.flatText}>{element.item.name}</Text>
                        </View>
                        )
                    }
                    } />
            </View>
   </WrapperContainer>
       
   
  )
}

export default Search