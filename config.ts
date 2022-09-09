export const serverConfig = {
	auth0: {
		clientId: process.env.AUTH0_CLIENT_ID as string,
		clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
		issuer: process.env.AUTH0_ISSUER as string,
	}
}

export const publicConfig = {
	auth0: {
		clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string,
		issuer: process.env.NEXT_PUBLIC_AUTH0_ISSUER as string,
	},
}
