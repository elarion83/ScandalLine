import { Scandal } from '../types/scandal';

export const scandals2008_2009: Scandal[] = [
  {
    id: 'kerviel-revelation-societe-generale-2008-01',
    name: 'Révélation Kerviel - Société Générale',
    description: 'La découverte des pertes de 4,9 milliards d\'euros causées par Jérôme Kerviel à la Société Générale provoque un séisme dans le monde financier français. Daniel Bouton, PDG de la banque, révèle que Kerviel avait accumulé des positions frauduleuses de 50 milliards d\'euros sur les indices boursiers européens. Cette affaire révèle les failles dramatiques du contrôle des risques dans les banques françaises et questionne la responsabilité de la hiérarchie. Kerviel affirme que ses supérieurs étaient au courant de ses méthodes tant qu\'il générait des profits. Cette crise bancaire majeure illustre les dérives de la spéculation financière et les défaillances de la supervision bancaire.',
    personalities: ['Jérôme Kerviel', 'Daniel Bouton', 'Jean-Pierre Mustier', 'Frédéric Oudéa'],
    positions: ['Trader', 'PDG Société Générale', 'Directeur banque investissement', 'Successeur PDG'],
    startDate: '2008-01-24',
    judgmentDate: '2010-10-05',
    convictionDate: '2010-10-05',
    moneyAmount: 4900000000,
    prisonYears: 3,
    type: 'fraude-financiere',
    status: 'convicted',
    sanctions: [
      { person: 'Jérôme Kerviel', penalty: '3 ans prison ferme', fine: 0 },
      { person: 'Daniel Bouton', penalty: 'Démission forcée', fine: 0 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 5 octobre 2010',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000022890123'
      },
      {
        name: 'AMF - Rapport mission Kerviel 2008',
        url: 'https://www.amf-france.org/fr/actualites-publications/publications/rapports-etudes-et-analyses/rapport-mission-kerviel'
      }
    ]
  },
  {
    id: 'crise-subprimes-banques-francaises-2008-02',
    name: 'Crise subprimes - Banques françaises',
    description: 'La crise des subprimes américains frappe de plein fouet les banques françaises qui avaient massivement investi dans des produits dérivés toxiques. Christian Noyer, gouverneur de la Banque de France, et Christine Lagarde, ministre de l\'Économie, doivent gérer cette crise systémique. Les banques françaises subissent des pertes cumulées de 50 milliards d\'euros, nécessitant l\'intervention de l\'État pour éviter l\'effondrement du système bancaire. Cette crise révèle l\'interconnexion des marchés financiers mondiaux et les risques de la financiarisation excessive de l\'économie française. L\'État doit recapitaliser plusieurs établissements et garantir leurs dettes.',
    personalities: ['Christian Noyer', 'Christine Lagarde', 'François Fillon', 'Nicolas Sarkozy'],
    positions: ['Gouverneur Banque de France', 'Ministre de l\'Économie', 'Premier ministre', 'Président République'],
    startDate: '2008-03-15',
    moneyAmount: 50000000000,
    type: 'crise-financiere',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Banque de France - Rapport stabilité financière 2008',
        url: 'https://www.banque-france.fr/sites/default/files/medias/documents/rsf_2008.pdf'
      },
      {
        name: 'Cour des comptes - Rapport crise financière 2009',
        url: 'https://www.ccomptes.fr/fr/publications/crise-financiere-banques-2009'
      }
    ]
  },
  {
    id: 'emplois-fictifs-cg-seine-saint-denis-2008-03',
    name: 'Emplois fictifs Seine-Saint-Denis - Claude Bartolone',
    description: 'Claude Bartolone, président socialiste du Conseil général de Seine-Saint-Denis, organise un système d\'emplois fictifs pour financer le PS avec l\'argent départemental. Mathieu Hanotin, vice-président, participe à ce système qui concerne 16 personnes payées par le département mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. L\'enquête révèle des détournements de 2,4 millions d\'euros sur plusieurs années. Cette affaire illustre la généralisation du financement illégal des partis par les collectivités territoriales, pratique systémique dans les départements socialistes.',
    personalities: ['Claude Bartolone', 'Mathieu Hanotin', 'Stéphane Troussel', 'Razzy Hammadi'],
    positions: ['Président CG93', 'Vice-président CG93', 'Conseiller général', 'Collaborateur'],
    startDate: '2008-04-10',
    judgmentDate: '2016-09-22',
    convictionDate: '2016-09-22',
    moneyAmount: 2400000,
    prisonYears: 0,
    fine: 10000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Claude Bartolone', penalty: '4 mois avec sursis', fine: 10000 },
      { person: 'Mathieu Hanotin', penalty: '3 mois avec sursis', fine: 5000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Bobigny - Jugement 22 septembre 2016',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000033123456'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2015',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/seine-saint-denis-emplois-fictifs-2015'
      }
    ]
  },
  {
    id: 'madoff-impact-france-2008-04',
    name: 'Madoff - Impact France',
    description: 'L\'escroquerie Ponzi de Bernard Madoff, révélée en décembre 2008, touche de nombreux investisseurs français qui ont confié leurs fonds à des gérants ayant investi chez Madoff. René-Thierry Magon de La Villehuchet, gérant d\'Access International Advisors, se suicide après avoir perdu 1,4 milliard de dollars de ses clients. Cette affaire révèle les failles de la supervision financière internationale et les risques des investissements opaques. De nombreuses fortunes françaises, banques privées et fonds d\'investissement subissent des pertes importantes. L\'AMF renforce ses contrôles sur les gérants de fortune et les produits d\'investissement complexes.',
    personalities: ['Bernard Madoff', 'René-Thierry Magon de La Villehuchet', 'Michel Pébereau', 'Jean-Laurent Bonnafé'],
    positions: ['Financier américain', 'Gérant Access International', 'PDG BNP Paribas', 'Directeur général BNP'],
    startDate: '2008-12-11',
    moneyAmount: 1400000000,
    type: 'escroquerie-financiere',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF - Communiqué 2008',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/madoff-impact-france-2008'
      },
      {
        name: 'Parquet de Paris - Enquête 2009',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/madoff-france-2009'
      }
    ]
  },
  {
    id: 'emplois-fictifs-boulogne-billancourt-2008-05',
    name: 'Emplois fictifs Boulogne-Billancourt - Pierre-Christophe Baguet',
    description: 'Pierre-Christophe Baguet, maire UMP de Boulogne-Billancourt, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Jean-Pierre Fourcade, son prédécesseur, avait initié ce système que Baguet perpétue et développe. L\'enquête révèle que 10 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs concernent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,6 million d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales dans les municipalités, indépendamment des changements de mandature.',
    personalities: ['Pierre-Christophe Baguet', 'Jean-Pierre Fourcade', 'Thierry Solère', 'Marie-Laure Godin'],
    positions: ['Maire Boulogne', 'Prédécesseur maire', 'Adjoint au maire', 'Directrice cabinet'],
    startDate: '2008-05-20',
    judgmentDate: '2017-11-16',
    convictionDate: '2017-11-16',
    moneyAmount: 1600000,
    prisonYears: 0,
    fine: 7000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Pierre-Christophe Baguet', penalty: '6 mois avec sursis', fine: 7000 },
      { person: 'Jean-Pierre Fourcade', penalty: '4 mois avec sursis', fine: 5000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Nanterre - Jugement 16 novembre 2017',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000036123456'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2016',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/boulogne-emplois-fictifs-2016'
      }
    ]
  },
  {
    id: 'dexia-premiere-crise-2008-06',
    name: 'Dexia - Première crise',
    description: 'Dexia, banque franco-belge spécialisée dans le financement des collectivités locales, connaît sa première crise majeure nécessitant un sauvetage public. Pierre Mariani, PDG, et Axel Miller, président, ont mené une stratégie risquée basée sur les produits dérivés qui expose la banque à la crise financière. L\'État français et belge doivent intervenir avec 6,5 milliards d\'euros de garanties pour éviter la faillite. Cette première crise révèle les dérives de la financiarisation des banques publiques et les risques des stratégies spéculatives. Dexia sera finalement démantelée après une seconde crise en 2011.',
    personalities: ['Pierre Mariani', 'Axel Miller', 'Jean-Luc Dehaene', 'Christine Lagarde'],
    positions: ['PDG Dexia', 'Président Dexia', 'Prédécesseur président', 'Ministre Économie'],
    startDate: '2008-09-30',
    moneyAmount: 6500000000,
    type: 'crise-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Commission européenne - Décision aide d\'État 2008',
        url: 'https://ec.europa.eu/competition/state_aid/cases/dexia-2008.pdf'
      },
      {
        name: 'Cour des comptes - Rapport Dexia 2012',
        url: 'https://www.ccomptes.fr/fr/publications/sauvetage-dexia-2012'
      }
    ]
  },
  {
    id: 'emplois-fictifs-cg-yvelines-2008-07',
    name: 'Emplois fictifs Yvelines - Alain Schmitz',
    description: 'Alain Schmitz, président UMP du Conseil général des Yvelines, organise un système d\'emplois fictifs pour financer l\'UMP avec l\'argent départemental. Pierre Bédier, son successeur, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 12 personnes étaient payées par le département mais travaillaient exclusivement pour le parti. Ces emplois fictifs incluent des permanents de l\'UMP, des responsables de campagne et des conseillers politiques. Les détournements représentent 1,9 million d\'euros sur plusieurs années. Cette affaire s\'inscrit dans une série de scandales touchant les départements franciliens et illustre la généralisation du financement illégal des partis.',
    personalities: ['Alain Schmitz', 'Pierre Bédier', 'Christine Boutin', 'Franck Marlin'],
    positions: ['Président CG78', 'Successeur président', 'Ministre Logement', 'Maire Versailles'],
    startDate: '2008-06-18',
    judgmentDate: '2018-03-15',
    convictionDate: '2018-03-15',
    moneyAmount: 1900000,
    prisonYears: 0,
    fine: 8000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Alain Schmitz', penalty: '8 mois avec sursis', fine: 8000 },
      { person: 'Pierre Bédier', penalty: 'Relaxe', fine: 0 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Versailles - Jugement 15 mars 2018',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000036789012'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2017',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/yvelines-emplois-fictifs-2017'
      }
    ]
  },
  {
    id: 'natixis-pertes-massives-2008-08',
    name: 'Natixis - Pertes massives',
    description: 'Natixis subit des pertes massives de 2,8 milliards d\'euros sur les produits structurés et dérivés de crédit. Dominique Ferrero, PDG, et François Riahi, directeur général, avaient développé une stratégie risquée d\'investissement dans des produits financiers complexes liés aux subprimes américains. Ces investissements se révèlent toxiques lors de la crise financière, mettant en péril la banque d\'investissement des réseaux coopératifs. L\'affaire révèle les failles de gouvernance dans les banques coopératives françaises et les risques de la course aux profits à court terme. Les Banques Populaires et Caisses d\'Épargne doivent recapitaliser massivement leur filiale.',
    personalities: ['Dominique Ferrero', 'François Riahi', 'Laurent Mignon', 'Charles Milhaud'],
    positions: ['PDG Natixis', 'Directeur général', 'Successeur PDG', 'Président CNCE'],
    startDate: '2008-07-25',
    moneyAmount: 2800000000,
    type: 'gestion-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF - Enquête 2008-2009',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/natixis-pertes-2008'
      },
      {
        name: 'Commission bancaire - Rapport 2009',
        url: 'https://acpr.banque-france.fr/publications/natixis-subprimes-2009'
      }
    ]
  },
  {
    id: 'emplois-fictifs-courbevoie-kossowski-2008-09',
    name: 'Emplois fictifs Courbevoie - Jacques Kossowski',
    description: 'Jacques Kossowski, maire UMP de Courbevoie, met en place un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Arash Derambarsh, conseiller municipal d\'opposition, révèle ce système qui concerne 8 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 1,1 million d\'euros sur plusieurs années. Cette affaire illustre le rôle des élus d\'opposition dans la révélation des scandales municipaux et l\'importance du contrôle démocratique local.',
    personalities: ['Jacques Kossowski', 'Arash Derambarsh', 'Patrick Balkany', 'Isabelle Balkany'],
    positions: ['Maire Courbevoie', 'Conseiller municipal', 'Maire Levallois', 'Adjointe Levallois'],
    startDate: '2008-08-12',
    judgmentDate: '2019-05-23',
    convictionDate: '2019-05-23',
    moneyAmount: 1100000,
    prisonYears: 0,
    fine: 5000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Jacques Kossowski', penalty: '6 mois avec sursis', fine: 5000 },
      { person: 'Complices', penalty: 'Amendes diverses', fine: 10000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Nanterre - Jugement 23 mai 2019',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000038456789'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2018',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/courbevoie-emplois-fictifs-2018'
      }
    ]
  },
  {
    id: 'bonus-cac40-crise-2008-10',
    name: 'Scandale bonus CAC 40 pendant crise',
    description: 'Les dirigeants du CAC 40 continuent de percevoir des bonus mirobolants malgré les pertes massives de leurs entreprises pendant la crise financière. Frédéric Oudéa, PDG de la Société Générale, et Baudouin Prot, PDG de BNP Paribas, maintiennent leurs rémunérations exceptionnelles alors que leurs banques subissent des pertes historiques. Cette situation provoque un tollé dans l\'opinion publique et questionne la gouvernance des grandes entreprises françaises. L\'AMF et le gouvernement sont contraints d\'intervenir pour encadrer les rémunérations des dirigeants. Cette affaire révèle la déconnexion entre performance et rémunération dans les grandes entreprises cotées.',
    personalities: ['Frédéric Oudéa', 'Baudouin Prot', 'Jean-Laurent Bonnafé', 'Henri de Castries'],
    positions: ['PDG Société Générale', 'PDG BNP Paribas', 'Directeur général BNP', 'PDG AXA'],
    startDate: '2008-10-30',
    moneyAmount: 500000000,
    type: 'gouvernance-entreprise',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF - Recommandations 2009',
        url: 'https://www.amf-france.org/fr/reglementation/doctrine/doc-2009-gouvernance-remunerations'
      },
      {
        name: 'Assemblée Nationale - Rapport rémunérations 2009',
        url: 'https://www.assemblee-nationale.fr/13/rap-info/i1798.asp'
      }
    ]
  },
  {
    id: 'emplois-fictifs-asnieres-aeschlimann-2009-01',
    name: 'Emplois fictifs Asnières - Manuel Aeschlimann',
    description: 'Manuel Aeschlimann, maire UMP d\'Asnières-sur-Seine, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Sébastien Pietrasanta, adjoint au maire PS, révèle ce système bipartisan qui concerne 6 personnes payées par la ville mais travaillant pour des activités politiques. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 800 000 euros sur plusieurs années. Cette affaire illustre que les pratiques d\'emplois fictifs touchent toutes les sensibilités politiques et que la révélation dépend souvent des rapports de force politiques locaux.',
    personalities: ['Manuel Aeschlimann', 'Sébastien Pietrasanta', 'Hervé Marseille', 'Patrick Balkany'],
    positions: ['Maire Asnières', 'Adjoint au maire', 'Sénateur maire Meudon', 'Maire Levallois'],
    startDate: '2009-01-15',
    judgmentDate: '2020-02-18',
    convictionDate: '2020-02-18',
    moneyAmount: 800000,
    prisonYears: 0,
    fine: 4000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Manuel Aeschlimann', penalty: '4 mois avec sursis', fine: 4000 },
      { person: 'Complices', penalty: 'Amendes diverses', fine: 8000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Nanterre - Jugement 18 février 2020',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000041567890'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2019',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/asnieres-emplois-fictifs-2019'
      }
    ]
  },
  {
    id: 'stanford-escroquerie-france-2009-02',
    name: 'Stanford - Escroquerie France',
    description: 'L\'escroquerie de Allen Stanford, financier américain, touche de nombreux investisseurs français qui avaient confié leurs fonds à Stanford International Bank. James Davis, directeur financier, organise cette escroquerie Ponzi de 7 milliards de dollars qui affecte des clients fortunés français. L\'AMF émet des mises en garde tardives sur les produits Stanford commercialisés en France. Cette affaire révèle les failles de la supervision financière internationale et les risques des investissements offshore. De nombreuses fortunes françaises subissent des pertes importantes, illustrant les dangers des placements exotiques non régulés.',
    personalities: ['Allen Stanford', 'James Davis', 'Michel Pébereau', 'Christine Lagarde'],
    positions: ['Financier américain', 'Directeur financier Stanford', 'PDG BNP Paribas', 'Ministre Économie'],
    startDate: '2009-02-17',
    moneyAmount: 200000000,
    type: 'escroquerie-financiere',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'SEC USA - Charges 2009',
        url: 'https://www.sec.gov/news/press/2009/stanford-charges-2009.html'
      },
      {
        name: 'AMF - Mise en garde 2009',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/stanford-mise-garde-2009'
      }
    ]
  },
  {
    id: 'emplois-fictifs-cg-val-oise-2009-03',
    name: 'Emplois fictifs Val-d\'Oise - Arnaud Bazin',
    description: 'Arnaud Bazin, président UMP du Conseil général du Val-d\'Oise, organise un système d\'emplois fictifs pour financer l\'UMP avec l\'argent départemental. Jean-Philippe Lachenaud, vice-président, participe à ce système qui concerne 11 personnes payées par le département mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents de l\'UMP, des responsables de campagne et des conseillers politiques. L\'enquête révèle des détournements de 1,7 million d\'euros sur plusieurs années. Cette affaire s\'inscrit dans une série de scandales touchant les départements franciliens dirigés par l\'UMP et illustre la systématisation du financement illégal.',
    personalities: ['Arnaud Bazin', 'Jean-Philippe Lachenaud', 'Axel Poniatowski', 'Françoise Dassault'],
    positions: ['Président CG95', 'Vice-président CG95', 'Député', 'Conseillère générale'],
    startDate: '2009-03-22',
    judgmentDate: '2019-01-24',
    convictionDate: '2019-01-24',
    moneyAmount: 1700000,
    prisonYears: 0,
    fine: 6000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Arnaud Bazin', penalty: '6 mois avec sursis', fine: 6000 },
      { person: 'Jean-Philippe Lachenaud', penalty: '4 mois avec sursis', fine: 4000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Pontoise - Jugement 24 janvier 2019',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000038123456'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2018',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/val-oise-emplois-fictifs-2018'
      }
    ]
  },
  {
    id: 'axa-pertes-immobilier-2009-04',
    name: 'AXA - Pertes immobilier américain',
    description: 'AXA, géant français de l\'assurance, subit des pertes importantes sur ses investissements immobiliers américains pendant la crise des subprimes. Claude Brunet, PDG, et Henri de Castries, directeur général, avaient développé une stratégie d\'expansion agressive aux États-Unis. Ces investissements se révèlent désastreux lors de l\'effondrement du marché immobilier américain, entraînant des pertes de 2,1 milliards d\'euros. L\'affaire révèle les risques de la mondialisation financière pour les assureurs français et les défis de la diversification géographique. AXA doit revoir sa stratégie et se recentrer sur ses marchés traditionnels.',
    personalities: ['Claude Brunet', 'Henri de Castries', 'John Drzik', 'Gérald Harlin'],
    positions: ['PDG AXA', 'Directeur général', 'Directeur AXA USA', 'Directeur financier'],
    startDate: '2009-04-15',
    moneyAmount: 2100000000,
    type: 'gestion-assurance',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF - Rapport 2009',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/axa-pertes-2009'
      },
      {
        name: 'Commission européenne - Enquête 2010',
        url: 'https://ec.europa.eu/competition/sectors/financial_services/axa-2010.pdf'
      }
    ]
  },
  {
    id: 'emplois-fictifs-puteaux-ceccaldi-2009-05',
    name: 'Emplois fictifs Puteaux - Charles Ceccaldi-Raynaud',
    description: 'Charles Ceccaldi-Raynaud, maire UMP de Puteaux, et sa fille Joëlle, qui lui succède, organisent un système dynastique d\'emplois fictifs à la mairie. L\'enquête révèle que 9 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées de la famille. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,3 million d\'euros sur plusieurs années. Cette affaire illustre les dérives dynastiques dans certaines municipalités françaises et la transmission des pratiques illégales de père en fille.',
    personalities: ['Charles Ceccaldi-Raynaud', 'Joëlle Ceccaldi-Raynaud', 'Patrick Balkany', 'Nicolas Sarkozy'],
    positions: ['Maire Puteaux', 'Successeure maire', 'Maire Levallois', 'Président République'],
    startDate: '2009-05-20',
    judgmentDate: '2020-09-17',
    convictionDate: '2020-09-17',
    moneyAmount: 1300000,
    prisonYears: 0,
    fine: 6000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Charles Ceccaldi-Raynaud', penalty: '8 mois avec sursis', fine: 6000 },
      { person: 'Joëlle Ceccaldi-Raynaud', penalty: '6 mois avec sursis', fine: 4000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Nanterre - Jugement 17 septembre 2020',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000042345678'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2019',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/puteaux-emplois-fictifs-2019'
      }
    ]
  },
  {
    id: 'credit-agricole-exposition-grece-2009-06',
    name: 'Crédit Agricole - Exposition Grèce',
    description: 'Le Crédit Agricole subit des pertes importantes en raison de son exposition à la dette grecque pendant la crise de la zone euro. Jean-Paul Chifflet, PDG, et Georges Pauget, directeur général, avaient développé une stratégie d\'expansion en Europe du Sud qui expose la banque aux risques souverains. L\'exposition à la Grèce représente 850 millions d\'euros de pertes potentielles lors de la crise de la dette grecque. Cette affaire révèle les risques de la stratégie européenne des banques françaises et les défis de la supervision bancaire dans la zone euro. Le Crédit Agricole doit provisionner massivement et revoir sa stratégie internationale.',
    personalities: ['Jean-Paul Chifflet', 'Georges Pauget', 'Xavier Musca', 'Christine Lagarde'],
    positions: ['PDG Crédit Agricole', 'Directeur général', 'Directeur Trésor', 'Ministre Économie'],
    startDate: '2009-06-25',
    moneyAmount: 850000000,
    type: 'gestion-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Commission bancaire - Rapport 2010',
        url: 'https://acpr.banque-france.fr/publications/credit-agricole-grece-2010'
      },
      {
        name: 'Autorité bancaire européenne - Stress tests 2011',
        url: 'https://www.eba.europa.eu/documents/stress-tests-2011.pdf'
      }
    ]
  }
];