import superjson from 'superjson'
import { createRouter } from '~controllers/context'
import ping from '~controllers/routers/ping'

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('ping.', ping)

export type AppRouter = typeof appRouter
