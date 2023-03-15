require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const port =process.env.PORT || 8000;
const products_routes = require("./routes/product");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

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
