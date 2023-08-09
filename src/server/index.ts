import bodyParser from "body-parser"
import * as Sentry from "@sentry/node"
import express from "express"
import path from "path"
import { config } from "./config/index.ts"
import logger from "./loaders/logger.ts"
import * as sentry from "./loaders/sentry.ts"
import apiRouter from "./routes/api/index.ts"
import sentryRouter from "./routes/sentry/index.ts"

const app = express()

sentry.load({ expressApp: app })

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(bodyParser.text({ limit: "200mb" }))

app.use(express.static(process.cwd() + '/dist'))

app.use("/sentry", sentryRouter)
app.use("/api", apiRouter)
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"))
})

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler())
app
  .listen(config.app.port, () => logger.info(`Server listening on port: ${config.app.port}`))
  .on("error", (err) => {
    logger.error(err)
    process.exit(1)
  })
