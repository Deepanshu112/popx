import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-screen bg-gray-100">
      <div className="px-6 pb-10 text-center">
        <h1 className="text-xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="mt-6 space-y-3">
          <button 
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold shadow-md"
            onClick={() => navigate("/Signup")}
          >
            Create Account
          </button>
          <button
            className="w-full bg-purple-200 text-gray-900 py-3 rounded-lg font-semibold shadow-md"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
