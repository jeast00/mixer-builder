import { SHOW_MIXERS } from "./mixerActionType"


export const fetchMixers = () => {
    return dispatch => {
        dispatch({type: SHOW_MIXERS})
        fetch('/mixers')
        .then(resp => resp.json())
        .then(mixers => dispatch({type: SHOW_MIXERS, payload: mixers}))
    }
}