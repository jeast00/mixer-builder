import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import indexReducer from "../reducers/indexReducer"


const indexStore = () => {
    return createStore(
        indexReducer, applyMiddleware(thunk)
    )
}

export default indexStore