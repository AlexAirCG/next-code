import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbClient } from "@/lib/db";
import { compact } from "lodash-es";
// import { privateConfig } from "@/config/private";

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],
  providers: compact([
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // EmailProvider({
    //   server: {
    //     host: privateConfig.EMAIL_SERVER_HOST,
    //     // port: privateConfig.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: privateConfig.EMAIL_SERVER_USER,
    //       pass: privateConfig.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: privateConfig.EMAIL_FROM,
    // }),
    // privateConfig.GOOGLE_CLIENT_ID &&
    //   privateConfig.GOOGLE_CLIENT_SECRET &&
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ]),
};
