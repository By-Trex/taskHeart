import {NAME_CHANGED,TELEFON_CHANGED} from "../actions/types"

const INITIAL_STATE = {
    name:"",
    telefon:""
}

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return{...state, name : action.payload}
        case TELEFON_CHANGED:
            return{...state, telefon : action.payload}
        default:
            return state;
    }
}