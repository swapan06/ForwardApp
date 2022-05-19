import React, { useEffect, useState } from 'react'
import { Text, View, Image, KeyboardAvoidingView,ScrollView,TouchableOpacity } from 'react-native'
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
import navigationStrings from '../../../navigation/navigationStrings';


function Comments({ navigation, route }) {
    const [comment,setComment] = useState(0);
    const profile = route?.params?.element?.item?.user?.profile;
    const firstName = route?.params?.element?.item?.user?.first_name;
    const lastName = route?.params?.element?.item?.user?.last_name;
    const description = route?.params?.element?.item?.description;
    const time = route?.params?.element?.item?.time_ago;
    const id = route?.params?.element?.item?.id;
  
    const commentPost = () => {
        console.log("data",id)
        console.log("commentdata" , comment)
        let apiData=`?post_id= ${id} &comment=${comment}`;
        console.log(apiData,"apidata")
        actions.postComment(apiData).then((res)=>{
            console.log("comment res",res)
            alert("Comment post successfully!!")
        }).catch((error)=>{
            console.log(error,"errorr occurred")
        })
    }

    return (
        <WrapperContainer>
            <ScrollView>
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
                        <Image source={{ uri:profile }} style={styles.profilePic} />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{firstName} {lastName} </Text>
                        <Text style={styles.location}>{description}</Text>
                        <Text style={styles.uploadTimeTxt}>{time}</Text>
                    </View>
                </View>
                <Divider style={styles.divider}></Divider>
            </View>
            </ScrollView>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View style={styles.commentView} >
          <View style={{ flex: 0.7 }}>
            <TextInputComponent
              placeholder="Add your comment...."
              placeholderTextColor={colors.disabledlight}
              value={comment}
              onchangetext={(comment) =>setComment({comment })}
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