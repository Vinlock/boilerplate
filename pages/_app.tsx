import type { AppPropsType } from 'next/dist/shared/lib/utils'
import type { Session } from 'next-auth'
import type { NextRouter } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import '../client/icons'

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

export default App
