import types from "../types"
import store from "../store"
import { apiPost } from "../../utils/utils";
import { SIGNUP } from "../../config/urls";

const { dispatch } = store
export const GetStarted = (data) => {
    console.log(data)
    dispatch({
        type: types.LOGIN,
        payload: data
    })
    
};
export function signUp(data) {
    return apiPost(SIGNUP, data);
}
