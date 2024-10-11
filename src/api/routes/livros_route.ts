import { Router } from "express";
import {
	getLivros,
	postLivros,
	putLivros,
	deleteLivros,
} from "../controllers/livros_controller";

const router: Router = Router();

router.get("/get-livros", getLivros);

router.post("/post-livros", postLivros);

router.put("/put-livros", putLivros);

router.delete("/delete-livros", deleteLivros);

export default router;
