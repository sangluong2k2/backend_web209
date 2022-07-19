import { Router } from "express";
import { edituser, findone, list, removeuser, signin, signup } from "../controller/auth";

const router = Router();

router.post("/signup",  signup);
router.post('/signin', signin);
router.get('/users', list);
router.put("/user/:id/edit", edituser);
router.delete("/user/:id", removeuser);
router.get("/user/:id", findone);
export default router