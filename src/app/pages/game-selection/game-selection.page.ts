import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonButton,
  IonIcon,
  IonCard
} from '@ionic/angular/standalone';
import { Game } from 'src/app/core/models/Game';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/core/services/data';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
import { SessionService } from 'src/app/core/services/session';

@Component({
  selector: 'app-game-selection',
  standalone: true,
  templateUrl: './game-selection.page.html',
  styleUrls: ['./game-selection.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonRadio,
    IonRadioGroup,
    IonButton,
    IonIcon,
    FormsModule
  ]
})
export class GameSelectionPage implements OnInit {
  games: Game[] = [];
  selectedGameId?: string;

  constructor(
    private catalog: DataService,
    private router: Router,
    private session: SessionService) {
    addIcons(icons);
  }

  ngOnInit() {
    this.catalog.getGameList().subscribe(g => this.games = g);
  }

  continue() {
    if (!this.selectedGameId) {
      alert('Selecciona un juego');
      return;
    }
    this.session.setGame(this.games.find(g => g.id === this.selectedGameId)!);
    console.log(this.session.getSessionData());
    this.router.navigate(['/difficulty']);
  }
}