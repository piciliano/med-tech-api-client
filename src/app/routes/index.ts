import { Router } from "express";
import { medTechDateRouter } from "./medTechDate.routes";

const router = Router()

router.use("/medtech", medTechDateRouter)

export { router }