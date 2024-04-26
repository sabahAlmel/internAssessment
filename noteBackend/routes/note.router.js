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
noteRouter.get("/getOne/:id", getNoteById);
noteRouter.post("/create", create);
noteRouter.put("/update/:id", update);
noteRouter.delete("/delete/:id", deleteNote);

export default noteRouter;
