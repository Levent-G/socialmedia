import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";

import IconButton from "@mui/material/IconButton";
import { getOneUserPostCount } from "../redux/actions/UsersAction";
import { getOneUserLikeCount } from "../redux/actions/UsersAction";
import { getOneUserCommentCount } from "../redux/actions/UsersAction";

const UserCountComp = (props) => {
  const userId = props.userId;
  const statePostCount = useSelector(
    (statePostCount) => statePostCount.getoneuserpostcount
  );
  const stateLikeCount = useSelector(
    (stateLikeCount) => stateLikeCount.getoneuserlikecount
  );
  const stateCommentCount = useSelector(
    (stateCommentCount) => stateCommentCount.getoneusercommentcount
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(getOneUserPostCount(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(getOneUserLikeCount(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(getOneUserCommentCount(userId));
    }
  }, [userId, dispatch]);
  console.log(statePostCount.getoneuserpostcount);
  return (
    <div>
      <IconButton aria-label="add to favorites">
        {statePostCount.getoneuserpostcount}
        <ShareIcon className="ml-1" />
      </IconButton>
      <IconButton aria-label="add to favorites">
        {stateLikeCount.getoneuserlikecount}
        <FavoriteIcon className="ml-1" />
      </IconButton>

      <IconButton aria-label="comment">
        {stateCommentCount.getoneusercommentcount}
        <CommentIcon className="ml-1"></CommentIcon>
      </IconButton>
    </div>
  );
};

export default UserCountComp;
