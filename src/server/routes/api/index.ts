import { Router, Request, Response } from "express"

const apiRouter = Router()

apiRouter.get("/", (_req: Request, res: Response) => {
  res.send("Hello world!")
})

export default apiRouter
