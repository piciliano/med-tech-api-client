# med-tech-api-client

post in render: 
https://service-med-tech.onrender.com


adc cors: 

import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Importe o pacote cors
import { inicialize } from "./database/config";
import { router } from "./app/routes";

dotenv.config();

inicialize();

const app = express(); // Mantenha essa linha

// Configure o CORS
const corsOptions = {
  origin: ["http://localhost:3000"], // Adicione a URL do seu frontend aqui
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions)); // Use o middleware cors com as opções definidas

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log("servidor rodando na porta", process.env.PORT)
);
