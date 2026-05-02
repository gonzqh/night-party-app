export interface Game {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  minPlayers: number;
  maxPlayers: number;
  difficulties: string[]; // ids
}