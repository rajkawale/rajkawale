export interface WorkItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'shipped' | 'professional' | 'case-study';
  actionLabel: string;
  actionUrl: string;
  actionType: 'link' | 'pdf' | 'drive';
  driveFileId?: string; // Google Drive file ID for embedded viewing
}

export const workItems: WorkItem[] = [
  // Category: Shipped Products
  {
    id: 'raitalk',
    title: 'RaiTalk',
    description: 'Cognitive Emotional AI',
    tags: ['AI', 'React', 'Supabase'],
    category: 'shipped',
    actionLabel: 'Visit Website',
    actionUrl: 'https://raitalk.rajkawale.com',
    actionType: 'link',
  },
  {
    id: 'trinka',
    title: 'Trinka AI',
    description: 'AI Writing Prototype',
    tags: ['NLP', 'Product Design'],
    category: 'shipped',
    actionLabel: 'View Demo',
    actionUrl: 'https://trinka.rajkawale.com',
    actionType: 'link',
  },
  {
    id: 'madhav-farm',
    title: 'Madhav Farm',
    description: 'Agri-tech venture',
    tags: ['Supply Chain', 'D2C'],
    category: 'shipped',
    actionLabel: 'View Pitch Deck',
    actionUrl: 'https://drive.google.com/file/d/1_ptVBOQjw1yIoVTBRpeYCSKeRl4KKL7a/view?usp=drive_link',
    actionType: 'drive',
    driveFileId: '1_ptVBOQjw1yIoVTBRpeYCSKeRl4KKL7a',
  },
  
  // Category: Professional Work (Featured)
  {
    id: 'sinch',
    title: 'Sinch',
    description: 'Delivered 23% ROI by unifying customer signals.',
    tags: ['AI', 'SaaS', 'CDP'],
    category: 'professional',
    actionLabel: 'View Details',
    actionUrl: '#',
    actionType: 'link',
  },
  {
    id: 'nextech-ar',
    title: 'Nextech AR',
    description: 'Boosted release velocity by 40% via CI/CD adoption.',
    tags: ['SaaS', 'DevOps'],
    category: 'professional',
    actionLabel: 'View Details',
    actionUrl: '#',
    actionType: 'link',
  },
  {
    id: 'pernias-popup',
    title: "Pernia's Pop-Up Shop",
    description: 'Migrated monolith cart to microservices, reducing load time from 50s to 1s.',
    tags: ['E-commerce', 'Microservices'],
    category: 'professional',
    actionLabel: 'View Details',
    actionUrl: '#',
    actionType: 'link',
  },
  
  // Category: Case Studies & Teardowns
  {
    id: 'google-keep',
    title: 'Google Keep',
    description: 'Monetization Strategy',
    tags: ['Product Strategy', 'Monetization'],
    category: 'case-study',
    actionLabel: 'Read Case Study',
    actionUrl: '', // User will need to add PDF URL
    actionType: 'pdf',
  },
  {
    id: 'phonepe',
    title: 'PhonePe',
    description: 'USP Analysis',
    tags: ['Product Analysis', 'Competitive Strategy'],
    category: 'case-study',
    actionLabel: 'Read Case Study',
    actionUrl: '', // User will need to add PDF URL
    actionType: 'pdf',
  },
  {
    id: 'springwood',
    title: 'Springwood',
    description: 'Competitive Benchmarking',
    tags: ['Market Research', 'Benchmarking'],
    category: 'case-study',
    actionLabel: 'Read Case Study',
    actionUrl: '', // User will need to add PDF URL
    actionType: 'pdf',
  },
];

export const getWorkByCategory = (category: WorkItem['category']) => {
  return workItems.filter(item => item.category === category);
};

