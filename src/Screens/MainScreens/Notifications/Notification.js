import React, { useState } from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import styles from './style'
import strings from '../../../constants/lang'
import Header from '../../../Components/Header'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { width } from '../../../style/responsiveSize'

const notificationsData = [
  {
    id: '1',
    image: images?.userImage,
    name: strings.USERNAME,
  },
  {
    id: '2',
    image: images?.userImage,
    name: strings.USERNAME_2,
  },
  {
    id: '3',
    image: images?.userImage,
    name: strings.USERNAME3,
  },
  {
    id: '4',
    image: images?.userImage,
    name: strings.USERNAME4,
  },
]
const notificationItems = ({ item }) => {
  return (

    <View style={styles.mainView}>
      <View>
        <Image source={item.image} style={styles.iconStyle} />
      </View>
      <View>
        <View style={styles.notificationText} >
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.detailsText}> added a new post.</Text>
        </View>
        <Text style={styles.timeText}>{strings.TIME}</Text>
      </View>
    </View>

  )
}
function Notification() {
  const [state, setState] = useState({
    notificationsData: [{}, {}, {}, {}]
  })
  const { notificationData } = state
  return (

    <WrapperContainer>
      <Header
        leftText={true}
        leftTextTitle={strings.NOTIFICATION}
        leftTextStyle={styles.leftTextStyle}
      />

      <View>
        <FlatList
          data={notificationsData}
          renderItem={notificationItems}
        />
      </View>

    </WrapperContainer>

  )
}
export default Notification