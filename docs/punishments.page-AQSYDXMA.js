import {
  ALTERNATIVE_PUNISHMENTS
} from "./chunk-VIKOPQ5I.js";
import {
  DataService
} from "./chunk-O4QEZBYU.js";
import {
  SessionService,
  addIcons,
  icons_exports
} from "./chunk-FLYVGBRG.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonContent,
  IonIcon,
  NgForOf,
  NgIf,
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
  ɵɵtextInterpolate
} from "./chunk-TJQERPMD.js";
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

// src/app/pages/punishments/punishments.page.ts
function PunishmentsPage_div_7_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 15);
  }
}
function PunishmentsPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function PunishmentsPage_div_7_Template_div_click_0_listener() {
      const opt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleOption(opt_r2));
    });
    \u0275\u0275element(1, "ion-icon", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275template(8, PunishmentsPage_div_7_ion_icon_8_Template, 1, 0, "ion-icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.isSelected(opt_r2));
    \u0275\u0275advance();
    \u0275\u0275property("name", opt_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isSelected(opt_r2));
  }
}
var _PunishmentsPage = class _PunishmentsPage {
  constructor(service, session, router) {
    this.service = service;
    this.session = session;
    this.router = router;
    this.selectedTypes = [];
    this.alternativePunishmentOption = ALTERNATIVE_PUNISHMENTS;
    this.punishments = [];
    this.filteredPunishments = [];
    addIcons(icons_exports);
  }
  ngOnInit() {
    this.service.getPunishmentList().subscribe((p) => {
      this.punishments = p;
    });
  }
  toggleOption(option) {
    const type = option.type;
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes = this.selectedTypes.filter((t) => t !== type);
    } else {
      this.selectedTypes.push(type);
    }
  }
  isSelected(option) {
    return this.selectedTypes.includes(option.type);
  }
  continue() {
    const difficultyMatch = this.session.getSessionData().difficulty?.level;
    const gameMatch = this.session.getSessionData().game?.route;
    const punishmentsDifficulty = this.punishments.filter((p) => difficultyMatch && p.difficultiesIds.includes(difficultyMatch.toString()));
    let punishments;
    if (this.selectedTypes.length === 0) {
      punishments = punishmentsDifficulty;
    } else {
      punishments = punishmentsDifficulty.filter((p) => this.selectedTypes.some((type) => type in p.alternativePunishment));
    }
    this.session.setPunishments(punishments);
    console.log(this.session.getSessionData());
    this.router.navigate(gameMatch ? ["/gameplay/" + gameMatch] : ["/"]);
  }
};
_PunishmentsPage.\u0275fac = function PunishmentsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PunishmentsPage)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(SessionService), \u0275\u0275directiveInject(Router));
};
_PunishmentsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PunishmentsPage, selectors: [["app-punishments"]], decls: 15, vars: 2, consts: [[1, "app-background"], [1, "container"], [1, "title"], [1, "subtitle"], [1, "options"], ["class", "option-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "info-banner-fixed"], ["name", "information-circle-outline"], [1, "fixed-button"], ["expand", "block", 1, "start-button", 3, "click", "disabled"], [1, "option-card", 3, "click"], [1, "option-icon", 3, "name"], [1, "option-content"], [1, "check-indicator"], ["name", "checkmark-circle", 4, "ngIf"], ["name", "checkmark-circle"]], template: function PunishmentsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Tipos de castigo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, " Elige c\xF3mo se reemplazar\xE1n los castigos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275template(7, PunishmentsPage_div_7_Template, 9, 6, "div", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275element(9, "ion-icon", 7);
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Puedes cambiar estas opciones en cualquier momento durante la partida.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "ion-button", 9);
    \u0275\u0275listener("click", function PunishmentsPage_Template_ion_button_click_13_listener() {
      return ctx.continue();
    });
    \u0275\u0275text(14, " Continuar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.alternativePunishmentOption);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.selectedTypes.length === 0);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  IonContent,
  IonButton,
  IonIcon
], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-bottom: 120px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 6px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 24px;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.option-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_fadeInUp 0.4s ease forwards;\n}\n.option-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #ffd700;\n  flex-shrink: 0;\n}\n.option-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.option-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.option-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.check-indicator[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 22px;\n  color: #ff4d6d;\n  display: flex;\n  align-items: center;\n}\n.option-card.selected[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 77, 109, 0.9);\n  box-shadow: 0 0 10px rgba(255, 77, 109, 0.4), 0 0 25px rgba(123, 47, 247, 0.25);\n  transform: scale(1.02);\n}\n.option-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.015);\n}\n.option-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fixed-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n.start-button[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --background-hover:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --background-activated:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  height: 52px;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n.start-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding: 14px 16px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.06),\n      rgba(255, 255, 255, 0.03));\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  animation: _ngcontent-%COMP%_fadeInUp 0.4s ease forwards;\n}\n.info-banner[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #7b2ff7;\n  flex-shrink: 0;\n}\n.info-banner-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(90px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.06),\n      rgba(255, 255, 255, 0.03));\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 10;\n}\n.info-banner-fixed[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #7b2ff7;\n}\n.info-banner-fixed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12.5px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.3;\n}\n/*# sourceMappingURL=punishments.page.css.map */'] });
var PunishmentsPage = _PunishmentsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PunishmentsPage, [{
    type: Component,
    args: [{ selector: "app-punishments", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonButton,
      IonIcon
    ], template: '<ion-content class="app-background">\n\n  <div class="container">\n\n    <h1 class="title">Tipos de castigo</h1>\n\n    <p class="subtitle">\n      Elige c\xF3mo se reemplazar\xE1n los castigos\n    </p>\n\n    <!-- OPTIONS -->\n    <div class="options">\n\n      <div\n        class="option-card"\n        *ngFor="let opt of alternativePunishmentOption"\n        [class.selected]="isSelected(opt)"\n        (click)="toggleOption(opt)"\n      >\n\n        <ion-icon [name]="opt.icon" class="option-icon"></ion-icon>\n\n        <div class="option-content">\n          <h2>{{ opt.label }}</h2>\n          <p>{{ opt.description }}</p>\n        </div>\n\n        <div class="check-indicator">\n          <ion-icon\n            *ngIf="isSelected(opt)"\n            name="checkmark-circle"\n          ></ion-icon>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n<!-- INFO BANNER -->\n<div class="info-banner-fixed">\n  <ion-icon name="information-circle-outline"></ion-icon>\n  <p>Puedes cambiar estas opciones en cualquier momento durante la partida.</p>\n</div>\n\n<!-- BOT\xD3N -->\n<div class="fixed-button">\n  <ion-button\n    expand="block"\n    class="start-button"\n    (click)="continue()"\n    [disabled]="selectedTypes.length === 0"\n  >\n    Continuar\n  </ion-button>\n</div>\n</ion-content>', styles: ['@charset "UTF-8";\n\n/* src/app/pages/punishments/punishments.page.scss */\n.container {\n  padding: 20px;\n  padding-bottom: 120px;\n}\n.title {\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 6px;\n}\n.subtitle {\n  text-align: center;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 24px;\n}\n.options {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.option-card {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: all 0.25s ease;\n  cursor: pointer;\n  animation: fadeInUp 0.4s ease forwards;\n}\n.option-icon {\n  font-size: 26px;\n  color: #ffd700;\n  flex-shrink: 0;\n}\n.option-content {\n  flex: 1;\n}\n.option-content h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.option-content p {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.check-indicator {\n  margin-left: auto;\n  font-size: 22px;\n  color: #ff4d6d;\n  display: flex;\n  align-items: center;\n}\n.option-card.selected {\n  border: 1px solid rgba(255, 77, 109, 0.9);\n  box-shadow: 0 0 10px rgba(255, 77, 109, 0.4), 0 0 25px rgba(123, 47, 247, 0.25);\n  transform: scale(1.02);\n}\n.option-card:hover {\n  transform: scale(1.015);\n}\n.option-card:active {\n  transform: scale(0.98);\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fixed-button {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n.start-button {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --background-hover:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --background-activated:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  height: 52px;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n.start-button[disabled] {\n  opacity: 0.5;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding: 14px 16px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.06),\n      rgba(255, 255, 255, 0.03));\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  animation: fadeInUp 0.4s ease forwards;\n}\n.info-banner ion-icon {\n  font-size: 20px;\n  color: #7b2ff7;\n  flex-shrink: 0;\n}\n.info-banner-fixed {\n  position: fixed;\n  bottom: calc(90px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.06),\n      rgba(255, 255, 255, 0.03));\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 10;\n}\n.info-banner-fixed ion-icon {\n  font-size: 18px;\n  color: #7b2ff7;\n}\n.info-banner-fixed p {\n  margin: 0;\n  font-size: 12.5px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.3;\n}\n/*# sourceMappingURL=punishments.page.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: SessionService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PunishmentsPage, { className: "PunishmentsPage", filePath: "src/app/pages/punishments/punishments.page.ts", lineNumber: 37 });
})();
export {
  PunishmentsPage
};
//# sourceMappingURL=punishments.page-AQSYDXMA.js.map
