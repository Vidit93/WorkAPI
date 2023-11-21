require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const work_routes = require("./routes/work");
const connectDB = require("./db/connect");

app.get("/",(req,res)=> {
    res.send("hello ji");
});

app.use(express.json());
app.use("/api/works",work_routes);

const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} connected`);;
        });
    } catch (error) {
        console.log(error);
    }
};

start();  