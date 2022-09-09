import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '~controllers'
import { createContext } from '~controllers/context'

export default createNextApiHandler({
	router: appRouter,
	createContext,
})
