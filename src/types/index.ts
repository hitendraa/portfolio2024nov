export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  gradient: string;
  category: string;
}

export type ProjectCardProps = {
  project: Project;
  index: number;
}
