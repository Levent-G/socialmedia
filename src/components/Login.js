import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../redux/actions/LoginActions";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fingerprint from "@mui/icons-material/Fingerprint";
const theme = createTheme();

export default function Login() {
  //----LOGİN FUNCTİON START ------------------------------------------------------------------------------------------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const state = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();

  // --------------------------------------------------------------------------
  const loginFunctionApi = async (body) => {
    try {
      dispatch(LoginAction(body));
    } catch {
      toast.error("Password error", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const loginFunction = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      await loginFunctionApi({ email, password });

      await localStorage.setItem("token", state.loginUser.accessToken);
      if (state.loginUser) {
        toast.success("Login Başarılı", {
          position: toast.POSITION.TOP_RIGHT,
        });

        navigate("/homepage");
      } else {
        toast.error("Login Başarısız", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  //----LOGİN FUNCTİON START ------------------------------------------------------------------------------------------------

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>

              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box noValidate sx={{ mt: 1 }}>
                {/* //---------------------------------------------------------------------LOGIN FORM START------------------------------- */}
                <form onSubmit={loginFunction}>
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

                  <Button type="submit" variant="contained">
                    Sing In{" "}
                    <Fingerprint
                      aria-label="fingerprint"
                      color="secondary"
                      className="m-2"
                    />
                  </Button>
                </form>
                {/* //---------------------------------------------------------------------LOGIN FORM END------------------------------- */}

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
