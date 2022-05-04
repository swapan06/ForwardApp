import types from "../types"
import store from "../store"
import { apiPost } from "../../utils/utils";
import { SIGNUP } from "../../config/urls";
import { LOGIN } from "../../config/urls";
import { setUserData } from "../../utils/utils";


const { dispatch } = store
export const saveUserData = (data) => {
    console.log(data)
    dispatch({
        type: types.LOGIN,
        payload: data
    })
    
};
export function signUp(data) {
    return apiPost(SIGNUP, data);
}
export const login = (data) => {
    console.log(data, 'the given data')
    return new Promise((resolve, reject) => {
      apiPost(LOGIN, data)
        .then((res) => {
            setUserData(res.data).then(suc => {
                    saveUserData(res.data);
                    resolve(res);
                })
                .catch((error) => {
                  reject(error);
            })
       
        });
    });
  };
  export const Intro = (data) => {
    console.log("data>>>>>>>>>>>>>>>>>>", data)
    dispatch({
        type: types.INTRO,
        payload: data,
    })
};
  export const Logout = () => {
    dispatch({
        type: types.LOGOUT,
       
    })
};
