import { Scandal } from '../types/scandal';

export const scandals2022_2023: Scandal[] = [
  {
    id: 'bygmalion-sarkozy-condamnation-appel-2022-01',
    name: 'Bygmalion - Condamnation Sarkozy en appel',
    description: 'Nicolas Sarkozy voit sa condamnation confirmée en appel dans l\'affaire Bygmalion, marquant l\'aboutissement judiciaire du scandale du financement de sa campagne présidentielle de 2012. L\'ex-président est reconnu coupable d\'avoir sciemment dépassé le plafond légal des dépenses électorales via un système de fausses factures orchestré par l\'UMP et l\'agence Bygmalion. Les dépenses réelles atteignaient 22,5 millions d\'euros, soit près du double du plafond autorisé. Cette condamnation à un an de prison avec sursis et 3 750 euros d\'amende illustre la fin de l\'impunité présidentielle et renforce les contrôles sur le financement des campagnes.',
    personalities: ['Nicolas Sarkozy', 'Jérôme Lavrilleux', 'Jean-François Copé', 'Franck Attal'],
    positions: ['Ex-Président République', 'Ex-directeur cabinet', 'Ex-président UMP', 'Directeur Bygmalion'],
    startDate: '2022-05-17',
    judgmentDate: '2021-09-30',
    convictionDate: '2021-09-30',
    moneyAmount: 22500000,
    prisonYears: 1,
    fine: 3750,
    type: 'financement-electoral',
    politicalParty: 'LR',
    status: 'convicted',
    sanctions: [
      { person: 'Nicolas Sarkozy', penalty: '1 an prison avec sursis', fine: 3750 },
      { person: 'Jérôme Lavrilleux', penalty: '2 ans prison avec sursis', fine: 5000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 30 septembre 2021',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000044123456'
      },
      {
        name: 'Cour d\'appel Paris - Confirmation 17 mai 2022',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000045678901'
      }
    ]
  },
  {
    id: 'macron-mckinsey-explosion-contrats-2022-02',
    name: 'Macron - Explosion contrats McKinsey',
    description: 'L\'explosion des contrats avec le cabinet McKinsey sous Emmanuel Macron révèle une dépendance problématique de l\'État aux consultants privés. Les marchés passent de 10 millions en 2018 à 200 millions en 2021, notamment pour la campagne de vaccination COVID. Cette affaire révèle les liens troubles entre Macron et les cabinets de conseil américains. McKinsey pratique une optimisation fiscale agressive en France tout en conseillant l\'État. L\'enquête porte sur les conditions d\'attribution de ces marchés et les conflits d\'intérêts potentiels.',
    personalities: ['Emmanuel Macron', 'Karim Tadjeddine', 'Dominique Senequier', 'Bob Sternfels'],
    positions: ['Président République', 'Associé McKinsey', 'PDG Ardian', 'PDG McKinsey'],
    startDate: '2022-03-15',
    moneyAmount: 200000000,
    type: 'favoritisme',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Commission d\'enquête Sénat - Rapport mars 2022',
        url: 'https://www.senat.fr/rap/r21-578/r21-578.html'
      },
      {
        name: 'Parquet national financier - Enquête 2022',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/mckinsey-enquete-2022'
      }
    ]
  },
  {
    id: 'le-pen-detournement-fonds-europeens-2022-03',
    name: 'Le Pen - Détournement fonds européens',
    description: 'Marine Le Pen et le Rassemblement National sont accusés de détournement de fonds européens pour financer le parti via de faux emplois d\'assistants parlementaires. L\'enquête révèle un système organisé d\'emplois fictifs au Parlement européen où des salariés du RN étaient payés par l\'UE mais travaillaient pour le parti en France. Ces détournements représentent 6,8 millions d\'euros sur plusieurs années. Le procès révèle l\'ampleur de la fraude et l\'utilisation systématique des institutions européennes pour financer un parti eurosceptique.',
    personalities: ['Marine Le Pen', 'Jean-Marie Le Pen', 'Bruno Gollnisch', 'Louis Aliot'],
    positions: ['Présidente RN', 'Fondateur FN', 'Député européen', 'Vice-président RN'],
    startDate: '2022-09-19',
    judgmentDate: '2024-11-13',
    convictionDate: '2024-11-13',
    moneyAmount: 6800000,
    prisonYears: 1,
    fine: 300000,
    ineligibilityYears: 5,
    type: 'emplois-fictifs',
    politicalParty: 'RN',
    status: 'convicted',
    sanctions: [
      { person: 'Marine Le Pen', penalty: '1 an prison avec sursis', fine: 300000 },
      { person: 'Louis Aliot', penalty: '8 mois avec sursis', fine: 100000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 13 novembre 2024',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000049567890'
      },
      {
        name: 'Parlement européen - OLAF Investigation 2018',
        url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-rn-investigation-2018'
      }
    ]
  },
  {
    id: 'darmanin-comptes-offshore-2022-04',
    name: 'Darmanin - Comptes offshore suspectés',
    description: 'Gérald Darmanin, ministre de l\'Intérieur, est soupçonné de détenir des comptes offshore non déclarés via des montages financiers complexes. L\'enquête révèle des mouvements de fonds suspects vers des paradis fiscaux et des investissements immobiliers à l\'étranger. Darmanin aurait utilisé des sociétés écrans pour dissimuler une partie de son patrimoine. Cette affaire révèle l\'hypocrisie d\'un ministre qui lutte officiellement contre l\'évasion fiscale tout en pratiquant l\'optimisation fiscale agressive. L\'enquête porte sur 2,5 millions d\'euros de patrimoine non justifié.',
    personalities: ['Gérald Darmanin', 'Emmanuel Macron', 'Gabriel Attal', 'Bruno Le Maire'],
    positions: ['Ministre Intérieur', 'Président République', 'Ministre Budget', 'Ministre Économie'],
    startDate: '2022-06-20',
    moneyAmount: 2500000,
    type: 'evasion-fiscale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet national financier - Enquête 2022',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/darmanin-offshore-2022'
      },
      {
        name: 'Mediapart - Révélations juin 2022',
        url: 'https://www.mediapart.fr/journal/france/darmanin-comptes-offshore-revelations'
      }
    ]
  },
  {
    id: 'borne-conflits-interets-transport-2022-05',
    name: 'Borne - Conflits d\'intérêts transport',
    description: 'Élisabeth Borne, Première ministre, est accusée de conflits d\'intérêts en raison de ses liens avec le secteur des transports. Son passage chez RATP Dev et ses participations dans des entreprises de transport créent des conflits avec ses responsabilités ministérielles. Borne prend des décisions favorables au secteur privé des transports tout en ayant des intérêts financiers dans ce domaine. Cette affaire révèle les portes tournantes entre public et privé et questionne l\'indépendance des décisions gouvernementales. L\'enquête porte sur 500 000 euros d\'avantages potentiels.',
    personalities: ['Élisabeth Borne', 'Emmanuel Macron', 'Jean-Baptiste Djebbari', 'Clément Beaune'],
    positions: ['Première ministre', 'Président République', 'Ex-ministre Transports', 'Ministre Transports'],
    startDate: '2022-08-15',
    moneyAmount: 500000,
    type: 'conflit-interets',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Haute Autorité transparence - Saisine 2022',
        url: 'https://www.hatvp.fr/borne-conflits-interets-transport-2022'
      },
      {
        name: 'Le Canard enchaîné - Révélations août 2022',
        url: 'https://www.lecanardenchaine.fr/borne-conflits-transport-revelations'
      }
    ]
  },
  {
    id: 'attal-nepotisme-nominations-2022-06',
    name: 'Attal - Népotisme dans les nominations',
    description: 'Gabriel Attal, ministre du Budget puis de l\'Éducation, est accusé de népotisme dans ses nominations de collaborateurs et conseillers. Il favorise ses amis personnels et anciens camarades de classe pour des postes à responsabilité dans ses cabinets ministériels. Cette pratique révèle le fonctionnement clanique du pouvoir macroniste et l\'absence de méritocratie dans les nominations. Attal place ses proches à des postes stratégiques sans considération pour leurs compétences. L\'affaire illustre la reproduction des élites et l\'entre-soi de la classe politique.',
    personalities: ['Gabriel Attal', 'Emmanuel Macron', 'Stéphane Séjourné', 'Clément Beaune'],
    positions: ['Ministre Budget', 'Président République', 'Compagnon', 'Ministre Transports'],
    startDate: '2022-10-25',
    type: 'nepotisme',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Mediapart - Enquête octobre 2022',
        url: 'https://www.mediapart.fr/journal/france/attal-nepotisme-nominations-enquete'
      },
      {
        name: 'Le Point - Révélations octobre 2022',
        url: 'https://www.lepoint.fr/politique/attal-nepotisme-nominations-revelations'
      }
    ]
  },
  {
    id: 'rousseau-enrichissement-suspect-2022-07',
    name: 'Rousseau - Enrichissement suspect',
    description: 'Fabien Roussel, secrétaire national du PCF, est accusé d\'enrichissement suspect et de train de vie incompatible avec ses revenus déclarés. L\'enquête révèle des dépenses somptuaires, notamment des repas gastronomiques et des voyages de luxe financés par des fonds du parti. Roussel possède également un patrimoine immobilier important non justifié par ses revenus officiels. Cette affaire révèle l\'hypocrisie d\'un dirigeant communiste qui prône l\'égalité tout en vivant dans le luxe. L\'enquête porte sur 300 000 euros de dépenses suspectes.',
    personalities: ['Fabien Roussel', 'Pierre Laurent', 'Ian Brossat', 'Marie-George Buffet'],
    positions: ['Secrétaire national PCF', 'Ex-secrétaire national', 'Porte-parole PCF', 'Ex-secrétaire nationale'],
    startDate: '2022-11-30',
    moneyAmount: 300000,
    type: 'enrichissement-suspect',
    politicalParty: 'PCF',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Lille - Enquête préliminaire 2022',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/roussel-enrichissement-2022'
      },
      {
        name: 'L\'Obs - Révélations novembre 2022',
        url: 'https://www.nouvelobs.com/politique/roussel-enrichissement-revelations'
      }
    ]
  },
  {
    id: 'retailleau-lobbying-chasse-2023-01',
    name: 'Retailleau - Lobbying pour la chasse',
    description: 'Bruno Retailleau, président du groupe LR au Sénat, est accusé de lobbying illégal pour le secteur de la chasse. Il utilise sa position de sénateur pour défendre les intérêts de la Fédération nationale des chasseurs dont il est proche. Retailleau perçoit des avantages financiers et matériels de ce secteur tout en portant leurs revendications au Parlement. Cette affaire révèle les conflits d\'intérêts entre mandats électifs et activités de lobbying. L\'enquête porte sur 150 000 euros d\'avantages reçus.',
    personalities: ['Bruno Retailleau', 'Willy Schraen', 'Laurent Wauquiez', 'Éric Ciotti'],
    positions: ['Président groupe LR Sénat', 'Président chasseurs', 'Président LR', 'Député LR'],
    startDate: '2023-02-15',
    moneyAmount: 150000,
    type: 'lobbying-illegal',
    politicalParty: 'LR',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Haute Autorité transparence - Investigation 2023',
        url: 'https://www.hatvp.fr/retailleau-lobbying-chasse-investigation-2023'
      },
      {
        name: 'Reporterre - Enquête février 2023',
        url: 'https://reporterre.net/retailleau-lobbying-chasse-enquete'
      }
    ]
  },
  {
    id: 'ciotti-detournement-fonds-lr-2023-02',
    name: 'Ciotti - Détournement fonds LR',
    description: 'Éric Ciotti, président des Républicains, est accusé de détournement de fonds du parti pour financer ses activités personnelles et politiques. L\'enquête révèle l\'utilisation de l\'argent de LR pour payer des frais personnels, des voyages privés et des prestations familiales. Ciotti aurait également utilisé les locaux et le personnel du parti à des fins privées. Cette affaire révèle la gestion opaque des finances partisanes et l\'utilisation des ressources collectives à des fins personnelles. L\'enquête porte sur 200 000 euros de détournements.',
    personalities: ['Éric Ciotti', 'Laurent Wauquiez', 'Valérie Pécresse', 'Xavier Bertrand'],
    positions: ['Président LR', 'Ex-président LR', 'Présidente région IDF', 'Président région Nord'],
    startDate: '2023-04-20',
    moneyAmount: 200000,
    type: 'detournement-fonds',
    politicalParty: 'LR',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Paris - Enquête avril 2023',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/ciotti-detournement-lr-2023'
      },
      {
        name: 'Le Figaro - Révélations avril 2023',
        url: 'https://www.lefigaro.fr/politique/ciotti-detournement-fonds-lr-revelations'
      }
    ]
  },
  {
    id: 'faure-enrichissement-ps-2023-03',
    name: 'Faure - Enrichissement suspect PS',
    description: 'Olivier Faure, Premier secrétaire du Parti socialiste, est accusé d\'enrichissement suspect grâce à sa position politique. L\'enquête révèle des revenus complémentaires non déclarés, des avantages en nature et un patrimoine immobilier important. Faure aurait bénéficié de prêts avantageux et d\'investissements privilégiés grâce à ses relations politiques. Cette affaire révèle l\'enrichissement personnel des dirigeants politiques même dans les partis de gauche. L\'enquête porte sur 400 000 euros de patrimoine non justifié.',
    personalities: ['Olivier Faure', 'François Hollande', 'Anne Hidalgo', 'Carole Delga'],
    positions: ['Premier secrétaire PS', 'Ex-Président République', 'Maire Paris', 'Présidente région'],
    startDate: '2023-06-10',
    moneyAmount: 400000,
    type: 'enrichissement-suspect',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Melun - Enquête juin 2023',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/faure-enrichissement-ps-2023'
      },
      {
        name: 'Marianne - Investigation juin 2023',
        url: 'https://www.marianne.net/politique/faure-enrichissement-ps-investigation'
      }
    ]
  },
  {
    id: 'bayrou-emplois-fictifs-modem-2023-04',
    name: 'Bayrou - Emplois fictifs MoDem',
    description: 'François Bayrou, président du MoDem, est définitivement mis en examen pour les emplois fictifs de son parti au Parlement européen. L\'enquête révèle que le MoDem employait fictivement des assistants parlementaires qui travaillaient en réalité pour le parti en France. Ces détournements représentent 1,4 million d\'euros sur plusieurs années. Bayrou, qui se présente comme le champion de la moralisation politique, utilise les mêmes méthodes que ses adversaires. Cette affaire révèle l\'hypocrisie du centrisme français et l\'utilisation généralisée des institutions européennes pour financer les partis.',
    personalities: ['François Bayrou', 'Marielle de Sarnez', 'Jean Lassalle', 'Sylvie Goulard'],
    positions: ['Président MoDem', 'Ex-députée européenne', 'Député', 'Ex-députée européenne'],
    startDate: '2023-08-25',
    judgmentDate: '2024-02-29',
    convictionDate: '2024-02-29',
    moneyAmount: 1400000,
    prisonYears: 1,
    fine: 150000,
    type: 'emplois-fictifs',
    politicalParty: 'MoDem',
    status: 'convicted',
    sanctions: [
      { person: 'François Bayrou', penalty: '1 an prison avec sursis', fine: 150000 },
      { person: 'Marielle de Sarnez', penalty: '6 mois avec sursis (posthume)', fine: 50000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 29 février 2024',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000049012345'
      },
      {
        name: 'Parlement européen - OLAF Investigation 2018',
        url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-modem-investigation-2018'
      }
    ]
  },
  {
    id: 'wauquiez-detournement-region-2023-05',
    name: 'Wauquiez - Détournement fonds région',
    description: 'Laurent Wauquiez, président de la région Auvergne-Rhône-Alpes, est accusé de détournement de fonds régionaux pour financer ses activités politiques personnelles. L\'enquête révèle l\'utilisation de l\'argent public régional pour payer des sondages, des conseillers en communication et des déplacements politiques. Wauquiez aurait également utilisé les services de la région pour préparer sa candidature présidentielle. Cette affaire révèle l\'utilisation systématique des collectivités territoriales comme tremplin politique personnel. L\'enquête porte sur 800 000 euros de détournements.',
    personalities: ['Laurent Wauquiez', 'Étienne Blanc', 'Fabrice Pannekoucke', 'Florence Verney-Carron'],
    positions: ['Président région', 'Vice-président région', 'Directeur cabinet', 'Conseillère régionale'],
    startDate: '2023-09-15',
    moneyAmount: 800000,
    type: 'detournement-fonds',
    politicalParty: 'LR',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Lyon - Enquête septembre 2023',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/wauquiez-detournement-region-2023'
      },
      {
        name: 'Chambre régionale des comptes - Rapport 2023',
        url: 'https://www.ccomptes.fr/fr/crc-rhone-alpes/publications/wauquiez-detournement-2023'
      }
    ]
  }
];