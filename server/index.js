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

app.use("/", express.static("build"));
// app.get("/*", (req, res) => {
//   res.sendFile(join(__dirname, "./build", "index.html"));
// });

// app.use("/", (req, res) => {
//   res.send("working");
// });

// app.get('*', (req, res) => {
//     res.sendFile('./build/index.html');
//   });

//Database connection
connectDb();

app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
