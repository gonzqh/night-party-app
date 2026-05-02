export type Direction =
  | 'left'
  | 'right'
  | 'front'
  | 'random'
  | 'self'
  | 'group'
  | 'vote';

export type PunishmentType =
  | 'penalty'
  | 'who_has_more'
  | 'who_has_less'
  | 'challenge'
  | 'question';

export interface Punishment {
  id: string;
  title: string;
  description: string;

  type: PunishmentType;
  direction: Direction;

  minPlayers: number;
  maxPlayers: number;

  difficulties: string[]; // ids

  isSelectable: boolean; // para UI (radio/check)
  category: string; // shots, dinero, físico, etc

  weight?: number; // probabilidad
}