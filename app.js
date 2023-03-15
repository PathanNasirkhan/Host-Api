require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const port =process.env.PORT || 8000;
const products_routes = require("./routes/product");
const cors = require("cors");




// Set up middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Set up your routes and other middleware here

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});



app.use(cors());



app.get("/",(req,res)=>{
  res.send("hi i am live");
});

app.use("/api/products",products_routes);

const start = async()=>{
    try{
      await connectDB(process.env.MONGODB_URL);
        app.listen(port, ()=>{
            console.log(`${port} yes I am Connected`);
        });
            
    } catch(error){
      console.log(error);
    }
}

start();
