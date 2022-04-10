
export interface IFrontMatter {
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

export interface IPost {
    slug: string  
    frontmatter: IFrontMatter
    body: string
    path?: string
    headings?: Array<IHeading>
  }


export interface IHeading {
  text: string,
  link: string
}

export interface IDateTime {
  dateTime: string
}

export interface ICustomMeta {
  title : string
  // date: string
}