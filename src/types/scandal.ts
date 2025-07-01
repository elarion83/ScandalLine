export interface Scandal {
  id: string;
  name: string;
  description: string;
  personalities: string[];
  positions: string[];
  startDate: string;
  country?: string;
  judgmentDate?: string;
  convictionDate?: string;
  moneyAmount?: number;
  prisonYears?: number;
  fine?: number;
  ineligibilityYears?: number;
  type: string;
  politicalParty?: string;
  status: 'ongoing' | 'judged' | 'convicted' | 'acquitted';
  investigationDate?: string;
  region?: string;
  institution?: string;
  tags?: string[];
  relatedScandals?: string[];
  sources?: {
    name: string;
    url: string;
  }[];
  sanctions?: {
    person: string;
    penalty: string;
    fine: number;
  }[];
}

export interface FilterOptions {
  types: string[];
  dateRange: {
    start: number;
    end: number;
  };
  personalities: string[];
  parties: string[];
  minAmount?: number;
  maxAmount?: number;
}

export interface TimelineViewport {
  startYear: number;
  endYear: number;
  zoomLevel: number;
}

export interface ContextualFilter {
  type: 'personality' | 'party' | 'status' | 'scandalType';
  value: string | number;
  label: string;
}

export interface Personality {
  id: string;
  name: string;
  imageUrl: string;
  position?: string;
  party?: string;
  scandals?: string[]; // IDs des scandales liés
  stats?: {
    totalScandals: number;
    totalMoneyAmount: number;
    totalFines: number;
    totalPrisonYears: number;
  };
}

export interface SocialMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  type: 'profile' | 'timeline';
}

export interface PersonalityTimeline {
  personality: Personality;
  scandals: Scandal[];
  metadata: SocialMetadata;
}