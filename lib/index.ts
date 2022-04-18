import { IPost } from "types";

export const markdownRegex = /(\.mdx$)|(\.md$)|(\.markdown$)/

export const sortByDate = (a : IPost, b: IPost) =>{
    return new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf();
}

export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}