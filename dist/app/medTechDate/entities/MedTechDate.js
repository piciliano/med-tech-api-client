"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedTechDateModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MedTechDateSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    numero: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    obs: { type: String, require: false }
}, { timestamps: true });
const MedTechDateModel = mongoose_1.default.model("medTechInfos", MedTechDateSchema);
exports.MedTechDateModel = MedTechDateModel;
