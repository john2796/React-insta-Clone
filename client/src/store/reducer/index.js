import { combineReducers } from "redux";
import instagramReducer from "./instagramReducer";
import authReducers from "./authReducer";
import errorReducers from "./errorReducers";

export default combineReducers({
  instagram: instagramReducer,
  auth: authReducers,
  errors: errorReducers
});
