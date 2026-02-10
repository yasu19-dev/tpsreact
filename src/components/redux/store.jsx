import { legacy_createStore as createStore } from "redux";
import stagiaireReducer from "./stagiaireSlice";

const store = createStore(stagiaireReducer);
export default store;