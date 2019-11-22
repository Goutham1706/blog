import { combineReducers } from 'redux';
import postsReducer from "./postsReducer"
// import getId from "./idReducer"
import  nameReducer from "./nameReducer"

export default combineReducers({posts: postsReducer, names: nameReducer });
