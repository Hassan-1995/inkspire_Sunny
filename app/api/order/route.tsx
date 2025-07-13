import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      orderID,
      userID,
      productID,
      productName,
      productPrice,
      productColor,
      productSize,
      quantity,
      primaryImageSize,
      secondaryImageSize,
      productFrontPath,
      productBackPath,
      uploadedImagePrimary,
      uploadedImageSecondary,
      status, // optional
    } = body;

    const newOrder = await prisma.userOrder.create({
      data: {
        orderID,
        userID,
        productID,
        productName,
        productPrice,
        productColor,
        productSize,
        quantity,
        primaryImageSize,
        secondaryImageSize,
        productFrontPath,
        productBackPath,
        uploadedImagePrimary,
        uploadedImageSecondary,
        status, // will default to "Placed" if not provided
      },
    });

    return NextResponse.json(
      { message: "Order created successfully", data: newOrder },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[CREATE_USER_ORDER_ERROR]", error);
    return NextResponse.json(
      { message: "Failed to create order", error: error?.message },
      { status: 500 }
    );
  }
}
