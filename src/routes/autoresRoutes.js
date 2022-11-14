import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.getAutores)
  .get("/autores/:id", AutorController.getAutorById)
  .post("/autores", AutorController.addAutor)
  .put("/autores/:id", AutorController.updateAutor)
  .delete("/autores/:id", AutorController.deleteAutor);

export default router;
