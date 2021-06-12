

const mixersReducer = (state = { mixers: [] }, action) => {
    switch(action.type) {
        case "SHOW_MIXERS":
            return { ...state, mixers: action.payload }

            default:
                return state;
    }
}

export default mixersReducer
