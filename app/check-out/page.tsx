"use client";
import Image from "next/image";
import { useState } from "react";

type CheckoutPageProps = {
  searchParams: { amount?: string };
};

const CheckoutPage = ({ searchParams }: CheckoutPageProps) => {
  const totalAmount = Number(searchParams.amount) || 0;
  const [paymentMethod, setPaymentMethod] = useState<"Card" | "COD">("Card");

  const handleConfirm = async (pm: string) => {
    alert(`Order confirmed with ${paymentMethod} payment!`);
    switch (pm) {
      case "Card":
        try {
          const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ amount: getTotalPrice() }),
            body: JSON.stringify({ amount: searchParams.amount }),
          });

          if (!res.ok) {
            const error = await res.json();
            console.error("Stripe Error:", error);
            alert(`Error: ${error.error}`);
            return;
          }

          const data = await res.json();
          window.location.href = data.url;
        } catch (err) {
          console.error("Unexpected error:", err);
          alert("Something went wrong");
        }
        break;
      case "COD":
        break;

      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4">
      {/* Mascot + Brand Name */}
      <div className="mb-8 flex flex-col items-center relative">
        {/* Mascot with halo */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-xl animate-pulse">
          <Image
            src="/mascots/mascot_paintBrush.png"
            alt="Mascot"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin border-t-purple-400 border-b-pink-400" />
        </div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mt-4">
          InkSpire
        </h1>
      </div>

      {/* Checkout Card */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 space-y-8 transition-transform transform hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Checkout
        </h2>

        {/* Total Amount */}
        <div className="text-center">
          <p className="text-gray-500">You are about to pay</p>
          <p className="text-4xl font-extrabold text-purple-700 mt-2">
            Rs {totalAmount.toLocaleString()}
          </p>
        </div>

        {/* Payment Method Selection */}
        <div className="space-y-4">
          <p className="text-center text-sm text-gray-600">
            Select Payment Method
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setPaymentMethod("Card")}
              className={`px-5 py-3 rounded-full font-semibold transition shadow ${
                paymentMethod === "Card"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              💳 Card
            </button>
            <button
              onClick={() => setPaymentMethod("COD")}
              className={`px-5 py-3 rounded-full font-semibold transition shadow ${
                paymentMethod === "COD"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              🪙 CoD
            </button>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => handleConfirm(paymentMethod)}
          className={`w-full py-4 rounded-full font-bold transition transform hover:scale-105 active:scale-95 shadow-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white`}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
