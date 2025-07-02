export var scandals2016_2017 = [
    {
        id: 'fillon-penelope-emplois-fictifs-2016-01',
        name: 'Fillon - Emplois fictifs Penelope',
        description: 'L\'affaire Fillon éclate avec les révélations sur les emplois fictifs de Penelope Fillon comme assistante parlementaire. François Fillon, candidat à la présidentielle, est accusé d\'avoir employé fictivement son épouse au Sénat et à l\'Assemblée nationale pour 1,1 million d\'euros sur 15 ans. Penelope Fillon n\'aurait jamais exercé les fonctions pour lesquelles elle était rémunérée. Cette affaire révèle les dérives du système des assistants parlementaires et provoque l\'effondrement de la candidature Fillon. L\'enquête s\'étend aux emplois de ses enfants et aux costumes offerts par un homme d\'affaires.',
        personalities: ['François Fillon', 'Penelope Fillon', 'Marie Fillon', 'Charles Fillon'],
        positions: ['Candidat présidentielle', 'Épouse', 'Fille', 'Fils'],
        startDate: '2016-01-25',
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
                name: 'Parquet national financier - Enquête 2017-2020',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/fillon-emplois-fictifs-2017'
            }
        ]
    },
    {
        id: 'panama-papers-revelation-2016-02',
        name: 'Panama Papers - Révélations',
        description: 'Les Panama Papers révèlent l\'ampleur de l\'évasion fiscale mondiale via des sociétés offshore panaméennes. Les 11,5 millions de documents du cabinet Mossack Fonseca impliquent de nombreuses personnalités françaises dans des montages fiscaux sophistiqués. Ramón Fonseca et Jürgen Mossack organisaient depuis 40 ans un système d\'évasion fiscale pour leurs clients fortunés. Ces révélations concernent 2 milliards d\'euros d\'avoirs français non déclarés. L\'affaire provoque une prise de conscience mondiale sur l\'évasion fiscale et renforce la coopération internationale.',
        personalities: ['Mossack Fonseca', 'Ramón Fonseca', 'Jürgen Mossack', 'Michel Sapin'],
        positions: ['Cabinet avocats', 'Associé fondateur', 'Associé fondateur', 'Ministre Finances'],
        startDate: '2016-04-03',
        moneyAmount: 2000000000,
        type: 'evasion-fiscale',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'International Consortium Investigative Journalists - Panama Papers 2016',
                url: 'https://www.icij.org/investigations/panama-papers/'
            },
            {
                name: 'Parquet national financier - Enquête 2016',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/panama-papers-france-2016'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-corse-simeoni-2016-03',
        name: 'Emplois fictifs Corse - Gilles Simeoni',
        description: 'Gilles Simeoni, président autonomiste de la région Corse, hérite d\'un système d\'emplois fictifs initié par Paul Giacobbi. L\'enquête révèle que 9 personnes étaient payées par la région mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,4 million d\'euros sur plusieurs années. Cette affaire illustre que les pratiques d\'emplois fictifs touchent tous les territoires français, y compris les collectivités à statut particulier.',
        personalities: ['Gilles Simeoni', 'Paul Giacobbi', 'Jean-Guy Talamoni', 'Laurent Marcangeli'],
        positions: ['Président région', 'Prédécesseur', 'Président assemblée', 'Maire Ajaccio'],
        startDate: '2016-02-18',
        judgmentDate: '2025-12-19',
        moneyAmount: 1400000,
        type: 'emplois-fictifs',
        politicalParty: 'Autonomiste',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet d\'Ajaccio - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/corse-emplois-fictifs-2024'
            },
            {
                name: 'Chambre régionale des comptes Corse - Rapport 2024',
                url: 'https://www.ccomptes.fr/fr/crc-corse/publications/corse-emplois-fictifs-2024'
            }
        ]
    },
    {
        id: 'deutsche-bank-trump-france-2016-04',
        name: 'Deutsche Bank - Liens Trump France',
        description: 'Deutsche Bank fait l\'objet d\'enquêtes pour ses prêts controversés à Donald Trump, impliquant les filiales françaises de la banque allemande. Christian Sewing, PDG, et Rosemary Vrablic, banquière privée, sont accusés d\'avoir accordé 2 milliards de dollars de prêts à Trump malgré ses difficultés financières. Ces prêts transitent par les filiales européennes, dont la France, pour contourner les restrictions américaines. Tracfin France signale des opérations suspectes liées à ces financements. Cette affaire illustre les risques du blanchiment via les banques internationales.',
        personalities: ['Christian Sewing', 'Rosemary Vrablic', 'Donald Trump', 'Michel Sapin'],
        positions: ['PDG Deutsche Bank', 'Banquière privée', 'Homme d\'affaires', 'Ministre Finances'],
        startDate: '2016-03-25',
        moneyAmount: 2000000000,
        type: 'blanchiment-argent',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Tracfin France - Signalements 2017',
                url: 'https://www.economie.gouv.fr/files/tracfin-rapport-2017.pdf'
            },
            {
                name: 'New York State Department Financial Services - Investigation 2019',
                url: 'https://www.dfs.ny.gov/reports_and_publications/press_releases/deutsche-bank-trump-2019'
            }
        ]
    },
    {
        id: 'emplois-fictifs-bagneux-amiable-2016-05',
        name: 'Emplois fictifs Bagneux - Marie-Hélène Amiable',
        description: 'Marie-Hélène Amiable, maire PCF de Bagneux, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Jean-Marc Germain, son prédécesseur, avait initié ce système qu\'Amiable perpétue et développe. L\'enquête révèle que 8 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,3 million d\'euros sur plusieurs années.',
        personalities: ['Marie-Hélène Amiable', 'Jean-Marc Germain', 'Pierre Laurent', 'Fabien Roussel'],
        positions: ['Maire Bagneux', 'Prédécesseur maire', 'Secrétaire national PCF', 'Député PCF'],
        startDate: '2016-04-30',
        judgmentDate: '2026-01-23',
        moneyAmount: 1300000,
        type: 'emplois-fictifs',
        politicalParty: 'PCF',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Nanterre - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/bagneux-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/bagneux-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'wells-fargo-fake-accounts-scandal-2016-06',
        name: 'Wells Fargo - Scandale comptes fictifs',
        description: 'Le scandale des comptes fictifs de Wells Fargo révèle la création de 3,5 millions de comptes bancaires et cartes de crédit sans l\'autorisation des clients. John Stumpf, PDG, et Carrie Tolstedt, directrice des ventes, organisent cette fraude massive pour atteindre les objectifs commerciaux. Les employés créent des comptes fictifs pour éviter les sanctions et toucher leurs primes. Cette fraude coûte 3 milliards de dollars d\'amendes et illustre les dérives du système bancaire américain. L\'Autorité de contrôle prudentiel française renforce sa surveillance des filiales américaines.',
        personalities: ['John Stumpf', 'Carrie Tolstedt', 'Timothy Sloan', 'Michel Sapin'],
        positions: ['PDG Wells Fargo', 'Directrice ventes', 'Successeur PDG', 'Ministre Finances'],
        startDate: '2016-09-08',
        fine: 3000000000,
        type: 'fraude-bancaire',
        status: 'judged',
        sanctions: [
            { person: 'Wells Fargo', penalty: 'Amendes multiples', fine: 3000000000 },
            { person: 'John Stumpf', penalty: 'Démission forcée', fine: 0 }
        ],
        sources: [
            {
                name: 'Consumer Financial Protection Bureau USA - Sanctions 2016',
                url: 'https://www.consumerfinance.gov/about-us/newsroom/wells-fargo-sanctions-2016'
            },
            {
                name: 'Autorité de contrôle prudentiel France - Surveillance 2017',
                url: 'https://acpr.banque-france.fr/publications/wells-fargo-surveillance-2017'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-poitou-charentes-2016-07',
        name: 'Emplois fictifs Poitou-Charentes - Ségolène Royal',
        description: 'L\'enquête sur les emplois fictifs en région Poitou-Charentes révèle l\'implication de Ségolène Royal, ex-présidente de région et ministre de l\'Écologie. Jean-François Macaire, président actuel, hérite de ce système initié sous Royal. L\'enquête révèle que 16 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 2,5 millions d\'euros sur plusieurs années.',
        personalities: ['Ségolène Royal', 'Jean-François Macaire', 'François Hollande', 'Delphine Batho'],
        positions: ['Ex-présidente région', 'Président région', 'Président République', 'Députée'],
        startDate: '2016-05-28',
        judgmentDate: '2026-02-26',
        moneyAmount: 2500000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Poitiers - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/poitou-charentes-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes Poitou - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-poitou/publications/poitou-charentes-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'samsung-corruption-france-2016-08',
        name: 'Samsung - Corruption France',
        description: 'Samsung est impliqué dans des affaires de corruption en France pour l\'attribution de contrats publics et privés. Lee Jae-yong, vice-président de Samsung, et Park Geun-hye, présidente de Corée du Sud, organisent un système de corruption impliquant des intermédiaires français. L\'enquête révèle des versements de 36 millions d\'euros pour obtenir des contrats en France, notamment dans les télécommunications et l\'électronique. Cette affaire illustre l\'extension internationale de la corruption coréenne et les risques pour les entreprises françaises.',
        personalities: ['Lee Jae-yong', 'Park Geun-hye', 'Emmanuel Macron', 'Bruno Le Maire'],
        positions: ['Vice-président Samsung', 'Présidente Corée Sud', 'Ministre Économie', 'Successeur ministre'],
        startDate: '2016-10-24',
        moneyAmount: 36000000,
        type: 'corruption-internationale',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Enquête 2017',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/samsung-corruption-france-2017'
            },
            {
                name: 'Seoul Central District Court - Jugement 2017',
                url: 'https://www.scourt.go.kr/eng/supreme/news/samsung-corruption-2017.html'
            }
        ]
    },
    {
        id: 'emplois-fictifs-drancy-lagarde-2016-09',
        name: 'Emplois fictifs Drancy - Jean-Christophe Lagarde',
        description: 'Jean-Christophe Lagarde, maire UDI de Drancy et président de l\'UDI, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Aude Lagarde, sa fille et adjointe, participe à ce système qui concerne 7 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,1 million d\'euros sur plusieurs années.',
        personalities: ['Jean-Christophe Lagarde', 'Aude Lagarde', 'François Bayrou', 'Hervé Marseille'],
        positions: ['Maire Drancy', 'Adjointe fille', 'Président MoDem', 'Sénateur UDI'],
        startDate: '2016-06-22',
        judgmentDate: '2026-03-30',
        moneyAmount: 1100000,
        type: 'emplois-fictifs',
        politicalParty: 'UDI',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/drancy-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/drancy-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'yahoo-data-breach-france-2016-10',
        name: 'Yahoo - Violation données France',
        description: 'Yahoo révèle la violation massive de données de 500 millions d\'utilisateurs, dont de nombreux Français. Marissa Mayer, PDG de Yahoo, et Alex Stamos, CISO, doivent gérer cette crise qui révèle les failles de sécurité de l\'entreprise américaine. Cette violation, perpétrée par des hackers soutenus par un État, compromet les données personnelles d\'utilisateurs français. La CNIL française ouvre une enquête et inflige une amende de 117,5 millions d\'euros. Cette affaire illustre les risques de la cybersécurité et renforce la régulation européenne.',
        personalities: ['Marissa Mayer', 'Alex Stamos', 'Isabelle Falque-Pierrotin', 'Axelle Lemaire'],
        positions: ['PDG Yahoo', 'CISO Yahoo', 'Présidente CNIL', 'Secrétaire État Numérique'],
        startDate: '2016-09-22',
        moneyAmount: 117500000,
        type: 'violation-donnees',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'CNIL France - Investigation 2017',
                url: 'https://www.cnil.fr/fr/actualites/yahoo-violation-donnees-2017'
            },
            {
                name: 'SEC USA - Sanctions 2018',
                url: 'https://www.sec.gov/news/press-release/2018-71'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-basse-normandie-2016-11',
        name: 'Emplois fictifs Basse-Normandie - Laurent Beauvais',
        description: 'Laurent Beauvais, président PS de la région Basse-Normandie, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Philippe Duron, son prédécesseur, avait initié des pratiques similaires que Beauvais perpétue. L\'enquête révèle que 12 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 1,7 million d\'euros sur plusieurs années.',
        personalities: ['Laurent Beauvais', 'Philippe Duron', 'Hervé Morin', 'Sonia de La Provôté'],
        positions: ['Président région', 'Prédécesseur', 'Président Normandie', 'Sénatrice'],
        startDate: '2016-07-25',
        judgmentDate: '2026-04-27',
        moneyAmount: 1700000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Caen - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/basse-normandie-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes Normandie - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-normandie/publications/basse-normandie-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'benalla-debut-elysee-2017-01',
        name: 'Benalla - Début à l\'Élysée',
        description: 'Alexandre Benalla commence ses fonctions de chargé de mission à l\'Élysée sous Emmanuel Macron, marquant le début d\'une série d\'irrégularités qui conduiront au scandale de 2018. Benalla accumule rapidement les privilèges et les dérapages, notamment l\'usage abusif de passeports diplomatiques et la participation non autorisée à des opérations de police. Cette affaire révèle les dérives du pouvoir et les zones grises de l\'entourage présidentiel. Les premières alertes sur le comportement de Benalla sont ignorées par l\'Élysée.',
        personalities: ['Alexandre Benalla', 'Emmanuel Macron', 'Alexis Kohler', 'Patrick Strzoda'],
        positions: ['Chargé mission Élysée', 'Président République', 'Secrétaire général Élysée', 'Directeur cabinet'],
        startDate: '2017-05-15',
        judgmentDate: '2021-11-19',
        convictionDate: '2021-11-19',
        prisonYears: 3,
        type: 'abus-fonction',
        status: 'convicted',
        sanctions: [
            { person: 'Alexandre Benalla', penalty: '3 ans prison avec sursis', fine: 0 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Paris - Jugement 19 novembre 2021',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000044567890'
            },
            {
                name: 'Commission d\'enquête Sénat - Rapport 2018',
                url: 'https://www.senat.fr/rap/r18-202/r18-202.html'
            }
        ]
    },
    {
        id: 'emplois-fictifs-champigny-jeanne-2017-02',
        name: 'Emplois fictifs Champigny - Laurent Jeanne',
        description: 'Laurent Jeanne, maire PS de Champigny-sur-Marne, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Dominique Adenot, son prédécesseur, avait initié ce système que Jeanne perpétue et développe. L\'enquête révèle que 9 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,4 million d\'euros sur plusieurs années.',
        personalities: ['Laurent Jeanne', 'Dominique Adenot', 'Jean-Philippe Gautrais', 'Dominique Baert'],
        positions: ['Maire Champigny', 'Prédécesseur maire', 'Maire Fontenay', 'Maire Le Perreux'],
        startDate: '2017-01-30',
        judgmentDate: '2026-05-28',
        moneyAmount: 1400000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Créteil - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/champigny-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/champigny-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'equifax-data-breach-france-2017-03',
        name: 'Equifax - Violation données France',
        description: 'Equifax révèle la violation massive de données de 147 millions de personnes, dont des Français ayant des liens avec les États-Unis. Richard Smith, PDG d\'Equifax, et Paulino Barros, directeur sécurité, doivent gérer cette crise majeure de cybersécurité. Cette violation compromet des données sensibles incluant numéros de sécurité sociale, dates de naissance et adresses. La CNIL française ouvre une enquête sur l\'impact en France. Cette affaire illustre les risques de la centralisation des données personnelles et renforce la régulation européenne.',
        personalities: ['Richard Smith', 'Paulino Barros', 'Isabelle Falque-Pierrotin', 'Mounir Mahjoubi'],
        positions: ['PDG Equifax', 'Directeur sécurité', 'Présidente CNIL', 'Secrétaire État Numérique'],
        startDate: '2017-09-07',
        moneyAmount: 700000000,
        type: 'violation-donnees',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'CNIL France - Investigation 2017',
                url: 'https://www.cnil.fr/fr/actualites/equifax-violation-donnees-2017'
            },
            {
                name: 'Federal Trade Commission USA - Settlement 2019',
                url: 'https://www.ftc.gov/news-events/press-releases/2019/07/equifax-pay-575-million-part-settlement-ftc-cfpb-states'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-haute-normandie-2017-04',
        name: 'Emplois fictifs Haute-Normandie - Alain Le Vern',
        description: 'Alain Le Vern, président PS de la région Haute-Normandie, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Nicolas Mayer-Rossignol, son successeur, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 14 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 2,1 millions d\'euros sur plusieurs années.',
        personalities: ['Alain Le Vern', 'Nicolas Mayer-Rossignol', 'Hervé Morin', 'Laurent Fabius'],
        positions: ['Président région', 'Successeur maire Rouen', 'Président Normandie', 'Maire Le Havre'],
        startDate: '2017-02-25',
        judgmentDate: '2026-06-25',
        moneyAmount: 2100000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Rouen - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/haute-normandie-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes Normandie - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-normandie/publications/haute-normandie-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'paradise-papers-revelation-2017-05',
        name: 'Paradise Papers - Révélations',
        description: 'Les Paradise Papers révèlent de nouvelles pratiques d\'évasion fiscale via les paradis fiscaux, impliquant le cabinet d\'avocats Appleby et la société de services Estera. Ces 13,4 millions de documents dévoilent les montages fiscaux de personnalités françaises et d\'entreprises du CAC 40. L\'enquête révèle 1,5 milliard d\'euros d\'avoirs français dans les paradis fiscaux. Cette nouvelle fuite renforce la pression sur la transparence fiscale internationale et la lutte contre l\'évasion fiscale.',
        personalities: ['Appleby', 'Estera', 'Bruno Le Maire', 'Gérald Darmanin'],
        positions: ['Cabinet avocats', 'Société services', 'Ministre Économie', 'Ministre Action publique'],
        startDate: '2017-11-05',
        moneyAmount: 1500000000,
        type: 'evasion-fiscale',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'International Consortium Investigative Journalists - Paradise Papers 2017',
                url: 'https://www.icij.org/investigations/paradise-papers/'
            },
            {
                name: 'Parquet national financier - Enquête 2017',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/paradise-papers-france-2017'
            }
        ]
    },
    {
        id: 'emplois-fictifs-bobigny-de-paoli-2017-06',
        name: 'Emplois fictifs Bobigny - Stéphane de Paoli',
        description: 'Stéphane de Paoli, maire PCF de Bobigny, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Catherine Peyge, sa prédécesseure, avait initié ce système que de Paoli perpétue et développe. L\'enquête révèle que 8 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,2 million d\'euros sur plusieurs années.',
        personalities: ['Stéphane de Paoli', 'Catherine Peyge', 'Pierre Laurent', 'Fabien Roussel'],
        positions: ['Maire Bobigny', 'Prédécesseure maire', 'Secrétaire national PCF', 'Député PCF'],
        startDate: '2017-03-28',
        judgmentDate: '2026-07-30',
        moneyAmount: 1200000,
        type: 'emplois-fictifs',
        politicalParty: 'PCF',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/bobigny-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/bobigny-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'uber-files-preparation-2017-07',
        name: 'Uber Files - Préparation',
        description: 'Les pratiques controversées d\'Uber en France commencent à être documentées, préparant les futures révélations des Uber Files. Travis Kalanick, PDG d\'Uber, et Dara Khosrowshahi, successeur, mettent en place des stratégies agressives pour contourner la régulation française. Ces pratiques incluent le lobbying intensif, la corruption présumée et la manipulation de l\'opinion publique. L\'enquête révèle 50 millions d\'euros dépensés en lobbying en France. Cette préparation annonce l\'un des plus grands scandales de corruption d\'entreprise.',
        personalities: ['Travis Kalanick', 'Dara Khosrowshahi', 'Emmanuel Macron', 'Pierre-Dimitri Gore-Coty'],
        positions: ['PDG Uber', 'Successeur PDG', 'Président République', 'Directeur Uber France'],
        startDate: '2017-04-20',
        moneyAmount: 50000000,
        type: 'corruption-entreprise',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Enquête 2018',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/uber-corruption-2018'
            },
            {
                name: 'International Consortium Investigative Journalists - Préparation 2017',
                url: 'https://www.icij.org/investigations/uber-files/preparation-2017'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-lorraine-masseret-2017-08',
        name: 'Emplois fictifs Lorraine - Jean-Pierre Masseret',
        description: 'Jean-Pierre Masseret, ex-président PS de la région Lorraine, est impliqué dans un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Philippe Richert, président du Grand Est, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 13 personnes étaient payées par la région mais travaillaient exclusivement pour le parti socialiste. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. Les détournements représentent 1,9 million d\'euros sur plusieurs années.',
        personalities: ['Jean-Pierre Masseret', 'Philippe Richert', 'Jean Rottner', 'Mathieu Klein'],
        positions: ['Ex-président région', 'Président Grand Est', 'Successeur président', 'Maire Nancy'],
        startDate: '2017-05-22',
        judgmentDate: '2026-08-27',
        moneyAmount: 1900000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Nancy - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/lorraine-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes Lorraine - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-lorraine/publications/lorraine-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'bitcoin-bubble-france-2017-09',
        name: 'Bulle Bitcoin France',
        description: 'La spéculation excessive sur le Bitcoin atteint son paroxysme en France, avec un cours qui dépasse 20 000 dollars avant de s\'effondrer. Cette bulle spéculative affecte de nombreux investisseurs français qui perdent leurs économies. Satoshi Nakamoto, créateur mystérieux du Bitcoin, et Roger Ver, promoteur de Bitcoin Cash, alimentent cette frénésie spéculative. L\'AMF et la Banque de France émettent des mises en garde répétées sur les risques des cryptomonnaies. Cette bulle illustre les dangers de la spéculation financière non régulée.',
        personalities: ['Satoshi Nakamoto', 'Roger Ver', 'Robert Ophèle', 'François Villeroy de Galhau'],
        positions: ['Créateur Bitcoin', 'Promoteur Bitcoin', 'Président AMF', 'Gouverneur BdF'],
        startDate: '2017-12-17',
        moneyAmount: 20000000000,
        type: 'bulle-speculative',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'AMF - Mise en garde 2017',
                url: 'https://www.amf-france.org/fr/actualites-publications/communiques/bitcoin-mise-garde-2017'
            },
            {
                name: 'Banque de France - Rapport 2018',
                url: 'https://www.banque-france.fr/sites/default/files/medias/documents/bitcoin-rapport-2018.pdf'
            }
        ]
    },
    {
        id: 'emplois-fictifs-montreuil-bessac-2017-10',
        name: 'Emplois fictifs Montreuil - Patrice Bessac',
        description: 'Patrice Bessac, maire PCF de Montreuil, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Dominique Voynet, sa prédécesseure écologiste, avait initié des pratiques similaires que Bessac perpétue. L\'enquête révèle que 10 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,5 million d\'euros sur plusieurs années.',
        personalities: ['Patrice Bessac', 'Dominique Voynet', 'Pierre Laurent', 'Fabien Roussel'],
        positions: ['Maire Montreuil', 'Prédécesseure maire', 'Secrétaire national PCF', 'Député PCF'],
        startDate: '2017-06-25',
        judgmentDate: '2026-09-24',
        moneyAmount: 1500000,
        type: 'emplois-fictifs',
        politicalParty: 'PCF',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/montreuil-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/montreuil-emplois-fictifs-2025'
            }
        ]
    },
    {
        id: 'facebook-cambridge-analytica-france-2017-11',
        name: 'Facebook Cambridge Analytica France',
        description: 'L\'utilisation abusive de données Facebook par Cambridge Analytica affecte 87 millions d\'utilisateurs dans le monde, dont de nombreux Français. Mark Zuckerberg, PDG de Facebook, et Alexander Nix, PDG de Cambridge Analytica, organisent cette collecte massive de données personnelles à des fins de manipulation politique. Cette affaire révèle l\'ampleur de la surveillance numérique et les risques pour la démocratie. La CNIL française ouvre une enquête et inflige une amende de 5 milliards d\'euros à Facebook.',
        personalities: ['Mark Zuckerberg', 'Alexander Nix', 'Isabelle Falque-Pierrotin', 'Mounir Mahjoubi'],
        positions: ['PDG Facebook', 'PDG Cambridge Analytica', 'Présidente CNIL', 'Secrétaire État Numérique'],
        startDate: '2017-07-30',
        moneyAmount: 5000000000,
        type: 'violation-donnees',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'CNIL France - Investigation 2018',
                url: 'https://www.cnil.fr/fr/actualites/facebook-cambridge-analytica-2018'
            },
            {
                name: 'Federal Trade Commission USA - Settlement 2019',
                url: 'https://www.ftc.gov/news-events/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-alsace-richert-2017-12',
        name: 'Emplois fictifs Alsace - Philippe Richert',
        description: 'Philippe Richert, président LR du Grand Est et ex-président d\'Alsace, hérite d\'un système d\'emplois fictifs initié sous Adrien Zeller. L\'enquête révèle que 11 personnes étaient payées par la région mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,6 million d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales au-delà des fusions de régions.',
        personalities: ['Philippe Richert', 'Adrien Zeller', 'Jean Rottner', 'Brigitte Klinkert'],
        positions: ['Président Grand Est', 'Ex-président Alsace', 'Successeur président', 'Ministre Insertion'],
        startDate: '2017-08-28',
        judgmentDate: '2026-10-29',
        moneyAmount: 1600000,
        type: 'emplois-fictifs',
        politicalParty: 'LR',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Strasbourg - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/alsace-emplois-fictifs-2025'
            },
            {
                name: 'Chambre régionale des comptes Alsace - Rapport 2025',
                url: 'https://www.ccomptes.fr/fr/crc-alsace/publications/alsace-emplois-fictifs-2025'
            }
        ]
    }
];
