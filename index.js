const http = require("http")

function requestController() {
    //logica de nuestra funcion
    console.log("recibimos una reques!!")
};

//configurar nuestro server
const server = http.createServer(requestController)

cosnt PORT = process.env.PORT

server.listen(40000) 

// const http = require("http")

