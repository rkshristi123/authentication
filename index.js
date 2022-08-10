const express= require("express")
const mongoose =require("mongoose")
const UserModel= require("./models/User.model")
const jwt =require("jsonwebtoken")

const app=express()
const client_id="e20aee3d29ebf80a0c8d"
const Client_secret="1bf98ec03ec9eeeeadeb237dcc37561cb36b34ab"

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/" , (req,res)=>{
    return res.sendFile(__dirname+"/index.html")
})

app.get("/github/callback",(req,res)=>{
    const requestToken =req.query.code
    console.log("token is", requestToken);
    return res.send("Login successful")
})

// app.post("/signup",(req,res)=>{
//     const {username,age,password}=req.body
//     const user =new UserModel({
//         username,
//         age,
//         password
//     })
//     user.save();
//     return res.send("signup successful")
// })

// app.post("/login",async(req,res)=>{
//     const {username,password}=req.body
//    const user=await UserModel.findOne({username,password})
//    if(!user){
//     return res.status(401).send("please enter valid credential")
//    }
//   const token= jwt.sign({
//     username:user.username,
//     age:user.age,
//     id:user._id
//   },"SECRET",{expiresIn:"7days"})
//   const refreshToken=jwt.sign({},"REFRESHPASSWORD",{expiresIn:"20days"})
//     return res.send({message:"login successful",token:token,refreshToken:refreshToken})
// })

// app.post("/verify",()=>{

// })

// app.post("/newtoken",(req,res)=>{
//     const refreshToken=req.headers["authorization"].split(" ")[1]
//     const valliadation=jwt.verify(refreshToken,"REFRESHPASSWORD")
//     if(validation){
//         const newprimarytoken=jwt.sign({},"SECRET",{expiresIn:"7 days"})
//         return res.send({token:newprimarytoken})
//     }
// })


// app.get("/profile/:id",async (req,res)=>{
//     const {id} =req.params;
//     const token =req.headers["authorization"].split(" ")[1]

//     try{
//         const verification= jwt.verify(token,"SECRET")
//         if(verification){
//    const user =await UserModel.findOne({_id:id})
//             res.send({profile: "userprofile"})
//         }else{
//             return res.status(401).send("unauthorized")
//         }
      
//     }catch{
//         return res.status(401).send("unauthorized")
//     }
// })

mongoose.connect("mongodb://localhost:27017/web17").then(()=>{
    app.listen(8080,()=>{
        console.log("server started port 8080")
    })
})

