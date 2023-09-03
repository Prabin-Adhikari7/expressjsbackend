const express = require("express");
const { getNotes, createNote, deleteNote, updateNote } = require("../controllers/notecontroller");
const auth = require("../middlewares/auth");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNotes);

noteRouter.post("/", auth, createNote);

noteRouter.delete("/:id", auth, deleteNote);

noteRouter.put("/:id", auth, updateNote);

module.exports = noteRouter;