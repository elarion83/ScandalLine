import { Scandal, FilterOptions } from '../types/scandal';

// Types pour le typage strict
export type MainCategory = 'corruption' | 'fraude-financiere' | 'manipulation-marche' | 'tech' | 'crise' | 'gestion-frauduleuse' | 'financement-illegal' | 'crime' | 'ethique';
export type DetailedType = string;

// Mapping des types détaillés vers les catégories principales
export const scandalTypeCategories: Record<string, string> = {
  // Corruption et Abus de Pouvoir - Indigo
  'corruption': 'corruption',
  'emploi-fictif': 'corruption',
  'emplois-fictifs': 'corruption',
  'abus-fonction': 'corruption',
  'corruption-internationale': 'corruption',
  'corruption-passive': 'corruption',
  'corruption-electorale': 'corruption',
  'corruption-marches': 'corruption',
  'corruption-sportive': 'corruption',
  'corruption-entreprise': 'corruption',
  'corruption-lobbying': 'corruption',
  'marches-publics': 'corruption',
  'conflit-interets': 'corruption',
  'conflit-intérêts': 'corruption',
  'declaration-patrimoine': 'corruption',
  'déclaration-patrimoine': 'corruption',
  'entente-illicite': 'corruption',
  'pantouflage': 'corruption',
  'nepotisme': 'corruption',
  'enrichissement-suspect': 'corruption',
  'favoritisme': 'corruption',
  'lobbying-illegal': 'corruption',

  // Fraude Financière - Fuchsia
  'evasion-fiscale': 'fraude-financiere',
  'évasion-fiscale': 'fraude-financiere',
  'fraude-fiscale': 'fraude-financiere',
  'fraude-financiere': 'fraude-financiere',
  'fraude-financière': 'fraude-financiere',
  'fraude-comptable': 'fraude-financiere',
  'fraude-bancaire': 'fraude-financiere',
  'fraude-boursiere': 'fraude-financiere',
  'fraude-boursière': 'fraude-financiere',
  'fraude-industrielle': 'fraude-financiere',
  'escroquerie-financiere': 'fraude-financiere',
  'escroquerie-financière': 'fraude-financiere',
  'blanchiment-argent': 'fraude-financiere',
  'manipulation-comptable': 'fraude-financiere',
  'delit-initie': 'fraude-financiere',
  'délit-initié': 'fraude-financiere',
  'detournement-fonds': 'fraude-financiere',
  'détournement-fonds': 'fraude-financiere',

  // Manipulation de Marché - Ambre
  'manipulation-financiere': 'manipulation-marche',
  'manipulation-boursiere': 'manipulation-marche',
  'manipulation-information': 'manipulation-marche',
  'bulle-speculative': 'manipulation-marche',
  'fusion-acquisition': 'manipulation-marche',

  // Crypto & Technologies - Cyan
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
  'dysfonctionnement-technique': 'tech',

  // Crises & Faillites - Rose
  'crise-bancaire': 'crise',
  'crise-financiere': 'crise',
  'crise-logistique': 'crise',
  'crise-immobiliere': 'crise',
  'faillite-financiere': 'crise',
  'effondrement-financier': 'crise',
  'gestion-crise': 'crise',
  'financial': 'fraude-financiere',

  // Gestion Frauduleuse - Vert
  'gestion-bancaire': 'gestion-frauduleuse',
  'gestion-publique': 'gestion-frauduleuse',
  'gestion-entreprise': 'gestion-frauduleuse',
  'gestion-assurance': 'gestion-frauduleuse',
  'gouvernance-entreprise': 'gestion-frauduleuse',
  'privatisation': 'gestion-frauduleuse',
  'fraude-academique': 'gestion-frauduleuse',

  // Financement Illégal - Bleu
  'financement-illegal': 'financement-illegal',
  'financement-illégal': 'financement-illegal',
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
  'violation-sanctions': 'crime',
  'entrave-justice': 'crime',
  'agression-sexuelle': 'crime',
  'violences-conjugales': 'crime',

  // Éthique et Morale - Orange
  'ethique': 'ethique',
  'deontologie': 'ethique',
  'conflit-ethique': 'ethique',
  'discrimination': 'ethique',
  'harcelement': 'ethique',
  'abus-pouvoir': 'ethique',
  'media': 'ethique',
  'political': 'ethique',
  'procedure-judiciaire': 'ethique',
  'chantage-politique': 'ethique',
  'hypocrisie-politique': 'ethique',
  'mensonge-etat': 'ethique',
  'propos-racistes': 'ethique',
  'scandale-moral': 'ethique'
};

