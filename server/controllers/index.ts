import superjson from 'superjson'
import { createRouter } from '~controllers/context'
import accountRouter from './routers/account'
import authRouter from './routers/auth'

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('account.', accountRouter)
	.merge('auth.', authRouter)

export type AppRouter = typeof appRouter
