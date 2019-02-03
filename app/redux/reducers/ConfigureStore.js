import ThunkMiddleWare from "redux-thunk";
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { handleFile } from "./handleFile";
export default function ConfigureStore(preloadedState) {
    
    const middlewares=[ThunkMiddleWare];
    const store=createStore(handleFile,preloadedState,composeWithDevTools(applyMiddleware(...middlewares)));
    

    return store;
}