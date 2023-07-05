const {Router} = require("express");
const {  getVista1} = require("../controllers/consumos.controller");


const router = Router();

// router.post("/api/v1/productInCart", createProductinCarValidator,  createProductInCar);
router.get("/api/v1/consumos", getVista1);


module.exports = router; 