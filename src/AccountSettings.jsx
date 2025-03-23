import { useEffect, useState } from "react";

const AccountSettings = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve logged-in user details
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedInUser);
  }, []);

  return (
    <div className="flex flex-col items-center py-6 h-screen bg-gray-100 px-6">
      <div className="max-w-md w-full bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-xl font-semibold text-gray-900">Account Settings</h1>

        {user ? (
          <div className="mt-4 flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100" // Placeholder profile image
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{user.fullName}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mt-4">Loading...</p>
        )}

        <p className="text-gray-500 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy tempor
          incididunt ut labore et dolore magna.
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
