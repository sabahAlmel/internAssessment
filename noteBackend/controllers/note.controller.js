import Note from "../models/note.model.js";

export const create = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Note name can not be empty",
    });
  }
  const newNote = new Note({
    name: req.body.name,
  });
  try {
    const note = await newNote.save();
    return res.status(200).json(note);
  } catch (err) {
    const message =
      err.message || "Some error occurred while creating the Note";
    return res.status(500).json({ message });
  }
};

export const update = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      {
        new: true,
      }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json(updatedNote);
  } catch (err) {
    const message =
      err.message || "Some error occurred while updating the Note";
    return res.status(500).json({ message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    const message =
      err.message || "Some error occurred while deleting the Note";
    return res.status(500).json({ message });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (err) {
    const message =
      err.message || "Some error occurred while getting All Notes";
    return res.status(500).json({ message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json(note);
  } catch (err) {
    const message = err.message || "Some error occurred while getting the Note";
    return res.status(500).json({ message });
  }
};
