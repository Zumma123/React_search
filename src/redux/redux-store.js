import {createStore, combineReducers, applyMiddleware} from "redux"
import  thunkMiddleware from 'redux-thunk'

import { usersReduser } from "./users_reducer"



let reducers=combineReducers({
    usersPage: usersReduser

})

 export const store = createStore(reducers, applyMiddleware(thunkMiddleware))