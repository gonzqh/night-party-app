import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instruction } from '../models/Instructions';
import { Game } from '../models/Game';
import { Difficulty } from '../models/Difficulty';
import { Punishment } from '../models/Punishments';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getInstructions(): Observable<Instruction[]> {
    return this.http.get<Instruction[]>('assets/game-data/instructions.json');
  }

  getGameList(): Observable<Game[]> {
    return this.http.get<Game[]>('assets/game-data/games.json');
  }

  getDifficultyList(): Observable<Difficulty[]> {
    return this.http.get<Difficulty[]>('assets/game-data/difficulties.json');
  }

  getPunishmentList(): Observable<Punishment[]> {
    return this.http.get<Punishment[]>('assets/game-data/punishments.json');
  }
  
  getAlternativePunishments(): Observable<Punishment[]> {
    return this.http.get<Punishment[]>('assets/game-data/punishments.json');
  }
}