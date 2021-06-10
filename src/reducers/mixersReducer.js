

export default mixersReducer = (state = {mixers: [], loading: false}, action) => {
    switch(action.type) {
        case SHOW_MIXERS:
            return action.mixers;


            default:
                return state;
    }
}