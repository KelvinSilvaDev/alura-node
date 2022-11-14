import autores from "../models/Autor.js";

class AutorController {
  static getAutores = (req, res) => {
    autores.find((err, autores) => {
      if (err) {
        res.status(500).send;
      }
      return res.status(200).json(autores);
    });
  };

  static getAutorById = (req, res) => {
    const id = req.params.id;
    autores.findById(id, (err, Autor) => {
      if (err) {
        res.status;
      }
      return res.status(200).json(Autor);
    });
  };

  static addAutor = (req, res) => {
    let Autor = new autores(req.body); // cria um novo Autor com os dados do body

    Autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar o Autor.` });
      } else {
        res.status(201).send(Autor.toJSON());
      }
    });
  };

  static updateAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor excluído com sucesso." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AutorController;
