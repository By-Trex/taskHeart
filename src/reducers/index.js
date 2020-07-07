import { combineReducers } from "redux"
import taskHeartReducers from "./taskHeartReducers"

export default combineReducers({
    takeAstepResponse:taskHeartReducers
})