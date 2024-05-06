// imports
import NextAuth from "next-auth"

// importing providers
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials"
import { loginUser, registerUser } from "@/app/api/auth/login";
import { getToken } from "@/lib/api/get-token";
import { CoreApi } from "@/lib/api/core.api";
import { AuthService } from "@/services/auth/auth.service";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials: any, type: any) {

                const csrfToken = getToken();

                if (credentials == null) return null;

                try {

                    const user = await AuthService.login(credentials);
                    console.log(user, ' LOGGED');

                    if (user?.status) {
                        // Any object returned will be saved in `user` property of the JWT
                        return user
                    } else {
                        return null;
                        // Return an object that will pass error information through to the client-side.
                        throw new Error(JSON.stringify({ errors: user.errors, status: false }))
                    }
                } catch (error) {
                    console.log(error, ' error');

                    return null
                }
                return null
            },
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge:
            1 * 24 * 60 * 60, // 1 day
    }
    ,
    jwt: {
        // JWT encoding and decoding configurations
    }
    ,
    callbacks: {
        // jwt: async ({ token, user }) => {
        //     console.log('USER', JSON.stringify(token))
        //     console.log('TOKEN', JSON.stringify(user))

        //     return token;
        // },
        // session: ({ session, token, user }) => {
        //     console.log('USER', JSON.stringify(token))
        //     console.log('TOKEN', JSON.stringify(user))
        //     console.log('session', JSON.stringify(session))

        //     return session;
        // },
        // signIn, session callbacks
        async signIn({ user, account }) {
            console.log(user, 'SIGNED');


            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                console.log('SIGNED');

                return true
            } else {
                console.log('OFFED');

                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }


            console.log('user', JSON.stringify(session))
            console.log('account', JSON.stringify(account))


            if (account?.provider === 'facebook') {

            }
            if (account?.provider === 'google') {
                //   Create user
            }
            if (account?.provider === 'credentials') {
                if (user?.errors) {
                    throw new Error('custom error to the client')
                }
                return true
            }
        },
    },
    pages: {
        signIn: '/auth/login', // Custom sign-in page
        signOut: '/auth/log-out',
        error: '/auth/error', // Error code passed in query string as ?error=
    },
    debug: true,
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
