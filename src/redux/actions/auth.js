import types from "../types"
import store from "../store"
import { apiPost } from "../../utils/utils";
import { CHANGE_PASSWORD, EDIT_PROFILE, IMAGE_UPLOAD, SIGNUP } from "../../config/urls";
import { LOGIN } from "../../config/urls";
import { setUserData } from "../../utils/utils";


const { dispatch } = store
export const saveUserData = (data) => {
    dispatch({
        type: types.LOGIN,
        payload: data,
    })

};

export function signUp(data) {
    return apiPost(SIGNUP, data);
}
// ------------Login apipost----------
export const login = (data) => {
    console.log(data, 'the given data')
    return new Promise((resolve, reject) => {
        apiPost(LOGIN, data).then((res) => {
            setUserData(res.data).then(suc => {
                console.log(res?.data, "response ");
                saveUserData(res.data);
                resolve(res);
            }).catch((error) => {
                reject(error);
            })
        });
    });
};

// ------------editProfile apipost----------
export const editProfile = (data) => {
    console.log(data, 'the given data for profile update');
    return new Promise((resolve, reject) => {
        apiPost(EDIT_PROFILE, data)
            .then((res) => {
                saveUserData(res.data);
                resolve(res);
            })
            .catch(error => {
                reject(error);
            });
    });
};
// ------------ changepassword apipost----------
export function changePassword(data) {
    return apiPost(CHANGE_PASSWORD, data);
}
// ------------ singleImgupload apipost----------
export const singleImgUpload = (data) => {
    return apiPost(IMAGE_UPLOAD, data);
}
// ------------intro action-----------------------
export const Intro = (data) => {
    console.log("data----------", data)
    dispatch({
        type: types.INTRO,
        payload: data,
    })
};
// ------------Logout action-----------------------
export const logout = () => {
    dispatch({
        type: types.LOGOUT,

    })
};
