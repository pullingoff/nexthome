
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

export interface IProject {
  title: string,
  slug: string,     // path (query string)
  type: string,     // 어떤 앱인지
  thumbnail: string, // 이미지 파일명
  shortDescription: string
}