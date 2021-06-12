

export const fetchMixers = () => {
    return dispatch => {
        fetch("/mixers")
        .then(resp => resp.json())
        .then(mixers => dispatch({ type: "SHOW_MIXERS", payload: mixers }))
    }
}