const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    descricao: String,
    valor: Number
  },
  { timestamps: true }
);

const item = mongoose.model("itens", clienteSchema);

module.exports = item;
