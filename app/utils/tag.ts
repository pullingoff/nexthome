import { Post } from "#src/type";
import { getAllPosts } from "#lib/posts";

export type Tag = {
  count: number;
  tag: string;
};

export const retrieveAllTags = async () => {
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

const retrieveAllSlugs = async () => {
  const slugs: string[] = (await getAllPosts()).map((post) => {
    return post.slug;
  });

  return slugs;
};
