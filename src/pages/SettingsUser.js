import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getOneUserLikeCount } from "../redux/actions/UsersAction";
import SendIcon from "@mui/icons-material/Send";
import { GetLikesAction } from "../redux/actions/LikesAction";
import { getOneUserByToken } from "../redux/actions/UsersAction";
import { updateUser } from "../redux/actions/UsersAction";

import Popper from "@mui/material/Popper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const SettingsUser = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   STATE OF SETTING START---------------------------------------------
  const [settingUserName, setSettingUserName] = useState(null);
  const [settingEmail, setSettingEmail] = useState(null);
  const [settingAvatarUrl, setSettingAvatarUrl] = useState(null);

  const [settingMessage, setSettingMessage] = useState(null);

  const token = localStorage.getItem("token");
  const state = useSelector((state) => state.getoneuserstoken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneUserByToken());
  }, [token, dispatch]);
  // STATE OF SETTING END---------------------------------------------

  // SETTING FUNCTION START -----------------------------------------------
  const updateOneUserApi = async (body) => {
    try {
      dispatch(updateUser(state.getoneuserstoken?.id, body));
      console.log(
        state.loginUser,
        "askjdlkasjdlksjakdjaslkdjasdlkjasdkljsadlkjsadlkjaklkasjdlk"
      );
    } catch {
      console.log("Login Başarısız!!!!!");
    }
  };
  const settingFunction = async (e) => {
    e.preventDefault();

    const resp = await updateOneUserApi({
      userName: settingUserName,
      avatarUrl: settingAvatarUrl,
      email: settingEmail,
      message: settingMessage,
      accessToken: token,
    });
    console.log(resp);
  };
  // SETTING FUNCTION END -----------------------------------------------

  // LİKELARI ÇEKME START ------------------------------------------------------------------------------------------------------
  const stateLikeCount = useSelector(
    (stateLikeCount) => stateLikeCount.getoneuserlikecount
  );

  useEffect(() => {
    if (state.getoneuserstoken?.id) {
      dispatch(getOneUserLikeCount(state.getoneuserstoken?.id));
    }
  }, [state.getoneuserstoken?.id, dispatch]);
  // LİKELARI ÇEKME END ------------------------------------------------------------------------------------------------------
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="User Name Change" {...a11yProps(0)} />
        <Tab label="Email Adress Change" {...a11yProps(1)} />
        <Tab label="Avatar Url Change" {...a11yProps(2)} />
        <Tab label="Message Change" {...a11yProps(3)} />
        <Tab label="Like Count" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>

      <div className=" ml-auto mr-auto p-20">
        <TabPanel value={value} index={0}>
          <form onSubmit={settingFunction}>
            <TextField
              value={settingUserName}
              margin="normal"
              fullWidth
              name="userName"
              label="User Name"
              type="text"
              id="userName"
              onChange={(e) => setSettingUserName(e.target.value)}
            />
            <div className="mt-3 mb-2  float-left">
              <Button
                variant="contained"
                aria-describedby={id}
                type="button"
                onClick={handleClick}
              >
                Last User Name
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                  {state.getoneuserstoken?.userName}
                </Box>
              </Popper>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              size="small"
              endIcon={<SendIcon />}
              sx={{ mt: 3, mb: 2, width: "250px", float: "right" }}
            >
              Send
            </Button>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <form onSubmit={settingFunction}>
            <TextField
              value={settingEmail}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setSettingEmail(e.target.value)}
            />
            <div className="mt-3 mb-2  float-left">
              <Button
                variant="contained"
                aria-describedby={id}
                type="button"
                onClick={handleClick}
              >
                Last Email
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                  {state.getoneuserstoken?.email}
                </Box>
              </Popper>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              size="small"
              endIcon={<SendIcon />}
              sx={{ mt: 3, mb: 2, width: "250px", float: "right" }}
            >
              Send
            </Button>
          </form>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <form onSubmit={settingFunction}>
            <TextField
              value={settingAvatarUrl}
              margin="normal"
              fullWidth
              id="avatarUrl"
              label="Avatar Url"
              name="avatarUrl"
              autoComplete="text"
              autoFocus
              onChange={(e) => setSettingAvatarUrl(e.target.value)}
            />
            <div className="mt-3 mb-2  float-left">
              <Button
                variant="contained"
                aria-describedby={id}
                type="button"
                onClick={handleClick}
              >
                Last AvatarUrl
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                  <img
                    src={state.getoneuserstoken?.avatarUrl}
                    className="w-20 h-20 rounded "
                    alt={state.getoneuserstoken?.userName}
                  />
                </Box>
              </Popper>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              size="small"
              endIcon={<SendIcon />}
              sx={{ mt: 3, mb: 2, width: "250px", float: "right" }}
            >
              Send
            </Button>
          </form>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <form onSubmit={settingFunction}>
            <TextField
              value={settingMessage}
              margin="normal"
              fullWidth
              id="message"
              label="message"
              name="message"
              autoComplete="text"
              autoFocus
              onChange={(e) => setSettingMessage(e.target.value)}
            />
            <div className="mt-3 mb-2  float-left">
              <Button
                variant="contained"
                aria-describedby={id}
                type="button"
                onClick={handleClick}
              >
                Last Message
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                  {state.getoneuserstoken?.message}
                </Box>
              </Popper>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              size="small"
              endIcon={<SendIcon />}
              sx={{ mt: 3, mb: 2, width: "250px", float: "right" }}
            >
              Send
            </Button>
          </form>
        </TabPanel>
        <TabPanel value={value} index={4}>
          {stateLikeCount.getoneuserlikecount}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon className="text-red-600" />
          </IconButton>
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </div>
    </Box>
  );
};

export default SettingsUser;
