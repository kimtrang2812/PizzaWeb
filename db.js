const mongoose = require("mongoose")

var mongoURL = "mongodb+srv://trangkim:kim2812A@cluster0.dnuxy.mongodb.net/mern-pizza"

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser:true})

var db = mongoose.connection

db.on("connected", ()=>{
    console.log("Mongo DB Connection Successful");
})


db.on("error", ()=>{
    console.log("Mongo DB is error")
})

module.exports = mongoose