import {
  isPlatformBrowser
} from "./chunk-5ZWV2562.js";
import {
  DOCUMENT,
  Inject,
  Injectable,
  PLATFORM_ID,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/core/services/browser-context.service.ts
var BrowserContextService = class _BrowserContextService {
  document;
  platformId;
  constructor(document, platformId) {
    this.document = document;
    this.platformId = platformId;
  }
  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  getCurrentUrl() {
    if (!this.isBrowser()) {
      return "";
    }
    return this.document.defaultView?.location.href ?? "";
  }
  static \u0275fac = function BrowserContextService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserContextService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrowserContextService, factory: _BrowserContextService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

export {
  BrowserContextService
};
//# sourceMappingURL=chunk-IDDMDBGC.js.map
