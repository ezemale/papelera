require('dotenv').config();
const http = require("http");

function requestController() {
    //logica de nuestra funcion
    console.log("recibimos una reques!!")
};

//configurar nuestro server
const server = http.createServer(requestController);

const PORT = process.env.PORT

server.listen(PORT, function () {
    console.log ("aplicacion corriendo en puerto :" + PORT)
});

// const http = require("http")

