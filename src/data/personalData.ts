import { TimelineItem, Project, Achievement, SocialLink } from '../types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const personalInfo = {
  name: 'John Doe',
  title: 'Software Engineer',
  tagline: 'Building elegant solutions to complex problems',
  email: 'john.doe@example.com',
  location: 'San Francisco, CA',
  bio: `I'm a passionate software engineer with over 5 years of experience building web applications and services. 
  My expertise spans frontend and backend development, with a focus on creating 
  scalable, maintainable, and user-friendly applications.
  
  I enjoy working with modern technologies and frameworks, constantly learning and 
  adapting to the ever-evolving tech landscape. When I'm not coding, you can find me 
  hiking, reading, or experimenting with new recipes in the kitchen.`,
};

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    organization: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: 'Lead development of microservices architecture using Node.js and React. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 40%.',
    type: 'work',
  },
  {
    id: 2,
    title: 'Software Engineer',
    organization: 'DataFlow Systems',
    location: 'Seattle, WA',
    startDate: 'Mar 2019',
    endDate: 'Dec 2021',
    description: 'Developed and maintained backend services using Express.js and MongoDB. Implemented RESTful APIs that improved data processing efficiency by 30%.',
    type: 'work',
  },
  {
    id: 3,
    title: 'Junior Developer',
    organization: 'WebSolutions Co.',
    location: 'Portland, OR',
    startDate: 'Jun 2017',
    endDate: 'Feb 2019',
    description: 'Created responsive web applications using React and Redux. Collaborated with designers to implement UI/UX improvements that increased user engagement by 25%.',
    type: 'work',
  },
  {
    id: 4,
    title: 'Master of Computer Science',
    organization: 'University of Technology',
    location: 'San Francisco, CA',
    startDate: 'Sep 2015',
    endDate: 'May 2017',
    description: 'Specialized in Software Engineering and Artificial Intelligence. Completed thesis on "Optimizing Neural Networks for Mobile Applications".',
    type: 'education',
  },
  {
    id: 5,
    title: 'Bachelor of Science in Computer Science',
    organization: 'State University',
    location: 'Boston, MA',
    startDate: 'Sep 2011',
    endDate: 'May 2015',
    description: 'Graduated with honors. Participated in ACM programming competitions and led the university\'s web development club.',
    type: 'education',
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing integration.',
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/johndoe/ecommerce-platform',
    demoUrl: 'https://ecommerce-demo.example.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality, task assignments, and deadline tracking.',
    imageUrl: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/johndoe/task-manager',
    demoUrl: 'https://taskmanager-demo.example.com',
    tags: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A weather application that provides current conditions and 5-day forecasts based on user location or search queries.',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/johndoe/weather-app',
    tags: ['JavaScript', 'React', 'OpenWeather API', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'Developer Blog',
    description: 'A technical blog platform with markdown support, code syntax highlighting, and commenting system.',
    imageUrl: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/johndoe/dev-blog',
    demoUrl: 'https://devblog-demo.example.com',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'A recipe search application that allows users to find recipes based on ingredients they have on hand.',
    imageUrl: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/johndoe/recipe-finder',
    tags: ['Vue.js', 'Vuex', 'Spoonacular API', 'Bulma'],
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
    imageUrl: 'https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/johndoe/chat-app',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
  },
];

export const achievementsData: Achievement[] = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'December 2021',
    description: 'Validates expertise in designing and deploying scalable systems on AWS infrastructure.',
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credentialUrl: 'https://www.credly.com/badges/example',
  },
  {
    id: 2,
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'March 2022',
    description: 'Demonstrates proficiency in designing, building, testing, and maintaining cloud applications on Microsoft Azure.',
    imageUrl: 'https://images.pexels.com/photos/7988113/pexels-photo-7988113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credentialUrl: 'https://www.credly.com/badges/example',
  },
  {
    id: 3,
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: 'July 2022',
    description: 'Validates ability to build scalable and highly available applications using Google Cloud technologies.',
    imageUrl: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credentialUrl: 'https://www.credential.net/example',
  },
  {
    id: 4,
    title: 'MongoDB Certified Developer Associate',
    issuer: 'MongoDB',
    date: 'January 2021',
    description: 'Confirms proficiency in building applications using MongoDB and implementing data modeling, querying, and managing MongoDB databases.',
    imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credentialUrl: 'https://university.mongodb.com/certification/example',
  },
  {
    id: 5,
    title: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: 'April 2023',
    description: 'Demonstrates proficiency in Kubernetes installation, configuration, and management.',
    imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credentialUrl: 'https://www.credly.com/badges/example',
  },
  {
    id: 6,
    title: 'React Advanced Certification',
    issuer: 'Frontend Masters',
    date: 'August 2022',
    description: 'Advanced certification covering React patterns, performance optimization, and state management.',
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credentialUrl: 'https://frontendmasters.com/certification/example',
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/johndoe',
    icon: 'Github',
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johndoe',
    icon: 'Linkedin',
  },
  {
    id: 3,
    name: 'Twitter',
    url: 'https://twitter.com/johndoe',
    icon: 'Twitter',
  },
  {
    id: 4,
    name: 'Email',
    url: 'mailto:john.doe@example.com',
    icon: 'Mail',
  },
];

export const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3/SASS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'Spring Boot', 'GraphQL'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Git'] },
  { category: 'Tools', items: ['VS Code', 'Postman', 'Figma', 'JIRA', 'Webpack', 'Jest'] },
];