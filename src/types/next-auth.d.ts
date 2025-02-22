// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: number;
            role: string;
        } & DefaultSession["user"];
    }

    interface JWT {
        /** OpenID ID Token */
        idToken?: string;
        /** Custom user id */
        id?: number;
    }
}
