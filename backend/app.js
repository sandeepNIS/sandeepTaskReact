const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
// create our express app
const app = express()
// middleware
let cors = require('cors');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route

// const routes = require('./routes/Route')
// app.use('/', routes)
// app.use(cors())
//start server
// app.listen(4021, ()=>{
//     console.log("listeniing at port:4021")
// }) 
const routes = require('./routes/Route')
app.use(cors());
app.use('/', routes)
const port = process.env.PORT || 3080;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
console.log(server);

// app.get("/", (req, res) => {
//     var temo=console.log(__dirname);
//   });

 
//  app.get("/", (req, res) => {
//     res.sendFile(`${__dirname}/index.html`)
//   });

//   app.get("/register", (req, res) =>{
//     res.sendFile(`${__dirname}/Register.html`)
//   });

//   app.get("/List", (req, res) =>{
//     res.sendFile(`${__dirname}/List.html`)
//   });