const express = require("express");
const router = express.Router();

const metaDataController=require("../controllers/metaData");


router.get('/fetch',metaDataController.fetchmetaData)
router.get('/get',metaDataController.getmetaData)

router.post('/metaData',metaDataController.insertmetaData)
module.exports = router