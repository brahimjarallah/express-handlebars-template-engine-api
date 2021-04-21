const moment = require("moment")

const logger = (req, res, next) => {
  //log the url request -> http://localhost:5000/api/members
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  )
  next()
}

module.exports = logger
