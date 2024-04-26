import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import noteRouter from "./routes/note.router.js";

dotenv.config();

// express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/note", noteRouter);

async function startServer() {
  mongoose.connection.once("open", () => {
    console.log("mongo is ready");
  });

  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
  await mongoose.connect(process.env.MONGO_URI);

  app.listen(process.env.PORT, () => {
    console.log("listening on port: " + process.env.PORT);
  });
}

startServer();
