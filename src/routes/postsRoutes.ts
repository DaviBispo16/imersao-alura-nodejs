import express from "express";
import multer from "multer";
import cors from 'cors';

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSucessStatus: 200,
}

import { getPosts, createPost, uploadImage, updateNewPost} from '../controllers/postsControllers';
const routes = express.Router();

const upload = multer({dest: "./uploads"});

routes.use(cors(corsOptions));
routes.get("/posts", getPosts);
routes.post("/posts", createPost);
routes.post("/upload", upload.single('image'), uploadImage);
routes.put("/upload/:id", updateNewPost);

export default routes;