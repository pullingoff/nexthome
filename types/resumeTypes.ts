export interface IHeaderInfo {
    name: string,
    job: string,
    email: string,
    firstSentences: string[]
}

export interface IWorkProject {
    title: string,
    description: string,
    details: string[]
}

// workExp, otherExp에서 둘다 쓴다.
export interface IExp { 
    organization: string,
    description: string,
    period: string,
    projects?: IWorkProject[]
    details?: string[]
}

export interface IResumeData {
    license: string[]
}

export interface ITechStack {
    key?: any
    skill: string
    ability: string[]
}