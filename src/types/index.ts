export interface TechTag {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tech: TechTag[];
  githubUrl: string;
  image: string | null;
  imageAlt: string;
}
