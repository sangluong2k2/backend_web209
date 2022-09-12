const { Router } = require("express");
const { addCart, listCart, listCarts, removeCart, updateCart, updated } = require("../controller/cart");

const router = Router()

router.get("/carts" , listCart)
router.post("/cart" , addCart)
router.get('/cart/:user', listCarts)
router.delete('/cart/:id', removeCart)
router.put('/cart/:id', updated)

module.exports = router
