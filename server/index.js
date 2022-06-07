import express from "express";
import cors from "cors";
import "./db/connection.js";
import itemRouter from "./router/itemRouter.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/item", itemRouter);

app.listen(port, () => console.log("Server is Running"));
