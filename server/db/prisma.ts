export type {
	// Import Models here, so they are exported from the same place
	// and this file can naturally run as needed.
	Account,
	Session,
	User,
	VerificationToken,
} from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
})

export default prisma
