import {RESULT_ARRAY} from "../actions/types"

const INITIAL_STATE = {
    resultArray:[]
}

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case RESULT_ARRAY:
            return{...state, resultArray : action.payload}
        default:
            return state;
    }
}