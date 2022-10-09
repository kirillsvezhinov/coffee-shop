require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./db/db");
const router = require("./routes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "static")));
app.use("/api", router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        

        app.listen(process.env.PORT, () => {
            console.log(`Server app listening at http://localhost:${process.env.PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};
start();
