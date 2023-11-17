import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import Swal from "sweetalert2";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "LoginId", type: "text", placeholder: "Wooyano" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("step3 credentials.enmail", credentials?.email, "|", "credentials.password", credentials?.password);

        if (!credentials?.email || !credentials?.password) return null;
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "email" : `${credentials?.email}`,
            "password" : `${credentials?.password}`,
          }), 
        })
        // todo: 에러 처리
        const user = await res.json();
        console.log(user)
        if (res.ok && user) {
          return user
        } else {
          return null;
        }
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
  },
};
