import { Router } from "express";
import { addCart, listCart, listCarts, removeCart, updateCart } from "../controllers/cart";
const { updatecart } = require('../controllers/order')
const router = Router()

router.get("/api/cart" , listCart)
router.post("/api/carts" , addCart)
router.get('/api/carts/:user', listCarts)
router.delete('/api/cart/:id', removeCart)
router.put('/api/carts/update/:user', updateCart)

export default router