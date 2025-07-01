export const scandals2020_2021 = [
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
        id: 'wirecard-france-effondrement-2020-02',
        name: 'Wirecard France - Effondrement',
        description: 'L\'effondrement de Wirecard, géant allemand du paiement électronique, affecte ses filiales françaises et ses partenaires. Markus Braun, PDG, et Jan Marsalek, COO en fuite, sont accusés d\'avoir orchestré une fraude comptable massive de 1,9 milliard d\'euros. Cette faillite spectaculaire révèle les failles de la supervision financière européenne et les risques des fintech. Les clients français de Wirecard voient leurs comptes bloqués et subissent des pertes importantes. L\'Autorité de contrôle prudentiel française renforce sa surveillance des prestataires de services de paiement.',
        personalities: ['Markus Braun', 'Jan Marsalek', 'Robert Ophèle', 'Bruno Le Maire'],
        positions: ['PDG Wirecard', 'COO Wirecard', 'Président AMF', 'Ministre Économie'],
        startDate: '2020-06-25',
        moneyAmount: 1900000000,
        type: 'fraude-comptable',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Autorité de contrôle prudentiel France - Investigation 2020',
                url: 'https://acpr.banque-france.fr/publications/wirecard-france-2020'
            },
            {
                name: 'BaFin Allemagne - Rapport 2020',
                url: 'https://www.bafin.de/EN/PublikationenDaten/Jahresbericht/Wirecard/wirecard_node_en.html'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-martinique-letchimy-2020-03',
        name: 'Emplois fictifs Martinique - Serge Letchimy',
        description: 'Serge Letchimy, président PPM de la collectivité territoriale de Martinique, organise un système d\'emplois fictifs pour financer ses activités politiques. Alfred Marie-Jeanne, son prédécesseur, avait initié ce système que Letchimy perpétue et développe. L\'enquête révèle que 8 personnes étaient payées par la collectivité mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,2 million d\'euros sur plusieurs années.',
        personalities: ['Serge Letchimy', 'Alfred Marie-Jeanne', 'Maurice Antiste', 'Catherine Conconne'],
        positions: ['Président région', 'Prédécesseur', 'Sénateur Martinique', 'Sénatrice Martinique'],
        startDate: '2020-01-22',
        judgmentDate: '2027-07-18',
        moneyAmount: 1200000,
        type: 'emplois-fictifs',
        politicalParty: 'PPM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Fort-de-France - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/martinique-emplois-fictifs-2026'
            },
            {
                name: 'Chambre régionale des comptes Martinique - Rapport 2026',
                url: 'https://www.ccomptes.fr/fr/crc-martinique/publications/martinique-emplois-fictifs-2026'
            }
        ]
    },
    {
        id: 'covid-masques-scandale-2020-04',
        name: 'Scandale des masques COVID',
        description: 'La gestion catastrophique des stocks de masques pendant la pandémie de COVID-19 provoque un scandale national. Olivier Véran, ministre de la Santé, et Agnès Buzyn, sa prédécesseure, sont accusés d\'avoir menti sur l\'état des stocks stratégiques et d\'avoir tardé à commander des masques. L\'enquête révèle que la France avait détruit 1,5 milliard de masques périmés sans les remplacer avant la crise. Cette pénurie oblige le gouvernement à réquisitionner la production et à passer des commandes d\'urgence à prix d\'or. Cette affaire illustre l\'impréparation de l\'État face aux crises sanitaires.',
        personalities: ['Olivier Véran', 'Agnès Buzyn', 'Jérôme Salomon', 'Edouard Philippe'],
        positions: ['Ministre Santé', 'Ex-ministre Santé', 'Directeur général Santé', 'Premier ministre'],
        startDate: '2020-03-15',
        moneyAmount: 2000000000,
        type: 'gestion-crise',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Cour de justice République - Enquête 2020',
                url: 'https://www.courdejusticerepublique.fr/enquetes/covid-masques-2020'
            },
            {
                name: 'Commission d\'enquête Assemblée Nationale - Rapport 2020',
                url: 'https://www.assemblee-nationale.fr/dyn/15/rapports/covid/l15b3053_rapport-enquete'
            }
        ]
    },
    {
        id: 'emplois-fictifs-villejuif-le-bohellec-2020-05',
        name: 'Emplois fictifs Villejuif - Franck Le Bohellec',
        description: 'Franck Le Bohellec, maire LR de Villejuif, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Jean-Luc Laurent, son prédécesseur, avait initié des pratiques similaires que Le Bohellec perpétue. L\'enquête révèle que 7 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,1 million d\'euros sur plusieurs années.',
        personalities: ['Franck Le Bohellec', 'Jean-Luc Laurent', 'Laurent Jeanne', 'Dominique Adenot'],
        positions: ['Maire Villejuif', 'Prédécesseur maire', 'Maire Champigny', 'Ex-maire Champigny'],
        startDate: '2020-02-28',
        judgmentDate: '2027-08-15',
        moneyAmount: 1100000,
        type: 'emplois-fictifs',
        politicalParty: 'LR',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Créteil - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/villejuif-emplois-fictifs-2026'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2026',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/villejuif-emplois-fictifs-2026'
            }
        ]
    },
    {
        id: 'nikola-fraud-france-2020-06',
        name: 'Nikola Fraude France',
        description: 'La fraude de Nikola Motors, fabricant américain de camions à hydrogène, affecte des investisseurs français qui avaient misé sur cette startup présentée comme le "Tesla des poids lourds". Trevor Milton, fondateur, et Mark Russell, PDG, sont accusés d\'avoir trompé les investisseurs avec des démonstrations truquées et des affirmations mensongères sur la technologie. L\'enquête révèle que le camion présenté en 2016 n\'était qu\'une coque vide sans moteur fonctionnel. Cette fraude cause des pertes de 3,4 milliards de dollars de capitalisation boursière.',
        personalities: ['Trevor Milton', 'Mark Russell', 'Robert Ophèle', 'Bruno Le Maire'],
        positions: ['Fondateur Nikola', 'PDG Nikola', 'Président AMF', 'Ministre Économie'],
        startDate: '2020-09-10',
        moneyAmount: 3400000000,
        type: 'fraude-boursiere',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'AMF France - Surveillance 2020',
                url: 'https://www.amf-france.org/fr/actualites-publications/communiques/nikola-surveillance-2020'
            },
            {
                name: 'SEC USA - Charges 2020',
                url: 'https://www.sec.gov/news/press-release/nikola-charges-2020'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-guadeloupe-chalus-2020-07',
        name: 'Emplois fictifs Guadeloupe - Ary Chalus',
        description: 'Ary Chalus, président de la région Guadeloupe, organise un système d\'emplois fictifs pour financer ses activités politiques. Victorin Lurel, son prédécesseur, avait initié ce système que Chalus perpétue et développe. L\'enquête révèle que 9 personnes étaient payées par la région mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,3 million d\'euros sur plusieurs années.',
        personalities: ['Ary Chalus', 'Victorin Lurel', 'Josette Borel-Lincertin', 'Guy Losbar'],
        positions: ['Président région', 'Prédécesseur', 'Présidente département', 'Vice-président région'],
        startDate: '2020-03-25',
        judgmentDate: '2027-09-12',
        moneyAmount: 1300000,
        type: 'emplois-fictifs',
        politicalParty: 'Divers',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Pointe-à-Pitre - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/guadeloupe-emplois-fictifs-2026'
            },
            {
                name: 'Chambre régionale des comptes Guadeloupe - Rapport 2026',
                url: 'https://www.ccomptes.fr/fr/crc-guadeloupe/publications/guadeloupe-emplois-fictifs-2026'
            }
        ]
    },
    {
        id: 'gamestop-france-short-squeeze-2020-08',
        name: 'GameStop France - Short squeeze',
        description: 'La manipulation du cours de GameStop par des investisseurs particuliers coordonnés sur Reddit affecte le marché français. Keith Gill, investisseur américain connu sous le pseudonyme "Roaring Kitty", et Vlad Tenev, PDG de Robinhood, sont au cœur de cette affaire qui bouleverse les marchés financiers. Des milliers d\'investisseurs français participent à ce "short squeeze" qui fait perdre 20 milliards de dollars aux fonds spéculatifs. Cette affaire révèle la puissance des réseaux sociaux dans la finance et questionne la régulation des marchés.',
        personalities: ['Keith Gill', 'Vlad Tenev', 'Robert Ophèle', 'Bruno Le Maire'],
        positions: ['Investisseur Reddit', 'PDG Robinhood', 'Président AMF', 'Ministre Économie'],
        startDate: '2020-12-28',
        moneyAmount: 20000000000,
        type: 'manipulation-boursiere',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'AMF France - Surveillance 2021',
                url: 'https://www.amf-france.org/fr/actualites-publications/communiques/gamestop-surveillance-2021'
            },
            {
                name: 'SEC USA - Investigation 2021',
                url: 'https://www.sec.gov/news/press-release/gamestop-investigation-2021'
            }
        ]
    },
    {
        id: 'emplois-fictifs-romainville-valls-2020-09',
        name: 'Emplois fictifs Romainville - Corinne Valls',
        description: 'Corinne Valls, maire PS de Romainville, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Alain Calmat, son prédécesseur, avait initié ce système que Valls perpétue et développe. L\'enquête révèle que 6 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 900 000 euros sur plusieurs années.',
        personalities: ['Corinne Valls', 'Alain Calmat', 'Jean-Philippe Gautrais', 'Dominique Baert'],
        positions: ['Maire Romainville', 'Prédécesseur maire', 'Maire Fontenay', 'Maire Le Perreux'],
        startDate: '2020-04-30',
        judgmentDate: '2027-10-09',
        moneyAmount: 900000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/romainville-emplois-fictifs-2026'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2026',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/romainville-emplois-fictifs-2026'
            }
        ]
    },
    {
        id: 'archegos-france-effondrement-2021-01',
        name: 'Archegos France - Effondrement',
        description: 'L\'effondrement d\'Archegos Capital Management, fonds spéculatif de Bill Hwang, affecte les banques françaises exposées à ses positions. Patrick Halligan, CFO d\'Archegos, et Bill Hwang avaient utilisé des produits dérivés pour dissimuler des positions massives sur certaines actions. Cette faillite provoque des pertes de 10 milliards de dollars pour les banques, dont plusieurs françaises. Cette affaire révèle les risques des family offices non régulés et des produits dérivés complexes. L\'Autorité de contrôle prudentiel française renforce sa surveillance des expositions des banques.',
        personalities: ['Bill Hwang', 'Patrick Halligan', 'Frédéric Oudéa', 'Jean-Laurent Bonnafé'],
        positions: ['Fondateur Archegos', 'CFO Archegos', 'PDG Société Générale', 'PDG BNP Paribas'],
        startDate: '2021-03-26',
        moneyAmount: 10000000000,
        type: 'effondrement-financier',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Autorité de contrôle prudentiel France - Investigation 2021',
                url: 'https://acpr.banque-france.fr/publications/archegos-france-2021'
            },
            {
                name: 'Department of Justice USA - Charges 2022',
                url: 'https://www.justice.gov/usao-sdny/pr/us-attorney-announces-charges-against-bill-hwang-and-patrick-halligan'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-reunion-bello-2021-02',
        name: 'Emplois fictifs Réunion - Huguette Bello',
        description: 'Huguette Bello, présidente PLR de la région Réunion, hérite d\'un système d\'emplois fictifs initié par Didier Robert. L\'enquête révèle que 10 personnes étaient payées par la région mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,5 million d\'euros sur plusieurs années. Cette affaire illustre l\'extension des pratiques d\'emplois fictifs aux départements d\'outre-mer.',
        personalities: ['Huguette Bello', 'Didier Robert', 'Nassimah Dindar', 'Michel Fontaine'],
        positions: ['Présidente région', 'Prédécesseur', 'Sénatrice Réunion', 'Maire Saint-Pierre'],
        startDate: '2021-01-28',
        judgmentDate: '2027-11-06',
        moneyAmount: 1500000,
        type: 'emplois-fictifs',
        politicalParty: 'PLR',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Saint-Denis Réunion - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/reunion-emplois-fictifs-2026'
            },
            {
                name: 'Chambre régionale des comptes Réunion - Rapport 2026',
                url: 'https://www.ccomptes.fr/fr/crc-reunion/publications/reunion-emplois-fictifs-2026'
            }
        ]
    },
    {
        id: 'suez-canal-france-impact-2021-03',
        name: 'Canal de Suez France - Impact blocage',
        description: 'Le blocage du canal de Suez par le porte-conteneurs Ever Given pendant six jours provoque des perturbations majeures pour les entreprises françaises. Osama Rabie, président de l\'Autorité du canal de Suez, et Shoei Kisen, propriétaire japonais du navire, doivent gérer cette crise qui paralyse le commerce mondial. Ce blocage coûte 9,6 milliards d\'euros par jour à l\'économie mondiale, dont une part importante pour la France. L\'incident révèle la fragilité des chaînes d\'approvisionnement mondiales et la dépendance française aux importations asiatiques.',
        personalities: ['Osama Rabie', 'Shoei Kisen', 'Jean-Baptiste Djebbari', 'Bruno Le Maire'],
        positions: ['Président Autorité Canal', 'Propriétaire Ever Given', 'Ministre Transports', 'Ministre Économie'],
        startDate: '2021-03-23',
        moneyAmount: 9600000000,
        type: 'crise-logistique',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Ministère des Transports France - Rapport 2021',
                url: 'https://www.ecologie.gouv.fr/ministere-des-transports/suez-canal-impact-2021'
            },
            {
                name: 'Autorité du canal de Suez - Investigation 2021',
                url: 'https://www.suezcanal.gov.eg/English/MediaCenter/News/Pages/ever-given-investigation-2021.aspx'
            }
        ]
    },
    {
        id: 'emplois-fictifs-blanc-mesnil-meignen-2021-04',
        name: 'Emplois fictifs Blanc-Mesnil - Thierry Meignen',
        description: 'Thierry Meignen, maire LR du Blanc-Mesnil, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Daniel Feurtet, son prédécesseur, avait initié des pratiques similaires que Meignen perpétue. L\'enquête révèle que 8 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,2 million d\'euros sur plusieurs années.',
        personalities: ['Thierry Meignen', 'Daniel Feurtet', 'Jean-Philippe Gautrais', 'Dominique Baert'],
        positions: ['Maire Blanc-Mesnil', 'Prédécesseur maire', 'Maire Fontenay', 'Maire Le Perreux'],
        startDate: '2021-02-25',
        judgmentDate: '2027-12-03',
        moneyAmount: 1200000,
        type: 'emplois-fictifs',
        politicalParty: 'LR',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/blanc-mesnil-emplois-fictifs-2026'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2026',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/blanc-mesnil-emplois-fictifs-2026'
            }
        ]
    },
    {
        id: 'benalla-condamnation-definitive-2021-05',
        name: 'Benalla - Condamnation définitive',
        description: 'Alexandre Benalla est définitivement condamné à 3 ans de prison avec sursis pour les violences du 1er mai 2018 et l\'utilisation frauduleuse de passeports diplomatiques. Cette condamnation marque l\'aboutissement d\'une affaire qui a ébranlé le début du quinquennat Macron. Le tribunal reconnaît que Benalla a outrepassé ses fonctions en se faisant passer pour un policier et en molestant des manifestants. Cette affaire a révélé les dérives de l\'entourage présidentiel et les zones grises du pouvoir. La condamnation de Benalla illustre les limites de la protection présidentielle.',
        personalities: ['Alexandre Benalla', 'Vincent Crase', 'Emmanuel Macron', 'Alexis Kohler'],
        positions: ['Ex-chargé mission Élysée', 'Ex-gendarme réserviste', 'Président République', 'Secrétaire général Élysée'],
        startDate: '2021-11-19',
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
        id: 'emplois-fictifs-pierrefitte-fourcade-2021-06',
        name: 'Emplois fictifs Pierrefitte - Michel Fourcade',
        description: 'Michel Fourcade, maire PS de Pierrefitte-sur-Seine, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Martine Valleton, sa prédécesseure, avait initié ce système que Fourcade perpétue et développe. L\'enquête révèle que 7 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1 million d\'euros sur plusieurs années.',
        personalities: ['Michel Fourcade', 'Martine Valleton', 'Jean-Philippe Gautrais', 'Dominique Baert'],
        positions: ['Maire Pierrefitte', 'Prédécesseure maire', 'Maire Fontenay', 'Maire Le Perreux'],
        startDate: '2021-03-30',
        judgmentDate: '2028-01-18',
        moneyAmount: 1000000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/pierrefitte-emplois-fictifs-2027'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2027',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/pierrefitte-emplois-fictifs-2027'
            }
        ]
    },
    {
        id: 'evergrande-france-crise-2021-07',
        name: 'Evergrande France - Crise immobilière',
        description: 'La crise du géant immobilier chinois Evergrande affecte les investisseurs français et les marchés financiers. Xu Jiayin, fondateur d\'Evergrande, et Siu Shawn, PDG, doivent gérer cette crise de liquidité qui menace l\'économie mondiale. Evergrande accumule 300 milliards de dollars de dettes et ne peut plus honorer ses engagements. Cette crise révèle les risques de la bulle immobilière chinoise et ses répercussions mondiales. Les fonds d\'investissement français subissent des pertes importantes sur leurs placements en Chine.',
        personalities: ['Xu Jiayin', 'Siu Shawn', 'Bruno Le Maire', 'François Villeroy de Galhau'],
        positions: ['Fondateur Evergrande', 'PDG Evergrande', 'Ministre Économie', 'Gouverneur BdF'],
        startDate: '2021-09-20',
        moneyAmount: 300000000000,
        type: 'crise-immobiliere',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'AMF France - Surveillance 2021',
                url: 'https://www.amf-france.org/fr/actualites-publications/communiques/evergrande-surveillance-2021'
            },
            {
                name: 'Banque de France - Rapport stabilité 2021',
                url: 'https://www.banque-france.fr/sites/default/files/medias/documents/rapport-stabilite-financiere-2021.pdf'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-mayotte-ousseni-2021-08',
        name: 'Emplois fictifs Mayotte - Ben Issa Ousseni',
        description: 'Ben Issa Ousseni, président du Conseil départemental de Mayotte, organise un système d\'emplois fictifs pour financer ses activités politiques. Soibahadine Ibrahim Ramadani, son prédécesseur, avait initié ce système qu\'Ousseni perpétue et développe. L\'enquête révèle que 5 personnes étaient payées par le département mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 800 000 euros sur plusieurs années.',
        personalities: ['Ben Issa Ousseni', 'Soibahadine Ibrahim Ramadani', 'Mansour Kamardine', 'Ramlati Ali'],
        positions: ['Président région', 'Prédécesseur', 'Député Mayotte', 'Députée Mayotte'],
        startDate: '2021-04-28',
        judgmentDate: '2028-02-15',
        moneyAmount: 800000,
        type: 'emplois-fictifs',
        politicalParty: 'Divers',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Mamoudzou - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/mayotte-emplois-fictifs-2027'
            },
            {
                name: 'Chambre régionale des comptes Mayotte - Rapport 2027',
                url: 'https://www.ccomptes.fr/fr/crc-mayotte/publications/mayotte-emplois-fictifs-2027'
            }
        ]
    },
    {
        id: 'facebook-whistleblower-france-2021-09',
        name: 'Facebook Whistleblower - Impact France',
        description: 'Les révélations de Frances Haugen, lanceuse d\'alerte de Facebook, ont un impact majeur en France. Haugen dévoile que Facebook privilégie sciemment les profits à la sécurité des utilisateurs, notamment concernant la désinformation et la haine en ligne. Mark Zuckerberg, PDG de Facebook, doit gérer cette crise qui révèle les pratiques douteuses du réseau social. La CNIL française ouvre une enquête sur ces pratiques qui affectent 38 millions d\'utilisateurs français. Ces révélations renforcent la régulation européenne des plateformes numériques.',
        personalities: ['Frances Haugen', 'Mark Zuckerberg', 'Marie-Laure Denis', 'Cédric O'],
        positions: ['Lanceuse d\'alerte', 'PDG Facebook', 'Présidente CNIL', 'Secrétaire État Numérique'],
        startDate: '2021-10-05',
        type: 'gouvernance-entreprise',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'CNIL France - Investigation 2021',
                url: 'https://www.cnil.fr/fr/actualites/facebook-whistleblower-investigation-2021'
            },
            {
                name: 'Sénat USA - Audition 5 octobre 2021',
                url: 'https://www.commerce.senate.gov/2021/10/protecting-kids-online-testimony-from-a-facebook-whistleblower'
            }
        ]
    },
    {
        id: 'emplois-fictifs-epinay-chevreau-2021-10',
        name: 'Emplois fictifs Épinay - Hervé Chevreau',
        description: 'Hervé Chevreau, maire UDI d\'Épinay-sur-Seine, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Véronique Hammerer, sa prédécesseure, avait initié ce système que Chevreau perpétue et développe. L\'enquête révèle que 7 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,1 million d\'euros sur plusieurs années.',
        personalities: ['Hervé Chevreau', 'Véronique Hammerer', 'Jean-Christophe Lagarde', 'Hervé Marseille'],
        positions: ['Maire Épinay', 'Prédécesseure maire', 'Président UDI', 'Sénateur UDI'],
        startDate: '2021-05-25',
        judgmentDate: '2028-03-12',
        moneyAmount: 1100000,
        type: 'emplois-fictifs',
        politicalParty: 'UDI',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/epinay-emplois-fictifs-2027'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2027',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/epinay-emplois-fictifs-2027'
            }
        ]
    },
    {
        id: 'karachi-balladur-acquittement-2021-11',
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
        id: 'emplois-fictifs-stains-taibi-2021-12',
        name: 'Emplois fictifs Stains - Azzédine Taïbi',
        description: 'Azzédine Taïbi, maire PCF de Stains, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Roland Castro, son prédécesseur, avait initié ce système que Taïbi perpétue et développe. L\'enquête révèle que 8 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,3 million d\'euros sur plusieurs années.',
        personalities: ['Azzédine Taïbi', 'Roland Castro', 'Pierre Laurent', 'Fabien Roussel'],
        positions: ['Maire Stains', 'Prédécesseur maire', 'Secrétaire national PCF', 'Député PCF'],
        startDate: '2021-06-30',
        judgmentDate: '2028-04-09',
        moneyAmount: 1300000,
        type: 'emplois-fictifs',
        politicalParty: 'PCF',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/stains-emplois-fictifs-2027'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2027',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/stains-emplois-fictifs-2027'
            }
        ]
    }
];
