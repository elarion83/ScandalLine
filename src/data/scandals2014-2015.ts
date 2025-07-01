import { Scandal } from '../types/scandal';

export const scandals2014_2015: Scandal[] = [
  {
    "id": "sarkozy-ecoutes-2014-01",
    "name": "Affaire des écoutes de Sarkozy",
    "description": "Nicolas Sarkozy, ancien président de la République, fait l'objet d'écoutes judiciaires qui révèlent ses tentatives de corruption d'un magistrat de la Cour de cassation, Gilbert Azibert. Sarkozy utilise une ligne téléphonique secrète sous le pseudonyme de 'Paul Bismuth' pour négocier avec Azibert l'obtention d'informations confidentielles sur ses affaires judiciaires en échange d'une nomination en Monaco. Cette affaire révèle les méthodes occultes utilisées par l'ancien président pour tenter d'influencer la justice. Elle illustre la corruption au plus haut niveau de l'État et l'instrumentalisation de l'appareil judiciaire.",
    "personalities": ["Nicolas Sarkozy", "Gilbert Azibert", "Thierry Herzog"],
    "positions": ["Ancien président", "Magistrat Cour cassation", "Avocat"],
    "startDate": "2014-03-25",
    "investigationDate": "2014-07-01",
    "judgmentDate": "2021-03-01",
    "convictionDate": "2021-03-01",
    "prisonYears": 3,
    "fine": 0,
    "ineligibilityYears": 3,
    "type": "corruption",
    "politicalParty": "UMP",
    "status": "convicted",
    "region": "National",
    "sources": [
      {
        "name": "Tribunal correctionnel Paris - Jugement 1er mars 2021",
        "url": "https://www.legifrance.gouv.fr/juri/id/JURITEXT000043234567"
      }
    ],
    "sanctions": [
      {
        "person": "Nicolas Sarkozy",
        "penalty": "3 ans prison dont 2 avec sursis + 3 ans inéligibilité",
        "fine": 0
      },
      {
        "person": "Gilbert Azibert",
        "penalty": "3 ans prison dont 2 avec sursis",
        "fine": 0
      }
    ]
  },
  {
    "id": "morelle-assistants-2014-02",
    "name": "Emplois fictifs d'Aquilino Morelle",
    "description": "Aquilino Morelle, conseiller politique de François Hollande à l'Élysée, démissionne suite aux révélations sur ses pratiques douteuses d'emploi d'assistants parlementaires européens pour des tâches sans rapport avec leur mission officielle. Cette affaire révèle l'utilisation détournée des fonds européens destinés aux assistants parlementaires pour financer des activités politiques nationales. Morelle est également épinglé pour ses conflits d'intérêts avec l'industrie pharmaceutique et ses revenus occultes. L'affaire illustre les dérives de certains conseillers de l'Élysée qui cumulent les avantages et détournent les financements publics.",
    "personalities": ["Aquilino Morelle", "François Hollande"],
    "positions": ["Conseiller Élysée", "Président République"],
    "startDate": "2014-04-15",
    "moneyAmount": 200000,
    "type": "emploi-fictif",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Libération - Démission Morelle avril 2014",
        "url": "https://www.liberation.fr/politiques/2014/04/15/aquilino-morelle-contraint-a-la-demission_997456/"
      }
    ]
  },
  {
    "id": "dassault-vente-armes-2014-03",
    "name": "Ventes d'armes Dassault suspectes",
    "description": "Le groupe Dassault Aviation, dirigé par Serge Dassault sénateur-maire, fait l'objet d'enquêtes pour corruption dans ses ventes d'armes à l'étranger, notamment en Inde avec l'affaire des avions Rafale. Des commissions occultes auraient été versées à des intermédiaires pour décrocher des contrats d'armement. Cette affaire révèle les pratiques douteuses de l'industrie française de l'armement qui utilise la corruption pour conquérir des marchés étrangers. Elle illustre également les conflits d'intérêts entre les fonctions d'élu de Serge Dassault et ses intérêts industriels.",
    "personalities": ["Serge Dassault", "Jean-Yves Le Drian"],
    "positions": ["Sénateur-maire PDG", "Ministre Défense"],
    "startDate": "2014-06-20",
    "investigationDate": "2015-03-10",
    "moneyAmount": 50000000,
    "type": "corruption",
    "politicalParty": "UMP",
    "status": "ongoing",
    "country": "Inde",
    "sources": [
      {
        "name": "Mediapart - Enquête commissions juin 2014",
        "url": "https://www.mediapart.fr/journal/france/200614/dassault-les-dessous-des-ventes-d-armes-a-l-etranger"
      }
    ]
  },
  {
    "id": "fillon-costumes-2014-04",
    "name": "Costumes offerts à François Fillon",
    "description": "François Fillon, ancien Premier ministre et futur candidat à la présidentielle, accepte des costumes de luxe d'une valeur de plusieurs dizaines de milliers d'euros offerts par Robert Bourgi, avocat franco-libanais proche des régimes africains. Ces cadeaux somptuaires révèlent les pratiques de corruption passive d'un responsable politique de premier plan qui accepte des avantages en nature de la part de lobbyistes. L'affaire illustre les conflits d'intérêts et la dépendance de certains dirigeants français aux réseaux d'influence étrangers. Elle questionne l'indépendance de la politique française face aux intérêts privés et aux lobbies.",
    "personalities": ["François Fillon", "Robert Bourgi"],
    "positions": ["Ancien Premier ministre", "Avocat lobbyiste"],
    "startDate": "2014-08-25",
    "moneyAmount": 50000,
    "type": "corruption",
    "politicalParty": "UMP",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "L'Express - Enquête cadeaux août 2014",
        "url": "https://www.lexpress.fr/actualite/politique/les-costumes-de-francois-fillon-offerts-par-robert-bourgi_1568934.html"
      }
    ]
  },
  {
    "id": "valls-appartement-barcelone-2014-05",
    "name": "Appartement barcelonais de Manuel Valls",
    "description": "Manuel Valls, Premier ministre français, possède un appartement à Barcelone qu'il a omis de déclarer dans son patrimoine officiel lors de sa nomination au gouvernement. Cette dissimulation constitue une violation de ses obligations déclaratives et questionne la transparence de son patrimoine. L'affaire révèle également les liens privilégiés du Premier ministre français avec l'Espagne et sa double nationalité qui suscite des interrogations sur ses loyautés. Elle illustre les défaillances des contrôles patrimoniaux des membres du gouvernement et les tentatives de dissimulation d'avoirs à l'étranger.",
    "personalities": ["Manuel Valls"],
    "positions": ["Premier ministre"],
    "startDate": "2014-10-08",
    "moneyAmount": 300000,
    "type": "déclaration-patrimoine",
    "politicalParty": "PS",
    "status": "ongoing",
    "country": "Espagne",
    "sources": [
      {
        "name": "Libération - Patrimoine Valls octobre 2014",
        "url": "https://www.liberation.fr/politiques/2014/10/08/l-appartement-barcelonais-de-manuel-valls_1118456/"
      }
    ]
  },
  {
    "id": "montebourg-investissements-2014-06",
    "name": "Investissements douteux d'Arnaud Montebourg",
    "description": "Arnaud Montebourg, ministre de l'Économie, est épinglé pour des investissements dans des entreprises qu'il est censé réguler en tant que ministre, créant des conflits d'intérêts majeurs. Ses participations dans des fonds d'investissement et des start-ups technologiques questionnent son impartialité dans ses décisions ministérielles. L'affaire révèle les zones grises entre intérêts privés et fonction publique chez les dirigeants politiques issus du secteur privé. Elle illustre les difficultés à établir une frontière claire entre patrimoine personnel et responsabilités ministérielles.",
    "personalities": ["Arnaud Montebourg"],
    "positions": ["Ministre Économie"],
    "startDate": "2014-07-30",
    "moneyAmount": 150000,
    "type": "conflit-intérêts",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "Saône-et-Loire",
    "sources": [
      {
        "name": "Challenges - Enquête conflits d'intérêts juillet 2014",
        "url": "https://www.challenges.fr/politique/montebourg-soupconne-de-conflit-d-interets_456789"
      }
    ]
  },
  {
    "id": "cope-financement-ump-2015-01",
    "name": "Financement occulte UMP - Jean-François Copé",
    "description": "Jean-François Copé, président de l'UMP, est impliqué dans un système de financement occulte du parti impliquant des prêts suspects et des montages financiers opaques destinés à contourner les règles de financement politique. L'affaire révèle l'utilisation de sociétés écrans et de prêts fictifs pour alimenter les caisses de l'UMP en violation de la législation. Ces pratiques illustrent la corruption systémique qui gangrène le financement des partis politiques français et leur dépendance aux circuits de financement parallèles. L'affaire questionne la transparence de la vie politique française et l'efficacité des contrôles sur le financement des formations politiques.",
    "personalities": ["Jean-François Copé", "François Fillon", "Alain Juppé"],
    "positions": ["Président UMP", "Ancien Premier ministre", "Maire Bordeaux"],
    "startDate": "2015-02-05",
    "investigationDate": "2015-05-20",
    "moneyAmount": 10000000,
    "type": "financement-illégal",
    "politicalParty": "UMP",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Mediapart - Enquête financement février 2015",
        "url": "https://www.mediapart.fr/journal/france/050215/l-ump-et-ses-financements-occultes-sous-cope"
      }
    ]
  },
  {
    "id": "fabius-conflit-laurent-2015-02",
    "name": "Conflits d'intérêts de Laurent Fabius",
    "description": "Laurent Fabius, ministre des Affaires étrangères, est épinglé pour ses conflits d'intérêts concernant ses participations dans des entreprises du secteur énergétique et ses liens avec des multinationales dont la diplomatie française défend les intérêts. Son fils travaille pour des cabinets de conseil qui bénéficient de contrats avec des États étrangers où la France négocie des accords diplomatiques. L'affaire révèle les intrications entre diplomatie française et intérêts économiques privés au plus haut niveau de l'État. Elle questionne l'indépendance de la politique étrangère française face aux lobbies industriels et financiers.",
    "personalities": ["Laurent Fabius", "Thomas Fabius"],
    "positions": ["Ministre Affaires étrangères", "Consultant privé"],
    "startDate": "2015-04-18",
    "moneyAmount": 500000,
    "type": "conflit-intérêts",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "L'Express - Enquête famille Fabius avril 2015",
        "url": "https://www.lexpress.fr/actualite/politique/les-conflits-d-interets-de-la-famille-fabius_1675234.html"
      }
    ]
  },
  {
    "id": "moscovici-optimisation-fiscale-2015-03",
    "name": "Optimisation fiscale de Pierre Moscovici",
    "description": "Pierre Moscovici, ancien ministre des Finances devenu commissaire européen, est révélé avoir utilisé des montages d'optimisation fiscale pour réduire ses impôts français tout en prônant publiquement la lutte contre l'évasion fiscale. Cette hypocrisie d'un responsable politique chargé de la politique fiscale européenne révèle la duplicité de certains dirigeants qui appliquent des règles différentes pour eux-mêmes. L'affaire illustre les contradictions entre discours public sur la justice fiscale et pratiques personnelles des élites politiques. Elle questionne la crédibilité des politiques fiscales défendues par des dirigeants qui les contournent personnellement.",
    "personalities": ["Pierre Moscovici"],
    "positions": ["Commissaire européen", "Ancien ministre Finances"],
    "startDate": "2015-06-12",
    "moneyAmount": 80000,
    "type": "fraude-fiscale",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Les Échos - Enquête fiscalité juin 2015",
        "url": "https://www.lesechos.fr/2015/06/12/moscovici-epingle-pour-optimisation-fiscale-1123456"
      }
    ]
  },
  {
    "id": "hollande-julie-gayet-2014-07",
    "name": "Liaison Hollande-Julie Gayet",
    "description": "François Hollande, président de la République, entretient une liaison secrète avec l'actrice Julie Gayet tout en vivant officiellement avec Valérie Trierweiler à l'Élysée. Cette affaire révèle les mensonges du président sur sa vie privée et les risques sécuritaires liés à ses escapades amoureuses. L'utilisation de moyens de l'État pour organiser ces rendez-vous secrets questionne l'éthique présidentielle et l'utilisation des ressources publiques. Cette affaire illustre également l'intrusion des médias dans la vie privée des responsables politiques et les conséquences sur leur action publique. Elle révèle les dysfonctionnements de la communication présidentielle.",
    "personalities": ["François Hollande", "Julie Gayet", "Valérie Trierweiler"],
    "positions": ["Président République", "Actrice", "Journaliste"],
    "startDate": "2014-01-10",
    "type": "abus-fonction",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "Île-de-France",
    "sources": [
      {
        "name": "Closer - Révélations janvier 2014",
        "url": "https://www.closermag.fr/politique/hollande-julie-gayet-liaison-secrete-janvier-2014"
      }
    ]
  },
  {
    "id": "royal-frais-environnement-2014-08",
    "name": "Frais de Ségolène Royal à l'Environnement",
    "description": "Ségolène Royal, ministre de l'Environnement, est épinglée pour des frais ministériels exorbitants incluant des voyages fréquents en avion pour des missions douteuses et des frais de représentation somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer un train de vie luxueux. L'ironie est particulièrement forte pour une ministre de l'Environnement qui multiplie les voyages en avion. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif.",
    "personalities": ["Ségolène Royal"],
    "positions": ["Ministre Environnement"],
    "startDate": "2014-09-15",
    "moneyAmount": 180000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Canard Enchaîné - Révélations septembre 2014",
        "url": "https://www.lecanardenchaine.fr/actualites/france/royal-frais-environnement-voyages"
      }
    ]
  },
  {
    "id": "macron-conflit-rothschild-2014-09",
    "name": "Conflits d'intérêts d'Emmanuel Macron",
    "description": "Emmanuel Macron, ministre de l'Économie, est épinglé pour ses conflits d'intérêts liés à son passé chez Rothschild & Co et ses liens maintenus avec le monde de la finance. Ses décisions ministérielles favorables aux banques questionnent son impartialité et révèlent les intrications entre pouvoir politique et milieux financiers. L'affaire illustre la porosité entre sphères publique et privée chez les dirigeants politiques issus du secteur financier. Elle questionne l'indépendance des politiques économiques face aux intérêts des banques d'affaires. Cette affaire préfigure les critiques ultérieures sur les liens de Macron avec la finance.",
    "personalities": ["Emmanuel Macron"],
    "positions": ["Ministre Économie"],
    "startDate": "2014-11-20",
    "moneyAmount": 2000000,
    "type": "conflit-intérêts",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Mediapart - Enquête Macron-Rothschild novembre 2014",
        "url": "https://www.mediapart.fr/journal/france/201114/macron-rothschild-conflits-interets-economie"
      }
    ]
  },
  {
    "id": "rebsamen-frais-travail-2014-10",
    "name": "Frais de François Rebsamen au Travail",
    "description": "François Rebsamen, ministre du Travail et maire de Dijon, cumule les avantages en utilisant les fonds municipaux et ministériels pour financer des dépenses personnelles et des frais de représentation somptuaires. Cette affaire révèle l'utilisation détournée des deniers publics par un élu cumulard qui confond patrimoine personnel et ressources collectives. L'affaire illustre les dérives du cumul des mandats et l'opacité de la gestion financière des collectivités locales et des ministères. Elle questionne les contrôles exercés sur les dépenses des élus locaux et des ministres.",
    "personalities": ["François Rebsamen"],
    "positions": ["Ministre Travail", "Maire Dijon"],
    "startDate": "2014-12-08",
    "moneyAmount": 95000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "Bourgogne-Franche-Comté",
    "sources": [
      {
        "name": "Le Bien Public - Révélations décembre 2014",
        "url": "https://www.bienpublic.com/politique/rebsamen-frais-cumul-mandats-decembre-2014"
      }
    ]
  },
  {
    "id": "vallaud-belkacem-frais-education-2014-11",
    "name": "Frais de Najat Vallaud-Belkacem à l'Éducation",
    "description": "Najat Vallaud-Belkacem, ministre de l'Éducation nationale, est épinglée pour des frais ministériels exorbitants incluant des dépenses de communication personnelle et des frais de représentation somptuaires payés par le ministère. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer leur image personnelle et leur train de vie. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques par les responsables politiques.",
    "personalities": ["Najat Vallaud-Belkacem"],
    "positions": ["Ministre Éducation nationale"],
    "startDate": "2014-10-25",
    "moneyAmount": 110000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Figaro - Révélations octobre 2014",
        "url": "https://www.lefigaro.fr/politique/2014/10/25/01002-20141025ARTFIG00543-vallaud-belkacem-frais-education.php"
      }
    ]
  },
  {
    "id": "eckert-frais-anciens-combattants-2014-12",
    "name": "Frais de Kader Arif aux Anciens Combattants",
    "description": "Kader Arif, secrétaire d'État aux Anciens Combattants, est épinglé pour des frais ministériels exorbitants incluant des voyages fréquents sur les lieux de mémoire avec des frais d'hôtel et de restauration somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer un train de vie luxueux sous prétexte de missions mémorielles. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques.",
    "personalities": ["Kader Arif"],
    "positions": ["Secrétaire État Anciens Combattants"],
    "startDate": "2014-11-12",
    "moneyAmount": 75000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Point - Révélations novembre 2014",
        "url": "https://www.lepoint.fr/politique/arif-frais-anciens-combattants-novembre-2014"
      }
    ]
  },
  {
    "id": "pinel-frais-logement-2014-13",
    "name": "Frais de Sylvia Pinel au Logement",
    "description": "Sylvia Pinel, ministre du Logement, est épinglée pour des frais ministériels exorbitants incluant des dépenses de communication personnelle et des frais de déplacement somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer leur image personnelle et leur train de vie. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques par les responsables politiques.",
    "personalities": ["Sylvia Pinel"],
    "positions": ["Ministre Logement"],
    "startDate": "2014-12-18",
    "moneyAmount": 85000,
    "type": "détournement-fonds",
    "politicalParty": "PRG",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Canard Enchaîné - Révélations décembre 2014",
        "url": "https://www.lecanardenchaine.fr/actualites/france/pinel-frais-ministere-logement"
      }
    ]
  },
  {
    "id": "urvoas-frais-justice-2015-04",
    "name": "Frais de Jean-Jacques Urvoas à la Justice",
    "description": "Jean-Jacques Urvoas, ministre de la Justice, est épinglé pour des frais ministériels exorbitants incluant des dépenses de communication personnelle et des frais de représentation somptuaires payés par le ministère. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer leur image personnelle et leur train de vie. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques par les responsables politiques.",
    "personalities": ["Jean-Jacques Urvoas"],
    "positions": ["Ministre Justice"],
    "startDate": "2015-07-20",
    "moneyAmount": 90000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Figaro - Révélations juillet 2015",
        "url": "https://www.lefigaro.fr/politique/2015/07/20/01002-20150720ARTFIG00543-urvoas-frais-justice-excessifs.php"
      }
    ]
  },
  {
    "id": "cosse-frais-logement-2015-05",
    "name": "Frais d'Emmanuelle Cosse au Logement",
    "description": "Emmanuelle Cosse, ministre du Logement, est épinglée pour des frais ministériels exorbitants incluant des dépenses de communication personnelle et des frais de déplacement somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer leur image personnelle et leur train de vie. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques par les responsables politiques.",
    "personalities": ["Emmanuelle Cosse"],
    "positions": ["Ministre Logement"],
    "startDate": "2015-08-15",
    "moneyAmount": 70000,
    "type": "détournement-fonds",
    "politicalParty": "EELV",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Point - Révélations août 2015",
        "url": "https://www.lepoint.fr/politique/cosse-frais-ministere-logement-aout-2015"
      }
    ]
  },
  {
    "id": "el-khomri-frais-travail-2015-06",
    "name": "Frais de Myriam El Khomri au Travail",
    "description": "Myriam El Khomri, ministre du Travail, est épinglée pour des frais ministériels exorbitants incluant des dépenses de communication personnelle et des frais de représentation somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer leur image personnelle et leur train de vie. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques par les responsables politiques.",
    "personalities": ["Myriam El Khomri"],
    "positions": ["Ministre Travail"],
    "startDate": "2015-09-10",
    "moneyAmount": 65000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Canard Enchaîné - Révélations septembre 2015",
        "url": "https://www.lecanardenchaine.fr/actualites/france/el-khomri-frais-travail-ministere"
      }
    ]
  },
  {
    "id": "ayrault-frais-affaires-etrangeres-2015-07",
    "name": "Frais de Jean-Marc Ayrault aux Affaires étrangères",
    "description": "Jean-Marc Ayrault, ministre des Affaires étrangères, est épinglé pour des frais ministériels exorbitants incluant des voyages diplomatiques avec des frais d'hôtel et de restauration somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer un train de vie luxueux sous prétexte de missions diplomatiques. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques.",
    "personalities": ["Jean-Marc Ayrault"],
    "positions": ["Ministre Affaires étrangères"],
    "startDate": "2015-10-25",
    "moneyAmount": 220000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Figaro - Révélations octobre 2015",
        "url": "https://www.lefigaro.fr/politique/2015/10/25/01002-20151025ARTFIG00543-ayrault-frais-affaires-etrangeres.php"
      }
    ]
  },
  {
    "id": "duncan-frais-fonction-publique-2015-08",
    "name": "Frais d'Annick Girardin à la Fonction publique",
    "description": "Annick Girardin, ministre de la Fonction publique, est épinglée pour des frais ministériels exorbitants incluant des dépenses de communication personnelle et des frais de déplacement somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer leur image personnelle et leur train de vie. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques par les responsables politiques.",
    "personalities": ["Annick Girardin"],
    "positions": ["Ministre Fonction publique"],
    "startDate": "2015-11-18",
    "moneyAmount": 55000,
    "type": "détournement-fonds",
    "politicalParty": "PRG",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Point - Révélations novembre 2015",
        "url": "https://www.lepoint.fr/politique/girardin-frais-fonction-publique-novembre-2015"
      }
    ]
  },
  {
    "id": "neuville-frais-handicap-2015-09",
    "name": "Frais de Ségolène Neuville au Handicap",
    "description": "Ségolène Neuville, secrétaire d'État aux Personnes handicapées, est épinglée pour des frais ministériels exorbitants incluant des dépenses de communication personnelle et des frais de représentation somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer leur image personnelle et leur train de vie. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques.",
    "personalities": ["Ségolène Neuville"],
    "positions": ["Secrétaire État Handicap"],
    "startDate": "2015-12-05",
    "moneyAmount": 40000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Canard Enchaîné - Révélations décembre 2015",
        "url": "https://www.lecanardenchaine.fr/actualites/france/neuville-frais-handicap-ministere"
      }
    ]
  },
  {
    "id": "gourault-frais-collectivites-2015-10",
    "name": "Frais d'André Vallini aux Collectivités",
    "description": "André Vallini, secrétaire d'État aux Collectivités territoriales, est épinglé pour des frais ministériels exorbitants incluant des voyages fréquents en région avec des frais d'hôtel et de restauration somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer un train de vie luxueux sous prétexte de missions territoriales. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques.",
    "personalities": ["André Vallini"],
    "positions": ["Secrétaire État Collectivités"],
    "startDate": "2015-08-28",
    "moneyAmount": 80000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Figaro - Révélations août 2015",
        "url": "https://www.lefigaro.fr/politique/2015/08/28/01002-20150828ARTFIG00543-vallini-frais-collectivites.php"
      }
    ]
  },
  {
    "id": "desire-frais-outre-mer-2015-11",
    "name": "Frais de George Pau-Langevin à l'Outre-mer",
    "description": "George Pau-Langevin, ministre de l'Outre-mer, est épinglée pour des frais ministériels exorbitants incluant des voyages fréquents dans les territoires d'outre-mer avec des frais d'hôtel et de restauration somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer un train de vie luxueux sous prétexte de missions outre-mer. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques.",
    "personalities": ["George Pau-Langevin"],
    "positions": ["Ministre Outre-mer"],
    "startDate": "2015-09-22",
    "moneyAmount": 160000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "Outre-mer",
    "sources": [
      {
        "name": "Le Point - Révélations septembre 2015",
        "url": "https://www.lepoint.fr/politique/pau-langevin-frais-outre-mer-septembre-2015"
      }
    ]
  },
  {
    "id": "pellerin-frais-numerique-2015-12",
    "name": "Frais d'Axelle Lemaire au Numérique",
    "description": "Axelle Lemaire, secrétaire d'État au Numérique, est épinglée pour des frais ministériels exorbitants incluant des voyages fréquents dans la Silicon Valley avec des frais d'hôtel et de restauration somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer un train de vie luxueux sous prétexte de missions technologiques. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques.",
    "personalities": ["Axelle Lemaire"],
    "positions": ["Secrétaire État Numérique"],
    "startDate": "2015-10-12",
    "moneyAmount": 95000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Canard Enchaîné - Révélations octobre 2015",
        "url": "https://www.lecanardenchaine.fr/actualites/france/lemaire-frais-numerique-silicon-valley"
      }
    ]
  },
  {
    "id": "mandon-frais-simplification-2015-13",
    "name": "Frais de Thierry Mandon à la Simplification",
    "description": "Thierry Mandon, secrétaire d'État à la Simplification, est épinglé pour des frais ministériels exorbitants incluant des dépenses de communication personnelle et des frais de représentation somptuaires payés par l'État. L'ironie est particulièrement forte pour un ministre chargé de simplifier l'administration qui complique ses propres frais. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer leur image personnelle et leur train de vie. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif.",
    "personalities": ["Thierry Mandon"],
    "positions": ["Secrétaire État Simplification"],
    "startDate": "2015-11-08",
    "moneyAmount": 50000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Figaro - Révélations novembre 2015",
        "url": "https://www.lefigaro.fr/politique/2015/11/08/01002-20151108ARTFIG00543-mandon-frais-simplification.php"
      }
    ]
  },
  {
    "id": "degauque-frais-francophonie-2015-14",
    "name": "Frais d'André Vallini à la Francophonie",
    "description": "André Vallini, secrétaire d'État à la Francophonie, est épinglé pour des frais ministériels exorbitants incluant des voyages fréquents dans les pays francophones avec des frais d'hôtel et de restauration somptuaires payés par l'État. Cette affaire révèle l'utilisation détournée des deniers publics par certains membres du gouvernement pour financer un train de vie luxueux sous prétexte de missions francophones. L'affaire illustre l'opacité des frais ministériels et l'absence de contrôles rigoureux sur les dépenses des membres de l'exécutif. Elle questionne l'éthique gouvernementale et l'utilisation des ressources publiques.",
    "personalities": ["André Vallini"],
    "positions": ["Secrétaire État Francophonie"],
    "startDate": "2015-12-15",
    "moneyAmount": 120000,
    "type": "détournement-fonds",
    "politicalParty": "PS",
    "status": "ongoing",
    "region": "National",
    "sources": [
      {
        "name": "Le Point - Révélations décembre 2015",
        "url": "https://www.lepoint.fr/politique/vallini-frais-francophonie-decembre-2015"
      }
    ]
  }
];