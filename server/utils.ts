import { Auth0Provider } from '~db/enums'

export const providerMap: Record<string, Auth0Provider> = {
	auth0: Auth0Provider.AUTH0,
	'google-oauth2': Auth0Provider.GOOGLE,
}
