import { removeItem, saveLogin } from "../../utils/utils";
import types from "../types";
const initialstate = {
    userData: null
};
const userStatus = (state = initialstate, action) => {
    switch (action.type) {
        case types.LOGIN: {
            const data = action.payload;
            
            saveLogin(data)
            console.log("LoginData", data)
            return { userData: data };
        }
        
        case types.LOGOUT: {
            removeItem('userData').then((res) => {
              console.log('res', res)
            })
            return {
              userData: null
            }
          }
        default: return state;
    }
}
export default userStatus