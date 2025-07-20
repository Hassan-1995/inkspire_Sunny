// import { prisma } from "@/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const {
//       orderID,
//       userID,
//       productID,
//       productName,
//       productPrice,
//       productColor,
//       productSize,
//       quantity,
//       primaryImageSize,
//       secondaryImageSize,
//       productFrontPath,
//       productBackPath,
//       uploadedImagePrimary,
//       uploadedImageSecondary,
//       status, // optional
//     } = body;

//     const newOrder = await prisma.userOrder.createMany({
//       data: {
//         orderID,
//         userID,
//         productID,
//         productName,
//         productPrice,
//         productColor,
//         productSize,
//         quantity,
//         primaryImageSize,
//         secondaryImageSize,
//         productFrontPath,
//         productBackPath,
//         uploadedImagePrimary,
//         uploadedImageSecondary,
//         status, // will default to "Placed" if not provided
//       },
//     });

//     return NextResponse.json(
//       { message: "Order created successfully", data: newOrder },
//       { status: 201 }
//     );
//   } catch (error: unknown) {
//     console.error("[CREATE_USER_ORDER_ERROR]", error);
//     return NextResponse.json(
//       { message: "Failed to create order", error: error?.message },
//       { status: 500 }
//     );
//   }
// }


import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { message: "Expected an array of orders." },
        { status: 400 }
      );
    }

    const newOrders = await prisma.userOrder.createMany({
      data: body,
    });

    return NextResponse.json(
      { message: "Orders created successfully", data: newOrders },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[CREATE_USER_ORDER_ERROR]", error);
    return NextResponse.json(
      { message: "Failed to create orders", error: (error as Error).message },
      { status: 500 }
    );
  }
}
