import { MedTechDateController } from "./controllers/MedTechDateControllers";
import { MedTechDateModel } from "./entities/MedTechDate";
import { MedTechDateRepository } from "./repositories/MedTechDateRepositores";
import { MedTechDateService } from "./services/MedTechDateService";

class MedTechDateModule {
    static build() {
        const repository = new MedTechDateRepository(MedTechDateModel)
        const service = new MedTechDateService(repository)
        const controller = new MedTechDateController(service)

        return { repository, service, controller }
    }
}

export { MedTechDateModule }