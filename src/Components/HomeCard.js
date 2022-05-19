import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../style/responsiveSize';
import { images } from '../constants/images';
import strings from '../constants/lang';
import colors from '../style/colors';
import { isArray, isEmpty } from 'lodash';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import navigationStrings from '../navigation/navigationStrings';

export default function HomeCard({

  postDetail = '',
  likePost,
  comment = '',
  data = {},
  navigation,


}) {
  const [snapState, setSnapState] = useState(0);
  return (
    <View style={styles.viewContainer}>
      <View style={{ flexDirection: 'row', paddingTop: moderateScale(10), justifyContent: "space-between", alignItems: 'center', marginHorizontal: moderateScale(16) }}>
        <View style={{ flexDirection: "row" }}>
          <View >
            <Image source={{ uri: data.item.user.profile }} style={styles.userProfile} />
          </View>
          <View style={{ justifyContent: 'center', marginLeft: moderateScale(10) }}>
            <Text style={{ color: colors.white, fontSize: textScale(16) }} > {data.item.user.first_name} {data.item.user.last_name}</Text>
            <Text style={{ color: '#AEAEAE' }}> {data.item.location_name}</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', height: height / 20 }}>
          <Image source={images?.dots} />
        </View>
      </View>

      <View >
        {!!(
          data?.item?.images?.file &&
          isArray(data?.item?.images?.file) &&
          data?.item?.images?.file.length
        ) ? (
          <>
            <Carousel
              data={data?.item?.images?.file}
              sliderWidth={moderateScale(width - 65)}
              itemWidth={moderateScale(width - 20)}
              scrollEnabled={data?.item?.images?.file.length > 1 ? true : false}
              horizontal
              onSnapToItem={index => setSnapState(index)}
              // hasParallaxImages={true}
              renderItem={i => {
                if (i.item != null && typeof i.item != 'object') {
                  return (
                    <TouchableOpacity activeOpacity={1} onPress={() => postDetail(i.item)}>
                      <Image
                        source={{ uri: i.item }}
                        style={styles.postImage}

                      />
                    </TouchableOpacity>
                  );
                }
              }}
            />
          </>
        ) : null}

        {/* Pagination dots */}
        <Pagination
          dotsLength={
            !!(
              data?.item?.images?.file &&
              isArray(data?.item?.images?.file) &&
              data?.item?.images?.file.length > 1
            )
              ? data?.item?.images?.file.length
              : []
          }
          activeDotIndex={snapState}
          containerStyle={{ paddingVertical: 0, marginTop: 0 }}
          dotColor={'red'}
          dotStyle={{ width: 8, height: 8, borderRadius: 12 / 2 }}
          inactiveDotStyle={{ width: 20, height: 20, borderRadius: 20 / 2 }}
          inactiveDotColor={'black'}
          inactiveDotOpacity={0.4}
          activeOpacity={0.8}
          dotContainerStyle={{ marginHorizontal: 2 }}
        />
      </View>
      <View style={{
        marginHorizontal: moderateScale(16),
        marginVertical: moderateScale(10)
      }}>
        <Text style={{ color: colors.white }}>{data.item.description}</Text>
        <Text style={{ color: colors.whiteOpacity50, marginTop: moderateScale(10) }}> {data.item.time_ago}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: moderateScaleVertical(16),
          flexWrap: "wrap",
          paddingBottom: moderateScale(12)
        }}>
        <TouchableOpacity style={{ alignItems: 'center' }}  onPress={comment}>
          <Text style={{ color: colors.white }}> {strings.COMMENTS} {data.item.comment_count}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center' }} onPress={likePost}>
          <Text style={{ color: colors.white }}>{strings.LIKES} {data.item.like_count} </Text>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={images?.direction} style={{ height: 10 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    width: moderateScale(width - 48),
    alignSelf: 'center',
    marginVertical: moderateScaleVertical(10),
    marginHorizontal: moderateScale(16),
    backgroundColor: '#4C4C4C',
    borderRadius: moderateScale(10),


  },
  userProfile: {
    height: moderateScale(width / 10),
    width: moderateScale(width / 10),
    borderRadius: moderateScale(width / 20),
  },

  textStyle: {
    fontSize: textScale(13),
    color: 'red',
  },
  postStyle: {
    width: moderateScale(width - 68),
    height: moderateScale(width - 40),
    marginVertical: moderateScaleVertical(16),
    alignSelf: 'center',
  },
  dotStyle: {
    justifyContent: 'flex-end',
    marginHorizontal: moderateScale(8),
    flex: 0.15,
  },
  postImage: {
    width: moderateScale(width - 50),
    height: moderateScale(width - 40),
    marginVertical: moderateScaleVertical(10),
    alignSelf: 'center',
  },
});