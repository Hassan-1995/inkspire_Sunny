import Image from "next/image";
import Link from "next/link";
import React from "react";

const SuccessPaymentPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 via-orange-50 to-emerald-50 px-5">
      <div className="w-[30%] md:w-[20%] aspect-square relative mb-2">
        <Image
          src={"/mascots/mascot_paintBrush.png"}
          alt="success"
          fill
          className="object-contain"
        />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <svg
          className="w-16 h-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-4 text-center">
          Thank you for your purchase. Your payment has been processed
          successfully.
        </p>
        <Link
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          href={"/"}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPaymentPage;
