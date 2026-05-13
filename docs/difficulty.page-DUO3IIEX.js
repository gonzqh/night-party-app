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
  IonRadio,
  IonRadioGroup,
  NgControlStatus,
  NgForOf,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/pages/difficulty/difficulty.page.ts
function DifficultyPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function DifficultyPage_div_5_Template_div_click_0_listener() {
      const level_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLevel = level_r2.id);
    });
    \u0275\u0275element(1, "ion-radio", 8)(2, "ion-icon", 9);
    \u0275\u0275elementStart(3, "div", 10)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedLevel === level_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("name", level_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(level_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Nivel ", level_r2.level, " ");
  }
}
var _DifficultyPage = class _DifficultyPage {
  constructor(catalog, router, session) {
    this.catalog = catalog;
    this.router = router;
    this.session = session;
    this.difficulties = [];
  }
  ngOnInit() {
    this.catalog.getDifficultyList().subscribe((d) => this.difficulties = d);
    addIcons(icons_exports);
  }
  select(id) {
    this.selectedLevel = id;
  }
  continue() {
    if (!this.selectedLevel) {
      alert("Selecciona una dificultad");
      return;
    }
    this.session.setDifficulty(this.difficulties.find((d) => d.id === this.selectedLevel));
    console.log(this.session.getSessionData());
    this.router.navigate(["/players"]);
  }
};
_DifficultyPage.\u0275fac = function DifficultyPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DifficultyPage)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SessionService));
};
_DifficultyPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DifficultyPage, selectors: [["app-difficulty"]], decls: 9, vars: 3, consts: [[1, "app-background"], [1, "container"], [1, "title"], [3, "ngModelChange", "ngModel"], ["class", "difficulty-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "fixed-button"], ["expand", "block", 1, "start-button", 3, "click", "disabled"], [1, "difficulty-card", 3, "click"], [1, "radio-top", 3, "value"], [1, "difficulty-icon", 3, "name"], [1, "difficulty-content"], [1, "level-badge"]], template: function DifficultyPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Selecciona la dificultad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-radio-group", 3);
    \u0275\u0275twoWayListener("ngModelChange", function DifficultyPage_Template_ion_radio_group_ngModelChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedLevel, $event) || (ctx.selectedLevel = $event);
      return $event;
    });
    \u0275\u0275template(5, DifficultyPage_div_5_Template, 10, 7, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "ion-button", 6);
    \u0275\u0275listener("click", function DifficultyPage_Template_ion_button_click_7_listener() {
      return ctx.continue();
    });
    \u0275\u0275text(8, " Continuar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedLevel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.difficulties);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.selectedLevel);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonContent,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonIcon
], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-bottom: 120px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n}\n.difficulty-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  padding: 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: all 0.25s ease;\n}\n.difficulty-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #ffd700;\n  flex-shrink: 0;\n}\n.difficulty-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.difficulty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.3;\n}\n.level-badge[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.85);\n}\n.radio-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  transform: scale(1.1);\n}\n.difficulty-card.selected[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 77, 109, 0.9);\n  box-shadow: 0 0 20px rgba(255, 77, 109, 0.35), 0 0 40px rgba(123, 47, 247, 0.2);\n  transform: scale(1.02);\n}\n.difficulty-card.selected[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 18px;\n  animation: _ngcontent-%COMP%_pulseGlow 1.1s ease-out;\n}\n@keyframes _ngcontent-%COMP%_pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 77, 109, 0.4);\n  }\n  100% {\n    box-shadow: 0 0 0 18px rgba(255, 77, 109, 0);\n  }\n}\n.difficulty-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.fixed-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n.start-button[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  font-weight: 700;\n  font-size: 18px;\n  height: 50px;\n}\n/*# sourceMappingURL=difficulty.page.css.map */'] });
var DifficultyPage = _DifficultyPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DifficultyPage, [{
    type: Component,
    args: [{ selector: "app-difficulty", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonRadioGroup,
      IonRadio,
      IonButton,
      IonIcon
    ], template: '<ion-content class="app-background">\n\n  <div class="container">\n\n    <h1 class="title">Selecciona la dificultad</h1>\n\n    <ion-radio-group [(ngModel)]="selectedLevel">\n\n      <div\n        class="difficulty-card"\n        *ngFor="let level of difficulties"\n        [class.selected]="selectedLevel === level.id"\n        (click)="selectedLevel = level.id"\n      >\n\n        <!-- RADIO -->\n        <ion-radio\n          class="radio-top"\n          [value]="level.id"\n        ></ion-radio>\n\n        <!-- ICONO -->\n        <ion-icon [name]="level.icon" class="difficulty-icon"></ion-icon>\n\n        <!-- CONTENIDO -->\n        <div class="difficulty-content" >\n          <h2>{{ level.title }}</h2>\n          <p>{{ level.description }}</p>\n\n          <div class="level-badge">\n            Nivel {{ level.level }}\n          </div>\n        </div>\n\n      </div>\n\n    </ion-radio-group>\n\n  </div>\n\n  <!-- BOT\xD3N -->\n  <div class="fixed-button">\n    <ion-button\n      expand="block"\n      class="start-button"\n      (click)="continue()"\n      [disabled]="!selectedLevel"\n    >\n      Continuar\n    </ion-button>\n  </div>\n\n</ion-content>', styles: ['@charset "UTF-8";\n\n/* src/app/pages/difficulty/difficulty.page.scss */\n.container {\n  padding: 20px;\n  padding-bottom: 120px;\n}\n.title {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n}\n.difficulty-card {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  padding: 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: all 0.25s ease;\n}\n.difficulty-icon {\n  font-size: 28px;\n  color: #ffd700;\n  flex-shrink: 0;\n}\n.difficulty-content h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.difficulty-content p {\n  margin: 6px 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.3;\n}\n.level-badge {\n  margin-top: 6px;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.85);\n}\n.radio-top {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  transform: scale(1.1);\n}\n.difficulty-card.selected {\n  border: 1px solid rgba(255, 77, 109, 0.9);\n  box-shadow: 0 0 20px rgba(255, 77, 109, 0.35), 0 0 40px rgba(123, 47, 247, 0.2);\n  transform: scale(1.02);\n}\n.difficulty-card.selected::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 18px;\n  animation: pulseGlow 1.1s ease-out;\n}\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 77, 109, 0.4);\n  }\n  100% {\n    box-shadow: 0 0 0 18px rgba(255, 77, 109, 0);\n  }\n}\n.difficulty-card:active {\n  transform: scale(0.98);\n}\n.fixed-button {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n.start-button {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  font-weight: 700;\n  font-size: 18px;\n  height: 50px;\n}\n/*# sourceMappingURL=difficulty.page.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }, { type: SessionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DifficultyPage, { className: "DifficultyPage", filePath: "src/app/pages/difficulty/difficulty.page.ts", lineNumber: 39 });
})();
export {
  DifficultyPage
};
//# sourceMappingURL=difficulty.page-DUO3IIEX.js.map
