import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import Auth0Provider from 'next-auth/providers/auth0'
import prisma from '~db'
import { serverConfig } from '~config'

export const nextAuthOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Auth0Provider({
			clientId: serverConfig.auth0.clientId,
			clientSecret: serverConfig.auth0.clientSecret,
			issuer: serverConfig.auth0.issuer,
		}),
	],
}

export default NextAuth(nextAuthOptions)
