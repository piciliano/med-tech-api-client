"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicialize = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const inicialize = () => {
    mongoose_1.default.connection.on("Error", function (error) {
        console.log("erro na conexão", error);
    })
        .once("open", function () {
        console.log("Conexão feita com banco de dados");
    });
    mongoose_1.default.connect(process.env.DATABASE_URL);
};
exports.inicialize = inicialize;
