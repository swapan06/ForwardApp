import { createStore ,applyMiddleware} from "redux";
import rootReducers from "./reducers";
import thunk from 'redux-thunk';
const middlewares = [thunk];

const store = createStore(rootReducers, applyMiddleware(...middlewares))

export default store;