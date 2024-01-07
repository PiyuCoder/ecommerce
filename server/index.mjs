import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const PORT = process.env.PORT;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

// app.use("/", express.static("build"));
// app.get("*", (req, res) => {
//   res.sendFile(join(__dirname, "./build", "index.html"));
// });
<<<<<<< HEAD:server/index.mjs
=======

app.get("/", (req, res) => {
  res.write("working");
});
>>>>>>> 56f61207e45491ac4ab185197d2ea25fabbd7986:server/index.js

// app.get('*', (req, res) => {
//     res.sendFile('./build/index.html');
//   });
<<<<<<< HEAD:server/index.mjs

app.get("/", (req, res) => {
  res.send("working");
});
=======
>>>>>>> 56f61207e45491ac4ab185197d2ea25fabbd7986:server/index.js

//Database connection
connectDb();

app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
