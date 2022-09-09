import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
import type { NextApiRequest, NextApiResponse } from 'next/dist/shared/lib/utils'
import type { IncomingMessage } from 'http'
import { unstable_getServerSession } from 'next-auth'
import { TRPCError, router, type inferAsyncReturnType } from '@trpc/server'
import prisma from '~db'
import { nextAuthOptions } from '../../pages/api/auth/[...nextauth]'

declare module 'next' {
	export interface NextApiRequest extends IncomingMessage{
		requireUser: () => void
	}
}

export const createContext = async (options?: CreateNextContextOptions) => {
	const req = options?.req as NextApiRequest
	const res = options?.res as NextApiResponse

	const session = await unstable_getServerSession(req, res, nextAuthOptions)

	req.requireUser = () => {
		if (!session) {
			throw new TRPCError({
				code: 'UNAUTHORIZED',
				message: 'unauthorized access blocked',
			})
		}
	}

	return { req, res, prisma, session }
}

type Context = inferAsyncReturnType<typeof createContext>

export const createRouter = () => {
	return router<Context>()
}
