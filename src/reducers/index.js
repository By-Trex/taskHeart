import { combineReducers } from "redux"
import taskHeartReducers from "./taskHeartReducers"

export default combineReducers ({
    taskHeartResponse:taskHeartReducers
})