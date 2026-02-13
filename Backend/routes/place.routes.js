import { addPlace, getPlace } from '../controllers/placeController.js';
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

import express from 'express';
const placeRouter = express.Router();



placeRouter.post("/places",
    authMiddleware,
    adminMiddleware,
    addPlace
);

placeRouter.get("/places", getPlace);

export default placeRouter;


