import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

function Admin() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin panel</h1>
        <div className="mb-4">
          This Is A Test Admin Page For Learning Authentication System.
        </div>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Admin;
