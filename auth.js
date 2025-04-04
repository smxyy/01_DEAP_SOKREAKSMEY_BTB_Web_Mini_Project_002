import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./service/auth-service";

export const { auth, signOut, signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService({ email, password });
        console.log("res in auth:", res);
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      const { token } = props;
      // console.log("token in session: ", props);
      // console.log("token hehe: ", token);
      console.log("access token: ", token.token.user.payload.token);
      return token.token.user.payload;
    },
  },
  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});