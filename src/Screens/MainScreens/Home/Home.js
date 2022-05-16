import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList } from 'react-native'
import Header from '../../../Components/Header'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import styles from './style'
import HomeCard from '../../../Components/HomeCard'
import navigationStrings from '../../../navigation/navigationStrings'
import { useSelector } from 'react-redux'
import actions from '../../../redux/actions'

function Home({ navigation,route }) {
    const data = useSelector(state => state.userStatus);
    const [post, setPost] = useState();
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let apiData = `?skip=${count}`;
        setIsLoading(true)
        actions
            .getPost(apiData)
            .then(res => {
                console.log(res, 'post upload'),
                setIsLoading(false)
                    setPost(res?.data);
            })
            .catch(err => {
                console.log(err, 'error');
            });
    }, [count]);



    const renderItem = (element, index) => {
        // console.log("render ITEM", element)
        return (
            <HomeCard
                userProfile={element.item.user.profile}
                userName={element.item.user.first_name}
                lastName={element.item.user.last_name}
                location={element.item.location_name}
                postImage={element.item.images.file[0]}
                description={element.item.description}
                postTime={element.item.time_ago}
                commentCount={element.item.comment_count}
                likesCount={element.item.like_count}
                onPress={() => navigation.navigate(navigationStrings.POST_DETAILS, { postDetail: element })}
            />
        )

    }

    return (
        <WrapperContainer isLoading={isLoading} withModal={isLoading}>
            <Header
                leftImage={true}
                leftImageIcon={images?.homeicon}
                rightImage={true}
                rightImageIcon={images?.location} style={styles.rightImage}
            />
            <View>
                <FlatList
                    data={post}
                    renderItem={renderItem}
                    onEndReached={() => {
                        console.log('count++++++++++++++', count)
                        setCount(count + 1)
                    }} />
            </View>

        </WrapperContainer>

    )
}

export default Home