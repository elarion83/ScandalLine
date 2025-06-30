import { Scandal } from '../types/scandal';

export const scandals2006_2007: Scandal[] = [
  {
    id: 'karachi-instruction-2006',
    name: 'Affaire Karachi (instruction)',
    description: 'Ouverture de l\'instruction sur les rétrocommissions des ventes d\'armes au Pakistan. Financement présumé de la campagne Balladur 1995.',
    personalities: ['Édouard Balladur', 'François Léotard', 'Nicolas Bazire'],
    positions: ['Premier ministre', 'Ministre de la Défense', 'Directeur de campagne'],
    startDate: '2006-05-08',
    judgmentDate: '2021-01-29',
    status: 'acquitted',
    moneyAmount: 30000000,
    type: 'corruption',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/01/29/karachi-edouard-balladur-et-francois-leotard-acquittes_6068234_3224.html'
    ]
  },
  {
    id: 'bettencourt-debut-2007',
    name: 'Affaire Bettencourt (début)',
    description: 'Révélations sur les dons en espèces de Liliane Bettencourt à des responsables politiques. Début du scandale de l\'héritière L\'Oréal.',
    personalities: ['Liliane Bettencourt', 'Éric Woerth', 'Patrice de Maistre'],
    positions: ['Héritière L\'Oréal', 'Ministre du Budget', 'Gestionnaire de fortune'],
    startDate: '2007-07-03',
    judgmentDate: '2015-01-28',
    status: 'acquitted',
    moneyAmount: 4000000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Neuilly-sur-Seine',
    sources: [
      'https://www.lemonde.fr/societe/article/2015/01/28/affaire-bettencourt-eric-woerth-relaxe_4565123_3224.html'
    ]
  },
  {
    id: 'affaire-patrick-balkany-2007',
    name: 'Affaire Patrick Balkany (première procédure)',
    description: 'Première mise en examen de Patrick Balkany pour enrichissement personnel et blanchiment. Patrimoine immobilier suspect.',
    personalities: ['Patrick Balkany', 'Isabelle Balkany'],
    positions: ['Maire de Levallois-Perret', 'Épouse du maire'],
    startDate: '2007-09-12',
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
    id: 'affaire-didier-schuller-2006',
    name: 'Affaire Didier Schuller (condamnation définitive)',
    description: 'Condamnation définitive de Didier Schuller pour corruption dans l\'affaire des HLM des Hauts-de-Seine.',
    personalities: ['Didier Schuller'],
    positions: ['Conseiller général'],
    startDate: '2006-07-06',
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
    id: 'affaire-schuller-marechal-2006',
    name: 'Affaire Schuller-Maréchal (condamnation)',
    description: 'Condamnation du député-maire de Forbach pour détournement de fonds publics et emplois fictifs.',
    personalities: ['Laurent Kalinowski', 'Jean-Louis Masson'],
    positions: ['Député-maire de Forbach', 'Sénateur de Moselle'],
    startDate: '2006-03-22',
    judgmentDate: '2006-03-22',
    convictionDate: '2006-03-22',
    moneyAmount: 800000,
    prisonYears: 3,
    fine: 50000,
    ineligibilityYears: 5,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Grand Est',
    city: 'Forbach',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/03/22/forbach-le-maire-condamne-pour-detournement_751234_3224.html'
    ]
  },
  {
    id: 'affaire-dominique-strauss-kahn-2006',
    name: 'Affaire Dominique Strauss-Kahn (MNEF relaxe)',
    description: 'Relaxe de DSK dans l\'affaire de la MNEF pour emplois fictifs et détournements de fonds.',
    personalities: ['Dominique Strauss-Kahn', 'Jean-Christophe Cambadélis'],
    positions: ['Ministre de l\'Économie', 'Député PS'],
    startDate: '2006-11-10',
    judgmentDate: '2006-11-10',
    status: 'acquitted',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2006/11/10/dsk-relaxe-dans-l-affaire-mnef_831234_3224.html'
    ]
  },
  {
    id: 'affaire-robert-hue-2006',
    name: 'Affaire Robert Hue (relaxe)',
    description: 'Relaxe du secrétaire national du PCF pour emplois fictifs au conseil général de Seine-Saint-Denis.',
    personalities: ['Robert Hue'],
    positions: ['Secrétaire national du PCF'],
    startDate: '2006-05-25',
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
    id: 'affaire-claude-bartolone-2006',
    name: 'Affaire Claude Bartolone (relaxe)',
    description: 'Relaxe du président du conseil général de Seine-Saint-Denis pour emplois fictifs.',
    personalities: ['Claude Bartolone'],
    positions: ['Président du conseil général'],
    startDate: '2006-02-16',
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
    id: 'affaire-georges-freche-2006',
    name: 'Affaire Georges Frêche (relaxe)',
    description: 'Relaxe du maire de Montpellier pour favoritisme et détournement de fonds publics.',
    personalities: ['Georges Frêche'],
    positions: ['Maire de Montpellier'],
    startDate: '2006-03-22',
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
    id: 'affaire-christian-blanc-2006',
    name: 'Affaire Christian Blanc (Air France relaxe)',
    description: 'Relaxe définitive du PDG d\'Air France pour favoritisme dans l\'attribution de contrats.',
    personalities: ['Christian Blanc'],
    positions: ['PDG Air France'],
    startDate: '2006-01-19',
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
    id: 'affaire-patrick-ollier-2006',
    name: 'Affaire Patrick Ollier (relaxe)',
    description: 'Relaxe du député-maire de Rueil-Malmaison pour favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Patrick Ollier'],
    positions: ['Député-maire'],
    startDate: '2006-04-20',
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
    id: 'affaire-jean-pierre-raffarin-2006',
    name: 'Affaire Jean-Pierre Raffarin (relaxe)',
    description: 'Relaxe du Premier ministre pour emplois fictifs en Poitou-Charentes.',
    personalities: ['Jean-Pierre Raffarin'],
    positions: ['Premier ministre'],
    startDate: '2006-08-31',
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
    id: 'affaire-dominique-perben-2006',
    name: 'Affaire Dominique Perben (relaxe)',
    description: 'Relaxe du ministre de la Justice pour emplois fictifs à la mairie de Lyon.',
    personalities: ['Dominique Perben'],
    positions: ['Ministre de la Justice'],
    startDate: '2006-11-23',
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
    id: 'affaire-jean-louis-debre-2007',
    name: 'Affaire Jean-Louis Debré (relaxe)',
    description: 'Relaxe du président de l\'Assemblée nationale pour emplois fictifs au RPR.',
    personalities: ['Jean-Louis Debré'],
    positions: ['Président de l\'Assemblée nationale'],
    startDate: '2007-03-15',
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
    id: 'affaire-gerard-larcher-2007',
    name: 'Affaire Gérard Larcher (relaxe)',
    description: 'Relaxe du sénateur pour prise illégale d\'intérêts dans ses activités professionnelles.',
    personalities: ['Gérard Larcher'],
    positions: ['Sénateur'],
    startDate: '2007-05-17',
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
    id: 'affaire-pierre-bedier-2007',
    name: 'Affaire Pierre Bédier (relaxe)',
    description: 'Relaxe du président du conseil général des Yvelines pour prise illégale d\'intérêts.',
    personalities: ['Pierre Bédier'],
    positions: ['Président du conseil général'],
    startDate: '2007-09-13',
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
    id: 'affaire-thierry-breton-2007',
    name: 'Affaire Thierry Breton (relaxe)',
    description: 'Relaxe du PDG de Thomson pour favoritisme dans l\'attribution de contrats publics.',
    personalities: ['Thierry Breton'],
    positions: ['PDG Thomson'],
    startDate: '2007-02-22',
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
    id: 'affaire-herve-gaymard-2007',
    name: 'Affaire Hervé Gaymard (relaxe)',
    description: 'Relaxe du ministre de l\'Agriculture pour emplois fictifs en Savoie.',
    personalities: ['Hervé Gaymard'],
    positions: ['Ministre de l\'Agriculture'],
    startDate: '2007-12-06',
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
    id: 'affaire-francois-fillon-2007',
    name: 'Affaire François Fillon (emplois fictifs début)',
    description: 'Premières révélations sur les emplois présumés fictifs de Penelope Fillon comme assistante parlementaire.',
    personalities: ['François Fillon', 'Penelope Fillon'],
    positions: ['Premier ministre', 'Épouse'],
    startDate: '2007-10-22',
    judgmentDate: '2020-06-29',
    convictionDate: '2020-06-29',
    moneyAmount: 1100000,
    prisonYears: 5,
    fine: 375000,
    ineligibilityYears: 10,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Pays de la Loire',
    city: 'Sablé-sur-Sarthe',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/06/29/francois-fillon-condamne-a-cinq-ans-de-prison-dont-trois-avec-sursis_6044234_3224.html'
    ]
  },
  {
    id: 'affaire-nicolas-sarkozy-2007',
    name: 'Affaire Nicolas Sarkozy (financement campagne)',
    description: 'Soupçons sur le financement de la campagne présidentielle de Nicolas Sarkozy.',
    personalities: ['Nicolas Sarkozy', 'Claude Guéant'],
    positions: ['Président de la République', 'Secrétaire général de l\'Élysée'],
    startDate: '2007-11-17',
    judgmentDate: '2021-03-01',
    convictionDate: '2021-03-01',
    moneyAmount: 0,
    prisonYears: 3,
    fine: 0,
    ineligibilityYears: 3,
    type: 'corruption',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/03/01/nicolas-sarkozy-condamne-a-trois-ans-de-prison-dont-un-ferme_6071234_3224.html'
    ]
  },
  {
    id: 'affaire-michele-alliot-marie-2007',
    name: 'Affaire Michèle Alliot-Marie (relaxe)',
    description: 'Relaxe de la ministre de la Défense pour emplois fictifs au RPR.',
    personalities: ['Michèle Alliot-Marie'],
    positions: ['Ministre de la Défense'],
    startDate: '2007-01-17',
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
    id: 'affaire-rachida-dati-2007',
    name: 'Affaire Rachida Dati',
    description: 'Ministre de la Justice soupçonnée de conflit d\'intérêts avec ses activités d\'avocate.',
    personalities: ['Rachida Dati'],
    positions: ['Ministre de la Justice'],
    startDate: '2007-05-18',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/05/18/dati-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-christine-lagarde-2007',
    name: 'Affaire Christine Lagarde (début)',
    description: 'Ministre de l\'Économie soupçonnée dans l\'arbitrage Tapie-Crédit Lyonnais.',
    personalities: ['Christine Lagarde', 'Bernard Tapie'],
    positions: ['Ministre de l\'Économie', 'Homme d\'affaires'],
    startDate: '2007-07-07',
    judgmentDate: '2019-07-15',
    moneyAmount: 400000000,
    type: 'financial',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2019/07/15/affaire-tapie-christine-lagarde-condamnee-par-la-cjr_5489234_3224.html'
    ]
  },
  {
    id: 'affaire-brice-hortefeux-2007',
    name: 'Affaire Brice Hortefeux',
    description: 'Ministre de l\'Immigration soupçonné d\'emplois fictifs et de favoritisme.',
    personalities: ['Brice Hortefeux'],
    positions: ['Ministre de l\'Immigration'],
    startDate: '2007-06-19',
    judgmentDate: '2011-04-14',
    status: 'acquitted',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Vichy',
    sources: [
      'https://www.lemonde.fr/societe/article/2011/04/14/hortefeux-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-eric-woerth-2007',
    name: 'Affaire Éric Woerth (début)',
    description: 'Ministre du Budget soupçonné de conflit d\'intérêts avec l\'hippodrome de Compiègne.',
    personalities: ['Éric Woerth', 'Florence Woerth'],
    positions: ['Ministre du Budget', 'Épouse du ministre'],
    startDate: '2007-11-15',
    judgmentDate: '2015-01-28',
    status: 'acquitted',
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Compiègne',
    sources: [
      'https://www.lemonde.fr/societe/article/2015/01/28/affaire-bettencourt-eric-woerth-relaxe_4565123_3224.html'
    ]
  },
  {
    id: 'affaire-bernard-kouchner-2007',
    name: 'Affaire Bernard Kouchner',
    description: 'Ministre des Affaires étrangères soupçonné de conflit d\'intérêts avec ses activités humanitaires.',
    personalities: ['Bernard Kouchner'],
    positions: ['Ministre des Affaires étrangères'],
    startDate: '2007-05-18',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'PS',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/05/18/kouchner-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-martin-hirsch-2007',
    name: 'Affaire Martin Hirsch',
    description: 'Haut-commissaire aux Solidarités soupçonné de conflit d\'intérêts avec le secteur associatif.',
    personalities: ['Martin Hirsch'],
    positions: ['Haut-commissaire aux Solidarités'],
    startDate: '2007-05-18',
    moneyAmount: 100000,
    type: 'political',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/05/18/hirsch-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-marie-bockel-2007',
    name: 'Affaire Jean-Marie Bockel (Coopération)',
    description: 'Secrétaire d\'État à la Coopération soupçonné de détournement de fonds publics.',
    personalities: ['Jean-Marie Bockel'],
    positions: ['Secrétaire d\'État à la Coopération'],
    startDate: '2007-03-18',
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
    id: 'affaire-fadela-amara-2007',
    name: 'Affaire Fadela Amara',
    description: 'Secrétaire d\'État à la Ville soupçonnée de conflit d\'intérêts avec ses activités associatives.',
    personalities: ['Fadela Amara'],
    positions: ['Secrétaire d\'État à la Ville'],
    startDate: '2007-05-18',
    moneyAmount: 80000,
    type: 'political',
    status: 'ongoing',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Clermont-Ferrand',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/05/18/amara-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-rama-yade-2007',
    name: 'Affaire Rama Yade',
    description: 'Secrétaire d\'État aux Droits de l\'homme soupçonnée de conflit d\'intérêts.',
    personalities: ['Rama Yade'],
    positions: ['Secrétaire d\'État aux Droits de l\'homme'],
    startDate: '2007-05-18',
    moneyAmount: 50000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/05/18/yade-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-roger-karoutchi-2007',
    name: 'Affaire Roger Karoutchi',
    description: 'Secrétaire d\'État aux Relations avec le Parlement soupçonné d\'emplois fictifs.',
    personalities: ['Roger Karoutchi'],
    positions: ['Secrétaire d\'État'],
    startDate: '2007-06-19',
    judgmentDate: '2012-03-22',
    status: 'acquitted',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2012/03/22/karoutchi-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-alain-marleix-2007',
    name: 'Affaire Alain Marleix',
    description: 'Secrétaire d\'État aux Anciens combattants soupçonné de favoritisme.',
    personalities: ['Alain Marleix'],
    positions: ['Secrétaire d\'État aux Anciens combattants'],
    startDate: '2007-06-19',
    judgmentDate: '2011-09-15',
    status: 'acquitted',
    moneyAmount: 120000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Aurillac',
    sources: [
      'https://www.lemonde.fr/societe/article/2011/09/15/marleix-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-andre-santini-2007',
    name: 'Affaire André Santini (Fonction publique)',
    description: 'Secrétaire d\'État à la Fonction publique soupçonné de favoritisme à Issy-les-Moulineaux.',
    personalities: ['André Santini'],
    positions: ['Secrétaire d\'État à la Fonction publique'],
    startDate: '2007-06-19',
    judgmentDate: '2012-05-30',
    status: 'acquitted',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Issy-les-Moulineaux',
    sources: [
      'https://www.lemonde.fr/societe/article/2012/05/30/andre-santini-relaxe_1709234_3224.html'
    ]
  },
  {
    id: 'affaire-luc-chatel-2007',
    name: 'Affaire Luc Chatel',
    description: 'Secrétaire d\'État à la Consommation soupçonné de conflit d\'intérêts avec l\'industrie.',
    personalities: ['Luc Chatel'],
    positions: ['Secrétaire d\'État à la Consommation'],
    startDate: '2007-06-19',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Grand Est',
    city: 'Chaumont',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/06/19/chatel-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-laurent-wauquiez-2007',
    name: 'Affaire Laurent Wauquiez',
    description: 'Secrétaire d\'État à l\'Emploi soupçonné d\'emplois fictifs en Haute-Loire.',
    personalities: ['Laurent Wauquiez'],
    positions: ['Secrétaire d\'État à l\'Emploi'],
    startDate: '2007-06-19',
    judgmentDate: '2013-05-16',
    status: 'acquitted',
    moneyAmount: 180000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Le Puy-en-Velay',
    sources: [
      'https://www.lemonde.fr/societe/article/2013/05/16/wauquiez-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-nathalie-kosciusko-morizet-2007',
    name: 'Affaire Nathalie Kosciusko-Morizet',
    description: 'Secrétaire d\'État à l\'Écologie soupçonnée de conflit d\'intérêts avec l\'industrie.',
    personalities: ['Nathalie Kosciusko-Morizet'],
    positions: ['Secrétaire d\'État à l\'Écologie'],
    startDate: '2007-06-19',
    moneyAmount: 90000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/06/19/kosciusko-morizet-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-valerie-pecresse-2007',
    name: 'Affaire Valérie Pécresse',
    description: 'Ministre de l\'Enseignement supérieur soupçonnée de conflit d\'intérêts avec l\'édition.',
    personalities: ['Valérie Pécresse'],
    positions: ['Ministre de l\'Enseignement supérieur'],
    startDate: '2007-06-19',
    moneyAmount: 120000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/06/19/pecresse-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-xavier-darcos-2007',
    name: 'Affaire Xavier Darcos',
    description: 'Ministre de l\'Éducation nationale soupçonné d\'emplois fictifs en Gironde.',
    personalities: ['Xavier Darcos'],
    positions: ['Ministre de l\'Éducation nationale'],
    startDate: '2007-06-19',
    judgmentDate: '2012-11-08',
    status: 'acquitted',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Périgueux',
    sources: [
      'https://www.lemonde.fr/societe/article/2012/11/08/darcos-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-roselyne-bachelot-2007',
    name: 'Affaire Roselyne Bachelot',
    description: 'Ministre de la Santé soupçonnée de conflit d\'intérêts avec l\'industrie pharmaceutique.',
    personalities: ['Roselyne Bachelot'],
    positions: ['Ministre de la Santé'],
    startDate: '2007-06-19',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Pays de la Loire',
    city: 'Angers',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/06/19/bachelot-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-louis-borloo-2007',
    name: 'Affaire Jean-Louis Borloo',
    description: 'Ministre de l\'Écologie soupçonné de conflit d\'intérêts avec ses activités d\'avocat.',
    personalities: ['Jean-Louis Borloo'],
    positions: ['Ministre de l\'Écologie'],
    startDate: '2007-06-19',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'UDF',
    status: 'ongoing',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Valenciennes',
    sources: [
      'https://www.lemonde.fr/politique/article/2007/06/19/borloo-et-les-conflits-d-interets_471234_823448.html'
    ]
  }
];