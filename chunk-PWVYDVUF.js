import {
  BehaviorSubject,
  DOCUMENT,
  Inject,
  Injectable,
  Subject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/services/cookie-consent.service.ts
var CookieConsentService = class _CookieConsentService {
  document;
  storageKey = "site-cookie-consent-v2";
  legacyStorageKey = "cookie-consent";
  cookieName = "site_cookie_consent";
  consentVersion = 2;
  consentMaxAgeSeconds = 60 * 60 * 24 * 180;
  consentSubject = new BehaviorSubject(null);
  preferencesRequestSubject = new Subject();
  constructor(document) {
    this.document = document;
    this.consentSubject.next(this.readStoredConsent());
  }
  getConsent() {
    return this.consentSubject.value;
  }
  getConsent$() {
    return this.consentSubject.asObservable();
  }
  getPreferencesRequests$() {
    return this.preferencesRequestSubject.asObservable();
  }
  hasAnalyticsConsent() {
    return this.consentSubject.value?.analytics === true;
  }
  requestPreferences() {
    this.preferencesRequestSubject.next();
  }
  saveConsent(preferences) {
    const consent = {
      version: this.consentVersion,
      analytics: preferences.analytics,
      decidedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const serializedConsent = JSON.stringify(consent);
    this.getStorage()?.setItem(this.storageKey, serializedConsent);
    this.getStorage()?.removeItem(this.legacyStorageKey);
    this.document.cookie = [
      `${this.cookieName}=${encodeURIComponent(serializedConsent)}`,
      "Path=/",
      `Max-Age=${this.consentMaxAgeSeconds}`,
      "SameSite=Lax",
      this.document.location?.protocol === "https:" ? "Secure" : ""
    ].filter(Boolean).join("; ");
    this.consentSubject.next(consent);
  }
  clearConsent() {
    this.getStorage()?.removeItem(this.storageKey);
    this.getStorage()?.removeItem(this.legacyStorageKey);
    this.document.cookie = `${this.cookieName}=; Path=/; Max-Age=0; SameSite=Lax`;
    this.consentSubject.next(null);
  }
  readStoredConsent() {
    const serializedConsent = this.getStorage()?.getItem(this.storageKey) || this.readConsentCookie();
    if (!serializedConsent) {
      return null;
    }
    try {
      const consent = JSON.parse(serializedConsent);
      if (consent.version !== this.consentVersion || typeof consent.analytics !== "boolean" || !consent.decidedAt || this.isExpired(consent.decidedAt)) {
        this.clearInvalidStoredConsent();
        return null;
      }
      return consent;
    } catch {
      this.clearInvalidStoredConsent();
      return null;
    }
  }
  readConsentCookie() {
    const prefix = `${this.cookieName}=`;
    const cookie = this.document.cookie.split(";").map((entry) => entry.trim()).find((entry) => entry.startsWith(prefix));
    return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : null;
  }
  isExpired(decidedAt) {
    const decidedAtTimestamp = Date.parse(decidedAt);
    if (!Number.isFinite(decidedAtTimestamp)) {
      return true;
    }
    return Date.now() - decidedAtTimestamp >= this.consentMaxAgeSeconds * 1e3;
  }
  clearInvalidStoredConsent() {
    this.getStorage()?.removeItem(this.storageKey);
    this.getStorage()?.removeItem(this.legacyStorageKey);
    this.document.cookie = `${this.cookieName}=; Path=/; Max-Age=0; SameSite=Lax`;
  }
  getStorage() {
    try {
      return this.document.defaultView?.localStorage ?? null;
    } catch {
      return null;
    }
  }
  static \u0275fac = function CookieConsentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CookieConsentService)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CookieConsentService, factory: _CookieConsentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookieConsentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();

export {
  CookieConsentService
};
//# sourceMappingURL=chunk-PWVYDVUF.js.map
