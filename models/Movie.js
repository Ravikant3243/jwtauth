 import mongoose from "mongoose";
 import { Schema } from "mongoose";
const movieSchema=new Schema({
     title:{
         type:String,
         required:true,
         unque:true
     }
     ,
     year:{
        type:Number,
        required:true,

     },
     genres:[
        {
            type:String,
           
        }
     ],
     cast:[
        {
            type:String
             
        }
     ]
})
const Movie=mongoose.model("Movie",movieSchema);
 export default Movie;