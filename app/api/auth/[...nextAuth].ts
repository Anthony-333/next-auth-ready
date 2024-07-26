import NextAuth from "next-auth";
import { authOptions } from "@/app/utils/authHelper";

// Use the authOptions from authHelper.ts
export default NextAuth(authOptions);
