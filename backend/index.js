import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./db.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "Hello World! (From server)"});
});

app.use("/todos", todoRoutes)

app.listen(port, () => {
    console.log("Listening on port:", port);
    connectDB();
});