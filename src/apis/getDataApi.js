import expres from "express";

const dataGetterRoute = new expres.Router()

// api for login process
dataGetterRoute.post("/Auth/v1/getData", async (request, response) => {
try {
   let getData = request.body.name




   response.send({
    "your name": getData
   })
} catch (error) {
    response.status(400).send({
        status: "failed",
        error : error
    })
}
})

export default dataGetterRoute