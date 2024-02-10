import express from "express"

import {auth} from "../middleware/auth.js";
import { addMovies } from "../controllers/movie-controller.js";
const movieRouter=express.Router();

 movieRouter.post("/add",auth,addMovies);
 export default movieRouter;