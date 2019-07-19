require("dotenv").config();

const http = require("http");
const database = require("./config/database");
const app = require("./config/server");

database(process.env.MONGODB_URI);

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, function() {
  console.log("Servidor Imiciado na porta 3000");
});
