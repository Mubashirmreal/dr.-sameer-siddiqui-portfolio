export interface ExperienceItem {
  sector: string;
  organizations: string;
  takeaway: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HighlightItem {
  organization: string;
  role: string;
  description: string;
}

export interface ReasonItem {
  title: string;
  description: string;
}