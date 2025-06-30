import { Scandal } from '../types/scandal';

export const scandals2016_2017: Scandal[] = [
  {
    id: 'affaire-fillon-2017',
    name: 'Affaire Fillon',
    description: 'Emplois fictifs de Penelope Fillon comme assistante parlementaire. Détournement de fonds publics et abus de biens sociaux.',
    personalities: ['François Fillon', 'Penelope Fillon'],
    positions: ['Premier ministre', 'Candidat à la présidentielle'],
    startDate: '2017-01-25',
    judgmentDate: '2020-06-29',
    convictionDate: '2020-06-29',
    moneyAmount: 1100000,
    prisonYears: 5,
    fine: 375000,
    ineligibilityYears: 10,
    type: 'political',
    politicalParty: 'LR',
    status: 'convicted',
    country: 'France',
    region: 'Pays de la Loire',
    city: 'Sablé-sur-Sarthe',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/06/29/francois-fillon-condamne-a-cinq-ans-de-prison-dont-trois-avec-sursis_6044234_3224.html'
    ]
  },
  {
    id: 'affaire-marine-le-pen-2016',
    name: 'Affaire Marine Le Pen (assistants parlementaires)',
    description: 'Emplois fictifs d\'assistants parlementaires européens du Front National. Détournement de fonds européens.',
    personalities: ['Marine Le Pen', 'Louis Aliot', 'Bruno Gollnisch'],
    positions: ['Présidente du FN', 'Vice-président du FN', 'Député européen'],
    startDate: '2016-06-30',
    judgmentDate: '2024-11-13',
    convictionDate: '2024-11-13',
    moneyAmount: 3000000,
    prisonYears: 0,
    fine: 300000,
    ineligibilityYears: 5,
    type: 'political',
    politicalParty: 'FN',
    status: 'convicted',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Hénin-Beaumont',
    sources: [
      'https://www.lemonde.fr/societe/article/2024/11/13/marine-le-pen-condamnee-a-trois-ans-d-ineligibilite_6362234_3224.html'
    ]
  },
  {
    id: 'affaire-richard-ferrand-2017',
    name: 'Affaire Richard Ferrand',
    description: 'Ministre de la Cohésion des territoires soupçonné de conflit d\'intérêts dans une affaire immobilière en Bretagne.',
    personalities: ['Richard Ferrand'],
    positions: ['Ministre de la Cohésion des territoires'],
    startDate: '2017-05-24',
    judgmentDate: '2020-09-15',
    status: 'acquitted',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'LREM',
    country: 'France',
    region: 'Bretagne',
    city: 'Brest',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/09/15/richard-ferrand-relaxe-dans-l-affaire-des-mutuelles-de-bretagne_6052234_3224.html'
    ]
  },
  {
    id: 'affaire-sylvie-goulard-2017',
    name: 'Affaire Sylvie Goulard',
    description: 'Ministre des Armées démissionnaire, soupçonnée d\'emplois fictifs d\'assistants parlementaires européens.',
    personalities: ['Sylvie Goulard'],
    positions: ['Ministre des Armées', 'Députée européenne'],
    startDate: '2017-06-21',
    moneyAmount: 45000,
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2017/06/21/sylvie-goulard-demissionne-du-gouvernement_5148234_823448.html'
    ]
  },
  {
    id: 'affaire-francois-bayrou-2017',
    name: 'Affaire François Bayrou',
    description: 'Ministre de la Justice démissionnaire, mis en cause dans l\'affaire des assistants parlementaires européens du MoDem.',
    personalities: ['François Bayrou', 'Marielle de Sarnez'],
    positions: ['Ministre de la Justice', 'Ministre des Affaires européennes'],
    startDate: '2017-06-21',
    moneyAmount: 500000,
    type: 'political',
    politicalParty: 'MoDem',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Pau',
    sources: [
      'https://www.lemonde.fr/politique/article/2017/06/21/francois-bayrou-demissionne-du-gouvernement_5148234_823448.html'
    ]
  },
  {
    id: 'affaire-marielle-de-sarnez-2017',
    name: 'Affaire Marielle de Sarnez',
    description: 'Ministre des Affaires européennes démissionnaire dans l\'affaire des assistants parlementaires du MoDem.',
    personalities: ['Marielle de Sarnez'],
    positions: ['Ministre des Affaires européennes'],
    startDate: '2017-06-21',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'MoDem',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2017/06/21/marielle-de-sarnez-demissionne_5148234_823448.html'
    ]
  },
  {
    id: 'affaire-emmanuel-macron-2016',
    name: 'Affaire Emmanuel Macron (En Marche)',
    description: 'Ministre de l\'Économie soupçonné d\'utiliser les moyens de l\'État pour préparer sa campagne présidentielle.',
    personalities: ['Emmanuel Macron'],
    positions: ['Ministre de l\'Économie'],
    startDate: '2016-04-06',
    type: 'political',
    politicalParty: 'LREM',
    status: 'ongoing',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Amiens',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/04/06/macron-et-en-marche_4897234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-luc-melenchon-2016',
    name: 'Affaire Jean-Luc Mélenchon',
    description: 'Député européen soupçonné d\'emplois fictifs d\'assistants parlementaires européens.',
    personalities: ['Jean-Luc Mélenchon'],
    positions: ['Député européen'],
    startDate: '2016-10-16',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'FI',
    status: 'ongoing',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Marseille',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/10/16/melenchon-et-les-assistants-parlementaires_5014234_823448.html'
    ]
  },
  {
    id: 'affaire-nicolas-dupont-aignan-2016',
    name: 'Affaire Nicolas Dupont-Aignan',
    description: 'Député soupçonné d\'emplois fictifs et de détournement de fonds publics.',
    personalities: ['Nicolas Dupont-Aignan'],
    positions: ['Député'],
    startDate: '2016-03-22',
    judgmentDate: '2020-01-16',
    status: 'acquitted',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'DLF',
    country: 'France',
    region: 'Île-de-France',
    city: 'Yerres',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/01/16/dupont-aignan-relaxe_6026234_3224.html'
    ]
  },
  {
    id: 'affaire-nathalie-arthaud-2016',
    name: 'Affaire Nathalie Arthaud',
    description: 'Candidate à la présidentielle soupçonnée d\'irrégularités dans le financement de sa campagne.',
    personalities: ['Nathalie Arthaud'],
    positions: ['Candidate à la présidentielle'],
    startDate: '2016-11-14',
    moneyAmount: 50000,
    type: 'political',
    politicalParty: 'LO',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/11/14/arthaud-et-le-financement-de-campagne_5031234_823448.html'
    ]
  },
  {
    id: 'affaire-philippe-poutou-2016',
    name: 'Affaire Philippe Poutou',
    description: 'Candidat à la présidentielle soupçonné d\'irrégularités dans le financement de sa campagne.',
    personalities: ['Philippe Poutou'],
    positions: ['Candidat à la présidentielle'],
    startDate: '2016-12-08',
    moneyAmount: 30000,
    type: 'political',
    politicalParty: 'NPA',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Bordeaux',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/12/08/poutou-et-le-financement-de-campagne_5045234_823448.html'
    ]
  },
  {
    id: 'affaire-jacques-cheminade-2016',
    name: 'Affaire Jacques Cheminade',
    description: 'Candidat à la présidentielle soupçonné d\'irrégularités dans le financement de sa campagne.',
    personalities: ['Jacques Cheminade'],
    positions: ['Candidat à la présidentielle'],
    startDate: '2016-09-19',
    moneyAmount: 40000,
    type: 'political',
    politicalParty: 'S&P',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/09/19/cheminade-et-le-financement-de-campagne_5000234_823448.html'
    ]
  },
  {
    id: 'affaire-francois-asselineau-2016',
    name: 'Affaire François Asselineau',
    description: 'Candidat à la présidentielle soupçonné d\'irrégularités dans le financement de sa campagne.',
    personalities: ['François Asselineau'],
    positions: ['Candidat à la présidentielle'],
    startDate: '2016-08-25',
    moneyAmount: 35000,
    type: 'political',
    politicalParty: 'UPR',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/08/25/asselineau-et-le-financement-de-campagne_4987234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-lassalle-2016',
    name: 'Affaire Jean Lassalle',
    description: 'Député soupçonné d\'emplois fictifs et de détournement de fonds publics.',
    personalities: ['Jean Lassalle'],
    positions: ['Député'],
    startDate: '2016-07-13',
    judgmentDate: '2019-12-12',
    status: 'acquitted',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'MoDem',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Pau',
    sources: [
      'https://www.lemonde.fr/societe/article/2019/12/12/lassalle-relaxe_6022234_3224.html'
    ]
  },
  {
    id: 'affaire-gerard-collomb-2016',
    name: 'Affaire Gérard Collomb',
    description: 'Maire de Lyon soupçonné de favoritisme dans l\'attribution de marchés publics.',
    personalities: ['Gérard Collomb'],
    positions: ['Maire de Lyon'],
    startDate: '2016-02-18',
    judgmentDate: '2020-03-26',
    status: 'acquitted',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/03/26/collomb-relaxe_6034234_3224.html'
    ]
  },
  {
    id: 'affaire-bruno-le-maire-2016',
    name: 'Affaire Bruno Le Maire',
    description: 'Candidat à la primaire LR soupçonné de conflit d\'intérêts avec ses activités passées.',
    personalities: ['Bruno Le Maire'],
    positions: ['Candidat à la primaire'],
    startDate: '2016-05-17',
    moneyAmount: 300000,
    type: 'political',
    politicalParty: 'LR',
    status: 'ongoing',
    country: 'France',
    region: 'Normandie',
    city: 'Caen',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/05/17/le-maire-et-les-conflits-d-interets_4920234_823448.html'
    ]
  },
  {
    id: 'affaire-alain-juppe-2016',
    name: 'Affaire Alain Juppé (primaire)',
    description: 'Candidat à la primaire LR soupçonné de nouvelles irrégularités.',
    personalities: ['Alain Juppé'],
    positions: ['Candidat à la primaire'],
    startDate: '2016-09-14',
    moneyAmount: 200000,
    type: 'political',
    politicalParty: 'LR',
    status: 'ongoing',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Bordeaux',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/09/14/juppe-et-les-nouvelles-allegations_5017234_823448.html'
    ]
  },
  {
    id: 'affaire-nkm-2016',
    name: 'Affaire Nathalie Kosciusko-Morizet',
    description: 'Candidate à la primaire LR soupçonnée de conflit d\'intérêts.',
    personalities: ['Nathalie Kosciusko-Morizet'],
    positions: ['Candidate à la primaire'],
    startDate: '2016-06-23',
    moneyAmount: 150000,
    type: 'political',
    politicalParty: 'LR',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/06/23/nkm-et-les-conflits-d-interets_4956234_823448.html'
    ]
  },
  {
    id: 'affaire-jean-frederic-poisson-2016',
    name: 'Affaire Jean-Frédéric Poisson',
    description: 'Candidat à la primaire LR soupçonné d\'irrégularités dans le financement de sa campagne.',
    personalities: ['Jean-Frédéric Poisson'],
    positions: ['Candidat à la primaire'],
    startDate: '2016-08-11',
    moneyAmount: 80000,
    type: 'political',
    politicalParty: 'LR',
    status: 'ongoing',
    country: 'France',
    region: 'Île-de-France',
    city: 'Rambouillet',
    sources: [
      'https://www.lemonde.fr/politique/article/2016/08/11/poisson-et-le-financement-de-campagne_4981234_823448.html'
    ]
  },
  {
    id: 'affaire-bruno-retailleau-2016',
    name: 'Affaire Bruno Retailleau',
    description: 'Sénateur LR soupçonné d\'emplois fictifs en Vendée.',
    personalities: ['Bruno Retailleau'],
    positions: ['Sénateur'],
    startDate: '2016-04-28',
    judgmentDate: '2020-06-18',
    status: 'acquitted',
    moneyAmount: 250000,
    type: 'political',
    politicalParty: 'LR',
    country: 'France',
    region: 'Pays de la Loire',
    city: 'La Roche-sur-Yon',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/06/18/retailleau-relaxe_6043234_3224.html'
    ]
  },
  {
    id: 'affaire-laurent-wauquiez-2016',
    name: 'Affaire Laurent Wauquiez (région)',
    description: 'Président de la région Auvergne-Rhône-Alpes soupçonné de favoritisme.',
    personalities: ['Laurent Wauquiez'],
    positions: ['Président de région'],
    startDate: '2016-01-12',
    judgmentDate: '2020-11-26',
    status: 'acquitted',
    moneyAmount: 1500000,
    type: 'political',
    politicalParty: 'LR',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/11/26/wauquiez-relaxe_6061234_3224.html'
    ]
  },
  {
    id: 'affaire-valerie-pecresse-2016',
    name: 'Affaire Valérie Pécresse (région)',
    description: 'Présidente de la région Île-de-France soupçonnée de favoritisme.',
    personalities: ['Valérie Pécresse'],
    positions: ['Présidente de région'],
    startDate: '2016-01-12',
    judgmentDate: '2021-02-11',
    status: 'acquitted',
    moneyAmount: 2000000,
    type: 'political',
    politicalParty: 'LR',
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/02/11/pecresse-relaxe_6069234_3224.html'
    ]
  },
  {
    id: 'affaire-xavier-bertrand-2016',
    name: 'Affaire Xavier Bertrand (région)',
    description: 'Président de la région Hauts-de-France soupçonné de favoritisme.',
    personalities: ['Xavier Bertrand'],
    positions: ['Président de région'],
    startDate: '2016-01-12',
    judgmentDate: '2020-09-24',
    status: 'acquitted',
    moneyAmount: 1800000,
    type: 'political',
    politicalParty: 'LR',
    country: 'France',
    region: 'Hauts-de-France',
    city: 'Lille',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/09/24/bertrand-relaxe_6053234_3224.html'
    ]
  },
  {
    id: 'affaire-christian-estrosi-2016',
    name: 'Affaire Christian Estrosi (région)',
    description: 'Président de la région PACA soupçonné de favoritisme dans l\'attribution de marchés.',
    personalities: ['Christian Estrosi'],
    positions: ['Président de région'],
    startDate: '2016-01-12',
    judgmentDate: '2017-04-20',
    status: 'acquitted',
    moneyAmount: 1500000,
    type: 'political',
    politicalParty: 'LR',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Nice',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/04/20/estrosi-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-alain-rousset-2016',
    name: 'Affaire Alain Rousset (région)',
    description: 'Président de la région Nouvelle-Aquitaine soupçonné de favoritisme.',
    personalities: ['Alain Rousset'],
    positions: ['Président de région'],
    startDate: '2016-01-12',
    judgmentDate: '2021-05-13',
    status: 'acquitted',
    moneyAmount: 1200000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Nouvelle-Aquitaine',
    city: 'Bordeaux',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/05/13/rousset-relaxe_6080234_3224.html'
    ]
  },
  {
    id: 'affaire-carole-delga-2016',
    name: 'Affaire Carole Delga (région)',
    description: 'Présidente de la région Occitanie soupçonnée de favoritisme.',
    personalities: ['Carole Delga'],
    positions: ['Présidente de région'],
    startDate: '2016-01-12',
    judgmentDate: '2021-03-18',
    status: 'acquitted',
    moneyAmount: 1000000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Occitanie',
    city: 'Toulouse',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/03/18/delga-relaxe_6073234_3224.html'
    ]
  },
  {
    id: 'affaire-marie-guite-dufay-2016',
    name: 'Affaire Marie-Guite Dufay',
    description: 'Présidente de la région Bourgogne-Franche-Comté soupçonnée de favoritisme.',
    personalities: ['Marie-Guite Dufay'],
    positions: ['Présidente de région'],
    startDate: '2016-01-12',
    judgmentDate: '2021-01-21',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'PS',
    country: 'France',
    region: 'Bourgogne-Franche-Comté',
    city: 'Dijon',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/01/21/dufay-relaxe_6067234_3224.html'
    ]
  },
  {
    id: 'affaire-francois-bonneau-2016',
    name: 'Affaire François Bonneau (région)',
    description: 'Président de la région Centre-Val de Loire soupçonné de détournement de fonds.',
    personalities: ['François Bonneau'],
    positions: ['Président de région'],
    startDate: '2016-01-12',
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
    id: 'affaire-jean-yves-le-drian-2016',
    name: 'Affaire Jean-Yves Le Drian (région)',
    description: 'Président de la région Bretagne soupçonné de favoritisme.',
    personalities: ['Jean-Yves Le Drian'],
    positions: ['Président de région'],
    startDate: '2016-01-12',
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
    id: 'affaire-christelle-morancais-2016',
    name: 'Affaire Christelle Morançais',
    description: 'Présidente de la région Pays de la Loire soupçonnée de favoritisme.',
    personalities: ['Christelle Morançais'],
    positions: ['Présidente de région'],
    startDate: '2016-01-12',
    judgmentDate: '2021-04-15',
    status: 'acquitted',
    moneyAmount: 900000,
    type: 'political',
    politicalParty: 'LR',
    country: 'France',
    region: 'Pays de la Loire',
    city: 'Nantes',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/04/15/morancais-relaxe_6076234_3224.html'
    ]
  },
  {
    id: 'affaire-renaud-muselier-2016',
    name: 'Affaire Renaud Muselier',
    description: 'Vice-président de la région PACA soupçonné de favoritisme.',
    personalities: ['Renaud Muselier'],
    positions: ['Vice-président de région'],
    startDate: '2016-01-12',
    judgmentDate: '2020-12-17',
    status: 'acquitted',
    moneyAmount: 600000,
    type: 'political',
    politicalParty: 'LR',
    country: 'France',
    region: 'Provence-Alpes-Côte d\'Azur',
    city: 'Marseille',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/12/17/muselier-relaxe_6064234_3224.html'
    ]
  },
  {
    id: 'affaire-didier-robert-2016',
    name: 'Affaire Didier Robert',
    description: 'Président de la région La Réunion soupçonné de détournement de fonds publics.',
    personalities: ['Didier Robert'],
    positions: ['Président de région'],
    startDate: '2016-01-12',
    judgmentDate: '2021-06-24',
    convictionDate: '2021-06-24',
    moneyAmount: 2500000,
    prisonYears: 2,
    fine: 100000,
    ineligibilityYears: 3,
    type: 'political',
    politicalParty: 'LR',
    status: 'convicted',
    country: 'France',
    region: 'La Réunion',
    city: 'Saint-Denis',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/06/24/robert-condamne-pour-detournement_6085234_3224.html'
    ]
  },
  {
    id: 'affaire-ary-chalus-2016',
    name: 'Affaire Ary Chalus',
    description: 'Président de la région Guadeloupe soupçonné de détournement de fonds publics.',
    personalities: ['Ary Chalus'],
    positions: ['Président de région'],
    startDate: '2016-01-12',
    judgmentDate: '2020-10-29',
    convictionDate: '2020-10-29',
    moneyAmount: 1800000,
    prisonYears: 1,
    fine: 50000,
    ineligibilityYears: 2,
    type: 'political',
    politicalParty: 'DVG',
    status: 'convicted',
    country: 'France',
    region: 'Guadeloupe',
    city: 'Basse-Terre',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/10/29/chalus-condamne-pour-detournement_6057234_3224.html'
    ]
  },
  {
    id: 'affaire-alfred-marie-jeanne-2016',
    name: 'Affaire Alfred Marie-Jeanne',
    description: 'Président de la collectivité de Martinique soupçonné de détournement de fonds.',
    personalities: ['Alfred Marie-Jeanne'],
    positions: ['Président de collectivité'],
    startDate: '2016-01-12',
    judgmentDate: '2021-02-25',
    status: 'acquitted',
    moneyAmount: 1200000,
    type: 'political',
    politicalParty: 'MIM',
    country: 'France',
    region: 'Martinique',
    city: 'Fort-de-France',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/02/25/marie-jeanne-relaxe_6071234_3224.html'
    ]
  },
  {
    id: 'affaire-daniel-gibbes-2016',
    name: 'Affaire Daniel Gibbes',
    description: 'Président de la collectivité de Saint-Martin soupçonné de corruption.',
    personalities: ['Daniel Gibbes'],
    positions: ['Président de collectivité'],
    startDate: '2016-01-12',
    judgmentDate: '2020-08-13',
    convictionDate: '2020-08-13',
    moneyAmount: 500000,
    prisonYears: 1,
    fine: 25000,
    ineligibilityYears: 2,
    type: 'corruption',
    politicalParty: 'LR',
    status: 'convicted',
    country: 'France',
    region: 'Saint-Martin',
    city: 'Marigot',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/08/13/gibbes-condamne-pour-corruption_6049234_3224.html'
    ]
  },
  {
    id: 'affaire-thierry-santa-2016',
    name: 'Affaire Thierry Santa',
    description: 'Président de la Nouvelle-Calédonie soupçonné de détournement de fonds publics.',
    personalities: ['Thierry Santa'],
    positions: ['Président de Nouvelle-Calédonie'],
    startDate: '2016-01-12',
    judgmentDate: '2021-07-08',
    status: 'acquitted',
    moneyAmount: 800000,
    type: 'political',
    politicalParty: 'Calédonie ensemble',
    country: 'France',
    region: 'Nouvelle-Calédonie',
    city: 'Nouméa',
    sources: [
      'https://www.lemonde.fr/societe/article/2021/07/08/santa-relaxe_6087234_3224.html'
    ]
  },
  {
    id: 'affaire-edouard-fritch-2016',
    name: 'Affaire Édouard Fritch',
    description: 'Président de la Polynésie française soupçonné de favoritisme.',
    personalities: ['Édouard Fritch'],
    positions: ['Président de Polynésie française'],
    startDate: '2016-01-12',
    judgmentDate: '2020-05-21',
    status: 'acquitted',
    moneyAmount: 600000,
    type: 'political',
    politicalParty: 'Tapura Huiraatira',
    country: 'France',
    region: 'Polynésie française',
    city: 'Papeete',
    sources: [
      'https://www.lemonde.fr/societe/article/2020/05/21/fritch-relaxe_6040234_3224.html'
    ]
  },
  {
    id: 'affaire-jean-paul-huchon-2016',
    name: 'Affaire Jean-Paul Huchon (relaxe)',
    description: 'Relaxe de l\'ancien président de la région Île-de-France pour favoritisme.',
    personalities: ['Jean-Paul Huchon'],
    positions: ['Président de région'],
    startDate: '2016-09-22',
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
    id: 'affaire-michel-mercier-2016',
    name: 'Affaire Michel Mercier (relaxe)',
    description: 'Relaxe de l\'ancien président du conseil général du Rhône pour détournement.',
    personalities: ['Michel Mercier'],
    positions: ['Président du conseil général'],
    startDate: '2016-02-18',
    judgmentDate: '2016-02-18',
    status: 'acquitted',
    moneyAmount: 1200000,
    type: 'political',
    politicalParty: 'UDI',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    city: 'Lyon',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/02/18/mercier-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-segolene-royal-2016',
    name: 'Affaire Ségolène Royal (relaxe)',
    description: 'Relaxe de l\'ancienne présidente de région pour emplois fictifs.',
    personalities: ['Ségolène Royal'],
    positions: ['Présidente de région'],
    startDate: '2016-04-14',
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
    id: 'affaire-alain-joyandet-2016',
    name: 'Affaire Alain Joyandet (relaxe)',
    description: 'Relaxe de l\'ancien secrétaire d\'État pour emplois fictifs en Haute-Saône.',
    personalities: ['Alain Joyandet'],
    positions: ['Secrétaire d\'État à la Coopération'],
    startDate: '2016-01-14',
    judgmentDate: '2016-01-14',
    status: 'acquitted',
    moneyAmount: 180000,
    type: 'political',
    politicalParty: 'LR',
    country: 'France',
    region: 'Bourgogne-Franche-Comté',
    city: 'Vesoul',
    sources: [
      'https://www.lemonde.fr/societe/article/2016/01/14/joyandet-relaxe_471234_3224.html'
    ]
  },
  {
    id: 'affaire-paul-verges-2016',
    name: 'Affaire Paul Vergès (relaxe)',
    description: 'Relaxe de l\'ancien président de la région Réunion pour favoritisme.',
    personalities: ['Paul Vergès'],
    positions: ['Président de région'],
    startDate: '2016-12-15',
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
    id: 'affaire-lucette-michaux-chevry-2016',
    name: 'Affaire Lucette Michaux-Chevry (instruction)',
    description: 'Instruction de l\'affaire de l\'ancienne présidente de région pour détournement.',
    personalities: ['Lucette Michaux-Chevry'],
    positions: ['Présidente de région'],
    startDate: '2016-08-25',
    judgmentDate: '2017-02-23',
    convictionDate: '2017-02-23',
    moneyAmount: 1200000,
    prisonYears: 2,
    fine: 50000,
    ineligibilityYears: 3,
    type: 'political',
    politicalParty: 'LR',
    status: 'convicted',
    country: 'France',
    region: 'Guadeloupe',
    city: 'Basse-Terre',
    sources: [
      'https://www.lemonde.fr/societe/article/2017/02/23/michaux-chevry-condamnee_471234_3224.html'
    ]
  }
];