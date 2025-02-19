
import express, { Request, Response, NextFunction } from "express";

import "jsr:@std/dotenv/load";
import rentalPropertyRouter from "@controller/rentalProperty/rentalProperty.controller.ts";


const APP_PORT = Deno.env.get("APP_PORT")


const app = express()

app.use(express.json());

app.use("/rentalProperties", rentalPropertyRouter)

app.get("/", (req: Request, res: Response) => {
  console.log(Deno.env.get("GREETINGS"))
  res.send(Deno.env.get("GREETINGS") || "No .env set");
});


app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
