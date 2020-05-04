import { combineReducers } from "redux";
import userReducer from "./reducers/user.reduer";

const reducer = combineReducers({
  user: userReducer,
});
export default reducer;
