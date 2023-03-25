import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { followControl } from "../redux/actions/FollowAction";
import { createFollow } from "../redux/actions/FollowAction";
const Follow = (props) => {
  const takipEdilen = props.takipEdilen;
  const takipEden = props.takipEden;
  const [status, setStatus] = useState("olumsuz");

  const state = useSelector((state) => state.followcontrol);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(followControl(props.takipEden, props.takipEdilen));
  }, [dispatch]);

  function followFunction(takipEdilen, takipEden, status) {
    const followResp = createFollows({
      status: status,
      takipEdilen: takipEdilen,
      takipEden: takipEden,
    });
  }
  const createFollows = async (body) => {
    dispatch(createFollow(body));
  };

  return (
    <div>
      {state.followcontrol?.map((follow) => (
        <>
          <>
            <Button
              type="submit"
              variant="contained"
              onClick={() => followFunction(takipEdilen, takipEden, status)}
            >
              Takip Ediliyor
            </Button>
          </>
        </>
      ))}
      {console.log(state.followcontrol, "takipEdenee")}
      {state.followcontrol?.length === 0 ? (
        <>
          <Button
            type="submit"
            variant="contained"
            onClick={() => followFunction(takipEdilen, takipEden, status)}
          >
            Takip Et
          </Button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Follow;
