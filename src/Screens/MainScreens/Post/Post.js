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





const Post = ({ navigation }) => {
  const [state, setState] = useState({
    photos: []
  });
  const { photos } = state;

  useEffect(() => {
    hasGalleryPermissions()
  });
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
  const hasGalleryPermissions = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermissions())) {
      return;
    }
    CameraRoll.getPhotos({
      first: 200,
      assetType: 'Photos',
    })
      .then(r => {
        setState({ photos: r.edges });
        // console.log("rtwddsfv", r)
      })
      .catch(err => {
        console.log('erre', err);
      });
  }

  // ----------Imagecroppicker-------//
  const launchCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // console.log(image);
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

  return (
    <WrapperContainer>
      <Header leftText={true}
        leftTextTitle={strings.SELECT_PHOTO}
        leftTextStyle={styles.headTextStyle} />

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
          if (index == 0) {
            return (
              <View>
                <Image
                  style={styles.firstImage}
                  key={index}
                  source={{ uri: element.item.node.image.uri }}
                />
              </View>
            )
          }
          else {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADD_INFO, { image: element.item.node.image })}>
                <Image
                  key={index}
                  source={{ uri: element.item.node.image.uri }}
                  style={styles.galleryPhoto} />
              </TouchableOpacity>
            )
          }
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