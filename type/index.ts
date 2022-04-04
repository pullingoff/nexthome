export interface FrontMatter {
    title: string
    category: string
    tags: string[]
    published: boolean
    date: string
    description: string
    path: string
    socialImageUrl?: string
    socialImageCredit?: string
  }

export interface Post {
    slug: string  
    frontmatter: FrontMatter
    body: string
    path: string
  }

export interface DateTime {
  dateTime: string
}
