
import express from "express";
import { SaveJobData} from "../controller/job-Controller.js";
import { getJobData } from "../controller/job-Controller.js";



const router = express.Router();

router.post('/save', SaveJobData);

router.get('/get', getJobData);

export default router;