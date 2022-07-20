import superjson from 'superjson'
import { createRouter } from '../context'
import { subscribersRouter } from './subscribers'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('subscribers.', subscribersRouter)

export type AppRouter = typeof appRouter
