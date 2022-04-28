import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import styles from './style'
import Login from '../Login/Login'
import navigationStrings from '../../navigation/navigationStrings'
import { useDispatch } from 'react-redux'


const Tutorial = ({ navigation }) => {
    const dispatch = useDispatch()
    const [showSlider, setShowSlider] = useState(true)
    const slides = [{
        key: '1',
        image: require('../../assets/images/slide.png'),
        title: 'Hendrerit vulputate sem',
        description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'
    },
    {
        key: '2',
        image: require('../../assets/images/slide.png'),
        title: 'Hendrerit vulputate sem',
        description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'
    },
    {
        key: '3',
        image: require('../../assets/images/slide.png'),
        title: 'Hendrerit vulputate sem',
        description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'
    },
    ];
    const renderSlide = ({ item }) => {
        return <View style={styles.slide}>
            <Image style={styles.imageStyle} source={item.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    };
    const renderNextButton = () => {
        return (
          <View>
            <Text style={styles.intobutton}>NEXT</Text>
          </View>
        );
      };
    const renderDoneButton = () => {
        return (
            <View>
                <Text onPress={() => { navigation.navigate(navigationStrings.LOGIN) }} style={styles.startbtn}>GET STARTED</Text>
            </View>
        );
    };
    return (
        <ScrollView>
            <View style={styles.tutorialContainer}>
                <AppIntroSlider
                    data={slides}
                    renderItem={renderSlide}
                    renderDoneButton={renderDoneButton}
                    activeDotStyle={styles.activedote}
                    dotStyle={styles.inactivedote} />



            </View>
        </ScrollView>

    )
}

export default Tutorial