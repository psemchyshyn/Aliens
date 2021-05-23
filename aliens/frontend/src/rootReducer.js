import { combineReducers } from "redux";
import loginReducer from "./modules/Auth/reducers/loginUser"
// import todoReducer from "./modules/Dashboard/reducers/todoReducer";

const rootReducer = combineReducers({
  user: loginReducer,
});

export default rootReducer;