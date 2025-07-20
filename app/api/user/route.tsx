import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    return NextResponse.json({
      userId: user?.id,
      name: session.user.name ?? null,
      email: session.user.email,
      physicalAddress: user?.physicalAddress ?? "",
      contactNumber: user?.contactNumber ?? "",
    });
  } catch (error) {
    console.error("Error fetching user_id:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
