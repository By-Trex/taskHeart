import { RESULT_ARRAYED , SELECTED_MECHANİC_NAME } from "./types"

export const resultArrayed = (resultArray) => {
    return {
        type: RESULT_ARRAYED,
        payload: resultArray
    }   
    }

export const selectedMechanicName = (item) => {
    return{
        type : SELECTED_MECHANİC_NAME,
        payload : item
    }
}

