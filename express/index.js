import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Home Page.");
})

app.get('/about', (req, res) => {
    res.send("Welcome to About Page");
})

app.get('/user', (req, res) => {
    res.send(`Welcome! ${req.query.name}`);
})

const port = 5000;
app.listen(port, () => console.log(`server is listening at port : ${port}`)
)