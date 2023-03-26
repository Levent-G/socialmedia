import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import { getOneUserPostCount } from "../redux/actions/UsersAction";
import { getOneUserLikeCount } from "../redux/actions/UsersAction";
import { getOneUserCommentCount } from "../redux/actions/UsersAction";
import { getFollowCount } from "../redux/actions/FollowAction";
import { getFollowCountTakip } from "../redux/actions/FollowAction";
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

  const stateFollowCount = useSelector(
    (stateFollowCount) => stateFollowCount.followcount
  );
  const stateFollowCountTakip = useSelector(
    (stateFollowCountTakip) => stateFollowCountTakip.followcounttakip
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

  useEffect(() => {
    if (userId) {
      dispatch(getFollowCount(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(getFollowCountTakip(userId));
    }
  }, [userId, dispatch]);
  console.log("userid", userId, "count", stateFollowCount.followcount);

  return (
    <div>
      <IconButton aria-label="comment">
        <p className="font-bold"> {stateFollowCount.followcount}</p>
        <PersonIcon className="ml-1"></PersonIcon>
        <p className="font-bold">Takipci</p>
      </IconButton>

      <IconButton aria-label="comment">
        <p className="font-bold"> {stateFollowCountTakip.followcounttakip}</p>
        <PersonIcon className="ml-1"></PersonIcon>
        <p className="font-bold">Takip</p>
      </IconButton>
      <br />
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
