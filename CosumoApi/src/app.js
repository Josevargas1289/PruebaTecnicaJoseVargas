const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config();
const db = require("./utils/database");
const errorHandlerRouter = require("./routes/errorHandler.routes");
const consumosRoutes = require("./routes/consumos.routes");





const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 3000;

db.authenticate()
.then(()=>{
    console.log("base de datos conectada");
})
.catch((error)=>console.log(error))

// db.sync({ force: false  }) // alterar los atributos
//   .then(() => console.log("Base de datos sync"))
//   .catch((error) => console.log(error));

  

  app.use(consumosRoutes);

  
  app.get("/", (req, res, next) => {
    res.send("welcome to my API");
  });

  errorHandlerRouter(app);


  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

