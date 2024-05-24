import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GithubId,
      clientSecret: process.env.GithubSecret,
    }),
    GoogleProvider({
      clientId: process.env.GoogleId,
      clientSecret: process.env.GoogleSecret,
    }),
  ],
};
