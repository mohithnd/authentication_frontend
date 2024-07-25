import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

function Protection({ children }) {
  const location = useLocation();

  const { isLoading, isLoggedIn, validateToken } = useContext(AuthContext);

  useEffect(() => {
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
