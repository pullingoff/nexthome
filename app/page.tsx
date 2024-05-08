import { Metadata } from "next";
import HomePage from "./home-page";
import { getRecentPosts } from "./utils/articles";

// TODO: MetadataHead 파일 마이그레이션
export const metadata: Metadata = {
  title: "My Page Title",
};

async function getPosts() {
  const { recentPosts } = await getRecentPosts();
  return recentPosts;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component
  return <HomePage recentPosts={recentPosts} />;
}
