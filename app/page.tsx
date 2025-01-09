import { Metadata } from "next";
import HomePage from "./home-page";
import { getRecentPosts } from "../util/article";

// TODO: MetadataHead 파일 마이그레이션
export const metadata: Metadata = {
  title: "pullingoff",
  description: "",
  keywords: [
    "개발",
    "프론트엔드",
    "개발자",
    "리액트",
    "Next.js",
    "개발자 성장",
  ],
  openGraph: {
    // url: '',
    // site_name: '',
    // title: '',
    // description: '',
    // image: ''
  },
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
