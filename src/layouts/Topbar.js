import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import LeftBar from "./LeftBar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOneUserByToken } from "../redux/actions/UsersAction";
import { Logout } from "../redux/actions/LoginActions";

const pages = ["Products", "Pricing", "Blog"];

const Topbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const token = localStorage.getItem("token");
  const state = useSelector((state) => state.getoneuserstoken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneUserByToken());
  }, [token, dispatch]);

  const navigate = useNavigate();
  const logout = async (e) => {
    e.preventDefault();
    toast.error("Exit Success", {
      position: toast.POSITION.TOP_RIGHT,
    });
    dispatch(Logout(state.getoneuserstoken?.id));
    await localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      {token ? (
        <AppBar position="static" className="text-white">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <LeftBar sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/homepage"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                GOPTAGRAM
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <ul className="flex  ">
                  <li className="text-white mr-3 hover:opacity-75">
                    <a
                      className="cursor-pointer hover:opacity-75"
                      href="/postlist"
                    >
                      Post List
                    </a>
                  </li>
                  <li className="text-white mr-3 hover:opacity-75">
                    <a className="cursor-pointer hover:opacity-75" href="/chat">
                      Chat
                    </a>
                  </li>
                </ul>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <p className="text-white text-sm m-2">
                      {" "}
                      {state.getoneuserstoken?.userName}
                    </p>
                    <Avatar
                      alt="Remy Sharp"
                      src={state.getoneuserstoken?.avatarUrl}
                      className="mr-5"
                    />
                  </IconButton>
                </Tooltip>
                <Button
                  variant="contained"
                  color="error"
                  onClick={logout}
                  className="ml-9"
                  size="small"
                >
                  Exit
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to={`/getoneuser/${state.getoneuserstoken?.id}`}
                      variant="body2"
                    >
                      <Typography textAlign="center">profile</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        ""
      )}
    </>
  );
};

export default Topbar;
