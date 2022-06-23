const express = require("express");
const cors = require("cors");
//?const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const config = require('./config')
// Routers
const  usersRouter  = require("./users/users.router").router
const  authRouter  = require("./auth/auth.router").router
const  conversationRouter  = require("./conversations/conversation.router").router
const messageRouter = require('./messages/message.router').router
const participansRouter = require("./participants/participants.router").router

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

// Endpoints
app.use("/api/v1", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/", conversationRouter);
app.use("/api/v1", messageRouter)
app.use("/api/v1", participansRouter)

app.listen(config.port, () =>{
    //console.log(`puerto funcionando bien ${config.port}`)
})

module.exports = { app };
