import combineReducers from "./Reducer/index"

import {createStore} from "redux"

let store=createStore(combineReducers)
export default store;
