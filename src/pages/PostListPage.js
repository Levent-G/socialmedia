import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { GetPostsAction } from "../redux/actions/PostActions";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";

const PostListPage = () => {
  // GETPOST START--------------------------------------------------------------------
  const state = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPostsAction());
  }, [dispatch]);
  // GETPOST END-------------------------------------------------------------------------

  return (
    <div>
      <ImageList sx={{ width: 1000 }} className="ml-auto mr-auto mt-5">
        {state.posts
          ? state.posts.map((posts, index) => (
              <Link to={`/getonepost/${posts?.id}`} variant="body2" key={index}>
                <ImageListItem key={posts?.text}>
                  <img
                    src={posts?.text}
                    srcSet={posts?.text}
                    alt={posts?.userName}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={posts?.message}
                    subtitle={<span>by: {posts?.userName}</span>}
                    position="below"
                  />
                </ImageListItem>
              </Link>
            ))
          : ""}
      </ImageList>
    </div>
  );
};

export default PostListPage;
