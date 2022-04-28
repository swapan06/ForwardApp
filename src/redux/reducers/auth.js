import types from "../types";
const initialstate = false;
const userStatus = (state = initialstate, action) => {
    switch (action.type) {
        case types.LOGIN: return state = true;
        default: return state;
    }
}
export default userStatus