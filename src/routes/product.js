import { Router } from 'express';
import { add, remove, detail, list, updated } from '../controller/products';

const router = Router();

router.get("/products", list )
router.get("/product/:id", detail )
router.post("/product", add )
router.delete("/product/:id", remove )
router.put("/product/:id", updated )

// router.param("userId", userById)

export default router;