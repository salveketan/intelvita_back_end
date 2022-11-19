const express = require('express');

const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" })
app.use(cors());
app.use(express.json())
require("./config/db")
app.use("", require("./controller/userController"))
app.use("", require("./controller/productController"))
app.use("", require('./controller/cartContrller'))

const PORT = process.env.PORT || 5000;
app.set("port", PORT)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})