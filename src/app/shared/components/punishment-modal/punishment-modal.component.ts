import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { IonIcon } from '@ionic/angular/standalone';
import {
  IonModal,
  IonButton
} from '@ionic/angular/standalone';
import { Punishment, PunishmentTarget } from 'src/app/core/models/Punishments';
import { Player } from 'src/app/core/models/Player';
@Component({
  selector: 'app-punishment-modal',
  standalone: true,
  templateUrl: './punishment-modal.component.html',
  styleUrls: ['./punishment-modal.component.scss'],
  imports: [
    CommonModule,
    IonModal,
    IonIcon,
    IonButton
  ]
})
export class PunishmentModalComponent implements OnChanges {
  @Input() isOpen = false;

  @Input() punishment: Punishment | null = null;

  @Input() players: Player[] = [];

  @Input() currentPlayer?: Player;

  @Output() completed =
    new EventEmitter<void>();

  @Output() closed =
    new EventEmitter<void>();

    alternativeIcon: string = "";
    alternativePunishments: [string, string][] = [];
randomPlayerName = '';
  constructor(private alertController: AlertController) {
    console.log("PunishmentModalComponent initialized with punishment:", this.punishment);
  }

  onCompleted() {
    this.completed.emit();
  }

  onClose() {
    this.closed.emit();
  }

  get resolveTarget() {
    let currentIndex = this.players.findIndex(p => p.id === this.currentPlayer?.id) || 0;
    switch (this.punishment?.target) {
      case 'SELF':
        return this.currentPlayer?.name;

      case 'LEFT':
        const left =
          this.players[
          (currentIndex - 1 + this.players.length)
          % this.players.length
          ];
        return left.name;

      case 'RIGHT':
        const right =
          this.players[
          (currentIndex + 1)
          % this.players.length
          ];
        return right.name;

      case 'ALL':
        return 'Todos los jugadores';

      case 'RANDOM':
  return this.randomPlayerName;
      case 'VOTE':
        return 'El jugador más votado por los demás jugadores';
      default:
        return 'El jugador que elijas';
    } 
  }

  getAlternativeIcon(type: string): string {

    switch (type) {

      case 'SHOT':
        return 'beer-outline';

      case 'WEAR':
        return 'shirt-outline';

      case 'MONEY':
        return 'cash-outline';

      default:
        return 'sparkles-outline';
    }
  }
ngOnChanges() {

  this.alternativePunishments =
    this.punishment?.alternativePunishment
      ? Object.entries(this.punishment.alternativePunishment)
      : [];

  if (this.players.length > 0) {

    const random =
      this.players[
      Math.floor(Math.random() * this.players.length)
      ];

    this.randomPlayerName = random.name;
  }
}
}