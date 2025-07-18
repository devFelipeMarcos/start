import { betterAuth } from "better-auth";
import { db } from "./prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        // Como é enum, você pode criar um tipo TypeScript para usar junto
      },
      status: {
        type: "string",
        required: false,
      },
    },
  },
});
