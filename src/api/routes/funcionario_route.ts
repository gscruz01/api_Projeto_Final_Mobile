import { Router } from "express";
import {
    getAllFuncionarios,
    createFuncionarios,
    updateFuncionarios,
    deleteFuncionarios,
} from "../controllers/funcionarios_controller";

const router: Router = Router();

router.get("/get-funcionarios", getAllFuncionarios);

router.post("/post-funcionarios", createFuncionarios);

router.put("/put-funcionarios", updateFuncionarios);

router.delete("/delete-funcionarios", deleteFuncionarios);

export default router;