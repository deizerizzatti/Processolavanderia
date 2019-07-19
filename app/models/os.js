const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const osSchema = new Schema(
  {
    dataEntrada: Date,
    dataSaida: Date,
    valorTotal: Number,
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "clientes"
    },
    itens: {
      type: Schema.Types.ObjectId,
      ref: "itens"
    }
  },
  { timestamps: true }
);

const os = mongoose.model("ordensServicos", osSchema);

module.exports = os;
