// src/server/router/index.ts
import fetch from "node-fetch";
import superjson from "superjson";
import { createRouter } from "./context";

if (!global.fetch) {
  (global.fetch as any) = fetch
}

import { roomRouter } from "./room";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("room.", roomRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
