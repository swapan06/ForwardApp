import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from './navigationStrings';
import Bottomnavigation from './Bottomnavigation';
import ChangePassword from '../Screens/MainScreens/ChangePassword/ChangePassword';
import EditProfile from '../Screens/MainScreens/EditProfile/EditProfile';
import PostDetail from '../Screens/MainScreens/PostDetail/PostDetail';


 


function HomeStack() {
    const Stack = createStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={navigationStrings.BOTTOM_TAB} 
                component={Bottomnavigation} options={{ headerShown: false }}  />
                 <Stack.Screen
                name={navigationStrings.CHANGE_PASSWORD}
                component={ChangePassword}
                options={{ headerShown: false }}
            />
              <Stack.Screen
                name={navigationStrings.EDIT_PROFILE}
                component={EditProfile}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name={navigationStrings.POST_DETAILS}
                component={PostDetail}
                options={{ headerShown: false }}
            />
            </Stack.Navigator>
        </>
    )
}

export default HomeStack;