export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  skills: string[];
  experience: string[];
  certifications: string[];
}

export interface Notification {
  id: string;
  type: 'job' | 'course' | 'system';
  title: string;
  message: string;
  date: string;
  read: boolean;
}