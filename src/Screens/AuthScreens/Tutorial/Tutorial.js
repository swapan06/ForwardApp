import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import styles from './style'
import navigationStrings from '../../../navigation/navigationStrings'
import WrapperContainer from '../../../Components/WrapperContainer'
import strings from '../../../constants/lang'
import { images } from '../../../constants/images'
import actions from '../../../redux/actions'



const slides = [{
    key: '1',
    image: images?.slider,
    title: strings.TITLE,
    description: strings.DESCRIPTION
},
{
    key: '2',
    image: images?.slider,
    title: strings.TITLE,
    description: strings.DESCRIPTION
},
{
    key: '3',
    image: images?.slider,
    title: strings.TITLE,
    description: strings.DESCRIPTION,
},
];

const Tutorial = ({ navigation }) => {
    const data = () => {
        actions.Intro(false);
    };


    function renderSlide({ item }) {
        return (
            <View style={styles.slide}>
                <Image style={styles.imageStyle} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        )
    }
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
                <TouchableOpacity onPress={data}>
                    <Text style={styles.startbtn}>GET STARTED</Text>
                </TouchableOpacity>

            </View>
        );
    };
    return (
        <ScrollView>
            <WrapperContainer>
                <View style={styles.tutorialContainer}>
                    <AppIntroSlider
                        data={slides}
                        renderItem={renderSlide}
                        renderDoneButton={renderDoneButton}
                        activeDotStyle={styles.activedote}
                        dotStyle={styles.inactivedote} />
                </View>
            </WrapperContainer>
        </ScrollView>

    )
}
export default Tutorial;