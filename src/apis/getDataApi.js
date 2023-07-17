import expres from "express";
import dataCollection from "../models/datamodels.js";

const dataGetterRoute = new expres.Router()

// api for login process
dataGetterRoute.get("/Auth/v1/getData", async (request, response) => {
try {
    
    const data = await dataCollection.find()

    console.log("data == ", data);

   response.send({
    "status": 200,
        data
   })
} catch (error) {
    response.status(400).send({
        status: "failed",
        error : error
    })
}
})

export default dataGetterRoute