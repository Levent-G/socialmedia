import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createNote } from "../redux/actions/NoteAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
const NotForm = (props) => {
  const [notBaslik, setNotBaslik] = useState("");
  const [notAciklama, setNotAciklama] = useState("");
  const tarih = Date.now();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNoteApi({
      notBaslik: notBaslik,
      notAciklama: notAciklama,
      userId: props.userId,
      tarih: tarih,
    });
  };

  const createNoteApi = async (body) => {
    try {
      dispatch(createNote(body));
      toast.success("Note Başarılı bir şekilde yüklendi", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className="bg-slate-100 p-5 max-w-4xl">
      <Typography variant="h5" className="text-center ">
        NOT EKLE
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={notBaslik}
          margin="normal"
          required
          fullWidth
          name="notBaslik"
          label="Not Başlık gir"
          type="text"
          id="notBaslik"
          onChange={(e) => setNotBaslik(e.target.value)}
        />

        <TextField
          value={notAciklama}
          margin="normal"
          required
          fullWidth
          name="notAciklama"
          label="Not Aciklama gir"
          type="text"
          id="notAciklama"
          onChange={(e) => setNotAciklama(e.target.value)}
        />
        <Button variant="contained" fullWidth className="w-full" type="submit">
          Ekle
        </Button>
      </form>
    </div>
  );
};

export default NotForm;
