import { Router } from "express";
import { addCart, listCart, listCarts, removeCart, updateCart, updated } from "../controller/cart";

const router = Router()

router.get("/carts" , listCart)
router.post("/cart" , addCart)
router.get('/cart/:user', listCarts)
router.delete('/cart/:id', removeCart)
router.put('/cart/:id', updated)

export default router