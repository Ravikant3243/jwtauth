import Movie from "../models/Movie.js";
import dotenv from "dotenv"
dotenv.config();
export const addMovies=async(req,res,next)=>{
     const {title,year}=req.body;
     if(!title || !year){
        return res.status(400).json({message:"give proper details of movie"});
     }
     const existingMovie=await Movie.findOne({title});
      if(existingMovie){
         return res.status(400).json({message:"movie already exists"});
      }  
      
      const movie=await Movie.create({
         title,year
     }); 
        if(!movie) return  res.status(400).json("movie is not added");
        console.log({"added movie":movie});
        return res.status(200).json("movie added successfully");
       
}