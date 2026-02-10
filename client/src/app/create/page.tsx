"use client";

import { useState } from "react";

export default function CreatePostPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const twitter = formData.get("twitter")?.toString().trim();
    const github = formData.get("github")?.toString().trim();

    const payload = {
      imageUrl: formData.get("imageUrl"),
      username: formData.get("username"),
      heading: formData.get("heading"),
      description: formData.get("description") || undefined,
      information: formData.get("information"),
      socials: {
        ...(twitter && { twitter }),
        ...(github && { github }),
      },
    };

    try {
      const res = await fetch("http://127.0.0.1:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create post");

      e.currentTarget.reset();
      alert("Post created 🎉");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input name="imageUrl" placeholder="Image URL" required />
        <input name="username" placeholder="Username" required />
        <input name="heading" placeholder="Heading" required />

        <textarea name="description" placeholder="Description (optional)" />

        <textarea
          name="information"
          placeholder="Information (required)"
          required
        />

        <input name="twitter" placeholder="Twitter URL" />
        <input name="github" placeholder="GitHub URL" />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button disabled={loading}>{loading ? "Creating..." : "Create"}</button>
      </form>
    </main>
  );
}
