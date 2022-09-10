import type { NextPage } from 'next'
import { useSession, signIn } from 'next-auth/react'

const Home: NextPage = () => {
	const session = useSession()

	return (
		<div className="p-10">
			<button
				onClick={async () => {
					return signIn('auth0')
				}}
				className="rounded-md bg-slate-500 text-white py-2 px-5"
			>
				Login
			</button>
			{session.data?.user?.name}
		</div>
	)
}

export default Home
