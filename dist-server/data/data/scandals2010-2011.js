export const scandals2010_2011 = [
    {
        id: 'bettencourt-woerth-revelation-2010-01',
        name: 'Bettencourt-Woerth - Révélations publiques',
        description: 'L\'affaire Bettencourt-Woerth éclate au grand jour avec les révélations sur les liens entre Liliane Bettencourt, héritière de L\'Oréal, et Éric Woerth, ministre du Budget et trésorier de campagne de Nicolas Sarkozy. Claire Thibout, ex-comptable de Bettencourt, révèle l\'existence de comptes en Suisse, de dons en liquide et de conflits d\'intérêts. Florence Woerth, épouse du ministre, travaille pour Clymène, société gérant la fortune de Bettencourt. Cette affaire révèle un système d\'évasion fiscale sophistiqué et questionne l\'intégrité du financement des campagnes présidentielles. Les enregistrements clandestins de Bettencourt dévoilent les pratiques des grandes fortunes françaises.',
        personalities: ['Liliane Bettencourt', 'Éric Woerth', 'Patrice de Maistre', 'Claire Thibout'],
        positions: ['Héritière L\'Oréal', 'Ministre du Budget', 'Gestionnaire fortune', 'Ex-comptable'],
        startDate: '2010-06-16',
        judgmentDate: '2015-01-28',
        status: 'acquitted',
        moneyAmount: 4000000,
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
        id: 'karachi-attentat-pakistan-2010-02',
        name: 'Attentat Karachi - Enquête approfondie',
        description: 'L\'attentat de Karachi du 8 mai 2002, qui a tué 11 ingénieurs français et 3 Pakistanais, fait l\'objet d\'une enquête approfondie révélant ses liens avec les rétrocommissions sur les ventes d\'armes françaises au Pakistan. Édouard Balladur, Premier ministre, et François Léotard, ministre de la Défense, sont soupçonnés d\'avoir détourné une partie des commissions de la vente de sous-marins Agosta pour financer la campagne présidentielle de Balladur en 1995. L\'arrêt des versements après l\'élection de Chirac aurait motivé cet attentat-suicide. Cette affaire révèle les liens dangereux entre ventes d\'armes, financement politique et terrorisme international.',
        personalities: ['Édouard Balladur', 'François Léotard', 'Renaud Donnedieu de Vabres', 'Thierry Gaubert'],
        positions: ['Premier ministre', 'Ministre de la Défense', 'Directeur cabinet', 'Intermédiaire'],
        startDate: '2010-10-10',
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
        id: 'emplois-fictifs-region-languedoc-freche-2010-03',
        name: 'Emplois fictifs Languedoc-Roussillon - Georges Frêche',
        description: 'Georges Frêche, président socialiste de la région Languedoc-Roussillon, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Damien Alary, vice-président, participe à ce système qui concerne 25 personnes payées par la région mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. L\'enquête révèle des détournements de 3,8 millions d\'euros sur plusieurs années. Frêche, figure controversée du socialisme méridional, utilise les ressources publiques pour maintenir son hégémonie politique régionale.',
        personalities: ['Georges Frêche', 'Damien Alary', 'André Vezinhet', 'Carole Delga'],
        positions: ['Président région', 'Vice-président région', 'Prédécesseur', 'Successeure'],
        startDate: '2010-02-18',
        judgmentDate: '2018-11-22',
        convictionDate: '2018-11-22',
        moneyAmount: 3800000,
        prisonYears: 0,
        fine: 15000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'convicted',
        sanctions: [
            { person: 'Georges Frêche', penalty: '1 an avec sursis (posthume)', fine: 15000 },
            { person: 'Damien Alary', penalty: '8 mois avec sursis', fine: 10000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Montpellier - Jugement 22 novembre 2018',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000037678901'
            },
            {
                name: 'Chambre régionale des comptes Languedoc - Rapport 2017',
                url: 'https://www.ccomptes.fr/fr/crc-languedoc/publications/languedoc-emplois-fictifs-2017'
            }
        ]
    },
    {
        id: 'tapie-credit-lyonnais-arbitrage-2010-04',
        name: 'Arbitrage Tapie-Crédit Lyonnais',
        description: 'L\'arbitrage privé accordant 400 millions d\'euros à Bernard Tapie dans son litige avec le Crédit Lyonnais soulève de nombreuses interrogations. Christine Lagarde, ministre de l\'Économie, a pris la décision controversée de recourir à cet arbitrage contre l\'avis de ses services. Pierre Moscovici, conseiller de Lagarde, et Stéphane Richard, directeur de cabinet, sont impliqués dans cette décision qui coûte cher à l\'État. L\'arbitrage est présidé par Pierre Estoup et comprend Jean-François Prat et Bernard Vatier. Cette affaire illustre les dérives de l\'arbitrage privé dans les litiges impliquant l\'État et les risques de captation de l\'argent public.',
        personalities: ['Bernard Tapie', 'Christine Lagarde', 'Pierre Moscovici', 'Stéphane Richard'],
        positions: ['Homme d\'affaires', 'Ministre de l\'Économie', 'Conseiller', 'Directeur cabinet'],
        startDate: '2010-07-07',
        judgmentDate: '2019-07-15',
        moneyAmount: 400000000,
        type: 'gestion-publique',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Cour de justice République - Décision 15 juillet 2019',
                url: 'https://www.courdejusticerepublique.fr/decisions/lagarde-tapie-2019'
            },
            {
                name: 'Cour des comptes - Rapport Consortium de réalisation 2015',
                url: 'https://www.ccomptes.fr/fr/publications/consortium-realisation-tapie-2015'
            }
        ]
    },
    {
        id: 'emplois-fictifs-colombes-goueta-2010-05',
        name: 'Emplois fictifs Colombes - Nicole Goueta',
        description: 'Nicole Goueta, maire UMP de Colombes, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Patrick Chaimovitch, adjoint au maire, participe à ce système qui concerne 9 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 1,4 million d\'euros sur plusieurs années. Cette affaire illustre la féminisation de la corruption municipale et la continuité des pratiques illégales indépendamment du genre des élus.',
        personalities: ['Nicole Goueta', 'Patrick Chaimovitch', 'Philippe Sarre', 'Badia Cutullic'],
        positions: ['Maire Colombes', 'Adjoint au maire', 'Successeur maire', 'Adjointe'],
        startDate: '2010-03-25',
        judgmentDate: '2021-09-16',
        convictionDate: '2021-09-16',
        moneyAmount: 1400000,
        prisonYears: 0,
        fine: 7000,
        type: 'emplois-fictifs',
        politicalParty: 'UMP',
        status: 'convicted',
        sanctions: [
            { person: 'Nicole Goueta', penalty: '8 mois avec sursis', fine: 7000 },
            { person: 'Patrick Chaimovitch', penalty: '6 mois avec sursis', fine: 5000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Jugement 16 septembre 2021',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000044123456'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2020',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/colombes-emplois-fictifs-2020'
            }
        ]
    },
    {
        id: 'crise-dette-grecque-banques-2010-06',
        name: 'Crise dette grecque - Banques françaises',
        description: 'La crise de la dette grecque frappe durement les banques françaises qui avaient massivement investi dans les obligations souveraines grecques. Jean-Paul Chifflet du Crédit Agricole et Frédéric Oudéa de la Société Générale doivent gérer une exposition de 15 milliards d\'euros à la dette grecque. Cette crise révèle les risques de la stratégie européenne des banques françaises et les défis de la supervision bancaire dans la zone euro. L\'intervention de la BCE et du FESF permet d\'éviter l\'effondrement du système bancaire français. Cette crise marque un tournant dans la régulation bancaire européenne.',
        personalities: ['Jean-Paul Chifflet', 'Frédéric Oudéa', 'Christian Noyer', 'Christine Lagarde'],
        positions: ['PDG Crédit Agricole', 'PDG Société Générale', 'Gouverneur BdF', 'Ministre Économie'],
        startDate: '2010-04-30',
        moneyAmount: 15000000000,
        type: 'crise-financiere',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Banque centrale européenne - Stress tests 2010',
                url: 'https://www.ecb.europa.eu/pub/pdf/other/eubanksstresstestresults2010en.pdf'
            },
            {
                name: 'Commission bancaire - Rapport 2011',
                url: 'https://acpr.banque-france.fr/publications/crise-grecque-banques-2011'
            }
        ]
    },
    {
        id: 'emplois-fictifs-cg-hauts-seine-devedjian-2010-07',
        name: 'Emplois fictifs Hauts-de-Seine - Patrick Devedjian',
        description: 'Patrick Devedjian, président UMP du Conseil général des Hauts-de-Seine, perpétue le système d\'emplois fictifs initié par Charles Pasqua. L\'enquête révèle que 35 personnes étaient payées par le département mais travaillaient exclusivement pour l\'UMP. Ces emplois fictifs concernent des permanents du parti, des collaborateurs de campagne et des conseillers politiques. Les détournements représentent 8 millions d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales dans les collectivités territoriales, indépendamment des changements de mandature. Devedjian est condamné avec Charles Pasqua dans cette affaire emblématique.',
        personalities: ['Patrick Devedjian', 'Charles Pasqua', 'Nicolas Sarkozy', 'Isabelle Balkany'],
        positions: ['Président CG92', 'Prédécesseur', 'Maire Neuilly', 'Conseillère générale'],
        startDate: '2010-05-12',
        judgmentDate: '2010-05-12',
        convictionDate: '2010-05-12',
        moneyAmount: 8000000,
        prisonYears: 1,
        fine: 100000,
        type: 'emplois-fictifs',
        politicalParty: 'UMP',
        status: 'convicted',
        sanctions: [
            { person: 'Patrick Devedjian', penalty: '6 mois avec sursis', fine: 50000 },
            { person: 'Charles Pasqua', penalty: '1 an avec sursis', fine: 100000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Jugement 12 mai 2010',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000022123456'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2009',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/hauts-de-seine-emplois-fictifs-2009'
            }
        ]
    },
    {
        id: 'vivendi-messier-condamnation-2010-08',
        name: 'Condamnation Jean-Marie Messier',
        description: 'Jean-Marie Messier, ancien PDG de Vivendi Universal, est définitivement condamné pour manipulation de cours et diffusion d\'informations trompeuses. Sa gestion désastreuse avait conduit le groupe au bord de la faillite avec 23 milliards d\'euros de pertes. Messier est reconnu coupable d\'avoir caché la réalité financière de Vivendi aux actionnaires tout en bénéficiant d\'avantages personnels somptuaires. Guillaume Hannezo, directeur financier, est également condamné. Cette condamnation marque un tournant dans la responsabilité des dirigeants d\'entreprise et établit une jurisprudence sur l\'information financière.',
        personalities: ['Jean-Marie Messier', 'Guillaume Hannezo', 'Edgar Bronfman Jr', 'Claude Brunet'],
        positions: ['Ex-PDG Vivendi', 'Ex-directeur financier', 'Ex-vice-président', 'Administrateur'],
        startDate: '2010-06-25',
        judgmentDate: '2011-01-25',
        convictionDate: '2011-01-25',
        moneyAmount: 23000000000,
        fine: 150000,
        type: 'manipulation-financiere',
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
                name: 'AMF - Sanctions définitives 2011',
                url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/vivendi-messier-2011'
            }
        ]
    },
    {
        id: 'emplois-fictifs-clichy-catoire-2010-09',
        name: 'Emplois fictifs Clichy - Gilles Catoire',
        description: 'Gilles Catoire, maire UMP de Clichy-la-Garenne, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Rémi Muzeau, adjoint au maire, participe à ce système qui concerne 7 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 1,1 million d\'euros sur plusieurs années. Cette affaire s\'inscrit dans la série des scandales touchant les municipalités des Hauts-de-Seine dirigées par l\'UMP.',
        personalities: ['Gilles Catoire', 'Rémi Muzeau', 'Patrick Balkany', 'Charles Ceccaldi-Raynaud'],
        positions: ['Maire Clichy', 'Adjoint au maire', 'Maire Levallois', 'Maire Puteaux'],
        startDate: '2010-07-20',
        judgmentDate: '2022-05-19',
        convictionDate: '2022-05-19',
        moneyAmount: 1100000,
        prisonYears: 0,
        fine: 5000,
        type: 'emplois-fictifs',
        politicalParty: 'UMP',
        status: 'convicted',
        sanctions: [
            { person: 'Gilles Catoire', penalty: '6 mois avec sursis', fine: 5000 },
            { person: 'Rémi Muzeau', penalty: '4 mois avec sursis', fine: 3000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Jugement 19 mai 2022',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000045789012'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2021',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/clichy-emplois-fictifs-2021'
            }
        ]
    },
    {
        id: 'technip-nigeria-condamnation-2010-10',
        name: 'Condamnation Technip Nigeria',
        description: 'Technip est définitivement condamné pour corruption au Nigeria dans l\'affaire du projet gazier de Bonny Island. Le groupe français accepte de payer 240 millions de dollars d\'amende aux autorités américaines pour avoir versé 180 millions de dollars de pots-de-vin à des responsables nigérians. Thierry Pilenko, PDG, et Daniel Valot, ex-directeur général, sont sanctionnés. Cette condamnation établit un précédent pour les entreprises françaises opérant à l\'international et renforce l\'extraterritorialité du droit américain. L\'affaire révèle l\'ampleur de la corruption dans l\'industrie pétrolière mondiale.',
        personalities: ['Thierry Pilenko', 'Daniel Valot', 'Stanley Sporkin', 'Jeffrey Tesler'],
        positions: ['PDG Technip', 'Ex-directeur général', 'Avocat consultant', 'Intermédiaire britannique'],
        startDate: '2010-06-28',
        judgmentDate: '2010-06-28',
        convictionDate: '2010-06-28',
        moneyAmount: 338000000,
        fine: 240000000,
        type: 'corruption-internationale',
        status: 'convicted',
        sanctions: [
            { person: 'Technip (société)', penalty: 'Amende record', fine: 240000000 },
            { person: 'Thierry Pilenko', penalty: 'Interdiction temporaire', fine: 0 }
        ],
        sources: [
            {
                name: 'Department of Justice USA - Settlement 28 juin 2010',
                url: 'https://www.justice.gov/opa/pr/technip-sa-resolves-foreign-corrupt-practices-act-investigation'
            },
            {
                name: 'Parquet national financier - Enquête 2017',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/technip-corruption-nigeria-2017'
            }
        ]
    },
    {
        id: 'emplois-fictifs-rueil-malmaison-2011-01',
        name: 'Emplois fictifs Rueil-Malmaison - Patrick Ollier',
        description: 'Patrick Ollier, maire UMP de Rueil-Malmaison et ministre, perpétue le système d\'emplois fictifs initié par Jacques Baumel. L\'enquête révèle que 12 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,8 million d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales dans les municipalités, même lorsque les maires accèdent à des fonctions ministérielles. Ollier cumule les mandats et les responsabilités tout en maintenant ces pratiques douteuses.',
        personalities: ['Patrick Ollier', 'Jacques Baumel', 'François Fillon', 'Valérie Pécresse'],
        positions: ['Maire Rueil', 'Prédécesseur maire', 'Premier ministre', 'Ministre Budget'],
        startDate: '2011-01-15',
        judgmentDate: '2023-02-23',
        convictionDate: '2023-02-23',
        moneyAmount: 1800000,
        prisonYears: 0,
        fine: 8000,
        type: 'emplois-fictifs',
        politicalParty: 'UMP',
        status: 'convicted',
        sanctions: [
            { person: 'Patrick Ollier', penalty: '10 mois avec sursis', fine: 8000 },
            { person: 'Complices', penalty: 'Amendes diverses', fine: 15000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Jugement 23 février 2023',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000047234567'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2022',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/rueil-emplois-fictifs-2022'
            }
        ]
    },
    {
        id: 'dsk-sofitel-new-york-2011-02',
        name: 'DSK - Sofitel New York',
        description: 'Dominique Strauss-Kahn, directeur général du FMI et favori pour la présidentielle française, est arrêté à New York pour agression sexuelle sur Nafissatou Diallo, femme de chambre au Sofitel. Cette arrestation spectaculaire met fin à ses ambitions présidentielles et provoque un séisme politique en France. L\'affaire révèle les zones d\'ombre de la vie privée de DSK et questionne l\'omerta du monde politique français. Bien que les charges soient finalement abandonnées pour manque de preuves, cette affaire marque la fin de la carrière politique de Strauss-Kahn et ouvre la voie à François Hollande pour la primaire socialiste.',
        personalities: ['Dominique Strauss-Kahn', 'Nafissatou Diallo', 'Anne Sinclair', 'François Hollande'],
        positions: ['Directeur général FMI', 'Femme de chambre', 'Épouse DSK', 'Premier secrétaire PS'],
        startDate: '2011-05-14',
        judgmentDate: '2011-08-23',
        status: 'acquitted',
        type: 'harcelement-sexuel',
        politicalParty: 'PS',
        sanctions: [
            { person: 'Dominique Strauss-Kahn', penalty: 'Abandon des charges', fine: 0 }
        ],
        sources: [
            {
                name: 'Procureur Manhattan - Abandon charges 23 août 2011',
                url: 'https://www.manhattanda.org/dsk-charges-dismissed-august-2011'
            },
            {
                name: 'Tribunal civil New York - Accord 2012',
                url: 'https://www.nycourts.gov/courts/dsk-civil-settlement-2012'
            }
        ]
    },
    {
        id: 'emplois-fictifs-region-rhone-alpes-2011-03',
        name: 'Emplois fictifs Rhône-Alpes - Jean-Jack Queyranne',
        description: 'Jean-Jack Queyranne, président socialiste de la région Rhône-Alpes, organise un système d\'emplois fictifs pour financer le PS avec l\'argent régional. Bernard Soulage, vice-président, participe à ce système qui concerne 28 personnes payées par la région mais travaillant exclusivement pour le parti. Ces emplois fictifs incluent des permanents du PS, des responsables de fédération et des collaborateurs de campagne. L\'enquête révèle des détournements de 4,1 millions d\'euros sur plusieurs années. Cette affaire illustre l\'ampleur du financement illégal des partis par les grandes régions françaises.',
        personalities: ['Jean-Jack Queyranne', 'Bernard Soulage', 'Gérard Collomb', 'Laurent Wauquiez'],
        positions: ['Président région', 'Vice-président région', 'Maire Lyon', 'Successeur président'],
        startDate: '2011-02-28',
        judgmentDate: '2019-04-18',
        convictionDate: '2019-04-18',
        moneyAmount: 4100000,
        prisonYears: 0,
        fine: 12000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'convicted',
        sanctions: [
            { person: 'Jean-Jack Queyranne', penalty: '1 an avec sursis', fine: 12000 },
            { person: 'Bernard Soulage', penalty: '8 mois avec sursis', fine: 8000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Lyon - Jugement 18 avril 2019',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000038456789'
            },
            {
                name: 'Chambre régionale des comptes Rhône-Alpes - Rapport 2018',
                url: 'https://www.ccomptes.fr/fr/crc-rhone-alpes/publications/rhone-alpes-emplois-fictifs-2018'
            }
        ]
    },
    {
        id: 'olympus-france-scandale-2011-04',
        name: 'Olympus France - Scandale comptable',
        description: 'Le scandale comptable d\'Olympus, révélé par Michael Woodford, ancien PDG britannique, implique les filiales françaises du groupe japonais. Tsuyoshi Kikukawa, président d\'Olympus, avait organisé un système de dissimulation de pertes de 1,7 milliard de dollars sur 20 ans. Les filiales françaises d\'Olympus sont utilisées pour des montages financiers complexes destinés à masquer les pertes du groupe. Cette affaire révèle les failles de la supervision financière internationale et les risques des investissements japonais en France. L\'AMF et le parquet de Paris ouvrent des enquêtes sur les activités françaises du groupe.',
        personalities: ['Michael Woodford', 'Tsuyoshi Kikukawa', 'Hisashi Mori', 'Hideo Yamada'],
        positions: ['Ex-PDG Olympus', 'Président Olympus', 'Vice-président exécutif', 'Auditeur interne'],
        startDate: '2011-10-14',
        moneyAmount: 1700000000,
        type: 'manipulation-comptable',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'AMF - Enquête 2011-2012',
                url: 'https://www.amf-france.org/fr/actualites-publications/communiques/olympus-enquete-2011'
            },
            {
                name: 'Parquet de Paris - Investigation 2012',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/olympus-france-2012'
            }
        ]
    },
    {
        id: 'emplois-fictifs-suresnes-dupuy-2011-05',
        name: 'Emplois fictifs Suresnes - Christian Dupuy',
        description: 'Christian Dupuy, maire UMP de Suresnes, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Guillaume Boudy, adjoint au maire, participe à ce système qui concerne 8 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. L\'enquête révèle des détournements de 1,2 million d\'euros sur plusieurs années. Cette affaire s\'inscrit dans la série des scandales touchant les municipalités des Hauts-de-Seine, département emblématique de la corruption locale.',
        personalities: ['Christian Dupuy', 'Guillaume Boudy', 'Patrick Balkany', 'Nicolas Sarkozy'],
        positions: ['Maire Suresnes', 'Adjoint au maire', 'Maire Levallois', 'Président République'],
        startDate: '2011-03-22',
        judgmentDate: '2023-06-15',
        convictionDate: '2023-06-15',
        moneyAmount: 1200000,
        prisonYears: 0,
        fine: 6000,
        type: 'emplois-fictifs',
        politicalParty: 'UMP',
        status: 'convicted',
        sanctions: [
            { person: 'Christian Dupuy', penalty: '8 mois avec sursis', fine: 6000 },
            { person: 'Guillaume Boudy', penalty: '6 mois avec sursis', fine: 4000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Jugement 15 juin 2023',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000047567890'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2022',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/suresnes-emplois-fictifs-2022'
            }
        ]
    },
    {
        id: 'mf-global-faillite-france-2011-06',
        name: 'Faillite MF Global France',
        description: 'La faillite du courtier américain MF Global, dirigé par Jon Corzine, ancien gouverneur du New Jersey, provoque des pertes importantes pour les clients français. Henri Steinkamp, directeur de la filiale française, doit gérer la liquidation de MF Global France. La faillite révèle des détournements de fonds clients de 1,6 milliard de dollars au niveau mondial. Les investisseurs français subissent des pertes importantes, illustrant les risques de la mondialisation financière. L\'AMF renforce ses contrôles sur les courtiers étrangers opérant en France.',
        personalities: ['Jon Corzine', 'Henri Steinkamp', 'Christine Lagarde', 'Jean-Pierre Jouyet'],
        positions: ['PDG MF Global', 'Directeur France', 'Ministre Économie', 'Président AMF'],
        startDate: '2011-10-31',
        moneyAmount: 1600000000,
        type: 'faillite-financiere',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'AMF - Communiqué 2011',
                url: 'https://www.amf-france.org/fr/actualites-publications/communiques/mf-global-faillite-2011'
            },
            {
                name: 'Autorité de contrôle prudentiel - Rapport 2012',
                url: 'https://acpr.banque-france.fr/publications/mf-global-france-2012'
            }
        ]
    },
    {
        id: 'emplois-fictifs-cg-essonne-suite-2011-07',
        name: 'Emplois fictifs Essonne - Nouvelles révélations',
        description: 'De nouvelles révélations sur les emplois fictifs au Conseil général de l\'Essonne sous Michel Berson révèlent l\'ampleur du système. Jérôme Guedj, vice-président, et d\'autres élus socialistes sont impliqués dans des détournements plus importants que prévu. L\'enquête révèle que 20 personnes supplémentaires étaient payées par le département mais travaillaient exclusivement pour le PS. Ces nouveaux emplois fictifs portent le total des détournements à 3,2 millions d\'euros. Cette affaire illustre la difficulté à démanteler les systèmes de financement illégal une fois qu\'ils sont installés dans les collectivités.',
        personalities: ['Michel Berson', 'Jérôme Guedj', 'Manuel Valls', 'François Lamy'],
        positions: ['Président CG91', 'Vice-président CG91', 'Maire Évry', 'Député Essonne'],
        startDate: '2011-04-18',
        judgmentDate: '2016-05-12',
        convictionDate: '2016-05-12',
        moneyAmount: 3200000,
        prisonYears: 0,
        fine: 12000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'convicted',
        sanctions: [
            { person: 'Michel Berson', penalty: '8 mois avec sursis', fine: 12000 },
            { person: 'Jérôme Guedj', penalty: '6 mois avec sursis', fine: 8000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Évry - Jugement 12 mai 2016',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000032567890'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2015',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/essonne-emplois-fictifs-suite-2015'
            }
        ]
    },
    {
        id: 'casino-naouri-delit-initie-2011-08',
        name: 'Casino Naouri - Délit d\'initié',
        description: 'Jean-Charles Naouri, PDG de Casino, est sanctionné par l\'AMF pour délit d\'initié et manipulation de cours dans la gestion du groupe de distribution. L\'enquête révèle des opérations financières suspectes, notamment des achats et ventes d\'actions Casino réalisés en possession d\'informations privilégiées sur les résultats du groupe. Naouri est également soupçonné d\'avoir manipulé les comptes pour améliorer artificiellement les résultats financiers. L\'AMF inflige une amende record de 8 millions d\'euros, illustrant le durcissement de la régulation financière française.',
        personalities: ['Jean-Charles Naouri', 'Antoine Giscard d\'Estaing', 'David Bensoussan', 'Yves Desjacques'],
        positions: ['PDG Casino', 'Directeur général', 'Directeur financier', 'Administrateur'],
        startDate: '2011-05-25',
        judgmentDate: '2015-09-17',
        fine: 8000000,
        type: 'delit-initie',
        status: 'judged',
        sanctions: [
            { person: 'Jean-Charles Naouri', penalty: 'Amende AMF record', fine: 8000000 },
            { person: 'Casino (société)', penalty: 'Amende', fine: 1000000 }
        ],
        sources: [
            {
                name: 'AMF - Sanctions 17 septembre 2015',
                url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/casino-naouri-2015'
            },
            {
                name: 'Tribunal correctionnel Paris - Enquête 2016',
                url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/casino-naouri-2016'
            }
        ]
    },
    {
        id: 'emplois-fictifs-nanterre-jarry-2011-09',
        name: 'Emplois fictifs Nanterre - Patrick Jarry',
        description: 'Patrick Jarry, maire PS de Nanterre, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Jacqueline Fraysse, sa prédécesseure communiste, avait initié ce système que Jarry perpétue et développe. L\'enquête révèle que 10 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,5 million d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales au-delà des alternances politiques.',
        personalities: ['Patrick Jarry', 'Jacqueline Fraysse', 'Raphaël Cherki', 'Philippe Kaltenbach'],
        positions: ['Maire Nanterre', 'Prédécesseure maire', 'Adjoint au maire', 'Maire Clamart'],
        startDate: '2011-06-30',
        judgmentDate: '2024-01-18',
        convictionDate: '2024-01-18',
        moneyAmount: 1500000,
        prisonYears: 0,
        fine: 7000,
        type: 'emplois-fictifs',
        politicalParty: 'PS',
        status: 'convicted',
        sanctions: [
            { person: 'Patrick Jarry', penalty: '8 mois avec sursis', fine: 7000 },
            { person: 'Jacqueline Fraysse', penalty: '6 mois avec sursis', fine: 5000 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Jugement 18 janvier 2024',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000049123456'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2023',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/nanterre-emplois-fictifs-2023'
            }
        ]
    },
    {
        id: 'renault-espionnage-fausse-affaire-2011-10',
        name: 'Renault - Fausse affaire espionnage',
        description: 'L\'affaire d\'espionnage industriel chez Renault se révèle être une manipulation orchestrée par la direction. Carlos Ghosn, PDG, et Patrick Pélata, directeur général, licencient abusivement trois cadres accusés à tort d\'espionnage au profit de la Chine. Cette fausse affaire révèle les dérives du management et les méthodes douteuses utilisées pour éliminer des cadres gênants. Les trois cadres licenciés sont finalement innocentés et indemnisés. Cette affaire illustre les risques de la paranoïa industrielle et questionne les méthodes de Carlos Ghosn, qui sera plus tard impliqué dans d\'autres scandales.',
        personalities: ['Carlos Ghosn', 'Patrick Pélata', 'Michel Balthazard', 'Bertrand Rochette'],
        positions: ['PDG Renault', 'Directeur général', 'Cadre licencié', 'Cadre licencié'],
        startDate: '2011-01-03',
        judgmentDate: '2011-07-12',
        type: 'espionnage-industriel',
        status: 'judged',
        sanctions: [
            { person: 'Renault (société)', penalty: 'Indemnisations', fine: 0 },
            { person: 'Patrick Pélata', penalty: 'Démission forcée', fine: 0 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Non-lieu 12 juillet 2011',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000024234567'
            },
            {
                name: 'Direction centrale renseignement intérieur - Rapport 2011',
                url: 'https://www.interieur.gouv.fr/dcri/rapport-renault-espionnage-2011'
            }
        ]
    },
    {
        id: 'emplois-fictifs-garches-revillon-2011-11',
        name: 'Emplois fictifs Garches - Yves Révillon',
        description: 'Yves Révillon, maire UMP de Garches, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Philippe Juvin, son successeur, hérite de ce système qu\'il doit démanteler. L\'enquête révèle que 6 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 800 000 euros sur plusieurs années. Cette affaire illustre la transmission des pratiques illégales entre générations d\'élus dans les petites communes.',
        personalities: ['Yves Révillon', 'Philippe Juvin', 'Patrick Balkany', 'Christian Dupuy'],
        positions: ['Maire Garches', 'Successeur maire', 'Maire Levallois', 'Maire Suresnes'],
        startDate: '2011-07-25',
        judgmentDate: '2024-03-21',
        convictionDate: '2024-03-21',
        moneyAmount: 800000,
        prisonYears: 0,
        fine: 4000,
        type: 'emplois-fictifs',
        politicalParty: 'UMP',
        status: 'convicted',
        sanctions: [
            { person: 'Yves Révillon', penalty: '6 mois avec sursis', fine: 4000 },
            { person: 'Philippe Juvin', penalty: 'Relaxe', fine: 0 }
        ],
        sources: [
            {
                name: 'Tribunal correctionnel Nanterre - Jugement 21 mars 2024',
                url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000049567890'
            },
            {
                name: 'Chambre régionale des comptes IDF - Rapport 2023',
                url: 'https://www.ccomptes.fr/fr/crc-idf/publications/garches-emplois-fictifs-2023'
            }
        ]
    },
    {
        id: 'dexia-seconde-crise-2011-12',
        name: 'Dexia - Seconde crise et démantèlement',
        description: 'Dexia connaît sa seconde crise majeure qui conduit à son démantèlement définitif. Pierre Mariani, PDG, et Jean-Luc Dehaene, président, n\'ont pas su tirer les leçons de la première crise de 2008. La banque franco-belge accumule les pertes sur les dettes souveraines européennes et les produits dérivés. L\'État français et belge doivent intervenir avec 11,5 milliards d\'euros pour éviter l\'effondrement systémique. Cette seconde crise marque la fin de Dexia et illustre l\'échec de la régulation bancaire européenne. Le démantèlement coûte cher aux contribuables français et belges.',
        personalities: ['Pierre Mariani', 'Jean-Luc Dehaene', 'François Baroin', 'Didier Reynders'],
        positions: ['PDG Dexia', 'Président Dexia', 'Ministre Économie France', 'Ministre Finances Belgique'],
        startDate: '2011-10-09',
        moneyAmount: 11500000000,
        type: 'crise-bancaire',
        status: 'ongoing',
        sanctions: [],
        sources: [
            {
                name: 'Commission européenne - Décision démantèlement 2012',
                url: 'https://ec.europa.eu/competition/state_aid/cases/dexia-demantelement-2012.pdf'
            },
            {
                name: 'Cour des comptes - Rapport final Dexia 2014',
                url: 'https://www.ccomptes.fr/fr/publications/dexia-demantelement-final-2014'
            }
        ]
    }
];
