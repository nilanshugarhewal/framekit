import { getPosts } from "@/lib/api";
import { ContentSection } from "@/features/ContentSection/ContentSection";
import { HeroSection } from "@/features/HeroSection/HeroSection";
import { Footer } from "@/layouts/Footer/Footer";
import { Navbar } from "@/layouts/Navbar/Navbar";
import { BottomBar } from "@/components/BottomBar/BottomBar";

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

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div id="home-page">
      <Navbar />
      <HeroSection />
      <BottomBar />
      <ContentSection posts={posts} />
      <Footer />
    </div>
  );
}
