import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET() {
  
    const session = await getServerSession(AuthProviders)

    // try {
    //     const user = await prisma.user.findUnique({

    //     })
    // } catch (error) {
        
    // }
}
