import { Player } from "./Player";

export interface GameSetup {
  gameId: string;
  players: Player[];
  selectedPunishments: string[]; // ids
  difficultyId: string;
}