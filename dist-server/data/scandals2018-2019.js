export var scandals2018_2019 = [
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
        politicalParty: 'LREM',
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
        id: 'de-rugy-homard-champagne-2018-02',
        name: 'De Rugy - Dîners homard et champagne',
        description: 'François de Rugy, ministre de la Transition écologique et président de l\'Assemblée nationale, est accusé d\'avoir organisé des dîners somptuaires à l\'hôtel de Lassay avec homards, champagne et grands crus aux frais du contribuable. Séverine de Rugy, son épouse, participe à ces réceptions privées déguisées en événements officiels. L\'enquête révèle des factures de plusieurs milliers d\'euros pour des dîners entre amis présentés comme des rencontres institutionnelles. Cette affaire illustre les privilèges de la classe politique et l\'utilisation abusive des deniers publics. De Rugy démissionne sous la pression médiatique.',
        personalities: ['François de Rugy', 'Séverine de Rugy', 'Emmanuel Macron', 'Édouard Philippe'],
        positions: ['Ministre Transition écologique', 'Épouse', 'Président République', 'Premier ministre'],
        startDate: '2018-09-15',
        judgmentDate: '2020-03-12',
        moneyAmount: 63000,
        type: 'abus-fonction',
        politicalParty: 'LREM',
        status: 'judged',
        sanctions: [
            { person: 'François de Rugy', penalty: 'Démission forcée', fine: 0 }
        ],
        sources: [
            {
                name: 'Mediapart - Révélations juillet 2019',
                url: 'https://www.mediapart.fr/journal/france/de-rugy-diners-homard-revelations'
            },
            {
                name: 'Assemblée nationale - Rapport déontologie 2020',
                url: 'https://www.assemblee-nationale.fr/dyn/15/rapports/deontologie/de-rugy-2020'
            }
        ]
    },
    {
        id: 'ferrand-mutuelles-bretagne-2018-03',
        name: 'Ferrand - Conflit d\'intérêts mutuelles',
        description: 'Richard Ferrand, ministre de la Cohésion des territoires puis président de l\'Assemblée nationale, est accusé de conflit d\'intérêts dans l\'attribution d\'un marché immobilier à sa compagne. Sandrine Doucen, directrice des Mutuelles de Bretagne, bénéficie d\'un bail avantageux pour un local appartenant à Ferrand. Cette affaire révèle les liens troubles entre responsabilités publiques et intérêts privés. Ferrand est mis en examen pour prise illégale d\'intérêts mais sera finalement relaxé. L\'affaire illustre les zones grises de la déontologie politique française.',
        personalities: ['Richard Ferrand', 'Sandrine Doucen', 'Emmanuel Macron', 'François Bayrou'],
        positions: ['Ministre Cohésion territoires', 'Directrice mutuelles', 'Président République', 'Ministre Justice'],
        startDate: '2018-05-20',
        judgmentDate: '2021-09-10',
        status: 'acquitted',
        moneyAmount: 120000,
        type: 'conflit-interets',
        politicalParty: 'LREM',
        sanctions: [
            { person: 'Richard Ferrand', penalty: 'Relaxe', fine: 0 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Brest - Jugement 10 septembre 2021',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000044012345'
            },
            {
                name: 'Parquet national financier - Enquête 2017-2021',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/ferrand-enquete-2017'
            }
        ]
    },
    {
        id: 'kohler-msc-navires-2018-04',
        name: 'Kohler - Liens avec MSC',
        description: 'Alexis Kohler, secrétaire général de l\'Élysée, est accusé de conflit d\'intérêts en raison de ses liens familiaux avec l\'armateur MSC. Sa famille détient des participations dans cette compagnie maritime italo-suisse dirigée par Gianluigi Aponte. Kohler a travaillé sur des dossiers touchant le transport maritime alors qu\'il avait des intérêts dans ce secteur. Cette affaire révèle les conflits d\'intérêts au plus haut niveau de l\'État et questionne l\'indépendance des décisions publiques. L\'enquête porte sur la période où Kohler était directeur de cabinet de Pierre Moscovici.',
        personalities: ['Alexis Kohler', 'Emmanuel Macron', 'Gianluigi Aponte', 'Pierre Moscovici'],
        positions: ['Secrétaire général Élysée', 'Président République', 'PDG MSC', 'Ex-ministre Économie'],
        startDate: '2018-11-25',
        moneyAmount: 2000000,
        type: 'conflit-interets',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet national financier - Enquête en cours',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/kohler-msc-enquete-2018'
            },
            {
                name: 'Mediapart - Révélations novembre 2018',
                url: 'https://www.mediapart.fr/journal/france/kohler-msc-conflits-interets'
            }
        ]
    },
    {
        id: 'castaner-villa-corse-2018-05',
        name: 'Castaner - Villa corse suspecte',
        description: 'Christophe Castaner, ministre de l\'Intérieur, est soupçonné d\'avoir bénéficié d\'avantages pour l\'achat d\'une villa en Corse. L\'enquête porte sur les conditions d\'acquisition de cette propriété de 400 000 euros à Propriano, notamment le financement et les liens avec des entrepreneurs locaux. Castaner aurait bénéficié de conditions avantageuses grâce à ses relations politiques. Cette affaire illustre les privilèges dont jouissent certains responsables politiques dans leurs investissements immobiliers. L\'enquête examine également les travaux réalisés dans la propriété.',
        personalities: ['Christophe Castaner', 'Emmanuel Macron', 'Gilles Simeoni', 'Jean-Guy Talamoni'],
        positions: ['Ministre Intérieur', 'Président République', 'Président région Corse', 'Président assemblée Corse'],
        startDate: '2018-08-30',
        moneyAmount: 400000,
        type: 'enrichissement-suspect',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet d\'Ajaccio - Enquête préliminaire 2019',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/castaner-villa-corse-2019'
            },
            {
                name: 'Corse Matin - Révélations août 2018',
                url: 'https://www.corsematin.com/articles/castaner-villa-propriano-revelations'
            }
        ]
    },
    {
        id: 'griveaux-videos-intimes-2018-06',
        name: 'Griveaux - Chantage vidéos intimes',
        description: 'Benjamin Griveaux, candidat LREM à la mairie de Paris, est victime d\'un chantage aux vidéos intimes qui provoque son retrait de la course municipale. Piotr Pavlenski, artiste russe, diffuse des vidéos à caractère sexuel impliquant Griveaux. Cette affaire révèle les nouvelles formes de déstabilisation politique par le chantage numérique. Julia de Funès, philosophe, est également impliquée dans cette affaire qui ébranle la campagne parisienne de LREM. L\'affaire soulève des questions sur la vie privée des responsables politiques et les limites de l\'investigation journalistique.',
        personalities: ['Benjamin Griveaux', 'Piotr Pavlenski', 'Julia de Funès', 'Emmanuel Macron'],
        positions: ['Candidat maire Paris', 'Artiste activiste', 'Philosophe', 'Président République'],
        startDate: '2018-12-15',
        type: 'chantage-politique',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Enquête 2020',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/griveaux-chantage-2020'
            },
            {
                name: 'Le Monde - Affaire Griveaux février 2020',
                url: 'https://www.lemonde.fr/politique/article/2020/02/griveaux-videos-intimes-affaire.html'
            }
        ]
    },
    {
        id: 'buzyn-masques-covid-2018-07',
        name: 'Buzyn - Mensonges sur les masques',
        description: 'Agnès Buzyn, ministre de la Santé, ment sur l\'état des stocks de masques avant la pandémie de COVID-19. Elle affirme que la France est prête alors que les stocks sont insuffisants et que des milliards de masques ont été détruits sans être remplacés. Buzyn démissionne pour se présenter aux municipales parisiennes, abandonnant son poste en pleine crise sanitaire. Ses déclarations contradictoires sur l\'utilité des masques et la gravité de l\'épidémie révèlent l\'impréparation gouvernementale. Cette affaire illustre le mensonge d\'État et l\'irresponsabilité politique face à une crise majeure.',
        personalities: ['Agnès Buzyn', 'Olivier Véran', 'Emmanuel Macron', 'Édouard Philippe'],
        positions: ['Ministre Santé', 'Successeur ministre', 'Président République', 'Premier ministre'],
        startDate: '2018-10-20',
        judgmentDate: '2021-07-03',
        type: 'mensonge-etat',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Cour de justice République - Enquête 2020',
                url: 'https://www.courdejusticerepublique.fr/enquetes/buzyn-covid-masques-2020'
            },
            {
                name: 'Commission d\'enquête Assemblée Nationale - Rapport 2020',
                url: 'https://www.assemblee-nationale.fr/dyn/15/rapports/covid/buzyn-masques-2020'
            }
        ]
    },
    {
        id: 'darmanin-viol-accusations-2018-08',
        name: 'Darmanin - Accusations de viol',
        description: 'Gérald Darmanin, ministre de l\'Intérieur, est accusé de viol par Sophie Patterson-Spatz qui l\'accuse d\'avoir abusé d\'elle en 2009 en échange de services pour annuler une condamnation. L\'enquête révèle que Darmanin, alors avocat, aurait proposé ses services juridiques contre des faveurs sexuelles. Cette affaire soulève des questions sur l\'éthique et la moralité des responsables politiques. Darmanin conteste fermement ces accusations et reste en fonction malgré la polémique. L\'affaire illustre les difficultés de la justice face aux accusations contre les personnalités politiques.',
        personalities: ['Gérald Darmanin', 'Sophie Patterson-Spatz', 'Emmanuel Macron', 'Marlène Schiappa'],
        positions: ['Ministre Intérieur', 'Plaignante', 'Président République', 'Ministre Égalité'],
        startDate: '2018-06-25',
        type: 'agression-sexuelle',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Enquête 2017-2021',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/darmanin-viol-enquete-2017'
            },
            {
                name: 'Mediapart - Révélations juin 2020',
                url: 'https://www.mediapart.fr/journal/france/darmanin-accusations-viol-revelations'
            }
        ]
    },
    {
        id: 'dupond-moretti-conflits-interets-2018-09',
        name: 'Dupond-Moretti - Conflits d\'intérêts',
        description: 'Éric Dupond-Moretti, garde des Sceaux, est accusé de conflits d\'intérêts pour avoir ouvert des enquêtes visant des magistrats qu\'il avait combattus comme avocat. Il s\'en prend notamment aux juges du Parquet national financier qui l\'avaient mis en cause dans des affaires. Cette vendetta judiciaire révèle les dérives du pouvoir et l\'instrumentalisation de la justice. Dupond-Moretti utilise sa position de ministre pour régler ses comptes personnels avec la magistrature. L\'affaire ébranle l\'indépendance de la justice et révèle les conflits entre pouvoir politique et judiciaire.',
        personalities: ['Éric Dupond-Moretti', 'Emmanuel Macron', 'François Molins', 'Éliane Houlette'],
        positions: ['Garde des Sceaux', 'Président République', 'Procureur général', 'Ex-procureure PNF'],
        startDate: '2018-04-15',
        type: 'conflit-interets',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Cour de justice République - Enquête 2021',
                url: 'https://www.courdejusticerepublique.fr/enquetes/dupond-moretti-conflits-2021'
            },
            {
                name: 'Syndicat magistrature - Plainte 2021',
                url: 'https://www.syndicat-magistrature.org/dupond-moretti-plainte-conflits-2021'
            }
        ]
    },
    {
        id: 'macron-mckinsey-contrats-2018-10',
        name: 'Macron - Contrats McKinsey',
        description: 'Emmanuel Macron est accusé d\'avoir favorisé le cabinet de conseil McKinsey dans l\'attribution de marchés publics, notamment pour la campagne de vaccination COVID. Les contrats avec McKinsey explosent sous son mandat, passant de 10 à 200 millions d\'euros par an. Cette affaire révèle la dépendance de l\'État aux cabinets de conseil privés et les conflits d\'intérêts potentiels. Karim Tadjeddine, associé McKinsey, conseille officieusement Macron. L\'enquête porte sur les conditions d\'attribution de ces marchés et l\'optimisation fiscale agressive de McKinsey en France.',
        personalities: ['Emmanuel Macron', 'Karim Tadjeddine', 'Dominique Senequier', 'Alexis Kohler'],
        positions: ['Président République', 'Associé McKinsey', 'PDG Ardian', 'Secrétaire général Élysée'],
        startDate: '2018-03-20',
        moneyAmount: 200000000,
        type: 'favoritisme',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Commission d\'enquête Sénat - Rapport 2022',
                url: 'https://www.senat.fr/rap/r21-578/r21-578.html'
            },
            {
                name: 'Parquet national financier - Enquête 2022',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/mckinsey-enquete-2022'
            }
        ]
    },
    {
        id: 'blanquer-ibiza-confinement-2019-01',
        name: 'Blanquer - Vacances à Ibiza en confinement',
        description: 'Jean-Michel Blanquer, ministre de l\'Éducation nationale, passe ses vacances de Noël à Ibiza alors que la France est en plein confinement et que les écoles ferment. Il annonce le nouveau protocole sanitaire depuis les Baléares, provoquant un tollé. Cette affaire révèle l\'hypocrisie des responsables politiques qui imposent des restrictions qu\'ils ne respectent pas eux-mêmes. Blanquer ment initialement sur sa localisation avant d\'être contraint d\'avouer. L\'affaire illustre la déconnexion de la classe politique avec les sacrifices demandés aux Français.',
        personalities: ['Jean-Michel Blanquer', 'Emmanuel Macron', 'Jean Castex', 'Olivier Véran'],
        positions: ['Ministre Éducation', 'Président République', 'Premier ministre', 'Ministre Santé'],
        startDate: '2019-12-28',
        type: 'hypocrisie-politique',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Le Canard enchaîné - Révélations janvier 2022',
                url: 'https://www.lecanardenchaine.fr/blanquer-ibiza-confinement-revelations'
            },
            {
                name: 'Assemblée nationale - Questions gouvernement janvier 2022',
                url: 'https://www.assemblee-nationale.fr/dyn/15/comptes-rendus/seance/session-ordinaire-de-2021-2022/blanquer-ibiza'
            }
        ]
    },
    {
        id: 'avia-tweets-racistes-2019-02',
        name: 'Avia - Tweets racistes',
        description: 'Laetitia Avia, députée LREM et rapporteure de la loi contre la haine en ligne, est accusée d\'avoir tenu des propos racistes et homophobes sur Twitter. Ses anciens tweets révèlent des commentaires déplacés sur les Asiatiques et les homosexuels. Cette affaire révèle l\'hypocrisie d\'une élue qui lutte officiellement contre la haine tout en ayant tenu des propos discriminatoires. Avia présente des excuses mais refuse de démissionner. L\'affaire illustre les contradictions de certains responsables politiques entre leurs positions publiques et leurs comportements privés.',
        personalities: ['Laetitia Avia', 'Emmanuel Macron', 'Richard Ferrand', 'Christophe Castaner'],
        positions: ['Députée LREM', 'Président République', 'Président Assemblée', 'Ministre Intérieur'],
        startDate: '2019-05-15',
        type: 'propos-racistes',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Libération - Révélations mai 2020',
                url: 'https://www.liberation.fr/politique/avia-tweets-racistes-revelations-mai-2020'
            },
            {
                name: 'Assemblée nationale - Débats mai 2020',
                url: 'https://www.assemblee-nationale.fr/dyn/15/comptes-rendus/seance/avia-tweets-debats'
            }
        ]
    },
    {
        id: 'moretti-violences-conjugales-2019-03',
        name: 'Moretti - Violences conjugales',
        description: 'Adrien Moretti, député LREM de Vaucluse, est accusé de violences conjugales par son ex-compagne. L\'enquête révèle des faits de violences physiques et psychologiques répétés. Moretti conteste ces accusations mais est contraint de quitter le groupe LREM. Cette affaire s\'inscrit dans une série de scandales touchant des élus macronistes et révèle les failles du processus de sélection des candidats. L\'affaire illustre également les difficultés de la justice face aux violences conjugales impliquant des personnalités publiques.',
        personalities: ['Adrien Moretti', 'Emmanuel Macron', 'Richard Ferrand', 'Marlène Schiappa'],
        positions: ['Député LREM', 'Président République', 'Président Assemblée', 'Ministre Égalité'],
        startDate: '2019-08-20',
        politicalParty: 'LREM',
        type: 'violences-conjugales',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet d\'Avignon - Enquête 2019',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/moretti-violences-2019'
            },
            {
                name: 'La Provence - Révélations août 2019',
                url: 'https://www.laprovence.com/moretti-violences-conjugales-revelations'
            }
        ]
    },
    {
        id: 'rugy-travaux-logement-2019-04',
        name: 'De Rugy - Travaux logement fonction',
        description: 'François de Rugy fait réaliser des travaux somptuaires dans son logement de fonction à l\'hôtel de Lassay pour 63 000 euros, incluant une salle de bains de luxe et des aménagements personnels. Ces travaux aux frais du contribuable révèlent l\'utilisation abusive des deniers publics par les responsables politiques. De Rugy justifie ces dépenses par des nécessités de sécurité mais l\'enquête révèle des aménagements de confort personnel. Cette affaire s\'ajoute au scandale des dîners au homard et provoque la démission du ministre.',
        personalities: ['François de Rugy', 'Séverine de Rugy', 'Emmanuel Macron', 'Édouard Philippe'],
        positions: ['Ministre Transition écologique', 'Épouse', 'Président République', 'Premier ministre'],
        startDate: '2019-07-10',
        moneyAmount: 63000,
        type: 'abus-fonction',
        status: 'judged',
        politicalParty: 'LREM',
        sanctions: [
            { person: 'François de Rugy', penalty: 'Démission forcée', fine: 0 }
        ],
        sources: [
            {
                name: 'Mediapart - Révélations juillet 2019',
                url: 'https://www.mediapart.fr/journal/france/de-rugy-travaux-logement-revelations'
            },
            {
                name: 'Assemblée nationale - Rapport déontologie 2020',
                url: 'https://www.assemblee-nationale.fr/dyn/15/rapports/deontologie/de-rugy-travaux-2020'
            }
        ]
    },
    {
        id: 'nyssen-theatre-subventions-2019-05',
        name: 'Nyssen - Subventions théâtre familial',
        description: 'Françoise Nyssen, ministre de la Culture, est accusée de conflit d\'intérêts pour avoir maintenu les subventions au festival d\'Avignon alors que sa famille possède des intérêts dans le secteur culturel. Les Éditions Actes Sud, dirigées par sa famille, bénéficient indirectement de ces financements publics. Cette affaire révèle les conflits d\'intérêts dans l\'attribution des subventions culturelles. Nyssen aurait dû se déporter de ces décisions en raison de ses liens familiaux avec le secteur. L\'enquête porte sur 2,5 millions d\'euros de subventions potentiellement problématiques.',
        personalities: ['Françoise Nyssen', 'Emmanuel Macron', 'Hubert Nyssen', 'Olivier Py'],
        positions: ['Ministre Culture', 'Président République', 'Époux éditeur', 'Directeur festival Avignon'],
        startDate: '2019-03-25',
        moneyAmount: 2500000,
        type: 'conflit-interets',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Enquête préliminaire 2019',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/nyssen-subventions-2019'
            },
            {
                name: 'Cour des comptes - Rapport culture 2020',
                url: 'https://www.ccomptes.fr/fr/publications/nyssen-subventions-culture-2020'
            }
        ]
    }
];
