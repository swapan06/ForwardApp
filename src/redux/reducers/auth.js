import { storeLogin } from "../../utils/utils";
import types from "../types";
const initialstate = {
    userData: {}
};
const userStatus = (state = initialstate, action) => {
    switch (action.type) {
        case types.LOGIN: {
            const data = action.payload;
            storeLogin(data)
            console.log("LoginData", data)
            return { ...state.userData, userData: data };
        }
        default: return state;
    }
}
export default userStatus