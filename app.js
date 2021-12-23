const express = require("express")
require('dotenv').config()
var cors = require('cors')
const authenticationRoutes = require("./routes/authenticationRoutes")
const { centralErrorHandler } = require("./controllers/errorcontroller")
const app = express()


// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
 
// route middleware
app.use("/api/authentication",authenticationRoutes)

// central error handler middleware
app.use(centralErrorHandler)

module.exports = app 