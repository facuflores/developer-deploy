const express = require("express")
const app = express()

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get("/env", function (req, res) {
  const value = process.env.MENSAJE | "MENSAJE POR DEFAULT";
  res.send(value)
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));