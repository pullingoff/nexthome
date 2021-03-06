export interface IHeaderInfo {
  name: string;
  job: string;
  email: string;
  github: string;
  firstSentences: string[];
}

export interface IWorkProject {
  title?: string;
  tech: string[];
  link?: string;
  description?: string;
  details: string[];
}

export interface IExp {
  organization: string;
  description: string;
  link?: string;
  period: string;
  projects?: IWorkProject[];
  details?: string[];
}

export interface ITechStack {
  type: string;
  skill: string[];
}

export interface IEducation {
  institute: string;
  course: string;
  period: string;
  details?: string[];
}
