import { Scandal } from '../types/scandal';

export const mockScandals: Scandal[] = [
  {
    id: '1',
    name: 'Affaire Cahuzac',
    description: 'Ministre du Budget ayant dissimulé un compte en Suisse',
    personalities: ['Jérôme Cahuzac'],
    positions: ['Ministre délégué au Budget'],
    startDate: '2013-03-19',
    judgmentDate: '2016-12-08',
    convictionDate: '2016-12-08',
    moneyAmount: 600000,
    prisonYears: 2,
    fine: 375000,
    country: 'France',
    ineligibilityYears: 5,
    type: 'financial',
    politicalParty: 'PS',
    status: 'convicted'
  },
  {
    id: '2',
    country: 'France',
    name: 'Affaire Fillon',
    description: 'Emplois fictifs de Penelope Fillon comme assistante parlementaire',
    personalities: ['François Fillon', 'Penelope Fillon'],
    positions: ['Premier ministre', 'Candidat à la présidentielle'],
    startDate: '2017-01-25',
    judgmentDate: '2020-06-29',
    convictionDate: '2020-06-29',
    moneyAmount: 1100000,
    prisonYears: 5,
    fine: 375000,
    ineligibilityYears: 10,
    type: 'political',
    politicalParty: 'LR',
    status: 'convicted'
  },
  {
    id: '3',
    name: 'Affaire Balkany',
    country: 'France',
    description: 'Fraude fiscale et blanchiment par le couple Balkany',
    personalities: ['Patrick Balkany', 'Isabelle Balkany'],
    positions: ['Maire de Levallois-Perret'],
    startDate: '2019-05-13',
    judgmentDate: '2019-09-13',
    convictionDate: '2019-09-13',
    moneyAmount: 4000000,
    prisonYears: 8,
    fine: 100000,
    ineligibilityYears: 10,
    type: 'financial',
    politicalParty: 'LR',
    status: 'convicted'
  }
];