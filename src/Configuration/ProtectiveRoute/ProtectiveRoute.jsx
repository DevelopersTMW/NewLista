import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

function ProtectiveRoute({ component }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const profileComplete = localStorage.getItem("ProfileComplete");

    if (profileComplete === "true") {
      setLoading(false); // Allow access
    } else {
      navigate("/admin/account-setting"); // Redirect to complete profile
    }
  }, [navigate]);

  if (loading) {
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
