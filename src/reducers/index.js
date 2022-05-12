import LoggedReducer from "./isLogged";
import { combineReducers } from "redux";
const allReducer = combineReducers({
  isLogged: LoggedReducer,
});

export default allReducer;
