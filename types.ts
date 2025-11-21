export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide';
}

export interface NavItem {
  label: string;
  href: string;
}