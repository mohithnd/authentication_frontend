import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin";
import Protection from "./Protection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <Protection>
            <Admin />
          </Protection>
        }
      />
    </Routes>
  );
}

export default App;
