import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Note: syntaxe récente, parfois juste 'import thunk' selon version
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;