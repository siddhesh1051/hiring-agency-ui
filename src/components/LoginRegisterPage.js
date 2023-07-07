import React from 'react';
import { motion } from 'framer-motion';

const LoginRegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <img src="https://framerusercontent.com/images/SXeJImoV3IABrF1WmQGgCphSqI.png?scale-down-to=1024" alt="Framer Logo" className="h-8" />
          <button className="text-gray-600 hover:text-gray-800">Sign up</button>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Welcome Back!
            </motion.h2>
            <motion.form
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </motion.button>
            </motion.form>
          </div>
          <div className="w-1/2">
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src="https://framerusercontent.com/images/SXeJImoV3IABrF1WmQGgCphSqI.png?scale-down-to=1024"
              alt="Illustration"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="/" className="text-blue-500 hover:text-blue-600">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterPage;
