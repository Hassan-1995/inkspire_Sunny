"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Image from "next/image";
import Header from "../components/Header";
import { useState } from "react";

const OrderItem = () => {
  const orderItem = useSelector((state: RootState) => state.cart.items); // replace with order data when ready
  const [expanded, setExpanded] = useState<string | null>(null);

  const getOrderTotal = () =>
    orderItem.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {orderItem.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg font-semibold">No orders found.</p>
          <p className="text-sm text-gray-600">
            Your ordered items will appear here after you place an order.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <Header title="Your Orders" />
          </div>

          {orderItem.map((item) => (
            <div
              key={item.productID}
              className="flex w-full border-b border-zinc-300 pb-4 mb-4"
            >
              {/* Left: Images */}
              <div className="relative w-1/3">
                <div className="grid grid-cols-2 auto-rows-fr gap-2">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={item.productFrontPath}
                      alt="Front View"
                      fill
                      className="object-contain rounded border border-zinc-300 shadow-sm"
                    />
                  </div>

                  {item.uploadedImagePrimary && (
                    <div className="relative w-full aspect-square">
                      <Image
                        src={item.uploadedImagePrimary}
                        alt="Front Design"
                        fill
                        className="object-contain rounded border border-zinc-300 shadow-sm"
                      />
                    </div>
                  )}
                  {item.productBackPath && (
                    <div className="relative w-full aspect-square">
                      <Image
                        src={item.productBackPath}
                        alt="Back View"
                        fill
                        className="object-contain rounded border border-zinc-300 shadow-sm"
                      />
                    </div>
                  )}
                  {/* Back Design (conditional) */}
                  {item.uploadedImageSecondary && (
                    <div className="relative w-full aspect-square flex justify-center items-center">
                      <Image
                        src={item.uploadedImageSecondary}
                        alt="Back Design"
                        fill
                        className="object-contain rounded border border-zinc-300 shadow-sm"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Details */}
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <p className="font-semibold text-base">{item.productName}</p>
                  <p className="text-sm">
                    Price: Rs {item.productPrice.toLocaleString()}
                  </p>
                  <p className="text-sm">
                    Color:{" "}
                    {item.productColor.charAt(0).toUpperCase() +
                      item.productColor.slice(1)}
                  </p>
                  <p className="text-sm">Size: {item.productSize}</p>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm">Quantity: {item.quantity}</p>
                  <button
                    onClick={() =>
                      setExpanded(
                        expanded === item.productID ? null : item.productID
                      )
                    }
                    className="text-xs text-purple-600 underline"
                  >
                    {expanded === item.productID
                      ? "Hide Details"
                      : "View Details"}
                  </button>
                </div>

                {expanded === item.productID && (
                  <div className="mt-2 text-sm text-gray-700">
                    <p>Primary Image Size: {item.primaryImageSize}</p>
                    {item.secondaryImageSize && (
                      <p>Secondary Image Size: {item.secondaryImageSize}</p>
                    )}
                    {item.productBackPath && <p>Includes back view design.</p>}
                  </div>
                )}

                <p className="text-sm font-semibold mt-1">
                  Total: Rs{" "}
                  {(item.productPrice * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

          <div className="text-right font-semibold text-lg mt-6">
            Order Total: Rs {getOrderTotal().toLocaleString()}
          </div>

          <p className="my-4 text-sm text-gray-600 text-center">
            🕒 Orders typically ship within 2-4 working days.
          </p>
        </>
      )}
    </div>
  );
};

export default OrderItem;
