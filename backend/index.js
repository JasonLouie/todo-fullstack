import express from "express";

const app = express();

const port = 8080;

app.get("/", (req, res) => {
    res.json({message: "Hello World! (From server)"});
});

app.listen(port, () => {
    console.log("Listening on port:", port);
});