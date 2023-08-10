import { CreateMedTechDateDTO } from "../dtos/MedTechDateDTO";
import { MedTechDateRepository } from "../repositories/MedTechDateRepositores";

class MedTechDateService {
  constructor(private repository: MedTechDateRepository) { }

  async create(medTechDate: CreateMedTechDateDTO) {
    try {

      const existingNumber = await this.repository.findByNumber(medTechDate.numero);
      if (existingNumber) {
        return { message: "Cliente já existe!", status: 400 };
      }
      const createdDate = await this.repository.create(medTechDate);
      return { data: createdDate, message: "dados criados com sucesso!", status: 200 };
    } catch (error) {
      console.log("Erro na criação dos dados!", error);
      return { error: true, message: "Internal server error", status: 500 };
    }
  }

  async findByNumber(numero: string) {
    try {
      const data = await this.repository.findByNumber(numero);
      if (!data) {
        return { error: true, message: "Cliente não encontrado", status: 404 };
      }
      return { data: data, status: 200 };
    } catch (error) {
      console.log("Erro ao buscar dados do cliente!", error);
      return { error: true, message: "Internal server error", status: 500 };
    }
  }

async deleteByNumber(numero: string) {
  try {
      const result = await this.repository.deleteByNumber(numero);
      if (result.deletedCount === 0) {
          return { error: true, message: "Cliente não encontrado", status: 404 };
      }
      return { message: "Cliente deletado com sucesso", status: 200 };
  } catch (error) {
      console.log("Erro ao deletar cliente!", error);
      return { error: true, message: "Internal server error", status: 500 };
  }
}

}

export { MedTechDateService };
