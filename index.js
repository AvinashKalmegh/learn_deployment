const express = require("express");
const cors = require("cors")
const user = require("./routes/user");
const main = require("./db/config")
const app=express();
app.use(cors());

app.use(express.json());


app.use("/user",user)



app.listen(4500, ()=>{
    main();
    console.log("Server is running on port 4500");

})