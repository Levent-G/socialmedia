import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserListComp from "../components/UserListComp";
import PostCardComp from "../components/PostCardComp";
import { useSelector, useDispatch } from "react-redux";
import { GetPostsAction } from "../redux/actions/PostActions";

const HomePage = () => {
  const token = localStorage.getItem("token");
  // GETPOST START--------------------------------------------------------------------
  const state = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPostsAction());
  }, [dispatch]);
  // GETPOST END-------------------------------------------------------------------------
  return (
    <>
      {token ? (
        <>
          <div className="m-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid>
                  <UserListComp />
                </Grid>
                <Grid className="text-center ml-auto mr-auto ">
                  <PostCardComp state={state.posts} />
                </Grid>
              </Grid>
            </Box>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;
