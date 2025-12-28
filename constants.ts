import { ExperienceItem, FAQItem, HighlightItem, ServiceItem, ReasonItem } from './types';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    sector: "Telecom & IT",
    organizations: "Mobily, Saudi Business Machines, STC Solutions",
    takeaway: "Mastering rapid innovation and partnership."
  },
  {
    sector: "Consulting & Strategy",
    organizations: "Accenture",
    takeaway: "Shaping large-scale transformations across the region."
  },
  {
    sector: "Infrastructure & Banking",
    organizations: "Saudi Railway Co., The Saudi Investment Bank",
    takeaway: "Navigating pivotal projects and stringent financial governance."
  },
  {
    sector: "Defense & Advanced Tech",
    organizations: "SAMI Advanced Electronics Co.",
    takeaway: "Operating at the strategic heart of national priority sectors."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01.",
    title: "International Commercial Contracts",
    description: "Drafting, negotiating, and managing complex cross-border agreements with precision and commercial awareness."
  },
  {
    id: "02.",
    title: "Government & Industrial Project Advisory",
    description: "Strategic counsel on large-scale infrastructure and industrial projects, ensuring regulatory compliance and risk mitigation."
  },
  {
    id: "03.",
    title: "Technology, ICT, and Licensing",
    description: "Specialized expertise in technology agreements, intellectual property licensing, and digital transformation contracts."
  },
  {
    id: "04.",
    title: "Banking, Finance, and Petrochemicals Contracts",
    description: "High-stakes contract structuring for financial institutions and energy sector entities across the Middle East."
  },
  {
    id: "05.",
    title: "Governance, Risk, and Compliance",
    description: "Comprehensive GRC frameworks to protect organizations from legal, regulatory, and reputational risks."
  },
  {
    id: "06.",
    title: "Strategic Legal Advisory for Boards",
    description: "Board-level counsel on corporate governance, fiduciary duties, and strategic decision-making processes."
  }
];

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    organization: "R&R Consultants LLC",
    role: "Senior Member (Pro Bono)",
    description: "Legal, contractual, and governance advisory."
  },
  {
    organization: "Autism Foundation (UK)",
    role: "Senior Advisor (Pro Bono)",
    description: "Governance, compliance, and sustainability strategy."
  },
  {
    organization: "International Leaders Forum",
    role: "Mentor (Pro Bono)",
    description: "Guiding future global leaders in cross-border impact."
  }
];

export const WHY_CHOOSE_DATA: ReasonItem[] = [
  {
    title: "Structured Thinking. Solution-Driven.",
    description: "Complex commercial landscapes require rigorous analytical frameworks. I apply disciplined legal logic to dismantle ambiguity, ensuring every contract supports the broader strategic vision rather than hindering it."
  },
  {
    title: "Integrity in High-Stakes Negotiations.",
    description: "In high-value cross-border transactions, trust is the ultimate asset. I conduct negotiations with unyielding ethical standards, protecting reputation while aggressively pursuing commercial interests."
  },
  {
    title: "Forward-Looking Contract Leadership.",
    description: "A contract is a tool for future stability. By anticipating regulatory shifts and economic fluctuations, I draft agreements that remain resilient and enforceable long after the ink has dried."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How do you handle cross-border contract disputes?",
    answer: "I apply a structured, evidence-based approach to dispute resolution, focusing on commercial pragmatism and strict adherence to international legal frameworks to minimize risk and cost."
  },
  {
    question: "What industries do you specialize in?",
    answer: "My core expertise covers Defence, Petrochemicals, Banking/Finance, and ICT/Technology sectors, specifically within the Middle East and Global markets."
  },
  {
    question: "Do you work with startups or only established enterprises?",
    answer: "While my primary focus is on large-scale industrial and government entities, I advise high-growth technology ventures on licensing, IP protection, and governance structures."
  }
];

export const SCHEMA_MARKUP = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Dr. Sameer Siddiqui",
  "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  "description": "International Contracts & Commercial Lawyer bringing clarity, structure, and commercial practicality to complex contractual and regulatory matters.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Global",
    "addressCountry": "Global"
  },
  "url": "https://www.drsameersiddiqui.com",
  "jobTitle": "International Contracts & Commercial Lawyer",
  "knowsAbout": [
    "International Commercial Contracts",
    "Governance, Risk, and Compliance",
    "Technology Licensing",
    "Mega-project contracts"
  ]
};