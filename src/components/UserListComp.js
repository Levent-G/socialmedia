import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const UserListComp = (props) => {
  return (
    <div className="mt-5">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        key=""
      >
        {props.state
          ? props.state.map((users) => (
              <>
                <ListItem alignItems="flex-start">
                  <Link to={`/getoneuser/${users?.id}`} variant="body2">
                    <ListItemAvatar>
                      <Avatar alt={users?.userName} src={users?.avatarUrl} />
                    </ListItemAvatar>
                  </Link>
                  <ListItemText
                    primary={users?.userName}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {users?.userName}
                        </Typography>
                        — {users?.message}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))
          : ""}
      </List>
    </div>
  );
};

export default UserListComp;
