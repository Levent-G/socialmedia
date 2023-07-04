import { React, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NoteCardComp from "../components/NoteCardComp";
import Box from "@mui/material/Box";
import NotForm from "../components/NotForm";
import { useSelector, useDispatch } from "react-redux";
import { getUserNote } from "../redux/actions/NoteAction";
const Note = (props) => {
  const state = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.userIdParam) {
      dispatch(getUserNote(props.userIdParam));
    }
  }, [props.userIdParam, dispatch]);
  console.log(state.notes);
  return (
    <div>
      {" "}
      <Box className="mr-auto ml-auto">
        {props.girisYapan == props.userIdParam ? (
          <NotForm userId={props.userIdParam} />
        ) : (
          ""
        )}

        <Grid>
          {state.notes.length > 0 ? (
            <>
              <Typography variant="h5" className=" pb-5 bg-orange-200 w-96 p-5">
                {props.userName} NOTE
              </Typography>
              {state.notes?.map((note, index) => (
                <div key={index}>
                  <Grid>
                    <NoteCardComp
                      notes={note}
                      girisYapan={props.girisYapan}
                      userIdParam={props.userIdParam}
                    />
                  </Grid>
                </div>
              ))}
            </>
          ) : (
            <div className="w-80 p-5 text-white bg-red-500">
              <h3>
                {" "}
                <p className="text-black font-bold float-left mr-2 text-2xl">
                  {props.userName}
                </p>
                Not Eklememiş !
              </h3>
            </div>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Note;
