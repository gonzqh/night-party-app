export interface Game {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  minPlayers: number;
  maxPlayers: number;
  enabled: boolean;
  route: string;
}