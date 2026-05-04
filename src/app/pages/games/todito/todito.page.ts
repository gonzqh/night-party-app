/* import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

import { ToditoEngine } from 'src/app/core/models/ToditoEngine';
import { SessionService } from 'src/app/core/services/session';

@Component({
  selector: 'app-todito',
  standalone: true,
  templateUrl: './todito.page.html',
  styleUrls: ['./todito.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonButton,
  ]
})
export class ToditoPage implements OnInit {

  engine!: ToditoEngine;
  state: any;

  isRolling = false;
  showResult = false;
  showDecision = false;

  bannerMessage = '';
  showBanner = false;

  constructor(private gameService: SessionService) {
}

  ngOnInit() {
    this.gameService.initEngine();
    this.engine = this.gameService.getEngine() as ToditoEngine;
    this.state = this.engine.start();
  }

  async rollDice() {
    if (this.isRolling) return;

    this.isRolling = true;
    this.showResult = false;
    this.showDecision = false;

    // ⏳ animación 1.5s
    await new Promise(res => setTimeout(res, 1500));

    this.state = this.engine.executeTurn();

    this.isRolling = false;
    this.showResult = true;

    // auto castigo
    this.state = this.engine.applyPunishment();
    this.showDecision = true;
  }

  resolveDecision(type: 'success' | 'SHOT' | 'WEAR' | 'MONEY') {

    switch (type) {
      case 'success':
        this.bannerMessage = 'Reto cumplido 😎';
        break;
      case 'SHOT':
        this.bannerMessage = this.state.punishment?.alternativePunishment?.SHOT;
        break;
      case 'WEAR':
        this.bannerMessage = this.state.punishment?.alternativePunishment?.WEAR;
        break;
      case 'MONEY':
        this.bannerMessage = this.state.punishment?.alternativePunishment?.MONEY;
        break;
    }

    this.showBanner = true;

    setTimeout(() => {
      this.nextTurn();
      this.showBanner = false;
    }, 2000);
  }

  nextTurn() {
    this.engine.nextTurn();
    this.state = this.engine.start();

    this.showResult = false;
    this.showDecision = false;
  }
} */