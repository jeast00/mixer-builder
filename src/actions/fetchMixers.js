


export const fetchMixers = () => {
    return (dispatch) => {
        fetch("/mixers")
        .then(resp => resp.json())
        .then(mixers => dispatch( { type: "MIXER_OUTPUT", payload: mixers } ) )
    }
}