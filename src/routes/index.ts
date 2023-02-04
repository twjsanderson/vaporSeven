import express from "express";
import { router as password } from "./password";

const router = express.Router();

router.use(password);

export default router;
