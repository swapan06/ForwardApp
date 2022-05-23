import React, { useEffect, useState } from 'react'
import { Text, View, Image, PermissionsAndroid, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native'
import WrapperContainer from '../../../Components/WrapperContainer'
import CameraRoll from '@react-native-community/cameraroll'
import Header from '../../../Components/Header'
import strings from '../../../constants/lang'
import styles from './style'
import { images } from '../../../constants/images'
import ImageCropPicker from 'react-native-image-crop-picker'
import navigationStrings from '../../../navigation/navigationStrings'
import actions from '../../../redux/actions'


const Post = ({ navigation }) => {
  const [state, setState] = useState({
    photos: [],
    selectPhotos: '',
   
  });
  const { photos, selectPhotos } = state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }))

  // console.log(selectPhotos)

 
  const imageAdd = async () => {
    let apiData = new FormData()
    apiData.append('image', {
        uri: selectPhotos,
        name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
        type: 'image/jpeg',

    })
    console.log("single pic API data : ", apiData)
    let header = { "Content-Type": "multipart/form-data" }
    actions.singleImgUpload(apiData, header)
        .then(res => {
            console.log("single image api res_+++++", res)
         
            // return;
            navigation.navigate(navigationStrings.ADD_INFO, { image: res.data })
        })
        .catch(err => {
            console.log(err, 'err');
            alert(err?.message);
        });
}


  
  // -----android permissions------

  const hasAndroidPermissions = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermissions = await PermissionsAndroid.check(permission);
    if (hasPermissions) {
      return true
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted'
  };
  const imageData = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermissions())) {
      return;
    }
    CameraRoll.getPhotos({
      first: 200,
      assetType: 'Photos',
    })
      .then(r => {
        updateState({ photos: r.edges });
        updateState({ selectPhotos: r.edges[0].node.image.uri });
        // console.log("rtwddsfv", r)
      })
      .catch(err => {
        console.log('erre', err);
      });
  }

  useEffect(() => {
    imageData()
  }, [])
  // ----------Imagecroppicker-------//
  const launchCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }

  const launchGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // console.log(image);
    });
  }
  // -------alerts----------//
  const selectImage = () =>
    Alert.alert(
      "Upload Image",
      "Choose an option",
      [
        {
          text: "Camera",
          onPress: launchCamera
        },
        {
          text: "Gallery",
          onPress: launchGallery,

        },
        { text: "Cancel", onPress: () => console.log("OK Pressed"), style: "cancel" }
      ]
    );

  const imageSwap = element => {
    console.log("index", element.item.node.image)
    updateState({ selectPhotos: element.item.node.image.uri });
  };

  return (
    <WrapperContainer>
      <Header leftText={true}
        leftTextTitle={strings.SELECT_PHOTO}
        leftTextStyle={styles.headTextStyle}
        rightImage={true}
        rightImageIcon={images?.post}
        rightIconPress={imageAdd}
      />
      <View>
        <Image
          style={styles.firstImage}
          source={{ uri: selectPhotos }}
        ></Image>
      </View>
      <View style={styles.detailView}>
        <Text style={styles.galleryText}>{strings.GALLERY}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.recentText}>{strings.RECENTS}</Text>
          <Image style={styles.downIcon} source={images?.downarrow} />
        </View>
      </View>
      <FlatList data={photos}
        scrollEnabled={true}
        renderItem={(element) => {
          let index = element.index
          return (
            <TouchableOpacity onPress={() => imageSwap(element)}>
              <Image
                style={styles.galleryPhoto}
                key={index}
                source={{ uri: element.item.node.image.uri }}
              />
            </TouchableOpacity>
          )
        }}

        numColumns={3}
      />

      <TouchableOpacity onPress={selectImage}>
        <Image source={images?.camera} style={styles.cameraIcon} />
      </TouchableOpacity>

    </WrapperContainer>
  )
}

export default Post