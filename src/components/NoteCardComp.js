import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { deleteNote } from "../redux/actions/NoteAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
const NoteCardComp = (props) => {
  const dispatch = useDispatch();

  function deleteNoteApi(id) {
    const deleteResp = deletenoteFunc(id);
  }
  const deletenoteFunc = async (id) => {
    try {
      dispatch(deleteNote(id));
      toast.error("Note Silindi", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className="float-left m-5 h-auto mb-20 p-5">
        {props.girisYapan == props.userIdParam ? (
          <Button
            className="float-right"
            onClick={() => deleteNoteApi(props.notes?.id)}
          >
            {" "}
            <CloseIcon />
          </Button>
        ) : (
          ""
        )}

        <CardActionArea>
          <CardMedia
            component="img"
            image="https://dnu7hke84lua8.cloudfront.net/catalog/product/cache/dd403df650d87109edf9eb9baa8a27f8/b/e/be-happy-spiralli-not-defteri-16not-deft-afd2_42gxt9mljjwdyynh.webp"
            alt="Paella dish"
            className="w-28 h-28"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.notes?.notBaslik}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.notes?.notAciklama}
            </Typography>
            <Typography
              variant="h7"
              color="text.secondary"
              className="float-right"
            >
              {props.notes?.tarih}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default NoteCardComp;
