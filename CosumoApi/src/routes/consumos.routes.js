const {Router} = require("express");
const {  getVista1, getVista2, getVista3  } = require("../controllers/consumos.controller");


const router = Router();


router.get("/api/v1/consumos/:fechaInit/:fechaEnd", getVista1);
router.get("/api/v1/historicos/:fechaInit/:fechaEnd", getVista2);
router.get("/api/v1/top20/:fechaInit/:fechaEnd", getVista3);



module.exports = router; 