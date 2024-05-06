// imports
import NextAuth from "next-auth"

// importing providers
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials"
import {loginUser, registerUser} from "@/app/api/auth/login";


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
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },

            async authorize(credentials: any, type: any) {
                if (credentials == null) return null;
                try {
                    if (credentials?.type == 'register') {
                        const userRegistered = await registerUser(credentials)
                        console.log(userRegistered, ' userRegistered')
                        if (userRegistered) {
                            // Any object returned will be saved in `user` property of the JWT
                            return userRegistered
                        } else {
                            // Return an object that will pass error information through to the client-side.
                            return {errors: userRegistered.errors, status: false}
                        }
                    } else {
                        const user = await loginUser(credentials)
                        if (user) {
                            // Any object returned will be saved in `user` property of the JWT
                            return user
                        } else {
                            // Return an object that will pass error information through to the client-side.
                            return {errors: user.errors, status: false}
                        }
                    }

                } catch (error) {
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
        jwt: async ({token, user}) => {
            console.log('INSIDE JWT')
            if (user) {
                token.email = user.email;
                token.username = user?.userName;
                token.user_type = user?.userType;
                token.accessToken = user?.token;
            }

            return token;
        },
        session:
            ({session, token, user}) => {
                if (token) {
                    session.user.email = token.email;
                    session.user.username = token.userName;
                    session.user.accessToken = token.accessToken;
                }
                return session;
            },
        // signIn, session callbacks
        async signIn({user, account}) {
            if (user?.status == false && user?.data == null) {
                throw new Error("Invalid credentials")
            }
            if (account?.provider === 'facebook') {

            }
            if (account?.provider === 'google') {
                //   Create user
            }
            if (account?.provider === 'credentials') {

            }
        },
    },
    pages: {
        signIn: '/auth/login', // Custom sign-in page
    },
    debug: true,
    secret:
    process.env.SECRET
})

export {handler as GET, handler as POST}
