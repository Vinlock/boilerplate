import { z } from 'zod'
import { createRouter } from '~controllers/context'

const pongRouter = createRouter()
	.query('pong', {
		resolve: async () => {
			// Your query logic against services here.
		},
	})
	.mutation('updatePong', {
		input: z.object({
			test: z.string(),
		}),
		resolve: async () => {
			// Your mutation logic against services here.
		},
	})

export default pongRouter
