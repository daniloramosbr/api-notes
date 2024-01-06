import routes from "./routes/routes.js";
import { connectDb } from "./database/connect.js";
import { configDotenv } from "dotenv";

const dotenv = configDotenv()

import Express, { json } from "express";

const app = Express()

const port = 2904

app.use(json())

app.use(routes)

connectDb()

app.listen(port, () => {

})

