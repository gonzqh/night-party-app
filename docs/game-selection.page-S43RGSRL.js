import {
  DataService
} from "./chunk-YG3QTGI2.js";
import {
  SessionService,
  addIcons,
  icons_exports
} from "./chunk-LWKNLOMK.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonContent,
  IonIcon,
  IonRadio,
  IonRadioGroup,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QISWUEEJ.js";
import "./chunk-5UZFVFDN.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-2WZOUF3G.js";
import "./chunk-PARCMA52.js";
import "./chunk-LKBYLB4C.js";
import "./chunk-Y62B47P5.js";
import "./chunk-6GY55RSK.js";
import "./chunk-7D2IXJO2.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-CK6Z7TRK.js";
import "./chunk-ND3EZUDG.js";
import "./chunk-YAS4LRVC.js";
import "./chunk-FIHNAPU4.js";

// src/app/pages/game-selection/game-selection.page.ts
function GameSelectionPage_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " EN CONSTRUCCI\xD3N ");
    \u0275\u0275elementEnd();
  }
}
function GameSelectionPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function GameSelectionPage_div_5_Template_div_click_0_listener() {
      const game_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(game_r2.enabled && (ctx_r2.selectedGameId = game_r2.id));
    });
    \u0275\u0275template(1, GameSelectionPage_div_5_div_1_Template, 2, 0, "div", 8);
    \u0275\u0275element(2, "ion-radio", 9)(3, "ion-icon", 10);
    \u0275\u0275elementStart(4, "div", 11)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275element(10, "ion-icon", 13);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const game_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", !game_r2.enabled)("selected", ctx_r2.selectedGameId === game_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !game_r2.enabled);
    \u0275\u0275advance();
    \u0275\u0275property("value", game_r2.id)("disabled", !game_r2.enabled);
    \u0275\u0275advance();
    \u0275\u0275property("name", game_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(game_r2.subtitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", game_r2.minPlayers, " - ", game_r2.maxPlayers, " jugadores");
  }
}
var _GameSelectionPage = class _GameSelectionPage {
  constructor(catalog, router, session) {
    this.catalog = catalog;
    this.router = router;
    this.session = session;
    this.games = [];
    addIcons(icons_exports);
  }
  ngOnInit() {
    this.catalog.getGameList().subscribe((g) => this.games = g);
  }
  continue() {
    if (!this.selectedGameId) {
      alert("Selecciona un juego");
      return;
    }
    this.session.setGame(this.games.find((g) => g.id === this.selectedGameId));
    console.log(this.session.getSessionData());
    this.router.navigate(["/difficulty"]);
  }
};
_GameSelectionPage.\u0275fac = function GameSelectionPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GameSelectionPage)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SessionService));
};
_GameSelectionPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameSelectionPage, selectors: [["app-game-selection"]], decls: 9, vars: 3, consts: [[1, "app-background"], [1, "container"], [1, "title"], [3, "ngModelChange", "ngModel"], ["class", "game-card", 3, "disabled", "selected", "click", 4, "ngFor", "ngForOf"], [1, "fixed-button"], ["expand", "block", 1, "start-button", 3, "click", "disabled"], [1, "game-card", 3, "click"], ["class", "ribbon", 4, "ngIf"], [1, "radio-top", 3, "value", "disabled"], [1, "game-icon", 3, "name"], [1, "game-content"], [1, "players"], ["name", "people-outline"], [1, "ribbon"]], template: function GameSelectionPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Selecciona un juego");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-radio-group", 3);
    \u0275\u0275twoWayListener("ngModelChange", function GameSelectionPage_Template_ion_radio_group_ngModelChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedGameId, $event) || (ctx.selectedGameId = $event);
      return $event;
    });
    \u0275\u0275template(5, GameSelectionPage_div_5_Template, 13, 12, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "ion-button", 6);
    \u0275\u0275listener("click", function GameSelectionPage_Template_ion_button_click_7_listener() {
      return ctx.continue();
    });
    \u0275\u0275text(8, " Continuar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedGameId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.games);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.selectedGameId);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  IonContent,
  IonRadio,
  IonRadioGroup,
  IonButton,
  IonIcon,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-bottom: 120px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n}\n.game-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding: 16px 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: all 0.25s ease;\n}\n.game-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.game-card.selected[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 77, 109, 0.9);\n  box-shadow:\n    0 0 0 1px rgba(255, 77, 109, 0.2),\n    0 0 20px rgba(255, 77, 109, 0.35),\n    0 0 40px rgba(123, 47, 247, 0.25);\n  transform: scale(1.02);\n}\n.game-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.game-card.selected[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 18px;\n  animation: pulseGlow 1.2s ease-out;\n}\n.game-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #ffd700;\n  flex-shrink: 0;\n}\n.game-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.game-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.players[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.85);\n}\n.radio-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  transform: scale(1.1);\n}\n.game-card[_ngcontent-%COMP%]   ion-radio.radio-checked[_ngcontent-%COMP%] {\n  --color-checked: #ff4d6d;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  pointer-events: none;\n  filter: grayscale(0.3);\n}\n.ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25px;\n  left: -55px;\n  background: #ffd700;\n  color: #000;\n  font-size: 8px;\n  font-weight: 800;\n  padding: 4px 50px;\n  transform: rotate(-45deg);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n  z-index: 2;\n  pointer-events: none;\n}\n.fixed-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n.start-button[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  font-weight: 700;\n  font-size: 18px;\n  height: 50px;\n}\n.game-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.35s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  filter: grayscale(0.4);\n  pointer-events: none;\n}\n/*# sourceMappingURL=game-selection.page.css.map */'] });
