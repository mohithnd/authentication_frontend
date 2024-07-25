import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../Configs/ServerConfig";

export const AuthContext = createContext(null);

export const AuthProider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCalling, setIsCalling] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    validateToken();
  }, []);

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
        localStorage.removeItem("token");
      }
    } catch (err) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async () => {
    try {
      setIsCalling(true);
      setError("");

      const response = await axios.post(`${API_BASE}/users/signin`, {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.data);
        setIsLoggedIn(true);
        setEmail("");
        setPassword("");
        navigate("/admin");
      } else {
        throw new Error(response.data.error.explanation);
      }
    } catch (err) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      setError(
        err?.response?.data?.error?.explanation ||
          "An error occurred during login."
      );
    } finally {
      setIsCalling(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const signup = async () => {
    setError("");
    setIsCalling(true);

    if (password !== password2) {
      setError("Passwords do not match.");
      setIsCalling(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE}/users/signup`, {
        email,
        password,
      });

      if (response.data.success == false) {
        throw new Error(response.data.error.explanation);
      }

      setEmail("");
      setPassword("");
      setPassword2("");
      navigate("/login");
    } catch (err) {
      setError(
        err?.response?.data?.error?.explanation ||
          "An error occurred during signup."
      );
    } finally {
      setIsCalling(false);
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    isCalling,
    setIsCalling,
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    error,
    setError,
    navigate,
    validateToken,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
