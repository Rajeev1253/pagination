import express from "express";
import {
  createUser,
  getuser,
  deleteuser,
  updateuser,
} from "../controller/authController.js";

const router = express.Router();

router.route("/").post(createUser).get(getuser);

router.route("/:id").delete(deleteuser).patch(updateuser);

export { router as userRouter };
