import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneUser } from "../redux/actions/UsersAction";
import { getOneUserByToken } from "../redux/actions/UsersAction";

import Typography from "@mui/material/Typography";
import UserPostComp from "../components/UserPostComp";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";
import Note from "../pages/Note";
import Button from "@mui/material/Button";
import UserCountComp from "../components/UserCountComp";
import Follow from "../components/Follow";
const UserPage = () => {
  const { userId } = useParams();
  const state = useSelector((state) => state.getoneusers);

  const stateToken = useSelector((stateToken) => stateToken.getoneuserstoken);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [showNoteControl, setShowNoteControl] = useState(false);
  useEffect(() => {
    dispatch(getOneUserByToken());
  }, [token, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(getOneUser(userId));
    }
  }, [userId, dispatch]);

  const showNote = async (e) => {
    if (showNoteControl) {
      setShowNoteControl(false);
    } else {
      setShowNoteControl(true);
    }
  };

  return (
    <div>
      <div className="w-screen h-48 bg-sky-600"></div>
      <div className="w-screen ">
        <img
          alt={state.getoneusers?.userName}
          src={state.getoneusers?.avatarUrl}
          className="float-left m-2 w-28 h-28 relative -top-10 "
        />

        <p className="text-3xl  ">{state.getoneusers?.userName}</p>

        <Typography gutterBottom variant="h5" component="div">
          {userId == stateToken.getoneuserstoken?.id ? (
            <div className="mt-5">
              <Link to={`/settings`} variant="body2">
                <IconButton aria-label="settings">
                  <SettingsIcon />
                </IconButton>
              </Link>
            </div>
          ) : (
            ""
          )}
        </Typography>
      </div>
      <Button variant="contained" onClick={showNote}>
        {showNoteControl && "Not kapat"}
        {!showNoteControl && "Notlar"}
      </Button>
      <div className="ml-5">
        <Typography className=" float-left text-gray-500">
          {state.getoneusers?.message}{" "}
        </Typography>

        <br />
        <UserCountComp userId={userId} />
        {userId != stateToken.getoneuserstoken?.id ? (
          <Follow
            takipEdilen={userId}
            takipEden={stateToken.getoneuserstoken?.id}
            userName={state.getoneusers?.userName}
          />
        ) : (
          ""
        )}
      </div>

      <div className="mt-28 ml-5 mb-28">
        {showNoteControl ? (
          <Note
            girisYapan={stateToken.getoneuserstoken?.id}
            userIdParam={userId}
            userName={state.getoneusers?.userName}
          />
        ) : (
          <UserPostComp userId={userId} />
        )}
      </div>
    </div>
  );
};

export default UserPage;
