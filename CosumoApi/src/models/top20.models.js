const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const cosumoTop20 = db.define("vwConsumoPerdidas", {
  NombreCliente: {
    type: DataTypes.STRING,
  }, 
  LineaNombre: {
    type: DataTypes.STRING,
  },

  Perdida: {
    type: DataTypes.DECIMAL,
  }
  
});
module.exports = cosumoTop20;