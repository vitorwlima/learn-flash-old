import { createReactQueryHooks } from '@trpc/react';
import { inferProcedureOutput } from '@trpc/server';
import { AppRouter } from 'src/backend/router';

export const trpc = createReactQueryHooks<AppRouter>()

export type inferQueryResponse<
  TRouteKey extends keyof AppRouter['_def']['queries']
> = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>;
