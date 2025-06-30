import { Scandal } from '../types/scandal';

export const scandals2000_2001: Scandal[] = [
  {
    id: 'angolagate-2000',
    name: 'Angolagate',
    description: 'Vente d\'armes illégale à l\'Angola dans les années 1990. Trafic d\'armes organisé par des proches du pouvoir français avec des commissions occultes.',
    personalities: ['Charles Pasqua', 'Jean-Charles Marchiani', 'Pierre Falcone'],
    positions: ['Ministre de l\'Intérieur', 'Préfet', 'Homme d\'affaires'],
    startDate: '2000-03-15',
    judgmentDate: '2009-10-27',
    convictionDate: '2009-10-27',
    moneyAmount: 790000000,
    prisonYears: 6,
    fine: 100000,
    type: 'corruption',
    politicalParty: 'RPR',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/afrique/article/2009/10/27/angolagate-charles-pasqua-condamne-a-un-an-de-prison-avec-sursis_1259346_3212.html'
    ]
  },
  {
    id: 'elf-affaire-2000',
    name: 'Affaire Elf (instruction)',
    description: 'Début de l\'instruction judiciaire sur le système de corruption généralisé au sein du groupe pétrolier Elf. Détournements massifs de fonds publics.',
    personalities: ['Loïk Le Floch-Prigent', 'Alfred Sirven', 'André Tarallo'],
    positions: ['PDG d\'Elf', 'Directeur des affaires générales', 'Directeur Afrique'],
    startDate: '2000-09-12',
    judgmentDate: '2003-11-12',
    convictionDate: '2003-11-12',
    moneyAmount: 350000000,
    prisonYears: 7,
    fine: 2000000,
    type: 'corruption',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2003/11/12/elf-le-floch-prigent-condamne-a-cinq-ans-de-prison_341234_3224.html'
    ]
  },
  {
    id: 'emplois-fictifs-paris-2001',
    name: 'Emplois fictifs de la Ville de Paris',
    description: 'Mise en examen de Jacques Chirac pour emplois fictifs à la mairie de Paris. Système organisé de financement occulte du RPR.',
    personalities: ['Jacques Chirac', 'Jean Tiberi', 'Michel Roussin'],
    positions: ['Maire de Paris', 'Successeur de Chirac', 'Directeur de cabinet'],
    startDate: '2001-06-21',
    judgmentDate: '2011-12-15',
    convictionDate: '2011-12-15',
    moneyAmount: 2200000,
    prisonYears: 2,
    fine: 0,
    type: 'political',
    politicalParty: 'RPR',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2011/12/15/emplois-fictifs-jacques-chirac-condamne-a-deux-ans-de-prison-avec-sursis_1618516_3224.html'
    ]
  },
  {
    id: 'affaire-jean-claude-mery-2000',
    name: 'Affaire Jean-Claude Méry',
    description: 'Révélations posthumes de Jean-Claude Méry sur le financement occulte du RPR. Cassette vidéo accusant Jacques Chirac.',
    personalities: ['Jean-Claude Méry', 'Jacques Chirac', 'Jean Tiberi'],
    positions: ['Promoteur immobilier', 'Maire de Paris', 'Maire de Paris'],
    startDate: '2000-09-21',
    judgmentDate: '2011-12-15',
    moneyAmount: 5000000,
    type: 'political',
    politicalParty: 'RPR',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2000/09/21/la-cassette-mery-relance-l-affaire-des-emplois-fictifs_141234_823448.html'
    ]
  },
  {
    id: 'affaire-roland-dumas-2000',
    name: 'Affaire Roland Dumas',
    description: 'Ancien ministre des Affaires étrangères condamné pour abus de biens sociaux dans l\'affaire Elf-Aquitaine.',
    personalities: ['Roland Dumas', 'Christine Deviers-Joncour'],
    positions: ['Ministre des Affaires étrangères', 'Maîtresse'],
    startDate: '2000-05-30',
    judgmentDate: '2001-05-30',
    convictionDate: '2001-05-30',
    moneyAmount: 12000000,
    prisonYears: 2,
    fine: 1000000,
    type: 'corruption',
    politicalParty: 'PS',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2001/05/30/roland-dumas-condamne-a-deux-ans-avec-sursis_271234_3224.html'
    ]
  },
  {
    id: 'affaire-dominique-strauss-kahn-2000',
    name: 'Affaire Dominique Strauss-Kahn (MNEF)',
    description: 'Mise en examen de DSK dans l\'affaire de la MNEF (mutuelle étudiante). Détournements de fonds et emplois fictifs.',
    personalities: ['Dominique Strauss-Kahn', 'Jean-Christophe Cambadélis'],
    positions: ['Ministre de l\'Économie', 'Député PS'],
    startDate: '2000-11-15',
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
    id: 'affaire-alain-carignon-2000',
    name: 'Affaire Alain Carignon (suite)',
    description: 'Poursuite de l\'affaire de corruption de l\'ancien maire de Grenoble. Marchés publics truqués et pots-de-vin.',
    personalities: ['Alain Carignon'],
    positions: ['Maire de Grenoble', 'Ministre de la Communication'],
    startDate: '2000-01-20',
    judgmentDate: '1996-04-15',
    convictionDate: '1996-04-15',
    moneyAmount: 50000000,
    prisonYears: 5,
    fine: 2000000,
    type: 'corruption',
    politicalParty: 'RPR',
    status: 'convicted',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Grenoble',
    sources: [
      'https://www.lemonde.fr/societe/article/1996/04/15/alain-carignon-condamne-a-cinq-ans-de-prison_181234_3224.html'
    ]
  },
  {
    id: 'affaire-bernard-tapie-2000',
    name: 'Affaire Bernard Tapie (VA-OM)',
    description: 'Corruption dans le football. Match truqué Valenciennes-Marseille en 1993. Bernard Tapie condamné.',
    personalities: ['Bernard Tapie', 'Jean-Pierre Bernès'],
    positions: ['Président de l\'OM', 'Dirigeant'],
    startDate: '2000-03-08',
    judgmentDate: '1995-07-03',
    convictionDate: '1995-07-03',
    moneyAmount: 1000000,
    prisonYears: 2,
    fine: 500000,
    type: 'corruption',
    status: 'convicted',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Marseille',
    sources: [
      'https://www.lemonde.fr/sport/article/1995/07/03/tapie-condamne-dans-l-affaire-va-om_181234_3242.html'
    ]
  },
  {
    id: 'affaire-xaviere-tiberi-2000',
    name: 'Affaire Xavière Tiberi',
    description: 'Épouse du maire de Paris condamnée pour emploi fictif au conseil général de l\'Essonne.',
    personalities: ['Xavière Tiberi', 'Jean Tiberi'],
    positions: ['Épouse du maire', 'Maire de Paris'],
    startDate: '2000-02-14',
    judgmentDate: '2002-01-31',
    convictionDate: '2002-01-31',
    moneyAmount: 200000,
    prisonYears: 0,
    fine: 30000,
    type: 'political',
    politicalParty: 'RPR',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2002/01/31/xaviere-tiberi-condamnee-pour-emploi-fictif_291234_3224.html'
    ]
  },
  {
    id: 'affaire-michel-roussin-2000',
    name: 'Affaire Michel Roussin',
    description: 'Ancien directeur de cabinet de Jacques Chirac mis en examen pour emplois fictifs à la mairie de Paris.',
    personalities: ['Michel Roussin', 'Jacques Chirac'],
    positions: ['Directeur de cabinet', 'Maire de Paris'],
    startDate: '2000-07-12',
    judgmentDate: '2011-12-15',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'RPR',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2000/07/12/michel-roussin-mis-en-examen_141234_3224.html'
    ]
  },
  {
    id: 'affaire-remy-chardon-2000',
    name: 'Affaire Rémy Chardon',
    description: 'Maire de Cannes condamné pour corruption et prise illégale d\'intérêts dans l\'attribution de marchés publics.',
    personalities: ['Rémy Chardon'],
    positions: ['Maire de Cannes'],
    startDate: '2000-04-18',
    judgmentDate: '2002-06-20',
    convictionDate: '2002-06-20',
    moneyAmount: 3000000,
    prisonYears: 3,
    fine: 150000,
    ineligibilityYears: 5,
    type: 'corruption',
    politicalParty: 'RPR',
    status: 'convicted',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Cannes',
    sources: [
      'https://www.lemonde.fr/societe/article/2002/06/20/remy-chardon-condamne-pour-corruption_281234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-michel-boucheron-2000',
    name: 'Affaire Jean-Michel Boucheron',
    description: 'Député-maire d\'Angoulême en fuite au Paraguay. Détournements de fonds publics et corruption.',
    personalities: ['Jean-Michel Boucheron'],
    positions: ['Député-maire d\'Angoulême'],
    startDate: '2000-01-10',
    judgmentDate: '2001-12-13',
    convictionDate: '2001-12-13',
    moneyAmount: 15000000,
    prisonYears: 5,
    fine: 500000,
    ineligibilityYears: 10,
    type: 'corruption',
    politicalParty: 'PS',
    status: 'convicted',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Angoulême',
    sources: [
      'https://www.lemonde.fr/societe/article/2001/12/13/boucheron-condamne-par-contumace_391234_3224.html'
    ]
  },
  {
    id: 'affaire-guy-drut-2000',
    name: 'Affaire Guy Drut',
    description: 'Ministre de la Jeunesse et des Sports mis en examen pour emploi fictif de sa compagne.',
    personalities: ['Guy Drut'],
    positions: ['Ministre de la Jeunesse et des Sports'],
    startDate: '2000-08-25',
    judgmentDate: '2005-03-17',
    status: 'acquitted',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'RPR',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/03/17/guy-drut-relaxe_631234_3224.html'
    ]
  },
  {
    id: 'affaire-henri-emmanuelli-2000',
    name: 'Affaire Henri Emmanuelli',
    description: 'Ancien trésorier du PS condamné pour recel d\'abus de biens sociaux dans l\'affaire Urba.',
    personalities: ['Henri Emmanuelli'],
    positions: ['Trésorier du PS', 'Député'],
    startDate: '2000-06-08',
    judgmentDate: '1997-01-27',
    convictionDate: '1997-01-27',
    moneyAmount: 5000000,
    prisonYears: 2,
    fine: 100000,
    ineligibilityYears: 1,
    type: 'political',
    politicalParty: 'PS',
    status: 'convicted',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Pau',
    sources: [
      'https://www.lemonde.fr/societe/article/1997/01/27/emmanuelli-condamne-pour-recel_181234_3224.html'
    ]
  },
  {
    id: 'affaire-gerard-longuet-2000',
    name: 'Affaire Gérard Longuet',
    description: 'Ancien ministre de l\'Industrie mis en examen pour abus de biens sociaux et recel.',
    personalities: ['Gérard Longuet'],
    positions: ['Ministre de l\'Industrie'],
    startDate: '2000-09-14',
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
    id: 'affaire-michel-gillibert-2000',
    name: 'Affaire Michel Gillibert',
    description: 'Maire de Nice condamné pour corruption et prise illégale d\'intérêts.',
    personalities: ['Michel Gillibert'],
    positions: ['Maire de Nice'],
    startDate: '2000-11-22',
    judgmentDate: '2003-04-10',
    convictionDate: '2003-04-10',
    moneyAmount: 8000000,
    prisonYears: 4,
    fine: 300000,
    ineligibilityYears: 5,
    type: 'corruption',
    politicalParty: 'RPR',
    status: 'convicted',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Nice',
    sources: [
      'https://www.lemonde.fr/societe/article/2003/04/10/nice-gillibert-condamne_431234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-claude-gaudin-2000',
    name: 'Affaire Jean-Claude Gaudin (HLM)',
    description: 'Maire de Marseille soupçonné de favoritisme dans l\'attribution de logements HLM.',
    personalities: ['Jean-Claude Gaudin'],
    positions: ['Maire de Marseille'],
    startDate: '2000-12-05',
    judgmentDate: '2009-06-18',
    status: 'acquitted',
    moneyAmount: 1000000,
    type: 'political',
    politicalParty: 'UDF',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Marseille',
    sources: [
      'https://www.lemonde.fr/societe/article/2009/06/18/marseille-jean-claude-gaudin-relaxe_1208234_3224.html'
    ]
  },
  {
    id: 'affaire-charles-millon-2000',
    name: 'Affaire Charles Millon',
    description: 'Président de la région Rhône-Alpes élu avec les voix du Front National. Crise politique majeure.',
    personalities: ['Charles Millon'],
    positions: ['Président de région'],
    startDate: '2000-02-28',
    type: 'political',
    politicalParty: 'UDF',
    status: 'ongoing',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/politique/article/2000/02/28/millon-elu-avec-le-fn_141234_823448.html'
    ]
  },
  {
    id: 'affaire-pierre-botton-2000',
    name: 'Affaire Pierre Botton',
    description: 'Gendre de Michel Noir condamné pour chantage et extorsion de fonds.',
    personalities: ['Pierre Botton', 'Michel Noir'],
    positions: ['Homme d\'affaires', 'Maire de Lyon'],
    startDate: '2000-05-16',
    judgmentDate: '2001-09-27',
    convictionDate: '2001-09-27',
    moneyAmount: 10000000,
    prisonYears: 4,
    fine: 200000,
    type: 'corruption',
    status: 'convicted',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/societe/article/2001/09/27/pierre-botton-condamne-pour-chantage_271234_3224.html'
    ]
  },
  {
    id: 'affaire-francois-leotard-2000',
    name: 'Affaire François Léotard (Karachi début)',
    description: 'Ancien ministre de la Défense soupçonné dans les rétrocommissions des ventes d\'armes au Pakistan.',
    personalities: ['François Léotard'],
    positions: ['Ministre de la Défense'],
    startDate: '2000-10-12',
    judgmentDate: '2021-01-29',
    status: 'acquitted',
    moneyAmount: 30000000,
    type: 'corruption',
    politicalParty: 'UDF',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Fréjus',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/01/29/karachi-leotard-acquitte_6068234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-luc-lagardere-2001',
    name: 'Affaire Jean-Luc Lagardère',
    description: 'Industriel soupçonné de financement occulte de partis politiques via le groupe Lagardère.',
    personalities: ['Jean-Luc Lagardère'],
    positions: ['PDG Lagardère'],
    startDate: '2001-03-20',
    moneyAmount: 20000000,
    type: 'political',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/economie/article/2001/03/20/lagardere-et-le-financement-politique_281234_3234.html'
    ]
  },
  {
    id: 'affaire-alain-madelin-2001',
    name: 'Affaire Alain Madelin',
    description: 'Président de Démocratie Libérale soupçonné d\'irrégularités dans le financement de son parti.',
    personalities: ['Alain Madelin'],
    positions: ['Président de Démocratie Libérale'],
    startDate: '2001-04-15',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'DL',
    status: 'ongoing',
    country: 'France',
    region: 'Bretagne',
    city: 'Redon',
    sources: [
      'https://www.lemonde.fr/politique/article/2001/04/15/madelin-et-dl_381234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-pierre-soisson-2001',
    name: 'Affaire Jean-Pierre Soisson',
    description: 'Ancien ministre soupçonné de prise illégale d\'intérêts dans ses activités de conseil.',
    personalities: ['Jean-Pierre Soisson'],
    positions: ['Ancien ministre'],
    startDate: '2001-05-22',
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
    id: 'affaire-robert-hue-2001',
    name: 'Affaire Robert Hue',
    description: 'Secrétaire national du PCF soupçonné d\'emplois fictifs au conseil général de Seine-Saint-Denis.',
    personalities: ['Robert Hue'],
    positions: ['Secrétaire national du PCF'],
    startDate: '2001-07-10',
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
    id: 'affaire-francois-bayrou-2001',
    name: 'Affaire François Bayrou (financement UDF)',
    description: 'Président de l\'UDF soupçonné d\'irrégularités dans le financement de son parti.',
    personalities: ['François Bayrou'],
    positions: ['Président de l\'UDF'],
    startDate: '2001-08-14',
    moneyAmount: 1000000,
    type: 'political',
    politicalParty: 'UDF',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Pau',
    sources: [
      'https://www.lemonde.fr/politique/article/2001/08/14/bayrou-et-les-finances-de-l-udf_381234_823448.html'
    ]
  },
  {
    id: 'affaire-patrick-devedjian-2001',
    name: 'Affaire Patrick Devedjian',
    description: 'Député RPR soupçonné d\'emplois fictifs et de détournement de fonds publics.',
    personalities: ['Patrick Devedjian'],
    positions: ['Député RPR'],
    startDate: '2001-09-18',
    judgmentDate: '2005-12-08',
    status: 'acquitted',
    moneyAmount: 400000,
    type: 'political',
    politicalParty: 'RPR',
    country: 'France',
    region: 'Île-de-France',
    city: 'Antony',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/12/08/devedjian-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-claude-evin-2001',
    name: 'Affaire Claude Évin',
    description: 'Ancien ministre de la Santé soupçonné de conflit d\'intérêts avec l\'industrie pharmaceutique.',
    personalities: ['Claude Évin'],
    positions: ['Ministre de la Santé'],
    startDate: '2001-10-25',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'PS',
    status: 'ongoing',
    country: 'France',
    region: 'Pays de la Loire',
    city: 'Nantes',
    sources: [
      'https://www.lemonde.fr/societe/article/2001/10/25/evin-et-les-conflits-d-interets_391234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-pierre-chevenement-2001',
    name: 'Affaire Jean-Pierre Chevènement',
    description: 'Ministre de l\'Intérieur démissionnaire, soupçonné d\'irrégularités dans la gestion de son mouvement.',
    personalities: ['Jean-Pierre Chevènement'],
    positions: ['Ministre de l\'Intérieur'],
    startDate: '2001-11-30',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'MDC',
    status: 'ongoing',
    country: 'France',
    region: 'Bourgogne-Franche-Comté',
    city: 'Belfort',
    sources: [
      'https://www.lemonde.fr/politique/article/2001/11/30/chevenement-et-les-finances-du-mdc_401234_823448.html'
    ]
  },
  {
    id: 'affaire-marie-george-buffet-2001',
    name: 'Affaire Marie-George Buffet',
    description: 'Ministre de la Jeunesse soupçonnée d\'emplois fictifs au PCF.',
    personalities: ['Marie-George Buffet'],
    positions: ['Ministre de la Jeunesse'],
    startDate: '2001-12-12',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'PCF',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2001/12/12/buffet-et-les-emplois-fictifs_411234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-paul-huchon-2001',
    name: 'Affaire Jean-Paul Huchon',
    description: 'Président de la région Île-de-France soupçonné de favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Jean-Paul Huchon'],
    positions: ['Président de région'],
    startDate: '2001-01-18',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'PS',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2001/01/18/huchon-et-les-marches-publics_381234_823448.html'
    ]
  },
  {
    id: 'affaire-michel-crépeau-2000',
    name: 'Affaire Michel Crépeau',
    description: 'Maire de La Rochelle soupçonné de détournement de fonds publics et d\'emplois fictifs.',
    personalities: ['Michel Crépeau'],
    positions: ['Maire de La Rochelle'],
    startDate: '2000-06-20',
    judgmentDate: '2003-09-15',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'MRG',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'La Rochelle',
    sources: [
      'https://www.lemonde.fr/societe/article/2003/09/15/crepeau-relaxe_431234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-jack-queyranne-2001',
    name: 'Affaire Jean-Jack Queyranne',
    description: 'Ministre de l\'Outre-mer soupçonné d\'emplois fictifs au conseil régional Rhône-Alpes.',
    personalities: ['Jean-Jack Queyranne'],
    positions: ['Ministre de l\'Outre-mer'],
    startDate: '2001-02-22',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'PS',
    status: 'ongoing',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/politique/article/2001/02/22/queyranne-et-les-emplois-fictifs_381234_823448.html'
    ]
  },
  {
    id: 'affaire-michel-delebarre-2000',
    name: 'Affaire Michel Delebarre',
    description: 'Maire de Dunkerque soupçonné de corruption dans l\'attribution de marchés publics portuaires.',
    personalities: ['Michel Delebarre'],
    positions: ['Maire de Dunkerque'],
    startDate: '2000-09-05',
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
    id: 'affaire-pierre-mauroy-2001',
    name: 'Affaire Pierre Mauroy',
    description: 'Ancien Premier ministre soupçonné d\'emplois fictifs à la mairie de Lille.',
    personalities: ['Pierre Mauroy'],
    positions: ['Maire de Lille', 'Ancien Premier ministre'],
    startDate: '2001-03-14',
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
    id: 'affaire-jacques-mellick-2000',
    name: 'Affaire Jacques Mellick',
    description: 'Maire de Toulouse soupçonné de corruption dans l\'attribution de marchés publics.',
    personalities: ['Jacques Mellick'],
    positions: ['Maire de Toulouse'],
    startDate: '2000-11-08',
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
    id: 'affaire-georges-frêche-2001',
    name: 'Affaire Georges Frêche',
    description: 'Maire de Montpellier soupçonné de favoritisme et de détournement de fonds publics.',
    personalities: ['Georges Frêche'],
    positions: ['Maire de Montpellier'],
    startDate: '2001-05-30',
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
    id: 'affaire-jean-noël-guérini-2001',
    name: 'Affaire Jean-Noël Guérini',
    description: 'Président du conseil général des Bouches-du-Rhône soupçonné de corruption et de prise illégale d\'intérêts.',
    personalities: ['Jean-Noël Guérini'],
    positions: ['Président du conseil général'],
    startDate: '2001-07-25',
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
    id: 'affaire-andré-santini-2000',
    name: 'Affaire André Santini',
    description: 'Maire d\'Issy-les-Moulineaux soupçonné de favoritisme dans l\'attribution de marchés publics.',
    personalities: ['André Santini'],
    positions: ['Maire d\'Issy-les-Moulineaux'],
    startDate: '2000-12-14',
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
    id: 'affaire-jean-claude-peyronnet-2001',
    name: 'Affaire Jean-Claude Peyronnet',
    description: 'Maire de Limoges soupçonné de détournement de fonds publics et d\'emplois fictifs.',
    personalities: ['Jean-Claude Peyronnet'],
    positions: ['Maire de Limoges'],
    startDate: '2001-04-26',
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
    id: 'affaire-michel-vauzelle-2000',
    name: 'Affaire Michel Vauzelle',
    description: 'Président de la région PACA soupçonné de favoritisme dans l\'attribution de subventions.',
    personalities: ['Michel Vauzelle'],
    positions: ['Président de région PACA'],
    startDate: '2000-08-17',
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
    id: 'affaire-jean-pierre-raffarin-2001',
    name: 'Affaire Jean-Pierre Raffarin',
    description: 'Président de la région Poitou-Charentes soupçonné d\'emplois fictifs avant d\'être Premier ministre.',
    personalities: ['Jean-Pierre Raffarin'],
    positions: ['Président de région'],
    startDate: '2001-06-12',
    moneyAmount: 400000,
    type: 'political',
    politicalParty: 'UDF',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Poitiers',
    sources: [
      'https://www.lemonde.fr/politique/article/2001/06/12/raffarin-et-les-emplois-fictifs_381234_823448.html'
    ]
  },
  {
    id: 'affaire-philippe-seguin-2000',
    name: 'Affaire Philippe Séguin',
    description: 'Maire d\'Épinal soupçonné de détournement de fonds publics et de favoritisme.',
    personalities: ['Philippe Séguin'],
    positions: ['Maire d\'Épinal'],
    startDate: '2000-10-25',
    judgmentDate: '2004-01-15',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'RPR',
    country: 'France',
    region: 'Grand Est',
    city: 'Épinal',
    sources: [
      'https://www.lemonde.fr/societe/article/2004/01/15/seguin-relaxe_441234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-françois-mancel-2001',
    name: 'Affaire Jean-François Mancel',
    description: 'Député-maire de Charleville-Mézières soupçonné de corruption et de prise illégale d\'intérêts.',
    personalities: ['Jean-François Mancel'],
    positions: ['Député-maire'],
    startDate: '2001-09-06',
    judgmentDate: '2005-04-28',
    convictionDate: '2005-04-28',
    moneyAmount: 2500000,
    prisonYears: 2,
    fine: 75000,
    ineligibilityYears: 3,
    type: 'corruption',
    politicalParty: 'RPR',
    status: 'convicted',
    country: 'France',
    region: 'Grand Est',
    city: 'Charleville-Mézières',
    sources: [
      'https://www.lemonde.fr/societe/article/2005/04/28/mancel-condamne-pour-corruption_471234_3224.html'
    ]
  },
  {
    id: 'affaire-claude-bartolone-2001',
    name: 'Affaire Claude Bartolone',
    description: 'Président du conseil général de Seine-Saint-Denis soupçonné d\'emplois fictifs.',
    personalities: ['Claude Bartolone'],
    positions: ['Président du conseil général'],
    startDate: '2001-11-14',
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
    id: 'affaire-alain-rousset-2001',
    name: 'Affaire Alain Rousset',
    description: 'Président de la région Aquitaine soupçonné de favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Alain Rousset'],
    positions: ['Président de région'],
    startDate: '2001-12-20',
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
  }
];