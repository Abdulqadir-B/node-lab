import express from "express";
import fs from "fs";

const app = express();

// middleware 1
app.use((req, res, next) => {
    next();
});

app.get('/log', (req, res, next) => {
    fs.appendFile(
        'log.txt',
        `Time : ${Date.now()}, path : ${req.path}, method : ${req.method}\n`,
        (err) => {
            if (err) return next(err);
            res.send("Request logged successfully");
        }
    );
});

app.get('/', (req, res) => {
    return res.send("Welcome to Home Page");

})

app.listen(5000, () => console.log("Server is Listening"));
