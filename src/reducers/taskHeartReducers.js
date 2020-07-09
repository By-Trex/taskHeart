import { RESULT_ARRAYED , SELECTED_MECHANİC_NAME} from "../actions/types"

const INITIAL_STATE = {
    resultArray: [],
    item: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESULT_ARRAYED:
            return { ...state, resultArray: action.payload }
        case SELECTED_MECHANİC_NAME:
            return { ...state, item: action.payload }
        default:
            return state;
    }
}