import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions={
    adapter: PrismaAdapter(prisma),
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
      ],

      
      session: { strategy: "jwt" },
      secret: process.env.NEXTAUTH_SECRET,



      // 

    callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // If using OAuth (Google), fetch user from Prisma to get the Prisma ID
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { id: true },
        });
        if (existingUser) {
          token.id = existingUser.id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
}  