// Couleurs pour chaque catégorie principale
export const categoryColors = {
  'corruption': {
    light: {
      gradient: 'bg-gradient-to-br from-indigo-400 via-indigo-500/90 to-indigo-600/80',
      border: 'border-indigo-500',
      darkBorder: 'border-t-indigo-700',
      ring: 'ring-indigo-200',
      hoverBorder: 'border-indigo-400 dark:border-indigo-500'
    }
  },
  'fraude-financiere': {
    light: {
      gradient: 'bg-gradient-to-br from-fuchsia-400 via-fuchsia-500/90 to-fuchsia-600/80',
      border: 'border-fuchsia-500',
      darkBorder: 'border-t-fuchsia-700',
      ring: 'ring-fuchsia-200',
      hoverBorder: 'border-fuchsia-400 dark:border-fuchsia-500'
    }
  },
  'manipulation-marche': {
    light: {
      gradient: 'bg-gradient-to-br from-amber-400 via-amber-500/90 to-amber-600/80',
      border: 'border-amber-500',
      darkBorder: 'border-t-amber-700',
      ring: 'ring-amber-200',
      hoverBorder: 'border-amber-400 dark:border-amber-500'
    }
  },
  'tech': {
    light: {
      gradient: 'bg-gradient-to-br from-cyan-400 via-cyan-500/90 to-cyan-600/80',
      border: 'border-cyan-500',
      darkBorder: 'border-t-cyan-700',
      ring: 'ring-cyan-200',
      hoverBorder: 'border-cyan-400 dark:border-cyan-500'
    }
  },
  'crise': {
    light: {
      gradient: 'bg-gradient-to-br from-rose-400 via-rose-500/90 to-rose-600/80',
      border: 'border-rose-500',
      darkBorder: 'border-t-rose-700',
      ring: 'ring-rose-200',
      hoverBorder: 'border-rose-400 dark:border-rose-500'
    }
  },
  'gestion-frauduleuse': {
    light: {
      gradient: 'bg-gradient-to-br from-emerald-400 via-emerald-500/90 to-emerald-600/80',
      border: 'border-emerald-500',
      darkBorder: 'border-t-emerald-700',
      ring: 'ring-emerald-200',
      hoverBorder: 'border-emerald-400 dark:border-emerald-500'
    }
  },
  'financement-illegal': {
    light: {
      gradient: 'bg-gradient-to-br from-blue-400 via-blue-500/90 to-blue-600/80',
      border: 'border-blue-500',
      darkBorder: 'border-t-blue-700',
      ring: 'ring-blue-200',
      hoverBorder: 'border-blue-400 dark:border-blue-500'
    }
  },
  'crime': {
    light: {
      gradient: 'bg-gradient-to-br from-red-500 via-red-600/90 to-red-700/80',
      border: 'border-red-600',
      darkBorder: 'border-t-red-800',
      ring: 'ring-red-200',
      hoverBorder: 'border-red-500 dark:border-red-600'
    }
  },
  'ethique': {
    light: {
      gradient: 'bg-gradient-to-br from-orange-400 via-orange-500/90 to-orange-600/80',
      border: 'border-orange-500',
      darkBorder: 'border-t-orange-700',
      ring: 'ring-orange-200',
      hoverBorder: 'border-orange-400 dark:border-orange-500'
    }
  }
};

// Fonction utilitaire pour obtenir la catégorie principale d'un type détaillé
export const getMainCategory = (detailedType: string): MainCategory => {
  // Si le type est déjà une catégorie principale, la retourner directement
  if (detailedType in categoryColors) {
    return detailedType as MainCategory;
  }

  // Normaliser le type pour la comparaison
  const normalizedType = detailedType?.toLowerCase().trim() || 'ethique';

  // Chercher dans le mapping des types détaillés
  const mainCategory = scandalTypeCategories[normalizedType];
  if (mainCategory) {
    return mainCategory as MainCategory;
  }

  // Si aucune correspondance n'est trouvée, retourner 'ethique' comme catégorie par défaut
  console.warn(`Type détaillé non catégorisé (${detailedType}) -> normalisé en : ${normalizedType}`);
  return 'ethique';
};

// Fonction pour obtenir le label d'une catégorie
export const getCategoryLabel = (detailedType: DetailedType): string => {
  // Labels pour les catégories principales
  const categoryLabels: Record<MainCategory, string> = {
    'corruption': 'Corruption et Abus de Pouvoir',
    'fraude-financiere': 'Fraude Financière',
    'manipulation-marche': 'Manipulation de Marché',
    'tech': 'Cybersécurité et Tech',
    'crise': 'Crise et Scandale',
    'gestion-frauduleuse': 'Gestion Frauduleuse',
    'financement-illegal': 'Financement Illégal',
    'crime': 'Crime et Violence',
    'ethique': 'Éthique et Déontologie'
  };

  // Normaliser le type
  const normalizedType = (detailedType?.toLowerCase().trim() || 'ethique');
  
  // Obtenir la catégorie principale
  const mainCategory = getMainCategory(normalizedType);
  
  // Si c'est un type détaillé qui n'est pas une catégorie principale,
  // on le formate pour l'affichage
  if (!(normalizedType in categoryColors)) {
    const formattedType = normalizedType
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formattedType;
  }

  // Sinon, on retourne simplement le label de la catégorie principale
  return categoryLabels[mainCategory];
};

// Fonction utilitaire pour obtenir les couleurs d'une catégorie
export const getCategoryColors = (detailedType: string) => {
  const mainCategory = getMainCategory(detailedType);
  // Si le type n'est pas trouvé, retourner des couleurs par défaut (gris)
  if (!mainCategory) {
    return {
      gradient: 'bg-gradient-to-br from-indigo-400 via-indigo-500/90 to-indigo-600/80',
      border: 'border-indigo-500',
      darkBorder: 'border-t-indigo-700',
      ring: 'ring-indigo-200',
      hoverBorder: 'border-indigo-400 dark:border-indigo-500'
    };
  }
  return categoryColors[mainCategory].light;
};

export const filterScandals = (scandals: Scandal[], filters: FilterOptions): Scandal[] => {
  return scandals.filter(scandal => {
    // Type filter
    if (filters.types.length > 0) {
      const mainCategory = getMainCategory(scandal.type);
      if (!mainCategory || !filters.types.includes(mainCategory)) {
        return false;
      }
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
    if (filters.parties.length > 0) {
      if (!scandal.politicalParty || !filters.parties.includes(scandal.politicalParty)) {
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
  const date = new Date(dateString);
  const month = date.toLocaleString('fr-FR', { month: 'short' });
  
  // Si on demande un format spécifique, on le respecte
  if (format) {
    if (format === 'MMM yyyy') {
      return `${month} ${date.getFullYear()}`;
    }
    return date.toLocaleString('fr-FR', { 
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  
  // Par défaut, on ne retourne que le mois
  return month.charAt(0).toUpperCase() + month.slice(1);
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