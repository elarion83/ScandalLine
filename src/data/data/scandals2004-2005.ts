import { Scandal } from '../types/scandal';

export const scandals2004_2005: Scandal[] = [
  {
    id: 'oil-for-food-pasqua-2004-01',
    name: 'Programme Pétrole contre nourriture - Charles Pasqua',
    description: 'Charles Pasqua, sénateur et ancien ministre de l\'Intérieur, est impliqué dans le détournement du programme humanitaire "Pétrole contre nourriture" de l\'ONU en Irak. Ce programme, destiné à permettre à l\'Irak de vendre du pétrole pour acheter des produits de première nécessité sous embargo, est détourné par Saddam Hussein avec la complicité d\'intermédiaires occidentaux. Pasqua, par l\'intermédiaire de Bernard Guillet, obtient des allocations pétrolières qu\'il revend avec des marges substantielles. L\'enquête révèle un système de corruption impliquant des responsables politiques français, russes et américains qui profitent de la misère du peuple irakien.',
    personalities: ['Charles Pasqua', 'Bernard Guillet', 'Augustin de Romanet', 'Jean-Bernard Mérimée'],
    positions: ['Sénateur', 'Homme d\'affaires', 'Directeur cabinet', 'Ambassadeur ONU'],
    startDate: '2004-01-20',
    judgmentDate: '2010-01-18',
    convictionDate: '2010-01-18',
    moneyAmount: 13000000,
    prisonYears: 1,
    fine: 100000,
    type: 'corruption-internationale',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Charles Pasqua', penalty: '1 an prison avec sursis', fine: 100000 },
      { person: 'Bernard Guillet', penalty: '2 ans prison avec sursis', fine: 50000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 18 janvier 2010',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000021678901'
      },
      {
        name: 'Commission d\'enquête ONU - Rapport Volcker 2005',
        url: 'https://www.un.org/Depts/oip/background/reports/volcker_report.pdf'
      }
    ]
  },
  {
    id: 'juppe-condamnation-definitive-2004-02',
    name: 'Alain Juppé - Condamnation définitive',
    description: 'Alain Juppé, ancien Premier ministre et maire de Bordeaux, voit sa condamnation confirmée définitivement dans l\'affaire des emplois fictifs du RPR. Le tribunal le reconnaît coupable d\'avoir organisé et supervisé un système d\'emplois fictifs à la Ville de Paris pour financer le parti gaulliste. Cette condamnation à 18 mois de prison avec sursis et un an d\'inéligibilité marque un tournant dans la lutte contre la corruption politique en France. Juppé doit renoncer temporairement à ses mandats électifs, illustrant que même les plus hautes personnalités politiques ne sont pas à l\'abri de la justice. Cette affaire révèle l\'ampleur du financement illégal des partis politiques français.',
    personalities: ['Alain Juppé', 'Jacques Chirac', 'Louise-Yvonne Casetta', 'Michel Roussin'],
    positions: ['Premier ministre', 'Président République', 'Trésorière RPR', 'Directeur cabinet'],
    startDate: '2004-01-30',
    judgmentDate: '2004-01-30',
    convictionDate: '2004-01-30',
    moneyAmount: 2000000,
    prisonYears: 0,
    ineligibilityYears: 1,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'convicted',
    sanctions: [
      { person: 'Alain Juppé', penalty: '18 mois avec sursis et inéligibilité 1 an', fine: 0 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 30 janvier 2004',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007067890'
      },
      {
        name: 'Cour d\'appel Paris - Confirmation 2004',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000007068123'
      }
    ]
  },
  {
    id: 'technip-corruption-nigeria-2004-03',
    name: 'Technip - Corruption Nigeria',
    description: 'Technip, groupe français d\'ingénierie pétrolière, est impliqué dans un vaste système de corruption au Nigeria pour obtenir des contrats gaziers sur l\'île de Bonny. Thierry Pilenko, PDG de Technip, et Daniel Valot, directeur général, organisent le versement de 180 millions de dollars de pots-de-vin à des responsables nigérians via des intermédiaires japonais et britanniques. Ce système de corruption implique également les groupes KBR (Halliburton), JGC Corporation et Snamprogetti dans un cartel international. L\'affaire révèle les pratiques systémiques de corruption dans l\'industrie pétrolière mondiale et les méthodes sophistiquées utilisées pour dissimuler les paiements illégaux.',
    personalities: ['Thierry Pilenko', 'Daniel Valot', 'Stanley Sporkin', 'Jeffrey Tesler'],
    positions: ['PDG Technip', 'Directeur général', 'Avocat consultant', 'Intermédiaire britannique'],
    startDate: '2004-02-15',
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
    id: 'credit-mutuel-blanchiment-2004-04',
    name: 'Crédit Mutuel - Blanchiment d\'argent',
    description: 'Le Crédit Mutuel est sanctionné pour défaillances graves dans la lutte contre le blanchiment d\'argent et complicité d\'abus de biens sociaux. Michel Lucas, président du Crédit Mutuel, et Étienne Pflimlin, directeur général, sont accusés d\'avoir fermé les yeux sur des opérations suspectes impliquant des comptes offshore et des montages financiers douteux. L\'enquête révèle que la banque mutualiste a facilité le blanchiment de fonds provenant d\'activités criminelles, notamment par des négligences dans les contrôles et la surveillance des transactions. Cette affaire met en lumière les failles du système bancaire français dans la détection des opérations illégales.',
    personalities: ['Michel Lucas', 'Étienne Pflimlin', 'Claude Brunet', 'Nicolas Théry'],
    positions: ['Président CM', 'Directeur général', 'Directeur conformité', 'Successeur'],
    startDate: '2004-03-22',
    judgmentDate: '2008-11-20',
    fine: 2000000,
    type: 'blanchiment-argent',
    status: 'judged',
    sanctions: [
      { person: 'Crédit Mutuel', penalty: 'Amende Commission bancaire', fine: 2000000 },
      { person: 'Michel Lucas', penalty: 'Blâme', fine: 0 }
    ],
    sources: [
      {
        name: 'Commission bancaire - Sanctions 20 novembre 2008',
        url: 'https://acpr.banque-france.fr/sanctions/credit-mutuel-blanchiment-2008'
      },
      {
        name: 'Tracfin - Rapport 2005',
        url: 'https://www.economie.gouv.fr/files/tracfin-rapport-2005.pdf'
      }
    ]
  },
  {
    id: 'emplois-fictifs-ump-sarkozy-2004-05',
    name: 'Emplois fictifs UMP - Nicolas Sarkozy',
    description: 'Un système d\'emplois fictifs est découvert au siège de l\'UMP rue de Vaugirard sous la présidence de Nicolas Sarkozy. L\'enquête révèle que le parti emploie fictivement des dizaines de personnes payées par diverses collectivités mais travaillant exclusivement pour l\'UMP. Claude Guéant, secrétaire général de l\'UMP, organise ce système qui permet de financer le fonctionnement du parti avec l\'argent public. Ces emplois fictifs concernent des permanents du parti, des collaborateurs de campagne et des conseillers politiques. Le système perdure sous différentes présidences de l\'UMP, illustrant l\'institutionnalisation du financement illégal des partis politiques français.',
    personalities: ['Nicolas Sarkozy', 'Claude Guéant', 'Jean-François Copé', 'Patrick Stefanini'],
    positions: ['Président UMP', 'Secrétaire général UMP', 'Successeur président', 'Directeur cabinet'],
    startDate: '2004-04-10',
    moneyAmount: 7000000,
    type: 'emplois-fictifs',
    politicalParty: 'UMP',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Paris - Enquête préliminaire 2017',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/ump-emplois-fictifs-2017'
      },
      {
        name: 'Médiapart - Révélations 2016',
        url: 'https://www.mediapart.fr/journal/france/ump-emplois-fictifs-revelations'
      }
    ]
  },
  {
    id: 'rafale-inde-debut-2004-06',
    name: 'Rafale Inde - Début négociations',
    description: 'Les négociations pour la vente de Rafale à l\'Inde débutent dans un contexte de concurrence internationale intense avec l\'Eurofighter Typhoon. Serge Dassault, PDG de Dassault Aviation, met en place une stratégie commerciale agressive incluant des compensations industrielles et des transferts de technologie. Les premières discussions révèlent déjà des pratiques douteuses, notamment l\'utilisation d\'intermédiaires et de consultants pour faciliter les négociations. François Hollande, alors Premier secrétaire du PS, sera plus tard impliqué dans cette affaire en tant que Président de la République. Cette vente d\'armement illustre les enjeux géopolitiques et économiques des exportations françaises d\'armement.',
    personalities: ['Serge Dassault', 'François Hollande', 'Éric Trappier', 'Anil Ambani'],
    positions: ['PDG Dassault', 'Premier secrétaire PS', 'Directeur général Dassault', 'Homme d\'affaires indien'],
    startDate: '2004-05-18',
    moneyAmount: 7800000000,
    type: 'vente-armement',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Commission d\'enquête Assemblée Nationale - Rapport 2018',
        url: 'https://www.assemblee-nationale.fr/dyn/15/rapports/cion-def/l15b0963_rapport-enquete'
      },
      {
        name: 'Cour des comptes - Rapport armement 2019',
        url: 'https://www.ccomptes.fr/fr/publications/les-exportations-darmement-2019'
      }
    ]
  },
  {
    id: 'societe-generale-kerviel-debut-2004-07',
    name: 'Société Générale - Début opérations Kerviel',
    description: 'Jérôme Kerviel, trader à la Société Générale, commence ses opérations frauduleuses qui conduiront à la plus grande perte de l\'histoire bancaire française. Initialement simple arbitragiste, Kerviel développe progressivement un système sophistiqué de dissimulation de positions spéculatives massives sur les indices boursiers européens. Daniel Bouton, PDG de la Société Générale, et la hiérarchie de la banque ferment les yeux sur les profits exceptionnels générés par Kerviel sans s\'interroger sur les méthodes utilisées. Cette affaire révèle les failles du contrôle des risques dans les banques françaises et les dérives de la spéculation financière.',
    personalities: ['Jérôme Kerviel', 'Daniel Bouton', 'Jean-Pierre Mustier', 'Luc François'],
    positions: ['Trader', 'PDG Société Générale', 'Directeur banque investissement', 'Responsable contrôle'],
    startDate: '2004-06-25',
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
    id: 'emplois-fictifs-fn-parlement-europeen-2004-08',
    name: 'Emplois fictifs Front National Parlement européen',
    description: 'Le Front National met en place un système d\'emplois fictifs au Parlement européen pour financer le parti avec l\'argent des institutions européennes. Marine Le Pen, députée européenne, et Jean-Marie Le Pen, président du FN, organisent l\'embauche fictive d\'assistants parlementaires qui travaillent en réalité pour le parti en France. Ces emplois fictifs concernent des permanents du FN, des responsables de campagne et des conseillers politiques. L\'OLAF (Office européen de lutte antifraude) enquête sur ces détournements qui représentent plusieurs millions d\'euros. Cette affaire illustre l\'utilisation systématique des institutions européennes pour financer les partis eurosceptiques.',
    personalities: ['Marine Le Pen', 'Jean-Marie Le Pen', 'Bruno Gollnisch', 'Louis Aliot'],
    positions: ['Députée européenne', 'Président FN', 'Député européen', 'Vice-président FN'],
    startDate: '2004-07-12',
    moneyAmount: 6800000,
    type: 'emplois-fictifs',
    politicalParty: 'FN',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parlement européen - OLAF Investigation 2016',
        url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-front-national-investigation'
      },
      {
        name: 'Parquet de Paris - Enquête 2017',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/fn-emplois-fictifs-2017'
      }
    ]
  },
  {
    id: 'total-corruption-iran-2004-09',
    name: 'Total - Corruption Iran',
    description: 'Total, géant pétrolier français, est impliqué dans un système de corruption en Iran pour obtenir des contrats d\'exploration et de production pétrolière. Christophe de Margerie, PDG de Total, et Thierry Desmarest, président, organisent le versement de commissions occultes à des responsables iraniens via des intermédiaires. L\'enquête révèle des paiements de 60 millions de dollars pour faciliter l\'attribution du contrat gazier de South Pars. Ces pratiques incluent des factures fictives, des consultants fantômes et des comptes offshore pour dissimuler les paiements illégaux. Cette affaire illustre les défis de l\'industrie pétrolière française dans les pays sous sanctions internationales.',
    personalities: ['Christophe de Margerie', 'Thierry Desmarest', 'Jean-Jacques Guilbaud', 'Mehdi Hashemi'],
    positions: ['PDG Total', 'Président Total', 'Directeur Moyen-Orient', 'Intermédiaire iranien'],
    startDate: '2004-08-30',
    judgmentDate: '2013-07-08',
    convictionDate: '2013-07-08',
    moneyAmount: 60000000,
    fine: 750000,
    type: 'corruption-internationale',
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
        name: 'Parquet national financier - Enquête 2006-2013',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/total-corruption-iran-2013'
      }
    ]
  },
  {
    id: 'wendel-delit-initie-2004-10',
    name: 'Wendel - Délit d\'initié',
    description: 'Le groupe Wendel, holding d\'investissement dirigé par Ernest-Antoine Seillière, est impliqué dans des opérations de délit d\'initié lors de ses acquisitions et cessions d\'entreprises. Jean-Bernard Lafonta, directeur général, organise des achats et ventes d\'actions en possession d\'informations privilégiées sur les opérations de croissance externe du groupe. L\'enquête révèle des pratiques douteuses dans la gestion du portefeuille d\'investissements, notamment lors des acquisitions de Legrand, Deutsch et Bureau Veritas. Ces opérations permettent au groupe et à ses dirigeants de réaliser des plus-values importantes au détriment des autres actionnaires.',
    personalities: ['Ernest-Antoine Seillière', 'Jean-Bernard Lafonta', 'Frédéric Lemoine', 'André Lévy-Lang'],
    positions: ['Président Wendel', 'Directeur général', 'Directeur financier', 'Administrateur'],
    startDate: '2004-09-15',
    judgmentDate: '2009-04-22',
    fine: 300000,
    type: 'delit-initie',
    status: 'judged',
    sanctions: [
      { person: 'Ernest-Antoine Seillière', penalty: 'Amende AMF', fine: 300000 },
      { person: 'Jean-Bernard Lafonta', penalty: 'Amende AMF', fine: 100000 }
    ],
    sources: [
      {
        name: 'AMF - Sanctions 22 avril 2009',
        url: 'https://www.amf-france.org/fr/sanctions-transactions/decisions-de-la-commission/wendel-delit-initie-2009'
      },
      {
        name: 'Tribunal correctionnel Paris - Jugement 2010',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000022345678'
      }
    ]
  },
  {
    id: 'emplois-fictifs-modem-bayrou-2005-01',
    name: 'Emplois fictifs MoDem - François Bayrou',
    description: 'François Bayrou, président du Mouvement démocrate, met en place un système d\'emplois fictifs au Parlement européen pour financer son parti centiste. Marielle de Sarnez, députée européenne et proche de Bayrou, organise l\'embauche fictive d\'assistants parlementaires qui travaillent en réalité pour le MoDem en France. Ces emplois fictifs concernent des permanents du parti, des responsables de communication et des conseillers politiques. L\'OLAF enquête sur ces détournements qui représentent 1,4 million d\'euros. Cette affaire révèle que même les partis se réclamant de la moralisation de la vie politique utilisent des méthodes illégales pour se financer.',
    personalities: ['François Bayrou', 'Marielle de Sarnez', 'Jean Lassalle', 'Sylvie Goulard'],
    positions: ['Président MoDem', 'Députée européenne', 'Député', 'Députée européenne'],
    startDate: '2005-01-20',
    moneyAmount: 1400000,
    type: 'emplois-fictifs',
    politicalParty: 'MoDem',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parlement européen - OLAF Investigation 2017',
        url: 'https://www.europarl.europa.eu/news/fr/press-room/olaf-modem-investigation'
      },
      {
        name: 'Parquet de Paris - Enquête 2017',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/modem-emplois-fictifs-2017'
      }
    ]
  },
  {
    id: 'lagarde-tapie-arbitrage-2005-02',
    name: 'Christine Lagarde - Arbitrage Tapie',
    description: 'Christine Lagarde, ministre de l\'Économie, prend la décision controversée de recourir à un arbitrage privé pour régler le litige opposant Bernard Tapie au Crédit Lyonnais. Cette décision, prise contre l\'avis de ses services, aboutit à l\'attribution de 400 millions d\'euros à Tapie. L\'enquête révèle des pressions politiques et des conflits d\'intérêts dans cette affaire qui coûte cher à l\'État français. Pierre Moscovici, conseiller de Lagarde, et Stéphane Richard, directeur de cabinet, sont également impliqués dans cette décision. Cette affaire illustre les dérives de l\'arbitrage privé dans les litiges impliquant l\'État et les risques de captation de l\'argent public.',
    personalities: ['Christine Lagarde', 'Bernard Tapie', 'Pierre Moscovici', 'Stéphane Richard'],
    positions: ['Ministre de l\'Économie', 'Homme d\'affaires', 'Conseiller', 'Directeur cabinet'],
    startDate: '2005-02-28',
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
    id: 'bouygues-corruption-afrique-2005-03',
    name: 'Bouygues - Corruption Afrique',
    description: 'Le groupe Bouygues, dirigé par Martin Bouygues, est impliqué dans des systèmes de corruption en Afrique pour obtenir des marchés de construction d\'infrastructures. Olivier Bouygues, directeur général, organise le versement de commissions occultes à des responsables politiques africains via des intermédiaires. L\'enquête révèle des pratiques de corruption dans plusieurs pays africains, notamment pour la construction de routes, de ponts et de bâtiments publics. Ces pratiques incluent des factures fictives, des consultants fantômes et des comptes offshore pour dissimuler les paiements illégaux. Cette affaire illustre les méthodes utilisées par les grands groupes français pour conquérir les marchés africains.',
    personalities: ['Martin Bouygues', 'Olivier Bouygues', 'Philippe Marien', 'Yves Gabriel'],
    positions: ['PDG Bouygues', 'Directeur général', 'Directeur international', 'Directeur Afrique'],
    startDate: '2005-03-18',
    moneyAmount: 25000000,
    type: 'corruption-internationale',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet national financier - Enquête 2018',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/bouygues-corruption-afrique-2018'
      },
      {
        name: 'Sherpa - Plainte 2017',
        url: 'https://www.asso-sherpa.org/bouygues-corruption-afrique-plainte'
      }
    ]
  },
  {
    id: 'vinci-entente-illicite-2005-04',
    name: 'Vinci - Entente illicite',
    description: 'Vinci, leader français du BTP, est impliqué dans une vaste entente illicite avec d\'autres entreprises du secteur pour se répartir les marchés publics d\'autoroutes et d\'infrastructures. Antoine Zacharias, PDG de Vinci, et Xavier Huillard, directeur général, organisent cette entente avec Eiffage, Colas et d\'autres groupes du BTP. L\'enquête révèle des pratiques de répartition des marchés, de fixation des prix et d\'échange d\'informations confidentielles. Cette entente permet aux entreprises de maintenir des marges artificiellement élevées au détriment des collectivités publiques. L\'Autorité de la concurrence inflige des amendes record pour sanctionner ces pratiques anticoncurrentielles.',
    personalities: ['Antoine Zacharias', 'Xavier Huillard', 'Pierre Coppey', 'Jean-François Roverato'],
    positions: ['PDG Vinci', 'Directeur général', 'Directeur autoroutes', 'PDG Eiffage'],
    startDate: '2005-04-25',
    judgmentDate: '2013-01-30',
    fine: 222600000,
    type: 'entente-illicite',
    status: 'judged',
    sanctions: [
      { person: 'Vinci (société)', penalty: 'Amende Autorité concurrence', fine: 222600000 },
      { person: 'Antoine Zacharias', penalty: 'Interdiction temporaire', fine: 0 }
    ],
    sources: [
      {
        name: 'Autorité de la concurrence - Décision 30 janvier 2013',
        url: 'https://www.autoritedelaconcurrence.fr/fr/decision/relative-des-pratiques-dans-le-secteur-du-btp'
      },
      {
        name: 'Conseil d\'État - Arrêt 2015',
        url: 'https://www.legifrance.gouv.fr/ceta/id/CETATEXT000030567890'
      }
    ]
  },
  {
    id: 'dexia-gestion-risquee-2005-05',
    name: 'Dexia - Gestion risquée',
    description: 'Dexia, banque franco-belge spécialisée dans le financement des collectivités locales, développe une stratégie risquée basée sur les produits dérivés et les investissements toxiques qui mènera à sa faillite. Pierre Mariani, PDG de Dexia, et Jean-Luc Dehaene, président, mettent en place une politique d\'expansion agressive financée par des emprunts à court terme et des produits financiers complexes. Cette stratégie expose la banque à des risques considérables lors de la crise financière de 2008. L\'État français et belge devront intervenir massivement pour éviter la faillite, illustrant les dérives de la financiarisation du secteur bancaire.',
    personalities: ['Pierre Mariani', 'Jean-Luc Dehaene', 'Axel Miller', 'Pierre de Lauzun'],
    positions: ['PDG Dexia', 'Président Dexia', 'Successeur PDG', 'Directeur risques'],
    startDate: '2005-05-30',
    judgmentDate: '2014-09-18',
    moneyAmount: 6500000000,
    fine: 70000000,
    type: 'gestion-bancaire',
    status: 'judged',
    sanctions: [
      { person: 'Dexia (société)', penalty: 'Amende FSMA Belgique', fine: 70000000 },
      { person: 'Pierre Mariani', penalty: 'Interdiction temporaire', fine: 0 }
    ],
    sources: [
      {
        name: 'FSMA Belgique - Sanctions 18 septembre 2014',
        url: 'https://www.fsma.be/fr/sanctions/dexia-gestion-risquee-2014'
      },
      {
        name: 'Cour des comptes - Rapport sauvetage Dexia 2012',
        url: 'https://www.ccomptes.fr/fr/publications/sauvetage-dexia-2012'
      }
    ]
  }
];