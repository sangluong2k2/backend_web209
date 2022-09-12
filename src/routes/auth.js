const { Router } = require("express");
const { edituser, findone, list, removeuser, signin, signup } = require("../controller/auth");

const router = Router();

router.post("/signup",  signup);
router.post('/signin', signin);
router.get('/users', list);
router.put("/user/:id/edit", edituser);
router.delete("/user/:id", removeuser);
router.get("/user/:id", findone);
module.exports = router