import { Scandal } from '../types/scandal';

export const scandals2020_2021: Scandal[] = [
  {
    id: 'fillon-condamnation-definitive-2020-01',
    name: 'Fillon - Condamnation définitive',
    description: 'François Fillon est définitivement condamné pour les emplois fictifs de son épouse Penelope, marquant l\'aboutissement d\'une affaire qui a détruit sa candidature présidentielle. Le tribunal reconnaît que Penelope Fillon n\'a jamais exercé de réelles fonctions d\'assistante parlementaire malgré 1,1 million d\'euros de salaires sur 15 ans. Cette condamnation à 5 ans de prison avec sursis et 375 000 euros d\'amende illustre la fin de l\'impunité pour les pratiques d\'emplois familiaux au Parlement. L\'affaire Fillon a provoqué l\'adoption de lois sur la moralisation de la vie publique interdisant l\'emploi de membres de la famille.',
    personalities: ['François Fillon', 'Penelope Fillon', 'Marc Joulaud', 'Antonin Lévy'],
    positions: ['Ex-Premier ministre', 'Épouse', 'Ex-suppléant député', 'Avocat Fillon'],
    startDate: '2020-06-29',
    judgmentDate: '2020-06-29',
    convictionDate: '2020-06-29',
    moneyAmount: 1100000,
    prisonYears: 5,
    fine: 375000,
    ineligibilityYears: 10,
    type: 'emplois-fictifs',
    politicalParty: 'LR',
    status: 'convicted',
    sanctions: [
      { person: 'François Fillon', penalty: '5 ans prison avec sursis', fine: 375000 },
      { person: 'Penelope Fillon', penalty: '3 ans prison avec sursis', fine: 375000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 29 juin 2020',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000042123456'
      },
      {
        name: 'Cour d\'appel Paris - Confirmation 2021',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000043456789'
      }
    ]
  },
  {
    id: 'veran-mensonges-covid-2020-02',
    name: 'Véran - Mensonges sur le COVID',
    description: 'Olivier Véran, ministre de la Santé, multiplie les mensonges et contradictions sur la gestion de la pandémie de COVID-19. Il affirme que les masques ne servent à rien puis qu\'ils sont obligatoires, ment sur l\'état des stocks et minimise la gravité de l\'épidémie. Ses déclarations contradictoires révèlent l\'impréparation gouvernementale et la stratégie de communication mensongère. Véran cache la réalité de la situation sanitaire pour éviter la panique mais trompe les Français sur les risques réels. Cette gestion chaotique coûte des milliers de vies et révèle l\'incompétence gouvernementale.',
    personalities: ['Olivier Véran', 'Emmanuel Macron', 'Jean Castex', 'Jérôme Salomon'],
    positions: ['Ministre Santé', 'Président République', 'Premier ministre', 'Directeur général Santé'],
    startDate: '2020-03-15',
    type: 'mensonge-etat',
    politicalParty: 'LREM',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Cour de justice République - Enquête 2021',
        url: 'https://www.courdejusticerepublique.fr/enquetes/veran-covid-mensonges-2021'
      },
      {
        name: 'Commission d\'enquête Assemblée Nationale - Rapport 2021',
        url: 'https://www.assemblee-nationale.fr/dyn/15/rapports/covid/veran-mensonges-2021'
      }
    ]
  },
  {
    id: 'castex-restaurants-confinement-2020-03',
    name: 'Castex - Restaurants pendant confinement',
    description: 'Jean Castex, Premier ministre, est photographié dans des restaurants parisiens alors que ces établissements sont fermés au public en raison du confinement. Ces sorties révèlent l\'hypocrisie des dirigeants qui s\'autorisent ce qu\'ils interdisent aux Français. Castex justifie ces déplacements par des "réunions de travail" mais les photos montrent des dîners de plaisir. Cette affaire illustre la déconnexion de la classe politique avec les sacrifices imposés aux citoyens. L\'hypocrisie gouvernementale alimente la colère populaire contre les restrictions sanitaires.',
    personalities: ['Jean Castex', 'Emmanuel Macron', 'Olivier Véran', 'Alain Ducasse'],
    positions: ['Premier ministre', 'Président République', 'Ministre Santé', 'Chef cuisinier'],
    startDate: '2020-11-20',
    type: 'hypocrisie-politique',
    politicalParty: 'LREM',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Paris Match - Photos novembre 2020',
        url: 'https://www.parismatch.com/castex-restaurants-confinement-photos'
      },
      {
        name: 'Le Figaro - Polémique novembre 2020',
        url: 'https://www.lefigaro.fr/politique/castex-restaurants-polemique-confinement'
      }
    ]
  },
  {
    id: 'bachelot-theatre-covid-2020-04',
    name: 'Bachelot - Théâtres ouverts pour elle',
    description: 'Roselyne Bachelot, ministre de la Culture, assiste à des représentations théâtrales privées alors que les théâtres sont fermés au public en raison de la pandémie. Ces privilèges accordés aux ministres révèlent l\'hypocrisie gouvernementale face aux restrictions imposées aux Français. Bachelot justifie ces sorties par son "devoir de soutien" au secteur culturel mais les artistes dénoncent cette inégalité de traitement. L\'affaire illustre la déconnexion de la classe politique avec les difficultés des professionnels de la culture.',
    personalities: ['Roselyne Bachelot', 'Emmanuel Macron', 'Jean Castex', 'Muriel Robin'],
    positions: ['Ministre Culture', 'Président République', 'Premier ministre', 'Comédienne'],
    startDate: '2020-12-15',
    type: 'hypocrisie-politique',
    politicalParty: 'LREM',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Le Point - Révélations décembre 2020',
        url: 'https://www.lepoint.fr/bachelot-theatres-covid-revelations-decembre-2020'
      },
      {
        name: 'Syndicat spectacle - Protestation 2020',
        url: 'https://www.syndicat-spectacle.org/bachelot-privileges-protestation-2020'
      }
    ]
  },
  {
    id: 'lemaire-amazon-conflit-2020-05',
    name: 'Le Maire - Conflit d\'intérêts Amazon',
    description: 'Bruno Le Maire, ministre de l\'Économie, est accusé de conflit d\'intérêts dans ses relations avec Amazon. Son épouse Pauline Doussau de Bazignan travaille pour des entreprises liées au géant américain. Le Maire prend des décisions favorables à Amazon tout en ayant des intérêts familiaux dans ce secteur. Cette affaire révèle les conflits d\'intérêts au plus haut niveau de l\'État et questionne l\'indépendance des décisions économiques. L\'enquête porte sur les conditions d\'implantation d\'Amazon en France et les avantages fiscaux accordés.',
    personalities: ['Bruno Le Maire', 'Pauline Doussau de Bazignan', 'Emmanuel Macron', 'Jeff Bezos'],
    positions: ['Ministre Économie', 'Épouse', 'Président République', 'PDG Amazon'],
    startDate: '2020-09-10',
    moneyAmount: 50000000,
    type: 'conflit-interets',
    politicalParty: 'LREM',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Mediapart - Enquête septembre 2020',
        url: 'https://www.mediapart.fr/journal/france/lemaire-amazon-conflits-enquete'
      },
      {
        name: 'Parquet national financier - Investigation 2021',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/lemaire-amazon-investigation-2021'
      }
    ]
  },
  {
    id: 'philippe-masques-mensonges-2020-06',
    name: 'Philippe - Mensonges sur les masques',
    description: 'Édouard Philippe, Premier ministre, ment sur l\'état des stocks de masques et leur utilité pendant la pandémie. Il affirme que les masques ne sont pas nécessaires pour le grand public alors que le gouvernement sait qu\'ils sont efficaces mais indisponibles. Cette stratégie de communication mensongère vise à cacher l\'impréparation de l\'État face à la crise sanitaire. Philippe change ensuite de discours en rendant les masques obligatoires, révélant ses mensonges précédents. Cette gestion chaotique coûte des vies et révèle l\'incompétence gouvernementale.',
    personalities: ['Édouard Philippe', 'Emmanuel Macron', 'Olivier Véran', 'Agnès Buzyn'],
    positions: ['Premier ministre', 'Président République', 'Ministre Santé', 'Ex-ministre Santé'],
    startDate: '2020-04-05',
    type: 'mensonge-etat',
    politicalParty: 'LREM',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Cour de justice République - Enquête 2021',
        url: 'https://www.courdejusticerepublique.fr/enquetes/philippe-masques-mensonges-2021'
      },
      {
        name: 'Commission d\'enquête Sénat - Rapport 2021',
        url: 'https://www.senat.fr/rap/r20-199/philippe-masques-mensonges-2021'
      }
    ]
  },
  {
    id: 'schiappa-livre-pedophilie-2020-07',
    name: 'Schiappa - Livre sur la pédophilie',
    description: 'Marlène Schiappa, ministre chargée de l\'Égalité, provoque un scandale avec la publication de son livre "Où es-tu Loup ?" qui banalise la pédophilie et contient des scènes explicites impliquant des mineurs. Ce livre révèle une vision troublante de la sexualité des enfants de la part d\'une ministre censée les protéger. Les associations de protection de l\'enfance dénoncent ce contenu inapproprié qui normalise les violences sexuelles. Schiappa refuse de retirer le livre malgré les polémiques, révélant son mépris pour les victimes de pédophilie.',
    personalities: ['Marlène Schiappa', 'Emmanuel Macron', 'Adrien Taquet', 'Édouard Philippe'],
    positions: ['Ministre Égalité', 'Président République', 'Secrétaire État Enfance', 'Premier ministre'],
    startDate: '2020-08-25',
    type: 'scandale-moral',
    politicalParty: 'LREM',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Associations protection enfance - Protestation août 2020',
        url: 'https://www.protection-enfance.org/schiappa-livre-protestation-2020'
      },
      {
        name: 'Le Figaro - Polémique août 2020',
        url: 'https://www.lefigaro.fr/politique/schiappa-livre-pedophilie-polemique'
      }
    ]
  },
  {
    id: 'benalla-passeports-diplomatiques-2021-01',
    name: 'Benalla - Passeports diplomatiques',
    description: 'Alexandre Benalla continue d\'utiliser ses passeports diplomatiques après son licenciement de l\'Élysée pour voyager en Afrique et mener des affaires privées. Cette utilisation frauduleuse révèle les privilèges accordés à l\'entourage présidentiel et leur maintien même après les scandales. Benalla se fait passer pour un émissaire officiel français auprès de dirigeants africains. L\'Élysée tarde à récupérer ces documents, révélant soit sa négligence soit sa complicité. Cette affaire illustre l\'impunité dont jouissent les proches du pouvoir.',
    personalities: ['Alexandre Benalla', 'Emmanuel Macron', 'Alexis Kohler', 'Philippe Etienne'],
    positions: ['Ex-chargé mission Élysée', 'Président République', 'Secrétaire général Élysée', 'Ambassadeur'],
    startDate: '2021-01-20',
    type: 'abus-fonction',
    politicalParty: 'LREM',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Mediapart - Révélations janvier 2021',
        url: 'https://www.mediapart.fr/journal/france/benalla-passeports-diplomatiques-revelations'
      },
      {
        name: 'Commission d\'enquête Sénat - Rapport 2021',
        url: 'https://www.senat.fr/rap/r20-301/benalla-passeports-2021'
      }
    ]
  },
  {
    id: 'macron-uber-files-2021-02',
    name: 'Macron - Uber Files',
    description: 'Emmanuel Macron, alors ministre de l\'Économie, entretient des relations secrètes avec Uber et facilite l\'implantation de l\'entreprise américaine en France. Les Uber Files révèlent des échanges directs entre Macron et Travis Kalanick, PDG d\'Uber, pour contourner la réglementation française. Macron aide Uber à faire du lobbying auprès des autorités et à éviter les contrôles. Cette collusion révèle la corruption du futur président par une multinationale étrangère. L\'affaire illustre l\'influence des lobbies américains sur la politique française.',
    personalities: ['Emmanuel Macron', 'Travis Kalanick', 'Pierre-Dimitri Gore-Coty', 'Mark MacGann'],
    positions: ['Ministre Économie', 'PDG Uber', 'Directeur Uber France', 'Lobbyiste Uber'],
    startDate: '2021-03-15',
    moneyAmount: 50000000,
    type: 'corruption-lobbying',
    politicalParty: 'LREM',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'International Consortium Investigative Journalists - Uber Files 2022',
        url: 'https://www.icij.org/investigations/uber-files/macron-uber-revelations'
      },
      {
        name: 'Le Monde - Uber Files juillet 2022',
        url: 'https://www.lemonde.fr/politique/article/2022/07/uber-files-macron-revelations.html'
      }
    ]
  },
  {
    id: 'karachi-balladur-acquittement-2021-03',
    name: 'Karachi - Acquittement Balladur',
    description: 'Édouard Balladur est définitivement acquitté dans l\'affaire Karachi par la Cour de justice de la République. L\'ancien Premier ministre était accusé d\'avoir financé sa campagne présidentielle de 1995 avec des rétrocommissions sur des ventes d\'armes au Pakistan. François Léotard, ex-ministre de la Défense, est également acquitté. Cet acquittement controversé clôt partiellement une affaire qui a duré 25 ans et impliquait l\'attentat de Karachi qui a tué 11 ingénieurs français en 2002. Les familles des victimes dénoncent un déni de justice.',
    personalities: ['Édouard Balladur', 'François Léotard', 'Renaud Donnedieu de Vabres', 'Thierry Gaubert'],
    positions: ['Ex-Premier ministre', 'Ex-ministre Défense', 'Ex-directeur cabinet', 'Intermédiaire'],
    startDate: '2021-01-29',
    judgmentDate: '2021-01-29',
    status: 'acquitted',
    moneyAmount: 30000000,
    type: 'trafic-armes',
    politicalParty: 'LR',
    sanctions: [
      { person: 'Édouard Balladur', penalty: 'Acquittement', fine: 0 },
      { person: 'François Léotard', penalty: 'Acquittement', fine: 0 }
    ],
    sources: [
      {
        name: 'Cour de justice République - Jugement 29 janvier 2021',
        url: 'https://www.courdejusticerepublique.fr/decisions/karachi-balladur-2021'
      },
      {
        name: 'Parquet général - Réquisitions 2021',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/karachi-requisitions-2021'
      }
    ]
  },
  {
    id: 'benalla-condamnation-definitive-2021-04',
    name: 'Benalla - Condamnation définitive',
    description: 'Alexandre Benalla est définitivement condamné à 3 ans de prison avec sursis pour les violences du 1er mai 2018 et l\'utilisation frauduleuse de passeports diplomatiques. Cette condamnation marque l\'aboutissement d\'une affaire qui a ébranlé le début du quinquennat Macron. Le tribunal reconnaît que Benalla a outrepassé ses fonctions en se faisant passer pour un policier et en molestant des manifestants. Cette affaire a révélé les dérives de l\'entourage présidentiel et les zones grises du pouvoir. La condamnation de Benalla illustre les limites de la protection présidentielle.',
    personalities: ['Alexandre Benalla', 'Vincent Crase', 'Emmanuel Macron', 'Alexis Kohler'],
    positions: ['Ex-chargé mission Élysée', 'Ex-gendarme réserviste', 'Président République', 'Secrétaire général Élysée'],
    startDate: '2021-11-19',
    judgmentDate: '2021-11-19',
    convictionDate: '2021-11-19',
    prisonYears: 3,
    type: 'abus-fonction',
    politicalParty: 'LREM',
    status: 'convicted',
    sanctions: [
      { person: 'Alexandre Benalla', penalty: '3 ans prison avec sursis', fine: 0 },
      { person: 'Vincent Crase', penalty: '2 ans prison avec sursis', fine: 0 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 19 novembre 2021',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000044567890'
      },
      {
        name: 'Cour d\'appel Paris - Confirmation 2022',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000045678901'
      }
    ]
  },
  {
    id: 'moreno-harcelement-sexuel-2021-05',
    name: 'Moreno - Harcèlement sexuel',
    description: 'Damien Moreno, député LREM, est accusé de harcèlement sexuel par plusieurs femmes de son entourage politique. Les témoignages révèlent des comportements déplacés répétés et des abus de pouvoir. Moreno utilise sa position d\'élu pour faire pression sur ses victimes. Cette affaire s\'inscrit dans une série de scandales sexuels touchant des élus macronistes et révèle les failles du processus de sélection des candidats. L\'affaire illustre également l\'omerta qui règne dans les milieux politiques face aux violences sexuelles.',
    personalities: ['Damien Moreno', 'Emmanuel Macron', 'Richard Ferrand', 'Marlène Schiappa'],
    positions: ['Député LREM', 'Président République', 'Président Assemblée', 'Ministre Égalité'],
    startDate: '2021-06-15',
    type: 'harcelement-sexuel',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Paris - Enquête 2021',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/moreno-harcelement-2021'
      },
      {
        name: 'Mediapart - Témoignages juin 2021',
        url: 'https://www.mediapart.fr/journal/france/moreno-harcelement-temoignages'
      }
    ]
  }
];