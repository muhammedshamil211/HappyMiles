import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/admin.middleware.js';
import { getPackageList, getPackageDetails, addPackage } from '../controllers/packageController.js'

const packageRouter = express.Router();


packageRouter.post("/packages", authMiddleware, adminMiddleware, addPackage)
packageRouter.get("/packages/:placeId", getPackageList)
packageRouter.get("/detailes/:packageId", getPackageDetails);

export default packageRouter;
