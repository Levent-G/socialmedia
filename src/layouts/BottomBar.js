import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOneUserByToken } from "../redux/actions/UsersAction";
import { sendPost } from "../redux/actions/PostActions";
import SendIcon from "@mui/icons-material/Send";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BottomBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const createdAt = Date.now();

  const state = useSelector((state) => state.getoneuserstoken);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getOneUserByToken());
  }, [token, dispatch]);

  const postFunctionApi = async (body) => {
    try {
      dispatch(sendPost(body));
      toast.success("Post Başarılı", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const postFunction = async (e) => {
    e.preventDefault();

    await postFunctionApi({
      title: title,
      text: text,
      userId: state.getoneuserstoken?.id,
      createdAt: createdAt,
    });
  };
  return (
    <div>
      {token ? (
        <Box
          sx={{ height: 320, flexGrow: 1 }}
          className="fixed bottom-0 right-0 "
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            onClick={handleOpen}
            icon={<SpeedDialIcon />}
          ></SpeedDial>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img
                src={state.getoneuserstoken?.avatarUrl}
                className="mr-5 w-11 h-11 float-left"
                alt={state.getoneuserstoken?.userName}
              />
              <p className="font-bold text-xl">
                {state.getoneuserstoken?.userName}
              </p>
              <form onSubmit={postFunction}>
                <TextField
                  value={title}
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title Giriniz"
                  onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                  value={text}
                  margin="normal"
                  required
                  fullWidth
                  name="text"
                  label="foto url giriniz"
                  type="text"
                  id="text"
                  onChange={(e) => setText(e.target.value)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Post <SendIcon />
                </Button>
              </form>
            </Box>
          </Modal>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomBar;
