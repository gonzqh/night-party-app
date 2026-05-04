import { Player } from "./Player";

export interface GameState {
  currentPlayer: Player;
  dice?: number;
  action?: string;
  punishment?: any;
}

export abstract class GameEngine {

  abstract init(config: {
    players: Player[];
    difficulty: string;
    punishments: any[];
  }): void;

  abstract start(): any;
  abstract executeTurn(): any;
  abstract applyPunishment(): any;
  abstract nextTurn(): void;
}