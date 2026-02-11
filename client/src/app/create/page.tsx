"use client";

import { useState } from "react";
import "./create_post.scss";

export default function CreatePostPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

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
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="create-post-container">
      <div className="create-post-wrapper">
        <div className="header">
          <h1>Create New Post</h1>
          <p className="subtitle">Share your content with the world</p>
        </div>

        <form onSubmit={handleSubmit} className="create-post-form">
          <div className="form-section">
            <h2 className="section-title">Basic Information</h2>
            
            <div className="form-group">
              <label htmlFor="imageUrl">
                <span className="label-text">Image URL</span>
                <span className="required">*</span>
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">
                <span className="label-text">Username</span>
                <span className="required">*</span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="johndoe"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="heading">
                <span className="label-text">Heading</span>
                <span className="required">*</span>
              </label>
              <input
                id="heading"
                name="heading"
                type="text"
                placeholder="Enter an engaging title"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Content</h2>
            
            <div className="form-group">
              <label htmlFor="description">
                <span className="label-text">Description</span>
                <span className="optional">(optional)</span>
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Add a brief description..."
                rows={3}
                className="form-textarea"
              />
            </div>

            <div className="form-group">
              <label htmlFor="information">
                <span className="label-text">Information</span>
                <span className="required">*</span>
              </label>
              <textarea
                id="information"
                name="information"
                placeholder="Detailed information about your post"
                rows={5}
                required
                className="form-textarea"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Social Links</h2>
            
            <div className="social-inputs">
              <div className="form-group">
                <label htmlFor="twitter">
                  <span className="label-text">Twitter</span>
                </label>
                <div className="input-with-icon">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <input
                    id="twitter"
                    name="twitter"
                    type="url"
                    placeholder="https://twitter.com/username"
                    className="form-input with-icon"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="github">
                  <span className="label-text">GitHub</span>
                </label>
                <div className="input-with-icon">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <input
                    id="github"
                    name="github"
                    type="url"
                    placeholder="https://github.com/username"
                    className="form-input with-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="alert alert-error">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Post created successfully! 🎉
            </div>
          )}

          <button type="submit" disabled={loading} className="submit-button">
            {loading ? (
              <>
                <span className="spinner"></span>
                Creating...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                </svg>
                Create Post
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}