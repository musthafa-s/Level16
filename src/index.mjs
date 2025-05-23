import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
