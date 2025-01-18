import React, { useState } from "react";
import { MailIcon, LockIcon } from "lucide-react";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirecting to dashboard without authentication
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm px-3">
              <MailIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-none focus:ring-0 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm px-3">
              <LockIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border-none focus:ring-0 focus:outline-none"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-2 rounded-md hover:opacity-90"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-gray-600">Or continue with</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100">
              <img
                src="/icons/google.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Google
            </button>
            <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100">
              <img
                src="/icons/microsoft.svg"
                alt="Microsoft"
                className="h-5 w-5 mr-2"
              />
              Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
