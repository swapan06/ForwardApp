import userStatus from './auth'
import { combineReducers } from 'redux'

const rootReducers = combineReducers(
    {
        userStatus
    }
)
export default rootReducers