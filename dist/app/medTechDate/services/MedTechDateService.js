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
exports.MedTechDateService = void 0;
class MedTechDateService {
    constructor(repository) {
        this.repository = repository;
    }
    create(medTechDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingNumber = yield this.repository.findByNumber(medTechDate.numero);
                if (existingNumber) {
                    return { message: "Cliente já existe!", status: 400 };
                }
                const createdDate = yield this.repository.create(medTechDate);
                return { data: createdDate, message: "dados criados com sucesso!", status: 200 };
            }
            catch (error) {
                console.log("Erro na criação dos dados!", error);
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
    findByNumber(numero) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repository.findByNumber(numero);
                if (!data) {
                    return { error: true, message: "Cliente não encontrado", status: 404 };
                }
                return { data: data, status: 200 };
            }
            catch (error) {
                console.log("Erro ao buscar dados do cliente!", error);
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
    deleteByNumber(numero) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.repository.deleteByNumber(numero);
                if (result.deletedCount === 0) {
                    return { error: true, message: "Cliente não encontrado", status: 404 };
                }
                return { message: "Cliente deletado com sucesso", status: 200 };
            }
            catch (error) {
                console.log("Erro ao deletar cliente!", error);
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
}
exports.MedTechDateService = MedTechDateService;
