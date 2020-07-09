import { RESULT_ARRAYED, SELECTED_MECHANİC_NAME, SELECT_CARD } from "../actions/types"

const INITIAL_STATE = {
    resultArray: [],
    item: "",
    selectedCard:""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESULT_ARRAYED:
            return { ...state, resultArray: action.payload }
        case SELECTED_MECHANİC_NAME:
            return { ...state, item: action.payload }
        case SELECT_CARD:
            return { ...state, selectedCard: action.payload }
        default:
            return state;
    }
}