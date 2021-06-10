import { applyMiddleware, createStore } from "redux"
import indexReducer from "../reducers/indexReducer"


export default indexStore = () => {
    return createStore(
        indexReducer, applyMiddleware(thunk)
    )
}