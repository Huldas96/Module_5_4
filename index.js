import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 443;

app.use(cors());

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Hello from Homepage"));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));