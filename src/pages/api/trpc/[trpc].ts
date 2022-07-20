import * as trpcNext from '@trpc/server/adapters/next'
import { createContext } from 'src/backend/context'
import { appRouter } from 'src/backend/router'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
})
