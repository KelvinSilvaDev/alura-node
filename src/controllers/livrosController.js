import livros from "../models/Livro.js";

class LivroController {
  static getLivros = (req, res) => {
    livros.find((err, livros) => {
      if (err) {
        res.status(500).send;
      }
      return res.status(200).json(livros);
    });
  };

  static getLivroById = (req, res) => {
    const id = req.params.id;
    livros.findById(id, (err, livro) => {
      if (err) {
        res.status;
      }
      return res.status(200).json(livro);
    });
  };

  static addLivro = (req, res) => {
    let livro = new livros(req.body); // cria um novo livro com os dados do body

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar o livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static updateLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro excluído com sucesso." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default LivroController;
