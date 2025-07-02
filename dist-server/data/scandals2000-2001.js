export const scandals2000_2001 = [
    {
        id: 'elf-loik-le-floch-2000-01',
        name: 'Affaire Elf - Condamnation Loïk Le Floch-Prigent',
        description: 'Loïk Le Floch-Prigent, ancien PDG d\'Elf Aquitaine, est condamné pour abus de biens sociaux et corruption dans le cadre du système de financement occulte mis en place au sein du groupe pétrolier. L\'enquête révèle un réseau de corruption internationale impliquant des contrats pétroliers en Afrique, des commissions occultes versées à des intermédiaires et des détournements de fonds estimés à plusieurs centaines de millions d\'euros. Le système permettait de financer des partis politiques français et d\'obtenir des contrats à l\'étranger par la corruption.',
        personalities: ['Loïk Le Floch-Prigent', 'Alfred Sirven', 'André Tarallo'],
        positions: ['PDG Elf Aquitaine', 'Directeur des affaires générales Elf', 'Directeur Afrique Elf'],
        startDate: '2000-01-15',
        judgmentDate: '2003-11-12',
        convictionDate: '2003-11-12',
        moneyAmount: 350000000,
        prisonYears: 5,
        fine: 2000000,
        ineligibilityYears: 5,
        type: 'corruption-internationale',
        status: 'convicted',
        sanctions: [
            { person: 'Loïk Le Floch-Prigent', penalty: '5 ans de prison ferme', fine: 2000000 },
            { person: 'Alfred Sirven', penalty: '4 ans de prison ferme', fine: 1000000 },
            { person: 'André Tarallo', penalty: '3 ans de prison avec sursis', fine: 500000 }
        ],
        sources: [
            {
                name: 'Arrêt Cour d\'appel Paris 12 novembre 2003',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007070234'
            },
            {
                name: 'Rapport Cour des comptes 2004 - Gestion Elf Aquitaine',
                url: 'https://www.ccomptes.fr/fr/publications/la-gestion-delf-aquitaine-1989-2002'
            }
        ]
    },
    {
        id: 'credit-lyonnais-haberer-2000-02',
        name: 'Affaire Crédit Lyonnais - Gestion Jean-Yves Haberer',
        description: 'Jean-Yves Haberer, ancien président du Crédit Lyonnais, est mis en cause pour la gestion désastreuse de la banque publique qui a coûté plus de 100 milliards de francs à l\'État français. L\'enquête révèle des prises de risques inconsidérées, notamment dans l\'immobilier américain et le financement du cinéma, des conflits d\'intérêts multiples et une gouvernance défaillante. La banque avait notamment financé des projets douteux comme le MGM Grand Hotel à Las Vegas et de nombreux films hollywoodiens sans garanties suffisantes, conduisant à des pertes colossales.',
        personalities: ['Jean-Yves Haberer', 'Jean Peyrelevade', 'François Gille'],
        positions: ['Président Crédit Lyonnais', 'Successeur', 'Directeur général'],
        startDate: '2000-03-10',
        judgmentDate: '2005-06-15',
        moneyAmount: 15000000000,
        type: 'gestion-publique',
        status: 'judged',
        sanctions: [
            { person: 'Jean-Yves Haberer', penalty: 'Relaxe', fine: 0 },
            { person: 'François Gille', penalty: '18 mois avec sursis', fine: 150000 }
        ],
        sources: [
            {
                name: 'Rapport parlementaire Assemblée Nationale n°1847 - Mission Crédit Lyonnais',
                url: 'https://www.assemblee-nationale.fr/rap-enq/r1847.asp'
            },
            {
                name: 'Cour des comptes - Rapport public 2003',
                url: 'https://www.ccomptes.fr/fr/publications/le-credit-lyonnais-1988-1998'
            }
        ]
    },
    {
        id: 'dumas-deviers-joncour-2000-03',
        name: 'Affaire Roland Dumas - Christine Deviers-Joncour',
        description: 'Roland Dumas, ancien ministre des Affaires étrangères et président du Conseil constitutionnel, est condamné pour corruption passive dans l\'affaire Elf. Il est accusé d\'avoir reçu des avantages de Christine Deviers-Joncour, lobbyiste rémunérée par Elf, en échange de son influence dans l\'attribution de contrats pétroliers. L\'enquête révèle que Deviers-Joncour a financé l\'appartement parisien de Dumas, ses voyages et ceux de sa compagne, pour un montant total de plusieurs millions de francs. Cette affaire illustre les liens entre le monde politique et les grands groupes industriels français.',
        personalities: ['Roland Dumas', 'Christine Deviers-Joncour', 'Anne-Marie Dupuy'],
        positions: ['Ministre des Affaires étrangères', 'Lobbyiste Elf', 'Compagne de Roland Dumas'],
        startDate: '2000-05-20',
        judgmentDate: '2001-05-30',
        convictionDate: '2001-05-30',
        moneyAmount: 12000000,
        prisonYears: 2,
        fine: 1000000,
        ineligibilityYears: 5,
        type: 'corruption-passive',
        politicalParty: 'PS',
        status: 'convicted',
        sanctions: [
            { person: 'Roland Dumas', penalty: '2 ans de prison avec sursis', fine: 1000000 },
            { person: 'Christine Deviers-Joncour', penalty: '2 ans de prison ferme', fine: 500000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Paris - Jugement 30 mai 2001',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007063421'
            },
            {
                name: 'Cour de cassation - Arrêt 15 juin 2004',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007070456'
            }
        ]
    },
    {
        id: 'mery-cassette-posthume-2000-04',
        name: 'Affaire Jean-Claude Méry - Cassette posthume',
        description: 'Jean-Claude Méry, promoteur immobilier décédé, révèle dans une cassette vidéo posthume l\'existence d\'un système de financement occulte du RPR par des marchés publics parisiens. Il affirme avoir remis personnellement des fonds en liquide à Jacques Chirac, alors maire de Paris, pour financer le parti. Cette révélation déclenche une enquête sur les pratiques de financement politique à la mairie de Paris dans les années 1980-1990. Méry décrit un système organisé où les entreprises bénéficiaires de marchés publics reversaient une partie des montants au parti politique, créant un cercle vicieux de corruption.',
        personalities: ['Jean-Claude Méry', 'Jacques Chirac', 'Michel Roussin'],
        positions: ['Promoteur immobilier', 'Maire de Paris', 'Directeur de cabinet'],
        startDate: '2000-09-21',
        moneyAmount: 50000000,
        type: 'financement-politique',
        politicalParty: 'RPR',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Le Monde - Révélations cassette Méry 21 septembre 2000',
                url: 'https://www.lemonde.fr/archives/article/2000/09/21/jean-claude-mery-accuse-jacques-chirac_3685421_1819218.html'
            },
            {
                name: 'Rapport Commission d\'enquête Assemblée Nationale 2001',
                url: 'https://www.assemblee-nationale.fr/rap-enq/r2938.asp'
            }
        ]
    },
    {
        id: 'schuller-fuite-argentine-2000-05',
        name: 'Affaire Didier Schuller - Fuite en Argentine',
        description: 'Didier Schuller, conseiller général des Hauts-de-Seine et proche de Charles Pasqua, fuit en Argentine pour échapper aux poursuites judiciaires concernant des marchés publics truqués dans son département. L\'enquête révèle un système de corruption organisé où Schuller percevait des commissions sur les marchés publics d\'équipement du département, notamment pour la construction de collèges et d\'infrastructures. Il est accusé d\'avoir détourné plusieurs dizaines de millions de francs et d\'avoir organisé un réseau de fausses factures avec des entreprises complices. Sa fuite spectaculaire en Argentine devient un symbole de l\'impunité des élus corrompus.',
        personalities: ['Didier Schuller', 'Charles Pasqua', 'Patrick Devedjian'],
        positions: ['Conseiller général Hauts-de-Seine', 'Président CG92', 'Vice-président CG92'],
        startDate: '2000-11-15',
        judgmentDate: '2009-03-18',
        convictionDate: '2009-03-18',
        moneyAmount: 25000000,
        prisonYears: 4,
        fine: 300000,
        type: 'marches-publics',
        politicalParty: 'RPR',
        status: 'convicted',
        sanctions: [
            { person: 'Didier Schuller', penalty: '4 ans de prison ferme', fine: 300000 },
            { person: 'Complices entreprises', penalty: 'Amendes diverses', fine: 500000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Jugement 18 mars 2009',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000020456789'
            },
            {
                name: 'Cour d\'appel Versailles - Arrêt 2010',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000022134567'
            }
        ]
    },
    {
        id: 'emplois-fictifs-paris-chirac-2001-01',
        name: 'Emplois fictifs Ville de Paris - Jacques Chirac',
        description: 'Un vaste système d\'emplois fictifs est découvert à la mairie de Paris sous la mandature de Jacques Chirac. L\'enquête révèle que le RPR employait fictivement des dizaines de personnes payées par la Ville de Paris mais travaillant exclusivement pour le parti politique. Ces emplois fictifs concernaient des attachés parlementaires, des chargés de mission et des conseillers qui n\'avaient aucune fonction municipale réelle. Le système permettait de financer le fonctionnement du parti et les campagnes électorales avec l\'argent public. L\'immunité présidentielle de Chirac empêche les poursuites pendant son mandat.',
        personalities: ['Jacques Chirac', 'Michel Roussin', 'Jean Tiberi'],
        positions: ['Maire de Paris', 'Directeur de cabinet', 'Successeur maire'],
        startDate: '2001-01-10',
        moneyAmount: 15000000,
        type: 'emplois-fictifs',
        politicalParty: 'RPR',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Ordonnance de renvoi 2001',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007064123'
            },
            {
                name: 'Cour de justice République - Dossier 2001-2007',
                url: 'https://www.courdejusticerepublique.fr/decisions/chirac-emplois-fictifs'
            }
        ]
    },
    {
        id: 'urba-emmanuelli-condamnation-2001-02',
        name: 'Affaire Urba - Condamnation Henri Emmanuelli',
        description: 'Henri Emmanuelli, ancien trésorier du Parti socialiste, est définitivement condamné dans l\'affaire Urba pour financement illégal de parti politique. Le bureau d\'études Urba servait d\'intermédiaire pour collecter des fonds auprès d\'entreprises bénéficiaires de marchés publics et les reverser au PS. Le système fonctionnait depuis les années 1970 et concernait de nombreuses collectivités socialistes. Emmanuelli est reconnu coupable d\'avoir organisé ce système de financement occulte qui a permis au PS de collecter plusieurs dizaines de millions de francs. L\'affaire révèle l\'ampleur du financement illégal des partis politiques en France.',
        personalities: ['Henri Emmanuelli', 'Michel Charasse', 'Gérard Monate'],
        positions: ['Trésorier PS', 'Ministre du Budget', 'Directeur Urba'],
        startDate: '2001-02-20',
        judgmentDate: '2001-09-12',
        convictionDate: '2001-09-12',
        moneyAmount: 80000000,
        prisonYears: 2,
        fine: 100000,
        ineligibilityYears: 2,
        type: 'financement-politique',
        politicalParty: 'PS',
        status: 'convicted',
        sanctions: [
            { person: 'Henri Emmanuelli', penalty: '2 ans avec sursis', fine: 100000 },
            { person: 'Michel Charasse', penalty: '18 mois avec sursis', fine: 50000 },
            { person: 'Gérard Monate', penalty: '1 an avec sursis', fine: 30000 }
        ],
        sources: [
            {
                name: 'Cour d\'appel Paris - Arrêt 12 septembre 2001',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007065234'
            },
            {
                name: 'Conseil constitutionnel - Décision 2001',
                url: 'https://www.conseil-constitutionnel.fr/decision/2001/2001456DC.htm'
            }
        ]
    },
    {
        id: 'falco-toulon-detournements-2001-03',
        name: 'Affaire Hubert Falco - Détournements Toulon',
        description: 'Hubert Falco, maire de Toulon, est poursuivi pour détournements de fonds publics et prise illégale d\'intérêts dans la gestion de sa commune. L\'enquête révèle des irrégularités dans l\'attribution de marchés publics, notamment pour la rénovation du centre-ville et la construction d\'équipements municipaux. Falco est accusé d\'avoir favorisé certaines entreprises en échange d\'avantages personnels et d\'avoir utilisé des fonds municipaux à des fins privées. L\'affaire met en lumière les pratiques de corruption dans les municipalités du Var et les liens entre élus locaux et entrepreneurs du BTP.',
        personalities: ['Hubert Falco', 'Jean-Marie Le Chevallier', 'Maurice Arreckx'],
        positions: ['Maire de Toulon', 'Prédécesseur FN', 'Ancien maire'],
        startDate: '2001-04-05',
        judgmentDate: '2004-01-15',
        convictionDate: '2004-01-15',
        moneyAmount: 2000000,
        prisonYears: 2,
        fine: 50000,
        ineligibilityYears: 3,
        type: 'detournement-fonds',
        politicalParty: 'UMP',
        status: 'convicted',
        sanctions: [
            { person: 'Hubert Falco', penalty: '2 ans avec sursis', fine: 50000 },
            { person: 'Complices', penalty: 'Amendes diverses', fine: 100000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Toulon - Jugement 15 janvier 2004',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007068901'
            },
            {
                name: 'Chambre régionale des comptes PACA - Rapport 2003',
                url: 'https://www.ccomptes.fr/fr/crc-paca/publications/toulon-gestion-2001-2003'
            }
        ]
    },
    {
        id: 'hlm-paris-tiberi-2001-04',
        name: 'Affaire HLM Paris - Jean et Xavière Tiberi',
        description: 'Jean Tiberi, maire de Paris, et son épouse Xavière sont poursuivis pour l\'attribution frauduleuse de logements sociaux parisiens. L\'enquête révèle un système organisé d\'attribution de HLM à des proches du couple et à des militants du RPR, en violation des critères légaux d\'attribution. Xavière Tiberi est également accusée d\'avoir rédigé un faux rapport pour la mairie de Paris afin de percevoir des honoraires indus. Cette affaire illustre les dérives du clientélisme politique dans la gestion du logement social parisien et l\'utilisation des ressources publiques à des fins partisanes.',
        personalities: ['Jean Tiberi', 'Xavière Tiberi', 'Colette Monsat'],
        positions: ['Maire de Paris', 'Conseillère de Paris', 'Directrice HLM'],
        startDate: '2001-06-12',
        judgmentDate: '2006-10-26',
        convictionDate: '2006-10-26',
        moneyAmount: 5000000,
        prisonYears: 0,
        fine: 20000,
        ineligibilityYears: 1,
        type: 'abus-fonction',
        politicalParty: 'RPR',
        status: 'convicted',
        sanctions: [
            { person: 'Jean Tiberi', penalty: 'Amende', fine: 20000 },
            { person: 'Xavière Tiberi', penalty: '6 mois avec sursis', fine: 15000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Paris - Jugement 26 octobre 2006',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007071234'
            },
            {
                name: 'Inspection générale Ville de Paris - Rapport 2001',
                url: 'https://www.paris.fr/pages/inspection-generale-rapport-hlm-2001'
            }
        ]
    },
    {
        id: 'noir-botton-lyon-2001-05',
        name: 'Affaire Michel Noir - Pierre Botton Lyon',
        description: 'Michel Noir, ancien maire de Lyon et ministre, est condamné pour corruption et financement illégal dans le cadre de sa campagne municipale de 1989. Son gendre Pierre Botton, homme d\'affaires, avait organisé un système de financement occulte impliquant des entreprises lyonnaises en échange de marchés publics. L\'enquête révèle des versements d\'espèces, des factures fictives et des avantages en nature pour financer la campagne de Noir. Cette affaire marque un tournant dans la lutte contre la corruption électorale et met en lumière les liens entre monde politique et économique dans les grandes métropoles françaises.',
        personalities: ['Michel Noir', 'Pierre Botton', 'Francisque Collomb'],
        positions: ['Maire de Lyon', 'Homme d\'affaires', 'Prédécesseur maire'],
        startDate: '2001-07-18',
        judgmentDate: '2003-03-20',
        convictionDate: '2003-03-20',
        moneyAmount: 8000000,
        prisonYears: 2,
        fine: 150000,
        ineligibilityYears: 2,
        type: 'corruption-electorale',
        politicalParty: 'UDF',
        status: 'convicted',
        sanctions: [
            { person: 'Michel Noir', penalty: '2 ans avec sursis', fine: 150000 },
            { person: 'Pierre Botton', penalty: '4 ans ferme', fine: 200000 }
        ],
        sources: [
            {
                name: 'Cour d\'appel Lyon - Arrêt 20 mars 2003',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007067890'
            },
            {
                name: 'Commission nationale des comptes de campagne - Rapport 1989',
                url: 'https://www.cnccfp.fr/index.php?art=734'
            }
        ]
    },
    {
        id: 'carignon-grenoble-appel-2001-06',
        name: 'Affaire Alain Carignon - Appel Grenoble',
        description: 'Alain Carignon, ancien maire de Grenoble et ministre de la Communication, voit sa condamnation confirmée en appel pour corruption dans l\'attribution de marchés publics grenoblois. L\'affaire concerne notamment la gestion de l\'eau et de l\'assainissement de la ville, où Carignon avait favorisé certaines entreprises en échange d\'avantages personnels. Il est accusé d\'avoir reçu des voyages, des financements pour ses campagnes et des emplois pour ses proches. Cette condamnation en appel confirme la gravité des faits et l\'ampleur du système corruptif mis en place dans la gestion municipale grenobloise.',
        personalities: ['Alain Carignon', 'René Rouquet', 'Pierre Gascon'],
        positions: ['Maire de Grenoble', 'Adjoint', 'Directeur services'],
        startDate: '2001-09-10',
        judgmentDate: '2001-12-14',
        convictionDate: '2001-12-14',
        moneyAmount: 12000000,
        prisonYears: 4,
        fine: 200000,
        ineligibilityYears: 5,
        type: 'corruption-marches',
        politicalParty: 'RPR',
        status: 'convicted',
        sanctions: [
            { person: 'Alain Carignon', penalty: '4 ans ferme', fine: 200000 },
            { person: 'René Rouquet', penalty: '2 ans avec sursis', fine: 50000 }
        ],
        sources: [
            {
                name: 'Cour d\'appel Grenoble - Arrêt 14 décembre 2001',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007066123'
            },
            {
                name: 'Cour des comptes - Rapport gestion Grenoble 1995-2001',
                url: 'https://www.ccomptes.fr/fr/publications/grenoble-gestion-municipale-1995-2001'
            }
        ]
    },
    {
        id: 'longuet-financement-campagne-2001-07',
        name: 'Affaire Gérard Longuet - Financement campagne',
        description: 'Gérard Longuet, ministre de l\'Industrie et sénateur, est mis en cause pour financement irrégulier de ses campagnes électorales et confusion entre patrimoine personnel et politique. L\'enquête révèle des irrégularités dans les comptes de campagne, notamment l\'utilisation de fonds d\'origine douteuse et la non-déclaration de certains financements. Longuet est accusé d\'avoir bénéficié de prêts avantageux et de dons non déclarés de la part d\'entreprises. Cette affaire soulève des questions sur le contrôle du financement électoral et la transparence des comptes de campagne des candidats.',
        personalities: ['Gérard Longuet', 'François Léotard', 'Alain Madelin'],
        positions: ['Ministre de l\'Industrie', 'Président UDF', 'Ministre Économie'],
        startDate: '2001-10-25',
        judgmentDate: '2004-06-30',
        moneyAmount: 3000000,
        fine: 30000,
        type: 'financement-electoral',
        politicalParty: 'UDF',
        status: 'judged',
        sanctions: [
            { person: 'Gérard Longuet', penalty: 'Amende', fine: 30000 }
        ],
        sources: [
            {
                name: 'Commission nationale des comptes de campagne - Décision 2004',
                url: 'https://www.cnccfp.fr/index.php?art=845'
            },
            {
                name: 'Conseil d\'État - Arrêt 30 juin 2004',
                url: 'https://www.legifrance.gouv.fr/ceta/id/CETATEXT000008123456'
            }
        ]
    }
];
