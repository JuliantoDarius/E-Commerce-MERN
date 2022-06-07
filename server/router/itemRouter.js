import express from "express";
import { getItems } from "../controller/itemController.js";

const router = express.Router();

router.get("/", getItems);

export default router;
