import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const port = 3000;

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});