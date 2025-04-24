import express from "express";
import { getProperty, getAllProperties } from "../../controllers";

const propertyRouter = express.Router();

propertyRouter.get("/property", getProperty);
propertyRouter.get("/paginate", getAllProperties);

export default propertyRouter;
