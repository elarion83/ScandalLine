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

export interface SocialMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  type: 'profile' | 'timeline';
}