import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        physicalAddress: true,
        contactNumber: true,
      },
    });

    return NextResponse.json({
      name: session.user.name ?? null,
      email: session.user.email,
      physicalAddress: user?.physicalAddress ?? "",
      contactNumber: user?.contactNumber ?? "",
    });
  } catch (error) {
    console.error("Error fetching user delivery info:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { physicalAddress, contactNumber } = await req.json();

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        physicalAddress,
        contactNumber,
      },
      select: {
        physicalAddress: true,
        contactNumber: true,
      },
    });

    return NextResponse.json({
      message: "Delivery info updated successfully",
      physicalAddress: updatedUser.physicalAddress,
      contactNumber: updatedUser.contactNumber,
    });
  } catch (error) {
    console.error("Error updating user delivery info:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
