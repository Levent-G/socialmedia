import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { followControl } from "../redux/actions/FollowAction";
import { createFollow } from "../redux/actions/FollowAction";
import { deleteFolow } from "../redux/actions/FollowAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Follow = (props) => {
  const takipEdilen = props.takipEdilen;
  const takipEden = props.takipEden;
  const [status, setStatus] = useState("olumsuz");

  const state = useSelector((state) => state.followcontrol);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(followControl(props.takipEden, props.takipEdilen));
  }, [props.takipEden, props.takipEdilen, dispatch]);

  function followFunction(takipEdilen, takipEden, status) {
    setStatus("olumlu");
    const followResp = createFollows({
      status: status,
      takipEdilen: takipEdilen,
      takipEden: takipEden,
    });
    console.log(followResp);
  }

  const createFollows = async (body) => {
    try {
      dispatch(createFollow(body));
      toast.success("Takip isteği atıldı", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch {
      toast.error("Takip isteği atılamadı", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  function deleteFollowFunction(id) {
    const followResp = deleteFollowApi(id);
    console.log(followResp);
  }
  const deleteFollowApi = async (id) => {
    try {
      dispatch(deleteFolow(id));
      toast.error("Takipten Çıkarıldı", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch {
      toast.error("Takip çıkarılmadı", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      {state.followcontrol?.map((follow, index) => (
        <div key={index}>
          <>
            <Button
              type="submit"
              variant="contained"
              onClick={() => deleteFollowFunction(follow.id)}
            >
              Takipten Çıkar
            </Button>
          </>
        </div>
      ))}

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
