import { Router } from "express";
import {
	getAllEditoras,
	createEditora,
	updateEditora,
	deleteEditora,
} from "../../api/controllers/editoras_controller";

const router: Router = Router();

router.get("/get-editoras", getAllEditoras);

router.post("/post-editoras", createEditora);

router.put("/put-editoras", updateEditora);

router.delete("/delete-editoras", deleteEditora);

export default router;
