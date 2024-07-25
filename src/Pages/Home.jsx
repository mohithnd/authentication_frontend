import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to the Authentication System
        </h1>
        <p className="text-gray-600 mb-8">
          Explore our secure authentication features and manage your account
          with ease.
        </p>
        <div className="space-y-4">
          <Link
            to="/admin"
            className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Admin Panel
          </Link>
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="block w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
        {!isLoggedIn && (
          <p className="mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
