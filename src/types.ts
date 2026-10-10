export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'destinations' 
  | 'why-us' 
  | 'contact' 
  | 'privacy';

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  category: 'skilled' | 'business' | 'employer' | 'student' | 'family' | 'resettlement';
  whoIsItFor: string;
  processOverview: string[];
  typicalDocuments: string[];
  eligibilityFactors: string[];
  destinationsCovered: string[];
  badgeText?: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  code: string;
  tagline: string;
  overview: string;
  popularPathways: {
    title: string;
    description: string;
    suitableFor: string;
  }[];
  keyRequirements: string[];
  processingTimeInfo: string;
  imageAsset: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  profession: string;
  originCountry: string;
  destinationCountry: string;
  visaCategory: string;
  quote: string;
  yearApproved: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  currentCountry: string;
  intendedDestination: string;
  serviceOfInterest: string;
  preferredContactMethod: 'phone' | 'email' | 'whatsapp';
  message: string;
  consent: boolean;
}
