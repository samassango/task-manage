import { combineReducers } from "redux";
import userReducer from "./reducers/user.reduer";

const reducer = combineReducers({
  users: userReducer,
});
export default reducer;
