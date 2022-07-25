import express from "express";
import { addUserListenWrite, detailUserListenWrite, editUserListenWrite, listUserListenWrite } from "../controllers/userListenWrite";


const router = express.Router()

router.get("/userListenWrite", listUserListenWrite )
router.get("/userListenWrite/:id", detailUserListenWrite )
router.post("/userListenWrite", addUserListenWrite )
router.put("/userListenWrite/:id", editUserListenWrite )
router.delete("/userListenWrite/:id", detailUserListenWrite )

export default router