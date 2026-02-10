import type { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:5000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
