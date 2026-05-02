import { GameSession } from "./GameSession";
import { TurnResult } from "./TurnResult";

export interface GameEngine {
  nextTurn(session: GameSession): TurnResult;
}