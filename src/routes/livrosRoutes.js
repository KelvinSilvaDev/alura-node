import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.getLivros)
  //   .get("/livros/busca", LivroController.getLivrosByAutor)
  .get("/livros/busca", LivroController.getLivrosByEditora)
  .get("/livros/:id", LivroController.getLivroById)
  .post("/livros", LivroController.addLivro)
  .put("/livros/:id", LivroController.updateLivro)
  .delete("/livros/:id", LivroController.deleteLivro);

export default router;
