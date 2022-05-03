import { setItem } from "../../utils/utils";
import types from "../types";
const initialstate = {
    userData: {}
};
const userStatus = (state = initialstate, action) => {
    switch (action.type) {
        case types.LOGIN: {
            const data = action.payload;
            setItem(data)
            console.log("LoginData", data)
            return { ...state.userData, userData: data };
        }
        
        case types.LOGOUT: {
            removeItem('login').then((res) => {
              console.log('res', res)
            })
            return {
              userData: undefined
            }
          }
        default: return state;
    }
}
export default userStatus