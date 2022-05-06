import userStatus from './auth'
import { combineReducers } from 'redux'
import types from '../types';
import appIntro from './appIntro';

const rootReducers = combineReducers(
    {
        userStatus,
        appIntro,
    }
)

export default rootReducers;

