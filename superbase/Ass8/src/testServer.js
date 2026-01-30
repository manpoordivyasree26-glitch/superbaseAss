import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO SERVER");
});

app.listen(3000, () => {
  console.log("Test server running on port 3000");
});
