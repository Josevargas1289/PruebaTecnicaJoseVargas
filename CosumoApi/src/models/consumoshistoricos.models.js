const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const consumosHistorico = db.define("vwHistoricoConsumos", {
  LineaNombre: {
    type: DataTypes.STRING,
  }, 
  NombreCliente: {
    type: DataTypes.STRING,
  },

  Consumo: {
    type: DataTypes.DECIMAL,
  },
  Perdida: {
    type: DataTypes.DECIMAL,
  },
  Costo: {
    type: DataTypes.DECIMAL,
  },
  
});
module.exports = consumosHistorico;