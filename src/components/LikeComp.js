import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GetLikesAction } from "../redux/actions/LikesAction";
import { addLike } from "../redux/actions/LikesAction";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LikeComp = (props) => {
  // LİKE GET START ------------------------------------------------------------------------------------------------------
  const stateLike = useSelector((stateLike) => stateLike.likes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLikesAction());
  }, [dispatch]);

  // LİKE GET END ------------------------------------------------------------------------------------------------------

  // LIKLE POST START--------------------------------------------
  function likeFunction(postsId, userId) {
    const LikeResp = createLike({
      postId: postsId,
      userId: userId,
    });
  }
  const createLike = async (body) => {
    try {
      dispatch(addLike(body));
      toast.success("Like Başarılı", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  // LIKLE POST END--------------------------------------------

  return (
    <div>
      {stateLike.likes?.map((likes, index) => (
        <div key={index} className="float-left">
          {likes?.userId === props.userId &&
          likes?.postId === props?.postsId ? (
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon className="text-red-600 " />
              </IconButton>
            </div>
          ) : (
            ""
          )}
        </div>
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
