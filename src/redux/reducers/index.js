import { combineReducers } from "redux";

import LikesReducers from "../reducers/LikesReducers";
import LoginReducer from "../reducers/LoginReducer";
import UsersReducer from "../reducers/UsersReducer";
import PostReducer from "../reducers/PostReducer";
import ShareReducers from "../reducers/ShareReducers";
import CommentReducers from "../reducers/CommentReducers";
import FollowReducers from "../reducers/FollowReducers";

export default combineReducers({
  loginUser: LoginReducer,
  getusers: UsersReducer,
  posts: PostReducer,
  likes: LikesReducers,
  postlikes: LikesReducers,
  sharepost: ShareReducers,
  comments: CommentReducers,
  commentspost: CommentReducers,
  getoneusers: UsersReducer,
  getoneuserpost: PostReducer,
  deletepost: PostReducer,
  getoneuserstoken: UsersReducer,
  logoutuser: LoginReducer,
  sendpost: PostReducer,
  onepost: PostReducer,
  putuser: UsersReducer,
  signupuser: LoginReducer,
  getoneuserpostcount: UsersReducer,
  getoneuserlikecount: UsersReducer,
  getoneusercommentcount: UsersReducer,
  getfollows: FollowReducers,
  postfollows: FollowReducers,
  followcontrol: FollowReducers,
  deletefollow: FollowReducers,
  followcount: FollowReducers,
  followcounttakip: FollowReducers,
  getsearch: UsersReducer,
});
