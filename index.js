const express = require("express")

const app = express()

app.get("/", (req, res)=> {
    return res.send("bevarsi manjula")
})

app.listen(8000, (req, res)=> {
    console.log(`server is running on port 8000`)
})