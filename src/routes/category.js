import { Router } from "express";
import { create, get, list, read, removecate, update } from "../controller/category";
// import { checkAuth } from "../middlewear/checkAuth";

const router = Router();

router.get("/categories", list);
router.get("/categories/:id", get)
router.post('/categories', create);
router.get('/category/:slug', read);
router.delete('/categories/:id', removecate)
router.put("/categories/:id/edit", update)

module.exports = router