import { createStore,applyMiddleware } from "redux";
import MiddleWare from "./middleware";
import { handleFile } from "./reducers/handleFile";
const store=createStore(handleFile ,applyMiddleware(MiddleWare));
export default  store;