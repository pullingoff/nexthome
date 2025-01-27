import { getAllPosts } from "lib/util/article";
import { NextRequest, NextResponse } from "next/server";

const DEFAULT_LIMIT = 10;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? DEFAULT_LIMIT);

  const allPosts = await getAllPosts();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const slice = allPosts.slice(startIndex, endIndex);

  const hasNextPage = endIndex < allPosts.length;

  return NextResponse.json({
    data: slice,
    page,
    hasNextPage,
  });
}
