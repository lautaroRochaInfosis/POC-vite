import * as constants from "./constants.ts"

export const config = {
  app: {
    version: constants.VERSION,
    port: constants.PORT,
    publicUrl: constants.PUBLIC_URL,
    stage: constants.STAGE
  },
  sentry: {
    dsn: constants.SENTRY_DSN,
    release: constants.VERSION,
    environment: constants.STAGE
  },
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  }
}
