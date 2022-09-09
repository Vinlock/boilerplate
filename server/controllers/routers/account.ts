import { z } from 'zod'
import { createRouter } from '@controllers/context'
import { OrganizationType } from '@db/enums'
import { staticConfig } from '@config'
import { createOrganization } from '@services/OrganizationService'

const accountRouter = createRouter()
	.mutation('register', {
		input: z.object({
			organizationName: z.string(),
			email: z.string().email(),
			phoneNumber: z.string(),
			organizationType: z.enum([
				OrganizationType.PRIME_OR_GENERAL_CONTRACTOR,
				OrganizationType.SUBCONTRACTOR_OR_SUPPLIER,
				OrganizationType.AGENCY,
			]),
			website: z.string().optional(),
			givenName: z.string(),
			familyName: z.string(),
			state: z.string(),
			password: z.string(),
			confirmPassword: z.string(),
		}).refine((data) => {
			return data.password === data.confirmPassword
		}, 'password must match confirmPassword').refine((data) => {
			return staticConfig.us.states.map(state => state.toLowerCase())
				.includes(data.state)
		}, 'invalid state'),
		resolve: async ({ input }) => {
			await createOrganization({
				organizationName: input.organizationName,
				email: input.email,
				givenName: input.givenName,
				familyName: input.familyName,
				phoneNumber: input.phoneNumber,
				password: input.password,
				organizationType: input.organizationType,
			})
		},
	})

export default accountRouter
