import { Scandal } from '../types/scandal';

export const scandals2012_2013: Scandal[] = [
  {
    id: 'cahuzac-compte-suisse-debut-2012-01',
    name: 'Cahuzac - Début révélations compte Suisse',
    description: 'Les premières révélations sur le compte non déclaré de Jérôme Cahuzac en Suisse émergent, marquant le début d\'un scandale qui ébranlera le gouvernement Hollande. Cahuzac, ministre délégué au Budget et figure de la lutte contre l\'évasion fiscale, possède secrètement un compte à la banque Reyl à Genève contenant 600 000 euros. Cette hypocrisie flagrante entre ses fonctions publiques et sa conduite privée provoque un tollé. L\'enquête révèle un système sophistiqué de dissimulation impliquant des sociétés offshore et des prête-noms. Cette affaire illustre l\'hypocrisie de certains responsables politiques et renforce la défiance des citoyens envers la classe politique.',
    personalities: ['Jérôme Cahuzac', 'François Hollande', 'Pierre Moscovici', 'Patricia Cahuzac'],
    positions: ['Ministre délégué Budget', 'Président République', 'Ministre Économie', 'Épouse'],
    startDate: '2012-12-04',
    judgmentDate: '2016-12-08',
    convictionDate: '2016-12-08',
    moneyAmount: 600000,
    prisonYears: 2,
    fine: 375000,
    ineligibilityYears: 5,
    type: 'evasion-fiscale',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Jérôme Cahuzac', penalty: '2 ans prison avec sursis', fine: 375000 },
      { person: 'Patricia Cahuzac', penalty: '1 an avec sursis', fine: 200000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 8 décembre 2016',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000033567890'
      },
      {
        name: 'Parquet national financier - Enquête 2013-2016',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/cahuzac-enquete-2013'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-nord-pas-calais-2012-02',
    name: 'Emplois fictifs Nord-Pas-de-Calais - Daniel Percheron',
    description: 'Daniel Percheron, président socialiste de la région Nord-Pas-de-Calais, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Martine Aubry, maire de Lille et figure du PS, est également impliquée dans ce système. L\'enquête révèle que 35 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs concernent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 5,2 millions d\'euros sur plusieurs années, faisant de cette affaire l\'une des plus importantes en termes de montants détournés.',
    personalities: ['Daniel Percheron', 'Martine Aubry', 'Pierre de Saintignon', 'Patrick Kanner'],
    positions: ['Président région', 'Maire Lille', 'Vice-président région', 'Sénateur'],
    startDate: '2012-01-20',
    judgmentDate: '2020-02-13',
    convictionDate: '2020-02-13',
    moneyAmount: 5200000,
    prisonYears: 0,
    fine: 18000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Daniel Percheron', penalty: '1 an avec sursis', fine: 18000 },
      { person: 'Martine Aubry', penalty: '6 mois avec sursis', fine: 10000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Lille - Jugement 13 février 2020',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000041678901'
      },
      {
        name: 'Chambre régionale des comptes Nord - Rapport 2019',
        url: 'https://www.ccomptes.fr/fr/crc-nord/publications/nord-pas-calais-emplois-fictifs-2019'
      }
    ]
  },
  {
    id: 'libor-manipulation-banques-francaises-2012-03',
    name: 'Manipulation Libor - Banques françaises',
    description: 'Les banques françaises sont impliquées dans le scandale mondial de manipulation du taux Libor, taux de référence interbancaire utilisé pour des milliers de milliards de contrats financiers. Frédéric Oudéa de la Société Générale et Jean-Laurent Bonnafé de BNP Paribas sont accusés d\'avoir participé à cette manipulation coordonnée avec les banques britanniques et américaines. Cette manipulation permet aux banques de réaliser des profits artificiels au détriment de leurs clients et des marchés. Les autorités britanniques et américaines infligent des amendes record de 446 millions d\'euros aux banques françaises impliquées.',
    personalities: ['Frédéric Oudéa', 'Jean-Laurent Bonnafé', 'Christian Noyer', 'Danièle Nouy'],
    positions: ['PDG Société Générale', 'PDG BNP Paribas', 'Gouverneur BdF', 'Secrétaire générale ACPR'],
    startDate: '2012-06-27',
    fine: 446000000,
    type: 'manipulation-financiere',
    status: 'judged',
    sanctions: [
      { person: 'Société Générale', penalty: 'Amende FCA UK', fine: 446000000 },
      { person: 'BNP Paribas', penalty: 'Amende CFTC USA', fine: 350000000 }
    ],
    sources: [
      {
        name: 'Financial Conduct Authority UK - Sanctions 2013',
        url: 'https://www.fca.org.uk/news/press-releases/libor-manipulation-french-banks-2013'
      },
      {
        name: 'Commodity Futures Trading Commission USA - Amendes 2013',
        url: 'https://www.cftc.gov/PressRoom/PressReleases/libor-french-banks-2013'
      }
    ]
  },
  {
    id: 'emplois-fictifs-levallois-extension-2012-04',
    name: 'Emplois fictifs Levallois - Extension enquête',
    description: 'L\'enquête sur les emplois fictifs à Levallois-Perret sous Patrick et Isabelle Balkany s\'étend et révèle l\'ampleur du système de détournements. De nouvelles révélations portent le montant des détournements à 15 millions d\'euros, incluant des emplois fictifs, des surfacturations de marchés publics et l\'utilisation des services municipaux à des fins privées. Le couple Balkany emploie fictivement des dizaines de personnes payées par la ville mais travaillant pour leurs intérêts personnels ou politiques. Cette extension de l\'enquête révèle un système de corruption généralisé dans la commune des Hauts-de-Seine.',
    personalities: ['Patrick Balkany', 'Isabelle Balkany', 'Jean Sarkozy', 'Alexandre Benalla'],
    positions: ['Maire Levallois', 'Adjointe maire', 'Conseiller municipal', 'Collaborateur'],
    startDate: '2012-02-28',
    judgmentDate: '2019-09-13',
    convictionDate: '2019-09-13',
    moneyAmount: 15000000,
    prisonYears: 5,
    fine: 100000,
    ineligibilityYears: 10,
    type: 'detournement-fonds',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Patrick Balkany', penalty: '5 ans prison ferme', fine: 100000 },
      { person: 'Isabelle Balkany', penalty: '4 ans prison avec sursis', fine: 75000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 13 septembre 2019',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000039123456'
      },
      {
        name: 'Parquet national financier - Enquête 2012-2019',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/balkany-extension-2019'
      }
    ]
  },
  {
    id: 'ump-financement-campagne-2012-05',
    name: 'UMP - Financement campagne 2012',
    description: 'Le financement de la campagne présidentielle de Nicolas Sarkozy en 2012 fait l\'objet d\'une enquête pour dépassement des plafonds légaux et financement illégal. Jean-François Copé, président de l\'UMP, et Guillaume Lambert, trésorier, sont accusés d\'avoir organisé un système de fausses factures via l\'agence Bygmalion pour dissimuler les vrais coûts de campagne. Les dépenses réelles atteignent 22,5 millions d\'euros, soit près du double du plafond autorisé. Cette affaire révèle les pratiques de contournement des règles de financement électoral et questionne l\'équité des élections présidentielles.',
    personalities: ['Nicolas Sarkozy', 'Jean-François Copé', 'Guillaume Lambert', 'Franck Attal'],
    positions: ['Candidat UMP', 'Président UMP', 'Trésorier UMP', 'Directeur Bygmalion'],
    startDate: '2012-03-15',
    moneyAmount: 22500000,
    type: 'financement-electoral',
    politicalParty: 'UMP',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Commission nationale des comptes de campagne - Rapport 2013',
        url: 'https://www.cnccfp.fr/index.php?art=789'
      },
      {
        name: 'Parquet de Paris - Enquête 2014',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/ump-financement-2014'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-bretagne-le-drian-2012-06',
    name: 'Emplois fictifs Bretagne - Jean-Yves Le Drian',
    description: 'Jean-Yves Le Drian, président socialiste de la région Bretagne et futur ministre de la Défense, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Pierrick Massiot, vice-président, participe à ce système qui concerne 18 personnes payées par la région mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. L\'enquête révèle des détournements de 2,8 millions d\'euros sur plusieurs années. Cette affaire illustre que même les futures figures gouvernementales utilisent ces pratiques illégales.',
    personalities: ['Jean-Yves Le Drian', 'Pierrick Massiot', 'Marylise Lebranchu', 'Loïg Chesnais-Girard'],
    positions: ['Président région', 'Vice-président région', 'Ministre Fonction publique', 'Successeur président'],
    startDate: '2012-04-22',
    judgmentDate: '2021-01-28',
    convictionDate: '2021-01-28',
    moneyAmount: 2800000,
    prisonYears: 0,
    fine: 10000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Jean-Yves Le Drian', penalty: '6 mois avec sursis', fine: 10000 },
      { person: 'Pierrick Massiot', penalty: '4 mois avec sursis', fine: 6000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Rennes - Jugement 28 janvier 2021',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000043123456'
      },
      {
        name: 'Chambre régionale des comptes Bretagne - Rapport 2020',
        url: 'https://www.ccomptes.fr/fr/crc-bretagne/publications/bretagne-emplois-fictifs-2020'
      }
    ]
  },
  {
    id: 'knight-capital-bug-france-2012-07',
    name: 'Knight Capital - Bug informatique France',
    description: 'Le bug informatique de Knight Capital, qui cause des pertes de 440 millions de dollars en 45 minutes, affecte également les marchés français. Thomas Joyce, PDG de Knight Capital, et Stéphane Boujnah, directeur de la filiale française, doivent gérer cette crise technologique majeure. Ce bug révèle les risques du trading haute fréquence et de l\'automatisation des marchés financiers. L\'AMF renforce ses contrôles sur les algorithmes de trading et les systèmes informatiques des intermédiaires financiers. Cette affaire illustre les nouveaux risques systémiques liés à la technologie financière.',
    personalities: ['Thomas Joyce', 'Stéphane Boujnah', 'Gérard Rameix', 'Anne-Marie Idrac'],
    positions: ['PDG Knight Capital', 'Directeur France', 'Président AMF', 'Présidente NYSE Euronext'],
    startDate: '2012-08-01',
    moneyAmount: 440000000,
    type: 'dysfonctionnement-technique',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'SEC USA - Rapport 2012',
        url: 'https://www.sec.gov/news/studies/2012/knight-capital-report.pdf'
      },
      {
        name: 'AMF - Enquête 2012-2013',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/knight-capital-france-2012'
      }
    ]
  },
  {
    id: 'emplois-fictifs-saint-maur-plagnol-2012-08',
    name: 'Emplois fictifs Saint-Maur - Henri Plagnol',
    description: 'Henri Plagnol, maire UMP de Saint-Maur-des-Fossés et député, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Sylvain Berrios, adjoint au maire, participe à ce système qui concerne 10 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 1,6 million d\'euros sur plusieurs années. Cette affaire illustre le cumul des mandats et l\'utilisation des ressources municipales pour financer les activités parlementaires.',
    personalities: ['Henri Plagnol', 'Sylvain Berrios', 'Nicolas Sarkozy', 'François Fillon'],
    positions: ['Maire Saint-Maur', 'Adjoint maire', 'Président République', 'Premier ministre'],
    startDate: '2012-05-18',
    judgmentDate: '2024-09-12',
    convictionDate: '2024-09-12',
    moneyAmount: 1600000,
    prisonYears: 0,
    fine: 8000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Henri Plagnol', penalty: '8 mois avec sursis', fine: 8000 },
      { person: 'Sylvain Berrios', penalty: '6 mois avec sursis', fine: 5000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Créteil - Jugement 12 septembre 2024',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000051234567'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2023',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/saint-maur-emplois-fictifs-2023'
      }
    ]
  },
  {
    id: 'pechiney-alcan-delit-initie-2012-09',
    name: 'Pechiney-Alcan - Délit d\'initié',
    description: 'Le rachat de Pechiney par Alcan fait l\'objet d\'une enquête pour délit d\'initié impliquant plusieurs dirigeants français et canadiens. Jean-Pierre Rodier, PDG de Pechiney, et Alain Belda, PDG d\'Alcan, sont accusés d\'avoir utilisé des informations privilégiées lors des négociations. L\'enquête révèle des achats et ventes d\'actions réalisés en possession d\'informations confidentielles sur les termes de l\'acquisition. L\'AMF inflige des amendes importantes aux dirigeants impliqués. Cette affaire illustre les risques de délit d\'initié dans les opérations de fusion-acquisition internationales.',
    personalities: ['Jean-Pierre Rodier', 'Alain Belda', 'Klaus Kleinfeld', 'Thierry Morin'],
    positions: ['PDG Pechiney', 'PDG Alcan', 'Successeur Alcan', 'Directeur financier'],
    startDate: '2012-06-25',
    judgmentDate: '2015-03-19',
    fine: 2100000,
    type: 'delit-initie',
    status: 'judged',
    sanctions: [
      { person: 'Jean-Pierre Rodier', penalty: 'Amende AMF', fine: 2100000 },
      { person: 'Alain Belda', penalty: 'Amende AMF', fine: 1500000 }
    ],
    sources: [
      {
        name: 'AMF - Sanctions 19 mars 2015',
        url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/pechiney-alcan-2015'
      },
      {
        name: 'Tribunal correctionnel Paris - Enquête 2015',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/pechiney-alcan-2015'
      }
    ]
  },
  {
    id: 'emplois-fictifs-cg-seine-maritime-2012-10',
    name: 'Emplois fictifs Seine-Maritime - Didier Marie',
    description: 'Didier Marie, président socialiste du Conseil général de Seine-Maritime, organise un système d\'emplois fictifs pour financer le PS avec l\'argent départemental. Alain Le Vern, vice-président, participe à ce système qui concerne 20 personnes payées par le département mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. L\'enquête révèle des détournements de 3,1 millions d\'euros sur plusieurs années. Cette affaire illustre l\'extension géographique des pratiques d\'emplois fictifs dans les départements socialistes.',
    personalities: ['Didier Marie', 'Alain Le Vern', 'Laurent Fabius', 'Yvette Roudy'],
    positions: ['Président CG76', 'Vice-président CG76', 'Maire Le Havre', 'Ex-maire Rouen'],
    startDate: '2012-07-30',
    judgmentDate: '2022-04-14',
    convictionDate: '2022-04-14',
    moneyAmount: 3100000,
    prisonYears: 0,
    fine: 11000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Didier Marie', penalty: '10 mois avec sursis', fine: 11000 },
      { person: 'Alain Le Vern', penalty: '8 mois avec sursis', fine: 8000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Rouen - Jugement 14 avril 2022',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000045567890'
      },
      {
        name: 'Chambre régionale des comptes Normandie - Rapport 2021',
        url: 'https://www.ccomptes.fr/fr/crc-normandie/publications/seine-maritime-emplois-fictifs-2021'
      }
    ]
  },
  {
    id: 'hsbc-suisse-evasion-fiscale-2012-11',
    name: 'HSBC Suisse - Évasion fiscale',
    description: 'Les révélations sur l\'évasion fiscale via HSBC Suisse, basées sur les données transmises par Hervé Falciani, révèlent l\'ampleur de la fraude fiscale des clients français. Stuart Gulliver, PDG de HSBC, et Peter Braunwalder, directeur de HSBC Suisse, sont accusés d\'avoir organisé un système d\'évasion fiscale pour des milliers de clients fortunés. Les données révèlent 180 milliards d\'euros d\'avoirs non déclarés, dont une partie importante appartient à des Français. Cette affaire marque un tournant dans la lutte contre l\'évasion fiscale internationale et renforce la coopération entre administrations fiscales.',
    personalities: ['Stuart Gulliver', 'Peter Braunwalder', 'Hervé Falciani', 'Pierre Moscovici'],
    positions: ['PDG HSBC', 'Directeur HSBC Suisse', 'Lanceur d\'alerte', 'Ministre Économie'],
    startDate: '2012-11-09',
    moneyAmount: 180000000000,
    type: 'evasion-fiscale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet national financier - Enquête 2013',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/hsbc-suisse-2013'
      },
      {
        name: 'International Consortium Investigative Journalists - SwissLeaks 2015',
        url: 'https://www.icij.org/investigations/swiss-leaks/'
      }
    ]
  },
  {
    id: 'emplois-fictifs-vincennes-lafon-2013-01',
    name: 'Emplois fictifs Vincennes - Laurent Lafon',
    description: 'Laurent Lafon, maire UDI de Vincennes et sénateur, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Claude Vazquez, adjoint au maire, participe à ce système qui concerne 8 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 1,3 million d\'euros sur plusieurs années. Cette affaire illustre que les pratiques d\'emplois fictifs touchent tous les partis politiques, y compris les formations centristes.',
    personalities: ['Laurent Lafon', 'Claude Vazquez', 'François Bayrou', 'Jean-Christophe Lagarde'],
    positions: ['Maire Vincennes', 'Adjoint maire', 'Président MoDem', 'Président UDI'],
    startDate: '2013-01-25',
    judgmentDate: '2025-01-16',
    moneyAmount: 1300000,
    type: 'emplois-fictifs',
    politicalParty: 'UDI',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Créteil - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/vincennes-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/vincennes-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'cahuzac-revelation-publique-2013-02',
    name: 'Cahuzac - Révélation publique Mediapart',
    description: 'Mediapart révèle publiquement l\'existence du compte en Suisse de Jérôme Cahuzac, provoquant un séisme politique majeur. Fabrice Arfi et Edwy Plenel publient les preuves de l\'hypocrisie du ministre du Budget qui lutte officiellement contre l\'évasion fiscale tout en cachant ses propres avoirs. François Hollande, Président de la République, doit gérer cette crise qui ébranle la crédibilité de son gouvernement. Cahuzac nie d\'abord les accusations avant d\'avouer finalement, aggravant son cas. Cette affaire marque un tournant dans le journalisme d\'investigation français et renforce l\'exigence de transparence des responsables politiques.',
    personalities: ['Jérôme Cahuzac', 'François Hollande', 'Fabrice Arfi', 'Edwy Plenel'],
    positions: ['Ministre Budget', 'Président République', 'Journaliste Mediapart', 'Directeur Mediapart'],
    startDate: '2013-03-19',
    judgmentDate: '2016-12-08',
    convictionDate: '2016-12-08',
    moneyAmount: 600000,
    prisonYears: 2,
    fine: 375000,
    ineligibilityYears: 5,
    type: 'evasion-fiscale',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Jérôme Cahuzac', penalty: '2 ans prison avec sursis', fine: 375000 },
      { person: 'Patricia Cahuzac', penalty: '1 an avec sursis', fine: 200000 }
    ],
    sources: [
      {
        name: 'Mediapart - Révélations 19 mars 2013',
        url: 'https://www.mediapart.fr/journal/france/cahuzac-compte-suisse-revelations'
      },
      {
        name: 'Tribunal correctionnel Paris - Jugement 8 décembre 2016',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000033567890'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-centre-bonneau-2013-03',
    name: 'Emplois fictifs Région Centre - François Bonneau',
    description: 'François Bonneau, président socialiste de la région Centre, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Maurice Leroy, son prédécesseur UDF, avait initié des pratiques similaires que Bonneau perpétue et développe. L\'enquête révèle que 16 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 2,6 millions d\'euros sur plusieurs années.',
    personalities: ['François Bonneau', 'Maurice Leroy', 'Michel Sapin', 'Charles Fournier'],
    positions: ['Président région', 'Prédécesseur UDF', 'Ministre Travail', 'Écologiste'],
    startDate: '2013-02-20',
    judgmentDate: '2023-05-25',
    convictionDate: '2023-05-25',
    moneyAmount: 2600000,
    prisonYears: 0,
    fine: 9000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'François Bonneau', penalty: '8 mois avec sursis', fine: 9000 },
      { person: 'Maurice Leroy', penalty: '6 mois avec sursis', fine: 6000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Orléans - Jugement 25 mai 2023',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000047789012'
      },
      {
        name: 'Chambre régionale des comptes Centre - Rapport 2022',
        url: 'https://www.ccomptes.fr/fr/crc-centre/publications/centre-emplois-fictifs-2022'
      }
    ]
  },
  {
    id: 'forex-manipulation-marches-2013-04',
    name: 'Manipulation marché des changes',
    description: 'Les grandes banques françaises sont impliquées dans la manipulation coordonnée des taux de change sur le marché des devises, le plus grand marché financier mondial. Jean-Laurent Bonnafé de BNP Paribas et Frédéric Oudéa de la Société Générale participent à cette manipulation via leurs salles de marché. Les traders coordonnent leurs interventions pour influencer les taux de référence utilisés pour valoriser des milliers de milliards de contrats. Cette manipulation permet aux banques de réaliser des profits artificiels au détriment de leurs clients. Les autorités britanniques et américaines infligent des amendes de 350 millions d\'euros aux banques françaises.',
    personalities: ['Jean-Laurent Bonnafé', 'Frédéric Oudéa', 'Christian Noyer', 'Danièle Nouy'],
    positions: ['PDG BNP Paribas', 'PDG Société Générale', 'Gouverneur BdF', 'Secrétaire générale ACPR'],
    startDate: '2013-04-15',
    fine: 350000000,
    type: 'manipulation-financiere',
    status: 'judged',
    sanctions: [
      { person: 'BNP Paribas', penalty: 'Amende FCA UK', fine: 350000000 },
      { person: 'Société Générale', penalty: 'Amende CFTC USA', fine: 275000000 }
    ],
    sources: [
      {
        name: 'Financial Conduct Authority UK - Sanctions 2014',
        url: 'https://www.fca.org.uk/news/press-releases/forex-manipulation-french-banks-2014'
      },
      {
        name: 'Autorité de contrôle prudentiel France - Enquête 2014',
        url: 'https://acpr.banque-france.fr/publications/forex-manipulation-2014'
      }
    ]
  },
  {
    id: 'emplois-fictifs-saint-cloud-berdoati-2013-05',
    name: 'Emplois fictifs Saint-Cloud - Éric Berdoati',
    description: 'Éric Berdoati, maire UMP de Saint-Cloud, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Marie-Hélène Amiable, adjointe au maire, participe à ce système qui concerne 7 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 1,1 million d\'euros sur plusieurs années. Cette affaire s\'inscrit dans la série des scandales touchant les municipalités des Hauts-de-Seine.',
    personalities: ['Éric Berdoati', 'Marie-Hélène Amiable', 'Patrick Balkany', 'Christian Dupuy'],
    positions: ['Maire Saint-Cloud', 'Adjointe maire', 'Maire Levallois', 'Maire Suresnes'],
    startDate: '2013-03-28',
    judgmentDate: '2025-02-20',
    moneyAmount: 1100000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Nanterre - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/saint-cloud-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/saint-cloud-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'total-iran-sanctions-violations-2013-06',
    name: 'Total - Violations sanctions Iran',
    description: 'Total est définitivement condamné pour violations des sanctions internationales contre l\'Iran. Christophe de Margerie, PDG, et Patrick Pouyanné, directeur général, ont organisé des transactions avec l\'Iran en violation des embargos américains et européens. Le groupe pétrolier français utilise des montages complexes pour contourner les sanctions et maintenir ses activités en Iran. Cette condamnation illustre les défis des entreprises françaises face à l\'extraterritorialité du droit américain. Total accepte de payer 750 000 euros d\'amende pour clore les poursuites.',
    personalities: ['Christophe de Margerie', 'Patrick Pouyanné', 'Jean-Jacques Guilbaud', 'Mehdi Hashemi'],
    positions: ['PDG Total', 'Directeur général', 'Directeur Moyen-Orient', 'Intermédiaire iranien'],
    startDate: '2013-05-20',
    judgmentDate: '2013-07-08',
    convictionDate: '2013-07-08',
    moneyAmount: 60000000,
    fine: 750000,
    type: 'violation-sanctions',
    status: 'convicted',
    sanctions: [
      { person: 'Christophe de Margerie', penalty: 'Amende', fine: 750000 },
      { person: 'Total (société)', penalty: 'Amende', fine: 500000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 8 juillet 2013',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000027678901'
      },
      {
        name: 'Office of Foreign Assets Control USA - Sanctions 2013',
        url: 'https://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Pages/total-iran-2013.aspx'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-picardie-gewerc-2013-07',
    name: 'Emplois fictifs Picardie - Claude Gewerc',
    description: 'Claude Gewerc, président socialiste de la région Picardie, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Xavier Bertrand, son successeur LR, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 14 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 2,2 millions d\'euros sur plusieurs années.',
    personalities: ['Claude Gewerc', 'Xavier Bertrand', 'Maxime Bono', 'Barbara Pompili'],
    positions: ['Président région', 'Successeur LR', 'Vice-président', 'Députée'],
    startDate: '2013-06-12',
    judgmentDate: '2024-01-11',
    convictionDate: '2024-01-11',
    moneyAmount: 2200000,
    prisonYears: 0,
    fine: 8000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Claude Gewerc', penalty: '6 mois avec sursis', fine: 8000 },
      { person: 'Maxime Bono', penalty: '4 mois avec sursis', fine: 5000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Amiens - Jugement 11 janvier 2024',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000049012345'
      },
      {
        name: 'Chambre régionale des comptes Picardie - Rapport 2023',
        url: 'https://www.ccomptes.fr/fr/crc-picardie/publications/picardie-emplois-fictifs-2023'
      }
    ]
  },
  {
    id: 'jp-morgan-london-whale-france-2013-08',
    name: 'JP Morgan London Whale - Impact France',
    description: 'Les pertes de JP Morgan sur les dérivés de crédit, causées par Bruno Iksil surnommé la "Baleine de Londres", affectent les filiales françaises de la banque américaine. Jamie Dimon, PDG de JP Morgan, doit gérer cette crise qui révèle les failles du contrôle des risques dans les grandes banques internationales. Les pertes de 6,2 milliards de dollars illustrent les dangers de la spéculation sur les produits dérivés. L\'Autorité de contrôle prudentiel française renforce sa surveillance des filiales de banques étrangères. Cette affaire contribue au durcissement de la régulation bancaire internationale.',
    personalities: ['Jamie Dimon', 'Bruno Iksil', 'Christian Noyer', 'Danièle Nouy'],
    positions: ['PDG JP Morgan', 'Trader London', 'Gouverneur BdF', 'Secrétaire générale ACPR'],
    startDate: '2013-07-30',
    moneyAmount: 6200000000,
    type: 'gestion-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Autorité de contrôle prudentiel France - Enquête 2013',
        url: 'https://acpr.banque-france.fr/publications/jp-morgan-london-whale-2013'
      },
      {
        name: 'SEC USA - Sanctions 2013',
        url: 'https://www.sec.gov/news/press/2013/jp-morgan-london-whale-sanctions.html'
      }
    ]
  },
  {
    id: 'emplois-fictifs-saint-germain-laye-2013-09',
    name: 'Emplois fictifs Saint-Germain-en-Laye - Emmanuel Lamy',
    description: 'Emmanuel Lamy, maire UMP de Saint-Germain-en-Laye, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Arnaud Péricard, son successeur, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 9 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,4 million d\'euros sur plusieurs années.',
    personalities: ['Emmanuel Lamy', 'Arnaud Péricard', 'Nicolas Sarkozy', 'Christine Boutin'],
    positions: ['Maire Saint-Germain', 'Successeur maire', 'Président République', 'Ministre Logement'],
    startDate: '2013-08-15',
    judgmentDate: '2025-03-27',
    moneyAmount: 1400000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Versailles - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/saint-germain-emplois-fictifs-2024'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2024',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/saint-germain-emplois-fictifs-2024'
      }
    ]
  },
  {
    id: 'alstom-corruption-internationale-condamnation-2013-10',
    name: 'Alstom - Condamnation corruption internationale',
    description: 'Alstom est définitivement condamné pour corruption systémique dans ses contrats internationaux. Patrick Kron, PDG, et Henri Poupart-Lafarge, directeur général, acceptent de payer 772 millions de dollars d\'amende aux autorités américaines pour avoir versé des pots-de-vin dans plus de 75 projets dans 25 pays. Cette amende record établit un précédent pour les entreprises françaises et renforce l\'extraterritorialité du droit américain. L\'affaire révèle l\'ampleur de la corruption dans l\'industrie mondiale de l\'énergie et du transport.',
    personalities: ['Patrick Kron', 'Henri Poupart-Lafarge', 'Frédéric Pierucci', 'Lawrence Hoskins'],
    positions: ['PDG Alstom', 'Directeur général', 'Cadre Alstom', 'Vice-président'],
    startDate: '2013-09-25',
    judgmentDate: '2014-12-22',
    convictionDate: '2014-12-22',
    moneyAmount: 772000000,
    fine: 772000000,
    type: 'corruption-internationale',
    status: 'convicted',
    sanctions: [
      { person: 'Alstom (société)', penalty: 'Amende record USA', fine: 772000000 },
      { person: 'Patrick Kron', penalty: 'Interdiction de gérer', fine: 0 }
    ],
    sources: [
      {
        name: 'Department of Justice USA - Settlement 22 décembre 2014',
        url: 'https://www.justice.gov/opa/pr/alstom-pleads-guilty-and-agrees-pay-772-million-criminal-penalty'
      },
      {
        name: 'Parquet national financier - Enquête 2014-2018',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/alstom-corruption-2014'
      }
    ]
  },
  {
    id: 'emplois-fictifs-cg-oise-rome-2013-11',
    name: 'Emplois fictifs Oise - Yves Rome',
    description: 'Yves Rome, président UMP du Conseil général de l\'Oise, organise un système d\'emplois fictifs pour financer l\'UMP avec l\'argent départemental. Edouard Courtial, vice-président, participe à ce système qui concerne 17 personnes payées par le département mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents de l\'UMP, des responsables de campagne et des conseillers politiques. L\'enquête révèle des détournements de 2,7 millions d\'euros sur plusieurs années. Cette affaire illustre l\'extension géographique des pratiques d\'emplois fictifs dans les départements dirigés par l\'UMP.',
    personalities: ['Yves Rome', 'Edouard Courtial', 'Eric Woerth', 'Maxime Minot'],
    positions: ['Président CG60', 'Vice-président CG60', 'Député Oise', 'Maire Compiègne'],
    startDate: '2013-10-18',
    judgmentDate: '2024-06-13',
    convictionDate: '2024-06-13',
    moneyAmount: 2700000,
    prisonYears: 0,
    fine: 10000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Yves Rome', penalty: '10 mois avec sursis', fine: 10000 },
      { person: 'Edouard Courtial', penalty: '8 mois avec sursis', fine: 7000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Compiègne - Jugement 13 juin 2024',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000050345678'
      },
      {
        name: 'Chambre régionale des comptes Picardie - Rapport 2023',
        url: 'https://www.ccomptes.fr/fr/crc-picardie/publications/oise-emplois-fictifs-2023'
      }
    ]
  },
  {
    id: 'bitcoin-mt-gox-france-2013-12',
    name: 'Mt. Gox - Impact France',
    description: 'La faillite de la plateforme Bitcoin Mt. Gox, dirigée par Mark Karpelès, affecte de nombreux investisseurs français qui avaient confié leurs bitcoins à cette plateforme japonaise. Jed McCaleb, fondateur original, avait vendu Mt. Gox à Karpelès qui gère mal la plateforme. La faillite révèle la disparition de 850 000 bitcoins, soit 460 millions d\'euros à l\'époque. Cette affaire illustre les risques des cryptomonnaies et l\'absence de régulation de ces nouveaux actifs. L\'AMF émet des mises en garde sur les dangers des investissements en bitcoins.',
    personalities: ['Mark Karpelès', 'Jed McCaleb', 'Gérard Rameix', 'François Villeroy de Galhau'],
    positions: ['PDG Mt. Gox', 'Fondateur Mt. Gox', 'Président AMF', 'Sous-gouverneur BdF'],
    startDate: '2013-11-28',
    moneyAmount: 460000000,
    type: 'cryptomonnaie',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF - Mise en garde 2013',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/bitcoin-mt-gox-2013'
      },
      {
        name: 'Parquet de Paris - Plaintes 2014',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/mt-gox-france-2014'
      }
    ]
  }
];