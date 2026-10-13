import express from "express";
import data from "./MOCK_DATA.json" with { type: "json" };

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home Page.");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

app.get("/users", (req, res) => {
  return res.send(data);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  return res.send(user);
});

const port = 5000;
app.listen(port, () => console.log(`server is listening at port : ${port}`));
