import { Request, Response } from "express";
import { MedTechDateService } from "../services/MedTechDateService";
import { makeCreateMedTechDateSchema } from "../schemas/CreateMedTechDateSchema";
import { makeDeleteMedTechDateSchema } from "../schemas/DeleteMedTechDateSchema";

class MedTechDateController {
  constructor(private service: MedTechDateService) { }

  async create(req: Request, res: Response) {
    const { body } = req;
    try {
      await makeCreateMedTechDateSchema().validate(body);
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors });
    }
    const result = await this.service.create(body) as any;
    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(201).json(result);
  }

  async findByNumber(req: Request, res: Response) {
    const { numero } = req.params;
    const result = await this.service.findByNumber(numero) as any;
    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(200).json(result);
  }

  async deleteByNumber(req: Request, res: Response) {
    const { numero } = req.params;
    try {
        await makeDeleteMedTechDateSchema().validate({ numero });
    } catch (error: any) {
        return res.status(400).json({ errors: error.errors });
    }
    const result = await this.service.deleteByNumber(numero) as any;
    if ("error" in result) {
        return res.status(result.status).json(result);
    }
    return res.status(200).json(result);
}


}

export { MedTechDateController };
