require("dotenv").config();
const connectDB = require("./db/connect")
const Work = require("./models/work")
const WorkJson = require("./work.json")

const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Work.deleteMany();
        await Work.create(WorkJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();