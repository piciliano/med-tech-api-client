"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const medTechDate_routes_1 = require("./medTechDate.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/medtech", medTechDate_routes_1.medTechDateRouter);
