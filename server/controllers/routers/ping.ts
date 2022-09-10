import { z } from 'zod'
import { createRouter } from '~controllers/context'

const pongRouter = createRouter()
	.query('pong', {
		resolve: () => {
			// Your query logic against services here.
			return true
		},
	})
	.mutation('updatePong', {
		input: z.object({
			test: z.string(),
		}),
		resolve: async ({ input }) => {
			// Your mutation logic against services here.
			return {
				input: input.test,
			}
		},
	})

export default pongRouter
