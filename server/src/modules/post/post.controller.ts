import prisma from "../../config/prisma";

export const createPost = async (req: any, res: any) => {
  try {
    const { imageUrl, username, heading, description, information, socials } =
      req.body;

    const post = await prisma.post.create({
      data: {
        imageUrl,
        username,
        heading,
        description,
        information,
        socials,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("CREATE POST ERROR:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getPosts = async (_req: any, res: any) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.json(posts);
  } catch (error) {
    console.error("GET POSTS ERROR:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
