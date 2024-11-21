import express from 'express';
import { getPosts } from '../controllers/postsControllers';
const routes = express.Router();

routes.get("/posts", getPosts);

export default routes;