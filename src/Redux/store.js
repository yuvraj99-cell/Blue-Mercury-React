import { applyMiddleware, legacy_createStore as createstore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
const middleware = applyMiddleware(thunk)
export const store = createstore(reducer,middleware);
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());