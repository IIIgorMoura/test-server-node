let express = require("express")
let app = express()

app.get('/', function(req, res) {
    // req = requisi(oq o user pede) ---- res = resp(oq we resp a ele)
    res.send("Meu server")
})

app.listen(3000, function() {
    console.log("funciona")
})