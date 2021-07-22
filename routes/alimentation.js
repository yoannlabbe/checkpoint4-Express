const alimentRouter = require("express").Router();


const { getAliment, createAliment } = require("../controllers/alimentation");

  alimentRouter.get('/', getAliment);

  alimentRouter.post('/', createAliment);



  module.exports = alimentRouter;