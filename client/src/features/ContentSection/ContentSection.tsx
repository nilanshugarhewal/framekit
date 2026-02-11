// styles
import "./content_section.scss";
import "./card.scss";

// types
type Post = {
  id: string;
  imageUrl: string;
  username: string;
  heading: string;
  description?: string;
  information: string;
  socials?: Record<string, string>;
  createdAt: string;
};

type ContentSectionProps = {
  posts: Post[];
};

// Card Component - Reusable post card
const Card = ({ post }: { post: Post }) => (
  <div className="card-container">
    <div className="card-image-container">
      <img className="card-img" src={post.imageUrl} alt={post.heading} />
    </div>

    <div className="card-details">
      <p className="card-title">{post.heading}</p>
      {post.description && (
        <p className="card-description">
          {post.description || post.information}
        </p>
      )}
      <span className="card-admin">@{post.username}</span>
    </div>
  </div>
);

// Main Component
export const ContentSection = ({ posts }: ContentSectionProps) => {
  if (posts.length === 0) {
    return (
      <div className="content-section">
        <div className="content-container">
          <p>No posts yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="content-container">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

