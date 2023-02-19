import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GetLikesAction } from "../redux/actions/LikesAction";
import { addLike } from "../redux/actions/LikesAction";
import IconButton from "@mui/material/IconButton";

const LikeComp = (props) => {
  // LİKE GET START ------------------------------------------------------------------------------------------------------
  const stateLike = useSelector((stateLike) => stateLike.likes);

  const dispatchLike = useDispatch();
  useEffect(() => {
    dispatchLike(GetLikesAction());
  }, [dispatchLike]);
  // LİKE GET END ------------------------------------------------------------------------------------------------------

  // LIKLE POST START--------------------------------------------
  function likeFunction(postsId, userId) {
    const LikeResp = createLike({
      postId: postsId,
      userId: userId,
    });
    console.log(LikeResp);
  }
  const createLike = async (body) => {
    dispatchLike(addLike(body));
  };
  // LIKLE POST END--------------------------------------------

  return (
    <div>
      {stateLike.likes?.map((likes) => (
        <>
          {likes?.userId === props.userId &&
          likes?.postId === props?.postsId ? (
            <>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon className="text-red-600" />
              </IconButton>
            </>
          ) : (
            ""
          )}
        </>
      ))}
      <IconButton
        aria-label="add to favorites"
        onClick={() => likeFunction(props?.postsId, props.userId)}
      >
        <FavoriteIcon />
      </IconButton>
    </div>
  );
};

export default LikeComp;
