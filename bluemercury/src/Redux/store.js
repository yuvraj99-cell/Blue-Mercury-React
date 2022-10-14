import { legacy_createStore as createstore } from "redux";
import { reducer } from "./reducer";

export const store = createstore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());