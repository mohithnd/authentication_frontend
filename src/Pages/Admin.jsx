import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";

function Admin() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Panel
        </h1>
        <div className="mb-6 text-gray-600 text-center">
          This is a test Admin Page for learning Authentication System.
        </div>
        <div className="space-y-4">
          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Log Out
          </button>
          <Link
            to="/"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
