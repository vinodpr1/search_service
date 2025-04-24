import express from "express";
import userRouter from "./users";
import propertyRouter from "./property";

const router = express.Router();

router.use("/user", userRouter);
router.use("/property", propertyRouter);

export default router;
