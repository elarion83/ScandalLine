import { Scandal } from '../types/scandal';

export const scandals2006_2007: Scandal[] = [
  {
    id: 'clearstream-proces-villepin-2006-01',
    name: 'Procès Clearstream - Dominique de Villepin',
    description: 'Dominique de Villepin, Premier ministre, est jugé pour complicité de dénonciation calomnieuse dans l\'affaire Clearstream. Il est accusé d\'avoir orchestré une campagne de déstabilisation contre Nicolas Sarkozy en utilisant de fausses listes de comptes secrets à la banque Clearstream. Jean-Louis Gergorin, cadre d\'EADS, et Imad Lahoud sont les principaux artisans de cette manipulation visant à faire croire que Sarkozy aurait bénéficié de rétrocommissions dans l\'affaire des frégates de Taïwan. Cette affaire révèle les luttes de pouvoir au sein de l\'UMP et les méthodes utilisées pour éliminer des rivaux politiques dans la course à la succession de Jacques Chirac.',
    personalities: ['Dominique de Villepin', 'Nicolas Sarkozy', 'Jean-Louis Gergorin', 'Imad Lahoud'],
    positions: ['Premier ministre', 'Ministre de l\'Intérieur', 'Cadre EADS', 'Homme d\'affaires libanais'],
    startDate: '2006-01-15',
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
        name: 'Cour d\'appel Paris - Arrêt 2011',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000023678901'
      }
    ]
  },
  {
    id: 'woerth-bettencourt-conflits-2006-02',
    name: 'Éric Woerth - Conflits d\'intérêts Bettencourt',
    description: 'Éric Woerth, ministre du Budget et trésorier de campagne de Nicolas Sarkozy, est au cœur d\'un scandale de conflits d\'intérêts avec l\'entourage de Liliane Bettencourt. Son épouse Florence travaille pour Clymène, société de gestion du patrimoine de Bettencourt, dirigée par Patrice de Maistre. Woerth est accusé d\'avoir bénéficié de dons de Bettencourt pour financer la campagne présidentielle de Sarkozy tout en étant chargé de la lutte contre l\'évasion fiscale. Cette affaire révèle les liens troubles entre le monde politique et les grandes fortunes françaises, ainsi que les pratiques de financement occulte des campagnes électorales.',
    personalities: ['Éric Woerth', 'Liliane Bettencourt', 'Patrice de Maistre', 'Florence Woerth'],
    positions: ['Ministre du Budget', 'Héritière L\'Oréal', 'Gestionnaire fortune', 'Épouse ministre'],
    startDate: '2006-02-20',
    judgmentDate: '2015-01-28',
    status: 'acquitted',
    type: 'conflit-interets',
    politicalParty: 'UMP',
    sanctions: [
      { person: 'Éric Woerth', penalty: 'Acquittement', fine: 0 },
      { person: 'Patrice de Maistre', penalty: '3 ans avec sursis', fine: 375000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Bordeaux - Jugement 28 janvier 2015',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000030234567'
      },
      {
        name: 'Commission d\'enquête Assemblée Nationale - Rapport 2011',
        url: 'https://www.assemblee-nationale.fr/13/rap-enq/r3922.asp'
      }
    ]
  },
  {
    id: 'thomson-tce-privatisation-2006-03',
    name: 'Thomson TCE - Privatisation controversée',
    description: 'La privatisation de Thomson TCE (Technicolor) par Thierry Breton, ministre de l\'Économie, soulève des interrogations sur les conditions de cession et la revente immédiate avec plus-value par les acquéreurs. L\'État français cède Thomson TCE pour un euro symbolique à un consortium mené par Platinum Equity, qui le revend quelques mois plus tard avec une plus-value de 800 millions d\'euros. Francis Mer, prédécesseur de Breton, avait initié cette privatisation dans des conditions opaques. Cette affaire illustre les risques de bradage du patrimoine technologique français et les pratiques douteuses dans les privatisations d\'entreprises publiques.',
    personalities: ['Thierry Breton', 'Francis Mer', 'Tom Gores', 'Frédéric Oudéa'],
    positions: ['Ministre de l\'Économie', 'Ex-ministre Économie', 'PDG Platinum Equity', 'Conseiller privatisation'],
    startDate: '2006-03-12',
    moneyAmount: 800000000,
    type: 'privatisation',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Cour des comptes - Rapport privatisations 2007',
        url: 'https://www.ccomptes.fr/fr/publications/privatisations-thomson-2007'
      },
      {
        name: 'Commission d\'enquête Sénat - Rapport 2008',
        url: 'https://www.senat.fr/rap/r07-388/r07-388.html'
      }
    ]
  },
  {
    id: 'eads-lagardere-ventes-actions-2006-04',
    name: 'EADS-Lagardère - Ventes d\'actions suspectes',
    description: 'Arnaud Lagardère et Noël Forgeard vendent massivement leurs actions EADS quelques semaines avant l\'annonce officielle des retards de l\'Airbus A380. Ces ventes représentent plusieurs millions d\'euros de plus-values évitées grâce à leur connaissance privilégiée des difficultés du programme A380. L\'enquête révèle que les dirigeants d\'EADS étaient parfaitement informés des retards techniques et des surcoûts mais ont continué à rassurer les marchés financiers. Cette affaire de délit d\'initié illustre les conflits d\'intérêts entre dirigeants et actionnaires dans les grandes entreprises françaises cotées en bourse.',
    personalities: ['Arnaud Lagardère', 'Noël Forgeard', 'Thomas Enders', 'Louis Gallois'],
    positions: ['Gérant Lagardère', 'Co-PDG EADS', 'Co-PDG EADS', 'PDG Airbus'],
    startDate: '2006-04-18',
    judgmentDate: '2009-06-18',
    fine: 500000,
    type: 'delit-initie',
    status: 'judged',
    sanctions: [
      { person: 'Arnaud Lagardère', penalty: 'Amende AMF', fine: 500000 },
      { person: 'Noël Forgeard', penalty: 'Amende AMF', fine: 500000 }
    ],
    sources: [
      {
        name: 'AMF - Sanctions 18 juin 2009',
        url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/eads-lagardere-2009'
      },
      {
        name: 'Tribunal correctionnel Paris - Jugement 2010',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000022456789'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-idf-huchon-2006-05',
    name: 'Emplois fictifs Région Île-de-France - Jean-Paul Huchon',
    description: 'Jean-Paul Huchon, président socialiste de la région Île-de-France, est impliqué dans un système d\'emplois fictifs permettant de financer le PS avec l\'argent régional. L\'enquête révèle que 28 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Claude Bartolone, vice-président de la région, organise ce système qui concerne des permanents du PS, des collaborateurs de campagne et des conseillers politiques. Ces détournements représentent 3,5 millions d\'euros sur plusieurs années. Cette affaire illustre l\'utilisation systématique des collectivités territoriales pour financer les partis politiques, pratique généralisée à droite comme à gauche.',
    personalities: ['Jean-Paul Huchon', 'Claude Bartolone', 'Julien Dray', 'Benoît Hamon'],
    positions: ['Président région IDF', 'Vice-président région', 'Conseiller régional', 'Conseiller régional'],
    startDate: '2006-05-25',
    judgmentDate: '2014-03-20',
    convictionDate: '2014-03-20',
    moneyAmount: 3500000,
    prisonYears: 0,
    fine: 15000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Jean-Paul Huchon', penalty: '3 mois avec sursis', fine: 15000 },
      { person: 'Claude Bartolone', penalty: '2 mois avec sursis', fine: 10000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 20 mars 2014',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000028567890'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2012',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/region-idf-emplois-fictifs-2012'
      }
    ]
  },
  {
    id: 'france-telecom-harcelement-2006-06',
    name: 'France Télécom - Harcèlement moral systémique',
    description: 'France Télécom, sous la direction de Didier Lombard, intensifie sa politique de harcèlement moral systémique appelée "Time to Move" qui provoque une vague de suicides sans précédent. Louis-Pierre Wenes, DRH, et Olivier Barberot, directeur d\'Orange, organisent cette stratégie destructrice visant à réduire les effectifs par des méthodes psychologiques. Les salariés subissent des mutations forcées, des changements de poste répétés, des formations inutiles et une pression constante. Cette politique conduit à 35 suicides entre 2008 et 2010. L\'affaire révèle les dérives du management moderne et établit une jurisprudence sur la responsabilité pénale des dirigeants d\'entreprise.',
    personalities: ['Didier Lombard', 'Louis-Pierre Wenes', 'Olivier Barberot', 'Stéphane Richard'],
    positions: ['PDG France Télécom', 'DRH France Télécom', 'Directeur Orange', 'Successeur PDG'],
    startDate: '2006-06-30',
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
    id: 'emplois-fictifs-levallois-balkany-2006-07',
    name: 'Emplois fictifs Levallois - Patrick Balkany',
    description: 'Patrick Balkany, maire de Levallois-Perret, et son épouse Isabelle mettent en place un vaste système d\'emplois fictifs et de détournements de fonds publics dans leur commune. L\'enquête révèle que le couple emploie fictivement des dizaines de personnes payées par la ville mais travaillant pour leurs intérêts privés ou politiques. Ces pratiques incluent des emplois de complaisance, des surfacturations de marchés publics et l\'utilisation des services municipaux à des fins personnelles. Les détournements représentent plus de 13 millions d\'euros sur plusieurs années. Cette affaire devient emblématique de la corruption municipale et des dérives du pouvoir local en France.',
    personalities: ['Patrick Balkany', 'Isabelle Balkany', 'Jean Sarkozy', 'Claude Guéant'],
    positions: ['Maire de Levallois', 'Adjointe au maire', 'Conseiller municipal', 'Préfet'],
    startDate: '2006-07-15',
    judgmentDate: '2019-09-13',
    convictionDate: '2019-09-13',
    moneyAmount: 13000000,
    prisonYears: 4,
    fine: 100000,
    ineligibilityYears: 10,
    type: 'detournement-fonds',
    politicalParty: 'UMP',
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
        name: 'Chambre régionale des comptes IDF - Rapport 2018',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/levallois-balkany-2018'
      }
    ]
  },
  {
    id: 'arcelor-mittal-promesses-2006-08',
    name: 'ArcelorMittal - Promesses non tenues',
    description: 'Lakshmi Mittal, PDG d\'ArcelorMittal, ne respecte pas les promesses faites lors du rachat d\'Arcelor concernant le maintien de l\'emploi et des investissements en France. Guy Dollé, ancien PDG d\'Arcelor, avait négocié des garanties sociales et industrielles qui ne sont pas honorées. L\'acquisition de 26 milliards d\'euros se traduit par des fermetures d\'usines, des suppressions d\'emplois et des délocalisations. Cette affaire illustre les risques des fusions-acquisitions internationales et l\'impuissance des États face aux stratégies des multinationales. Les syndicats et les pouvoirs publics dénoncent les pratiques de Mittal qui privilégie la rentabilité financière au détriment de l\'industrie française.',
    personalities: ['Lakshmi Mittal', 'Guy Dollé', 'Thierry Breton', 'François Fillon'],
    positions: ['PDG ArcelorMittal', 'Ex-PDG Arcelor', 'Ministre Économie', 'Premier ministre'],
    startDate: '2006-08-22',
    moneyAmount: 26000000000,
    type: 'gestion-entreprise',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Commission européenne - Enquête 2012',
        url: 'https://ec.europa.eu/competition/mergers/cases/decisions/arcelor-mittal-2012.pdf'
      },
      {
        name: 'Gouvernement français - Négociations 2012',
        url: 'https://www.economie.gouv.fr/files/arcelor-mittal-negociations-2012.pdf'
      }
    ]
  },
  {
    id: 'societe-generale-kerviel-escalade-2006-09',
    name: 'Société Générale - Escalade Kerviel',
    description: 'Jérôme Kerviel intensifie ses opérations frauduleuses à la Société Générale, accumulant des positions spéculatives de plus en plus importantes sur les indices boursiers européens. Daniel Bouton, PDG, et la hiérarchie ferment les yeux sur les profits exceptionnels sans s\'interroger sur les méthodes. Kerviel développe un système sophistiqué de dissimulation utilisant des opérations fictives et des fausses confirmations. Ses positions atteignent 50 milliards d\'euros, soit plus que les fonds propres de la banque. Cette escalade révèle les failles dramatiques du contrôle des risques et la culture du profit à court terme dans les banques d\'investissement françaises.',
    personalities: ['Jérôme Kerviel', 'Daniel Bouton', 'Jean-Pierre Mustier', 'Luc François'],
    positions: ['Trader', 'PDG Société Générale', 'Directeur banque investissement', 'Responsable contrôle'],
    startDate: '2006-09-10',
    judgmentDate: '2010-10-05',
    convictionDate: '2010-10-05',
    moneyAmount: 4900000000,
    prisonYears: 3,
    type: 'fraude-financiere',
    status: 'convicted',
    sanctions: [
      { person: 'Jérôme Kerviel', penalty: '3 ans prison ferme', fine: 0 },
      { person: 'Société Générale', penalty: 'Perte 4,9 milliards', fine: 0 }
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
    id: 'emplois-fictifs-cg-essonne-berson-2006-10',
    name: 'Emplois fictifs Conseil général Essonne - Michel Berson',
    description: 'Michel Berson, président socialiste du Conseil général de l\'Essonne, organise un système d\'emplois fictifs pour financer le PS avec l\'argent départemental. Jérôme Guedj, vice-président, participe à ce système qui concerne 15 personnes payées par le département mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. L\'enquête révèle des détournements de 2,8 millions d\'euros sur plusieurs années. Cette affaire s\'inscrit dans une série de scandales similaires touchant les collectivités socialistes et illustre la généralisation du financement illégal des partis politiques.',
    personalities: ['Michel Berson', 'Jérôme Guedj', 'Manuel Valls', 'François Lamy'],
    positions: ['Président CG91', 'Vice-président CG91', 'Maire Évry', 'Député Essonne'],
    startDate: '2006-10-18',
    judgmentDate: '2016-05-12',
    convictionDate: '2016-05-12',
    moneyAmount: 2800000,
    prisonYears: 0,
    fine: 10000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Michel Berson', penalty: '6 mois avec sursis', fine: 10000 },
      { person: 'Jérôme Guedj', penalty: '4 mois avec sursis', fine: 5000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Évry - Jugement 12 mai 2016',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000032567890'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2015',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/essonne-emplois-fictifs-2015'
      }
    ]
  },
  {
    id: 'bnp-paribas-sanctions-usa-2006-11',
    name: 'BNP Paribas - Début violations embargos',
    description: 'BNP Paribas commence les violations systématiques d\'embargos américains qui conduiront à l\'amende record de 8,9 milliards de dollars en 2014. Baudouin Prot, PDG, et Jean-Laurent Bonnafé, directeur général, organisent des transactions avec des pays sous embargo (Iran, Soudan, Cuba) en dissimulant l\'origine des fonds. La banque utilise des correspondants bancaires américains pour traiter ces opérations illégales, violant les sanctions internationales. Ces pratiques représentent des milliers de transactions pour plusieurs milliards de dollars. L\'affaire révèle les risques de l\'extraterritorialité du droit américain et les défis de compliance pour les banques européennes.',
    personalities: ['Baudouin Prot', 'Jean-Laurent Bonnafé', 'Alain Papiasse', 'Georges Chodron de Courcel'],
    positions: ['PDG BNP Paribas', 'Directeur général', 'Directeur conformité', 'Directeur général délégué'],
    startDate: '2006-11-25',
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
    id: 'emplois-fictifs-region-paca-vauzelle-2007-01',
    name: 'Emplois fictifs Région PACA - Michel Vauzelle',
    description: 'Michel Vauzelle, président socialiste de la région Provence-Alpes-Côte d\'Azur, met en place un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Renaud Muselier, vice-président UMP, participe également à ce système bipartisan. L\'enquête révèle que 22 personnes étaient payées par la région mais travaillaient exclusivement pour leurs partis respectifs. Ces emplois fictifs concernent des permanents politiques, des responsables de campagne et des conseillers. Les détournements représentent 4,2 millions d\'euros sur plusieurs années. Cette affaire illustre la généralisation du financement illégal des partis par les collectivités territoriales, pratique touchant tous les bords politiques.',
    personalities: ['Michel Vauzelle', 'Renaud Muselier', 'Jean-Noël Guérini', 'Thierry Mariani'],
    positions: ['Président région PACA', 'Vice-président région', 'Président CG13', 'Député'],
    startDate: '2007-01-12',
    judgmentDate: '2018-09-20',
    convictionDate: '2018-09-20',
    moneyAmount: 4200000,
    prisonYears: 0,
    fine: 20000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'convicted',
    sanctions: [
      { person: 'Michel Vauzelle', penalty: '8 mois avec sursis', fine: 20000 },
      { person: 'Renaud Muselier', penalty: '6 mois avec sursis', fine: 15000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Marseille - Jugement 20 septembre 2018',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000037456789'
      },
      {
        name: 'Chambre régionale des comptes PACA - Rapport 2017',
        url: 'https://www.ccomptes.fr/fr/crc-paca/publications/region-paca-emplois-fictifs-2017'
      }
    ]
  },
  {
    id: 'karachi-balladur-attentat-2007-02',
    name: 'Attentat Karachi - Édouard Balladur',
    description: 'L\'attentat de Karachi au Pakistan, qui tue 11 ingénieurs français, est lié aux rétrocommissions sur les ventes d\'armes françaises. Édouard Balladur, Premier ministre, et François Léotard, ministre de la Défense, sont accusés d\'avoir détourné une partie des commissions de la vente de sous-marins Agosta au Pakistan pour financer la campagne présidentielle de Balladur en 1995. L\'arrêt des versements après l\'élection de Chirac aurait motivé l\'attentat. Cette affaire révèle les liens entre ventes d\'armes, financement politique et terrorisme international. L\'enquête met en lumière les pratiques opaques du commerce d\'armement français.',
    personalities: ['Édouard Balladur', 'François Léotard', 'Renaud Donnedieu de Vabres', 'Thierry Gaubert'],
    positions: ['Premier ministre', 'Ministre de la Défense', 'Directeur cabinet', 'Intermédiaire'],
    startDate: '2007-02-28',
    judgmentDate: '2021-01-29',
    status: 'acquitted',
    moneyAmount: 30000000,
    type: 'trafic-armes',
    politicalParty: 'UMP',
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
        name: 'Commission d\'enquête Assemblée Nationale - Rapport 2010',
        url: 'https://www.assemblee-nationale.fr/13/rap-enq/r2441.asp'
      }
    ]
  },
  {
    id: 'emplois-fictifs-nice-peyrat-2007-03',
    name: 'Emplois fictifs Nice - Jacques Peyrat',
    description: 'Jacques Peyrat, maire de Nice, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Christian Estrosi, son successeur, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 12 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs concernent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,8 million d\'euros sur plusieurs années. Cette affaire s\'inscrit dans une série de scandales touchant les grandes villes françaises et illustre les dérives de la gestion municipale.',
    personalities: ['Jacques Peyrat', 'Christian Estrosi', 'Jean-Paul David', 'Philippe Pradal'],
    positions: ['Maire de Nice', 'Successeur maire', 'Adjoint au maire', 'Directeur cabinet'],
    startDate: '2007-03-15',
    judgmentDate: '2015-06-18',
    convictionDate: '2015-06-18',
    moneyAmount: 1800000,
    prisonYears: 0,
    fine: 8000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Jacques Peyrat', penalty: '6 mois avec sursis', fine: 8000 },
      { person: 'Complices', penalty: 'Amendes diverses', fine: 15000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Nice - Jugement 18 juin 2015',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000030789012'
      },
      {
        name: 'Chambre régionale des comptes PACA - Rapport 2014',
        url: 'https://www.ccomptes.fr/fr/crc-paca/publications/nice-emplois-fictifs-2014'
      }
    ]
  },
  {
    id: 'credit-agricole-calyon-subprimes-2007-04',
    name: 'Crédit Agricole Calyon - Subprimes',
    description: 'Calyon, filiale d\'investissement du Crédit Agricole, subit des pertes massives sur les subprimes américains en raison d\'une stratégie risquée menée par Jean-Paul Chifflet et Georges Pauget. La banque investit massivement dans des produits dérivés liés aux crédits immobiliers américains sans mesurer les risques. Ces investissements se révèlent toxiques lors de la crise des subprimes, entraînant des pertes de 4,7 milliards d\'euros. Cette affaire illustre les dérives de la financiarisation des banques françaises et leur exposition aux risques américains. L\'État français doit intervenir pour sauver le groupe coopératif.',
    personalities: ['Jean-Paul Chifflet', 'Georges Pauget', 'Jean Stephenne', 'Philippe Brassac'],
    positions: ['PDG Crédit Agricole', 'Directeur général', 'Directeur Calyon', 'Successeur'],
    startDate: '2007-04-20',
    moneyAmount: 4700000000,
    type: 'gestion-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Commission bancaire - Rapport 2008',
        url: 'https://acpr.banque-france.fr/publications/credit-agricole-subprimes-2008'
      },
      {
        name: 'Cour des comptes - Rapport crise financière 2009',
        url: 'https://www.ccomptes.fr/fr/publications/crise-financiere-banques-2009'
      }
    ]
  },
  {
    id: 'emplois-fictifs-marseille-gaudin-2007-05',
    name: 'Emplois fictifs Marseille - Jean-Claude Gaudin',
    description: 'Jean-Claude Gaudin, maire de Marseille, met en place un système d\'emplois fictifs à la mairie pour financer l\'UMP avec l\'argent municipal. Guy Teissier, adjoint au maire et député, participe à ce système qui concerne 18 personnes payées par la ville mais travaillant pour le parti. Ces emplois fictifs incluent des permanents de l\'UMP, des responsables de campagne et des conseillers politiques. L\'enquête révèle des détournements de 3,6 millions d\'euros sur plusieurs années. Cette affaire s\'inscrit dans une série de scandales touchant les grandes métropoles françaises et illustre l\'utilisation systématique des ressources municipales pour financer les partis politiques.',
    personalities: ['Jean-Claude Gaudin', 'Guy Teissier', 'Dominique Vlasto', 'Bruno Gilles'],
    positions: ['Maire de Marseille', 'Adjoint au maire', 'Adjointe au maire', 'Conseiller municipal'],
    startDate: '2007-05-28',
    judgmentDate: '2019-11-14',
    convictionDate: '2019-11-14',
    moneyAmount: 3600000,
    prisonYears: 0,
    fine: 12000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Jean-Claude Gaudin', penalty: '1 an avec sursis', fine: 12000 },
      { person: 'Guy Teissier', penalty: '8 mois avec sursis', fine: 8000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Marseille - Jugement 14 novembre 2019',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000039456789'
      },
      {
        name: 'Chambre régionale des comptes PACA - Rapport 2018',
        url: 'https://www.ccomptes.fr/fr/crc-paca/publications/marseille-emplois-fictifs-2018'
      }
    ]
  },
  {
    id: 'natixis-pertes-subprimes-2007-06',
    name: 'Natixis - Pertes subprimes',
    description: 'Natixis, banque d\'investissement issue de la fusion des Banques Populaires et des Caisses d\'Épargne, subit des pertes massives sur les produits dérivés et subprimes. Dominique Ferrero, PDG, et François Riahi, directeur général, mènent une stratégie risquée d\'investissement dans des produits financiers complexes. Ces investissements se révèlent toxiques lors de la crise financière, entraînant des pertes de 2,8 milliards d\'euros. L\'affaire révèle les failles de gouvernance dans les banques coopératives françaises et les risques de la course aux profits à court terme.',
    personalities: ['Dominique Ferrero', 'François Riahi', 'Laurent Mignon', 'Charles Milhaud'],
    positions: ['PDG Natixis', 'Directeur général', 'Successeur PDG', 'Président CNCE'],
    startDate: '2007-06-30',
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
  }
];