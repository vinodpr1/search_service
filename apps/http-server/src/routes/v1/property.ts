import express from "express";
import { getProperty, getAllProperties, filterProperties } from "../../controllers";

const propertyRouter = express.Router();

propertyRouter.get("/property", getProperty);
propertyRouter.get("/paginate", getAllProperties);
propertyRouter.get("/filter", filterProperties);
export default propertyRouter;
