import { Router } from "express";
import {
	getAllAutores,
	createAutor,
	updateAutor,
	deleteAutor,
} from "../../api/controllers/autores_controller";

const router: Router = Router();

router.get("/get-autores", getAllAutores);

router.post("/post-autores", createAutor);

router.put("/put-autores", updateAutor);

router.delete("/delete-autores", deleteAutor);

export default router;
