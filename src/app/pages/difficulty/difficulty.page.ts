import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonIcon,
  IonChip,
  IonLabel
} from '@ionic/angular/standalone';
import { Difficulty } from 'src/app/core/models/Difficulty';
import { DataService } from 'src/app/core/services/data';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session';

@Component({
  selector: 'app-difficulty',
  standalone: true,
  templateUrl: './difficulty.page.html',
  styleUrls: ['./difficulty.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonRadioGroup,
    IonRadio,
    IonButton,
    IonIcon
  ]
})
export class DifficultyPage implements OnInit {

  difficulties: Difficulty[] = [];
  selectedLevel?: string;

  constructor(
    private catalog: DataService,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.catalog.getDifficultyList().subscribe(d => this.difficulties = d);
    addIcons(icons);
  }

  select(id: string) {
    this.selectedLevel = id;
  }

  continue() {
    if (!this.selectedLevel) {
      alert('Selecciona una dificultad');
      return;
    }

    this.session.setDifficulty(this.difficulties.find(d => d.id === this.selectedLevel)!);
    console.log(this.session.getSessionData());
    this.router.navigate(['/players']);
  }
}