import { Router } from 'express';
import { add, remove, detail, list, updated, search } from '../controller/products';

const router = Router();

router.get("/products", list )
router.get("/product/:slug", detail )
router.post("/product", add )
router.delete("/product/:id", remove )
router.put("/product/:id", updated )
router.get(`/product`, search)

// router.param("userId", userById)

module.exports = router;