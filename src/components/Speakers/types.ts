export interface Socials {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  youtube?: string;
}

export interface Speaker {
  id: number;
  image: string;
  name: string;
  role: string;
  sessionTitle?: string;
  sessionType?: string;
  socials: Socials;
}