import { Injectable } from '@angular/core';
import { Difficulty } from '../models/Difficulty';
import { Game } from '../models/Game';
import { Player } from '../models/Player';
import { Punishment } from '../models/Punishments';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  endSession() {
    this.clear();
  }
  private difficulty: Difficulty | undefined;
  private game: Game | undefined;
  private players: Player[] = [];
  private punishments: Punishment[] = [];

  setDifficulty(difficulty: Difficulty) {
    this.difficulty = difficulty;
  }

  setGame(game: Game) {
    this.game = game;
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  setPlayers(players: Player[]) {
    this.players = players;
  }
  
  addPunishment(punishment: Punishment) {
    this.punishments.push(punishment);
  }

  setPunishments(punishments: Punishment[]) {
    this.punishments = punishments;
  }

  clear() {
    this.difficulty = undefined;
    this.game = undefined;
    this.players = [];
    this.punishments = [];
  }

  getSessionData() {
    return {
      difficulty: this.difficulty,
      game: this.game,
      players: this.players,
      punishments: this.punishments,
    };
  }
}
