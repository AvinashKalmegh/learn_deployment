const mongoose = require("mongoose");


const main = async()=>{
    const connect = await mongoose.connect("mongodb+srv://avinash:avinash@cluster0.vhz5xmy.mongodb.net/miniapp?retryWrites=true&w=majority") ;
    console.log("connected to db");
}



module.exports = main;