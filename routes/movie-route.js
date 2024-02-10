import express from "express"
import { addMovies } from "../controllers/movie-controller.js";
const movieRouter=express.Router();

movieRouter.post("/add",addMovies);
 export default movieRouter;