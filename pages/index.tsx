import type { NextPage } from 'next'
import { useSession, signIn } from 'next-auth/react'
import { trpc } from '~hooks/trpc'

const Home: NextPage = () => {
	const session = useSession()
	const { data, isLoading } = trpc.useQuery(['ping.pong'])

	return (
		<div className="p-10">
			<div>
				<button
					onClick={async () => {
						return signIn('auth0')
					}}
					className="rounded-md bg-slate-500 text-white py-2 px-5"
				>
					Login
				</button>
				<p>{session.data?.user?.name}</p>
			</div>
			<div>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<p>Ping is {data}</p>
				)}
			</div>
		</div>
	)
}

export default Home
