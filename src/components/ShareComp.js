import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { useDispatch } from "react-redux";

import { sharePost } from "../redux/actions/ShareAction";
import IconButton from "@mui/material/IconButton";

const ShareComp = (props) => {
  const dispatch = useDispatch();

  // SHARE POST START -------------------------------------------
  function shareFunction(title, text, userId) {
    const LikeResp = sharePostApi({
      title: title,
      text: text,
      userId: userId,
    });
    console.log(LikeResp);
  }
  const sharePostApi = async (body) => {
    dispatch(sharePost(body));
  };

  // SHARE POST END -------------------------------------------
  return (
    <div>
      <IconButton
        aria-label="share"
        onClick={() => shareFunction(props?.title, props?.text, props?.userId)}
      >
        <ShareIcon />
      </IconButton>
    </div>
  );
};

export default ShareComp;
