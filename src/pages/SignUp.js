import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { Signup } from "../redux/actions/LoginActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const theme = createTheme();
const SignUp = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const state = useSelector((state) => state.signupuser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // --------------------------------------------------------------------------
  const createUserApi = async (body) => {
    try {
      dispatch(Signup(body));
      toast.success("Kayıt Başarılı Lütfen Giriş Yapınız ", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } catch {
      toast.error("Kayıt Başarısız tekrar deneyin", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const signUpFunction = async (e) => {
    e.preventDefault();
    await createUserApi({
      userName: userName,
      password: password,
      avatarUrl: avatarUrl,
      email: email,
      message: message,
    });
  };
  console.log(state.signupuser);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <ToastContainer />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <form onSubmit={signUpFunction}>
            <TextField
              value={userName}
              margin="normal"
              required
              fullWidth
              name="userName"
              label="User Name"
              type="text"
              id="userName"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              value={email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              value={avatarUrl}
              margin="normal"
              required
              fullWidth
              id="avatarUrl"
              label="Avatar Url"
              name="avatarUrl"
              autoComplete="text"
              autoFocus
              onChange={(e) => setAvatarUrl(e.target.value)}
            />
            <TextField
              value={password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password again"
              label="Password again"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              value={message}
              margin="normal"
              required
              fullWidth
              id="message"
              label="message"
              name="message"
              autoComplete="text"
              autoFocus
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Link to={`/`} variant="body2" className="float-right">
              <Typography>Sign In</Typography>
            </Link>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
