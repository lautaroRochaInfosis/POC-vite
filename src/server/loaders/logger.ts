import { LoggingWinston } from "@google-cloud/logging-winston"
import * as winston from "winston"
import { config } from "../config/index.ts"

const logger = winston.createLogger({
  level: config.logs.level,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => `${info.timestamp} ${info.level} ${info.message}`)
  ),
  transports: [new winston.transports.Console({ level: "debug" })]
})

if (process.env.NODE_ENV === "production") {
  logger.add(new LoggingWinston())
}

export default logger
