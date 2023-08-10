import { CreateMedTechDateDTO } from "../dtos/MedTechDateDTO";
import { MedTechDateModel } from "../entities/MedTechDate";

class MedTechDateRepository {
  constructor(private model: typeof MedTechDateModel) { }
  async create(medTechDate: CreateMedTechDateDTO) {
    return this.model.create(medTechDate)
  }

  async findByNumber(numero: string) {
    return this.model.findOne({ numero: numero });
  }

  async deleteByNumber(numero: string) {
    return this.model.deleteOne({ numero: numero });
  }

}

export { MedTechDateRepository }
