import express from "express";
import "dotenv/config";
import routes from "./routes/postsRoutes";

const app = express();
app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`server started on port ${process.env.PORT}`));