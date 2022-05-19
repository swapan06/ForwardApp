import React, { useState, useEffect } from 'react'
import { View, FlatList, RefreshControl } from 'react-native'
import Header from '../../../Components/Header'
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images'
import styles from './style'
import HomeCard from '../../../Components/HomeCard'
import navigationStrings from '../../../navigation/navigationStrings'
import { useSelector } from 'react-redux'
import actions from '../../../redux/actions'
import { cloneDeep } from 'lodash'

function Home({ navigation }) {
    const data = useSelector(state => state.userStatus);
    const [post, setPost] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const [like, setLike] = useState(0)

    console.log("State'''''", post)

    // ------------------like post api -----------
    const onLike = (element) => {
        let id = element.item.id
        let likeStatus = Number(element.item.like_status) ? 0 : 1
        console.log(likeStatus, "likeStatus");

        let apiData = `?post_id=${id}&status=${likeStatus}`;
        console.log("apidata", apiData)
        actions.getLike(apiData).then((res) => {
            console.log("likePost____", res);
            let newArray = cloneDeep(post)
            newArray = newArray.map((i, inx) => {
                if (i?.id == id) {
                    i.like_status = likeStatus,
                        i.like_count = likeStatus ? Number(i?.like_count) + 1 : Number(i?.like_count) - 1
                    return i
                } else {
                    return i
                }
            })
            setPost(newArray)
            console.log(newArray, "newArray");
        })
            .catch((error) => {
                console.log(error)
            })
    }

    // ------------post api ---------------
    useEffect(() => {
        if (isLoading || refresh) {
            let apiData = `?skip=${count}`;
            console.log("apidata", apiData)
            actions
                .getPost(apiData)
                .then(res => {
                    console.log(res, 'post upload'),
                        setIsLoading(false)
                        setRefresh(false)
                        if (refresh) {
                            setPost(res?.data)
                        } else {
                            setPost([...post, ...res?.data])
                        }

                })
                .catch(err => {
                    console.log(err, 'error');
                })
        }
    }, [isLoading,refresh])

    const onRefresh = () => {
        setCount(0)
        setRefresh(true)

    }
    const onPostDetail = (element, image) => {
        console.log("render ITEM", element)
        navigation.navigate(navigationStrings.POST_DETAILS, {
            item: element,
            image: image
        });
    };
    // ------------------Home Card---------------
    const renderItem = (element, index) => {
        return (
            <HomeCard
                data={element}
                postDetail={(image) => onPostDetail(element, image)}
                likePost={() => { onLike(element) }}
                comment={() => navigation.navigate(navigationStrings.COMMENTS, { data:element })}

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
                    showsVerticalScrollIndicator={false}
                    data={post}
                    extraData={post}
                    renderItem={renderItem}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        console.log('count++++++++++++++', count)
                        setCount(count + 8)
                        setIsLoading(true)
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={onRefresh}
                            tintColor="#F43738"
                        />
                    }
                />
            </View>
        </WrapperContainer>
    );
};


export default Home