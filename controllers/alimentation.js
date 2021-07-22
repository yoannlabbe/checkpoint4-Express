const { find, create } = require("../models/alimentation");


const getAliment = async (req, res) => {
    const [data] = await find(req.params.id);
    res.json(data);
  };
  
  const createAliment = async (req, res) => {
    try {
      await create(req.body);
      res.status(201).send("aliment créé");
    } catch (error) {
      console.log(error);
      res.status(500).send("error aliment");
    }
  };

  module.exports = { getAliment, createAliment };