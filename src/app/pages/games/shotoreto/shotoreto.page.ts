import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-shotoreto',
  templateUrl: './shotoreto.page.html',
  styleUrls: ['./shotoreto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ShotoretoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
