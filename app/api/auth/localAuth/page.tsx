"use client";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  const [auth, setAuth] = useState(true);
  console.log(auth);
  return (
    <div className="-mt-20 relative h-screen bg-gradient-to-br from-purple-200 via-orange-100 to-emerald-50">
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          auth ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <Login setAuth={setAuth} />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          !auth ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <Register setAuth={setAuth} />
      </div>
    </div>
  );
};

export default AuthPage;
