const ConsumoServices = require("../services/consumos.service");
const consumosTramos = require("../models/consumos.models");

const ConsumoHistorico = require("../models/consumoshistoricos.models");

const getVista1 = async (req, res, next) => {
  try {
    const { fechaInit, fechaEnd } = req.params;
    const { offset, limit } = req.query;
    const count = await consumosTramos.count();
    // console.log(count);

    const result = await ConsumoServices.getAllVista1(
      fechaInit,
      fechaEnd,
      +offset,
      +limit
    );

    // console.log(result);
    const url = `http://localhost:3000/api/v1/consumos/${fechaInit}/${fechaEnd}`;

    const newOffset = (isNext) => {
      if (isNext) return Number(offset) + Number(limit);

      return Number(offset) - Number(limit);
    };

    const nextPage =
      newOffset(true) >= count
        ? null
        : `${url}?offset=${newOffset(true)}&limit=${limit}`;
    const previousPage =
      +offset > 0 ? `${url}?offset=${newOffset(false)}&limit=${limit}` : null;

    const response = {
      count,
      next: nextPage,
      previous: previousPage,
      data: result,
    };

    res.json(!limit && !offset ? result : response);
  } catch (error) {
    next(error);
  }
};

const getVista2 = async (req, res, next) => {
  try {
    const { fechaInit, fechaEnd } = req.params;
    const { offset, limit } = req.query;
    const count = await ConsumoHistorico.count();

    const result = await ConsumoServices.getAllVista2(
      fechaInit,
      fechaEnd,
      +offset,
      +limit
    );

    // console.log(result);
    const url = `http://localhost:3000/api/v1/historicos/${fechaInit}/${fechaEnd}`;

    const newOffset = (isNext) => {
      if (isNext) return Number(offset) + Number(limit);

      return Number(offset) - Number(limit);
    };

    const nextPage =
      newOffset(true) >= count
        ? null
        : `${url}?offset=${newOffset(true)}&limit=${limit}`;
    const previousPage =
      +offset > 0 ? `${url}?offset=${newOffset(false)}&limit=${limit}` : null;

    const response = {
      count,
      next: nextPage,
      previous: previousPage,
      data: result,
    };

    res.json(!limit && !offset ? result : response);
  } catch (error) {
    next(error);
  }
};

const  getVista3 = async (req, res, next) =>{
  try {
      const {fechaInit, fechaEnd} = req.params;
      const response = await ConsumoServices.getAllVista3(fechaInit, fechaEnd);
      res.json(response);
  } catch (error) {
      next(error)
  }
}


module.exports = {
  getVista1,
  getVista2,
  getVista3,
};
