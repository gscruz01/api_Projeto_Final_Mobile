"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const funcionarios_controller_1 = require("../controllers/funcionarios_controller");
const router = (0, express_1.Router)();
router.get("/get-funcionarios", funcionarios_controller_1.getAllFuncionarios);
router.post("/post-funcionarios", funcionarios_controller_1.createFuncionarios);
router.put("/put-funcionarios", funcionarios_controller_1.updateFuncionarios);
router.delete("/delete-funcionarios", funcionarios_controller_1.deleteFuncionarios);
exports.default = router;