var GameSelectionPage = _GameSelectionPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameSelectionPage, [{
    type: Component,
    args: [{ selector: "app-game-selection", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonRadio,
      IonRadioGroup,
      IonButton,
      IonIcon,
      FormsModule
    ], template: '<ion-content class="app-background">\n  <div class="container">\n\n    <h1 class="title">Selecciona un juego</h1>\n\n    <ion-radio-group [(ngModel)]="selectedGameId">\n\n      <div class="game-card" *ngFor="let game of games" [class.disabled]="!game.enabled"\n        [class.selected]="selectedGameId === game.id" (click)="game.enabled && (selectedGameId = game.id)">\n\n        <!-- CINTA EN CONSTRUCCI\xD3N -->\n        <div *ngIf="!game.enabled" class="ribbon">\n          EN CONSTRUCCI\xD3N\n        </div>\n\n        <!-- RADIO TOP RIGHT -->\n        <ion-radio class="radio-top" [value]="game.id" [disabled]="!game.enabled"></ion-radio>\n\n        <!-- ICONO -->\n        <ion-icon [name]="game.icon" class="game-icon"></ion-icon>\n\n        <!-- CONTENIDO -->\n        <div class="game-content">\n          <h2>{{ game.title }}</h2>\n          <p>{{ game.subtitle }}</p>\n\n          <div class="players">\n            <ion-icon name="people-outline"></ion-icon>\n            <span>{{ game.minPlayers }} - {{ game.maxPlayers }} jugadores</span>\n          </div>\n        </div>\n\n      </div>\n\n    </ion-radio-group>\n\n  </div>\n\n  <!-- BOT\xD3N FIJO -->\n  <div class="fixed-button">\n    <ion-button expand="block" class="start-button" (click)="continue()" [disabled]="!selectedGameId">\n      Continuar\n    </ion-button>\n  </div>\n</ion-content>', styles: ['@charset "UTF-8";\n\n/* src/app/pages/game-selection/game-selection.page.scss */\n.container {\n  padding: 20px;\n  padding-bottom: 120px;\n}\n.title {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n}\n.game-card {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding: 16px 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: all 0.25s ease;\n}\n.game-card:active {\n  transform: scale(0.98);\n}\n.game-card.selected {\n  border: 1px solid rgba(255, 77, 109, 0.9);\n  box-shadow:\n    0 0 0 1px rgba(255, 77, 109, 0.2),\n    0 0 20px rgba(255, 77, 109, 0.35),\n    0 0 40px rgba(123, 47, 247, 0.25);\n  transform: scale(1.02);\n}\n.game-card:active {\n  transform: scale(0.98);\n}\n.game-card.selected::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 18px;\n  animation: pulseGlow 1.2s ease-out;\n}\n.game-icon {\n  font-size: 26px;\n  color: #ffd700;\n  flex-shrink: 0;\n}\n.game-content h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.game-content p {\n  margin: 4px 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.players {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.85);\n}\n.radio-top {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  transform: scale(1.1);\n}\n.game-card ion-radio.radio-checked {\n  --color-checked: #ff4d6d;\n}\n.disabled {\n  opacity: 0.45;\n  pointer-events: none;\n  filter: grayscale(0.3);\n}\n.ribbon {\n  position: absolute;\n  top: 25px;\n  left: -55px;\n  background: #ffd700;\n  color: #000;\n  font-size: 8px;\n  font-weight: 800;\n  padding: 4px 50px;\n  transform: rotate(-45deg);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n  z-index: 2;\n  pointer-events: none;\n}\n.fixed-button {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n.start-button {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  font-weight: 700;\n  font-size: 18px;\n  height: 50px;\n}\n.game-card {\n  animation: fadeInUp 0.35s ease forwards;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.disabled {\n  opacity: 0.35;\n  filter: grayscale(0.4);\n  pointer-events: none;\n}\n/*# sourceMappingURL=game-selection.page.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }, { type: SessionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameSelectionPage, { className: "GameSelectionPage", filePath: "src/app/pages/game-selection/game-selection.page.ts", lineNumber: 41 });
})();
export {
  GameSelectionPage
};
//# sourceMappingURL=game-selection.page-S43RGSRL.js.map
