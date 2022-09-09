import { createRouter } from '@controllers/context'

const authRouter = createRouter()
	.query('me', {
		resolve: async ({ ctx }) => {
			return ctx.req.getUser()
		},
	})

export default authRouter
