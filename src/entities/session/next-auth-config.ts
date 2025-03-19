import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbClient } from "@/lib/db";
import { compact } from "lodash-es";
import { privateConfig } from "@/config/private";

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],
  providers: compact([
    privateConfig.GITHUB_ID &&
      privateConfig.GITHUB_SECRET &&
      privateConfig.GOOGLE_CLIENT_ID &&
      privateConfig.GOOGLE_CLIENT_SECRET &&
      GoogleProvider({
        clientId: privateConfig.GOOGLE_CLIENT_ID,
        clientSecret: privateConfig.GOOGLE_CLIENT_SECRET,
      }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ]),
};
