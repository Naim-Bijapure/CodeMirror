import ThunkMiddleWare from "redux-thunk";
import { createStore,applyMiddleware,combineReducers } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import MiddleWare from "../middleware";
import { handleFile } from "./handleFile";
export default function ConfigureStore(preloadedState) {
    
    const middlewares=[ThunkMiddleWare];
    const middlewareEnhancer=applyMiddleware(...middlewares);
    // const reducers=combineReducers({handleFile,handleFile2});
    const store=createStore(handleFile,preloadedState,composeWithDevTools(applyMiddleware(...middlewares)));
    

    return store;
}