import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import Header from '../../../Components/Header'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import Bottomnavigation from '../../../navigation/Bottomnavigation'
import styles from './style'
import HomeCard from '../../../Components/HomeCard'

function Home({ navigation }) {

    const [state, setState] = useState({
        cardData: [{}, {}, {}, {}]
    })
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
                        <HomeCard userProfile={images.userImage}
                            userName='Lelia Walker'
                            postImage={images?.postimage}
                            location='Sector 28D, Chandigarh' />
                    )
                })}
            </ScrollView>

        </WrapperContainer>

    )
}

export default Home