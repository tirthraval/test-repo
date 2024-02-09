const express = require('express')

const app = express()
app.use(express.urlencoded())

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html")
})

app.post("/bmicalculator",function(req,res){
    res.send("Sum of two number: "+String(Number(req.body.num1) + Number(req.body.num2)))
})

app.listen(3000)