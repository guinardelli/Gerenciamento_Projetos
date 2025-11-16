
export enum Status {
  Concluido = 'Concluído',
  EmAndamento = 'Em Andamento',
  Revisao = 'Revisão',
  AIniciar = 'A Iniciar',
}

export interface StructuralPart {
  id: string;
  name: string;
  quantity: number;
  section: string;
  length: number | null;
  unitVolume: number;
  totalVolume: number;
  status: Status;
}

export type SortableKey = keyof Omit<StructuralPart, 'id' | 'section'>;

export type SortDirection = 'asc' | 'desc';
