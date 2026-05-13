export interface Punishment {
  id: string;
  title: string;
  description: string;
  minPlayers: number;
  icon?: string;
  maxPlayers: number;
  difficultiesIds: string[];
  alternativePunishment: Record<AlternativePunishmentType, string>;
  target: PunishmentTarget;
}

export type PunishmentTarget =
  | ''
  | 'LEFT'
  | 'RIGHT'
  | 'ALL'
  | 'RANDOM'
  | 'SELF'
  | 'VOTE'
  | 'CHOICE';

export type AlternativePunishmentType = 'SHOT' | 'WEAR' | 'MONEY' | 'ACTION';

export interface AlternativePunishmentOption {
  type: AlternativePunishmentType;
  label: string;
  description: string;
  icon: string;
}

export const ALTERNATIVE_PUNISHMENTS: AlternativePunishmentOption[] = [
  {
    type: 'SHOT',
    label: 'Shots',
    description: 'No lo haces, lo bebes. Cada error suma, cada ronda pesa más… y el control empieza a desaparecer.',
    icon: 'wine-outline'
  },
  {
    type: 'WEAR',
    label: 'Quita prendas',
    description: 'Te equivocas, te quitas una prenda. Fácil. El problema es cuando ya no queda mucho que quitar…',
    icon: 'shirt-outline'
  },
  {
    type: 'MONEY',
    label: 'Fondo común',
    description: 'Pagas para evitarlo… pero ese dinero vuelve en más alcohol. Nadie se salva, solo se retrasa.',
    icon: 'cash-outline'
  },
  {
    type: 'ACTION',
    label: 'Reto',
    description: 'Si no quieres beber, ni quitarte ropa, ni pagar, tendrás que cumplir un reto. ¿Te animas a descubrirlo?',
    icon: 'body-outline'
  }
];