export type Post = {
  id: string;
  imageUrl: string;
  username: string;
  heading: string;
  description?: string;
  information: string;
  socials?: Record<string, string>;
  createdAt: string;
};
