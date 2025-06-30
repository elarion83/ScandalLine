import { Scandal, FilterOptions } from '../types/scandal';

export const filterScandals = (scandals: Scandal[], filters: FilterOptions): Scandal[] => {
  return scandals.filter(scandal => {
    // Type filter
    if (filters.types.length > 0 && !filters.types.includes(scandal.type)) {
      return false;
    }

    // Date range filter
    const scandalYear = new Date(scandal.startDate).getFullYear();
    if (scandalYear < filters.dateRange.start || scandalYear > filters.dateRange.end) {
      return false;
    }

    // Personalities filter
    if (filters.personalities.length > 0) {
      const scandalPersonalities = scandal.personalities || [];
      const hasPersonality = scandalPersonalities.some(p => 
        filters.personalities.some(fp => p.toLowerCase().includes(fp.toLowerCase()))
      );
      if (!hasPersonality) return false;
    }

    // Party filter
    if (filters.parties.length > 0 && scandal.politicalParty) {
      if (!filters.parties.includes(scandal.politicalParty)) {
        return false;
      }
    }

    // Amount filter
    if (filters.minAmount && scandal.moneyAmount && scandal.moneyAmount < filters.minAmount) {
      return false;
    }
    if (filters.maxAmount && scandal.moneyAmount && scandal.moneyAmount > filters.maxAmount) {
      return false;
    }

    return true;
  });
};

