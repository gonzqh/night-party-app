import { GameSetup } from "./GameSetup";
import { TurnResult } from "./TurnResult";

export interface GameSession {
  setup: GameSetup;

  currentRound: number;
  currentTurnPlayerId: string | null;

  history: TurnResult[];

  status: 'idle' | 'playing' | 'paused' | 'finished';
}