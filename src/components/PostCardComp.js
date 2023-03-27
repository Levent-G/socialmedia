import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import LikeComp from "../components/LikeComp";
import ShareComp from "../components/ShareComp";
import CommentComp from "../components/CommentComp";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
const PostCardComp = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {props.state.map((posts, index) => (
        <div key={index}>
          <Card className="m-5" sx={{ maxWidth: 755 }}>
            <div>
              <CardMedia
                component="img"
                height="194"
                image={posts?.text}
                alt="Paella dish"
              />
              <Link to={`/getoneuser/${posts?.userId}`} variant="body2">
                <ListItemAvatar>
                  <Avatar
                    alt={posts?.userName}
                    src={posts?.avatarUrl}
                    className="float-left m-2"
                  />
                </ListItemAvatar>
              </Link>

              <Typography className=" float-left pt-5">
                {posts?.userName}
              </Typography>
              <Typography className="text-gray-400 float-right ">
                {posts?.createdAt}
              </Typography>
              <Typography className="pt-2 pb-3 float-left text-ellipsis overflow-hidden w-full whitespace-nowrap text-left">
                {posts?.title}
              </Typography>
              <br />
            </div>
            <div className="float-left">
              <LikeComp postsId={posts?.id} userId={props.tokenUser?.id} />
            </div>
            <div className="float-left">
              <ShareComp
                title={posts?.title}
                text={posts?.text}
                userId={props.tokenUser?.id}
              />
            </div>
            <div className="float-left text-left">
              <IconButton aria-label="comment" onClick={handleExpandClick}>
                <CommentIcon
                  expand={expanded}
                  aria-expanded={expanded}
                ></CommentIcon>
              </IconButton>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CommentComp postsId={posts?.id} user={props.tokenUser} />
              </Collapse>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export default PostCardComp;
