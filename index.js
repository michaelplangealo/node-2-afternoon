require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const pc = require("./products_controller");

// setting up connection to DB
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  // console.log(dbInstance);
  app.set("db", dbInstance);
});

// endpoints
app.get("/api/products", pc.getAll);
app.post("/api/product", pc.create);
app.get("/api/product/:id", pc.getOne);
app.put("/api/product/:id", pc.update);
app.delete("/api/product/:id", pc.delete);

// listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`ehhhh no thanks ${port}`);
});
