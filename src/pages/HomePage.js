import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserListComp from "../components/UserListComp";
import PostCardComp from "../components/PostCardComp";
import { useSelector, useDispatch } from "react-redux";
import { GetPostsAction } from "../redux/actions/PostActions";
import { UsersAction } from "../redux/actions/UsersAction";
const HomePage = () => {
  const token = localStorage.getItem("token");
  // GETPOST START--------------------------------------------------------------------
  const state = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPostsAction());
  }, [dispatch]);
  // GETPOST END-------------------------------------------------------------------------
  // GETUSERS START--------------------------------------------------------------------
  const stateUsers = useSelector((stateUsers) => stateUsers.getusers);

  useEffect(() => {
    dispatch(UsersAction());
  }, [dispatch]);
  // GETUSERS END--------------------------------------------------------------------

  // GETLOGINUSER START--------------------------------------------------------------------
  const stateUser = useSelector((stateUser) => stateUser.getoneuserstoken);
  // GETLOGINUSER END--------------------------------------------------------------------
  return (
    <>
      {token ? (
        <>
          <div className="m-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid>
                  <UserListComp state={stateUsers.getusers} />
                </Grid>
                <Grid className="text-center ml-auto mr-auto ">
                  <PostCardComp
                    state={state.posts}
                    tokenUser={stateUser.getoneuserstoken}
                  />
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
