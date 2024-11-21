import connectToDatabase from "../config/database";

export async function getAllPosts() {
    const db = await connectToDatabase("imersao_data");
    const getPosts = db?.collection("posts").find().toArray();
    return getPosts;
}