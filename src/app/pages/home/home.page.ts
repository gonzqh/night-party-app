import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

import {
  IonContent,
  IonList,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { Instruction } from 'src/app/core/models/Instructions';
import { DataService } from 'src/app/core/services/data';

import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
import { SessionService } from 'src/app/core/services/session';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonList,
    IonButton,
    IonIcon,
    IonCard
  ]
})
export class HomePage implements OnInit {

  instructions: Instruction[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private session: SessionService
  ) {
    addIcons(icons);
  }

  ngOnInit() {
    this.loadInstructions();
  }

  loadInstructions() {
    this.dataService.getInstructions().subscribe(data => {
      this.instructions = data;
    });
  }

  public startGame() {
    this.session.clear();
    this.router.navigate(['/game-selection']);
  }
}