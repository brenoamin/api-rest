const express = require('express')
const app = express()

app.get("/", (req, res) =>{
res.send(`Tempo atual do cronômetro: xx minutos e xx segundos`)
setInterval(()=>{

},1000)
})
app.listen(8000);