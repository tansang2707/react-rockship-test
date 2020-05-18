import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import album from "./reducers/album"
import albumDetail from "./reducers/albumDetail"
import thunk from "redux-thunk"


const reducers = combineReducers({
    album,
    albumDetail
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)))