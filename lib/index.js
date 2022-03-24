export function sortByDate(a, b) {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}