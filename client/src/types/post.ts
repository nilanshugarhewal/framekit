// This is the Post interface used as a Type to define any variable or value.
// Means a variable is of Post type when used.

// Do not alter or chnage the file until needed.

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
