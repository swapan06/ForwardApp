import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Route from './src/navigation/Routes';
import store from './src/redux/store';
import { getItem } from './src/utils/utils';





const App = () => {

  useEffect(()=>{
    GoogleSignin.configure()


    getItem('introdata').then((res)=>{
      console.log(res,"getItem>>>res");
      if(res != null){
        actions.Intro(res)
      }
    })

    

    getItem('login').then((res)=>{
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
