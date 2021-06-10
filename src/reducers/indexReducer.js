import { combineReducers } from "redux";
import mixerIngredientsReducer from "./mixerIngredientsReducer";
import mixersReducer from "./mixersReducer";


const indexReducer = combineReducers({
    mixers: mixersReducer,
    mixer_ingredients: mixerIngredientsReducer
})

export default indexReducer