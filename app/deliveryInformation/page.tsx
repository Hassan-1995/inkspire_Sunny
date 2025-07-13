"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DeliveryInformation = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch delivery info on mount
  useEffect(() => {
    if (status === "authenticated") {
      fetchUserInfo();
    }
  }, [status]);

  const fetchUserInfo = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/delivery-info");
      const data = await res.json();
      setAddress(data.physicalAddress ?? "");
      setContactNumber(data.contactNumber ?? "");
    } catch (error) {
      console.error("Error fetching user info:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/delivery-info", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          physicalAddress: address,
          contactNumber: contactNumber,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to save delivery information.");
      }
      alert("Delivery information saved successfully!");
      router.push("/cart");
    } catch (error) {
      console.error("Error saving delivery info:", error);
      alert("Failed to save delivery information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen pb-20">
      <section className="mb-2 text-white py-5 text-center">
        <div className="flex justify-center items-end">
          <Image
            src="/mascots/mascot_leftIndex.png"
            alt="Inkspire Mascot"
            width={100}
            height={100}
          />
          <h1 className="text-4xl md:text-5xl  font-semibold bg-gradient-to-r from-indigo-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            InkSpire
          </h1>
        </div>
        <p className="text-lg md:text-2xl text-amber-400">
          Please review and confirm your delivery information below.
        </p>
      </section>
      <section className="flex justify-center items-center">
        <div className="w-[80%] bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl shadow-2xl p-8 text-xs md:text-base">
          <div className="space-y-5">
            <h2 className="text-gray-700 flex justify-between">
              <strong>Name:</strong>
              {status !== "authenticated" ? (
                <p className="animate-pulse">Loading...</p>
              ) : (
                <p>{session?.user?.name}</p>
              )}
            </h2>
            <h2 className="text-gray-700 flex justify-between">
              <strong>Email:</strong>
              {status !== "authenticated" ? (
                <p className="animate-pulse">Loading...</p>
              ) : (
                <p>{session.user?.email}</p>
              )}
            </h2>

            <div>
              <label className="block text-gray-700 mb-1">
                <strong>Delivery Address</strong>
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={
                  status !== "authenticated"
                    ? "Fetching your address..."
                    : address
                    ? address
                    : "Enter your complete delivery address"
                }
                rows={4}
                className="w-full p-3 bg-white border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                <strong>Contact Number</strong>
              </label>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, "");
                  if (value.length >= 4) {
                    value = value.slice(0, 4) + "-" + value.slice(4, 11);
                  }
                  setContactNumber(value);
                }}
                placeholder={
                  status !== "authenticated"
                    ? "Getting your contact number"
                    : contactNumber
                    ? contactNumber
                    : "03XX-XXXXXXX"
                }
                className="w-full p-3 bg-white border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition"
              disabled={loading || !address || !contactNumber}
            >
              {loading ? "Please Wait" : "Save Information"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryInformation;
