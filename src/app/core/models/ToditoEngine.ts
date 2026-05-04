import { GameEngine } from "./GameEngine";
import { Player } from "./Player";

export class ToditoEngine extends GameEngine {

  private players: Player[] = [];
  private punishments: any[] = [];
  private difficulty!: string;

  private currentIndex = 0;
  private currentState: any;

  init(config: {
    players: Player[];
    difficulty: string;
    punishments: any[];
  }) {
    this.players = config.players;
    this.punishments = config.punishments;
    this.difficulty = config.difficulty;
  }

  start() {
    const player = this.players[this.currentIndex];

    this.currentState = {
      currentPlayer: player
    };

    return this.currentState;
  }

  executeTurn() {
    const dice = Math.floor(Math.random() * 6) + 1;

    this.currentState = {
      ...this.currentState,
      dice,
      action: this.resolveAction(dice)
    };

    return this.currentState;
  }

  applyPunishment() {
    const punishment =
      this.punishments[
        Math.floor(Math.random() * this.punishments.length)
      ];

    this.currentState = {
      ...this.currentState,
      punishment
    };

    return this.currentState;
  }

  nextTurn() {
    this.currentIndex =
      (this.currentIndex + 1) % this.players.length;
  }

  private resolveAction(dice: number) {
    switch (dice) {
      case 1: return 'Todos toman';
      case 2: return 'Izquierda decide';
      case 3: return 'Derecha decide';
      case 4: return 'Castigo';
      case 5: return 'Reto grupal';
      case 6: return 'Te salvas';
      default: return '';
    }
  }
}