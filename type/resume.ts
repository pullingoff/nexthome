export interface WorkExperience {
  organization: string;
  description: string;
  period: string;
  projects: {
    title: string;
    skills?: string[];
    description?: string;
    details?: string[];
  }[];
}

export interface Project {
  organization: string;
  description: string;
  link: string;
  period: string;
  items: {
    skills: string[];
    descriptions: string[];
  }[];
}

export interface OtherExperience {
  organization: string;
  link: string;
  period: string;
  details: string[];
}

export interface Skill {
  type: string;
  items: string[];
}

export interface Education {
  institute: string;
  period: string;
  details?: string[];
}

export interface HeaderInfo {
  name: string;
  job: string;
  email: string;
  github: string;
  mainSentence: string;
  firstSentences: string[];
}
