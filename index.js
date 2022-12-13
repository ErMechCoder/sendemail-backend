
const express= require('express');
const http = require("http");
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const config = require('./config');
//const mediaFileRoute =require('./routes/file.routes');
const newsletterRoute = require("./routes/email.routes");
const mongodbConnect = require("./db");

const {port, appUrl, allowedDomains} = config;

// const corsConfig=(req, next,res) =>{
//     res.header("Cross-Origin Resource Policy ","cross-origin");
//     return next();
// }




const app = express();
app.use(function(req, res, next) 
{ res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next(); });


app.use(cors({ origin:'http://localhost:3000', credentials: true }))
//app.use(corsConfig)

// compress all the file s 
app.use(compression())
// compressor security
app.use(helmet())


// express config
app.use(express.json())

app.use(express.urlencoded({extended: false}))

// connection with database
mongodbConnect();

// server static file 
app.use("/static", express.static(path.join(__dirname,"public")))
// all routes 
app.use("/api", newsletterRoute)

//app.use("/api", mediaFileRoute )

// app.get("/",(req,res)=>{
//     res.send("server is running successfully")
// })

const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})