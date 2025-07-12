"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const DeliveryInformation = () => {
  const { status, data: session } = useSession();

  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const handleSave = () => {
    const phoneRegex = /^03\d{2}-\d{7}$/;
    if (!phoneRegex.test(contactNumber)) {
      setError("Contact number must be in 03XX-XXXXXXX format.");
      return;
    }
    setError("");
    console.log("Saved Address:", address);
    console.log("Saved Contact Number:", contactNumber);
    setIsEditing(false);
  };

  if (status !== "authenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-purple-700">
        <p className="text-white text-lg animate-pulse">
          Loading user information...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200 p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Delivery Information
        </h2>

        <div className="mb-6">
          <p className="text-gray-800">
            <strong>Name:</strong> {session.user?.name}
          </p>
          <p className="text-gray-800">
            <strong>Email:</strong> {session.user?.email}
          </p>
        </div>

        {address === "" || contactNumber === "" || isEditing ? (
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your complete delivery address"
                rows={4}
                className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Contact Number</label>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="03XX-XXXXXXX"
                className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition"
            >
              Save Information
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-800">
              <strong>Address:</strong> {address}
            </p>
            <p className="text-gray-800">
              <strong>Contact Number:</strong> {contactNumber}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-gradient-to-r from-purple-400 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-purple-600 transition"
            >
              Edit Information
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryInformation;
