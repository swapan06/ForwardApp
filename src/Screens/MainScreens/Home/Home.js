import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import Header from '../../../Components/Header'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import Bottomnavigation from '../../../navigation/Bottomnavigation'
import styles from './style'
import HomeCard from '../../../Components/HomeCard'
import navigationStrings from '../../../navigation/navigationStrings'
import { useSelector } from 'react-redux'
import strings from '../../../constants/lang'

function Home({ navigation, route }) {
    const data = useSelector(state => state.userStatus);
    const User = data?.pass;
    const user = data?.email;

    const [state, setState] = useState({
        cardData: [
            {
                id: '1',
                userProfile: images.userImage,
                postImage: images.postimage,
                userName: strings.USERNAME,
                LOCATION: strings.LOCATIONS,
            },
            {
                id: '2',
                userProfile: images.editimage,
                postImage: images.postimage,
                userName: strings.USERNAME,
                LOCATION: strings.LOCATIONS,
            },
            {
                id: '3',
                userProfile: images.userImage,
                postImage: images.postimage,
                userName: strings.USERNAME,
                LOCATION: strings.LOCATIONS,
            },
            {
                id: '4',
                userProfile: images.editimage,
                postImage: images.postimage,
                userName: strings.USERNAME,
                LOCATION: strings.LOCATIONS,
            },
        ],
    });

    const { cardData } = state

    return (
        <WrapperContainer>
            <Header
                leftImage={true}
                leftImageIcon={images?.homeicon}
                rightImage={true}
                rightImageIcon={images?.location} style={styles.rightImage}
            />
            <ScrollView>
                {cardData.map((item, index) => {
                    return (
                        <View key={index}>
                            <HomeCard userProfile={item.userProfile}
                                userName={item.userName}
                                postImage={item.postImage}
                                location={item.LOCATION}
                                onPress={() => { navigation.navigate(navigationStrings.POST_DETAILS), { postDetail: item } }} />
                        </View>
                    )
                })}
            </ScrollView>

        </WrapperContainer>

    )
}

export default Home