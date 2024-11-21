import { Request, Response } from "express";
import { getAllPosts } from "../models/postsModel";


export async function getPosts(req: Request, res: Response) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}