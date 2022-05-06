import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import store from '../redux/store';

const { dispatch, getState } = store;

export const saveState = async (detailsList) => {
  try {
    const initState = JSON.stringify(detailsList);
    await AsyncStorage.setItem('data_key', initState);
    console.log('Data is stored in store')
    return initState
  } catch (error) {
    console.log('data is not svaed')
  }
}

export const getData = async () => {
  try {
    const newData = await AsyncStorage.getItem('data_key');
    console.log("new Data is uyrhygmh", newData);
    return newData != null ? JSON.parse(newData) : null
  } catch (error) {
    console.log("app screen get data error")
  }
}


export const saveLogin = async (data) => {
  try {
    const initState = JSON.stringify(data);
    await AsyncStorage.setItem('login_key', initState);
    console.log('Data is stored in store')
    return initState
  } catch (error) {
    console.log('data is not svaed')
  }
}



export const getLogin = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('login_key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("login_data get error")
  }
}


export const removeLogin = async () => {
  try {
    await AsyncStorage.removeItem('login_key')
  } catch (error) {

  }
}


// ----------------
export async function getHeaders() {
  let userData = await AsyncStorage.getItem('userData');
  // console.log("user data header",userData)
  if (userData) {
    userData = JSON.parse(userData);
    return {
      authorization: `Bearer ${userData.access_token}`,
    };
  }
  return {};
}

export function setUserData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('userData', data);
}

//Save wallet info

export function setWalletData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('walletData', data);
}

export function setAppData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('appData', data);
}

export function saveUserAddress(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('saveUserAddress', data);
}

export function saveSelectedAddress(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('saveSelectedAddress', data);
}

export function saveShortCodeData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('saveShortCode', data);
}

export function setItem(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export const storeLogin = async (data) => {
  console.log('utils set login data', data)
  console.log(data, '------------store>my>data')
  try {
      let jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('LoginData', jsonValue)
      console.log(jsonValue, 'store my data')
      return { jsonValue }
  } catch (e) {
      // saving error
      console.log("error rasied to store data")
  }
}

export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
  return AsyncStorage.clear();
}


export async function getUserData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('userData').then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export async function getAppData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('appData').then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export async function clearUserData() {
  return AsyncStorage.removeItem('userData');
}

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {},
) {
  console.log(endPoint, 'endPoint');
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();

    headers = {
      ...getTokenHeader,
      ...headers,
    };

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }
    console.log('check data in api generator>>>', headers);
    //
    axios[method](endPoint, data, {headers})
      .then(result => {
        const {data} = result;

        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch(error => {
        if (error && error.response && error.response.status === 401) {
          sessionHandler(error.response.data.message);
          return rej(error);
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.error) {
            return rej({
              ...error.response.data,
              error: error.response.data.error || 'Network Error',
            });
          }
          return rej(error.response.data);
        } else {
          return rej({error: 'Network Error', message: 'Network Error'});
        }
        return rej(error);
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}

export function randomString(len = 5) {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
