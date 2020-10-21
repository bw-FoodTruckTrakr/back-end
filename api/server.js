const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../routers/auth-router.js');
const trucksRouter = require('../routers/trucks-router.js');
const menuRouter = require('../routers/menu-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter)
server.use('/trucks', trucksRouter);
server.use('/trucks/menu', menuRouter)


server.get("/", (req, res) => {
    res.status(200).json({ Bill_Murray: "IT.IS.ALIVE." })
})

module.exports = server 