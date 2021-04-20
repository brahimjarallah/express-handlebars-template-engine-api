const express = require("express")
const path = require("path")
const moment = require("moment")

const app = express()
const logger = (req, res, next) => {
  //log the url request -> http://localhost:5000/api/members
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  )
  next()
}
//init middleware
app.use(logger)
const fs = require("fs")
const members = require("./Members")
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// })

//Get all members
app.get("/api/members", (req, res) => res.json(members))

//set a static folder
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server started on port ${PORT}`))

// #####  simple get request #####
// app.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>")
// })

//#####  to get json data from a json file #####
// const members = JSON.parse(fs.readFileSync("members.json"))
