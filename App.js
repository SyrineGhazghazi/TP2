const express = require('express')
const app = express()
const voiture = require ('./routes/index')


app.use(express.json());
app.use('/voiture', voiture )
app.listen(3000,()=> {
    console.log('listening on port 3000')
})