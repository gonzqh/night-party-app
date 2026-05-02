import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-in-game-settings',
  templateUrl: './in-game-settings.page.html',
  styleUrls: ['./in-game-settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InGameSettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
