import userStatus from './auth'
import { combineReducers } from 'redux'
import types from '../types';

const rootReducers = combineReducers(
    {
        userStatus
    }
)
const appReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return rootReducers(state, action)
}
export default appReducer;

