import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Reducers/authSlice/authSlice";

function ProtectiveRoute({ component }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const profileComplete = localStorage.getItem("ProfileComplete");
  const ApiKey = import.meta.env.VITE_API_KEY;

  const { user, loading, error } = useSelector((state) => state.auth);
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(fetchUser({ token, apiKey: ApiKey }));
    }
  }, [dispatch, token, ApiKey]);

  useEffect(() => {
    // Wait until Redux loading is complete and user is fetched
    if (!loading) {
      if (!token) {
        navigate("/login"); // fallback if fetch failed
      } else if (profileComplete !== "true") {
        navigate("/admin/account-setting");
      }
      setLocalLoading(false);
    }
  }, [loading, user, profileComplete, navigate]);

  if (localLoading) {
    return (
      <div
        style={{
          position: "absolute",
          left: "45%",
          top: "50%",
          zIndex: "1000",
        }}
      >
        <Spinner />
      </div>
    );
  }

  return component;
}

export default ProtectiveRoute;
