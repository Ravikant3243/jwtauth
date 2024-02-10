  import jwt from "jsonwebtoken";
   import dotenv from "dotenv";
    dotenv.config();
  export  const auth=async(req,res,next)=>{
    const header=req.get('Authorization');
    const token=header.split("Bearer ")[1];   
     if(!token){
       return   res.status(500).json({message:"invalid token login again"});
     }

     try {

          const decoded=jwt.verify(token,process.env.SECRET_KEY);
           console.log("verified");
            next();
      
   }
    catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }

 }
