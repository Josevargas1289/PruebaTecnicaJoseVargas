// const Cars = require("../models/car.models");
// const Products = require("../models/product.models");
const consumosTramos = require("../models/consumos.models");
const {
   
    Op
  } = require("sequelize");

class ConsumoServices {
  static async getAllVista1() {
    try {
      const response = await consumosTramos.findAll({
        where: {
          
            Fecha: {
                [Op.between]: ['2010-01-01', '2010-01-02'],
               },
            
        },
        attributes: { exclude: ["createdAt", "updatedAt"] }
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConsumoServices;
