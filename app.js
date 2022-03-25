const express = require("express");
const app = express();

const port=process.env.PORT || 4001
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.listen(port, () => console.log("running on port 4001"));