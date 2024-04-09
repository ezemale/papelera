require("dotenv").config();

const http = require("http");
const fs = require("fs")

function requestController(req, res) {
    const url = req.url;
    const method = req.method;
    console.log({ url,method })

    if(method === "GET" && url === "/"){
        res.setHeader("Content-type", "text/html; charser=utf8")
        fs.readFile('./public/index.html', function(err, file) {
            if (err){
                console.log("Hubo un error") ;
            }
            res.write(file)
            res.end()
    
        })
        return
    }

    if(method === "GET" && url === "/about"){
        res.setHeader("Content-type", "text/html")
        fs.readFile('./public/about.html', function(err, file) {
            if (err){
                console.log("Hubo un error") ;
            }
            res.write(file)
            res.end()
    
        })
        return
    }

    res.setHeader("Content-type", "text/html; charser=utf8")
    res.write("<h1>Paguina no encontrada :(</html>")
    res.end()
}
    


//configurar nuestro server
const server = http.createServer(requestController);

const PORT = process.env.PORT

server.listen(PORT, function () {
    console.log ("aplicacion corriendo en puerto :" + PORT)
});

// const http = require("http")

