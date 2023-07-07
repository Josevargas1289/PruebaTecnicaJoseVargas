
const  ConsumoServices  = require("../services/consumos.service");



const  getVista1 = async (req, res, next) =>{
    try {
        const {fechaInit, fechaEnd} = req.params;
        const response = await ConsumoServices.getAllVista1(fechaInit, fechaEnd);
        res.json(response);
    } catch (error) {
        next(error)
    }
}

const  getVista2 = async (req, res, next) =>{
    try {
        const {fechaInit, fechaEnd} = req.params;
        const response = await ConsumoServices.getAllVista2(fechaInit, fechaEnd);
        res.json(response);
    } catch (error) {
        next(error)
    }
}

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
    getVista3
}