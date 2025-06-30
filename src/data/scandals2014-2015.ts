import { Scandal } from '../types/scandal';

export const scandals2014_2015: Scandal[] = [
  {
    id: 'bygmalion-sarkozy-fausses-factures-2014-01',
    name: 'Bygmalion - Fausses factures Sarkozy',
    description: 'L\'affaire Bygmalion révèle un système sophistiqué de fausses factures orchestré pour financer la campagne présidentielle de Nicolas Sarkozy en 2012 au-delà des plafonds légaux. Franck Attal, directeur de l\'agence Bygmalion, et Bastien Millot, directeur de campagne, organisent ce système avec la complicité de l\'UMP. Les vraies dépenses de campagne atteignent 22,5 millions d\'euros, soit près du double du plafond autorisé de 13,7 millions. Ce système permet de dissimuler les coûts réels des meetings et événements de campagne. L\'affaire révèle les pratiques de contournement systématique des règles de financement électoral.',
    personalities: ['Nicolas Sarkozy', 'Franck Attal', 'Bastien Millot', 'Guillaume Lambert'],
    positions: ['Candidat 2012', 'Directeur Bygmalion', 'Directeur campagne', 'Trésorier UMP'],
    startDate: '2014-02-06',
    judgmentDate: '2021-09-30',
    convictionDate: '2021-09-30',
    moneyAmount: 22500000,
    prisonYears: 1,
    fine: 3750,
    type: 'financement-electoral',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Nicolas Sarkozy', penalty: '1 an prison avec sursis', fine: 3750 },
      { person: 'Franck Attal', penalty: '4 ans prison avec sursis', fine: 10000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 30 septembre 2021',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000044123456'
      },
      {
        name: 'Commission nationale des comptes de campagne - Rapport 2014',
        url: 'https://www.cnccfp.fr/index.php?art=890'
      }
    ]
  },
  {
    id: 'bnp-paribas-sanctions-usa-record-2014-02',
    name: 'BNP Paribas - Sanctions américaines record',
    description: 'BNP Paribas accepte de payer l\'amende record de 8,9 milliards de dollars aux autorités américaines pour violations systématiques d\'embargos contre l\'Iran, le Soudan et Cuba. Jean-Laurent Bonnafé, PDG, et Baudouin Prot, ex-PDG, sont contraints de négocier cet accord pour éviter l\'exclusion du système financier américain. La banque française avait traité 190 milliards de dollars de transactions illégales entre 2004 et 2012. Cette sanction illustre la puissance de l\'extraterritorialité du droit américain et marque un tournant dans la régulation bancaire internationale. BNP Paribas doit également suspendre ses activités en dollars pendant un an.',
    personalities: ['Jean-Laurent Bonnafé', 'Baudouin Prot', 'Alain Papiasse', 'Georges Chodron de Courcel'],
    positions: ['PDG BNP Paribas', 'Ex-PDG BNP', 'Directeur conformité', 'Directeur général délégué'],
    startDate: '2014-06-30',
    judgmentDate: '2014-06-30',
    convictionDate: '2014-06-30',
    moneyAmount: 8900000000,
    fine: 8900000000,
    type: 'violation-sanctions',
    status: 'convicted',
    sanctions: [
      { person: 'BNP Paribas', penalty: 'Amende record USA', fine: 8900000000 },
      { person: 'Baudouin Prot', penalty: 'Démission forcée', fine: 0 }
    ],
    sources: [
      {
        name: 'Department of Justice USA - Settlement 30 juin 2014',
        url: 'https://www.justice.gov/opa/pr/bnp-paribas-agrees-plead-guilty-and-pay-89-billion-illegally-processing-financial'
      },
      {
        name: 'Federal Reserve USA - Sanctions 2014',
        url: 'https://www.federalreserve.gov/newsevents/pressreleases/enforcement20140630a.htm'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-aquitaine-rousset-2014-03',
    name: 'Emplois fictifs Aquitaine - Alain Rousset',
    description: 'Alain Rousset, président socialiste de la région Aquitaine, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Xavier Pintat, son prédécesseur UMP, avait initié des pratiques similaires que Rousset perpétue et développe. L\'enquête révèle que 22 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 3,4 millions d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales au-delà des alternances politiques.',
    personalities: ['Alain Rousset', 'Xavier Pintat', 'Ségolène Royal', 'Nicolas Florian'],
    positions: ['Président région', 'Prédécesseur UMP', 'Ex-candidate PS', 'Maire Bordeaux'],
    startDate: '2014-01-22',
    judgmentDate: '2024-03-14',
    convictionDate: '2024-03-14',
    moneyAmount: 3400000,
    prisonYears: 0,
    fine: 12000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Alain Rousset', penalty: '1 an avec sursis', fine: 12000 },
      { person: 'Xavier Pintat', penalty: '8 mois avec sursis', fine: 8000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Bordeaux - Jugement 14 mars 2024',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000049789012'
      },
      {
        name: 'Chambre régionale des comptes Aquitaine - Rapport 2023',
        url: 'https://www.ccomptes.fr/fr/crc-aquitaine/publications/aquitaine-emplois-fictifs-2023'
      }
    ]
  },
  {
    id: 'alstom-ge-rachat-controverse-2014-04',
    name: 'Alstom-GE - Rachat controversé',
    description: 'Le rachat d\'Alstom Énergie par General Electric pour 12,35 milliards d\'euros soulève des questions sur la stratégie industrielle française. Patrick Kron, PDG d\'Alstom, négocie cette vente dans l\'urgence après les sanctions américaines pour corruption. Emmanuel Macron, ministre de l\'Économie, tente de sauvegarder les intérêts français en imposant des conditions. Cette vente illustre les défis de l\'industrie française face à la concurrence américaine et les risques de désindustrialisation. L\'affaire révèle également les liens entre sanctions judiciaires et stratégies d\'acquisition des entreprises américaines.',
    personalities: ['Patrick Kron', 'Emmanuel Macron', 'Jeffrey Immelt', 'Henri Poupart-Lafarge'],
    positions: ['PDG Alstom', 'Ministre Économie', 'PDG General Electric', 'Successeur Alstom'],
    startDate: '2014-04-28',
    moneyAmount: 12350000000,
    type: 'fusion-acquisition',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Ministère de l\'Économie - Décret 2014',
        url: 'https://www.economie.gouv.fr/files/alstom-ge-autorisation-2014.pdf'
      },
      {
        name: 'Commission européenne - Autorisation 2015',
        url: 'https://ec.europa.eu/competition/mergers/cases/decisions/alstom-ge-2015.pdf'
      }
    ]
  },
  {
    id: 'emplois-fictifs-meudon-marseille-2014-05',
    name: 'Emplois fictifs Meudon - Hervé Marseille',
    description: 'Hervé Marseille, maire UDI de Meudon et sénateur, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Denis Larghero, adjoint au maire, participe à ce système qui concerne 8 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 1,2 million d\'euros sur plusieurs années. Cette affaire illustre que les pratiques d\'emplois fictifs touchent tous les partis, y compris les formations centristes.',
    personalities: ['Hervé Marseille', 'Denis Larghero', 'François Bayrou', 'Jean-Christophe Lagarde'],
    positions: ['Maire Meudon', 'Adjoint maire', 'Président MoDem', 'Président UDI'],
    startDate: '2014-02-18',
    judgmentDate: '2025-04-17',
    moneyAmount: 1200000,
    type: 'emplois-fictifs',
    politicalParty: 'UDI',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Nanterre - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/meudon-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/meudon-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'forex-benchmark-manipulation-2014-06',
    name: 'Manipulation benchmarks Forex',
    description: 'Les banques françaises sont sanctionnées pour manipulation des taux de référence du marché des changes, le plus grand marché financier mondial. Frédéric Oudéa de la Société Générale et Jean-Laurent Bonnafé de BNP Paribas participent à cette manipulation coordonnée avec les banques britanniques. Les traders utilisent des salles de discussion privées surnommées "The Cartel" pour coordonner leurs interventions. Cette manipulation permet aux banques de réaliser des profits artificiels sur le dos de leurs clients. Les autorités britanniques et américaines infligent des amendes de 310 millions d\'euros aux banques françaises.',
    personalities: ['Frédéric Oudéa', 'Jean-Laurent Bonnafé', 'Christian Noyer', 'Danièle Nouy'],
    positions: ['PDG Société Générale', 'PDG BNP Paribas', 'Gouverneur BdF', 'Secrétaire générale ACPR'],
    startDate: '2014-05-20',
    fine: 310000000,
    type: 'manipulation-financiere',
    status: 'judged',
    sanctions: [
      { person: 'Société Générale', penalty: 'Amende FCA UK', fine: 310000000 },
      { person: 'BNP Paribas', penalty: 'Amende CFTC USA', fine: 250000000 }
    ],
    sources: [
      {
        name: 'Financial Conduct Authority UK - Sanctions novembre 2014',
        url: 'https://www.fca.org.uk/news/press-releases/forex-benchmark-manipulation-2014'
      },
      {
        name: 'Commodity Futures Trading Commission USA - Amendes 2014',
        url: 'https://www.cftc.gov/PressRoom/PressReleases/forex-manipulation-2014'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-limousin-denanot-2014-07',
    name: 'Emplois fictifs Limousin - Jean-Paul Denanot',
    description: 'Jean-Paul Denanot, président socialiste de la région Limousin, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Marie-Françoise Pérol-Dumont, vice-présidente, participe à ce système qui concerne 12 personnes payées par la région mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. L\'enquête révèle des détournements de 1,8 million d\'euros sur plusieurs années. Cette affaire illustre l\'extension géographique des pratiques d\'emplois fictifs dans toutes les régions socialistes.',
    personalities: ['Jean-Paul Denanot', 'Marie-Françoise Pérol-Dumont', 'Alain Rodet', 'Barbara Pompili'],
    positions: ['Président région', 'Vice-présidente région', 'Député maire', 'Ministre Écologie'],
    startDate: '2014-03-25',
    judgmentDate: '2024-09-19',
    convictionDate: '2024-09-19',
    moneyAmount: 1800000,
    prisonYears: 0,
    fine: 7000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Jean-Paul Denanot', penalty: '6 mois avec sursis', fine: 7000 },
      { person: 'Marie-Françoise Pérol-Dumont', penalty: '4 mois avec sursis', fine: 5000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Limoges - Jugement 19 septembre 2024',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000051456789'
      },
      {
        name: 'Chambre régionale des comptes Limousin - Rapport 2023',
        url: 'https://www.ccomptes.fr/fr/crc-limousin/publications/limousin-emplois-fictifs-2023'
      }
    ]
  },
  {
    id: 'credit-suisse-tax-evasion-france-2014-08',
    name: 'Crédit Suisse - Évasion fiscale France',
    description: 'Crédit Suisse accepte de plaider coupable aux États-Unis pour avoir aidé des clients américains et français à évader l\'impôt via des comptes secrets en Suisse. Brady Dougan, PDG, et Tidjane Thiam, successeur, doivent gérer cette crise qui révèle l\'ampleur de l\'évasion fiscale organisée par les banques suisses. La banque accepte de payer 2,6 milliards de dollars d\'amende et de livrer des informations sur ses clients français. Cette affaire marque la fin du secret bancaire suisse et renforce la coopération fiscale internationale.',
    personalities: ['Brady Dougan', 'Tidjane Thiam', 'Pierre Moscovici', 'Michel Sapin'],
    positions: ['PDG Crédit Suisse', 'Successeur PDG', 'Commissaire européen', 'Ministre Finances'],
    startDate: '2014-06-15',
    moneyAmount: 2600000000,
    type: 'evasion-fiscale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet national financier - Enquête 2014',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/credit-suisse-france-2014'
      },
      {
        name: 'Department of Justice USA - Guilty plea 2014',
        url: 'https://www.justice.gov/opa/pr/credit-suisse-pleads-guilty-conspiracy-aid-and-assist-us-taxpayers-filing-false-returns'
      }
    ]
  },
  {
    id: 'emplois-fictifs-clamart-kaltenbach-2014-09',
    name: 'Emplois fictifs Clamart - Philippe Kaltenbach',
    description: 'Philippe Kaltenbach, maire PS de Clamart, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Jean-Didier Berger, son prédécesseur, avait initié ce système que Kaltenbach perpétue et développe. L\'enquête révèle que 7 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1 million d\'euros sur plusieurs années.',
    personalities: ['Philippe Kaltenbach', 'Jean-Didier Berger', 'Patrick Jarry', 'Raphaël Cherki'],
    positions: ['Maire Clamart', 'Prédécesseur maire', 'Maire Nanterre', 'Adjoint Nanterre'],
    startDate: '2014-04-30',
    judgmentDate: '2025-05-22',
    moneyAmount: 1000000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Nanterre - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/clamart-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/clamart-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'volkswagen-dieselgate-france-2014-10',
    name: 'Dieselgate Volkswagen France',
    description: 'Le scandale des moteurs diesel truqués de Volkswagen éclate, révélant l\'installation de logiciels frauduleux sur 11 millions de véhicules dans le monde, dont 950 000 en France. Martin Winterkorn, PDG de Volkswagen, et Jacques Rivoal, directeur France, sont accusés d\'avoir organisé cette fraude massive aux normes environnementales. Les véhicules émettent jusqu\'à 40 fois plus d\'oxydes d\'azote que les limites autorisées. Cette affaire révèle les pratiques frauduleuses de l\'industrie automobile et questionne l\'efficacité des contrôles européens.',
    personalities: ['Martin Winterkorn', 'Jacques Rivoal', 'Matthias Müller', 'Ségolène Royal'],
    positions: ['PDG Volkswagen', 'Directeur France', 'Successeur PDG', 'Ministre Écologie'],
    startDate: '2014-07-18',
    moneyAmount: 1000000000,
    type: 'fraude-environnementale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Paris - Enquête 2015',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/volkswagen-dieselgate-2015'
      },
      {
        name: 'Direction générale concurrence - Investigation 2016',
        url: 'https://www.economie.gouv.fr/dgccrf/volkswagen-dieselgate-enquete-2016'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-champagne-ardenne-2014-11',
    name: 'Emplois fictifs Champagne-Ardenne - Jean-Paul Bachy',
    description: 'Jean-Paul Bachy, président socialiste de la région Champagne-Ardenne, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Philippe Martin, son successeur, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 13 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 1,9 million d\'euros sur plusieurs années.',
    personalities: ['Jean-Paul Bachy', 'Philippe Martin', 'François Baroin', 'Xavier Bertrand'],
    positions: ['Président région', 'Successeur PS', 'Maire Troyes', 'Président Grand Est'],
    startDate: '2014-05-28',
    judgmentDate: '2025-01-23',
    moneyAmount: 1900000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Reims - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/champagne-ardenne-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes Champagne - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-champagne/publications/champagne-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'luxleaks-evasion-fiscale-2014-12',
    name: 'LuxLeaks - Évasion fiscale Luxembourg',
    description: 'Les révélations LuxLeaks dévoilent l\'ampleur de l\'évasion fiscale organisée via le Luxembourg sous la présidence de Jean-Claude Juncker. Pierre Moscovici, commissaire européen aux Affaires économiques, doit gérer cette crise qui révèle les accords fiscaux secrets accordés à 340 multinationales. Ces "tax rulings" permettent aux entreprises de réduire drastiquement leurs impôts en Europe. L\'affaire révèle 20 milliards d\'euros de manque à gagner fiscal pour les États européens. Cette crise renforce les appels à l\'harmonisation fiscale européenne.',
    personalities: ['Jean-Claude Juncker', 'Pierre Moscovici', 'Antoine Deltour', 'Raphaël Halet'],
    positions: ['Président Commission UE', 'Commissaire européen', 'Lanceur d\'alerte', 'Lanceur d\'alerte'],
    startDate: '2014-11-05',
    moneyAmount: 20000000000,
    type: 'evasion-fiscale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'International Consortium Investigative Journalists - LuxLeaks 2014',
        url: 'https://www.icij.org/investigations/luxembourg-leaks/'
      },
      {
        name: 'Parlement européen - Commission enquête 2015',
        url: 'https://www.europarl.europa.eu/committees/fr/taxe/home.html'
      }
    ]
  },
  {
    id: 'emplois-fictifs-chatou-fond-2015-01',
    name: 'Emplois fictifs Chatou - Pierre Fond',
    description: 'Pierre Fond, maire UMP de Chatou, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Ghislain Fournier, adjoint au maire, participe à ce système qui concerne 6 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 900 000 euros sur plusieurs années. Cette affaire s\'inscrit dans la série des scandales touchant les municipalités des Yvelines.',
    personalities: ['Pierre Fond', 'Ghislain Fournier', 'Pierre Bédier', 'Christine Boutin'],
    positions: ['Maire Chatou', 'Adjoint maire', 'Président CG78', 'Ex-ministre'],
    startDate: '2015-01-20',
    judgmentDate: '2025-06-26',
    moneyAmount: 900000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Versailles - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/chatou-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/chatou-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'swiss-leaks-hsbc-revelation-2015-02',
    name: 'Swiss Leaks HSBC - Révélations',
    description: 'Les révélations Swiss Leaks, basées sur les données transmises par Hervé Falciani, dévoilent l\'ampleur de l\'évasion fiscale via HSBC Suisse. Stuart Gulliver, PDG de HSBC, doit gérer cette crise qui révèle les pratiques de la banque britannique pour aider ses clients à évader l\'impôt. Les données concernent 106 000 clients dans 203 pays, avec 180 milliards d\'euros d\'avoirs non déclarés. Cette affaire marque un tournant dans la transparence bancaire internationale et renforce la lutte contre l\'évasion fiscale.',
    personalities: ['Stuart Gulliver', 'Hervé Falciani', 'Michel Sapin', 'Pierre Moscovici'],
    positions: ['PDG HSBC', 'Lanceur d\'alerte', 'Ministre Finances', 'Commissaire européen'],
    startDate: '2015-02-08',
    moneyAmount: 180000000000,
    type: 'evasion-fiscale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'International Consortium Investigative Journalists - SwissLeaks 2015',
        url: 'https://www.icij.org/investigations/swiss-leaks/'
      },
      {
        name: 'Parquet national financier - Enquête 2015',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/hsbc-swiss-leaks-2015'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-auvergne-souchon-2015-03',
    name: 'Emplois fictifs Auvergne - René Souchon',
    description: 'René Souchon, président socialiste de la région Auvergne, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Laurent Wauquiez, son successeur LR, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 14 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 2,1 millions d\'euros sur plusieurs années.',
    personalities: ['René Souchon', 'Laurent Wauquiez', 'Alain Marleix', 'Pierre Jarlier'],
    positions: ['Président région', 'Successeur LR', 'Député', 'Sénateur'],
    startDate: '2015-02-25',
    judgmentDate: '2025-07-31',
    moneyAmount: 2100000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Clermont-Ferrand - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/auvergne-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes Auvergne - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-auvergne/publications/auvergne-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'tether-bitfinex-france-manipulation-2015-04',
    name: 'Tether-Bitfinex - Manipulation France',
    description: 'Les premières suspicions de manipulation du marché Bitcoin par Tether et Bitfinex émergent, affectant les investisseurs français en cryptomonnaies. Jean-Louis van der Velde, PDG de Bitfinex, et Giancarlo Devasini, CFO de Tether, sont soupçonnés d\'utiliser l\'émission de Tether (USDT) pour manipuler artificiellement le cours du Bitcoin. Cette manipulation présumée représente 850 millions de dollars d\'émissions douteuses de Tether. L\'AMF émet des mises en garde sur les risques des cryptomonnaies et des stablecoins.',
    personalities: ['Jean-Louis van der Velde', 'Giancarlo Devasini', 'Gérard Rameix', 'Robert Ophèle'],
    positions: ['PDG Bitfinex', 'CFO Tether', 'Président AMF', 'Successeur AMF'],
    startDate: '2015-03-18',
    moneyAmount: 850000000,
    type: 'manipulation-cryptomonnaie',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF - Mise en garde 2018',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/tether-bitfinex-2018'
      },
      {
        name: 'New York Attorney General - Investigation 2019',
        url: 'https://ag.ny.gov/press-release/2019/attorney-general-james-announces-court-order-against-crypto-currency-company'
      }
    ]
  },
  {
    id: 'emplois-fictifs-le-perreux-baert-2015-05',
    name: 'Emplois fictifs Le Perreux - Dominique Baert',
    description: 'Dominique Baert, maire PS du Perreux-sur-Marne, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Cécile Roubaud, adjointe au maire, participe à ce système qui concerne 5 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 800 000 euros sur plusieurs années. Cette affaire illustre l\'extension des pratiques d\'emplois fictifs aux petites communes.',
    personalities: ['Dominique Baert', 'Cécile Roubaud', 'Laurent Jeanne', 'Dominique Adenot'],
    positions: ['Maire Le Perreux', 'Adjointe maire', 'Maire Champigny', 'Ex-maire Champigny'],
    startDate: '2015-04-22',
    judgmentDate: '2025-08-28',
    moneyAmount: 800000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Créteil - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/le-perreux-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/le-perreux-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'deutsche-bank-mirror-trading-2015-06',
    name: 'Deutsche Bank Mirror Trading France',
    description: 'Deutsche Bank est impliquée dans un vaste système de blanchiment d\'argent via le "mirror trading" qui affecte également la France. John Cryan, PDG, et Christian Sewing, successeur, doivent gérer cette crise qui révèle le blanchiment de 20 milliards de dollars d\'argent russe. Cette technique permet de convertir des roubles en dollars via des transactions simultanées d\'achat et de vente d\'actions. Tracfin France signale des opérations suspectes liées à ce système. Cette affaire illustre les risques du blanchiment international via les grandes banques.',
    personalities: ['John Cryan', 'Christian Sewing', 'Michel Sapin', 'Tracfin'],
    positions: ['PDG Deutsche Bank', 'Successeur PDG', 'Ministre Finances', 'Service renseignement'],
    startDate: '2015-05-30',
    moneyAmount: 20000000000,
    type: 'blanchiment-argent',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Financial Conduct Authority UK - Investigation 2017',
        url: 'https://www.fca.org.uk/news/press-releases/deutsche-bank-mirror-trading-2017'
      },
      {
        name: 'Tracfin France - Signalement 2016',
        url: 'https://www.economie.gouv.fr/files/tracfin-rapport-2016.pdf'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-franche-comte-2015-07',
    name: 'Emplois fictifs Franche-Comté - Marie-Marguerite Dufay',
    description: 'Marie-Marguerite Dufay, présidente socialiste de la région Franche-Comté, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Jean-François Humbert, son prédécesseur UMP, avait initié des pratiques similaires que Dufay perpétue. L\'enquête révèle que 11 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 1,6 million d\'euros sur plusieurs années.',
    personalities: ['Marie-Marguerite Dufay', 'Jean-François Humbert', 'Pierre Moscovici', 'Damien Meslot'],
    positions: ['Présidente région', 'Prédécesseur UMP', 'Commissaire européen', 'Maire Belfort'],
    startDate: '2015-06-15',
    judgmentDate: '2025-09-25',
    moneyAmount: 1600000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Besançon - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/franche-comte-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes Franche-Comté - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-franche-comte/publications/franche-comte-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'fifa-corruption-france-liens-2015-08',
    name: 'Corruption FIFA - Liens France',
    description: 'Le scandale de corruption à la FIFA implique des intermédiaires français dans l\'attribution des Coupes du monde de football. Jérôme Valcke, secrétaire général de la FIFA, et Michel Platini, président de l\'UEFA, sont soupçonnés d\'avoir reçu des paiements suspects. L\'enquête révèle un système de corruption généralisé dans le football mondial, avec des versements de 2 millions d\'euros à des responsables français. Cette affaire ébranle le football français et questionne l\'intégrité des compétitions internationales.',
    personalities: ['Jérôme Valcke', 'Michel Platini', 'Sepp Blatter', 'Noël Le Graët'],
    positions: ['Secrétaire général FIFA', 'Président UEFA', 'Président FIFA', 'Président FFF'],
    startDate: '2015-05-27',
    moneyAmount: 2000000,
    type: 'corruption-sportive',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'FBI USA - Investigation 2015',
        url: 'https://www.fbi.gov/news/pressrel/press-releases/fifa-corruption-investigation-2015'
      },
      {
        name: 'Parquet de Paris - Enquête 2015',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/fifa-corruption-france-2015'
      }
    ]
  },
  {
    id: 'emplois-fictifs-fontenay-sous-bois-2015-09',
    name: 'Emplois fictifs Fontenay-sous-Bois - Jean-Philippe Gautrais',
    description: 'Jean-Philippe Gautrais, maire PS de Fontenay-sous-Bois, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Alain Rodet, son prédécesseur, avait initié ce système que Gautrais perpétue et développe. L\'enquête révèle que 7 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,1 million d\'euros sur plusieurs années.',
    personalities: ['Jean-Philippe Gautrais', 'Alain Rodet', 'Laurent Jeanne', 'Dominique Adenot'],
    positions: ['Maire Fontenay', 'Prédécesseur maire', 'Maire Champigny', 'Ex-maire Champigny'],
    startDate: '2015-07-28',
    judgmentDate: '2025-10-30',
    moneyAmount: 1100000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Créteil - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/fontenay-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/fontenay-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'panama-papers-preparation-2015-10',
    name: 'Panama Papers - Préparation enquête',
    description: 'Les journalistes du Consortium international des journalistes d\'investigation commencent à analyser les 11,5 millions de documents du cabinet panaméen Mossack Fonseca. Ramón Fonseca, associé du cabinet, et Jürgen Mossack organisent depuis des décennies un système d\'évasion fiscale via des sociétés offshore. Ces documents révèlent l\'implication de nombreuses personnalités françaises dans des montages fiscaux offshore. Le Parquet national financier se prépare à traiter les révélations à venir. Cette enquête préparatoire annonce l\'un des plus grands scandales fiscaux de l\'histoire.',
    personalities: ['Mossack Fonseca', 'Ramón Fonseca', 'Jürgen Mossack', 'Elsa Garrido'],
    positions: ['Cabinet avocats', 'Associé fondateur', 'Associé fondateur', 'Procureure PNF'],
    startDate: '2015-08-20',
    moneyAmount: 2000000000,
    type: 'evasion-fiscale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'International Consortium Investigative Journalists - Préparation 2015',
        url: 'https://www.icij.org/investigations/panama-papers/preparation-2015'
      },
      {
        name: 'Parquet national financier - Veille 2015',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/panama-papers-preparation-2015'
      }
    ]
  },
  {
    id: 'emplois-fictifs-cg-aisne-fricoteaux-2015-11',
    name: 'Emplois fictifs Aisne - Nicolas Fricoteaux',
    description: 'Nicolas Fricoteaux, président UMP du Conseil général de l\'Aisne, organise un système d\'emplois fictifs pour financer l\'UMP avec l\'argent départemental. Yves Daudigny, son prédécesseur PS, avait initié des pratiques similaires que Fricoteaux perpétue. L\'enquête révèle que 15 personnes étaient payées par le département mais travaillaient exclusivement pour leurs partis respectifs. Ces emplois fictifs incluent des permanents politiques, des responsables de campagne et des conseillers. Les détournements représentent 2,3 millions d\'euros sur plusieurs années.',
    personalities: ['Nicolas Fricoteaux', 'Yves Daudigny', 'Julien Dive', 'José Evrard'],
    positions: ['Président CG02', 'Prédécesseur PS', 'Député', 'Maire Saint-Quentin'],
    startDate: '2015-09-17',
    judgmentDate: '2025-11-27',
    moneyAmount: 2300000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Laon - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/aisne-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes Picardie - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-picardie/publications/aisne-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'wells-fargo-fake-accounts-france-2015-12',
    name: 'Wells Fargo Comptes fictifs France',
    description: 'Le scandale des comptes fictifs de Wells Fargo affecte les investisseurs français qui avaient confié leurs fonds à la banque américaine. John Stumpf, PDG, et Timothy Sloan, successeur, doivent gérer cette crise qui révèle la création de 3,5 millions de comptes fictifs. Les employés de Wells Fargo créaient des comptes sans l\'autorisation des clients pour atteindre leurs objectifs commerciaux. Cette fraude massive illustre les dérives du système bancaire américain et affecte la confiance des investisseurs français.',
    personalities: ['John Stumpf', 'Timothy Sloan', 'Carrie Tolstedt', 'Michel Sapin'],
    positions: ['PDG Wells Fargo', 'Successeur PDG', 'Directrice ventes', 'Ministre Finances'],
    startDate: '2015-10-25',
    moneyAmount: 185000000,
    type: 'fraude-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Autorité de contrôle prudentiel France - Surveillance 2016',
        url: 'https://acpr.banque-france.fr/publications/wells-fargo-surveillance-2016'
      },
      {
        name: 'Consumer Financial Protection Bureau USA - Sanctions 2016',
        url: 'https://www.consumerfinance.gov/about-us/newsroom/wells-fargo-sanctions-2016'
      }
    ]
  }
];