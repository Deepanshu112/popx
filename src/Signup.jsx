import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [agency, setAgency] = useState("yes");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agencys, setAgencys] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!fullName || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Save user details in localStorage
    localStorage.setItem("user", JSON.stringify({ fullName, email, password }));

    alert("Account Created Successfully!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex flex-col justify-center h-screen px-6 bg-gray-100">
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">Create your PopX account</h1>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-900">Full Name*</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-900">Phone Number*</label>
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-900">Email Address*</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-900">Password*</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-900">Agency Name*</label>
            <input
              type="text"
              placeholder="Agency Name"
              value={agencys}
              onChange={(e) => setAgencys(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-900">
              <span className="text-purple-700">Are you an Agency?*</span>
            </label>
            <div className="flex items-center mt-2 space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
