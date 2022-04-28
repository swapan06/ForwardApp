import types from "../types"
import store from "../store"

const { dispatch } = store
export const GetStarted = () => {
    dispatch({
        type: types.LOGIN,
    })
     
};
