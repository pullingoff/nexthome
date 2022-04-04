export function sortByDate(a, b) {
    return new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf();
}

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}