import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneUser } from "../redux/actions/UsersAction";
import { getOneUserByToken } from "../redux/actions/UsersAction";

import Typography from "@mui/material/Typography";
import UserPostComp from "../components/UserPostComp";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import UserCountComp from "../components/UserCountComp";
const UserPage = () => {
  const { userId } = useParams();
  const state = useSelector((state) => state.getoneusers);

  const stateToken = useSelector((stateToken) => stateToken.getoneuserstoken);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getOneUserByToken());
  }, [token, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(getOneUser(userId));
    }
  }, [userId, dispatch]);

  return (
    <div>
      <div className="w-screen h-48 bg-sky-600"></div>
      <div className="w-screen ">
        <img
          alt={state.getoneusers?.userName}
          src={state.getoneusers?.avatarUrl}
          className="float-left m-2 w-28 h-28 relative -top-10 "
        />
        <p className="  pt-5 text-3xl">{state.getoneusers?.userName}</p>

        <Typography gutterBottom variant="h5" component="div">
          {userId == stateToken.getoneuserstoken.id ? (
            <>
              <Link to={`/settings`} variant="body2">
                <IconButton aria-label="settings">
                  <SettingsIcon />
                </IconButton>
              </Link>
            </>
          ) : (
            ""
          )}
        </Typography>
      </div>

      <div>
        <Typography className=" float-left text-gray-500">
          {state.getoneusers?.message}{" "}
        </Typography>
        <br />
        <UserCountComp userId={userId} />
        {userId != stateToken.getoneuserstoken.id ? (
          <Button type="submit" variant="contained">
            Takip Et
          </Button>
        ) : (
          ""
        )}
      </div>

      <div className="mt-28">
        <UserPostComp userId={userId} />
      </div>
    </div>
  );
};

export default UserPage;
