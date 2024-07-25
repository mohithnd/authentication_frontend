import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

function Login() {
  const { login, error, email, setEmail, password, setPassword, isCalling } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isCalling}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {isCalling ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-600 hover:underline mr-4">
            Back to Home
          </Link>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
