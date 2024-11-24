import connectToDatabase from "../config/database";
import "dotenv/config";
import Post from "../types/Post"
import { ObjectId } from "mongodb";

const databaseName = process.env.DATABASE_NAME || "";
const databaseCollection = process.env.DATABASE_COLLECTION || "";

export async function getAllPosts() {
    const db = await connectToDatabase(databaseName);
    const getPosts = db?.collection(databaseCollection).find().toArray();
    return getPosts;
}

export async function createOnePost(newPost: Post) {
    const db = await connectToDatabase(databaseName);
     return db?.collection(databaseCollection).insertOne(newPost); 
}

export async function updatePost(id: string, newPost: Post) {
    const db = await connectToDatabase(databaseName);
    const objectId = ObjectId.createFromHexString(id)
    return db?.collection(databaseCollection).updateOne({_id: new ObjectId(objectId)}, {$set: newPost});
}