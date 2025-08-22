// server.js
const express = require("express"); // express é um framework pra facilitar criar APIs
const cors = require("cors"); //middleware que permite requisição de outros dominios
const app = express(); // instancia o server 
app.use(cors());
app.use(express.json()); // permite que entenda requisição com JSON

let livros = [];
let id = 1;

app.get("/livros", (req, res) => res.json(livros)); // Get para retornar a listagem 

app.post("/livros", (req, res) => {
  const { titulo, autor, data } = req.body;
  if (!titulo || !autor || !data) {
    return res.status(400).json({ erro: "Preencha todos os campos" });
  }
  const livro = { id: id++, titulo, autor, data };
  livros.push(livro);
  res.json(livro);
});

app.delete("/livros/:id", (req, res) => {
  const livroId = parseInt(req.params.id);
  const livroExiste = livros.some(l => l.id === livroId);
  if (!livroExiste) return res.status(404).json({ erro: "Livro não encontrado" });

  livros = livros.filter(l => l.id !== livroId);
  res.sendStatus(204);
});

app.listen(8080, () => console.log("API rodando em http://localhost:8080")); //roda o server na porta 8080
