import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/user-route.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import movieRouter from "./routes/movie-route.js";
dotenv.config();
const app=express();
 app.use(express.json());
//  app.use((req,res,next)=>{
//   const header=
//      const decoded=jwt.verify(req.body,process.env.SECRET_KEY);
//     console.log(decoded);
//      next();
// })
// app.use((req,res,next)=>{
//   const header=req.get('Authorization');
//   const token=header.split("Bearer ")[1];
// //   console.log(token);
//   // const decoded=jwt.verify(token,process.env.SECRET_KEY);
//   // console.log(decoded);
//   try {
//     const decoded=jwt.verify(token,process.env.SECRET_KEY);
//      console.log(decoded);
//       if(decoded.email)next();
//       else res.status(401);
//   } catch (error) {
    
//      return res.status(401).json(error);
//   }
  
// })
 app.use("/user",userRouter);
 app.use("/movie",movieRouter);
 
 mongoose.connect(
  `mongodb+srv://admin:FZcZaV4WHysBD6Sy@cluster0.cwxncle.mongodb.net/?retryWrites=true&w=majority`
 )
 .then(()=>{
     console.log("Database is connected");
      app.listen(8080,()=>{
         console.log("app is running on port 8080")
      })
 })
 .catch((error)=>{
     console.log(error);
 })
 
 