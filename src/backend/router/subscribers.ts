import { z } from 'zod'
import { createRouter } from '../context'
import { prisma } from '../db/prisma'

export const subscribersRouter = createRouter()
  .mutation('create', {
    input: z.object({
      name: z.string().min(2),
      email: z.string().email(),
    }),
    resolve: async ({ input }) => {
      const { name, email } = input

      await prisma.subscriber.create({
        data: {
          name,
          email,
        }
      })
    },
  })
  