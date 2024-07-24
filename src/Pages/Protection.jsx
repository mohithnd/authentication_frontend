import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { API_BASE } from "../Configs/ServerConfig";

function Protection({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoading(false);
        setIsLoggedIn(false);
        return;
      }

      try {
        const config = {
          headers: {
            "x-access-token": token,
          },
        };
        const response = await axios.post(
          `${API_BASE}/auth/validate`,
          {},
          config
        );

        if (response?.data?.success) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default Protection;
