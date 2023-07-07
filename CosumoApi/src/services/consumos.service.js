const consumosTramos = require("../models/consumos.models");
const consumosHistorico = require("../models/consumoshistoricos.models");
const cosumoTop20 = require("../models/top20.models");

const { Op } = require("sequelize");

class ConsumoServices {
  static async getAllVista1(fechaInit, fechaEnd, offset, limit) {
    // console.log(typeof(offset) , typeof(limit) );
    try {
      return await consumosTramos.findAll({
        where: {
          Fecha: {
            [Op.between]: [fechaInit, fechaEnd],
          },
        },
        attributes: { exclude: ["createdAt", "updatedAt"] },

        offset,
        limit,
      });
      // return response;
    } catch (error) {
      throw error;
    }
  }

  static async getAllVista2(fechaInit, fechaEnd, offset, limit) {
    try {
      return await consumosHistorico.findAll({
        where: {
          Fecha: {
            [Op.between]: [fechaInit, fechaEnd],
          },
        },
        attributes: { exclude: ["id", "createdAt", "updatedAt"] },
        offset,
        limit,
      });
      // return response;
    } catch (error) {
      throw error;
    }
  }

  static async getAllVista3(fechaInit, fechaEnd) {
    try {
      const response = await cosumoTop20.findAll({
        where: {
          Fecha: {
            [Op.between]: [fechaInit, fechaEnd],
          },
        },
        order: [
          ["Perdida", "DESC"]
        ],
        limit: 20,
        attributes: { exclude: ["createdAt", "updatedAt", "id"] },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConsumoServices;
