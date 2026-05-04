export interface Player {
  id: string;
  name: string;
  photo?: string;
  role?: Role;
}

export type Role = 'ACTIVO' | 'PASIVO' | 'VERSATIL';