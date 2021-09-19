import express from "express"
import { ResultController } from "../controller/ResultController"

export const resultRouter = express.Router()
const resultController = new ResultController()

resultRouter.post("/register", resultController.register)