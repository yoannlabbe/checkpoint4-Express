const express = require("express");
const app = express();
const cors = require ("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin:"http://localhost:3000"}));
require("./routes")(app);

const port = 3031;

app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});