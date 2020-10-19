const express = require("express")
const server = express()


server.get("/", (req, res) => {
    res.status(200).json({ Bill_Murray: "IT.IS.ALIVE." })
})

module.exports = server 