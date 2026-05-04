import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

import { DataService } from 'src/app/core/services/data';
import {
  ALTERNATIVE_PUNISHMENTS,
  AlternativePunishmentOption,
  AlternativePunishmentType,
  Punishment
} from 'src/app/core/models/Punishments';
import { SessionService } from 'src/app/core/services/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punishments',
  standalone: true,
  templateUrl: './punishments.page.html',
  styleUrls: ['./punishments.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class PunishmentsPage implements OnInit {

  selectedTypes: AlternativePunishmentType[] = [];
  alternativePunishmentOption = ALTERNATIVE_PUNISHMENTS;
  punishments: Punishment[] = [];
  filteredPunishments: Punishment[] = [];

  constructor(private service: DataService, private session: SessionService, private router: Router) {
    addIcons(icons);
  }

  ngOnInit() {
    this.service.getPunishmentList().subscribe(p => {
      this.punishments = p;
    });
  }

  toggleOption(option: AlternativePunishmentOption) {
    const type = option.type;

    if (this.selectedTypes.includes(type)) {
      this.selectedTypes = this.selectedTypes.filter(t => t !== type);
    } else {
      this.selectedTypes.push(type);
    }
  }

  isSelected(option: AlternativePunishmentOption) {
    return this.selectedTypes.includes(option.type);
  }

  continue() {
    const difficultyMatch = this.session.getSessionData().difficulty;
    const gameMatch = this.session.getSessionData().game?.route;
    const punishments: Punishment[] = this.punishments.filter(p => difficultyMatch && p.difficultiesIds.includes(difficultyMatch.id) &&
      this.selectedTypes.some(type => Object.keys(p.alternativePunishment).includes(type))
    );
    this.session.setPunishments(punishments);
    console.log(this.session.getSessionData());
    this.router.navigate(gameMatch ? ['/game/' + gameMatch] : ['/']);
  }
}