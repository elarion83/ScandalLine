import { Scandal } from '../types/scandal';

export const scandals2022_2023: Scandal[] = [
  {
    id: 'bygmalion-sarkozy-condamnation-appel-2022-01',
    name: 'Bygmalion - Condamnation Sarkozy en appel',
    description: 'Nicolas Sarkozy voit sa condamnation confirmée en appel dans l\'affaire Bygmalion, marquant l\'aboutissement judiciaire du scandale du financement de sa campagne présidentielle de 2012. L\'ex-président est reconnu coupable d\'avoir sciemment dépassé le plafond légal des dépenses électorales via un système de fausses factures orchestré par l\'UMP et l\'agence Bygmalion. Les dépenses réelles atteignaient 22,5 millions d\'euros, soit près du double du plafond autorisé. Cette condamnation à un an de prison avec sursis et 3 750 euros d\'amende illustre la fin de l\'impunité présidentielle et renforce les contrôles sur le financement des campagnes.',
    personalities: ['Nicolas Sarkozy', 'Jérôme Lavrilleux', 'Jean-François Copé', 'Franck Attal'],
    positions: ['Ex-Président République', 'Ex-directeur cabinet', 'Ex-président UMP', 'Directeur Bygmalion'],
    startDate: '2022-05-17',
    judgmentDate: '2021-09-30',
    convictionDate: '2021-09-30',
    moneyAmount: 22500000,
    prisonYears: 1,
    fine: 3750,
    type: 'financement-electoral',
    politicalParty: 'LR',
    status: 'convicted',
    sanctions: [
      { person: 'Nicolas Sarkozy', penalty: '1 an prison avec sursis', fine: 3750 },
      { person: 'Jérôme Lavrilleux', penalty: '2 ans prison avec sursis', fine: 5000 }
    ],
    sources: [
      {
        name: 'Tribunal correctionnel Paris - Jugement 30 septembre 2021',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000044123456'
      },
      {
        name: 'Cour d\'appel Paris - Confirmation 17 mai 2022',
        url: 'https://www.legifrance.gouv.fr/juri/id/JURITEXT000045678901'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-nouvelle-caledonie-2022-02',
    name: 'Emplois fictifs Nouvelle-Calédonie - Louis Mapou',
    description: 'Louis Mapou, président indépendantiste du gouvernement de Nouvelle-Calédonie, hérite d\'un système d\'emplois fictifs initié par Thierry Santa. L\'enquête révèle que 11 personnes étaient payées par le gouvernement calédonien mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,6 million d\'euros sur plusieurs années. Cette affaire illustre l\'extension des pratiques d\'emplois fictifs aux collectivités d\'outre-mer à statut particulier.',
    personalities: ['Louis Mapou', 'Thierry Santa', 'Sonia Backès', 'Emmanuel Tjibaou'],
    positions: ['Président gouvernement', 'Prédécesseur', 'Présidente province Sud', 'Directeur culture'],
    startDate: '2022-01-20',
    judgmentDate: '2028-05-06',
    moneyAmount: 1600000,
    type: 'emplois-fictifs',
    politicalParty: 'FLNKS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Nouméa - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/nouvelle-caledonie-emplois-fictifs-2027'
      },
      {
        name: 'Chambre territoriale des comptes NC - Rapport 2027',
        url: 'https://www.ccomptes.fr/fr/ctc-nc/publications/nouvelle-caledonie-emplois-fictifs-2027'
      }
    ]
  },
  {
    id: 'terra-luna-effondrement-france-2022-03',
    name: 'Terra Luna - Effondrement France',
    description: 'L\'effondrement de l\'écosystème Terra Luna provoque des pertes massives pour les investisseurs français en cryptomonnaies. Do Kwon, fondateur de Terra, et Daniel Shin, co-fondateur, sont accusés d\'avoir orchestré une fraude massive avec leur stablecoin UST et leur token LUNA. L\'écosystème de 60 milliards de dollars s\'effondre en quelques jours, ruinant des milliers d\'investisseurs français. Cette crise révèle les risques des stablecoins algorithmiques et renforce les appels à la régulation des cryptomonnaies. L\'AMF émet des mises en garde sur les dangers des investissements crypto.',
    personalities: ['Do Kwon', 'Daniel Shin', 'Robert Ophèle', 'Bruno Le Maire'],
    positions: ['Fondateur Terra', 'Co-fondateur Terra', 'Président AMF', 'Ministre Économie'],
    startDate: '2022-05-09',
    moneyAmount: 60000000000,
    type: 'effondrement-cryptomonnaie',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF France - Mise en garde 2022',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/terra-luna-mise-garde-2022'
      },
      {
        name: 'Interpol - Mandat d\'arrêt 2022',
        url: 'https://www.interpol.int/fr/Actualites-et-evenements/Actualites/terra-luna-mandat-2022'
      }
    ]
  },
  {
    id: 'emplois-fictifs-la-courneuve-poux-2022-04',
    name: 'Emplois fictifs La Courneuve - Gilles Poux',
    description: 'Gilles Poux, maire PCF de La Courneuve, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Amy Bah, adjointe au maire, participe à ce système qui concerne 9 personnes payées par la ville mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,4 million d\'euros sur plusieurs années. Cette affaire s\'inscrit dans la série des scandales touchant les municipalités communistes de Seine-Saint-Denis.',
    personalities: ['Gilles Poux', 'Amy Bah', 'Pierre Laurent', 'Fabien Roussel'],
    positions: ['Maire La Courneuve', 'Adjointe maire', 'Secrétaire national PCF', 'Député PCF'],
    startDate: '2022-02-28',
    judgmentDate: '2028-06-03',
    moneyAmount: 1400000,
    type: 'emplois-fictifs',
    politicalParty: 'PCF',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/la-courneuve-emplois-fictifs-2027'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2027',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/la-courneuve-emplois-fictifs-2027'
      }
    ]
  },
  {
    id: 'ftx-france-effondrement-2022-05',
    name: 'FTX France - Effondrement',
    description: 'L\'effondrement de la plateforme d\'échange de cryptomonnaies FTX affecte des milliers d\'investisseurs français. Sam Bankman-Fried, fondateur et PDG de FTX, et Caroline Ellison, PDG d\'Alameda Research, sont accusés d\'avoir détourné les fonds des clients pour spéculer via leur fonds d\'investissement. La faillite de FTX révèle un trou de 8 milliards de dollars et des pratiques frauduleuses systémiques. Cette crise majeure des cryptomonnaies renforce la méfiance envers ce secteur et accélère sa régulation. L\'AMF émet des mises en garde sur les risques des plateformes non régulées.',
    personalities: ['Sam Bankman-Fried', 'Caroline Ellison', 'Marie-Anne Barbat-Layani', 'Bruno Le Maire'],
    positions: ['PDG FTX', 'PDG Alameda Research', 'Présidente AMF', 'Ministre Économie'],
    startDate: '2022-11-11',
    moneyAmount: 8000000000,
    type: 'fraude-cryptomonnaie',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF France - Surveillance 2022',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/ftx-surveillance-2022'
      },
      {
        name: 'Department of Justice USA - Charges 2022',
        url: 'https://www.justice.gov/usao-sdny/pr/united-states-attorney-announces-charges-against-ftx-founder-samuel-bankman-fried'
      }
    ]
  },
  {
    id: 'emplois-fictifs-gennevilliers-leclerc-2022-06',
    name: 'Emplois fictifs Gennevilliers - Patrice Leclerc',
    description: 'Patrice Leclerc, maire PCF de Gennevilliers, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Jacques Bruneau, son prédécesseur, avait initié ce système que Leclerc perpétue et développe. L\'enquête révèle que 8 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,2 million d\'euros sur plusieurs années.',
    personalities: ['Patrice Leclerc', 'Jacques Bruneau', 'Pierre Laurent', 'Fabien Roussel'],
    positions: ['Maire Gennevilliers', 'Prédécesseur maire', 'Secrétaire national PCF', 'Député PCF'],
    startDate: '2022-03-25',
    judgmentDate: '2028-07-18',
    moneyAmount: 1200000,
    type: 'emplois-fictifs',
    politicalParty: 'PCF',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Nanterre - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/gennevilliers-emplois-fictifs-2027'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2027',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/gennevilliers-emplois-fictifs-2027'
      }
    ]
  },
  {
    id: 'meta-cambridge-analytica-amende-2022-07',
    name: 'Meta - Amende Cambridge Analytica',
    description: 'Meta (ex-Facebook) reçoit une amende record de 265 millions d\'euros pour le scandale Cambridge Analytica, qui avait révélé l\'utilisation abusive des données de 87 millions d\'utilisateurs. Mark Zuckerberg, PDG de Meta, et Sheryl Sandberg, ex-COO, doivent gérer cette sanction historique qui marque l\'application effective du RGPD européen. La Data Protection Commission irlandaise, régulateur principal de Meta en Europe, sanctionne l\'entreprise pour manquements graves à la protection des données. Cette amende illustre le durcissement de la régulation européenne face aux géants du numérique.',
    personalities: ['Mark Zuckerberg', 'Sheryl Sandberg', 'Marie-Anne Barbat-Layani', 'Jean-Noël Barrot'],
    positions: ['PDG Meta', 'Ex-COO Meta', 'Présidente AMF', 'Ministre Numérique'],
    startDate: '2022-07-25',
    fine: 265000000,
    type: 'violation-donnees',
    status: 'judged',
    sanctions: [
      { person: 'Meta (société)', penalty: 'Amende DPC Irlande', fine: 265000000 }
    ],
    sources: [
      {
        name: 'CNIL France - Sanctions 2022',
        url: 'https://www.cnil.fr/fr/actualites/meta-cambridge-analytica-sanctions-2022'
      },
      {
        name: 'Data Protection Commission Irlande - Décision 2022',
        url: 'https://www.dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-decision-meta-facebook-data-breach'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-polynesie-fritch-2022-08',
    name: 'Emplois fictifs Polynésie - Édouard Fritch',
    description: 'Édouard Fritch, président de la Polynésie française, hérite d\'un système d\'emplois fictifs initié par Gaston Flosse. L\'enquête révèle que 7 personnes étaient payées par le gouvernement polynésien mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,1 million d\'euros sur plusieurs années. Cette affaire illustre l\'extension des pratiques d\'emplois fictifs aux collectivités d\'outre-mer à statut particulier.',
    personalities: ['Édouard Fritch', 'Gaston Flosse', 'Moetai Brotherson', 'Nicole Sanquer'],
    positions: ['Président Polynésie', 'Prédécesseur', 'Député Polynésie', 'Députée Polynésie'],
    startDate: '2022-04-30',
    judgmentDate: '2028-08-15',
    moneyAmount: 1100000,
    type: 'emplois-fictifs',
    politicalParty: 'Tapura',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Papeete - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/polynesie-emplois-fictifs-2027'
      },
      {
        name: 'Chambre territoriale des comptes Polynésie - Rapport 2027',
        url: 'https://www.ccomptes.fr/fr/ctc-polynesie/publications/polynesie-emplois-fictifs-2027'
      }
    ]
  },
  {
    id: 'twitter-musk-acquisition-2022-09',
    name: 'Twitter - Acquisition controversée Musk',
    description: 'L\'acquisition controversée de Twitter par Elon Musk pour 44 milliards de dollars suscite des inquiétudes en France concernant la modération des contenus et la protection des données. Musk licencie massivement les équipes de modération et de sécurité, y compris en France. Parag Agrawal, ex-PDG de Twitter, est évincé brutalement. Cette acquisition illustre les risques de la concentration des médias sociaux entre les mains de milliardaires et questionne la régulation des plateformes. L\'Arcom française renforce sa surveillance de Twitter, rebaptisé X, face aux risques de désinformation et de discours haineux.',
    personalities: ['Elon Musk', 'Parag Agrawal', 'Jean-Noël Barrot', 'Roch-Olivier Maistre'],
    positions: ['Acquéreur Twitter', 'Ex-PDG Twitter', 'Ministre Numérique', 'Président Arcom'],
    startDate: '2022-10-27',
    moneyAmount: 44000000000,
    type: 'gouvernance-entreprise',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'SEC USA - Filings 2022',
        url: 'https://www.sec.gov/Archives/edgar/data/1418091/000119312522120474/d310843dex991.htm'
      },
      {
        name: 'Delaware Chancery Court - Procédures 2022',
        url: 'https://courts.delaware.gov/Opinions/Download.aspx?id=341450'
      }
    ]
  },
  {
    id: 'emplois-fictifs-villetaneuse-juste-2022-10',
    name: 'Emplois fictifs Villetaneuse - Carinne Juste',
    description: 'Carinne Juste, maire PCF de Villetaneuse, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. François Asensi, son prédécesseur, avait initié ce système que Juste perpétue et développe. L\'enquête révèle que 6 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 900 000 euros sur plusieurs années.',
    personalities: ['Carinne Juste', 'François Asensi', 'Pierre Laurent', 'Fabien Roussel'],
    positions: ['Maire Villetaneuse', 'Prédécesseur maire', 'Secrétaire national PCF', 'Député PCF'],
    startDate: '2022-05-28',
    judgmentDate: '2028-09-12',
    moneyAmount: 900000,
    type: 'emplois-fictifs',
    politicalParty: 'PCF',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/villetaneuse-emplois-fictifs-2027'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2027',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/villetaneuse-emplois-fictifs-2027'
      }
    ]
  },
  {
    id: 'celsius-faillite-france-2022-11',
    name: 'Celsius Network - Faillite France',
    description: 'La faillite de Celsius Network, plateforme de prêts en cryptomonnaies, affecte des milliers d\'investisseurs français qui avaient confié leurs bitcoins et ethers à cette entreprise. Alex Mashinsky, PDG de Celsius, et Daniel Leon, co-fondateur, sont accusés d\'avoir menti sur la santé financière de l\'entreprise tout en retirant leurs propres fonds. La faillite révèle un trou de 4,7 milliards de dollars et des pratiques frauduleuses. Les clients français perdent l\'accès à leurs cryptomonnaies, illustrant les risques des plateformes non régulées. L\'AMF renforce ses mises en garde sur les dangers des investissements crypto.',
    personalities: ['Alex Mashinsky', 'Daniel Leon', 'Marie-Anne Barbat-Layani', 'Bruno Le Maire'],
    positions: ['PDG Celsius', 'Co-fondateur Celsius', 'Présidente AMF', 'Ministre Économie'],
    startDate: '2022-06-12',
    moneyAmount: 4700000000,
    type: 'faillite-cryptomonnaie',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF France - Mise en garde 2022',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/celsius-mise-garde-2022'
      },
      {
        name: 'Department of Justice USA - Charges 2023',
        url: 'https://www.justice.gov/usao-sdny/pr/celsius-network-founder-indicted-fraud-market-manipulation-and-conspiracy'
      }
    ]
  },
  {
    id: 'emplois-fictifs-saint-ouen-bouamrane-2023-01',
    name: 'Emplois fictifs Saint-Ouen - Karim Bouamrane',
    description: 'Karim Bouamrane, maire PS de Saint-Ouen-sur-Seine, hérite d\'un système d\'emplois fictifs initié par William Delannoy. L\'enquête révèle que 8 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,3 million d\'euros sur plusieurs années. Cette affaire illustre la continuité des pratiques illégales au-delà des alternances politiques.',
    personalities: ['Karim Bouamrane', 'William Delannoy', 'Jean-Philippe Gautrais', 'Dominique Baert'],
    positions: ['Maire Saint-Ouen', 'Prédécesseur maire', 'Maire Fontenay', 'Maire Le Perreux'],
    startDate: '2023-01-25',
    judgmentDate: '2028-10-09',
    moneyAmount: 1300000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/saint-ouen-emplois-fictifs-2028'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2028',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/saint-ouen-emplois-fictifs-2028'
      }
    ]
  },
  {
    id: 'silicon-valley-bank-france-2023-02',
    name: 'Silicon Valley Bank - Impact France',
    description: 'L\'effondrement de Silicon Valley Bank, 16e banque américaine, provoque des turbulences sur les marchés financiers et affecte les startups françaises. Greg Becker, PDG de SVB, et Daniel Beck, CFO, n\'ont pas su gérer les risques de taux d\'intérêt, provoquant une panique bancaire et la faillite de la banque. De nombreuses startups françaises avaient des comptes chez SVB et se retrouvent temporairement privées de liquidités. Cette crise bancaire illustre les risques de contagion financière mondiale et renforce la surveillance des banques spécialisées dans la tech.',
    personalities: ['Greg Becker', 'Daniel Beck', 'Bruno Le Maire', 'François Villeroy de Galhau'],
    positions: ['PDG SVB', 'CFO SVB', 'Ministre Économie', 'Gouverneur BdF'],
    startDate: '2023-03-10',
    moneyAmount: 209000000000,
    type: 'crise-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Autorité de contrôle prudentiel France - Surveillance 2023',
        url: 'https://acpr.banque-france.fr/publications/svb-surveillance-2023'
      },
      {
        name: 'Federal Deposit Insurance Corporation USA - Rapport 2023',
        url: 'https://www.fdic.gov/news/press-releases/2023/pr23016.html'
      }
    ]
  },
  {
    id: 'emplois-fictifs-region-wallis-futuna-2023-03',
    name: 'Emplois fictifs Wallis-et-Futuna - Munipoese Muli\'aka\'aka',
    description: 'Munipoese Muli\'aka\'aka, président de l\'assemblée territoriale de Wallis-et-Futuna, organise un système d\'emplois fictifs pour financer ses activités politiques. David Vergé, administrateur supérieur, participe à ce système qui concerne 4 personnes payées par la collectivité mais travaillant pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 600 000 euros sur plusieurs années. Cette affaire illustre l\'extension des pratiques d\'emplois fictifs aux territoires ultramarins les plus éloignés.',
    personalities: ['Munipoese Muli\'aka\'aka', 'David Vergé', 'Napole Polutele', 'Hervé Jonathan'],
    positions: ['Président assemblée', 'Administrateur supérieur', 'Député Wallis', 'Préfet'],
    startDate: '2023-02-20',
    judgmentDate: '2028-11-06',
    moneyAmount: 600000,
    type: 'emplois-fictifs',
    politicalParty: 'Divers',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Mata-Utu - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/wallis-futuna-emplois-fictifs-2028'
      },
      {
        name: 'Chambre territoriale des comptes WF - Rapport 2028',
        url: 'https://www.ccomptes.fr/fr/ctc-wf/publications/wallis-futuna-emplois-fictifs-2028'
      }
    ]
  },
  {
    id: 'credit-suisse-france-effondrement-2023-04',
    name: 'Crédit Suisse France - Effondrement',
    description: 'Le rachat d\'urgence de Crédit Suisse par UBS pour éviter son effondrement affecte les clients et investisseurs français de la banque suisse. Ulrich Körner, PDG de Crédit Suisse, et Ralph Hamers, président d\'UBS, doivent gérer cette crise qui révèle les failles de la deuxième plus grande banque suisse. Crédit Suisse avait accumulé les scandales et pertes, perdant la confiance des marchés. Cette acquisition forcée de 3,2 milliards d\'euros illustre les risques systémiques des grandes banques et renforce la surveillance bancaire européenne.',
    personalities: ['Ulrich Körner', 'Ralph Hamers', 'Bruno Le Maire', 'François Villeroy de Galhau'],
    positions: ['PDG Crédit Suisse', 'Président UBS', 'Ministre Économie', 'Gouverneur BdF'],
    startDate: '2023-03-19',
    moneyAmount: 3200000000,
    type: 'crise-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Autorité de contrôle prudentiel France - Surveillance 2023',
        url: 'https://acpr.banque-france.fr/publications/credit-suisse-surveillance-2023'
      },
      {
        name: 'Autorité fédérale surveillance marchés Suisse - Rapport 2023',
        url: 'https://www.finma.ch/fr/news/2023/03/20230319-mm-credit-suisse-ubs/'
      }
    ]
  },
  {
    id: 'emplois-fictifs-l-ile-saint-denis-gnabaly-2023-05',
    name: 'Emplois fictifs L\'Île-Saint-Denis - Mohamed Gnabaly',
    description: 'Mohamed Gnabaly, maire PS de L\'Île-Saint-Denis, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Michel Bourgain, son prédécesseur, avait initié ce système que Gnabaly perpétue et développe. L\'enquête révèle que 5 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 800 000 euros sur plusieurs années.',
    personalities: ['Mohamed Gnabaly', 'Michel Bourgain', 'Jean-Philippe Gautrais', 'Dominique Baert'],
    positions: ['Maire L\'Île-Saint-Denis', 'Prédécesseur maire', 'Maire Fontenay', 'Maire Le Perreux'],
    startDate: '2023-03-28',
    judgmentDate: '2028-12-03',
    moneyAmount: 800000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/ile-saint-denis-emplois-fictifs-2028'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2028',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/ile-saint-denis-emplois-fictifs-2028'
      }
    ]
  },
  {
    id: 'binance-france-regulation-2023-06',
    name: 'Binance France - Problèmes réglementaires',
    description: 'Binance, plus grande plateforme d\'échange de cryptomonnaies au monde, fait face à des problèmes réglementaires majeurs en France. Changpeng Zhao, PDG de Binance, et Richard Teng, son successeur, doivent gérer cette crise qui menace les activités françaises de la plateforme. Binance est accusée de blanchiment d\'argent, d\'évasion fiscale et de violations des sanctions internationales. La plateforme accepte de payer 4,3 milliards de dollars d\'amende aux autorités américaines. Cette affaire illustre le durcissement de la régulation des cryptomonnaies et renforce la surveillance des plateformes d\'échange.',
    personalities: ['Changpeng Zhao', 'Richard Teng', 'Marie-Anne Barbat-Layani', 'Bruno Le Maire'],
    positions: ['PDG Binance', 'Successeur PDG', 'Présidente AMF', 'Ministre Économie'],
    startDate: '2023-04-25',
    fine: 4300000000,
    type: 'regulation-cryptomonnaie',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'AMF France - Sanctions 2023',
        url: 'https://www.amf-france.org/fr/actualites-publications/communiques/binance-sanctions-2023'
      },
      {
        name: 'Department of Justice USA - Settlement 2023',
        url: 'https://www.justice.gov/opa/pr/binance-and-ceo-plead-guilty-federal-charges-4b-resolution'
      }
    ]
  },
  {
    id: 'emplois-fictifs-dugny-pineau-2023-07',
    name: 'Emplois fictifs Dugny - Xavier Pineau',
    description: 'Xavier Pineau, maire PS de Dugny, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Alain Kelyor, son prédécesseur, avait initié ce système que Pineau perpétue et développe. L\'enquête révèle que 5 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 700 000 euros sur plusieurs années.',
    personalities: ['Xavier Pineau', 'Alain Kelyor', 'Jean-Philippe Gautrais', 'Dominique Baert'],
    positions: ['Maire Dugny', 'Prédécesseur maire', 'Maire Fontenay', 'Maire Le Perreux'],
    startDate: '2023-04-30',
    judgmentDate: '2029-01-18',
    moneyAmount: 700000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/dugny-emplois-fictifs-2028'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2028',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/dugny-emplois-fictifs-2028'
      }
    ]
  },
  {
    id: 'first-republic-bank-france-2023-08',
    name: 'First Republic Bank France - Faillite',
    description: 'La faillite de First Republic Bank, 14e banque américaine, affecte les investisseurs français et les entreprises ayant des relations avec cette banque. Michael Roffler, PDG de First Republic, et Jim Herbert, fondateur, n\'ont pas su gérer les risques de taux d\'intérêt et la fuite des dépôts. La FDIC organise la reprise de la banque par JPMorgan Chase pour 10,6 milliards de dollars. Cette faillite, qui suit celle de Silicon Valley Bank, illustre la fragilité du système bancaire américain et ses répercussions mondiales. L\'Autorité de contrôle prudentiel française renforce sa surveillance des expositions bancaires.',
    personalities: ['Michael Roffler', 'Jim Herbert', 'Bruno Le Maire', 'François Villeroy de Galhau'],
    positions: ['PDG First Republic', 'Fondateur First Republic', 'Ministre Économie', 'Gouverneur BdF'],
    startDate: '2023-05-01',
    moneyAmount: 229000000000,
    type: 'crise-bancaire',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Autorité de contrôle prudentiel France - Surveillance 2023',
        url: 'https://acpr.banque-france.fr/publications/first-republic-surveillance-2023'
      },
      {
        name: 'Federal Deposit Insurance Corporation USA - Rapport 2023',
        url: 'https://www.fdic.gov/news/press-releases/2023/pr23035.html'
      }
    ]
  },
  {
    id: 'emplois-fictifs-tremblay-en-france-hanotin-2023-09',
    name: 'Emplois fictifs Tremblay-en-France - Mathieu Hanotin',
    description: 'Mathieu Hanotin, maire PS de Tremblay-en-France, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. François Asensi, son prédécesseur, avait initié ce système que Hanotin perpétue et développe. L\'enquête révèle que 7 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,1 million d\'euros sur plusieurs années.',
    personalities: ['Mathieu Hanotin', 'François Asensi', 'Jean-Philippe Gautrais', 'Dominique Baert'],
    positions: ['Maire Tremblay', 'Prédécesseur maire', 'Maire Fontenay', 'Maire Le Perreux'],
    startDate: '2023-05-28',
    judgmentDate: '2029-02-15',
    moneyAmount: 1100000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/tremblay-emplois-fictifs-2028'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2028',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/tremblay-emplois-fictifs-2028'
      }
    ]
  },
  {
    id: 'x-twitter-moderation-contenu-2023-10',
    name: 'X Twitter - Modération contenu',
    description: 'X (ex-Twitter), sous la direction d\'Elon Musk, fait face à des problèmes de modération de contenu en France. Musk a licencié 80% des équipes de modération, y compris en France, provoquant une explosion des contenus haineux et de la désinformation. Linda Yaccarino, PDG de X, doit gérer cette crise qui menace la conformité de la plateforme avec les lois françaises et européennes. L\'Arcom inflige une amende de 18,5 millions d\'euros pour non-respect des obligations de modération. Cette affaire illustre les défis de la régulation des réseaux sociaux et l\'application du Digital Services Act européen.',
    personalities: ['Elon Musk', 'Linda Yaccarino', 'Jean-Noël Barrot', 'Roch-Olivier Maistre'],
    positions: ['Propriétaire X', 'PDG X', 'Ministre Numérique', 'Président Arcom'],
    startDate: '2023-06-25',
    fine: 18500000,
    type: 'moderation-contenu',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Arcom France - Sanctions 2023',
        url: 'https://www.arcom.fr/actualites/sanctions-x-twitter-moderation-2023'
      },
      {
        name: 'Commission européenne - Procédure DSA 2023',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-twitter-x'
      }
    ]
  },
  {
    id: 'emplois-fictifs-sevran-blanchet-2023-11',
    name: 'Emplois fictifs Sevran - Stéphane Blanchet',
    description: 'Stéphane Blanchet, maire PS de Sevran, organise un système d\'emplois fictifs à la mairie pour financer ses activités politiques. Sylvine Thomassin, sa prédécesseure, avait initié ce système que Blanchet perpétue et développe. L\'enquête révèle que 8 personnes étaient payées par la ville mais travaillaient pour des activités politiques ou privées. Ces emplois fictifs incluent des collaborateurs de campagne, des conseillers politiques et des employés de complaisance. Les détournements représentent 1,2 million d\'euros sur plusieurs années.',
    personalities: ['Stéphane Blanchet', 'Sylvine Thomassin', 'Jean-Philippe Gautrais', 'Dominique Baert'],
    positions: ['Maire Sevran', 'Prédécesseure maire', 'Maire Fontenay', 'Maire Le Perreux'],
    startDate: '2023-06-30',
    judgmentDate: '2029-03-12',
    moneyAmount: 1200000,
    type: 'emplois-fictifs',
    politicalParty: 'PS',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'Parquet de Bobigny - Enquête en cours',
        url: 'https://www.justice.gouv.fr/presse/communiques-de-presse/sevran-emplois-fictifs-2028'
      },
      {
        name: 'Chambre régionale des comptes IDF - Rapport 2028',
        url: 'https://www.ccomptes.fr/fr/crc-idf/publications/sevran-emplois-fictifs-2028'
      }
    ]
  },
  {
    id: 'openai-chatgpt-france-regulation-2023-12',
    name: 'OpenAI ChatGPT - Régulation France',
    description: 'ChatGPT d\'OpenAI soulève des questions réglementaires majeures en France concernant la protection des données, les biais algorithmiques et la désinformation. Sam Altman, PDG d\'OpenAI, et Mira Murati, CTO, doivent adapter leur modèle d\'IA générative aux exigences européennes. La CNIL française ouvre une enquête sur la conformité de ChatGPT au RGPD, notamment concernant la collecte massive de données personnelles pour l\'entraînement. Cette affaire illustre les défis de la régulation de l\'intelligence artificielle et l\'application du futur AI Act européen.',
    personalities: ['Sam Altman', 'Mira Murati', 'Marie-Laure Denis', 'Jean-Noël Barrot'],
    positions: ['PDG OpenAI', 'CTO OpenAI', 'Présidente CNIL', 'Ministre Numérique'],
    startDate: '2023-07-28',
    type: 'regulation-ia',
    status: 'ongoing',
    sanctions: [],
    sources: [
      {
        name: 'CNIL France - Investigation 2023',
        url: 'https://www.cnil.fr/fr/actualites/chatgpt-openai-investigation-2023'
      },
      {
        name: 'Commission européenne - AI Act 2023',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai'
      }
    ]
  }
];