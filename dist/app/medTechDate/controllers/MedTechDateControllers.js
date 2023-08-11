"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedTechDateController = void 0;
const CreateMedTechDateSchema_1 = require("../schemas/CreateMedTechDateSchema");
const DeleteMedTechDateSchema_1 = require("../schemas/DeleteMedTechDateSchema");
class MedTechDateController {
    constructor(service) {
        this.service = service;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                yield (0, CreateMedTechDateSchema_1.makeCreateMedTechDateSchema)().validate(body);
            }
            catch (error) {
                return res.status(400).json({ errors: error.errors });
            }
            const result = yield this.service.create(body);
            if ("error" in result) {
                return res.status(result.status).json(result);
            }
            return res.status(201).json(result);
        });
    }
    findByNumber(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numero } = req.params;
            const result = yield this.service.findByNumber(numero);
            if ("error" in result) {
                return res.status(result.status).json(result);
            }
            return res.status(200).json(result);
        });
    }
    deleteByNumber(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numero } = req.params;
            try {
                yield (0, DeleteMedTechDateSchema_1.makeDeleteMedTechDateSchema)().validate({ numero });
            }
            catch (error) {
                return res.status(400).json({ errors: error.errors });
            }
            const result = yield this.service.deleteByNumber(numero);
            if ("error" in result) {
                return res.status(result.status).json(result);
            }
            return res.status(200).json(result);
        });
    }
}
exports.MedTechDateController = MedTechDateController;
