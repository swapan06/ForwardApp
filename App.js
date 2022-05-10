import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Route from './src/navigation/Routes';
import store from './src/redux/store';
import { getItem } from './src/utils/utils';
import actions from './src/redux/actions';
import SplashScreen from 'react-native-splash-screen'



const App = () => {

  useEffect(()=>{
    GoogleSignin.configure()

    setTimeout(()=>{
      SplashScreen.hide();
    },3000)

    getItem('introdata').then((res)=>{
      console.log(res,"getItem>>>res");
      if(res != null){
        actions.Intro(res)
      }
    })

    getItem('userData').then((res)=>{
      console.log("login data",res)
      if(!!res){
        console.log("res",res)
        actions.saveUserData(res)
      }
    })
  }, [])
  
  return (
    <Provider store={store}>
    <Route />
  </Provider>
  );
};


export default App;
