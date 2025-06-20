import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/api/hello", (req, res) => res.json({ message: "Hello From Express" }));

app.post("/api/world", (req, res) => {
    try {
        const message = req.body.post;
        console.log(req.body);
        if (!message)
            throw new Error("Message is required");

        res.json({ message: `I received your POST request. This is what you sent me: ${message}` });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});