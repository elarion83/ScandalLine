import { Scandal } from '../types/scandal';

export const scandals2008_2009: Scandal[] = [
  {
    id: 'tapie-credit-lyonnais-2008',
    name: 'Affaire Tapie-Crédit Lyonnais',
    description: 'Arbitrage controversé dans le litige Tapie-Crédit Lyonnais. Décision d\'arbitrage favorable à Bernard Tapie sous Christine Lagarde.',
    personalities: ['Christine Lagarde', 'Bernard Tapie', 'Stéphane Richard'],
    positions: ['Ministre de l\'Économie', 'Homme d\'affaires', 'Directeur de cabinet'],
    startDate: '2008-07-07',
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
    id: 'affaire-eric-woerth-2008',
    name: 'Affaire Éric Woerth (Hippodrome)',
    description: 'Conflit d\'intérêts d\'Éric Woerth, ministre du Budget et président de l\'hippodrome de Compiègne. Liens avec Patrice de Maistre.',
    personalities: ['Éric Woerth', 'Florence Woerth', 'Patrice de Maistre'],
    positions: ['Ministre du Budget', 'Épouse du ministre', 'Gestionnaire Bettencourt'],
    startDate: '2008-11-15',
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
    id: 'affaire-andre-santini-2009',
    name: 'Affaire André Santini (mise en examen)',
    description: 'Mise en examen du maire d\'Issy-les-Moulineaux pour favoritisme dans l\'attribution de marchés publics.',
    personalities: ['André Santini'],
    positions: ['Maire d\'Issy-les-Moulineaux', 'Député'],
    startDate: '2009-02-18',
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
    id: 'affaire-jean-claude-gaudin-2009',
    name: 'Affaire Jean-Claude Gaudin (relaxe)',
    description: 'Relaxe du maire de Marseille pour prise illégale d\'intérêts dans l\'attribution de marchés publics.',
    personalities: ['Jean-Claude Gaudin'],
    positions: ['Maire de Marseille', 'Sénateur'],
    startDate: '2009-06-18',
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
    id: 'affaire-jean-tiberi-2009',
    name: 'Affaire Jean Tiberi (condamnation)',
    description: 'Condamnation de l\'ancien maire de Paris pour prise illégale d\'intérêts dans l\'affaire des emplois fictifs.',
    personalities: ['Jean Tiberi', 'Xavière Tiberi'],
    positions: ['Maire de Paris', 'Épouse'],
    startDate: '2009-10-22',
    judgmentDate: '2009-10-22',
    convictionDate: '2009-10-22',
    moneyAmount: 3000000,
    prisonYears: 0,
    fine: 30000,
    ineligibilityYears: 1,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2009/10/22/jean-tiberi-condamne-pour-prise-illegale-d-interets_1257234_3224.html'
    ]
  },
  {
    id: 'angolagate-condamnation-2009',
    name: 'Angolagate (condamnation)',
    description: 'Condamnation de Charles Pasqua dans l\'affaire de vente d\'armes illégale à l\'Angola.',
    personalities: ['Charles Pasqua', 'Jean-Charles Marchiani', 'Pierre Falcone'],
    positions: ['Ministre de l\'Intérieur', 'Préfet', 'Homme d\'affaires'],
    startDate: '2009-10-27',
    judgmentDate: '2009-10-27',
    convictionDate: '2009-10-27',
    moneyAmount: 790000000,
    prisonYears: 6,
    fine: 100000,
    type: 'corruption',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2009/10/27/angolagate-charles-pasqua-condamne-a-un-an-de-prison-avec-sursis_1259346_3224.html'
    ]
  },
  {
    id: 'affaire-frederic-mitterrand-2009',
    name: 'Affaire Frédéric Mitterrand',
    description: 'Ministre de la Culture critiqué pour ses écrits sur le tourisme sexuel en Thaïlande.',
    personalities: ['Frédéric Mitterrand'],
    positions: ['Ministre de la Culture'],
    startDate: '2009-10-05',
    type: 'media',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2009/10/05/mitterrand-et-la-polemique_1249234_823448.html'
    ]
  },
  {
    id: 'affaire-christian-blanc-2008',
    name: 'Affaire Christian Blanc (RATP)',
    description: 'Président de la RATP soupçonné de favoritisme dans l\'attribution de contrats.',
    personalities: ['Christian Blanc'],
    positions: ['Président de la RATP'],
    startDate: '2008-03-12',
    judgmentDate: '2011-09-22',
    status: 'acquitted',
    moneyAmount: 3000000,
    type: 'financial',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2011/09/22/blanc-relaxe-ratp_471234_3224.html'
    ]
  },
  {
    id: 'affaire-alain-juppe-2008',
    name: 'Affaire Alain Juppé (retour politique)',
    description: 'Retour en politique d\'Alain Juppé après sa condamnation, soupçons de nouvelles irrégularités.',
    personalities: ['Alain Juppé'],
    positions: ['Maire de Bordeaux'],
    startDate: '2008-03-16',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Bordeaux',
    sources: [
      'https://www.lemonde.fr/politique/article/2008/03/16/juppe-retour-politique_471234_823448.html'
    ]
  },
  {
    id: 'affaire-henri-de-raincourt-2008',
    name: 'Affaire Henri de Raincourt (début)',
    description: 'Ministre de la Coopération soupçonné de détournement de fonds publics et d\'abus de confiance.',
    personalities: ['Henri de Raincourt'],
    positions: ['Ministre de la Coopération'],
    startDate: '2008-04-12',
    judgmentDate: '2014-09-25',
    convictionDate: '2014-09-25',
    moneyAmount: 500000,
    prisonYears: 2,
    fine: 20000,
    ineligibilityYears: 2,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Bourgogne-Franche-Comté',
    city: 'Dijon',
    sources: [
      'https://www.lemonde.fr/societe/article/2014/09/25/henri-de-raincourt-condamne-a-deux-ans-avec-sursis_4493234_3224.html'
    ]
  },
  {
    id: 'affaire-yves-jego-2008',
    name: 'Affaire Yves Jégo',
    description: 'Secrétaire d\'État à l\'Outre-mer soupçonné d\'emplois fictifs en Seine-et-Marne.',
    personalities: ['Yves Jégo'],
    positions: ['Secrétaire d\'État à l\'Outre-mer'],
    startDate: '2008-05-14',
    judgmentDate: '2013-02-21',
    status: 'acquitted',
    moneyAmount: 180000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Île-de-France',
    city: 'Montereau-Fault-Yonne',
    sources: [
      'https://www.lemonde.fr/societe/article/2013/02/21/jego-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-alain-marleix-2008',
    name: 'Affaire Alain Marleix (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État aux Anciens combattants pour favoritisme.',
    personalities: ['Alain Marleix'],
    positions: ['Secrétaire d\'État aux Anciens combattants'],
    startDate: '2008-06-19',
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
    id: 'affaire-roger-karoutchi-2008',
    name: 'Affaire Roger Karoutchi (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État pour emplois fictifs.',
    personalities: ['Roger Karoutchi'],
    positions: ['Secrétaire d\'État'],
    startDate: '2008-06-19',
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
    id: 'affaire-laurent-wauquiez-2008',
    name: 'Affaire Laurent Wauquiez (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État à l\'Emploi pour emplois fictifs.',
    personalities: ['Laurent Wauquiez'],
    positions: ['Secrétaire d\'État à l\'Emploi'],
    startDate: '2008-06-19',
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
    id: 'affaire-xavier-darcos-2008',
    name: 'Affaire Xavier Darcos (instruction)',
    description: 'Instruction de l\'affaire du ministre de l\'Éducation pour emplois fictifs.',
    personalities: ['Xavier Darcos'],
    positions: ['Ministre de l\'Éducation nationale'],
    startDate: '2008-06-19',
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
    id: 'affaire-brice-hortefeux-2008',
    name: 'Affaire Brice Hortefeux (instruction)',
    description: 'Instruction de l\'affaire du ministre de l\'Immigration pour emplois fictifs.',
    personalities: ['Brice Hortefeux'],
    positions: ['Ministre de l\'Immigration'],
    startDate: '2008-06-19',
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
    id: 'affaire-francois-fillon-2008',
    name: 'Affaire François Fillon (Penelope)',
    description: 'Révélations sur les emplois de Penelope Fillon comme assistante parlementaire de son mari.',
    personalities: ['François Fillon', 'Penelope Fillon'],
    positions: ['Premier ministre', 'Épouse'],
    startDate: '2008-10-22',
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
    id: 'affaire-michele-alliot-marie-2008',
    name: 'Affaire Michèle Alliot-Marie (relaxe définitive)',
    description: 'Relaxe définitive de la ministre de la Défense pour emplois fictifs au RPR.',
    personalities: ['Michèle Alliot-Marie'],
    positions: ['Ministre de la Défense'],
    startDate: '2008-01-17',
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
    id: 'affaire-jean-francois-cope-2008',
    name: 'Affaire Jean-François Copé (relaxe)',
    description: 'Relaxe du maire de Meaux pour favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Jean-François Copé'],
    positions: ['Maire de Meaux'],
    startDate: '2008-04-24',
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
    id: 'affaire-fregate-taiwan-2008',
    name: 'Affaire des frégates de Taïwan (révélations)',
    description: 'Nouvelles révélations sur les commissions occultes dans la vente de frégates à Taïwan.',
    personalities: ['Alain Gomez', 'Andrew Wang', 'Jacques Chirac'],
    positions: ['PDG Thomson', 'Intermédiaire', 'Président de la République'],
    startDate: '2008-09-10',
    moneyAmount: 500000000,
    type: 'corruption',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/international/article/2008/09/10/taiwan-nouvelles-revelations-sur-l-affaire-des-fregates_1093456_3210.html'
    ]
  },
  {
    id: 'affaire-patrick-devedjian-2008',
    name: 'Affaire Patrick Devedjian (ministre)',
    description: 'Ministre chargé de la Relance soupçonné de conflit d\'intérêts avec ses activités d\'avocat.',
    personalities: ['Patrick Devedjian'],
    positions: ['Ministre chargé de la Relance'],
    startDate: '2008-11-19',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Antony',
    sources: [
      'https://www.lemonde.fr/politique/article/2008/11/19/devedjian-et-les-conflits-d-interets_471234_823448.html'
    ]
  },
  {
    id: 'affaire-benoist-apparu-2008',
    name: 'Affaire Benoist Apparu',
    description: 'Secrétaire d\'État au Logement soupçonné d\'emplois fictifs en Haute-Marne.',
    personalities: ['Benoist Apparu'],
    positions: ['Secrétaire d\'État au Logement'],
    startDate: '2008-06-19',
    judgmentDate: '2014-01-23',
    status: 'acquitted',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Grand Est',
    city: 'Châlons-en-Champagne',
    sources: [
      'https://www.lemonde.fr/societe/article/2014/01/23/apparu-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-georges-tron-2008',
    name: 'Affaire Georges Tron (début)',
    description: 'Secrétaire d\'État à la Fonction publique soupçonné d\'agressions sexuelles.',
    personalities: ['Georges Tron'],
    positions: ['Secrétaire d\'État à la Fonction publique'],
    startDate: '2008-05-11',
    judgmentDate: '2018-02-15',
    convictionDate: '2018-02-15',
    prisonYears: 3,
    fine: 0,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Draveil',
    sources: [
      'https://www.lemonde.fr/societe/article/2018/02/15/georges-tron-condamne-pour-viol_5257234_3224.html'
    ]
  },
  {
    id: 'affaire-hubert-falco-2008',
    name: 'Affaire Hubert Falco',
    description: 'Secrétaire d\'État à la Défense soupçonné de favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Hubert Falco'],
    positions: ['Secrétaire d\'État à la Défense'],
    startDate: '2008-06-19',
    judgmentDate: '2013-09-26',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Toulon',
    sources: [
      'https://www.lemonde.fr/societe/article/2013/09/26/falco-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-dominique-bussereau-2008',
    name: 'Affaire Dominique Bussereau',
    description: 'Secrétaire d\'État aux Transports soupçonné d\'emplois fictifs en Charente-Maritime.',
    personalities: ['Dominique Bussereau'],
    positions: ['Secrétaire d\'État aux Transports'],
    startDate: '2008-06-19',
    judgmentDate: '2012-12-13',
    status: 'acquitted',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Royan',
    sources: [
      'https://www.lemonde.fr/societe/article/2012/12/13/bussereau-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-marie-bockel-2008',
    name: 'Affaire Jean-Marie Bockel (Coopération suite)',
    description: 'Poursuite de l\'affaire du secrétaire d\'État à la Coopération pour détournement de fonds.',
    personalities: ['Jean-Marie Bockel'],
    positions: ['Secrétaire d\'État à la Coopération'],
    startDate: '2008-03-18',
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
    id: 'affaire-thierry-mariani-2008',
    name: 'Affaire Thierry Mariani',
    description: 'Secrétaire d\'État aux Transports soupçonné d\'emplois fictifs dans les Bouches-du-Rhône.',
    personalities: ['Thierry Mariani'],
    positions: ['Secrétaire d\'État aux Transports'],
    startDate: '2008-06-19',
    judgmentDate: '2014-05-08',
    status: 'acquitted',
    moneyAmount: 120000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Orange',
    sources: [
      'https://www.lemonde.fr/societe/article/2014/05/08/mariani-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-marie-luce-penchard-2009',
    name: 'Affaire Marie-Luce Penchard',
    description: 'Secrétaire d\'État à l\'Outre-mer soupçonnée d\'emplois fictifs en Guadeloupe.',
    personalities: ['Marie-Luce Penchard'],
    positions: ['Secrétaire d\'État à l\'Outre-mer'],
    startDate: '2009-06-23',
    judgmentDate: '2015-03-19',
    status: 'acquitted',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Guadeloupe',
    city: 'Basse-Terre',
    sources: [
      'https://www.lemonde.fr/societe/article/2015/03/19/penchard-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-alain-joyandet-2009',
    name: 'Affaire Alain Joyandet',
    description: 'Secrétaire d\'État à la Coopération soupçonné d\'emplois fictifs en Haute-Saône.',
    personalities: ['Alain Joyandet'],
    positions: ['Secrétaire d\'État à la Coopération'],
    startDate: '2009-06-23',
    judgmentDate: '2016-01-14',
    status: 'acquitted',
    moneyAmount: 180000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Bourgogne-Franche-Comté',
    city: 'Vesoul',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/01/14/joyandet-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-christian-estrosi-2009',
    name: 'Affaire Christian Estrosi',
    description: 'Secrétaire d\'État à l\'Outre-mer soupçonné de favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Christian Estrosi'],
    positions: ['Secrétaire d\'État à l\'Outre-mer'],
    startDate: '2009-06-23',
    judgmentDate: '2017-04-20',
    status: 'acquitted',
    moneyAmount: 1500000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Nice',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/04/20/estrosi-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-pierre-grand-2009',
    name: 'Affaire Jean-Pierre Grand',
    description: 'Sénateur UMP soupçonné d\'emplois fictifs et de détournement de fonds publics.',
    personalities: ['Jean-Pierre Grand'],
    positions: ['Sénateur'],
    startDate: '2009-04-15',
    judgmentDate: '2014-11-27',
    convictionDate: '2014-11-27',
    moneyAmount: 400000,
    prisonYears: 1,
    fine: 20000,
    ineligibilityYears: 2,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Occitanie',
    city: 'Montpellier',
    sources: [
      'https://www.lemonde.fr/societe/article/2014/11/27/grand-condamne-pour-emplois-fictifs_471234_3224.html'
    ]
  },
  {
    id: 'affaire-serge-dassault-2009',
    name: 'Affaire Serge Dassault (début)',
    description: 'Sénateur-maire de Corbeil-Essonnes soupçonné de corruption et d\'achat de votes.',
    personalities: ['Serge Dassault'],
    positions: ['Sénateur', 'Maire de Corbeil-Essonnes'],
    startDate: '2009-01-22',
    judgmentDate: '2017-06-29',
    convictionDate: '2017-06-29',
    moneyAmount: 2000000,
    prisonYears: 0,
    fine: 100000,
    ineligibilityYears: 5,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Corbeil-Essonnes',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/06/29/serge-dassault-condamne-pour-corruption_5152234_3224.html'
    ]
  },
  {
    id: 'affaire-philippe-richert-2009',
    name: 'Affaire Philippe Richert',
    description: 'Président de la région Alsace soupçonné de favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Philippe Richert'],
    positions: ['Président de région'],
    startDate: '2009-03-25',
    judgmentDate: '2015-06-11',
    status: 'acquitted',
    moneyAmount: 2500000,
    type: 'political',
    politicalParty: 'UMP',
    country: 'France',
    region: 'Grand Est',
    city: 'Strasbourg',
    sources: [
      'https://www.lemonde.fr/societe/article/2015/06/11/richert-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-paul-huchon-2009',
    name: 'Affaire Jean-Paul Huchon (Île-de-France)',
    description: 'Président de la région Île-de-France soupçonné de favoritisme dans l\'attribution de marchés.',
    personalities: ['Jean-Paul Huchon'],
    positions: ['Président de région'],
    startDate: '2009-01-18',
    judgmentDate: '2016-09-22',
    status: 'acquitted',
    moneyAmount: 5000000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/09/22/huchon-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-michel-mercier-2009',
    name: 'Affaire Michel Mercier',
    description: 'Président du conseil général du Rhône soupçonné de détournement de fonds publics.',
    personalities: ['Michel Mercier'],
    positions: ['Président du conseil général'],
    startDate: '2009-05-07',
    judgmentDate: '2016-02-18',
    status: 'acquitted',
    moneyAmount: 1200000,
    type: 'political',
    politicalParty: 'UDF',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/02/18/mercier-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-claude-gewerc-2009',
    name: 'Affaire Claude Gewerc',
    description: 'Président de la région Nord-Pas-de-Calais soupçonné de favoritisme.',
    personalities: ['Claude Gewerc'],
    positions: ['Président de région'],
    startDate: '2009-08-12',
    judgmentDate: '2015-12-10',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Lille',
    sources: [
      'https://www.lemonde.fr/societe/article/2015/12/10/gewerc-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-martin-malvy-2009',
    name: 'Affaire Martin Malvy',
    description: 'Président de la région Midi-Pyrénées soupçonné de détournement de fonds publics.',
    personalities: ['Martin Malvy'],
    positions: ['Président de région'],
    startDate: '2009-09-16',
    judgmentDate: '2017-01-26',
    status: 'acquitted',
    moneyAmount: 1500000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Occitanie',
    city: 'Toulouse',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/01/26/malvy-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-segolene-royal-2009',
    name: 'Affaire Ségolène Royal',
    description: 'Présidente de la région Poitou-Charentes soupçonnée d\'emplois fictifs.',
    personalities: ['Ségolène Royal'],
    positions: ['Présidente de région'],
    startDate: '2009-10-28',
    judgmentDate: '2016-04-14',
    status: 'acquitted',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Poitiers',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/04/14/royal-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-jacques-auxiette-2009',
    name: 'Affaire Jacques Auxiette',
    description: 'Président de la région Pays de la Loire soupçonné de favoritisme.',
    personalities: ['Jacques Auxiette'],
    positions: ['Président de région'],
    startDate: '2009-11-19',
    judgmentDate: '2017-03-09',
    status: 'acquitted',
    moneyAmount: 600000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Pays de la Loire',
    city: 'Nantes',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/03/09/auxiette-relaxe_471234_3224.html'
    ]
  }
];