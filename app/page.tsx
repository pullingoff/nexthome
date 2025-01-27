import { Metadata } from "next";
import HomePage from "./home-page";
import { getAllPosts } from "../lib/util/article";

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

export default async function Page() {
  // steaming ssr: initial data
  const allPosts = await getAllPosts();
  const INITIAL_LIMIT = 10;
  const initialPosts = allPosts.slice(0, INITIAL_LIMIT);

  return <HomePage initialPosts={initialPosts} totalCount={allPosts.length} />;
}
