const http = require("http")
const express = require("express")
const app = express()

// node will send the below message at root url at port 3000
const server = http.createServer((req, res) => {
    res.write("Hello this is node server")
    res.end()
})

// express will send the below message at root url at port 4000
app.get("/", (req, res) => {
    res.send("Hello this is express server")
})

// this will create node server at port 3000
server.listen(3000, () => console.log("node server started at port 3000"))

// this will create node server at port 4000
app.listen(4000, () => console.log("express server started at port 4000"))