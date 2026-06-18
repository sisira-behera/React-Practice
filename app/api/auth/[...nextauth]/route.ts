
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
}

// For demo purposes - in a real app, you would use a database
const users = [
    {
        id: "1",
        name: "Demo User",
        email: "demo@example.com",
        password: "password123",
        image: "http://localhost:3000/_next/static/media/globe.01e2r_giu~5d_.svg"
    }
];

// Define the auth options with proper typing
export const authOptions: NextAuthOptions = {
    providers: [
        ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET ? [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            })
        ] : []),
        CredentialsProvider({
            name: "Email and Password",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "hello@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }
                const user = users.find(user => user.email === credentials.email);
                if (!user || user.password !== credentials.password) {
                    return null;
                }
                const { password, ...userWithoutPassword } = user;
                return userWithoutPassword;
            }
        })
    ],
    pages: {
        signIn: '/login',
        error: '/login',
        signOut: '/'
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    debug: process.env.NODE_ENV === 'development',
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            try {
                if (url.startsWith("/")) return `${baseUrl}${url}`;
                const urlObj = new URL(url);
                if (urlObj.origin === baseUrl) return url;
            } catch (e) {
                console.error("Error parsing redirect URL:", e);
            }
            return baseUrl;
        },
    },
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
