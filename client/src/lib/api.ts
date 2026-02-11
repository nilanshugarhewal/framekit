// This file is use to fetch all the data from our backend api.
// Do not alter or change the file until necessary.

// Post is a type which is used by the function, so it means function is Post type.

import type { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_GET_POST_API_URL as string, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
