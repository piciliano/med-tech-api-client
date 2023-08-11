"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedTechDateModule = void 0;
const MedTechDateControllers_1 = require("./controllers/MedTechDateControllers");
const MedTechDate_1 = require("./entities/MedTechDate");
const MedTechDateRepositores_1 = require("./repositories/MedTechDateRepositores");
const MedTechDateService_1 = require("./services/MedTechDateService");
class MedTechDateModule {
    static build() {
        const repository = new MedTechDateRepositores_1.MedTechDateRepository(MedTechDate_1.MedTechDateModel);
        const service = new MedTechDateService_1.MedTechDateService(repository);
        const controller = new MedTechDateControllers_1.MedTechDateController(service);
        return { repository, service, controller };
    }
}
exports.MedTechDateModule = MedTechDateModule;
