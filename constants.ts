
import { StructuralPart, Status } from './types';

export const INITIAL_PARTS: StructuralPart[] = [
  {
    id: '1',
    name: 'Viga V101',
    quantity: 10,
    section: '30x60cm',
    length: 6.00,
    unitVolume: 0.18,
    totalVolume: 1.80,
    status: Status.Concluido,
  },
  {
    id: '2',
    name: 'Pilar P205',
    quantity: 8,
    section: '40x40cm',
    length: 3.50,
    unitVolume: 0.16,
    totalVolume: 1.28,
    status: Status.EmAndamento,
  },
  {
    id: '3',
    name: 'Laje L301',
    quantity: 1,
    section: 'H12',
    length: null,
    unitVolume: 12.50,
    totalVolume: 12.50,
    status: Status.Revisao,
  },
  {
    id: '4',
    name: 'Sapata S01',
    quantity: 12,
    section: '120x120x40cm',
    length: null,
    unitVolume: 0.576,
    totalVolume: 6.912,
    status: Status.AIniciar,
  },
   {
    id: '5',
    name: 'Viga V102',
    quantity: 15,
    section: '25x50cm',
    length: 5.50,
    unitVolume: 0.125,
    totalVolume: 1.875,
    status: Status.AIniciar,
  },
  {
    id: '6',
    name: 'Pilar P206',
    quantity: 8,
    section: '40x40cm',
    length: 3.50,
    unitVolume: 0.16,
    totalVolume: 1.28,
    status: Status.Concluido,
  },
];

interface StatusConfig {
  [key: string]: {
    text: string;
    classes: string;
  };
}

export const STATUS_CONFIG: StatusConfig = {
  [Status.Concluido]: {
    text: 'Concluído',
    classes: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300',
  },
  [Status.EmAndamento]: {
    text: 'Em Andamento',
    classes: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300',
  },
  [Status.Revisao]: {
    text: 'Revisão',
    classes: 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300',
  },
  [Status.AIniciar]: {
    text: 'A Iniciar',
    classes: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300',
  },
};
