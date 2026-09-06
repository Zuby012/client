import { betterAuth } from 'better-auth';
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from 'better-auth/next-js';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local or Vercel environment variables');
}

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();

export const auth = betterAuth({
   database: mongodbAdapter(db, {
    client
  }),
//
  advanced: {
    database: {
      joins: true,
    },
  },
//
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
//
  emailAndPassword: {
    enabled: true,
  },
//
  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID!,
      clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET!,
    },
  },
  //
  account: {
		accountLinking: {
			enabled: true,
			// Make sure "github" is in trusted providers if you use this option
			// Or remove trustedProviders to trust all providers by default
			trustedProviders: ["google", "github", "email-password"],
			allowDifferentEmails: false,
			// Ensure this is false (or not set) to allow implicit linking
			disableImplicitLinking: false,
		},
	},
  //
  plugins: [
    nextCookies()
  ]
});