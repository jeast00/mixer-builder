import { combineReducers } from "redux";
import mixersReducer from "./mixersReducer";


const indexReducer = combineReducers({
    mixers: mixersReducer
})

export default indexReducer