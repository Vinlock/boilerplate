import type { AppPropsType } from 'next/dist/shared/lib/utils'
import type { Session } from 'next-auth'
import type { NextRouter } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { withTRPC } from '@trpc/next'
import { SessionProvider } from 'next-auth/react'
import superjson from 'superjson'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import { serverConfig } from '~config'
import type { AppRouter } from '~controllers'
import '../styles/globals.css'
import '../client/icons'
import { URL } from 'url'

const App = (props: AppPropsType<NextRouter, { session: Session }>) => {
	return (
		<>
			<Head>
				<title>Boilerplate</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
			</Head>
			<SessionProvider session={props.pageProps.session}>
				<props.Component {...props.pageProps} />
			</SessionProvider>
		</>
	)
}

export default withTRPC<AppRouter>({
	config: () => {
		const url = new URL(serverConfig.app.url)
		url.pathname = '/api/trpc'

		return {
			url: url.href,
			links: [
				httpBatchLink({
					url: url.href,
				}),
			],
			transformer: superjson,
		}
	},
	ssr: true,
})(App)
