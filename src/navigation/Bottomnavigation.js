import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { images } from '../constants/images';
import Home from '../Screens/Home/Home';
import Post from '../Screens/Post/Post';
import Profile from '../Screens/Profile/Profile'
import Notification from '../Screens/Notifications/Notification'
import Search from '../Screens/Search/Search'
import colors from '../style/colors';
import navigationStrings from './navigationStrings';
import { moderateScale,moderateScaleVertical,width } from '../style/responsiveSize';
const Tab = createBottomTabNavigator();


function Bottomnavigation() {
  return (
  <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle:{
          backgroundColor: colors.greyF,
          borderTopWidth: moderateScaleVertical(0),
         
      },
      tabBarShowLabel:false
  }} >
      <Tab.Screen 
      name={navigationStrings.HOME}
      component={Home}
      options={{
          tabBarIcon:({focused})=>(
              <Image source={images?.home}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}/>
          ),
      }}
      />
        <Tab.Screen 
      name={navigationStrings.SEARCH}
      component={Search}
      options={{
          tabBarIcon:({focused})=>(
              <Image source={images?.search}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}/>
          ),
      }}
      />
        <Tab.Screen 
      name={navigationStrings.POST}
      component={Post}
      options={{
          tabBarIcon:({focused})=>(
              <Image source={images?.post}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}/>
          ),
      }}
      />
        <Tab.Screen 
      name={navigationStrings.NOTIFICATION}
      component={Notification}
      options={{
          tabBarIcon:({focused})=>(
              <Image source={images?.notify}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}/>
          ),
      }}
      />
        <Tab.Screen 
      name={navigationStrings.PROFILE}
      component={Profile}
      options={{
          tabBarIcon:({focused})=>(
              <Image source={images?.profile}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}/>
          ),
      }}
      />

   </Tab.Navigator>

 
   
  )
}

export default Bottomnavigation;