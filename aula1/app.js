const express = require('express')
const app = express()
const port = 3000

app.get("/", function(req,res){
    return res.render("index.html")
})

app.listen(3000, function(){
    console.log("iniciei o servidor")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })