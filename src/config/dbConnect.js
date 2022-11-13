import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://alura:123@cluster0.h1fzueo.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
