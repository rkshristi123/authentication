const {Schema,model} = require("mongoose")

const userschema= new Schema({
    username:String,
    password:String,
    age:Number
})

const UserModel=model("user",userschema)

module.exports =UserModel;