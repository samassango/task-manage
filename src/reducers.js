import { combineReducers } from "redux";
import userReducer from "./reducers/user.reduer";
import shared from "./reducers/shared.reducer";
import jobs from "./reducers/jobs.reducer";

const reducer = combineReducers({
  user: userReducer,
  shared,
  jobs,
});
export default reducer;
