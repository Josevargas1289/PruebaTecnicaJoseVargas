// const Cars = require("../models/car.models");
const  ConsumoServices  = require("../services/consumos.service");



const  getVista1 = async (req, res, next) =>{
    try {
        // const {id} = req.params;
        const response = await ConsumoServices.getAllVista1();
        res.json(response);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    
    getVista1
}