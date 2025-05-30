export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: 'education' | 'work';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
}

export interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  credentialUrl?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}