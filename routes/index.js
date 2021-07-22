const alimentRouter = require("./alimentation");



module.exports = (app) => {
  app.use("/alimentation", alimentRouter);

};
