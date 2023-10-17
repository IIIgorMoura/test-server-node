// chama modulo http do NODE, n precisa usar "./" pois é módulo nativo
let http = require("http")

// createServer abre servidor para comunicar com o cliente
http.createServer(function(req, res){
    // usa func para indicar a porta q o server sera alocado
   res.end("Server Marco Aurélio HTTP") 
}).listen(3000)
console.log("Está funcionando")



