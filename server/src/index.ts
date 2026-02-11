import express from "express";
import cors from "cors";
import postRoutes from "./modules/post/post.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes);

app.get("/", (_req, res) => {
  res.send("Framekit API running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
