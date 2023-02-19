import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneUserPost } from "../redux/actions/PostActions";
import PostCardComp from "../components/PostCardComp";

const UserPostComp = (props) => {
  const state = useSelector((state) => state.getoneuserpost);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.userId) {
      dispatch(getOneUserPost(props.userId));
    }
  }, [props.userId, dispatch]);

  return (
    <>
      <PostCardComp state={state.getoneuserpost} />
    </>
  );
};

export default UserPostComp;
