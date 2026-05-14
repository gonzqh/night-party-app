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
  IonButton,
  IonCard,
  IonContent,
  IonIcon,
  IonList,
  NgForOf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/pages/home/home.page.ts
function HomePage_ion_card_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-card", 7)(1, "div", 8);
    \u0275\u0275element(2, "ion-icon", 9);
    \u0275\u0275elementStart(3, "div", 10)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("name", item_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.text);
  }
}
var _HomePage = class _HomePage {
  constructor(dataService, router, session) {
    this.dataService = dataService;
    this.router = router;
    this.session = session;
    this.instructions = [];
    addIcons(icons_exports);
  }
  ngOnInit() {
    this.loadInstructions();
  }
  loadInstructions() {
    this.dataService.getInstructions().subscribe((data) => {
      this.instructions = data;
    });
  }
  startGame() {
    this.session.clear();
    this.router.navigate(["/game-selection"]);
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SessionService));
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], decls: 9, vars: 1, consts: [[1, "app-background"], [1, "container"], [1, "title"], ["lines", "none", 1, "transparent-list"], ["class", "instruction-card", 4, "ngFor", "ngForOf"], [1, "fixed-button"], ["expand", "block", 1, "start-button", 3, "click"], [1, "instruction-card"], [1, "card-row"], [1, "instruction-icon", 3, "name"], [1, "text-content"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, "\xBFC\xF3mo jugar?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-list", 3);
    \u0275\u0275template(5, HomePage_ion_card_5_Template, 8, 3, "ion-card", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "ion-button", 6);
    \u0275\u0275listener("click", function HomePage_Template_ion_button_click_7_listener() {
      return ctx.startGame();
    });
    \u0275\u0275text(8, " Crear partida ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.instructions);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  IonContent,
  IonList,
  IonButton,
  IonIcon,
  IonCard
], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-bottom: 100px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 28px;\n  font-weight: 700;\n}\n.transparent-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.instruction-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.card-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n}\n.instruction-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ffd700;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.text-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n}\n.text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.85);\n  margin-top: 4px;\n  margin-bottom: 2px;\n}\n.footer[_ngcontent-%COMP%] {\n  padding: 10px;\n  --background: transparent !important;\n  background: transparent !important;\n  box-shadow: none;\n}\n.start-button[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7) !important;\n  --background-hover:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --background-activated:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  font-weight: 700;\n  font-size: 18px;\n  height: 50px;\n}\n.instruction-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.4s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fixed-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=home.page.css.map */'] });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ standalone: true, selector: "app-home", imports: [
      CommonModule,
      IonContent,
      IonList,
      IonButton,
      IonIcon,
      IonCard
    ], template: '<ion-content class="app-background">\n\n  <div class="container">\n\n    <h1 class="title">\xBFC\xF3mo jugar?</h1>\n\n    <ion-list lines="none" class="transparent-list">\n\n      <ion-card *ngFor="let item of instructions" class="instruction-card">\n\n        <div class="card-row">\n\n          <ion-icon \n            [name]="item.icon" \n            class="instruction-icon">\n          </ion-icon>\n\n          <div class="text-content">\n            <h2>{{ item.title }}</h2>\n            <p>{{ item.text }}</p>\n          </div>\n\n        </div>\n\n      </ion-card>\n\n    </ion-list>\n\n  </div>\n\n   <div class="fixed-button">\n    <ion-button expand="block" class="start-button" (click)="startGame()">\n      Crear partida\n    </ion-button>\n  </div>\n\n</ion-content>', styles: ['@charset "UTF-8";\n\n/* src/app/pages/home/home.page.scss */\n.container {\n  padding: 20px;\n  padding-bottom: 100px;\n}\n.title {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 28px;\n  font-weight: 700;\n}\n.transparent-list {\n  background: transparent;\n}\n.instruction-card {\n  margin-bottom: 16px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.08),\n      rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.card-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n}\n.instruction-icon {\n  font-size: 24px;\n  color: #ffd700;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.text-content h2 {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n}\n.text-content p {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.85);\n  margin-top: 4px;\n  margin-bottom: 2px;\n}\n.footer {\n  padding: 10px;\n  --background: transparent !important;\n  background: transparent !important;\n  box-shadow: none;\n}\n.start-button {\n  --background:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7) !important;\n  --background-hover:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --background-activated:\n    linear-gradient(\n      135deg,\n      #ff4d6d,\n      #7b2ff7);\n  --border-radius: 16px;\n  font-weight: 700;\n  font-size: 18px;\n  height: 50px;\n}\n.instruction-card {\n  animation: fadeInUp 0.4s ease forwards;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fixed-button {\n  position: fixed;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  left: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=home.page.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }, { type: SessionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/home/home.page.ts", lineNumber: 34 });
})();
export {
  HomePage
};
//# sourceMappingURL=home.page-VT3S5CGI.js.map
