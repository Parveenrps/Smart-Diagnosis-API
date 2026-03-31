import {Router} from "express";
import { diagnose, getDiagnoses } from "../controllers/diagnose.controller.js";

const router = Router();

router.post("/diagnose", diagnose);
router.get("/history", getDiagnoses);

export default router;