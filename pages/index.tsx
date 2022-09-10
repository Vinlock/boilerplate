import type { GetServerSideProps, NextPage } from 'next'
import { useSession, getProviders, signIn } from 'next-auth/react'

const Home: NextPage<Props> = (props) => {
	const session = useSession()

	return (
		<div className="p-10">
			{Object.values(props.providers || {}).map((provider) => {
				return (
					<button
						onClick={async () => {return signIn(provider.id)}}
						className="rounded-md bg-slate-500 text-white py-2 px-5"
					>
						Login with {provider.name}
					</button>
				)
			})}
			{session.data?.user?.name}
		</div>
	)
}

type Props = {
	providers: Awaited<ReturnType<typeof getProviders>>
}

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	}
}

export default Home