export const calculateStats = (scandals: Scandal[]) => {
  const totalMoney = scandals.reduce((sum, s) => sum + (s.moneyAmount || 0), 0);
  const totalPrisonYears = scandals.reduce((sum, s) => sum + (s.prisonYears || 0), 0);
  const totalFines = scandals.reduce((sum, s) => sum + (s.fine || 0), 0);
  
  const byDecade = scandals.reduce((acc, scandal) => {
    const decade = Math.floor(new Date(scandal.startDate).getFullYear() / 10) * 10;
    acc[decade] = (acc[decade] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const byType = scandals.reduce((acc, scandal) => {
    acc[scandal.type] = (acc[scandal.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const byParty = scandals.reduce((acc, scandal) => {
    if (scandal.politicalParty) {
      acc[scandal.politicalParty] = (acc[scandal.politicalParty] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return {
    total: scandals.length,
    totalMoney,
    totalPrisonYears,
    totalFines,
    byDecade,
    byType,
    byParty
  };
};

export const formatLargeNumber = (num: number): string => {
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}Md€`;
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M€`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}k€`;
  return formatCurrency(num);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString: string, format?: string): string => {
  if (format === 'MMM yyyy') {
    const date = new Date(dateString);
    const month = date.toLocaleDateString('fr-FR', { month: 'short' });
    const year = date.getFullYear();
    return `${month.charAt(0).toUpperCase()}${month.slice(1)} ${year}`;
  }
  
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Clean scandal name by removing content in parentheses
 * @param name - The original scandal name
 * @returns The cleaned name without parentheses content
 */
export const cleanScandalName = (name: string): string => {
  // Remove content in parentheses (including the parentheses)
  return name.replace(/\s*\([^)]*\)/g, '').trim();
};

// Mapping des types détaillés vers les catégories principales
export const scandalTypeCategories: Record<string, string> = {
  // Corruption et Abus de Pouvoir - Indigo
  'emplois-fictifs': 'corruption',
  'abus-fonction': 'corruption',
  'corruption-internationale': 'corruption',
  'corruption-passive': 'corruption',
  'corruption-electorale': 'corruption',
  'corruption-marches': 'corruption',
  'corruption-sportive': 'corruption',
  'corruption-entreprise': 'corruption',
  'marches-publics': 'corruption',
  'conflit-interets': 'corruption',
  'entente-illicite': 'corruption',

  // Fraude Financière - Rouge
  'evasion-fiscale': 'fraude-financiere',
  'fraude-financiere': 'fraude-financiere',
  'fraude-comptable': 'fraude-financiere',
  'fraude-bancaire': 'fraude-financiere',
  'fraude-boursiere': 'fraude-financiere',
  'fraude-industrielle': 'fraude-financiere',
  'escroquerie-financiere': 'fraude-financiere',
  'blanchiment-argent': 'fraude-financiere',
  'manipulation-comptable': 'fraude-financiere',
  'delit-initie': 'fraude-financiere',

  // Manipulation de Marché - Orange
  'manipulation-financiere': 'manipulation-marche',
  'manipulation-boursiere': 'manipulation-marche',
  'manipulation-information': 'manipulation-marche',
  'bulle-speculative': 'manipulation-marche',
  'fusion-acquisition': 'manipulation-marche',

  // Crypto & Technologies - Violet
  'cryptomonnaie': 'tech',
  'manipulation-cryptomonnaie': 'tech',
  'effondrement-cryptomonnaie': 'tech',
  'fraude-cryptomonnaie': 'tech',
  'faillite-cryptomonnaie': 'tech',
  'regulation-cryptomonnaie': 'tech',
  'bulle-cryptomonnaie': 'tech',
  'regulation-ia': 'tech',
  'regulation-plateforme': 'tech',
  'moderation-contenu': 'tech',
  'violation-donnees': 'tech',

  // Crises & Faillites - Rouge foncé
  'crise-bancaire': 'crise',
  'crise-financiere': 'crise',
  'crise-logistique': 'crise',
  'crise-immobiliere': 'crise',
  'faillite-financiere': 'crise',
  'effondrement-financier': 'crise',
  'gestion-crise': 'crise',

  // Gestion Frauduleuse - Vert
  'gestion-bancaire': 'gestion-frauduleuse',
  'gestion-publique': 'gestion-frauduleuse',
  'gestion-entreprise': 'gestion-frauduleuse',
  'gestion-assurance': 'gestion-frauduleuse',
  'gouvernance-entreprise': 'gestion-frauduleuse',
  'detournement-fonds': 'gestion-frauduleuse',
  'privatisation': 'gestion-frauduleuse',

  // Financement Illégal - Bleu
  'financement-electoral': 'financement-illegal',
  'financement-politique': 'financement-illegal',
  'souverainete-monetaire': 'financement-illegal',

  // Trafics & Crimes - Rouge sombre
  'trafic-armes': 'crime',
  'trafic-sexuel': 'crime',
  'vente-armement': 'crime',
  'espionnage-industriel': 'crime',
  'harcelement-sexuel': 'crime',
  'harcelement-moral': 'crime',
  'fraude-environnementale': 'crime',
  'violation-sanctions': 'crime'
};

// Couleurs pour chaque catégorie principale
export const categoryColors = {
  'corruption': {
    light: {
      gradient: 'bg-gradient-to-br from-indigo-400/90 via-indigo-500/80 to-indigo-600/70',
      border: 'border-indigo-500',
      darkBorder: 'border-t-indigo-700',
      ring: 'ring-indigo-200',
      hoverBorder: 'border-indigo-400 dark:border-indigo-500'
    }
  },
  'fraude-financiere': {
    light: {
      gradient: 'bg-gradient-to-br from-red-400/90 via-red-500/80 to-red-600/70',
      border: 'border-red-500',
      darkBorder: 'border-t-red-700',
      ring: 'ring-red-200',
      hoverBorder: 'border-red-400 dark:border-red-500'
    }
  },
  'manipulation-marche': {
    light: {
      gradient: 'bg-gradient-to-br from-orange-400/90 via-orange-500/80 to-orange-600/70',
      border: 'border-orange-500',
      darkBorder: 'border-t-orange-700',
      ring: 'ring-orange-200',
      hoverBorder: 'border-orange-400 dark:border-orange-500'
    }
  },
  'tech': {
    light: {
      gradient: 'bg-gradient-to-br from-purple-400/90 via-purple-500/80 to-purple-600/70',
      border: 'border-purple-500',
      darkBorder: 'border-t-purple-700',
      ring: 'ring-purple-200',
      hoverBorder: 'border-purple-400 dark:border-purple-500'
    }
  },
  'crise': {
    light: {
      gradient: 'bg-gradient-to-br from-rose-400/90 via-rose-500/80 to-rose-600/70',
      border: 'border-rose-500',
      darkBorder: 'border-t-rose-700',
      ring: 'ring-rose-200',
      hoverBorder: 'border-rose-400 dark:border-rose-500'
    }
  },
  'gestion-frauduleuse': {
    light: {
      gradient: 'bg-gradient-to-br from-emerald-400/90 via-emerald-500/80 to-emerald-600/70',
      border: 'border-emerald-500',
      darkBorder: 'border-t-emerald-700',
      ring: 'ring-emerald-200',
      hoverBorder: 'border-emerald-400 dark:border-emerald-500'
    }
  },
  'financement-illegal': {
    light: {
      gradient: 'bg-gradient-to-br from-blue-400/90 via-blue-500/80 to-blue-600/70',
      border: 'border-blue-500',
      darkBorder: 'border-t-blue-700',
      ring: 'ring-blue-200',
      hoverBorder: 'border-blue-400 dark:border-blue-500'
    }
  },
  'crime': {
    light: {
      gradient: 'bg-gradient-to-br from-red-900/90 via-red-800/80 to-red-700/70',
      border: 'border-red-800',
      darkBorder: 'border-t-red-900',
      ring: 'ring-red-200',
      hoverBorder: 'border-red-700 dark:border-red-800'
    }
  }
};

// Type pour les catégories principales
type MainCategory = 'corruption' | 'fraude-financiere' | 'manipulation-marche' | 'tech' | 'crise' | 'gestion-frauduleuse' | 'financement-illegal' | 'crime';

// Fonction utilitaire pour obtenir la catégorie principale d'un type détaillé
export const getMainCategory = (detailedType: string): MainCategory => {
  return (scandalTypeCategories[detailedType] || 'corruption') as MainCategory;
};

// Fonction utilitaire pour obtenir les couleurs d'une catégorie
export const getCategoryColors = (detailedType: string) => {
  const mainCategory = getMainCategory(detailedType);
  return categoryColors[mainCategory].light;
};

// Fonction pour obtenir le libellé d'affichage d'une catégorie principale
export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'corruption': 'Corruption et Abus de Pouvoir',
    'fraude-financiere': 'Fraude Financière',
    'manipulation-marche': 'Manipulation de Marché',
    'tech': 'Crypto & Technologies',
    'crise': 'Crises & Faillites',
    'gestion-frauduleuse': 'Gestion Frauduleuse',
    'financement-illegal': 'Financement Illégal',
    'crime': 'Trafics & Crimes'
  };
  return labels[category] || category;
};