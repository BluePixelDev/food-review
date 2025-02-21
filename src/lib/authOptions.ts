import { NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    providers: [
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID!,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
            authorization: {
                params: { scope: "openid profile email User.Read" },
            },
            httpOptions: { timeout: 1000 },
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            try {
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email! },
                });

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            username: user.name || "Unnamed",
                            email: user.email!,
                        },
                    });
                }
                return true;
            } catch (error) {
                console.error("Error creating user:", error);
                return false;
            }
        },
        async redirect({ baseUrl }) {
            return baseUrl;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email as string;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
            }
            return token;
        },
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
};
