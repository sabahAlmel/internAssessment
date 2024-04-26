import express from "express";
import {
  create,
  deleteNote,
  getAllNotes,
  getNoteById,
  update,
} from "../controllers/note.controller.js";

const noteRouter = express.Router();

noteRouter.get("/getAll", getAllNotes);
noteRouter.get("/getOne", getNoteById);
noteRouter.post("/create", create);
noteRouter.put("/update", update);
noteRouter.delete("/delete", deleteNote);

export default noteRouter;
