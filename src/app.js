import express from "express"
import dotenv from "dotenv"
import multer from "multer"
import dataGetterRoute from "./apis/getDataApi.js"
import dataSetterRoute from "./apis/setDataApi.js"

// configuration of .env file
dotenv.config()
// configuration of multer
const upload = multer()
// configuration server express
const app = express()

// configuration of accepting body parser for json
app.use(express.json())
// configuration of accepting body parser for form-data
app.use(upload.any())
// configuration of accepting body parser of x-www-form-urlencoded
app.use(express.urlencoded(
    {extended: true}
))

app.use(dataGetterRoute)
app.use(dataSetterRoute)

// defined the server port
const serverPort = process.env.SERVER_PORT

// creating the node server
app.listen(serverPort, () => {
    console.log("node server is started");
    console.log(`on port number ${serverPort}`);
})