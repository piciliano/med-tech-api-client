import { Router } from "express";
import { MedTechDateModule } from "../../app/medTechDate/medTechDateModule";

const medTechDateRouter = Router()
const medTechDateController = MedTechDateModule.build().controller;

medTechDateRouter.post("", medTechDateController.create.bind(medTechDateController))
medTechDateRouter.get("/find/:numero", medTechDateController.findByNumber.bind(medTechDateController));
medTechDateRouter.delete("/delete/:numero", medTechDateController.deleteByNumber.bind(medTechDateController));

export { medTechDateRouter }