import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

import {
  IonContent,
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

import { ToditoPage } from '../games/todito/todito.page';
import { SessionService } from 'src/app/core/services/session';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  templateUrl: './gameplay.page.html',
  styleUrls: ['./gameplay.page.scss'],
  imports: [CommonModule, IonContent, IonButton, IonIcon, ToditoPage, IonHeader, IonToolbar, IonTitle, IonButtons]
})
export class GameplayPage implements OnInit {

  gameId = '';

  constructor(
    private router: Router,
  private navCtrl: NavController,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private sessionService: SessionService
  ) {
    addIcons(icons);
  }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('id') || '';
    console.log('Game ID:', this.gameId);
  }

  async confirmExit() {
    const alert = await this.alertCtrl.create({
      header: 'Salir del juego',
      message: '¿Seguro que quieres salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salir',
          handler: () => {
            this.sessionService.endSession();
            this.navCtrl.navigateRoot('/home');
          }
        }
      ]
    });

    await alert.present();
  }

  openSuggestions() {
    this.router.navigate(['/suggestions']);
  }

  openSettings() {
    console.log('Abrir settings (pendiente)');
  }
}