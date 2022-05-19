import React, { useEffect, useState } from 'react'
import { Text, View, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, FlatList,RefreshControl } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Header from '../../../Components/Header';
import TextInputComponent from '../../../Components/TextInput';
import WrapperContainer from '../../../Components/WrapperContainer'
import { images } from '../../../constants/images';
import strings from '../../../constants/lang';
import colors from '../../../style/colors';
import { commonstyles } from '../../../style/commonStyles';
import styles from './style';
import actions from '../../../redux/actions'
import { moderateScale, moderateScaleVertical } from '../../../style/responsiveSize';


function Comments({ navigation, route }) {
    const [comment, setComment] = useState('');
    const [getcomments, setGetComments] = useState([])
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    let data = route?.params?.data
    const profile = route?.params?.data?.item?.user?.profile
    const firstName = route?.params?.data?.item?.user?.first_name
    const lastName = route?.params?.data?.item?.user?.last_name
    const description = route?.params?.data?.item?.description
    const time = route?.params?.data?.item?.time_ago
    // const id = route?.params?.data?.item?.id


    // --------------Comment post api-------------
    const commentPost = () => {
        let apiData = `?post_id=${data.item.id}&comment=${comment}`
        console.log(apiData, "apidata")
        actions.postComment(apiData).then((res) => {
            console.log("comment res", res)
            alert("Comment post successfully!!")
        }).catch((error) => {
            console.log(error, "errorr occurred")
        })
    }
    // --------------Comment get api---------------
    useEffect(() => {
        if (isLoading || refresh) {
        let apiData = `?post_id=${data.item.id}&skip=${count}`;
        console.log('apidata------------', apiData)
        actions.getComment(apiData).then((res) => {
            console.log("checkk response", res)
            setIsLoading(false)
            setRefresh(false)
            if (refresh) {
                setGetComments(res?.data)
            } else {
                setGetComments([...getcomments, ...res?.data])
            }

        })
            .catch(() => {
                alert(err?.message)
            })
        }

    }, [isLoading,refresh])

    const onRefresh = () => {
        setCount(0)
        setRefresh(true)

    }

 
    return (
        <WrapperContainer>
            {/* ---------------Header Component---------- */}
            <Header
                leftImage={true}
                leftImageIcon={images?.arrow}
                leftText={true}
                leftTextTitle={strings.COMMENTS}
                leftTextStyle={commonstyles.leftTextStyle}
                onPress={() => navigation.goBack()}
            />
            <View>
                <View style={styles.commentContainer}>
                    <View style={styles.profilePhoto}>
                        <Image source={{ uri: profile }} style={styles.profilePic} />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{firstName} {lastName} </Text>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.uploadTime}>{time}</Text>
                    </View>
                </View>
                <Divider style={styles.divider}></Divider>
            </View>
            {/* -----------------------Flatlist -------------------- */}
            <FlatList
                data={getcomments}
                extraData={getcomments}
                onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        console.log('count++++++++++++++', count)
                        setCount(count + 15)
                        setIsLoading(true)
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={onRefresh}
                            tintColor="#F43738"
                        />
                    }
                renderItem={(data) => {
                    console.log("element", data)
                    return (
                        <View >
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: moderateScale(10) }}>
                                <Image
                                    style={styles.profilePic}
                                    source={{ uri: data.item.user.profile }}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.name}>{data.item.user.first_name} <Text>{data.item.user.last_name}</Text></Text>
                                    <Text style={styles.commentText}>{data.item.comment}</Text>
                                </View>
                            </View>
                            <View style={styles.timeview}>
                                <Text style={styles.uploadTimeTxt}>
                                    {data.item.time_ago}
                                </Text>
                            </View>
                            <Divider style={styles.divider}></Divider>

                        </View>
                    )
                }}





            />
            

            {/* --------------TextInputComponent and post Button------------ */}
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={styles.commentView} >
                    <View style={{ flex: 0.7 }}>
                        <TextInputComponent
                            placeholder="Add your comment...."
                            placeholderTextColor={colors.disabledlight}
                            onchangetext={setComment}
                            value={comment}
                        />
                    </View>
                    <TouchableOpacity onPress={commentPost}
                        style={{ flex: 0.2, backgroundColor: colors.redB, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                        <Text style={commonstyles.leftTextStyle}>{strings.POST}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default Comments