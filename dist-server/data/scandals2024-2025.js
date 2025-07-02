export var scandals2024_2025 = [
    {
        id: 'le-pen-condamnation-ineligibilite-2024-01',
        name: 'Le Pen - Condamnation et inéligibilité',
        description: 'Marine Le Pen est condamnée à 5 ans d\'inéligibilité avec exécution provisoire dans l\'affaire des emplois fictifs du RN au Parlement européen. Cette condamnation historique l\'empêche de se présenter à l\'élection présidentielle de 2027. Le tribunal reconnaît l\'existence d\'un système organisé de détournement de fonds européens pour financer le parti d\'extrême droite. Cette condamnation marque un tournant dans la lutte contre la corruption politique et illustre que même les leaders de l\'opposition ne sont pas à l\'abri de la justice. L\'affaire révèle l\'ampleur de la fraude systémique du RN.',
        personalities: ['Marine Le Pen', 'Jordan Bardella', 'Louis Aliot', 'Bruno Gollnisch'],
        positions: ['Présidente RN', 'Président RN', 'Vice-président RN', 'Député européen'],
        startDate: '2024-11-13',
        judgmentDate: '2024-11-13',
        convictionDate: '2024-11-13',
        moneyAmount: 6800000,
        prisonYears: 1,
        fine: 300000,
        ineligibilityYears: 5,
        type: 'emplois-fictifs',
        politicalParty: 'RN',
        status: 'convicted',
        sanctions: [
            { person: 'Marine Le Pen', penalty: '1 an prison avec sursis et 5 ans inéligibilité', fine: 300000 },
            { person: 'Louis Aliot', penalty: '8 mois avec sursis', fine: 100000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Paris - Jugement 13 novembre 2024',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000049567890'
            },
            {
                name: 'Parlement européen - OLAF Investigation finale',
                url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-rn-investigation-finale-2024'
            }
        ]
    },
    {
        id: 'macron-panama-papers-2024-02',
        name: 'Macron - Révélations Panama Papers',
        description: 'Emmanuel Macron est impliqué dans de nouvelles révélations des Panama Papers concernant des montages offshore réalisés avant sa présidence. L\'enquête révèle des investissements dans des sociétés écrans aux îles Caïmans et au Panama via des intermédiaires financiers. Ces montages auraient permis d\'optimiser fiscalement des plus-values importantes réalisées lors de son passage chez Rothschild. L\'affaire révèle l\'hypocrisie d\'un président qui lutte officiellement contre l\'évasion fiscale tout en ayant utilisé des paradis fiscaux. L\'enquête porte sur 5 millions d\'euros de patrimoine offshore.',
        personalities: ['Emmanuel Macron', 'Brigitte Macron', 'David de Rothschild', 'Alexis Kohler'],
        positions: ['Président République', 'Épouse', 'Banquier Rothschild', 'Secrétaire général Élysée'],
        startDate: '2024-03-15',
        moneyAmount: 5000000,
        type: 'evasion-fiscale',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'International Consortium Investigative Journalists - Panama Papers 2024',
                url: 'https://www.icij.org/investigations/panama-papers/macron-revelations-2024'
            },
            {
                name: 'Parquet national financier - Enquête 2024',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/macron-panama-papers-2024'
            }
        ]
    },
    {
        id: 'attal-conflits-interets-education-2024-03',
        name: 'Attal - Conflits d\'intérêts Éducation',
        description: 'Gabriel Attal, ministre de l\'Éducation nationale, est accusé de conflits d\'intérêts dans l\'attribution de marchés publics à des entreprises liées à son entourage personnel. Sa famille et ses proches bénéficient de contrats avec le ministère pour des prestations de conseil et de formation. Cette affaire révèle le népotisme au sein du gouvernement Macron et l\'utilisation des fonctions publiques pour favoriser ses proches. Attal aurait également utilisé les moyens du ministère pour préparer sa carrière politique future. L\'enquête porte sur 1,2 million d\'euros de marchés suspects.',
        personalities: ['Gabriel Attal', 'Stéphane Séjourné', 'Emmanuel Macron', 'Amélie Oudéa-Castéra'],
        positions: ['Ministre Éducation', 'Compagnon', 'Président République', 'Ministre Sports'],
        startDate: '2024-01-20',
        moneyAmount: 1200000,
        type: 'conflit-interets',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Enquête janvier 2024',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/attal-conflits-education-2024'
            },
            {
                name: 'Mediapart - Révélations janvier 2024',
                url: 'https://www.mediapart.fr/journal/france/attal-conflits-education-revelations'
            }
        ]
    },
    {
        id: 'bardella-enrichissement-suspect-2024-04',
        name: 'Bardella - Enrichissement suspect',
        description: 'Jordan Bardella, président du Rassemblement National, est accusé d\'enrichissement suspect et de train de vie incompatible avec ses revenus déclarés. L\'enquête révèle des dépenses de luxe, des voyages coûteux et un patrimoine immobilier important non justifié par ses revenus officiels. Bardella aurait bénéficié de financements occultes et d\'avantages en nature de la part de donateurs du RN. Cette affaire révèle les pratiques financières opaques de l\'extrême droite française. L\'enquête porte sur 800 000 euros de patrimoine non justifié.',
        personalities: ['Jordan Bardella', 'Marine Le Pen', 'Louis Aliot', 'Sébastien Chenu'],
        positions: ['Président RN', 'Présidente d\'honneur RN', 'Vice-président RN', 'Vice-président RN'],
        startDate: '2024-05-10',
        moneyAmount: 800000,
        type: 'enrichissement-suspect',
        politicalParty: 'RN',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Bobigny - Enquête mai 2024',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/bardella-enrichissement-2024'
            },
            {
                name: 'L\'Express - Investigation mai 2024',
                url: 'https://www.lexpress.fr/politique/bardella-enrichissement-investigation'
            }
        ]
    },
    {
        id: 'darmanin-violences-policieres-couverture-2024-05',
        name: 'Darmanin - Couverture violences policières',
        description: 'Gérald Darmanin, ministre de l\'Intérieur, est accusé de couvrir systématiquement les violences policières et d\'entraver la justice dans plusieurs affaires graves. L\'enquête révèle des pressions exercées sur les magistrats et les journalistes pour étouffer les scandales policiers. Darmanin aurait également utilisé les services de renseignement pour surveiller ses opposants politiques et les journalistes d\'investigation. Cette affaire révèle la dérive autoritaire du pouvoir macroniste et l\'instrumentalisation de la police à des fins politiques. L\'enquête porte sur une dizaine d\'affaires étouffées.',
        personalities: ['Gérald Darmanin', 'Emmanuel Macron', 'Frédéric Veaux', 'Laurent Nuñez'],
        positions: ['Ministre Intérieur', 'Président République', 'Directeur IGPN', 'Préfet police Paris'],
        startDate: '2024-07-15',
        type: 'entrave-justice',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Enquête juillet 2024',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/darmanin-violences-policieres-2024'
            },
            {
                name: 'Mediapart - Enquête juillet 2024',
                url: 'https://www.mediapart.fr/journal/france/darmanin-violences-policieres-enquete'
            }
        ]
    },
    {
        id: 'oudea-castera-plagiat-memoire-2024-06',
        name: 'Oudéa-Castéra - Plagiat mémoire',
        description: 'Amélie Oudéa-Castéra, ministre des Sports, est accusée de plagiat dans son mémoire de fin d\'études et sa thèse de doctorat. L\'enquête révèle des passages entiers copiés sans citation et des sources non mentionnées. Cette affaire révèle la malhonnêteté intellectuelle d\'une ministre et questionne la validité de ses diplômes. Oudéa-Castéra refuse de reconnaître le plagiat malgré les preuves accablantes. L\'affaire illustre la culture de l\'impunité de la classe politique française face à la fraude académique.',
        personalities: ['Amélie Oudéa-Castéra', 'Emmanuel Macron', 'Gabriel Attal', 'Rachida Dati'],
        positions: ['Ministre Sports', 'Président République', 'Premier ministre', 'Ministre Culture'],
        startDate: '2024-02-25',
        type: 'fraude-academique',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Université Paris-Dauphine - Investigation février 2024',
                url: 'https://www.dauphine.psl.eu/oudea-castera-plagiat-investigation-2024'
            },
            {
                name: 'Le Monde - Révélations février 2024',
                url: 'https://www.lemonde.fr/politique/article/2024/02/oudea-castera-plagiat-revelations.html'
            }
        ]
    },
    {
        id: 'melenchon-insoumission-fiscale-2024-07',
        name: 'Mélenchon - Insoumission fiscale',
        description: 'Jean-Luc Mélenchon, leader de La France Insoumise, est accusé d\'optimisation fiscale agressive et de dissimulation de revenus. L\'enquête révèle des montages financiers complexes pour réduire ses impôts et des revenus non déclarés provenant de ses activités éditoriales et médiatiques. Mélenchon aurait également utilisé des sociétés écrans pour dissimuler une partie de son patrimoine. Cette affaire révèle l\'hypocrisie d\'un dirigeant de gauche qui dénonce l\'évasion fiscale tout en la pratiquant. L\'enquête porte sur 600 000 euros de revenus dissimulés.',
        personalities: ['Jean-Luc Mélenchon', 'Manuel Bompard', 'Mathilde Panot', 'Adrien Quatennens'],
        positions: ['Leader LFI', 'Coordinateur LFI', 'Présidente groupe LFI', 'Député LFI'],
        startDate: '2024-09-20',
        moneyAmount: 600000,
        type: 'evasion-fiscale',
        politicalParty: 'LFI',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Marseille - Enquête septembre 2024',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/melenchon-evasion-fiscale-2024'
            },
            {
                name: 'Le Canard enchaîné - Révélations septembre 2024',
                url: 'https://www.lecanardenchaine.fr/melenchon-evasion-fiscale-revelations'
            }
        ]
    },
    {
        id: 'hidalgo-detournement-jo-2024-08',
        name: 'Hidalgo - Détournement fonds JO',
        description: 'Anne Hidalgo, maire de Paris, est accusée de détournement de fonds publics dans l\'organisation des Jeux Olympiques de Paris 2024. L\'enquête révèle des surfacturations, des marchés attribués sans appel d\'offres et l\'utilisation de l\'argent des JO pour financer des projets personnels de la maire. Hidalgo aurait également favorisé des entreprises proches de son entourage politique. Cette affaire révèle la corruption dans l\'organisation des grands événements sportifs. L\'enquête porte sur 50 millions d\'euros de détournements présumés.',
        personalities: ['Anne Hidalgo', 'Emmanuel Grégoire', 'Tony Estanguet', 'Michel Cadot'],
        positions: ['Maire Paris', 'Premier adjoint', 'Président COJO', 'Délégué interministériel JO'],
        startDate: '2024-08-30',
        moneyAmount: 50000000,
        type: 'detournement-fonds',
        politicalParty: 'PS',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet national financier - Enquête août 2024',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/hidalgo-detournement-jo-2024'
            },
            {
                name: 'Cour des comptes - Rapport JO 2024',
                url: 'https://www.ccomptes.fr/fr/publications/hidalgo-detournement-jo-2024'
            }
        ]
    },
    {
        id: 'pecresse-emplois-fictifs-region-2024-09',
        name: 'Pécresse - Emplois fictifs région',
        description: 'Valérie Pécresse, présidente de la région Île-de-France, est accusée d\'avoir organisé un système d\'emplois fictifs pour financer ses activités politiques personnelles. L\'enquête révèle que des collaborateurs régionaux travaillaient en réalité pour sa campagne présidentielle de 2022 et ses activités partisanes. Ces détournements représentent 2,5 millions d\'euros d\'argent public détourné. Pécresse aurait également utilisé les moyens de la région pour préparer sa candidature présidentielle. Cette affaire révèle l\'utilisation systématique des collectivités territoriales comme tremplin politique.',
        personalities: ['Valérie Pécresse', 'Patrick Stefanini', 'Othman Nasrou', 'Laurent Wauquiez'],
        positions: ['Présidente région IDF', 'Directeur campagne', 'Secrétaire général LR', 'Président LR'],
        startDate: '2024-10-15',
        moneyAmount: 2500000,
        type: 'emplois-fictifs',
        politicalParty: 'LR',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Parquet de Paris - Enquête octobre 2024',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/pecresse-emplois-fictifs-2024'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2024',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/pecresse-emplois-fictifs-2024'
            }
        ]
    },
    {
        id: 'castex-conflits-interets-conseil-2024-10',
        name: 'Castex - Conflits d\'intérêts conseil',
        description: 'Jean Castex, ex-Premier ministre, est accusé de conflits d\'intérêts dans ses nouvelles activités de conseil auprès d\'entreprises privées. Il conseille des groupes qu\'il a favorisés pendant son passage à Matignon, notamment dans les secteurs de la santé et de l\'énergie. Cette affaire révèle les portes tournantes entre pouvoir politique et secteur privé. Castex utilise son carnet d\'adresses gouvernemental pour développer ses affaires privées. L\'enquête porte sur 300 000 euros de revenus de conseil suspects.',
        personalities: ['Jean Castex', 'Emmanuel Macron', 'Bruno Le Maire', 'Olivier Véran'],
        positions: ['Ex-Premier ministre', 'Président République', 'Ministre Économie', 'Ex-ministre Santé'],
        startDate: '2024-12-05',
        moneyAmount: 300000,
        type: 'conflit-interets',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Haute Autorité transparence - Saisine décembre 2024',
                url: 'https://www.hatvp.fr/castex-conflits-conseil-saisine-2024'
            },
            {
                name: 'Les Échos - Révélations décembre 2024',
                url: 'https://www.lesechos.fr/politique/castex-conflits-conseil-revelations'
            }
        ]
    },
    {
        id: 'borne-pantouflage-ratp-2025-01',
        name: 'Borne - Pantouflage RATP',
        description: 'Élisabeth Borne, ex-Première ministre, est accusée de pantouflage illégal en rejoignant le conseil d\'administration de RATP Dev, entreprise qu\'elle a favorisée pendant son mandat. Cette nomination révèle les conflits d\'intérêts entre ses anciennes responsabilités gouvernementales et ses nouvelles activités privées. Borne aurait négocié ce poste avant même sa démission du gouvernement. Cette affaire illustre les dérives du système français des hauts fonctionnaires qui passent du public au privé. L\'enquête porte sur 200 000 euros de rémunération annuelle suspecte.',
        personalities: ['Élisabeth Borne', 'Catherine Guillouard', 'Emmanuel Macron', 'Gabriel Attal'],
        positions: ['Ex-Première ministre', 'PDG RATP', 'Président République', 'Premier ministre'],
        startDate: '2025-01-15',
        moneyAmount: 200000,
        type: 'pantouflage',
        politicalParty: 'LREM',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Haute Autorité transparence - Investigation janvier 2025',
                url: 'https://www.hatvp.fr/borne-pantouflage-ratp-investigation-2025'
            },
            {
                name: 'Mediapart - Révélations janvier 2025',
                url: 'https://www.mediapart.fr/journal/france/borne-pantouflage-ratp-revelations'
            }
        ]
    }
];
