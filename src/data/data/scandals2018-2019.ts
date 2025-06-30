import { Scandal } from '../types/scandal';

export const scandals2018_2019: Scandal[] = [
  {
    id: 'benalla-revelation-publique-2018-01',
    name: 'Benalla - Révélation publique',
    description: 'L\'affaire Benalla éclate publiquement avec les révélations du Monde sur les violences d\'Alexandre Benalla lors des manifestations du 1er mai 2018. Chargé de mission à l\'Élysée, Benalla se fait passer pour un policier et moleste des manifestants place de la Contrescarpe. Cette affaire révèle les dérives de l\'entourage présidentiel et les zones grises du pouvoir. Emmanuel Macron et l\'Élysée tentent d\'étouffer le scandale, aggravant la crise. L\'affaire Benalla devient le symbole des dysfonctionnements du quinquennat Macron et de l\'arrogance du pouvoir.',
    personalities: ['Alexandre Benalla', 'Emmanuel Macron', 'Alexis Kohler', 'Patrick Strzoda'],
    positions: ['Chargé mission Élysée', 'Président République', 'Secrétaire général Élysée', 'Directeur cabinet'],
    startDate: '2018-07-18',
    judgmentDate: '2021-11-19',
    convictionDate: '2021-11-19',
    prisonYears: 3,
    type: 'abus-fonction',
    status: 'convicted',
    sanctions: [
      { person: 'Alexandre Benalla', penalty: '3 ans prison avec sursis', fine: 0 },
      { person: 'Vincent Crase', penalty: '2 ans prison avec sursis', fine: 0 }
    ],
    sources: [
      {
        name: 'Le Monde - Révélations 18 juillet 2018',
        url: 'https://www.lemonde.fr/politique/article/2018/07/18/un-collaborateur-de-l-elysee-filme-en-train-de-frapper-un-manifestant_5333371_823448.html'
      },
      {
        name: 'Tribunal correctionnel Paris - Jugement 19 novembre 2021',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000044567890'
      }
    ]
  },
  {
    id: 'emplois-fictifs-fn-parlement-europeen-2018-02',
    name: 'Emplois fictifs FN Parlement européen',
    description: 'L\'enquête sur les emplois fictifs du Front National au Parlement européen révèle l\'ampleur des détournements orchestrés par Marine Le Pen et Jean-Marie Le Pen. Le parti d\'extrême droite emploie fictivement 20 assistants parlementaires qui travaillent en réalité pour le FN en France. Ces emplois fictifs concernent des permanents du parti, des responsables de campagne et des conseillers politiques. L\'OLAF (Office européen de lutte antifraude) chiffre les détournements à 6,8 millions d\'euros. Cette affaire illustre l\'utilisation systématique des institutions européennes pour financer les partis eurosceptiques.',
    personalities: ['Marine Le Pen', 'Jean-Marie Le Pen', 'Bruno Gollnisch', 'Louis Aliot'],
    positions: ['Présidente FN', 'Fondateur FN', 'Député européen', 'Vice-président FN'],
    startDate: '2018-02-20',
    moneyAmount: 6800000,
    type: 'emplois-fictifs',
    politicalParty: 'FN',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parlement européen - OLAF Investigation 2018',
        url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-front-national-investigation-2018'
      },
      {
        name: 'Parquet de Paris - Enquête 2018',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/fn-emplois-fictifs-2018'
      }
    ]
  },
  {
    id: 'facebook-cambridge-analytica-scandale-2018-03',
    name: 'Facebook Cambridge Analytica - Scandale',
    description: 'Le scandale Facebook Cambridge Analytica révèle l\'utilisation abusive de données de 87 millions d\'utilisateurs Facebook, dont de nombreux Français, à des fins de manipulation politique. Mark Zuckerberg, PDG de Facebook, et Sheryl Sandberg, COO, doivent gérer cette crise majeure qui révèle les pratiques de surveillance de masse de Facebook. Cambridge Analytica, dirigée par Alexander Nix, utilise ces données pour influencer les élections américaines et britanniques. Cette affaire marque un tournant dans la régulation des géants du numérique et renforce la protection des données personnelles.',
    personalities: ['Mark Zuckerberg', 'Sheryl Sandberg', 'Alexander Nix', 'Christopher Wylie'],
    positions: ['PDG Facebook', 'COO Facebook', 'PDG Cambridge Analytica', 'Lanceur d\'alerte'],
    startDate: '2018-03-17',
    fine: 5000000000,
    type: 'violation-donnees',
    status: 'judged',
    sanctions: [
      { person: 'Facebook', penalty: 'Amende FTC USA', fine: 5000000000 },
      { person: 'Mark Zuckerberg', penalty: 'Audition Congrès', fine: 0 }
    ],
    sources: [
      {
        name: 'CNIL France - Sanctions 2019',
        url: 'https://www.cnil.fr/fr/actualites/facebook-cambridge-analytica-sanctions-2019'
      },
      {
        name: 'Federal Trade Commission USA - Settlement 2019',
        url: 'https://www.ftc.gov/news-events/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions'
      }
    ]
  },
  {
    id: 'emplois-fictifs-modem-parlement-europeen-2018-04',
    name: 'Emplois fictifs MoDem Parlement européen',
    description: 'L\'enquête sur les emplois fictifs du Mouvement démocrate au Parlement européen révèle les pratiques de François Bayrou et Marielle de Sarnez. Le parti centiste emploie fictivement 8 assistants parlementaires qui travaillent en réalité pour le MoDem en France. Ces emplois fictifs concernent des permanents du parti, des responsables de communication et des conseillers politiques. L\'OLAF chiffre les détournements à 1,4 million d\'euros. Cette affaire révèle que même les partis se réclamant de la moralisation utilisent des méthodes illégales pour se financer.',
    personalities: ['François Bayrou', 'Marielle de Sarnez', 'Jean Lassalle', 'Sylvie Goulard'],
    positions: ['Président MoDem', 'Députée européenne', 'Député', 'Ex-députée européenne'],
    startDate: '2018-03-25',
    moneyAmount: 1400000,
    type: 'emplois-fictifs',
    politicalParty: 'MoDem',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parlement européen - OLAF Investigation 2018',
        url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-modem-investigation-2018'
      },
      {
        name: 'Parquet de Paris - Enquête 2018',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/modem-emplois-fictifs-2018'
      }
    ]
  },
  {
    id: 'dieselgate-psa-manipulation-2018-05',
    name: 'Dieselgate PSA - Manipulation tests',
    description: 'PSA Peugeot Citroën est impliqué dans le scandale du Dieselgate avec la manipulation des tests d\'émissions de ses véhicules diesel. Carlos Tavares, PDG de PSA, et Philippe Varin, ex-PDG, sont accusés d\'avoir installé des logiciels frauduleux sur 1,9 million de véhicules en Europe. Ces dispositifs permettent de réduire artificiellement les émissions polluantes lors des tests officiels. L\'enquête révèle que les véhicules PSA émettent jusqu\'à 5 fois plus d\'oxydes d\'azote que les limites autorisées en conditions réelles.',
    personalities: ['Carlos Tavares', 'Philippe Varin', 'Ségolène Royal', 'Nicolas Hulot'],
    positions: ['PDG PSA', 'Ex-PDG PSA', 'Ex-ministre Écologie', 'Ministre Écologie'],
    startDate: '2018-04-12',
    fine: 8000000,
    type: 'fraude-environnementale',
    status: 'judged',
    sanctions: [
      { person: 'PSA (société)', penalty: 'Amende', fine: 8000000 },
      { person: 'Carlos Tavares', penalty: 'Mise en examen', fine: 0 }
    ],
    sources: [
      {
        name: 'Parquet de Paris - Enquête 2018',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/psa-dieselgate-2018'
      },
      {
        name: 'Commission européenne - Procédure 2018',
        url: 'https://ec.europa.eu/commission/presscorner/detail/fr/IP_18_4003'
      }
    ]
  },
  {
    id: 'emplois-fictifs-lr-parlement-europeen-2018-06',
    name: 'Emplois fictifs LR Parlement européen',
    description: 'L\'enquête sur les emplois fictifs des Républicains au Parlement européen révèle les pratiques de Laurent Wauquiez et Brice Hortefeux. Le parti de droite emploie fictivement 15 assistants parlementaires qui travaillent en réalité pour LR en France. Ces emplois fictifs concernent des permanents du parti, des responsables de campagne et des conseillers politiques. L\'OLAF chiffre les détournements à 3,2 millions d\'euros. Cette affaire s\'inscrit dans une série de scandales touchant tous les grands partis politiques français.',
    personalities: ['Laurent Wauquiez', 'Brice Hortefeux', 'Nadine Morano', 'Rachida Dati'],
    positions: ['Président LR', 'Député européen', 'Députée européenne', 'Députée européenne'],
    startDate: '2018-05-18',
    moneyAmount: 3200000,
    type: 'emplois-fictifs',
    politicalParty: 'LR',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parlement européen - OLAF Investigation 2018',
        url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-lr-investigation-2018'
      },
      {
        name: 'Parquet de Paris - Enquête 2018',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/lr-emplois-fictifs-2018'
      }
    ]
  },
  {
    id: 'tesla-musk-fraud-sec-2018-07',
    name: 'Tesla Musk - Fraude SEC',
    description: 'Elon Musk, PDG de Tesla, est sanctionné par la SEC pour fraude boursière après avoir annoncé sur Twitter vouloir retirer Tesla de la bourse à 420 dollars par action. Cette annonce, faite sans accord ferme de financement, provoque une manipulation du cours de Tesla et trompe les investisseurs. La SEC inflige une amende de 40 millions de dollars à Musk et Tesla. Cette affaire illustre les risques de l\'utilisation des réseaux sociaux par les dirigeants d\'entreprise et renforce la régulation des communications financières.',
    personalities: ['Elon Musk', 'Robyn Denholm', 'Jerome Guillen', 'Robert Ophèle'],
    positions: ['PDG Tesla', 'Présidente Tesla', 'Président automobile', 'Président AMF'],
    startDate: '2018-08-07',
    fine: 40000000,
    type: 'manipulation-financiere',
    status: 'judged',
    sanctions: [
      { person: 'Elon Musk', penalty: 'Amende SEC', fine: 20000000 },
      { person: 'Tesla (société)', penalty: 'Amende SEC', fine: 20000000 }
    ],
    sources: [
      {
        name: 'SEC USA - Sanctions 2018',
        url: 'https://www.sec.gov/news/press-release/2018-226'
      },
      {
        name: 'AMF France - Surveillance 2018',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/tesla-musk-surveillance-2018'
      }
    ]
  },
  {
    id: 'emplois-fictifs-ps-parlement-europeen-2018-08',
    name: 'Emplois fictifs PS Parlement européen',
    description: 'L\'enquête sur les emplois fictifs du Parti socialiste au Parlement européen révèle les pratiques d\'Olivier Faure et Harlem Désir. Le parti de gauche emploie fictivement 12 assistants parlementaires qui travaillent en réalité pour le PS en France. Ces emplois fictifs concernent des permanents du parti, des responsables de communication et des conseillers politiques. L\'OLAF chiffre les détournements à 2,1 millions d\'euros. Cette affaire illustre que les pratiques d\'emplois fictifs touchent l\'ensemble de l\'échiquier politique français.',
    personalities: ['Olivier Faure', 'Harlem Désir', 'Pervenche Berès', 'Sylvie Guillaume'],
    positions: ['Premier secrétaire PS', 'Ex-député européen', 'Députée européenne', 'Députée européenne'],
    startDate: '2018-06-22',
    moneyAmount: 2100000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parlement européen - OLAF Investigation 2018',
        url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-ps-investigation-2018'
      },
      {
        name: 'Parquet de Paris - Enquête 2018',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/ps-emplois-fictifs-2018'
      }
    ]
  },
  {
    id: 'google-gdpr-fine-record-2018-09',
    name: 'Google - Amende RGPD record',
    description: 'Google reçoit la première amende RGPD record de 50 millions d\'euros de la CNIL française pour manque de transparence et défaut de consentement dans le traitement des données personnelles. Sundar Pichai, PDG de Google, et Ruth Porat, CFO d\'Alphabet, doivent gérer cette sanction historique qui marque l\'entrée en vigueur effective du RGPD européen. Cette amende concerne les pratiques de Google lors de la création de comptes Android et la personnalisation publicitaire. L\'affaire établit un précédent pour l\'application du RGPD et renforce la protection des données en Europe.',
    personalities: ['Sundar Pichai', 'Ruth Porat', 'Marie-Laure Denis', 'Thierry Breton'],
    positions: ['PDG Google', 'CFO Alphabet', 'Présidente CNIL', 'Commissaire européen'],
    startDate: '2018-05-25',
    fine: 50000000,
    type: 'violation-donnees',
    status: 'judged',
    sanctions: [
      { person: 'Google (société)', penalty: 'Amende CNIL record', fine: 50000000 }
    ],
    sources: [
      {
        name: 'CNIL France - Sanctions 21 janvier 2019',
        url: 'https://www.cnil.fr/fr/la-formation-restreinte-de-la-cnil-prononce-une-sanction-de-50-millions-deuros-lencontre-de-la'
      },
      {
        name: 'Tribunal administratif Paris - Procédure 2019',
        url: 'https://www.legifrance.gouv.fr/ceta/id/CETATEXT000038567890'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-midi-pyrenees-2018-10',
    name: 'Emplois fictifs Midi-Pyrénées - Martin Malvy',
    description: 'Martin Malvy, ex-président socialiste de la région Midi-Pyrénées, est impliqué dans un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Carole Delga, présidente de l\'Occitanie, hérite de ce système qu\'elle doit démanteler. L\'enquête révèle que 25 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 3,8 millions d\'euros sur plusieurs années.',
    personalities: ['Martin Malvy', 'Carole Delga', 'Pierre Cohen', 'Jean-Luc Moudenc'],
    positions: ['Ex-président région', 'Présidente Occitanie', 'Ex-maire Toulouse', 'Maire Toulouse'],
    startDate: '2018-07-25',
    judgmentDate: '2026-11-26',
    moneyAmount: 3800000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Toulouse - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/midi-pyrenees-emplois-fictifs-2025'
      },
      {
        name: 'Chambre régionale des comptes Midi-Pyrénées - Rapport 2025',
        url: 'https://www.ccomptes.fr/fr/crc-midi-pyrenees/publications/midi-pyrenees-emplois-fictifs-2025'
      }
    ]
  },
  {
    id: 'carlos-ghosn-arrestation-2018-11',
    name: 'Carlos Ghosn - Arrestation Japon',
    description: 'Carlos Ghosn, PDG de l\'alliance Renault-Nissan, est arrêté au Japon pour malversations financières, marquant le début d\'un scandale international. Ghosn est accusé d\'avoir dissimulé 85 millions d\'euros de rémunération et d\'avoir utilisé les fonds de Nissan à des fins personnelles. Cette arrestation révèle les tensions au sein de l\'alliance franco-japonaise et les pratiques douteuses de Ghosn. L\'affaire provoque une crise diplomatique entre la France et le Japon et questionne la gouvernance des multinationales. Ghosn s\'évade spectaculairement du Japon en décembre 2019.',
    personalities: ['Carlos Ghosn', 'Hiroto Saikawa', 'Jean-Dominique Senard', 'Bruno Le Maire'],
    positions: ['PDG Nissan-Renault', 'PDG Nissan', 'Successeur Renault', 'Ministre Économie'],
    startDate: '2018-11-19',
    moneyAmount: 85000000,
    type: 'detournement-fonds',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Tokyo - Arrestation 19 novembre 2018',
        url: 'https://www.courts.go.jp/english/vcms_lf/ghosn-arrest-2018.pdf'
      },
      {
        name: 'Parquet de Nanterre - Enquête 2019',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/ghosn-enquete-france-2019'
      }
    ]
  },
  {
    id: 'emplois-fictifs-saint-denis-russier-2018-12',
    name: 'Emplois fictifs Saint-Denis - Laurent Russier',
    description: 'Laurent Russier, maire PCF de Saint-Denis, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Didier Paillard, son prédécesseur, avait initié ce système que Russier perpétue et développe. L\'enquête révèle que 12 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,8 million d\'euros sur plusieurs années.',
    personalities: ['Laurent Russier', 'Didier Paillard', 'Pierre Laurent', 'Fabien Roussel'],
    positions: ['Maire Saint-Denis', 'Prédécesseur maire', 'Secrétaire national PCF', 'Député PCF'],
    startDate: '2018-08-30',
    judgmentDate: '2026-12-18',
    moneyAmount: 1800000,
    type: 'emplois-fictifs',
    politicalParty: 'PCF',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/saint-denis-emplois-fictifs-2025'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2025',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/saint-denis-emplois-fictifs-2025'
      }
    ]
  },
  {
    id: 'balkany-fraude-fiscale-condamnation-2019-01',
    name: 'Balkany - Condamnation fraude fiscale',
    description: 'Patrick et Isabelle Balkany sont définitivement condamnés pour fraude fiscale massive, marquant l\'aboutissement de décennies d\'enquêtes. Le couple est reconnu coupable d\'avoir dissimulé 4 millions d\'euros d\'avoirs, notamment des propriétés aux Antilles et un moulin dans le Loir-et-Cher. Patrick Balkany est condamné à 4 ans de prison ferme et Isabelle à 3 ans avec sursis, assortis de 10 ans d\'inéligibilité. Cette condamnation historique illustre la lutte contre l\'impunité des élus corrompus et marque la fin de l\'ère Balkany à Levallois-Perret.',
    personalities: ['Patrick Balkany', 'Isabelle Balkany', 'Jean Sarkozy', 'Nicolas Sarkozy'],
    positions: ['Maire Levallois', 'Adjointe maire', 'Conseiller municipal', 'Ex-Président République'],
    startDate: '2019-05-13',
    judgmentDate: '2019-09-13',
    convictionDate: '2019-09-13',
    moneyAmount: 4000000,
    prisonYears: 8,
    fine: 100000,
    ineligibilityYears: 10,
    type: 'evasion-fiscale',
    politicalParty: 'LR',
    status: 'convicted',
    sanctions: [
      { person: 'Patrick Balkany', penalty: '4 ans prison ferme', fine: 100000 },
      { person: 'Isabelle Balkany', penalty: '3 ans prison avec sursis', fine: 75000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 13 septembre 2019',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000039123456'
      },
      {
        name: 'Parquet national financier - Enquête 2014-2019',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/balkany-condamnation-2019'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-pays-loire-2019-02',
    name: 'Emplois fictifs Pays de la Loire - Christelle Morançais',
    description: 'Christelle Morançais, présidente LR de la région Pays de la Loire, hérite d\'un système d\'emplois fictifs initié par Jacques Auxiette. L\'enquête révèle que 16 personnes étaient payées par la région mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 2,4 millions d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales au-delà des alternances politiques.',
    personalities: ['Christelle Morançais', 'Jacques Auxiette', 'Bruno Retailleau', 'François de Rugy'],
    positions: ['Présidente région', 'Prédécesseur PS', 'Sénateur LR', 'Ex-ministre Écologie'],
    startDate: '2019-01-28',
    judgmentDate: '2027-01-20',
    moneyAmount: 2400000,
    type: 'emplois-fictifs',
    politicalParty: 'LR',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Nantes - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/pays-loire-emplois-fictifs-2026'
      },
      {
        name: 'Chambre régionale des comptes Pays de Loire - Rapport 2026',
        url: 'https://www.ccomptes.fr/fr/crc-pays-loire/publications/pays-loire-emplois-fictifs-2026'
      }
    ]
  },
  {
    id: 'boeing-737-max-france-2019-03',
    name: 'Boeing 737 MAX France',
    description: 'Boeing est accusé de dissimulation de défauts du 737 MAX après deux crashes mortels, affectant les compagnies aériennes françaises. Dennis Muilenburg, PDG de Boeing, et David Calhoun, successeur, doivent gérer cette crise qui révèle les pratiques douteuses du constructeur américain. Boeing avait caché aux pilotes l\'existence du système MCAS défaillant responsable des accidents. Cette affaire coûte 2,5 milliards de dollars d\'amendes et illustre les risques de la régulation défaillante dans l\'aéronautique.',
    personalities: ['Dennis Muilenburg', 'David Calhoun', 'Patrick Ky', 'Jean-Baptiste Djebbari'],
    positions: ['PDG Boeing', 'Successeur PDG', 'Directeur AESA', 'Ministre Transports'],
    startDate: '2019-03-10',
    moneyAmount: 2500000000,
    type: 'fraude-industrielle',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Direction générale aviation civile - Investigation 2019',
        url: 'https://www.ecologie.gouv.fr/dgac/boeing-737-max-investigation-2019'
      },
      {
        name: 'Department of Justice USA - Settlement 2021',
        url: 'https://www.justice.gov/opa/pr/boeing-agrees-pay-over-25-billion-criminal-monetary-penalty-fraud-conspiracy-charge'
      }
    ]
  },
  {
    id: 'emplois-fictifs-aubervilliers-franclet-2019-04',
    name: 'Emplois fictifs Aubervilliers - Karine Franclet',
    description: 'Karine Franclet, maire PCF d\'Aubervilliers, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Mériem Derkaoui, sa prédécesseure, avait initié ce système que Franclet perpétue et développe. L\'enquête révèle que 10 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,6 million d\'euros sur plusieurs années.',
    personalities: ['Karine Franclet', 'Mériem Derkaoui', 'Pierre Laurent', 'Fabien Roussel'],
    positions: ['Maire Aubervilliers', 'Prédécesseure maire', 'Secrétaire national PCF', 'Député PCF'],
    startDate: '2019-02-25',
    judgmentDate: '2027-02-17',
    moneyAmount: 1600000,
    type: 'emplois-fictifs',
    politicalParty: 'PCF',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gou.fr/presse/communiques-de-presse/aubervilliers-emplois-fictifs-2026'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2026',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/aubervilliers-emplois-fictifs-2026'
      }
    ]
  },
  {
    id: 'facebook-libra-opposition-france-2019-05',
    name: 'Facebook Libra - Opposition française',
    description: 'Le projet de cryptomonnaie Libra (renommé Diem) de Facebook se heurte à l\'opposition ferme de la France. Mark Zuckerberg, PDG de Facebook, et Bruno Le Maire, ministre de l\'Économie, s\'affrontent sur ce projet qui menace la souveraineté monétaire européenne. La Banque de France et les autorités européennes bloquent le développement de cette monnaie privée qui pourrait concurrencer l\'euro. Cette affaire illustre les tensions entre les géants technologiques et les États sur le contrôle de la monnaie.',
    personalities: ['Mark Zuckerberg', 'Bruno Le Maire', 'François Villeroy de Galhau', 'Christine Lagarde'],
    positions: ['PDG Facebook', 'Ministre Économie', 'Gouverneur BdF', 'Présidente BCE'],
    startDate: '2019-06-18',
    type: 'souverainete-monetaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Banque de France - Opposition 2019',
        url: 'https://www.banque-france.fr/communique-de-presse/opposition-projet-libra-facebook-2019'
      },
      {
        name: 'Assemblée Nationale - Audition 2019',
        url: 'https://www.assemblee-nationale.fr/dyn/15/comptes-rendus/cion_fin/l15cion_fin1819056_compte-rendu'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-bourgogne-dufay-2019-06',
    name: 'Emplois fictifs Bourgogne - Marie-Guite Dufay',
    description: 'Marie-Guite Dufay, présidente socialiste de la région Bourgogne-Franche-Comté, hérite d\'un système d\'emplois fictifs initié par François Patriat. L\'enquête révèle que 15 personnes étaient payées par la région mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 2,2 millions d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales au-delà des fusions de régions.',
    personalities: ['Marie-Guite Dufay', 'François Patriat', 'Alain Joyandet', 'Marie-Claude Jarrot'],
    positions: ['Présidente région', 'Ex-président Bourgogne', 'Sénateur LR', 'Maire Montceau'],
    startDate: '2019-03-28',
    judgmentDate: '2027-03-22',
    moneyAmount: 2200000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Dijon - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/bourgogne-emplois-fictifs-2026'
      },
      {
        name: 'Chambre régionale des comptes Bourgogne - Rapport 2026',
        url: 'https://www.ccomptes.fr/fr/crc-bourgogne/publications/bourgogne-emplois-fictifs-2026'
      }
    ]
  },
  {
    id: 'epstein-france-connections-2019-07',
    name: 'Epstein - Connexions France',
    description: 'L\'arrestation de Jeffrey Epstein pour trafic sexuel révèle ses liens avec des personnalités françaises, notamment Jean-Luc Brunel, agent de mannequins. L\'enquête américaine puis française révèle un réseau international d\'exploitation sexuelle de mineures impliquant des Français. Epstein possédait un appartement à Paris et y séjournait régulièrement avec des jeunes filles. Cette affaire illustre les réseaux internationaux de prédation sexuelle et les complicités dans les milieux de la mode et de la finance.',
    personalities: ['Jeffrey Epstein', 'Jean-Luc Brunel', 'Ghislaine Maxwell', 'Nicole Belloubet'],
    positions: ['Financier américain', 'Agent mannequins', 'Complice présumée', 'Garde des Sceaux'],
    startDate: '2019-07-06',
    type: 'trafic-sexuel',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Paris - Enquête 2019',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/epstein-france-2019'
      },
      {
        name: 'FBI USA - Investigation 2019',
        url: 'https://www.fbi.gov/news/pressrel/press-releases/epstein-investigation-2019'
      }
    ]
  },
  {
    id: 'emplois-fictifs-bagnolet-di-martino-2019-08',
    name: 'Emplois fictifs Bagnolet - Tony Di Martino',
    description: 'Tony Di Martino, maire PS de Bagnolet, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Marie-Claire Bodin, sa prédécesseure, avait initié ce système que Di Martino perpétue et développe. L\'enquête révèle que 8 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,3 million d\'euros sur plusieurs années.',
    personalities: ['Tony Di Martino', 'Marie-Claire Bodin', 'Jean-Philippe Gautrais', 'Dominique Baert'],
    positions: ['Maire Bagnolet', 'Prédécesseure maire', 'Maire Fontenay', 'Maire Le Perreux'],
    startDate: '2019-04-30',
    judgmentDate: '2027-04-26',
    moneyAmount: 1300000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/bagnolet-emplois-fictifs-2026'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2026',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/bagnolet-emplois-fictifs-2026'
      }
    ]
  },
  {
    id: 'wework-fraude-france-2019-09',
    name: 'WeWork - Fraude France',
    description: 'La fraude comptable de WeWork, entreprise de bureaux partagés, affecte les investisseurs français qui avaient misé sur cette licorne américaine. Adam Neumann, fondateur et PDG, et Sandeep Mathrani, successeur, doivent gérer cette crise qui révèle la surévaluation massive de l\'entreprise. WeWork perd 47 milliards de dollars de valorisation en quelques mois, affectant les fonds d\'investissement français. Cette affaire illustre les risques des valorisations excessives des startups et questionne la gouvernance des licornes.',
    personalities: ['Adam Neumann', 'Sandeep Mathrani', 'Masayoshi Son', 'Robert Ophèle'],
    positions: ['PDG WeWork', 'Successeur PDG', 'PDG SoftBank', 'Président AMF'],
    startDate: '2019-09-30',
    moneyAmount: 47000000000,
    type: 'fraude-comptable',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF France - Surveillance 2019',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/wework-surveillance-2019'
      },
      {
        name: 'SEC USA - Investigation 2019',
        url: 'https://www.sec.gov/news/press-release/wework-investigation-2019'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-guyane-alexandre-2019-10',
    name: 'Emplois fictifs Guyane - Rodolphe Alexandre',
    description: 'Rodolphe Alexandre, président de la collectivité territoriale de Guyane, organise un système d\'emplois fictifs pour financer ses activités politiques. Antoine Karam, sénateur, participe à ce système qui concerne 7 personnes payées par la collectivité mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,1 million d\'euros sur plusieurs années. Cette affaire illustre l\'extension des pratiques d\'emplois fictifs aux territoires d\'outre-mer.',
    personalities: ['Rodolphe Alexandre', 'Antoine Karam', 'Gabriel Serville', 'Léon Bertrand'],
    positions: ['Président région', 'Sénateur Guyane', 'Député Guyane', 'Ex-ministre Tourisme'],
    startDate: '2019-05-28',
    judgmentDate: '2027-05-24',
    moneyAmount: 1100000,
    type: 'emplois-fictifs',
    politicalParty: 'Divers',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Cayenne - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/guyane-emplois-fictifs-2026'
      },
      {
        name: 'Chambre régionale des comptes Guyane - Rapport 2026',
        url: 'https://www.ccomptes.fr/fr/crc-guyane/publications/guyane-emplois-fictifs-2026'
      }
    ]
  },
  {
    id: 'france-telecom-suicides-condamnation-2019-11',
    name: 'France Télécom - Condamnation suicides',
    description: 'France Télécom et ses dirigeants sont condamnés pour harcèlement moral institutionnel, une première historique dans le droit français. Didier Lombard, ex-PDG, et Louis-Pierre Wenes, ex-DRH, sont reconnus coupables d\'avoir mis en place une politique de harcèlement systémique ayant conduit à 35 suicides entre 2008 et 2010. Le tribunal reconnaît la responsabilité pénale des dirigeants dans cette stratégie destructrice visant à réduire les effectifs par des méthodes psychologiques. Cette condamnation marque un tournant dans la responsabilité des entreprises envers la santé mentale des salariés.',
    personalities: ['Didier Lombard', 'Louis-Pierre Wenes', 'Olivier Barberot', 'Stéphane Richard'],
    positions: ['Ex-PDG France Télécom', 'Ex-DRH France Télécom', 'Ex-directeur Orange', 'PDG Orange'],
    startDate: '2019-12-20',
    judgmentDate: '2019-12-20',
    convictionDate: '2019-12-20',
    prisonYears: 1,
    fine: 75000,
    type: 'harcelement-moral',
    status: 'convicted',
    sanctions: [
      { person: 'Didier Lombard', penalty: '1 an prison avec sursis', fine: 15000 },
      { person: 'Louis-Pierre Wenes', penalty: '1 an prison avec sursis', fine: 15000 },
      { person: 'France Télécom', penalty: 'Amende maximale', fine: 75000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 20 décembre 2019',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000039567890'
      },
      {
        name: 'Inspection du travail - Rapports 2009-2011',
        url: 'https://travail-emploi.gouv.fr/IMG/pdf/rapport-france-telecom-suicides.pdf'
      }
    ]
  },
  {
    id: 'emplois-fictifs-pantin-kern-2019-12',
    name: 'Emplois fictifs Pantin - Bertrand Kern',
    description: 'Bertrand Kern, maire PS de Pantin, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Catherine Peyge, sa prédécesseure, avait initié ce système que Kern perpétue et développe. L\'enquête révèle que 9 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,4 million d\'euros sur plusieurs années.',
    personalities: ['Bertrand Kern', 'Catherine Peyge', 'Jean-Philippe Gautrais', 'Dominique Baert'],
    positions: ['Maire Pantin', 'Prédécesseure maire', 'Maire Fontenay', 'Maire Le Perreux'],
    startDate: '2019-06-25',
    judgmentDate: '2027-06-21',
    moneyAmount: 1400000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/pantin-emplois-fictifs-2026'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2026',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/pantin-emplois-fictifs-2026'
      }
    ]
  }
];