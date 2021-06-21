const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser")




app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());







//dadtabasze import

var dbconnection = require('./db')


   const productroute = require('./routes/productRoute');

   const userroute = require('./routes/userRoute');


app.use('/api/products/',productroute);

app.use('/api/users/',userroute);


//npm start server.js to run

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))