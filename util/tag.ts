import { Post } from "type";
import { getAllPosts } from "./article";

export type Tag = {
  count: number;
  tag: string;
};

export const getAllTags = async () => {
  const tags: string[] = (await getAllPosts()).reduce<string[]>(
    (prev: string[], curr: Post) => {
      curr.frontMatter.tags.forEach((tag: string) => {
        prev.push(tag);
      });
      return prev;
    },
    []
  );

  const tagWithCount = [...new Set(tags)].map((tag) => ({
    tag,
    count: tags.filter((t) => t === tag).length,
  }));
  return tagWithCount.sort((a: Tag, b: Tag) => b.count - a.count);
};

export const getMostUsedTags = async (number = 10) => {
  const allTags = await getAllTags();
  return allTags.slice(0, number);
};
