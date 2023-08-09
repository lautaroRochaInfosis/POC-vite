import { config } from "dotenv"

config({})

export const VERSION = process.env.VERSION || "0.0.0"
export const PORT = process.env.PORT || 8080
export const PUBLIC_URL = process.env.PUBLIC_URL || ""
export const SENTRY_DSN = process.env.SENTRY_DSN || ""
export const STAGE = process.env.STAGE || "testing"
