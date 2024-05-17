import routes from "./src/routes/routes.js";
import { connectDb } from "./src/database/connect.js";
import { configDotenv } from "dotenv";

const dotenv = configDotenv()

import Express, { json } from "express";

const app = Express()

const port = 2904

app.use(json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
app.use(routes)

connectDb()

app.listen(port, () => {

})

