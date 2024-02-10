import bcrypt from "bcryptjs"
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const addUser=async(req,res,next)=>{
     const {name,email,password}=req.body;
      // name email password check
      const existingUser=await User.findOne({email});
      if(existingUser){
          console.log({message:"user already exists"});
           return res.status(500).json({message:"user already exists"});
       }
        const hashedPassword=bcrypt.hashSync(password);
       const user=await User.create({
        name,
        email,
        password:hashedPassword
       })
        if(!user){
           console.log("some error occured");
           return res.status(400).json("some error occured");
       }
       console.log(user);
       return res.status(201).json({message:"signed up successfully"});
 }



 export const loginUser=async(req,res,next)=>{
    const {email,password}=req.body;
     // name email password check
       const existingUser=await User.findOne({email});
        if(!existingUser){
             console.log({message:"user not found"});
             return res.status(404).json({message:"user not found"})
        }
      
        const isCorrect=bcrypt.compareSync(password,existingUser.password);
         if(!isCorrect) {
             console.log({message:"incorrect password"});
              return res.status(500).json({message:"incorrect password"});
         }
          const token=jwt.sign({email,password:existingUser.password},process.env.SECRET_KEY,{
            expiresIn:"7D"
          });
         console.log({message:"logged successfully"});
      console.log(token);
         return res.status(201).json({message:"logged successfully",token});
}