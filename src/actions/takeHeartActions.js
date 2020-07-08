import { RESULT_ARRAY } from "./types"

export const resultArrayed = (resultArray) => {
    return(dispatch) => {
        dispatch({
            type: RESULT_ARRAY,
            payload: resultArray
        })
    }
}