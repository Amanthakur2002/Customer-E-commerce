const express = require('express')

const app = express()

const port = 8050;


const productRouter = require('./routes/products/Products_routes');

app.use('/api/customer', productRouter);








app.listen(port, ()=>{
    console.log(`server is running on port no. ${port}`)
})

