import express from "express";
import {
  createUser,
  getuser,
  deleteuser,
  updateuser,
} from "../controller/authController.js";

const router = express.Router();

router.route("/").post(createUser).get(getuser).patch(updateuser);

router.route("/:id").delete(deleteuser);

export { router as userRouter };
