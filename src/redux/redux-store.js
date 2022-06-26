import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";


let reducers = combineReducers ({
    appPage: appReducer,
});

export let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;