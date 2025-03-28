import { z } from "zod";

const privateConfigSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),

  // EMAIL_SERVER_USER: z.string(),
  // EMAIL_SERVER_PASSWORD: z.string(),
  // EMAIL_SERVER_HOST: z.string(),
  // // EMAIL_SERVER_PORT: z.string(),
  // EMAIL_FROM: z.string(),

  EMAIL_SERVER: z.string(),
  EMAIL_FROM: z.string(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
