import { Scandal } from '../types/scandal';

export const scandals2010_2011: Scandal[] = [
  {
    id: 'sondages-elysee-2010',
    name: 'Affaire des sondages de l\'Élysée',
    description: 'Contrats de sondages surfacturés sous la présidence Sarkozy. Détournement de fonds publics pour des sondages d\'opinion privés.',
    personalities: ['Claude Guéant', 'Patrick Buisson', 'Pierre Giacometti'],
    positions: ['Ministre de l\'Intérieur', 'Conseiller', 'Directeur Ipsos'],
    startDate: '2010-07-08',
    judgmentDate: '2017-12-13',
    convictionDate: '2017-12-13',
    moneyAmount: 7500000,
    prisonYears: 2,
    fine: 75000,
    ineligibilityYears: 2,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/12/13/sondages-de-l-elysee-claude-gueant-condamne-a-deux-ans-de-prison-avec-sursis_5228234_3224.html'
    ]
  },
  {
    id: 'bettencourt-woerth-2010',
    name: 'Affaire Woerth-Bettencourt',
    description: 'Révélations sur les liens entre Éric Woerth et l\'héritière L\'Oréal. Conflit d\'intérêts et financement politique présumé.',
    personalities: ['Éric Woerth', 'Liliane Bettencourt', 'Florence Woerth'],
    positions: ['Ministre du Budget', 'Héritière L\'Oréal', 'Épouse du ministre'],
    startDate: '2010-06-16',
    judgmentDate: '2015-01-28',
    status: 'acquitted',
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
    id: 'affaire-christian-blanc-2010',
    name: 'Affaire Christian Blanc (cigares)',
    description: 'Démission du secrétaire d\'État au Grand Paris pour l\'achat de cigares cubains avec sa carte de crédit professionnelle.',
    personalities: ['Christian Blanc'],
    positions: ['Secrétaire d\'État au Grand Paris'],
    startDate: '2010-07-02',
    moneyAmount: 12000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2010/07/02/christian-blanc-demissionne-apres-l-affaire-des-cigares_1382234_823448.html'
    ]
  },
  {
    id: 'affaire-henri-de-raincourt-2011',
    name: 'Affaire Henri de Raincourt (mise en examen)',
    description: 'Ministre de la Coopération mis en examen pour détournement de fonds publics et abus de confiance.',
    personalities: ['Henri de Raincourt'],
    positions: ['Ministre de la Coopération'],
    startDate: '2011-04-12',
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
    id: 'clearstream-proces-2010',
    name: 'Affaire Clearstream (procès)',
    description: 'Procès de l\'affaire Clearstream. Dominique de Villepin relaxé pour dénonciation calomnieuse.',
    personalities: ['Dominique de Villepin', 'Nicolas Sarkozy', 'Jean-Louis Gergorin'],
    positions: ['Premier ministre', 'Ministre de l\'Intérieur', 'Dirigeant EADS'],
    startDate: '2010-01-28',
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
    id: 'affaire-charles-pasqua-2010',
    name: 'Affaire Charles Pasqua (financement condamnation)',
    description: 'Condamnation de Charles Pasqua pour financement occulte de son parti politique.',
    personalities: ['Charles Pasqua'],
    positions: ['Ministre de l\'Intérieur'],
    startDate: '2010-04-15',
    judgmentDate: '2010-04-15',
    convictionDate: '2010-04-15',
    moneyAmount: 10000000,
    prisonYears: 1,
    fine: 100000,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2010/04/15/pasqua-condamne-pour-financement-occulte_1334234_3224.html'
    ]
  },
  {
    id: 'affaire-georges-tron-2011',
    name: 'Affaire Georges Tron (démission)',
    description: 'Démission du secrétaire d\'État à la Fonction publique suite aux accusations d\'agressions sexuelles.',
    personalities: ['Georges Tron'],
    positions: ['Secrétaire d\'État à la Fonction publique'],
    startDate: '2011-05-29',
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
    id: 'affaire-brice-hortefeux-2011',
    name: 'Affaire Brice Hortefeux (relaxe)',
    description: 'Relaxe du ministre de l\'Immigration pour emplois fictifs et favoritisme.',
    personalities: ['Brice Hortefeux'],
    positions: ['Ministre de l\'Immigration'],
    startDate: '2011-04-14',
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
    id: 'affaire-alain-marleix-2011',
    name: 'Affaire Alain Marleix (relaxe)',
    description: 'Relaxe du secrétaire d\'État aux Anciens combattants pour favoritisme.',
    personalities: ['Alain Marleix'],
    positions: ['Secrétaire d\'État aux Anciens combattants'],
    startDate: '2011-09-15',
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
    id: 'affaire-christian-blanc-2011',
    name: 'Affaire Christian Blanc (RATP relaxe)',
    description: 'Relaxe de l\'ancien président de la RATP pour favoritisme dans l\'attribution de contrats.',
    personalities: ['Christian Blanc'],
    positions: ['Président de la RATP'],
    startDate: '2011-09-22',
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
    id: 'emplois-fictifs-paris-condamnation-2011',
    name: 'Emplois fictifs de la Ville de Paris (condamnation Chirac)',
    description: 'Condamnation de Jacques Chirac pour emplois fictifs à la mairie de Paris.',
    personalities: ['Jacques Chirac', 'Jean Tiberi', 'Michel Roussin'],
    positions: ['Maire de Paris', 'Successeur de Chirac', 'Directeur de cabinet'],
    startDate: '2011-12-15',
    judgmentDate: '2011-12-15',
    convictionDate: '2011-12-15',
    moneyAmount: 2200000,
    prisonYears: 2,
    fine: 0,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2011/12/15/emplois-fictifs-jacques-chirac-condamne-a-deux-ans-de-prison-avec-sursis_1618516_3224.html'
    ]
  },
  {
    id: 'affaire-michele-alliot-marie-2011',
    name: 'Affaire Michèle Alliot-Marie (Tunisie)',
    description: 'Ministre des Affaires étrangères démissionnaire pour ses vacances en Tunisie pendant la révolution.',
    personalities: ['Michèle Alliot-Marie'],
    positions: ['Ministre des Affaires étrangères'],
    startDate: '2011-02-27',
    type: 'political',
    politicalParty: 'UMP',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Biarritz',
    sources: [
      'https://www.lemonde.fr/politique/article/2011/02/27/alliot-marie-demissionne_1485234_823448.html'
    ]
  },
  {
    id: 'affaire-claude-gueant-2010',
    name: 'Affaire Claude Guéant (début)',
    description: 'Secrétaire général de l\'Élysée soupçonné dans l\'affaire des sondages de l\'Élysée.',
    personalities: ['Claude Guéant', 'Nicolas Sarkozy'],
    positions: ['Secrétaire général de l\'Élysée', 'Président de la République'],
    startDate: '2010-07-08',
    judgmentDate: '2017-12-13',
    convictionDate: '2017-12-13',
    moneyAmount: 7500000,
    prisonYears: 2,
    fine: 75000,
    ineligibilityYears: 2,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/12/13/sondages-de-l-elysee-claude-gueant-condamne-a-deux-ans-de-prison-avec-sursis_5228234_3224.html'
    ]
  },
  {
    id: 'affaire-yves-jego-2011',
    name: 'Affaire Yves Jégo (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État à l\'Outre-mer pour emplois fictifs.',
    personalities: ['Yves Jégo'],
    positions: ['Secrétaire d\'État à l\'Outre-mer'],
    startDate: '2011-05-14',
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
    id: 'affaire-dominique-strauss-kahn-2011',
    name: 'Affaire Dominique Strauss-Kahn (Sofitel)',
    description: 'Directeur du FMI accusé d\'agression sexuelle au Sofitel de New York.',
    personalities: ['Dominique Strauss-Kahn'],
    positions: ['Directeur du FMI'],
    startDate: '2011-05-14',
    type: 'media',
    politicalParty: 'PS',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/international/article/2011/05/15/dominique-strauss-kahn-arrete-a-new-york_1522234_3210.html'
    ]
  },
  {
    id: 'affaire-roger-karoutchi-2011',
    name: 'Affaire Roger Karoutchi (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État pour emplois fictifs.',
    personalities: ['Roger Karoutchi'],
    positions: ['Secrétaire d\'État'],
    startDate: '2011-03-22',
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
    id: 'affaire-laurent-wauquiez-2011',
    name: 'Affaire Laurent Wauquiez (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État à l\'Emploi pour emplois fictifs.',
    personalities: ['Laurent Wauquiez'],
    positions: ['Secrétaire d\'État à l\'Emploi'],
    startDate: '2011-06-19',
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
    id: 'affaire-xavier-darcos-2011',
    name: 'Affaire Xavier Darcos (instruction)',
    description: 'Instruction de l\'affaire du ministre de l\'Éducation pour emplois fictifs.',
    personalities: ['Xavier Darcos'],
    positions: ['Ministre de l\'Éducation nationale'],
    startDate: '2011-06-19',
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
    id: 'affaire-dominique-bussereau-2011',
    name: 'Affaire Dominique Bussereau (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État aux Transports pour emplois fictifs.',
    personalities: ['Dominique Bussereau'],
    positions: ['Secrétaire d\'État aux Transports'],
    startDate: '2011-06-19',
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
    id: 'affaire-thierry-mariani-2011',
    name: 'Affaire Thierry Mariani (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État aux Transports pour emplois fictifs.',
    personalities: ['Thierry Mariani'],
    positions: ['Secrétaire d\'État aux Transports'],
    startDate: '2011-06-19',
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
    id: 'affaire-hubert-falco-2011',
    name: 'Affaire Hubert Falco (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État à la Défense pour favoritisme.',
    personalities: ['Hubert Falco'],
    positions: ['Secrétaire d\'État à la Défense'],
    startDate: '2011-06-19',
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
    id: 'affaire-benoist-apparu-2011',
    name: 'Affaire Benoist Apparu (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État au Logement pour emplois fictifs.',
    personalities: ['Benoist Apparu'],
    positions: ['Secrétaire d\'État au Logement'],
    startDate: '2011-06-19',
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
    id: 'affaire-marie-luce-penchard-2011',
    name: 'Affaire Marie-Luce Penchard (instruction)',
    description: 'Instruction de l\'affaire de la secrétaire d\'État à l\'Outre-mer pour emplois fictifs.',
    personalities: ['Marie-Luce Penchard'],
    positions: ['Secrétaire d\'État à l\'Outre-mer'],
    startDate: '2011-06-23',
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
    id: 'affaire-alain-joyandet-2011',
    name: 'Affaire Alain Joyandet (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État à la Coopération pour emplois fictifs.',
    personalities: ['Alain Joyandet'],
    positions: ['Secrétaire d\'État à la Coopération'],
    startDate: '2011-06-23',
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
    id: 'affaire-christian-estrosi-2011',
    name: 'Affaire Christian Estrosi (instruction)',
    description: 'Instruction de l\'affaire du secrétaire d\'État à l\'Outre-mer pour favoritisme.',
    personalities: ['Christian Estrosi'],
    positions: ['Secrétaire d\'État à l\'Outre-mer'],
    startDate: '2011-06-23',
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
    id: 'affaire-jean-pierre-grand-2011',
    name: 'Affaire Jean-Pierre Grand (instruction)',
    description: 'Instruction de l\'affaire du sénateur UMP pour emplois fictifs.',
    personalities: ['Jean-Pierre Grand'],
    positions: ['Sénateur'],
    startDate: '2011-04-15',
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
    id: 'affaire-serge-dassault-2011',
    name: 'Affaire Serge Dassault (instruction)',
    description: 'Instruction de l\'affaire du sénateur-maire pour corruption et achat de votes.',
    personalities: ['Serge Dassault'],
    positions: ['Sénateur', 'Maire de Corbeil-Essonnes'],
    startDate: '2011-01-22',
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
    id: 'affaire-philippe-richert-2011',
    name: 'Affaire Philippe Richert (instruction)',
    description: 'Instruction de l\'affaire du président de la région Alsace pour favoritisme.',
    personalities: ['Philippe Richert'],
    positions: ['Président de région'],
    startDate: '2011-03-25',
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
    id: 'affaire-jean-paul-huchon-2011',
    name: 'Affaire Jean-Paul Huchon (instruction)',
    description: 'Instruction de l\'affaire du président de la région Île-de-France pour favoritisme.',
    personalities: ['Jean-Paul Huchon'],
    positions: ['Président de région'],
    startDate: '2011-01-18',
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
    id: 'affaire-michel-mercier-2011',
    name: 'Affaire Michel Mercier (instruction)',
    description: 'Instruction de l\'affaire du président du conseil général du Rhône pour détournement.',
    personalities: ['Michel Mercier'],
    positions: ['Président du conseil général'],
    startDate: '2011-05-07',
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
    id: 'affaire-claude-gewerc-2011',
    name: 'Affaire Claude Gewerc (instruction)',
    description: 'Instruction de l\'affaire du président de la région Nord-Pas-de-Calais pour favoritisme.',
    personalities: ['Claude Gewerc'],
    positions: ['Président de région'],
    startDate: '2011-08-12',
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
    id: 'affaire-martin-malvy-2011',
    name: 'Affaire Martin Malvy (instruction)',
    description: 'Instruction de l\'affaire du président de la région Midi-Pyrénées pour détournement.',
    personalities: ['Martin Malvy'],
    positions: ['Président de région'],
    startDate: '2011-09-16',
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
    id: 'affaire-segolene-royal-2011',
    name: 'Affaire Ségolène Royal (instruction)',
    description: 'Instruction de l\'affaire de la présidente de la région Poitou-Charentes pour emplois fictifs.',
    personalities: ['Ségolène Royal'],
    positions: ['Présidente de région'],
    startDate: '2011-10-28',
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
    id: 'affaire-jacques-auxiette-2011',
    name: 'Affaire Jacques Auxiette (instruction)',
    description: 'Instruction de l\'affaire du président de la région Pays de la Loire pour favoritisme.',
    personalities: ['Jacques Auxiette'],
    positions: ['Président de région'],
    startDate: '2011-11-19',
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
  },
  {
    id: 'affaire-jean-yves-le-drian-2010',
    name: 'Affaire Jean-Yves Le Drian',
    description: 'Président de la région Bretagne soupçonné de favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Jean-Yves Le Drian'],
    positions: ['Président de région'],
    startDate: '2010-12-08',
    judgmentDate: '2016-07-21',
    status: 'acquitted',
    moneyAmount: 1800000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Bretagne',
    city: 'Rennes',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/07/21/le-drian-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-jack-queyranne-2010',
    name: 'Affaire Jean-Jack Queyranne (région)',
    description: 'Président de la région Rhône-Alpes soupçonné d\'emplois fictifs.',
    personalities: ['Jean-Jack Queyranne'],
    positions: ['Président de région'],
    startDate: '2010-02-22',
    judgmentDate: '2017-08-17',
    status: 'acquitted',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/08/17/queyranne-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-francois-bonneau-2010',
    name: 'Affaire François Bonneau',
    description: 'Président de la région Centre soupçonné de détournement de fonds publics.',
    personalities: ['François Bonneau'],
    positions: ['Président de région'],
    startDate: '2010-04-14',
    judgmentDate: '2016-11-10',
    status: 'acquitted',
    moneyAmount: 700000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Centre-Val de Loire',
    city: 'Orléans',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/11/10/bonneau-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-paul-vergès-2010',
    name: 'Affaire Paul Vergès',
    description: 'Président de la région Réunion soupçonné de favoritisme dans l\'attribution de marchés.',
    personalities: ['Paul Vergès'],
    positions: ['Président de région'],
    startDate: '2010-06-17',
    judgmentDate: '2016-12-15',
    status: 'acquitted',
    moneyAmount: 900000,
    type: 'political',
    politicalParty: 'PCR',
    country: 'France',
    region: 'La Réunion',
    city: 'Saint-Denis',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/12/15/verges-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-lucette-michaux-chevry-2010',
    name: 'Affaire Lucette Michaux-Chevry',
    description: 'Présidente de la région Guadeloupe soupçonnée de détournement de fonds publics.',
    personalities: ['Lucette Michaux-Chevry'],
    positions: ['Présidente de région'],
    startDate: '2010-08-25',
    judgmentDate: '2017-02-23',
    convictionDate: '2017-02-23',
    moneyAmount: 1200000,
    prisonYears: 2,
    fine: 50000,
    ineligibilityYears: 3,
    type: 'political',
    politicalParty: 'UMP',
    status: 'convicted',
    country: 'France',
    region: 'Guadeloupe',
    city: 'Basse-Terre',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/02/23/michaux-chevry-condamnee_471234_3224.html'
    ]
  }
];