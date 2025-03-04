const express = require("express")
const carsRouter = require("./cars/cars-router")
const server = express()

server.use(express.json())

server.use("/api/cars", carsRouter)

server.use ((err , req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server
