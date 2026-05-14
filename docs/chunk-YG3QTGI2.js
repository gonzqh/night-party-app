import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QISWUEEJ.js";

// src/app/core/services/data.ts
var _DataService = class _DataService {
  constructor(http) {
    this.http = http;
  }
  getInstructions() {
    return this.http.get("assets/game-data/instructions.json");
  }
  getGameList() {
    return this.http.get("assets/game-data/games.json");
  }
  getDifficultyList() {
    return this.http.get("assets/game-data/difficulties.json");
  }
  getPunishmentList() {
    return this.http.get("assets/game-data/punishments.json");
  }
  getAlternativePunishments() {
    return this.http.get("assets/game-data/punishments.json");
  }
};
_DataService.\u0275fac = function DataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataService)(\u0275\u0275inject(HttpClient));
};
_DataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
var DataService = _DataService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  DataService
};
//# sourceMappingURL=chunk-YG3QTGI2.js.map
