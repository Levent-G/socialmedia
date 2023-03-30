import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { searchUser } from "../redux/actions/UsersAction";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const SearchUserPage = () => {
  const [searchUserName, setSearchUserName] = useState("");
  const [searchControl, setSearchControl] = useState(false);
  const state = useSelector((state) => state.getsearch);
  const dispatch = useDispatch();
  const searchFunction = async (e) => {
    e.preventDefault();

    try {
      dispatch(searchUser(searchUserName));
      toast.success("User Getirildi", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setSearchControl(true);
    } catch {
      toast.error("error", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setSearchControl(false);
    }
  };

  const [bgColor, setBgColor] = useState("bg-green-500");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBgColor("bg-gray-200");
    }, 10000); // change color after 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <form onSubmit={searchFunction} className="p-10">
        <TextField
          value={searchUserName}
          margin="normal"
          required
          id="title"
          fullWidth
          label="UserName Giriniz"
          onChange={(e) => setSearchUserName(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
      {searchControl ? (
        <div className={`${bgColor} `}>
          <ListItem alignItems="flex-start">
            <Link to={`/getoneuser/${state.getsearch?.id}`} variant="body2">
              <ListItemAvatar>
                <Avatar
                  alt={state.getsearch?.userName}
                  src={state.getsearch?.avatarUrl}
                />
              </ListItemAvatar>
            </Link>
            <ListItemText
              primary={state.getsearch?.userName}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {state.getsearch?.userName}
                  </Typography>
                  — {state.getsearch?.message}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchUserPage;
