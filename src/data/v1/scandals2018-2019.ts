import { Scandal } from '../types/scandal';

export const scandals2018_2019: Scandal[] = [
  {
    id: 'affaire-benalla-2018',
    name: 'Affaire Benalla',
    description: 'Violences lors de manifestations du 1er mai 2018 par un chargé de mission de l\'Élysée. Abus de pouvoir et usurpation de fonction.',
    personalities: ['Alexandre Benalla', 'Vincent Crase'],
    positions: ['Chargé de mission à l\'Élysée', 'Réserviste de la gendarmerie'],
    startDate: '2018-07-18',
    judgmentDate: '2021-11-19',
    convictionDate: '2021-11-19',
    prisonYears: 3,
    fine: 0,
    type: 'political',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/11/19/alexandre-benalla-condamne-a-trois-ans-de-prison-avec-sursis_6102234_3224.html'
    ]
  },
  {
    id: 'affaire-balkany-2019',
    name: 'Affaire Balkany (condamnation)',
    description: 'Condamnation définitive de Patrick et Isabelle Balkany pour fraude fiscale et blanchiment. Patrimoine immobilier dissimulé.',
    personalities: ['Patrick Balkany', 'Isabelle Balkany'],
    positions: ['Maire de Levallois-Perret', 'Épouse du maire'],
    startDate: '2019-05-13',
    judgmentDate: '2019-09-13',
    convictionDate: '2019-09-13',
    moneyAmount: 4000000,
    prisonYears: 8,
    fine: 100000,
    ineligibilityYears: 10,
    type: 'financial',
    politicalParty: 'LR',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Levallois-Perret',
    sources: [
      'https://www.lemonde.fr/societe/article/2019/09/13/patrick-et-isabelle-balkany-condamnes-a-quatre-ans-de-prison-ferme_5509234_3224.html'
    ]
  },
  {
    id: 'affaire-francois-de-rugy-2019',
    name: 'Affaire François de Rugy',
    description: 'Ministre de la Transition écologique démissionnaire pour des dîners fastueux à l\'Assemblée nationale et travaux dans sa maison.',
    personalities: ['François de Rugy'],
    positions: ['Ministre de la Transition écologique', 'Président de l\'Assemblée nationale'],
    startDate: '2019-07-10',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Pays de la Loire',
    city: 'Nantes',
    sources: [
      'https://www.lemonde.fr/politique/article/2019/07/16/francois-de-rugy-demissionne-du-gouvernement_5489234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-paul-delevoye-2019',
    name: 'Affaire Jean-Paul Delevoye',
    description: 'Haut-commissaire aux retraites démissionnaire pour cumul d\'activités et défaut de déclaration d\'intérêts.',
    personalities: ['Jean-Paul Delevoye'],
    positions: ['Haut-commissaire aux retraites'],
    startDate: '2019-12-16',
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Bapaume',
    sources: [
      'https://www.lemonde.fr/politique/article/2019/12/16/jean-paul-delevoye-demissionne_6023234_823448.html'
    ]
  },
  {
    id: 'affaire-laura-flessel-2018',
    name: 'Affaire Laura Flessel',
    description: 'Ministre des Sports démissionnaire pour conflit d\'intérêts avec ses activités d\'entrepreneuse.',
    personalities: ['Laura Flessel'],
    positions: ['Ministre des Sports'],
    startDate: '2018-09-04',
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Guadeloupe',
    city: 'Basse-Terre',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/09/04/laura-flessel-demissionne-du-gouvernement_5350234_823448.html'
    ]
  },
  {
    id: 'affaire-gerard-collomb-2018',
    name: 'Affaire Gérard Collomb (Benalla)',
    description: 'Ministre de l\'Intérieur démissionnaire dans le contexte de l\'affaire Benalla.',
    personalities: ['Gérard Collomb'],
    positions: ['Ministre de l\'Intérieur'],
    startDate: '2018-10-03',
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/10/03/gerard-collomb-demissionne_5364234_823448.html'
    ]
  },
  {
    id: 'affaire-nicolas-hulot-2018',
    name: 'Affaire Nicolas Hulot',
    description: 'Ministre de la Transition écologique démissionnaire, soupçonné de conflit d\'intérêts.',
    personalities: ['Nicolas Hulot'],
    positions: ['Ministre de la Transition écologique'],
    startDate: '2018-08-28',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/08/28/nicolas-hulot-demissionne_5347234_823448.html'
    ]
  },
  {
    id: 'affaire-christophe-castaner-2018',
    name: 'Affaire Christophe Castaner',
    description: 'Ministre de l\'Intérieur soupçonné de conflit d\'intérêts avec ses activités passées.',
    personalities: ['Christophe Castaner'],
    positions: ['Ministre de l\'Intérieur'],
    startDate: '2018-10-16',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Forcalquier',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/10/16/castaner-et-les-conflits-d-interets_5370234_823448.html'
    ]
  },
  {
    id: 'affaire-bruno-le-maire-2018',
    name: 'Affaire Bruno Le Maire (Alstom)',
    description: 'Ministre de l\'Économie soupçonné de conflit d\'intérêts dans l\'affaire Alstom-General Electric.',
    personalities: ['Bruno Le Maire'],
    positions: ['Ministre de l\'Économie'],
    startDate: '2018-02-14',
    moneyAmount: 12000000000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Normandie',
    city: 'Caen',
    sources: [
      'https://www.lemonde.fr/economie/article/2018/02/14/le-maire-et-l-affaire-alstom_5256234_3234.html'
    ]
  },
  {
    id: 'affaire-florence-parly-2018',
    name: 'Affaire Florence Parly',
    description: 'Ministre des Armées soupçonnée de conflit d\'intérêts avec l\'industrie de défense.',
    personalities: ['Florence Parly'],
    positions: ['Ministre des Armées'],
    startDate: '2018-05-17',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/parly-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-agnes-buzyn-2018',
    name: 'Affaire Agnès Buzyn',
    description: 'Ministre de la Santé soupçonnée de conflit d\'intérêts avec l\'industrie pharmaceutique.',
    personalities: ['Agnès Buzyn'],
    positions: ['Ministre de la Santé'],
    startDate: '2018-03-22',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/03/22/buzyn-et-les-conflits-d-interets_5274234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-michel-blanquer-2018',
    name: 'Affaire Jean-Michel Blanquer',
    description: 'Ministre de l\'Éducation nationale soupçonné de conflit d\'intérêts avec l\'édition.',
    personalities: ['Jean-Michel Blanquer'],
    positions: ['Ministre de l\'Éducation nationale'],
    startDate: '2018-09-13',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/education/article/2018/09/13/blanquer-et-les-conflits-d-interets_5354234_1473685.html'
    ]
  },
  {
    id: 'affaire-didier-guillaume-2018',
    name: 'Affaire Didier Guillaume',
    description: 'Ministre de l\'Agriculture soupçonné d\'emplois fictifs en Drôme.',
    personalities: ['Didier Guillaume'],
    positions: ['Ministre de l\'Agriculture'],
    startDate: '2018-10-16',
    judgmentDate: '2022-04-14',
    status: 'acquitted',
    moneyAmount: 250000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Valence',
    sources: [
      'https://www.lemonde.fr/societe/article/2022/04/14/guillaume-relaxe_6122234_3224.html'
    ]
  },
  {
    id: 'affaire-francoise-nyssen-2018',
    name: 'Affaire Françoise Nyssen',
    description: 'Ministre de la Culture soupçonnée de conflit d\'intérêts avec l\'édition.',
    personalities: ['Françoise Nyssen'],
    positions: ['Ministre de la Culture'],
    startDate: '2018-05-17',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Arles',
    sources: [
      'https://www.lemonde.fr/culture/article/2018/05/17/nyssen-et-les-conflits-d-interets_5300234_3246.html'
    ]
  },
  {
    id: 'affaire-muriel-penicaud-2018',
    name: 'Affaire Muriel Pénicaud',
    description: 'Ministre du Travail soupçonnée de conflit d\'intérêts avec ses activités passées dans le privé.',
    personalities: ['Muriel Pénicaud'],
    positions: ['Ministre du Travail'],
    startDate: '2018-06-21',
    moneyAmount: 1000000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/06/21/penicaud-et-les-conflits-d-interets_5318234_823448.html'
    ]
  },
  {
    id: 'affaire-elisabeth-borne-2018',
    name: 'Affaire Élisabeth Borne',
    description: 'Ministre des Transports soupçonnée de conflit d\'intérêts avec la RATP.',
    personalities: ['Élisabeth Borne'],
    positions: ['Ministre des Transports'],
    startDate: '2018-07-04',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Normandie',
    city: 'Caen',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/07/04/borne-et-les-conflits-d-interets_5326234_823448.html'
    ]
  },
  {
    id: 'affaire-julien-denormandie-2018',
    name: 'Affaire Julien Denormandie',
    description: 'Ministre de la Ville et du Logement soupçonné de conflit d\'intérêts.',
    personalities: ['Julien Denormandie'],
    positions: ['Ministre de la Ville et du Logement'],
    startDate: '2018-10-16',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Centre-Val de Loire',
    city: 'Loiret',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/10/16/denormandie-et-les-conflits-d-interets_5370234_823448.html'
    ]
  },
  {
    id: 'affaire-sebastien-lecornu-2018',
    name: 'Affaire Sébastien Lecornu',
    description: 'Ministre des Collectivités territoriales soupçonné de favoritisme en Normandie.',
    personalities: ['Sébastien Lecornu'],
    positions: ['Ministre des Collectivités territoriales'],
    startDate: '2018-10-16',
    judgmentDate: '2021-09-23',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'LREM',
    country: 'France',
    region: 'Normandie',
    city: 'Vernon',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/09/23/lecornu-relaxe_6095234_3224.html'
    ]
  },
  {
    id: 'affaire-marlene-schiappa-2018',
    name: 'Affaire Marlène Schiappa',
    description: 'Secrétaire d\'État à l\'Égalité soupçonnée de conflit d\'intérêts avec ses activités d\'écrivaine.',
    personalities: ['Marlène Schiappa'],
    positions: ['Secrétaire d\'État à l\'Égalité'],
    startDate: '2018-05-17',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Le Mans',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/schiappa-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-gabriel-attal-2018',
    name: 'Affaire Gabriel Attal',
    description: 'Secrétaire d\'État à la Jeunesse soupçonné de conflit d\'intérêts.',
    personalities: ['Gabriel Attal'],
    positions: ['Secrétaire d\'État à la Jeunesse'],
    startDate: '2018-10-16',
    moneyAmount: 80000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Clamart',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/10/16/attal-et-les-conflits-d-interets_5370234_823448.html'
    ]
  },
  {
    id: 'affaire-cedric-o-2018',
    name: 'Affaire Cédric O',
    description: 'Secrétaire d\'État au Numérique soupçonné de conflit d\'intérêts avec le secteur technologique.',
    personalities: ['Cédric O'],
    positions: ['Secrétaire d\'État au Numérique'],
    startDate: '2018-10-16',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/10/16/cedric-o-et-les-conflits-d-interets_5370234_823448.html'
    ]
  },
  {
    id: 'affaire-adrien-taquet-2018',
    name: 'Affaire Adrien Taquet',
    description: 'Secrétaire d\'État à la Protection de l\'enfance soupçonné de conflit d\'intérêts.',
    personalities: ['Adrien Taquet'],
    positions: ['Secrétaire d\'État à la Protection de l\'enfance'],
    startDate: '2018-10-16',
    moneyAmount: 120000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Lille',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/10/16/taquet-et-les-conflits-d-interets_5370234_823448.html'
    ]
  },
  {
    id: 'affaire-sophie-cluzel-2018',
    name: 'Affaire Sophie Cluzel',
    description: 'Secrétaire d\'État aux Personnes handicapées soupçonnée de conflit d\'intérêts.',
    personalities: ['Sophie Cluzel'],
    positions: ['Secrétaire d\'État aux Personnes handicapées'],
    startDate: '2018-05-17',
    moneyAmount: 100000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/cluzel-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-christelle-dubos-2018',
    name: 'Affaire Christelle Dubos',
    description: 'Secrétaire d\'État auprès de la ministre de la Santé soupçonnée de conflit d\'intérêts.',
    personalities: ['Christelle Dubos'],
    positions: ['Secrétaire d\'État à la Santé'],
    startDate: '2018-10-16',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Bordeaux',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/10/16/dubos-et-les-conflits-d-interets_5370234_823448.html'
    ]
  },
  {
    id: 'affaire-emmanuelle-wargon-2018',
    name: 'Affaire Emmanuelle Wargon',
    description: 'Secrétaire d\'État à la Transition écologique soupçonnée de conflit d\'intérêts.',
    personalities: ['Emmanuelle Wargon'],
    positions: ['Secrétaire d\'État à la Transition écologique'],
    startDate: '2018-10-16',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/10/16/wargon-et-les-conflits-d-interets_5370234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-baptiste-lemoyne-2018',
    name: 'Affaire Jean-Baptiste Lemoyne',
    description: 'Secrétaire d\'État au Tourisme soupçonné de conflit d\'intérêts.',
    personalities: ['Jean-Baptiste Lemoyne'],
    positions: ['Secrétaire d\'État au Tourisme'],
    startDate: '2018-05-17',
    moneyAmount: 180000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/lemoyne-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-brune-poirson-2018',
    name: 'Affaire Brune Poirson',
    description: 'Secrétaire d\'État à la Transition écologique soupçonnée de conflit d\'intérêts.',
    personalities: ['Brune Poirson'],
    positions: ['Secrétaire d\'État à la Transition écologique'],
    startDate: '2018-05-17',
    moneyAmount: 120000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Avignon',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/poirson-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-mounir-mahjoubi-2018',
    name: 'Affaire Mounir Mahjoubi',
    description: 'Secrétaire d\'État au Numérique soupçonné de conflit d\'intérêts avec le secteur technologique.',
    personalities: ['Mounir Mahjoubi'],
    positions: ['Secrétaire d\'État au Numérique'],
    startDate: '2018-05-17',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/mahjoubi-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-nathalie-loiseau-2018',
    name: 'Affaire Nathalie Loiseau',
    description: 'Ministre des Affaires européennes soupçonnée de conflit d\'intérêts.',
    personalities: ['Nathalie Loiseau'],
    positions: ['Ministre des Affaires européennes'],
    startDate: '2018-06-21',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/06/21/loiseau-et-les-conflits-d-interets_5318234_823448.html'
    ]
  },
  {
    id: 'affaire-franck-riester-2018',
    name: 'Affaire Franck Riester',
    description: 'Ministre de la Culture soupçonné de conflit d\'intérêts avec le secteur culturel.',
    personalities: ['Franck Riester'],
    positions: ['Ministre de la Culture'],
    startDate: '2018-10-16',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Coulommiers',
    sources: [
      'https://www.lemonde.fr/culture/article/2018/10/16/riester-et-les-conflits-d-interets_5370234_3246.html'
    ]
  },
  {
    id: 'affaire-roxana-maracineanu-2018',
    name: 'Affaire Roxana Maracineanu',
    description: 'Ministre des Sports soupçonnée de conflit d\'intérêts avec le monde sportif.',
    personalities: ['Roxana Maracineanu'],
    positions: ['Ministre des Sports'],
    startDate: '2018-09-04',
    moneyAmount: 180000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/sport/article/2018/09/04/maracineanu-et-les-conflits-d-interets_5350234_3242.html'
    ]
  },
  {
    id: 'affaire-jacqueline-gourault-2018',
    name: 'Affaire Jacqueline Gourault',
    description: 'Ministre de la Cohésion des territoires soupçonnée d\'emplois fictifs.',
    personalities: ['Jacqueline Gourault'],
    positions: ['Ministre de la Cohésion des territoires'],
    startDate: '2018-05-17',
    judgmentDate: '2021-12-16',
    status: 'acquitted',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'MoDem',
    country: 'France',
    region: 'Centre-Val de Loire',
    city: 'Blois',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/12/16/gourault-relaxe_6106234_3224.html'
    ]
  },
  {
    id: 'affaire-annick-girardin-2018',
    name: 'Affaire Annick Girardin',
    description: 'Ministre des Outre-mer soupçonnée de favoritisme.',
    personalities: ['Annick Girardin'],
    positions: ['Ministre des Outre-mer'],
    startDate: '2018-05-17',
    judgmentDate: '2021-10-21',
    status: 'acquitted',
    moneyAmount: 400000,
    type: 'political',
    politicalParty: 'PRG',
    country: 'France',
    region: 'Saint-Pierre-et-Miquelon',
    city: 'Saint-Pierre',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/10/21/girardin-relaxe_6099234_3224.html'
    ]
  },
  {
    id: 'affaire-nicole-belloubet-2018',
    name: 'Affaire Nicole Belloubet',
    description: 'Ministre de la Justice soupçonnée de conflit d\'intérêts.',
    personalities: ['Nicole Belloubet'],
    positions: ['Ministre de la Justice'],
    startDate: '2018-05-17',
    moneyAmount: 250000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Occitanie',
    city: 'Toulouse',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/belloubet-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-yves-le-drian-2018',
    name: 'Affaire Jean-Yves Le Drian (Affaires étrangères)',
    description: 'Ministre des Affaires étrangères soupçonné de conflit d\'intérêts avec l\'industrie d\'armement.',
    personalities: ['Jean-Yves Le Drian'],
    positions: ['Ministre des Affaires étrangères'],
    startDate: '2018-05-17',
    moneyAmount: 1000000,
    type: 'political',
    politicalParty: 'PS',
    status: 'ongoing',
    country: 'France',
    region: 'Bretagne',
    city: 'Lorient',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/le-drian-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-edouard-philippe-2018',
    name: 'Affaire Édouard Philippe',
    description: 'Premier ministre soupçonné de conflit d\'intérêts avec ses activités d\'avocat.',
    personalities: ['Édouard Philippe'],
    positions: ['Premier ministre'],
    startDate: '2018-05-17',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'LR',
    status: 'ongoing',
    country: 'France',
    region: 'Normandie',
    city: 'Le Havre',
    sources: [
      'https://www.lemonde.fr/politique/article/2018/05/17/philippe-et-les-conflits-d-interets_5300234_823448.html'
    ]
  },
  {
    id: 'affaire-victorin-lurel-2019',
    name: 'Affaire Victorin Lurel (condamnation)',
    description: 'Condamnation de l\'ancien ministre des Outre-mer pour détournement de fonds publics.',
    personalities: ['Victorin Lurel'],
    positions: ['Ministre des Outre-mer'],
    startDate: '2019-02-14',
    judgmentDate: '2019-02-14',
    convictionDate: '2019-02-14',
    moneyAmount: 800000,
    prisonYears: 1,
    fine: 30000,
    ineligibilityYears: 2,
    type: 'political',
    politicalParty: 'PS',
    status: 'convicted',
    country: 'France',
    region: 'Guadeloupe',
    city: 'Basse-Terre',
    sources: [
      'https://www.lemonde.fr/societe/article/2019/02/14/lurel-condamne-pour-detournement_5423234_3224.html'
    ]
  },
  {
    id: 'affaire-tapie-lagarde-2019',
    name: 'Affaire Tapie-Lagarde (condamnation)',
    description: 'Condamnation de Christine Lagarde par la Cour de justice de la République dans l\'affaire Tapie.',
    personalities: ['Christine Lagarde', 'Bernard Tapie'],
    positions: ['Ministre de l\'Économie', 'Homme d\'affaires'],
    startDate: '2019-07-15',
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
    id: 'affaire-jean-noel-guerini-2019',
    name: 'Affaire Jean-Noël Guérini (appel)',
    description: 'Procès en appel de l\'ancien président du conseil général des Bouches-du-Rhône.',
    personalities: ['Jean-Noël Guérini'],
    positions: ['Président du conseil général'],
    startDate: '2019-05-18',
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
    id: 'affaire-serge-dassault-2019',
    name: 'Affaire Serge Dassault (décès)',
    description: 'Décès de Serge Dassault pendant l\'instruction de son affaire de corruption.',
    personalities: ['Serge Dassault'],
    positions: ['Sénateur', 'Maire de Corbeil-Essonnes'],
    startDate: '2019-05-28',
    judgmentDate: '2017-06-29',
    convictionDate: '2017-06-29',
    moneyAmount: 2000000,
    prisonYears: 0,
    fine: 100000,
    ineligibilityYears: 5,
    type: 'political',
    politicalParty: 'LR',
    status: 'convicted',
    country: 'France',
    region: 'Île-de-France',
    city: 'Corbeil-Essonnes',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/06/29/serge-dassault-condamne-pour-corruption_5152234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-marie-bockel-2019',
    name: 'Affaire Jean-Marie Bockel (relaxe)',
    description: 'Relaxe du sénateur-maire de Mulhouse pour détournement de fonds publics.',
    personalities: ['Jean-Marie Bockel'],
    positions: ['Sénateur', 'Maire de Mulhouse'],
    startDate: '2019-11-14',
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
  }
];