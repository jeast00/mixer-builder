import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import indexReducer from "../reducers/indexReducer"
import { composeWithDevTools } from 'redux-devtools-extension';


const indexStore = () => {
    return createStore(
        indexReducer, composeWithDevTools(applyMiddleware(thunk))
    )
}

export default indexStore