import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB(); // Connect to the database

        // Check if the user already exists in the database
        let existingUser = await User.findOne({ email: profile.email });

        // If the user doesn't exist, create a new one
        if (!existingUser) {
          await User.create({
            name: profile.name.toLowerCase(),
            email: profile.email,
            profileImage: profile.picture, // Store the profile picture URL
          });
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; // Return false to deny the sign-in
      }
    },
  },
});

export { handler as GET, handler as POST };
