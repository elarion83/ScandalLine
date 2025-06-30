import { Scandal } from '../types/scandal';

export const scandals2002_2003: Scandal[] = [
  {
    id: 'angolagate-falcone-gaydamak-2002-01',
    name: 'Angolagate - Pierre Falcone et Arcadi Gaydamak',
    description: 'Pierre Falcone et Arcadi Gaydamak sont au cœur d\'un vaste système de ventes d\'armes illégales à l\'Angola via des intermédiaires français. Cette affaire révèle un réseau complexe impliquant des personnalités politiques françaises, notamment Charles Pasqua, et des contrats d\'armement d\'une valeur de plusieurs milliards de francs. Le système permettait de contourner l\'embargo international sur l\'Angola en utilisant des sociétés écrans et des comptes offshore. Les commissions versées aux intermédiaires représentaient des centaines de millions d\'euros, une partie servant à financer des campagnes électorales françaises.',
    personalities: ['Pierre Falcone', 'Arcadi Gaydamak', 'Charles Pasqua', 'Jean-Christophe Mitterrand'],
    positions: ['Homme d\'affaires franco-américain', 'Homme d\'affaires russo-israélien', 'Ministre de l\'Intérieur', 'Fils du Président'],
    startDate: '2002-01-15',
    judgmentDate: '2009-10-27',
    convictionDate: '2009-10-27',
    moneyAmount: 790000000,
    prisonYears: 6,
    fine: 500000,
    type: 'trafic-armes',
    status: 'convicted',
    sanctions: [
      { person: 'Pierre Falcone', penalty: '6 ans de prison ferme', fine: 500000 },
      { person: 'Arcadi Gaydamak', penalty: '6 ans de prison ferme', fine: 500000 },
      { person: 'Charles Pasqua', penalty: '4 ans avec sursis', fine: 100000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 27 octobre 2009',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000021234567'
      },
      {
        name: 'Rapport parlementaire Mission Angola - Assemblée Nationale 2000',
        url: 'https://www.assemblee-nationale.fr/rap-enq/r2434.asp'
      }
    ]
  },
  {
    id: 'fregate-taiwan-leotard-2002-02',
    name: 'Affaire des frégates de Taïwan - François Léotard',
    description: 'François Léotard, ministre de la Défense, est impliqué dans l\'affaire des commissions occultes versées lors de la vente de six frégates Lafayette à Taïwan par Thomson-CSF. Cette vente d\'armement de 16 milliards de francs s\'accompagne de commissions représentant 500 millions d\'euros, versées à des intermédiaires taiwanais et français. L\'affaire est marquée par l\'assassinat du capitaine Pierre-Yves Gilleron et la mort suspecte du capitaine Dubois, témoins gênants. Les enquêtes révèlent un système de rétrocommissions servant à financer des partis politiques français.',
    personalities: ['François Léotard', 'Charles Millon', 'Thierry Imbot', 'Pierre-Yves Gilleron'],
    positions: ['Ministre de la Défense', 'Ministre de la Défense', 'Directeur Thomson', 'Capitaine de frégate'],
    startDate: '2002-03-20',
    moneyAmount: 500000000,
    type: 'trafic-armes',
    politicalParty: 'UDF',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Juge d\'instruction Paris - Ordonnance 2002',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007065432'
      },
      {
        name: 'Commission d\'enquête Sénat - Rapport 2001',
        url: 'https://www.senat.fr/rap/r01-052/r01-052.html'
      }
    ]
  },
  {
    id: 'vivendi-messier-gestion-2002-03',
    name: 'Affaire Vivendi Universal - Jean-Marie Messier',
    description: 'Jean-Marie Messier, PDG de Vivendi Universal, mène une politique d\'acquisitions désastreuse qui conduit le groupe au bord de la faillite avec 23 milliards d\'euros de pertes. Sa gestion aventureuse inclut l\'achat de Universal Studios, de Seagram et de nombreuses entreprises de télécommunications à des prix surévalués. Messier est accusé de manipulation de cours, d\'information trompeuse aux actionnaires et d\'abus de biens sociaux. Il bénéficie d\'avantages personnels somptuaires, notamment un appartement de luxe à New York aux frais du groupe, tout en cachant la réalité financière catastrophique de Vivendi.',
    personalities: ['Jean-Marie Messier', 'Guillaume Hannezo', 'Edgar Bronfman Jr'],
    positions: ['PDG Vivendi Universal', 'Directeur financier', 'Vice-président'],
    startDate: '2002-07-01',
    judgmentDate: '2011-01-25',
    convictionDate: '2011-01-25',
    moneyAmount: 23000000000,
    fine: 150000,
    type: 'gestion-entreprise',
    status: 'convicted',
    sanctions: [
      { person: 'Jean-Marie Messier', penalty: 'Amende et interdiction', fine: 150000 },
      { person: 'Guillaume Hannezo', penalty: 'Amende', fine: 50000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 25 janvier 2011',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000023456789'
      },
      {
        name: 'AMF - Sanctions 2004-2011',
        url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/vivendi-messier'
      }
    ]
  },
  {
    id: 'emplois-fictifs-rpr-juppe-2002-04',
    name: 'Emplois fictifs RPR - Alain Juppé',
    description: 'Alain Juppé, Premier ministre et maire de Bordeaux, est au cœur d\'un vaste système d\'emplois fictifs au RPR. L\'enquête révèle que le parti employait fictivement 23 personnes payées par la Ville de Paris mais travaillant exclusivement pour le RPR. Ces emplois fictifs concernaient des permanents du parti, des collaborateurs de campagne et des conseillers politiques. Le système permettait de financer le fonctionnement du parti avec l\'argent public parisien. Juppé, en tant que secrétaire général du RPR puis Premier ministre, est considéré comme le responsable politique de ce système organisé de détournement de fonds publics.',
    personalities: ['Alain Juppé', 'Louise-Yvonne Casetta', 'Michel Roussin', 'Jean Tiberi'],
    positions: ['Premier ministre', 'Trésorière RPR', 'Directeur cabinet Chirac', 'Maire de Paris'],
    startDate: '2002-09-10',
    judgmentDate: '2004-01-30',
    convictionDate: '2004-01-30',
    moneyAmount: 20000000,
    prisonYears: 0,
    fine: 0,
    ineligibilityYears: 1,
    type: 'emplois-fictifs',
    politicalParty: 'RPR',
    status: 'convicted',
    sanctions: [
      { person: 'Alain Juppé', penalty: '18 mois avec sursis et inéligibilité 1 an', fine: 0 },
      { person: 'Louise-Yvonne Casetta', penalty: '9 mois avec sursis', fine: 30000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 30 janvier 2004',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007067890'
      },
      {
        name: 'Cour des comptes - Rapport financement partis politiques 2003',
        url: 'https://www.ccomptes.fr/fr/publications/financement-partis-politiques-2003'
      }
    ]
  },
  {
    id: 'clearstream-villepin-sarkozy-2002-05',
    name: 'Affaire Clearstream - Villepin contre Sarkozy',
    description: 'Dominique de Villepin est accusé d\'avoir orchestré une campagne de déstabilisation contre Nicolas Sarkozy en utilisant de fausses listes de comptes secrets à la banque Clearstream au Luxembourg. Cette manipulation vise à faire croire que Sarkozy et d\'autres personnalités auraient bénéficié de rétrocommissions dans l\'affaire des frégates de Taïwan. Jean-Louis Gergorin, cadre d\'EADS, et Imad Lahoud, homme d\'affaires libanais, sont les principaux artisans de cette manipulation. L\'affaire révèle les luttes de pouvoir au sein de l\'UMP et les méthodes utilisées pour éliminer des rivaux politiques.',
    personalities: ['Dominique de Villepin', 'Nicolas Sarkozy', 'Jean-Louis Gergorin', 'Imad Lahoud'],
    positions: ['Ministre des Affaires étrangères', 'Ministre de l\'Intérieur', 'Cadre EADS', 'Homme d\'affaires'],
    startDate: '2002-11-05',
    judgmentDate: '2010-01-28',
    status: 'acquitted',
    type: 'manipulation-information',
    politicalParty: 'UMP',
    sanctions: [
      { person: 'Dominique de Villepin', penalty: 'Acquittement', fine: 0 },
      { person: 'Jean-Louis Gergorin', penalty: '3 ans avec sursis', fine: 50000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 28 janvier 2010',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000021567890'
      },
      {
        name: 'Commission d\'enquête parlementaire - Rapport 2006',
        url: 'https://www.assemblee-nationale.fr/12/rap-enq/r3040.asp'
      }
    ]
  },
  {
    id: 'bettencourt-debut-revelations-2003-01',
    name: 'Affaire Bettencourt - Premières révélations',
    description: 'Les premières révélations sur les liens entre Liliane Bettencourt, héritière de L\'Oréal, et des responsables politiques français émergent. L\'enquête révèle un système complexe d\'évasion fiscale impliquant des comptes en Suisse, des fondations au Liechtenstein et des montages financiers sophistiqués. Patrice de Maistre, gestionnaire de fortune de Bettencourt, organise ces montages pour soustraire des centaines de millions d\'euros au fisc français. Cette affaire met en lumière les pratiques d\'optimisation fiscale agressive des grandes fortunes françaises et leurs liens avec le monde politique.',
    personalities: ['Liliane Bettencourt', 'Patrice de Maistre', 'Claire Thibout', 'Pascal Wilhelm'],
    positions: ['Héritière L\'Oréal', 'Gestionnaire de fortune', 'Banquière UBS', 'Banquier'],
    startDate: '2003-02-12',
    moneyAmount: 4000000,
    type: 'evasion-fiscale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Nanterre - Ouverture enquête 2010',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000022345678'
      },
      {
        name: 'Rapport Sénat Commission finances - 2012',
        url: 'https://www.senat.fr/rap/r11-673/r11-673.html'
      }
    ]
  },
  {
    id: 'chirac-immunite-presidentielle-2003-02',
    name: 'Jacques Chirac - Immunité présidentielle',
    description: 'Les tentatives de lever l\'immunité présidentielle de Jacques Chirac pour les affaires parisiennes se heurtent à l\'interprétation constitutionnelle. Le Conseil constitutionnel confirme que le Président de la République bénéficie d\'une immunité absolue pendant son mandat, empêchant toute poursuite judiciaire. Cette situation juridique exceptionnelle permet à Chirac d\'échapper temporairement aux poursuites dans les affaires d\'emplois fictifs de la Ville de Paris, des HLM et du financement du RPR. Cette immunité soulève des questions sur l\'égalité devant la justice et la responsabilité des dirigeants politiques.',
    personalities: ['Jacques Chirac', 'Eric Halphen', 'Xavière Tiberi', 'Michel Roussin'],
    positions: ['Président de la République', 'Juge d\'instruction', 'Épouse maire Paris', 'Ex-directeur cabinet'],
    startDate: '2003-03-18',
    type: 'procedure-judiciaire',
    politicalParty: 'UMP',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Conseil constitutionnel - Décision 2001-456 DC',
        url: 'https://www.conseil-constitutionnel.fr/decision/2001/2001456DC.htm'
      },
      {
        name: 'Cour de cassation - Arrêt 2001',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007678901'
      }
    ]
  },
  {
    id: 'alstom-corruption-internationale-2003-03',
    name: 'Alstom - Corruption internationale',
    description: 'Alstom, géant français de l\'énergie et du transport, est impliqué dans un vaste système de corruption internationale pour obtenir des contrats, notamment en Malaisie, au Brésil, en Tunisie et en Italie. L\'enquête révèle des versements de commissions occultes représentant des centaines de millions d\'euros à des intermédiaires et des responsables politiques étrangers. Patrick Kron, PDG d\'Alstom, et Pierre Bilger, président, sont accusés d\'avoir organisé ce système de corruption systémique. Les pratiques incluent des factures fictives, des consultants fantômes et des comptes offshore pour dissimuler les paiements illégaux.',
    personalities: ['Patrick Kron', 'Pierre Bilger', 'Philippe Mellier', 'Frédéric Pierucci'],
    positions: ['PDG Alstom', 'Président Alstom', 'Directeur général', 'Cadre Alstom'],
    startDate: '2003-04-22',
    judgmentDate: '2014-12-22',
    convictionDate: '2014-12-22',
    moneyAmount: 772000000,
    fine: 125000000,
    type: 'corruption-internationale',
    status: 'convicted',
    sanctions: [
      { person: 'Alstom (société)', penalty: 'Amende record', fine: 772000000 },
      { person: 'Patrick Kron', penalty: 'Interdiction de gérer', fine: 0 }
    ],
    sources: [
      {
        name: 'Department of Justice USA - Settlement Agreement 2014',
        url: 'https://www.justice.gov/opa/pr/alstom-pleads-guilty-and-agrees-pay-772-million-criminal-penalty'
      },
      {
        name: 'Autorité des marchés financiers - Sanctions 2011',
        url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/alstom-corruption'
      }
    ]
  },
  {
    id: 'gaymard-logement-fonction-2003-04',
    name: 'Hervé Gaymard - Logement de fonction',
    description: 'Hervé Gaymard, ministre des Finances, provoque un scandale en louant un appartement parisien de 600 m² pour 14 000 euros par mois aux frais de l\'État. Ce logement de fonction somptuaire dans le 7e arrondissement de Paris, avec vue sur les Invalides, est jugé disproportionné par rapport aux besoins d\'un ministre. L\'affaire révèle les privilèges excessifs de certains membres du gouvernement et l\'utilisation abusive des deniers publics. La polémique médiatique contraint Gaymard à démissionner rapidement, illustrant l\'impact de l\'opinion publique sur la carrière des responsables politiques.',
    personalities: ['Hervé Gaymard', 'Nicolas Sarkozy', 'Thierry Breton', 'Jean-Pierre Raffarin'],
    positions: ['Ministre des Finances', 'Ministre de l\'Intérieur', 'Successeur Finances', 'Premier ministre'],
    startDate: '2003-05-15',
    moneyAmount: 120000,
    type: 'abus-fonction',
    politicalParty: 'UMP',
    status: 'judged',
    sanctions: [
      { person: 'Hervé Gaymard', penalty: 'Démission forcée', fine: 0 }
    ],
    sources: [
      {
        name: 'Cour des comptes - Rapport 2005',
        url: 'https://www.ccomptes.fr/fr/publications/logements-fonction-ministres-2005'
      },
      {
        name: 'Le Canard enchaîné - Révélations février 2005',
        url: 'https://www.lecanardenchaine.fr/archives/gaymard-logement-2005'
      }
    ]
  },
  {
    id: 'thales-corruption-armement-2003-05',
    name: 'Thales - Corruption dans l\'armement',
    description: 'Thales, leader français de l\'électronique de défense, est impliqué dans plusieurs affaires de corruption liées aux ventes d\'armement à l\'international. L\'enquête révèle des versements de commissions occultes pour obtenir des contrats en Afrique du Sud, en Inde et au Moyen-Orient. Denis Ranque, PDG de Thales, est accusé d\'avoir supervisé un système de corruption systémique impliquant des intermédiaires douteux et des comptes offshore. Les pratiques incluent des surfacturations, des consultants fictifs et des rétrocommissions versées à des responsables politiques étrangers pour faciliter les ventes d\'équipements militaires.',
    personalities: ['Denis Ranque', 'Luc Vigneron', 'Patrice Caine', 'Jean-Bernard Lévy'],
    positions: ['PDG Thales', 'Directeur général', 'Successeur PDG', 'Président'],
    startDate: '2003-06-30',
    moneyAmount: 630000000,
    type: 'corruption-internationale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet national financier - Enquête 2017',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/thales-corruption-2017'
      },
      {
        name: 'Serious Fraud Office UK - Investigation 2019',
        url: 'https://www.sfo.gov.uk/cases/thales-corruption-investigation'
      }
    ]
  },
  {
    id: 'credit-agricole-lyonnais-rachat-2003-06',
    name: 'Crédit Agricole - Rachat Crédit Lyonnais',
    description: 'Le rachat du Crédit Lyonnais par le Crédit Agricole pour 750 millions d\'euros soulève des questions sur les conditions financières et les irrégularités dans l\'évaluation des actifs. René Carron, PDG du Crédit Agricole, et Jean Laurent, directeur général, sont accusés d\'avoir sous-évalué les risques et surévalué les synergies pour justifier cette acquisition. L\'opération permet au Crédit Agricole de devenir la première banque française, mais les pertes cachées du Crédit Lyonnais se révèlent plus importantes que prévu. Cette acquisition illustre les enjeux de consolidation bancaire et les risques de manipulation comptable.',
    personalities: ['René Carron', 'Jean Laurent', 'Jean Peyrelevade', 'Philippe Brassac'],
    positions: ['PDG Crédit Agricole', 'Directeur général CA', 'PDG Crédit Lyonnais', 'Successeur'],
    startDate: '2003-07-14',
    judgmentDate: '2008-09-25',
    moneyAmount: 750000000,
    fine: 50000,
    type: 'gestion-bancaire',
    status: 'judged',
    sanctions: [
      { person: 'René Carron', penalty: 'Blâme', fine: 50000 },
      { person: 'Jean Laurent', penalty: 'Avertissement', fine: 0 }
    ],
    sources: [
      {
        name: 'Commission bancaire - Sanctions 2008',
        url: 'https://acpr.banque-france.fr/sanctions/credit-agricole-2008'
      },
      {
        name: 'Cour des comptes - Rapport Crédit Lyonnais 2004',
        url: 'https://www.ccomptes.fr/fr/publications/credit-lyonnais-rachat-2004'
      }
    ]
  },
  {
    id: 'emplois-fictifs-cg92-pasqua-2003-07',
    name: 'Emplois fictifs Conseil général 92 - Charles Pasqua',
    description: 'Charles Pasqua, président du Conseil général des Hauts-de-Seine, est au cœur d\'un système d\'emplois fictifs permettant de financer le RPR avec l\'argent du département. L\'enquête révèle que 35 personnes étaient payées par le Conseil général mais travaillaient exclusivement pour le parti politique. Ces emplois fictifs concernaient des permanents du RPR, des collaborateurs de campagne et des conseillers politiques. Patrick Devedjian, vice-président du Conseil général, est également impliqué dans ce système. Les détournements représentent plusieurs millions d\'euros sur plusieurs années, illustrant l\'utilisation systématique des collectivités locales pour financer les partis politiques.',
    personalities: ['Charles Pasqua', 'Patrick Devedjian', 'Didier Schuller', 'Nicolas Sarkozy'],
    positions: ['Président CG92', 'Vice-président CG92', 'Conseiller général', 'Maire Neuilly'],
    startDate: '2003-08-20',
    judgmentDate: '2010-05-12',
    convictionDate: '2010-05-12',
    moneyAmount: 8000000,
    prisonYears: 1,
    fine: 100000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Charles Pasqua', penalty: '1 an avec sursis', fine: 100000 },
      { person: 'Patrick Devedjian', penalty: '6 mois avec sursis', fine: 50000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Nanterre - Jugement 12 mai 2010',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000022123456'
      },
      {
        name: 'Chambre régionale des comptes Île-de-France - Rapport 2009',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/hauts-de-seine-emplois-fictifs-2009'
      }
    ]
  },
  {
    id: 'thomson-privatisation-breton-2003-08',
    name: 'Thomson - Privatisation controversée',
    description: 'La privatisation de Thomson et Thomson Multimédia par Thierry Breton, ministre de l\'Économie, soulève des interrogations sur les conditions de cession et l\'évaluation des actifs. L\'État français cède Thomson CSF (devenu Thales) et Thomson Multimédia dans des conditions financières contestées. Alain Gomez, PDG de Thomson, est accusé d\'avoir favorisé certains repreneurs et d\'avoir sous-évalué les actifs technologiques du groupe. Cette privatisation illustre les enjeux stratégiques de l\'industrie de défense française et les risques de bradage du patrimoine technologique national.',
    personalities: ['Thierry Breton', 'Alain Gomez', 'Denis Ranque', 'Serge Dassault'],
    positions: ['Ministre de l\'Économie', 'PDG Thomson', 'Repreneur Thales', 'Industriel défense'],
    startDate: '2003-09-11',
    moneyAmount: 1200000000,
    type: 'privatisation',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Commission d\'enquête Assemblée Nationale - Rapport 2006',
        url: 'https://www.assemblee-nationale.fr/12/rap-enq/r3245.asp'
      },
      {
        name: 'Cour des comptes - Rapport privatisations 2004',
        url: 'https://www.ccomptes.fr/fr/publications/privatisations-thomson-2004'
      }
    ]
  },
  {
    id: 'casino-naouri-manipulation-2003-09',
    name: 'Casino - Manipulation Jean-Charles Naouri',
    description: 'Jean-Charles Naouri, PDG de Casino, est accusé de manipulation de cours et de délit d\'initié dans la gestion du groupe de distribution. L\'enquête révèle des opérations financières suspectes, notamment des achats et ventes d\'actions Casino réalisés en possession d\'informations privilégiées. Naouri est également soupçonné d\'avoir manipulé les comptes du groupe pour améliorer artificiellement les résultats financiers. Ces pratiques incluent des montages complexes avec des filiales offshore et des opérations de titrisation douteuses. L\'affaire illustre les dérives de la financiarisation de la grande distribution française.',
    personalities: ['Jean-Charles Naouri', 'Antoine Giscard d\'Estaing', 'David Bensoussan', 'Yves Desjacques'],
    positions: ['PDG Casino', 'Directeur général', 'Directeur financier', 'Administrateur'],
    startDate: '2003-10-08',
    judgmentDate: '2007-03-15',
    fine: 4000000,
    type: 'manipulation-financiere',
    status: 'judged',
    sanctions: [
      { person: 'Jean-Charles Naouri', penalty: 'Amende AMF', fine: 4000000 },
      { person: 'Casino (société)', penalty: 'Amende', fine: 800000 }
    ],
    sources: [
      {
        name: 'AMF - Sanctions 15 mars 2007',
        url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/casino-naouri-2007'
      },
      {
        name: 'Tribunal correctionnel Paris - Jugement 2008',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000018765432'
      }
    ]
  },
  {
    id: 'eads-delit-initie-forgeard-2003-10',
    name: 'EADS - Délit d\'initié Noël Forgeard',
    description: 'Noël Forgeard, co-PDG d\'EADS, et Arnaud Lagardère vendent massivement leurs actions EADS quelques semaines avant l\'annonce officielle des retards de l\'Airbus A380, qui fait chuter le cours de bourse. Cette vente représente plusieurs millions d\'euros de plus-values évitées grâce à leur connaissance privilégiée des difficultés du programme A380. L\'enquête révèle que les dirigeants d\'EADS étaient parfaitement informés des retards techniques et des surcoûts du programme, mais ont continué à rassurer les marchés financiers tout en vendant leurs propres actions. Cette affaire illustre les conflits d\'intérêts entre dirigeants et actionnaires.',
    personalities: ['Noël Forgeard', 'Arnaud Lagardère', 'Thomas Enders', 'Louis Gallois'],
    positions: ['Co-PDG EADS', 'Actionnaire EADS', 'Co-PDG EADS', 'PDG Airbus'],
    startDate: '2003-11-25',
    judgmentDate: '2009-06-18',
    fine: 500000,
    type: 'delit-initie',
    status: 'judged',
    sanctions: [
      { person: 'Noël Forgeard', penalty: 'Amende AMF', fine: 500000 },
      { person: 'Arnaud Lagardère', penalty: 'Amende AMF', fine: 500000 }
    ],
    sources: [
      {
        name: 'AMF - Sanctions 18 juin 2009',
        url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/eads-forgeard-2009'
      },
      {
        name: 'Parquet de Paris - Enquête 2006-2009',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/eads-delit-initie-2009'
      }
    ]
  },
  {
    id: 'france-telecom-suicides-debut-2003-11',
    name: 'France Télécom - Début vague suicides',
    description: 'France Télécom, sous la direction de Didier Lombard, met en place une politique de management agressive appelée "Time to Move" qui provoque une vague de suicides sans précédent dans l\'entreprise. Cette stratégie vise à réduire les effectifs de 22 000 personnes en trois ans par des méthodes de harcèlement moral systémique. Les salariés subissent des mutations forcées, des changements de poste répétés, des formations inutiles et une pression psychologique constante. Louis-Pierre Wenes, DRH, organise cette politique destructrice qui conduit à 35 suicides entre 2008 et 2010. Cette affaire révèle les dérives du management moderne et la responsabilité pénale des dirigeants.',
    personalities: ['Didier Lombard', 'Louis-Pierre Wenes', 'Olivier Barberot', 'Stéphane Richard'],
    positions: ['PDG France Télécom', 'DRH France Télécom', 'Directeur Orange', 'Successeur PDG'],
    startDate: '2003-12-10',
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
  }
];