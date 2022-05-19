import types from "../types"
import store from "../store"
import { apiGet, apiPost } from "../../utils/utils";
import { CHANGE_PASSWORD, COMMENT_POST, EDIT_PROFILE, IMAGE_UPLOAD, LIKE_POST, POST, POST_SEND, SIGNUP } from "../../config/urls";
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
export const singleImgUpload = (data, header) => {
    return apiPost(IMAGE_UPLOAD, data, header);
}
// ------------intro action-----------------------
export const Intro = (data) => {
    console.log("data----------", data)
    dispatch({
        type: types.INTRO,
        payload: data,
    })
};
// --------------post_send_api--------------------
export const postSend = (data, header) => {
    return new Promise((resolve, reject) => {
        apiPost(POST_SEND, data, header)
            .then((res) => {

                resolve(res);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// -----------------get post api-----------------
export const getPost = (query = '') => {
    return apiGet(POST + query)

}

//   -----------------Like post api---------------

export const getLike = (query = "", header = {}) => {
    console.log(query)
    return apiPost(LIKE_POST + query)
}
// --------------------Comment post api--------------
export const postComment =(query ="" , header={}) => {
    return apiPost(COMMENT_POST + query)
}

// ------------Logout action-----------------------
export const logout = () => {
    dispatch({
        type: types.LOGOUT,

    })
};

