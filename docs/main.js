import {
  bootstrapLazy,
  promiseResolve
} from "./chunk-7LNKIQNJ.js";
import {
  Component,
  IonApp,
  IonRouterOutlet2 as IonRouterOutlet,
  IonicRouteStrategy,
  PreloadAllModules,
  RouteReuseStrategy,
  bootstrapApplication,
  enableProdMode,
  provideHttpClient,
  provideIonicAngular,
  provideRouter,
  setClassMetadata,
  withPreloading,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
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

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadComponent: () => import("./home.page-UNPVYK25.js").then((m) => m.HomePage)
  },
  {
    path: "players",
    loadComponent: () => import("./players.page-T5HGHNQK.js").then((m) => m.PlayersPage)
  },
  {
    path: "game-selection",
    loadComponent: () => import("./game-selection.page-NFDWJWHW.js").then((m) => m.GameSelectionPage)
  },
  {
    path: "punishments",
    loadComponent: () => import("./punishments.page-AQSYDXMA.js").then((m) => m.PunishmentsPage)
  },
  {
    path: "difficulty",
    loadComponent: () => import("./difficulty.page-DUO3IIEX.js").then((m) => m.DifficultyPage)
  },
  {
    path: "in-game-settings",
    loadComponent: () => import("./in-game-settings.page-6V3UU34Y.js").then((m) => m.InGameSettingsPage)
  },
  {
    path: "caminitos",
    loadComponent: () => import("./caminitos.page-W5RT2L45.js").then((m) => m.CaminitosPage)
  },
  {
    path: "ludo",
    loadComponent: () => import("./ludo.page-WPIUSPLS.js").then((m) => m.LudoPage)
  },
  {
    path: "shotoreto",
    loadComponent: () => import("./shotoreto.page-FYOB34FZ.js").then((m) => m.ShotoretoPage)
  },
  {
    path: "gameplay/:id",
    loadComponent: () => import("./gameplay.page-IK44Y3SI.js").then((m) => m.GameplayPage)
  }
];

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [IonApp, IonRouterOutlet], template: "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 9 });
})();

// node_modules/@ionic/pwa-elements/dist/esm/loader.js
var patchEsm = () => {
  return promiseResolve();
};
var defineCustomElements = (win, options) => {
  if (typeof window === "undefined") return Promise.resolve();
  return patchEsm().then(() => {
    return bootstrapLazy([["pwa-camera-modal", [[1, "pwa-camera-modal", { "facingMode": [1, "facing-mode"], "hidePicker": [4, "hide-picker"], "present": [64], "dismiss": [64] }]]], ["pwa-action-sheet", [[1, "pwa-action-sheet", { "header": [1], "cancelable": [4], "options": [16], "open": [32] }]]], ["pwa-toast", [[1, "pwa-toast", { "message": [1], "duration": [2], "closing": [32] }]]], ["pwa-camera", [[1, "pwa-camera", { "facingMode": [1, "facing-mode"], "handlePhoto": [16], "hidePicker": [4, "hide-picker"], "handleNoDeviceError": [16], "noDevicesText": [1, "no-devices-text"], "noDevicesButtonText": [1, "no-devices-button-text"], "photo": [32], "photoSrc": [32], "showShutterOverlay": [32], "flashIndex": [32], "hasCamera": [32], "rotation": [32], "deviceError": [32] }]]], ["pwa-camera-modal-instance", [[1, "pwa-camera-modal-instance", { "facingMode": [1, "facing-mode"], "hidePicker": [4, "hide-picker"], "noDevicesText": [1, "no-devices-text"], "noDevicesButtonText": [1, "no-devices-button-text"] }, [[16, "keyup", "handleBackdropKeyUp"]]]]]], options);
  });
};

// src/environments/environment.ts
var environment = {
  production: false
};

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: "ios" }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient()
  ]
});
defineCustomElements(window);
if (environment.production) {
  enableProdMode();
}
//# sourceMappingURL=main.js.map
