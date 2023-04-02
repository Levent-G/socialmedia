import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetComments } from "../redux/actions/CommentAction";
import { commentPost } from "../redux/actions/CommentAction";
const CommentComp = (props) => {
  // COMMENTS GET START ------------------------------------------------------------------------------------------------------
  const [commentGelen, setCommentGelen] = useState(null);

  const state = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetComments());
  }, [dispatch]);
  // COMMENTS GET END ------------------------------------------------------------------------------------------------------

  // COMMENTS POST START -------------------------------------------
  function commentFunction(text, id, postId) {
    const resp2 = commentPostApi({
      postId: postId,
      text: text,
      userId: id,
    });

    console.log(resp2);
  }
  const commentPostApi = async (body) => {
    try {
      dispatch(commentPost(body));
      toast.success("Post Başarılı", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // COMMENTS POST END -------------------------------------------
  return (
    <div>
      <Box className=" text-left ml-8 ">
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            className="w-full"
            id="input-with-icon-adornment"
            startAdornment={
              <Avatar alt={props?.user.userName} src={props?.user.avatarUrl} />
            }
            onChange={(e) => setCommentGelen(e.target.value)}
          />
          <Button
            onClick={() =>
              commentFunction(commentGelen, props?.user.id, props?.postsId)
            }
          >
            Send
          </Button>
        </FormControl>
      </Box>
      {state.comments?.map((comments) => (
        <>
          {comments?.postId === props?.postsId ? (
            <div>
              <Avatar
                alt={comments?.userName}
                src={comments?.avatarUrl}
                className="float-left mr-2"
              />
              <Typography>{comments?.userName}</Typography>

              <Typography className="text-center text-gray-500">
                {comments?.text}
              </Typography>
              <hr />
            </div>
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
};

export default CommentComp;
