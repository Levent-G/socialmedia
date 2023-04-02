import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOnePost } from "../redux/actions/PostActions";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import LikeComp from "../components/LikeComp";
import ShareComp from "../components/ShareComp";
import CommentComp from "../components/CommentComp";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Link } from "react-router-dom";
const OnePostPage = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const stateUser = useSelector((stateUser) => stateUser.getoneuserstoken);
  const { postId } = useParams();
  const state = useSelector((state) => state.onepost);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postId) {
      dispatch(getOnePost(postId));
    }
  }, [postId, dispatch]);
  console.log(state.onepost);
  return (
    <>
      <>
        <Card className="m-5" sx={{ maxWidth: 755 }}>
          <div>
            <CardMedia
              component="img"
              height="194"
              image={state.onepost?.text}
              alt="Paella dish"
            />
            <Link
              to={`/getoneuser/${state.onepost.user?.userId}`}
              variant="body2"
            >
              <ListItemAvatar>
                <Avatar
                  alt={state.onepost.user?.userName}
                  src={state.onepost.user?.avatarUrl}
                  className="float-left m-2"
                />
              </ListItemAvatar>
            </Link>
            <Typography className=" float-left pt-5">
              {state.onepost.user?.userName}
            </Typography>
            <Typography className="text-gray-400 float-right ">
              {state.onepost?.createdAt}
            </Typography>
            <Typography className="pt-2 pb-3 float-left text-ellipsis overflow-hidden w-full whitespace-nowrap text-left">
              {state.onepost?.title}
            </Typography>
            <br />
          </div>
          <div className="float-left">
            <LikeComp
              postsId={state.onepost?.id}
              userId={stateUser.getoneuserstoken?.id}
            />
          </div>
          <div className="float-left">
            <ShareComp
              title={state.onepost?.title}
              text={state.onepost?.text}
              userId={stateUser.getoneuserstoken?.id}
            />
          </div>
          <div className="float-left w-full text-left">
            <IconButton aria-label="comment">
              <CommentIcon
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
              ></CommentIcon>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CommentComp
                postsId={state.onepost?.id}
                user={stateUser.getoneuserstoken}
              />
            </Collapse>
          </div>
        </Card>
      </>
    </>
  );
};

export default OnePostPage;
