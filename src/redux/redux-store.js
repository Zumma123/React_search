import {createStore, combineReducers} from "redux"
import { usersReduser } from "./users_reducer"



let reducers=combineReducers({
    usersPage: usersReduser

})

 export const store = createStore(reducers)