import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Reducers/authSlice/authSlice";
import AlertModal from "../../Components/AlertModal/AlertModal";

function ProtectiveRoute({ component }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const Status = localStorage.getItem("status");
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
    if (!token) {
      navigate("/login");
    } else {
      dispatch(fetchUser({ token, apiKey: ApiKey }));
    }
  }, [dispatch, token, ApiKey]);

  useEffect(() => {
    if (!loading) {
      if (!token) {
        navigate("/login");
      } else if (profileComplete !== "true") {
        if (location.pathname !== "/admin/account-setting") {
          navigate("/admin/account-setting");
          AlertModal({
            icon: "error",
            title: "Access Denied",
            iconColor: "#703BF7",
            text: "Please complete your profile to access this feature.",
          });
        }
      }

      // 🔒 Check plan status for restricted admin pages
      const restrictedRoutes = [
        "/admin/network",
        "/admin/inbox",
        "/admin/myoffers",
        "/admin/analytics",
        "/admin/customer-support",
      ];

      if(!token){
        navigate("/login");
      } else if (
        restrictedRoutes.includes(location.pathname.toLowerCase()) &&
        Status !== "active"
      ) {
        navigate("/pricing");
        AlertModal({
          icon: "warning",
          title: "Upgrade Required",
          text: "You need an active plan to access this feature.",
          iconColor: "#703BF7",
        });
      }

      setLocalLoading(false);
    }
  }, [loading, user, profileComplete, location.pathname]);

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
        <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
      </div>
    );
  }

  return component;
}

export default ProtectiveRoute;
