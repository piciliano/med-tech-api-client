import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { inicialize } from "./database/config";
import { router } from "./app/routes";

dotenv.config();

inicialize();

const app = express(); 

const corsOptions = {
  origin: ["http://localhost:5173"], 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log("servidor rodando na porta", process.env.PORT)
);