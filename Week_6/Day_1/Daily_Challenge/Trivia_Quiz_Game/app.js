const express = require("express");
const app = express();
const router = require("./routes/quiz");
const Path = require("path");
app.use(express.json());
app.use(express.static(Path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});
app.use(router);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});