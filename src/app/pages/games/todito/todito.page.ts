import {
    Component, QueryList,
    ViewChildren,
    ElementRef,
    OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController, NavController } from '@ionic/angular';
import {
    IonButton,
    IonIcon,
    IonModal
} from '@ionic/angular/standalone';
import { ALTERNATIVE_PUNISHMENTS, AlternativePunishmentOption, PunishmentTarget } from 'src/app/core/models/Punishments';
import { PunishmentModalComponent } from 'src/app/shared/components/punishment-modal/punishment-modal.component';
import { SessionService } from 'src/app/core/services/session';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-todito',
    standalone: true,
    templateUrl: './todito.page.html',
    styleUrls: ['./todito.page.scss'],
    imports: [
        CommonModule,
        IonIcon,
        PunishmentModalComponent
    ]
})
export class ToditoPage implements OnInit {

    @ViewChildren('playerCard')
    playerCards!: QueryList<ElementRef>;

    diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

    selectedPunishmentType?: string;

    showPunishmentModal = false;
    //showConfirmModal = false;

    selectedPunishment: any = null;

    resultText = '';
    affectedPlayersText = '';
    punishmentTarget: PunishmentTarget = '';

    currentIndex = 0;

    dice?: number;
    isRolling = false;
    game: any = null;

    constructor(private gameplayService: SessionService, private alertController: AlertController,
        private router: Router

    ) { }

    ngOnInit() {
        this.game = this.gameplayService.getSessionData();
        console.log(this.game);
        if (!this.game || !this.game.players || !this.game.punishments || this.game.players.length === 0 || this.game.punishments.length === 0) {
            // Manejar el caso donde no hay datos de juego disponibles
            console.error('No se encontraron datos de juego en la sesión.');
            this.alertController.create({
                header: 'Error',
                message: 'No se encontraron datos de juego. Volviendo al inicio.',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            this.navigateToHome();
                        }
                    }
                ]
            }).then(alert => alert.present());
        }
    }

    navigateToHome() {
        window.location.href =
    window.location.origin + '/home';
    }


    get getPunishemntTypes() {
        return ALTERNATIVE_PUNISHMENTS.filter(p => this.game.punishments.some((gp: any) => gp.type === p.type));
    }

    get currentPlayer() {
        return this.game.players[this.currentIndex];
    }

    async rollDice() {

        if (this.isRolling) return;

        this.resetRound();

        this.isRolling = true;

        for (let i = 0; i < 12; i++) {

            this.dice = Math.floor(Math.random() * 6) + 1;

            await new Promise(r => setTimeout(r, 80));
        }

        this.isRolling = false;

        this.resolveDice();
    }

    resolveDice() {

        switch (this.dice) {

            case 1:
            case 5:
                this.resultText = 'Elige un castigo para ti 😈';
                this.punishmentTarget = 'SELF';
                break;

            case 2:
            case 6:
                this.resultText = 'Castiga a quien elijas 👀';
                this.punishmentTarget = 'CHOICE';
                break;

            case 3:
                this.resultText = 'Castiga al jugador de la derecha 👉';
                this.punishmentTarget = 'RIGHT';
                break;

            case 4:
                this.resultText = 'Castiga al jugador de la izquierda 👈';
                this.punishmentTarget = 'LEFT';
                break;
        }
    }

    selectPunishmentType(type: string) {
        this.selectedPunishmentType = type;
        const filtered = this.game.punishments.filter(
            (p: any) => p.type === type && (p.target === this.punishmentTarget)
        );
        const random =
            filtered[Math.floor(Math.random() * filtered.length)];
        this.selectedPunishment = random;
        this.showPunishmentModal = true;
    }

    completedChallenge() {
        this.showPunishmentModal = false;
        this.confirmCompleted();
    }

    async confirmarSalida() {
        const alert = await this.alertController.create({
            header: 'Completar Castigo',
            message: '¿Se completo el castigo?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                },
                {
                    text: 'Sí',
                    handler: () => {
                        this.completedChallenge();
                    },
                },
            ],
        });

        await alert.present();
    }

    confirmCompleted() {
        this.nextTurn();
    }

    nextTurn() {

        this.currentIndex =
            (this.currentIndex + 1)
            % this.game.players.length;


        this.resetRound();
        setTimeout(() => {
            this.scrollToCurrentPlayer();
        }, 100);
    }

    resetRound() {

        this.selectedPunishmentType = undefined;
        this.selectedPunishment = null;
        this.resultText = '';
        this.affectedPlayersText = '';
    }

    getDiceFace() {

        if (!this.dice) return '🎲';

        return this.diceFaces[this.dice - 1];
    }

    scrollToCurrentPlayer() {

        const element =
            this.playerCards.get(this.currentIndex);

        if (!element) return;

        element.nativeElement.scrollIntoView({

            behavior: 'smooth',

            inline: 'center',

            block: 'nearest'

        });
    }


}