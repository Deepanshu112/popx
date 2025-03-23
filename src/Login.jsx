import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored user details
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found! Please register.");
      return;
    }

    if (email !== storedUser.email || password !== storedUser.password) {
      alert("Invalid email or password!");
      return;
    }

    // Store user session data
    localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

    navigate("/account-settings"); // Redirect to Account Settings
  };

  return (
    <div className="flex flex-col py-6 h-screen px-6 bg-gray-100">
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">Sign in to your PopX account</h1>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-900">
              <span className="text-purple-700">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-900">
              <span className="text-purple-700">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
