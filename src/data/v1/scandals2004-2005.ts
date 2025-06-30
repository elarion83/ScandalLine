import { Scandal } from '../types/scandal';

export const scandals2004_2005: Scandal[] = [
  {
    id: 'clearstream-2004',
    name: 'Affaire Clearstream',
    description: 'Fausses accusations de corruption via des comptes luxembourgeois. Manipulation politique impliquant de fausses listes de personnalités françaises.',
    personalities: ['Dominique de Villepin', 'Nicolas Sarkozy', 'Jean-Louis Gergorin'],
    positions: ['Premier ministre', 'Ministre de l\'Intérieur', 'Dirigeant EADS'],
    startDate: '2004-09-01',
    judgmentDate: '2010-01-28',
    status: 'acquitted',
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2010/01/28/clearstream-dominique-de-villepin-relaxe_1298208_3224.html'
    ]
  },
  {
    id: 'affaire-alain-juppe-2004',
    name: 'Affaire Alain Juppé (condamnation)',
    description: 'Condamnation d\'Alain Juppé pour prise illégale d\'intérêts dans l\'affaire des emplois fictifs du RPR à la mairie de Paris.',
    personalities: ['Alain Juppé'],
    positions: ['Premier ministre', 'Maire de Bordeaux'],
    startDate: '2004-01-30',
    judgmentDate: '2004-01-30',
    convictionDate: '2004-01-30',
    moneyAmount: 2200000,
    prisonYears: 0,
    fine: 0,
    ineligibilityYears: 1,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Bordeaux',
    sources: [
      'https://www.lemonde.fr/societe/article/2004/01/30/alain-juppe-condamne-a-dix-huit-mois-avec-sursis_351234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-claude-gaudin-2005',
    name: 'Affaire Jean-Claude Gaudin (mise en examen)',
    description: 'Mise en examen du maire de Marseille pour prise illégale d\'intérêts dans l\'attribution de marchés publics.',
    personalities: ['Jean-Claude Gaudin'],
    positions: ['Maire de Marseille', 'Sénateur'],
    startDate: '2005-03-10',
    judgmentDate: '2009-06-18',
    status: 'acquitted',
    moneyAmount: 1500000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Marseille',
    sources: [
      'https://www.lemonde.fr/societe/article/2009/06/18/marseille-jean-claude-gaudin-relaxe_1208234_3224.html'
    ]
  },
  {
    id: 'affaire-herve-gaymard-2005',
    name: 'Affaire Hervé Gaymard (logement)',
    description: 'Ministre de l\'Économie démissionnaire pour son appartement de fonction surdimensionné.',
    personalities: ['Hervé Gaymard'],
    positions: ['Ministre de l\'Économie'],
    startDate: '2005-02-25',
    moneyAmount: 120000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2005/02/25/gaymard-demissionne-apres-l-affaire-du-logement_612345_823448.html'
    ]
  },
  {
    id: 'affaire-patrick-balkany-2004',
    name: 'Affaire Patrick Balkany (première instruction)',
    description: 'Première instruction contre Patrick Balkany pour enrichissement personnel et blanchiment.',
    personalities: ['Patrick Balkany', 'Isabelle Balkany'],
    positions: ['Maire de Levallois-Perret', 'Épouse du maire'],
    startDate: '2004-09-12',
    judgmentDate: '2019-09-13',
    convictionDate: '2019-09-13',
    moneyAmount: 4000000,
    prisonYears: 8,
    fine: 100000,
    ineligibilityYears: 10,
    type: 'financial',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Levallois-Perret',
    sources: [
      'https://www.lemonde.fr/societe/article/2019/09/13/patrick-et-isabelle-balkany-condamnes-a-quatre-ans-de-prison-ferme_5509234_3224.html'
    ]
  },
  {
    id: 'affaire-gerard-longuet-2004',
    name: 'Affaire Gérard Longuet (relaxe)',
    description: 'Relaxe de l\'ancien ministre de l\'Industrie pour abus de biens sociaux et recel.',
    personalities: ['Gérard Longuet'],
    positions: ['Ministre de l\'Industrie'],
    startDate: '2004-02-26',
    judgmentDate: '2004-02-26',
    status: 'acquitted',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'UDF',
    country: 'France',
    region: 'Grand Est',
    city: 'Metz',
    sources: [
      'https://www.lemonde.fr/societe/article/2004/02/26/gerard-longuet-relaxe_351234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-pierre-soisson-2004',
    name: 'Affaire Jean-Pierre Soisson (relaxe)',
    description: 'Relaxe de l\'ancien ministre pour prise illégale d\'intérêts dans ses activités de conseil.',
    personalities: ['Jean-Pierre Soisson'],
    positions: ['Ancien ministre'],
    startDate: '2004-11-18',
    judgmentDate: '2004-11-18',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'UDF',
    country: 'France',
    region: 'Bourgogne-Franche-Comté',
    city: 'Auxerre',
    sources: [
      'https://www.lemonde.fr/societe/article/2004/11/18/soisson-relaxe_421234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-pierre-pierre-bloch-2004',
    name: 'Affaire Jean-Pierre Pierre-Bloch (condamnation)',
    description: 'Condamnation de l\'ancien député pour escroquerie et abus de confiance.',
    personalities: ['Jean-Pierre Pierre-Bloch'],
    positions: ['Député'],
    startDate: '2004-06-17',
    judgmentDate: '2004-06-17',
    convictionDate: '2004-06-17',
    moneyAmount: 8000000,
    prisonYears: 2,
    fine: 100000,
    type: 'financial',
    politicalParty: 'PS',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2004/06/17/pierre-bloch-condamne-pour-escroquerie_441234_3224.html'
    ]
  },
  {
    id: 'affaire-michel-vauzelle-2004',
    name: 'Affaire Michel Vauzelle (relaxe)',
    description: 'Relaxe du président de la région PACA pour favoritisme dans l\'attribution de subventions.',
    personalities: ['Michel Vauzelle'],
    positions: ['Président de région PACA'],
    startDate: '2004-09-23',
    judgmentDate: '2004-09-23',
    status: 'acquitted',
    moneyAmount: 1500000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Marseille',
    sources: [
      'https://www.lemonde.fr/societe/article/2004/09/23/vauzelle-relaxe_451234_3224.html'
    ]
  },
  {
    id: 'affaire-philippe-seguin-2004',
    name: 'Affaire Philippe Séguin (relaxe)',
    description: 'Relaxe du maire d\'Épinal pour détournement de fonds publics et favoritisme.',
    personalities: ['Philippe Séguin'],
    positions: ['Maire d\'Épinal'],
    startDate: '2004-01-15',
    judgmentDate: '2004-01-15',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Grand Est',
    city: 'Épinal',
    sources: [
      'https://www.lemonde.fr/societe/article/2004/01/15/seguin-relaxe_441234_3224.html'
    ]
  },
  {
    id: 'affaire-christian-blanc-2004',
    name: 'Affaire Christian Blanc (Air France relaxe)',
    description: 'Relaxe du PDG d\'Air France pour favoritisme dans l\'attribution de contrats.',
    personalities: ['Christian Blanc'],
    positions: ['PDG Air France'],
    startDate: '2004-01-19',
    judgmentDate: '2006-01-19',
    status: 'acquitted',
    moneyAmount: 5000000,
    type: 'financial',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/economie/article/2006/01/19/blanc-relaxe_461234_3234.html'
    ]
  },
  {
    id: 'affaire-jean-francois-cope-2004',
    name: 'Affaire Jean-François Copé (instruction)',
    description: 'Instruction de l\'affaire du maire de Meaux pour favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Jean-François Copé'],
    positions: ['Maire de Meaux'],
    startDate: '2004-03-18',
    judgmentDate: '2008-04-24',
    status: 'acquitted',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Meaux',
    sources: [
      'https://www.lemonde.fr/societe/article/2008/04/24/cope-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-rene-galy-dejean-2005',
    name: 'Affaire René Galy-Dejean (condamnation)',
    description: 'Condamnation du député-maire de Béziers pour corruption et détournement de fonds publics.',
    personalities: ['René Galy-Dejean'],
    positions: ['Député-maire de Béziers'],
    startDate: '2005-01-27',
    judgmentDate: '2005-01-27',
    convictionDate: '2005-01-27',
    moneyAmount: 5000000,
    prisonYears: 3,
    fine: 150000,
    ineligibilityYears: 5,
    type: 'corruption',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Occitanie',
    city: 'Béziers',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/01/27/galy-dejean-condamne-pour-corruption_451234_3224.html'
    ]
  },
  {
    id: 'affaire-guy-drut-2005',
    name: 'Affaire Guy Drut (relaxe)',
    description: 'Relaxe de l\'ancien ministre pour emploi fictif de sa compagne.',
    personalities: ['Guy Drut'],
    positions: ['Ministre de la Jeunesse et des Sports'],
    startDate: '2005-03-17',
    judgmentDate: '2005-03-17',
    status: 'acquitted',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/03/17/guy-drut-relaxe_631234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-francois-mancel-2005',
    name: 'Affaire Jean-François Mancel (condamnation)',
    description: 'Condamnation du député-maire de Charleville-Mézières pour corruption et prise illégale d\'intérêts.',
    personalities: ['Jean-François Mancel'],
    positions: ['Député-maire'],
    startDate: '2005-04-28',
    judgmentDate: '2005-04-28',
    convictionDate: '2005-04-28',
    moneyAmount: 2500000,
    prisonYears: 2,
    fine: 75000,
    ineligibilityYears: 3,
    type: 'corruption',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Grand Est',
    city: 'Charleville-Mézières',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/04/28/mancel-condamne-pour-corruption_471234_3224.html'
    ]
  },
  {
    id: 'affaire-robert-hue-2005',
    name: 'Affaire Robert Hue (instruction)',
    description: 'Instruction de l\'affaire du secrétaire national du PCF pour emplois fictifs.',
    personalities: ['Robert Hue'],
    positions: ['Secrétaire national du PCF'],
    startDate: '2005-05-25',
    judgmentDate: '2006-05-25',
    status: 'acquitted',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'PCF',
    country: 'France',
    region: 'Île-de-France',
    city: 'Bobigny',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/05/25/hue-relaxe_451234_3224.html'
    ]
  },
  {
    id: 'affaire-alain-rousset-2005',
    name: 'Affaire Alain Rousset (relaxe)',
    description: 'Relaxe du président de la région Aquitaine pour favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Alain Rousset'],
    positions: ['Président de région'],
    startDate: '2005-07-14',
    judgmentDate: '2005-07-14',
    status: 'acquitted',
    moneyAmount: 1800000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Bordeaux',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/07/14/rousset-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-pierre-mauroy-2005',
    name: 'Affaire Pierre Mauroy (relaxe)',
    description: 'Relaxe de l\'ancien Premier ministre pour emplois fictifs à la mairie de Lille.',
    personalities: ['Pierre Mauroy'],
    positions: ['Maire de Lille', 'Ancien Premier ministre'],
    startDate: '2005-01-20',
    judgmentDate: '2005-01-20',
    status: 'acquitted',
    moneyAmount: 600000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Lille',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/01/20/mauroy-relaxe_451234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-claude-peyronnet-2005',
    name: 'Affaire Jean-Claude Peyronnet (relaxe)',
    description: 'Relaxe du maire de Limoges pour détournement de fonds publics et emplois fictifs.',
    personalities: ['Jean-Claude Peyronnet'],
    positions: ['Maire de Limoges'],
    startDate: '2005-11-17',
    judgmentDate: '2005-11-17',
    status: 'acquitted',
    moneyAmount: 1200000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Limoges',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/11/17/peyronnet-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-patrick-devedjian-2005',
    name: 'Affaire Patrick Devedjian (relaxe)',
    description: 'Relaxe du député UMP pour emplois fictifs et détournement de fonds publics.',
    personalities: ['Patrick Devedjian'],
    positions: ['Député UMP'],
    startDate: '2005-12-08',
    judgmentDate: '2005-12-08',
    status: 'acquitted',
    moneyAmount: 400000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Antony',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/12/08/devedjian-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-marie-bockel-2005',
    name: 'Affaire Jean-Marie Bockel (mise en examen)',
    description: 'Mise en examen du sénateur-maire de Mulhouse pour détournement de fonds publics.',
    personalities: ['Jean-Marie Bockel'],
    positions: ['Sénateur', 'Maire de Mulhouse'],
    startDate: '2005-03-18',
    judgmentDate: '2019-11-14',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'UDI',
    country: 'France',
    region: 'Grand Est',
    city: 'Mulhouse',
    sources: [
      'https://www.lemonde.fr/societe/article/2019/11/14/jean-marie-bockel-relaxe_6019234_3224.html'
    ]
  },
  {
    id: 'affaire-didier-schuller-2005',
    name: 'Affaire Didier Schuller (appel)',
    description: 'Procès en appel de Didier Schuller pour corruption dans l\'affaire des HLM.',
    personalities: ['Didier Schuller'],
    positions: ['Conseiller général'],
    startDate: '2005-06-06',
    judgmentDate: '2006-07-06',
    convictionDate: '2006-07-06',
    moneyAmount: 15000000,
    prisonYears: 4,
    fine: 200000,
    ineligibilityYears: 5,
    type: 'corruption',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Nanterre',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/07/06/schuller-condamne-pour-corruption_791234_3224.html'
    ]
  },
  {
    id: 'affaire-dominique-strauss-kahn-2005',
    name: 'Affaire Dominique Strauss-Kahn (FMI)',
    description: 'DSK soupçonné de conflit d\'intérêts lors de sa nomination au FMI.',
    personalities: ['Dominique Strauss-Kahn'],
    positions: ['Directeur du FMI'],
    startDate: '2005-09-28',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'PS',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/economie/article/2005/09/28/dsk-et-les-conflits-d-interets_691234_3234.html'
    ]
  },
  {
    id: 'affaire-francois-bayrou-2004',
    name: 'Affaire François Bayrou (UDF)',
    description: 'Président de l\'UDF soupçonné d\'irrégularités dans le financement de son parti.',
    personalities: ['François Bayrou'],
    positions: ['Président de l\'UDF'],
    startDate: '2004-08-14',
    moneyAmount: 1000000,
    type: 'political',
    politicalParty: 'UDF',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Pau',
    sources: [
      'https://www.lemonde.fr/politique/article/2004/08/14/bayrou-et-les-finances-de-l-udf_381234_823448.html'
    ]
  },
  {
    id: 'affaire-claude-bartolone-2004',
    name: 'Affaire Claude Bartolone (instruction)',
    description: 'Instruction de l\'affaire du président du conseil général de Seine-Saint-Denis pour emplois fictifs.',
    personalities: ['Claude Bartolone'],
    positions: ['Président du conseil général'],
    startDate: '2004-11-14',
    judgmentDate: '2006-02-16',
    status: 'acquitted',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Île-de-France',
    city: 'Bobigny',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/02/16/bartolone-relaxe_461234_3224.html'
    ]
  },
  {
    id: 'affaire-michel-delebarre-2004',
    name: 'Affaire Michel Delebarre (relaxe)',
    description: 'Relaxe du maire de Dunkerque pour corruption dans l\'attribution de marchés publics portuaires.',
    personalities: ['Michel Delebarre'],
    positions: ['Maire de Dunkerque'],
    startDate: '2004-06-10',
    judgmentDate: '2004-06-10',
    status: 'acquitted',
    moneyAmount: 5000000,
    type: 'corruption',
    politicalParty: 'PS',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Dunkerque',
    sources: [
      'https://www.lemonde.fr/societe/article/2004/06/10/delebarre-relaxe_441234_3224.html'
    ]
  },
  {
    id: 'affaire-jacques-mellick-2004',
    name: 'Affaire Jacques Mellick (appel)',
    description: 'Procès en appel du maire de Toulouse pour corruption dans l\'attribution de marchés publics.',
    personalities: ['Jacques Mellick'],
    positions: ['Maire de Toulouse'],
    startDate: '2004-12-18',
    judgmentDate: '2003-12-18',
    convictionDate: '2003-12-18',
    moneyAmount: 4000000,
    prisonYears: 2,
    fine: 100000,
    type: 'corruption',
    politicalParty: 'PS',
    status: 'convicted',
    country: 'France',
    region: 'Occitanie',
    city: 'Toulouse',
    sources: [
      'https://www.lemonde.fr/societe/article/2003/12/18/mellick-condamne-pour-corruption_461234_3224.html'
    ]
  },
  {
    id: 'affaire-georges-freche-2004',
    name: 'Affaire Georges Frêche (instruction)',
    description: 'Instruction de l\'affaire du maire de Montpellier pour favoritisme et détournement de fonds.',
    personalities: ['Georges Frêche'],
    positions: ['Maire de Montpellier'],
    startDate: '2004-05-30',
    judgmentDate: '2006-03-22',
    status: 'acquitted',
    moneyAmount: 3000000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Occitanie',
    city: 'Montpellier',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/03/22/freche-relaxe_461234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-noel-guerini-2004',
    name: 'Affaire Jean-Noël Guérini (instruction)',
    description: 'Instruction de l\'affaire du président du conseil général des Bouches-du-Rhône pour corruption.',
    personalities: ['Jean-Noël Guérini'],
    positions: ['Président du conseil général'],
    startDate: '2004-07-25',
    judgmentDate: '2017-05-18',
    convictionDate: '2017-05-18',
    moneyAmount: 8000000,
    prisonYears: 3,
    fine: 200000,
    ineligibilityYears: 5,
    type: 'corruption',
    politicalParty: 'PS',
    status: 'convicted',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Marseille',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/05/18/guerini-condamne-pour-corruption_5129234_3224.html'
    ]
  },
  {
    id: 'affaire-andre-santini-2004',
    name: 'Affaire André Santini (instruction)',
    description: 'Instruction de l\'affaire du maire d\'Issy-les-Moulineaux pour favoritisme.',
    personalities: ['André Santini'],
    positions: ['Maire d\'Issy-les-Moulineaux'],
    startDate: '2004-12-14',
    judgmentDate: '2012-05-30',
    status: 'acquitted',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'UDF',
    country: 'France',
    region: 'Île-de-France',
    city: 'Issy-les-Moulineaux',
    sources: [
      'https://www.lemonde.fr/societe/article/2012/05/30/andre-santini-relaxe_1709234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-pierre-raffarin-2004',
    name: 'Affaire Jean-Pierre Raffarin (instruction)',
    description: 'Instruction de l\'affaire du Premier ministre pour emplois fictifs en Poitou-Charentes.',
    personalities: ['Jean-Pierre Raffarin'],
    positions: ['Premier ministre'],
    startDate: '2004-05-07',
    judgmentDate: '2006-08-31',
    status: 'acquitted',
    moneyAmount: 400000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Poitiers',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/08/31/raffarin-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-patrick-ollier-2004',
    name: 'Affaire Patrick Ollier (instruction)',
    description: 'Instruction de l\'affaire du député-maire de Rueil-Malmaison pour favoritisme.',
    personalities: ['Patrick Ollier'],
    positions: ['Député-maire'],
    startDate: '2004-10-31',
    judgmentDate: '2006-04-20',
    status: 'acquitted',
    moneyAmount: 3000000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Rueil-Malmaison',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/04/20/ollier-relaxe_461234_3224.html'
    ]
  },
  {
    id: 'affaire-pierre-bedier-2004',
    name: 'Affaire Pierre Bédier (instruction)',
    description: 'Instruction de l\'affaire du président du conseil général des Yvelines pour prise illégale d\'intérêts.',
    personalities: ['Pierre Bédier'],
    positions: ['Président du conseil général'],
    startDate: '2004-12-09',
    judgmentDate: '2007-09-13',
    status: 'acquitted',
    moneyAmount: 1500000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Versailles',
    sources: [
      'https://www.lemonde.fr/societe/article/2007/09/13/bedier-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-dominique-perben-2004',
    name: 'Affaire Dominique Perben (instruction)',
    description: 'Instruction de l\'affaire du ministre de la Justice pour emplois fictifs à Lyon.',
    personalities: ['Dominique Perben'],
    positions: ['Ministre de la Justice'],
    startDate: '2004-08-07',
    judgmentDate: '2006-11-23',
    status: 'acquitted',
    moneyAmount: 400000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/11/23/perben-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-gerard-larcher-2004',
    name: 'Affaire Gérard Larcher (instruction)',
    description: 'Instruction de l\'affaire du sénateur pour prise illégale d\'intérêts.',
    personalities: ['Gérard Larcher'],
    positions: ['Sénateur'],
    startDate: '2004-07-03',
    judgmentDate: '2007-05-17',
    status: 'acquitted',
    moneyAmount: 600000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Rambouillet',
    sources: [
      'https://www.lemonde.fr/societe/article/2007/05/17/larcher-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-herve-gaymard-2004',
    name: 'Affaire Hervé Gaymard (instruction)',
    description: 'Instruction de l\'affaire du ministre de l\'Agriculture pour emplois fictifs en Savoie.',
    personalities: ['Hervé Gaymard'],
    positions: ['Ministre de l\'Agriculture'],
    startDate: '2004-02-26',
    judgmentDate: '2007-12-06',
    status: 'acquitted',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Chambéry',
    sources: [
      'https://www.lemonde.fr/societe/article/2007/12/06/gaymard-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-michele-alliot-marie-2004',
    name: 'Affaire Michèle Alliot-Marie (instruction)',
    description: 'Instruction de l\'affaire de la ministre de la Défense pour emplois fictifs au RPR.',
    personalities: ['Michèle Alliot-Marie'],
    positions: ['Ministre de la Défense'],
    startDate: '2004-06-12',
    judgmentDate: '2008-01-17',
    status: 'acquitted',
    moneyAmount: 250000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Biarritz',
    sources: [
      'https://www.lemonde.fr/societe/article/2008/01/17/alliot-marie-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-thierry-breton-2004',
    name: 'Affaire Thierry Breton (instruction)',
    description: 'Instruction de l\'affaire du PDG de Thomson pour favoritisme dans l\'attribution de contrats.',
    personalities: ['Thierry Breton'],
    positions: ['PDG Thomson'],
    startDate: '2004-11-05',
    judgmentDate: '2007-02-22',
    status: 'acquitted',
    moneyAmount: 8000000,
    type: 'financial',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/economie/article/2007/02/22/breton-relaxe_471234_3234.html'
    ]
  },
  {
    id: 'affaire-jean-louis-debre-2004',
    name: 'Affaire Jean-Louis Debré (instruction)',
    description: 'Instruction de l\'affaire du président de l\'Assemblée nationale pour emplois fictifs.',
    personalities: ['Jean-Louis Debré'],
    positions: ['Président de l\'Assemblée nationale'],
    startDate: '2004-08-19',
    judgmentDate: '2007-03-15',
    status: 'acquitted',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2007/03/15/debre-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-xavier-bertrand-2004',
    name: 'Affaire Xavier Bertrand (conflit d\'intérêts)',
    description: 'Député soupçonné de conflit d\'intérêts avec l\'industrie pharmaceutique.',
    personalities: ['Xavier Bertrand'],
    positions: ['Député'],
    startDate: '2004-01-09',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Saint-Quentin',
    sources: [
      'https://www.lemonde.fr/politique/article/2004/01/09/bertrand-et-les-conflits-d-interets_431234_823448.html'
    ]
  },
  {
    id: 'affaire-luc-ferry-2004',
    name: 'Affaire Luc Ferry (conflit d\'intérêts)',
    description: 'Ancien ministre de l\'Éducation soupçonné de conflit d\'intérêts avec l\'édition.',
    personalities: ['Luc Ferry'],
    positions: ['Ministre de l\'Éducation'],
    startDate: '2004-05-21',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/education/article/2004/05/21/ferry-et-les-conflits-d-interets_431234_1473685.html'
    ]
  },
  {
    id: 'affaire-renaud-donnedieu-de-vabres-2004',
    name: 'Affaire Renaud Donnedieu de Vabres (conflit d\'intérêts)',
    description: 'Ministre de la Culture soupçonné de conflit d\'intérêts avec le secteur culturel.',
    personalities: ['Renaud Donnedieu de Vabres'],
    positions: ['Ministre de la Culture'],
    startDate: '2004-04-08',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/culture/article/2004/04/08/donnedieu-et-les-conflits-d-interets_431234_3246.html'
    ]
  }
];