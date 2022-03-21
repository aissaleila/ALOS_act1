var unirest = require ("unirest")
var req = unirest ("get,http://localhost:3000/db")
req.headers ({
    "cache-controle":"no-cache"
})

req.end (function(res){
    if (res.error) throw new error(res.error)
    console.log(res.body)
})