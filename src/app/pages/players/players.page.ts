import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonAvatar,
  IonModal,
  IonIcon,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Player, Role } from 'src/app/core/models/Player';
import { SessionService } from 'src/app/core/services/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  standalone: true,
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonAvatar,
    IonModal,
    IonIcon,
    IonSelect,
    IonSelectOption
  ]
})
export class PlayersPage {

  name: string = '';

  modalName: string = '';
  modalRole: Role = 'VERSATIL';
  players: Player[] = [];

  tempPhoto?: string;

  isModalOpen = false;
  editingId?: string;

  roles = [
    { id: 'ACT', label: 'ACTIVO', icon: 'shield-outline' },
    { id: 'PAS', label: 'PASIVO', icon: 'person-outline' },
    { id: 'VER', label: 'VERSATIL', icon: 'flash-outline' }
  ];

  constructor(private session: SessionService, private router: Router) {
    addIcons(icons);
  }

  // ➕ abrir modal (crear nuevo jugador)
  openModal() {
    this.modalName = this.name || '';
    this.modalRole = 'VERSATIL';
    this.tempPhoto = undefined;
    this.editingId = undefined;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalName = '';
    this.modalRole = 'VERSATIL';
    this.tempPhoto = undefined;
    this.editingId = undefined;
  }

  // 📸 tomar foto
  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 70,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      this.tempPhoto = image.dataUrl!;
    } catch (err) {
      console.error('Error cámara:', err);
    }
  }

  savePlayer() {

    if (!this.modalName.trim()) return;

    if (this.editingId) {

      // ✏️ editar
      const index = this.players.findIndex(p => p.id === this.editingId);

      if (index !== -1) {
        this.players[index] = {
          ...this.players[index],
          name: this.modalName,
          role: this.modalRole,
          photo: this.tempPhoto
        };
      }

    } else {

      const newPlayer: Player = {
        id: Date.now().toString(),
        name: this.modalName,
        role: this.modalRole,
        photo: this.tempPhoto
      };

      this.players.push(newPlayer);
    }

    this.name = '';
    this.closeModal();
  }

  editPlayer(player: Player) {
    this.editingId = player.id;
    this.modalName = player.name;
    this.modalRole = player.role ?? 'VERSATIL';
    this.tempPhoto = player.photo;
    this.isModalOpen = true;
  }

  deletePlayer(id: string) {
    this.players = this.players.filter(p => p.id !== id);
  }

  continue() {
    const minPlayers = this.session.getSessionData().game?.minPlayers ?? 0;
    const maxPlayers = this.session.getSessionData().game?.maxPlayers ?? Infinity;

    if (this.players.length < minPlayers) {
      alert(`Mínimo ${minPlayers} jugadores`);
      return;
    }

    if (this.players.length > maxPlayers) {
      alert(`Máximo ${maxPlayers} jugadores`);
      return;
    }

    console.log(this.session.getSessionData());
    this.session.setPlayers(this.players);
    this.router.navigate(['/punishments']);
  }
}