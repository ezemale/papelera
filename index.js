const http = require("http")

function requestController() {
    //logica de nuestra funcion
    console.log("recibimos una reques!!")
};

//configurar nuestro server
const server = http.createServer(requestController)

server.listen(40000) 

// const http = require("http")

