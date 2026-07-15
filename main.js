import {
  ArtworkService
} from "./chunk-IL7ZEAF5.js";
import {
  SocialLinksComponent,
  takeUntilDestroyed
} from "./chunk-XHBHCRJB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NewsletterComponent,
  NgControlStatus,
  NgModel
} from "./chunk-A3ZGQU3B.js";
import {
  ActivatedRoute,
  AsyncPipe,
  BehaviorSubject,
  Component,
  DOCUMENT,
  DestroyRef,
  HostListener,
  Inject,
  Injectable,
  Input,
  LanguageService,
  NavigationEnd,
  NgClass,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  SeoService,
  SiteService,
  bootstrapApplication,
  combineLatest,
  computed,
  filter,
  inject,
  map,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  startWith,
  take,
  withInMemoryScrolling,
  withViewTransitions,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-D22KB4XF.js";

// sito-artista/src/app/guards/default-language.guard.ts
var defaultLanguageGuard = () => {
  const router = inject(Router);
  const siteService = inject(SiteService);
  return siteService.getSiteConfig().pipe(take(1), map((siteConfig) => {
    const language = siteConfig.defaultLanguage || "it";
    return router.parseUrl(`/${language}`);
  }));
};

// sito-artista/src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    canActivate: [defaultLanguageGuard],
    children: []
  },
  {
    path: "it",
    children: [
      {
        path: "",
        data: { language: "it", pageKey: "home" },
        loadComponent: () => import("./chunk-6EL7ALJZ.js").then((module) => module.HomePage)
      },
      {
        path: "opere",
        data: { language: "it", pageKey: "artworks" },
        loadComponent: () => import("./chunk-SM42VFE3.js").then((module) => module.ArtworksPage)
      },
      {
        path: "disegni",
        data: { language: "it", pageKey: "drawings" },
        loadComponent: () => import("./chunk-QBEWXHZY.js").then((module) => module.DrawingsPage)
      },
      {
        path: "opere/:slug",
        data: { language: "it", pageKey: "artwork-detail" },
        loadComponent: () => import("./chunk-2VOKLB3O.js").then((module) => module.ArtworkDetailPage)
      },
      {
        path: "about",
        data: { language: "it", pageKey: "about" },
        loadComponent: () => import("./chunk-LNYTH7T7.js").then((module) => module.AboutPage)
      },
      {
        path: "commissioni",
        data: { language: "it", pageKey: "commissions" },
        loadComponent: () => import("./chunk-XOF4V36S.js").then((module) => module.CommissionsPage)
      },
      {
        path: "contatti",
        data: { language: "it", pageKey: "contacts" },
        loadComponent: () => import("./chunk-7YHJYO4E.js").then((module) => module.ContactsPage)
      }
    ]
  },
  {
    path: "en",
    children: [
      {
        path: "",
        data: { language: "en", pageKey: "home" },
        loadComponent: () => import("./chunk-6EL7ALJZ.js").then((module) => module.HomePage)
      },
      {
        path: "artworks",
        data: { language: "en", pageKey: "artworks" },
        loadComponent: () => import("./chunk-SM42VFE3.js").then((module) => module.ArtworksPage)
      },
      {
        path: "drawings",
        data: { language: "en", pageKey: "drawings" },
        loadComponent: () => import("./chunk-QBEWXHZY.js").then((module) => module.DrawingsPage)
      },
      {
        path: "artworks/:slug",
        data: { language: "en", pageKey: "artwork-detail" },
        loadComponent: () => import("./chunk-2VOKLB3O.js").then((module) => module.ArtworkDetailPage)
      },
      {
        path: "about",
        data: { language: "en", pageKey: "about" },
        loadComponent: () => import("./chunk-LNYTH7T7.js").then((module) => module.AboutPage)
      },
      {
        path: "commissions",
        data: { language: "en", pageKey: "commissions" },
        loadComponent: () => import("./chunk-XOF4V36S.js").then((module) => module.CommissionsPage)
      },
      {
        path: "contact",
        data: { language: "en", pageKey: "contacts" },
        loadComponent: () => import("./chunk-7YHJYO4E.js").then((module) => module.ContactsPage)
      }
    ]
  },
  {
    path: "opere",
    redirectTo: "it/opere"
  },
  {
    path: "disegni",
    redirectTo: "it/disegni"
  },
  {
    path: "opera/:slug",
    redirectTo: "it/opere/:slug"
  },
  {
    path: "about",
    redirectTo: "it/about"
  },
  {
    path: "commissioni",
    redirectTo: "it/commissioni"
  },
  {
    path: "contatti",
    redirectTo: "it/contatti"
  },
  {
    path: "artworks",
    redirectTo: "en/artworks"
  },
  {
    path: "drawings",
    redirectTo: "en/drawings"
  },
  {
    path: "contact",
    redirectTo: "en/contact"
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// sito-artista/src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled"
    }), withViewTransitions())
  ]
};

// sito-artista/src/app/services/cookie-consent.service.ts
var CookieConsentService = class _CookieConsentService {
  document;
  storageKey = "cookie-consent";
  cookieName = "site_cookie_consent";
  consentSubject = new BehaviorSubject(null);
  constructor(document2) {
    this.document = document2;
    this.consentSubject.next(this.readStoredConsent());
  }
  getConsent() {
    return this.consentSubject.value;
  }
  getConsent$() {
    return this.consentSubject.asObservable();
  }
  hasAnalyticsConsent() {
    return this.consentSubject.value?.analytics === true;
  }
  saveConsent(consent) {
    localStorage.setItem(this.storageKey, JSON.stringify(consent));
    this.document.cookie = `${this.cookieName}=${encodeURIComponent(JSON.stringify(consent))}; Path=/; Max-Age=31536000; SameSite=Lax`;
    this.consentSubject.next(consent);
  }
  clearConsent() {
    localStorage.removeItem(this.storageKey);
    this.document.cookie = `${this.cookieName}=; Path=/; Max-Age=0; SameSite=Lax`;
    this.consentSubject.next(null);
  }
  readStoredConsent() {
    const storedConsent = localStorage.getItem(this.storageKey);
    if (!storedConsent) {
      return null;
    }
    return JSON.parse(storedConsent);
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

// sito-artista/src/app/components/cookie-banner/cookie-banner.component.ts
function CookieBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "aside", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Cookie");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h2", 3);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 5)(9, "button", 6);
    \u0275\u0275domListener("click", function CookieBannerComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptAnalytics());
    });
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "button", 7);
    \u0275\u0275domListener("click", function CookieBannerComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAnalytics());
    });
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Un consenso essenziale, senza rumore." : "Essential consent, without noise.", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Questo mock usa solo cookie tecnici e, se accettati, cookie analytics. Nessuna logica commerciale viene caricata in questa fase." : "This mock uses only technical cookies and, if accepted, analytics cookies. No commercial logic is loaded at this stage.", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Accetta" : "Accept", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Rifiuta" : "Reject", " ");
  }
}
var CookieBannerComponent = class _CookieBannerComponent {
  cookieConsentService;
  language = "it";
  visible = false;
  constructor(cookieConsentService) {
    this.cookieConsentService = cookieConsentService;
    this.cookieConsentService.getConsent$().pipe(takeUntilDestroyed()).subscribe((consent) => {
      this.visible = !consent;
    });
  }
  acceptAnalytics() {
    this.cookieConsentService.saveConsent({ analytics: true });
    this.visible = false;
  }
  rejectAnalytics() {
    this.cookieConsentService.saveConsent({ analytics: false });
    this.visible = false;
  }
  static \u0275fac = function CookieBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CookieBannerComponent)(\u0275\u0275directiveInject(CookieConsentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CookieBannerComponent, selectors: [["app-cookie-banner"]], inputs: { language: "language" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-x-0", "bottom-0", "z-50", "px-4", "pb-4"], [1, "mx-auto", "max-w-3xl", "rounded-[1.75rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]", "p-5", "shadow-[0_24px_64px_rgba(42,34,26,0.14)]", "sm:p-6"], [1, "text-xs", "uppercase", "tracking-[0.24em]", "text-[var(--site-muted)]"], [1, "mt-3", "text-2xl", "text-[var(--site-text)]"], [1, "mt-3", "text-sm", "leading-7", "text-[var(--site-muted)]"], [1, "mt-6", "flex", "flex-wrap", "gap-3"], ["type", "button", 1, "rounded-full", "bg-[var(--site-text)]", "px-5", "py-3", "text-sm", "uppercase", "tracking-[0.16em]", "text-white", 3, "click"], ["type", "button", 1, "rounded-full", "border", "border-[var(--site-border)]", "px-5", "py-3", "text-sm", "uppercase", "tracking-[0.16em]", "text-[var(--site-text)]", 3, "click"]], template: function CookieBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CookieBannerComponent_Conditional_0_Template, 13, 4, "aside", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible ? 0 : -1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=cookie-banner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookieBannerComponent, [{
    type: Component,
    args: [{ selector: "app-cookie-banner", standalone: true, template: `@if (visible) {
  <aside class="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
    <div class="mx-auto max-w-3xl rounded-[1.75rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-5 shadow-[0_24px_64px_rgba(42,34,26,0.14)] sm:p-6">
      <p class="text-xs uppercase tracking-[0.24em] text-[var(--site-muted)]">Cookie</p>
      <h2 class="mt-3 text-2xl text-[var(--site-text)]">
        {{ language === 'it' ? 'Un consenso essenziale, senza rumore.' : 'Essential consent, without noise.' }}
      </h2>
      <p class="mt-3 text-sm leading-7 text-[var(--site-muted)]">
        {{
          language === 'it'
            ? 'Questo mock usa solo cookie tecnici e, se accettati, cookie analytics. Nessuna logica commerciale viene caricata in questa fase.'
            : 'This mock uses only technical cookies and, if accepted, analytics cookies. No commercial logic is loaded at this stage.'
        }}
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          class="rounded-full bg-[var(--site-text)] px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
          (click)="acceptAnalytics()">
          {{ language === 'it' ? 'Accetta' : 'Accept' }}
        </button>

        <button
          type="button"
          class="rounded-full border border-[var(--site-border)] px-5 py-3 text-sm uppercase tracking-[0.16em] text-[var(--site-text)]"
          (click)="rejectAnalytics()">
          {{ language === 'it' ? 'Rifiuta' : 'Reject' }}
        </button>
      </div>
    </div>
  </aside>
}
`, styles: ["/* sito-artista/src/app/components/cookie-banner/cookie-banner.component.sass */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=cookie-banner.component.css.map */\n"] }]
  }], () => [{ type: CookieConsentService }], { language: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CookieBannerComponent, { className: "CookieBannerComponent", filePath: "sito-artista/src/app/components/cookie-banner/cookie-banner.component.ts", lineNumber: 13 });
})();

// sito-artista/src/app/components/footer/footer.component.ts
function FooterComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-newsletter", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("siteConfig", ctx_r0.siteConfig)("language", ctx_r0.currentLanguage)("variant", "footer")("title", ctx_r0.currentLanguage === "it" ? "Ricevi aggiornamenti dallo studio" : "Receive studio updates")("subtitle", ctx_r0.currentLanguage === "it" ? "Nuove opere, disponibilita private e studio notes." : "New works, private availability and studio notes.");
  }
}
var FooterComponent = class _FooterComponent {
  artistName = "";
  email = "";
  socialLinks;
  currentLanguage;
  siteConfig;
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], inputs: { artistName: "artistName", email: "email", socialLinks: "socialLinks", currentLanguage: "currentLanguage", siteConfig: "siteConfig" }, decls: 45, vars: 22, consts: [[1, "footer", "mt-16", "bg-[#1c1712]", "text-white"], [1, "mx-auto", "grid", "max-w-7xl", "gap-10", "px-5", "py-12", "sm:px-8", "lg:grid-cols-[1.02fr_0.98fr]", "lg:px-12"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-white/55"], [1, "mt-4", "max-w-xl", "text-3xl", "leading-tight"], [1, "mt-4", "max-w-xl", "text-sm", "leading-7", "text-white/68"], [1, "mt-8", "max-w-xl"], [1, "grid", "gap-8", "sm:grid-cols-2"], [1, "text-xs", "uppercase", "tracking-[0.24em]", "text-white/55"], [1, "mt-4", "flex", "flex-col", "gap-3", "text-sm", "text-white/80"], [1, "footer-link", 3, "routerLink"], [1, "mt-4", "inline-block", "text-sm", "text-white/80", "no-underline", 3, "href"], [1, "mt-5"], [3, "socialLinks", "compact"], [1, "mt-6", "flex", "flex-col", "gap-3", "text-sm", "text-white/55"], [1, "border-t", "border-white/10"], [1, "mx-auto", "flex", "max-w-7xl", "items-center", "justify-between", "px-5", "py-5", "text-xs", "uppercase", "tracking-[0.18em]", "text-white/45", "sm:px-8", "lg:px-12"], [3, "siteConfig", "language", "variant", "title", "subtitle"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "Sito Artista");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, " Un sito statico che valorizza le opere come estensione pubblica del Gestionale Opere. ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, FooterComponent_Conditional_9_Template, 2, 5, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "div")(12, "p", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "a", 9);
      \u0275\u0275text(16, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 9);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 9);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 9);
      \u0275\u0275text(22, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 9);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 9);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div")(28, "p", 7);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 10);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 11);
      \u0275\u0275element(33, "app-social-links", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 13)(35, "span");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 14)(40, "div", 15)(41, "span");
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.artistName);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.siteConfig.mailchimp.enabled ? 9 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Navigazione" : "Navigation");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it" : "/en");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/opere" : "/en/artworks");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Opere" : "Artworks");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/disegni" : "/en/drawings");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Disegni" : "Drawings");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/about" : "/en/about");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/commissioni" : "/en/commissions");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Commissioni" : "Commissions");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/contatti" : "/en/contact");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Contatti" : "Contact");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Contatto" : "Contact");
      \u0275\u0275advance();
      \u0275\u0275property("href", "mailto:" + ctx.email, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.email);
      \u0275\u0275advance(2);
      \u0275\u0275property("socialLinks", ctx.socialLinks)("compact", true);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Privacy" : "Privacy");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Cookie Policy" : "Cookie Policy");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.artistName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentYear);
    }
  }, dependencies: [RouterLink, SocialLinksComponent, NewsletterComponent], styles: ["\n\n.footer-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink, SocialLinksComponent, NewsletterComponent], template: `<footer class="footer mt-16 bg-[#1c1712] text-white">
  <div class="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
    <div>
      <p class="text-xs uppercase tracking-[0.28em] text-white/55">Sito Artista</p>
      <h2 class="mt-4 max-w-xl text-3xl leading-tight">{{ artistName }}</h2>
      <p class="mt-4 max-w-xl text-sm leading-7 text-white/68">
        Un sito statico che valorizza le opere come estensione pubblica del Gestionale Opere.
      </p>

      @if (siteConfig.mailchimp.enabled) {
        <div class="mt-8 max-w-xl">
          <app-newsletter
            [siteConfig]="siteConfig"
            [language]="currentLanguage"
            [variant]="'footer'"
            [title]="currentLanguage === 'it' ? 'Ricevi aggiornamenti dallo studio' : 'Receive studio updates'"
            [subtitle]="currentLanguage === 'it' ? 'Nuove opere, disponibilita private e studio notes.' : 'New works, private availability and studio notes.'" />
        </div>
      }
    </div>

    <div class="grid gap-8 sm:grid-cols-2">
      <div>
        <p class="text-xs uppercase tracking-[0.24em] text-white/55">{{ currentLanguage === 'it' ? 'Navigazione' : 'Navigation' }}</p>
        <div class="mt-4 flex flex-col gap-3 text-sm text-white/80">
          <a [routerLink]="currentLanguage === 'it' ? '/it' : '/en'" class="footer-link">Home</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/opere' : '/en/artworks'" class="footer-link">{{ currentLanguage === 'it' ? 'Opere' : 'Artworks' }}</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/disegni' : '/en/drawings'" class="footer-link">{{ currentLanguage === 'it' ? 'Disegni' : 'Drawings' }}</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/about' : '/en/about'" class="footer-link">About</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/commissioni' : '/en/commissions'" class="footer-link">{{ currentLanguage === 'it' ? 'Commissioni' : 'Commissions' }}</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/contatti' : '/en/contact'" class="footer-link">{{ currentLanguage === 'it' ? 'Contatti' : 'Contact' }}</a>
        </div>
      </div>

      <div>
        <p class="text-xs uppercase tracking-[0.24em] text-white/55">{{ currentLanguage === 'it' ? 'Contatto' : 'Contact' }}</p>
        <a class="mt-4 inline-block text-sm text-white/80 no-underline" [href]="'mailto:' + email">{{ email }}</a>
        <div class="mt-5">
          <app-social-links [socialLinks]="socialLinks" [compact]="true" />
        </div>

        <div class="mt-6 flex flex-col gap-3 text-sm text-white/55">
          <span>{{ currentLanguage === 'it' ? 'Privacy' : 'Privacy' }}</span>
          <span>{{ currentLanguage === 'it' ? 'Cookie Policy' : 'Cookie Policy' }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="border-t border-white/10">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs uppercase tracking-[0.18em] text-white/45 sm:px-8 lg:px-12">
      <span>{{ artistName }}</span>
      <span>{{ currentYear }}</span>
    </div>
  </div>
</footer>
`, styles: ["/* sito-artista/src/app/components/footer/footer.component.sass */\n.footer-link {\n  color: inherit;\n  text-decoration: none;\n}\n.footer-link:hover {\n  color: white;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, { artistName: [{
    type: Input,
    args: [{ required: true }]
  }], email: [{
    type: Input,
    args: [{ required: true }]
  }], socialLinks: [{
    type: Input,
    args: [{ required: true }]
  }], currentLanguage: [{
    type: Input,
    args: [{ required: true }]
  }], siteConfig: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "sito-artista/src/app/components/footer/footer.component.ts", lineNumber: 15 });
})();

// sito-artista/src/app/components/language-switcher/language-switcher.component.ts
var LanguageSwitcherComponent = class _LanguageSwitcherComponent {
  currentLanguage;
  italianPath;
  englishPath;
  monochrome = false;
  static \u0275fac = function LanguageSwitcherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSwitcherComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSwitcherComponent, selectors: [["app-language-switcher"]], inputs: { currentLanguage: "currentLanguage", italianPath: "italianPath", englishPath: "englishPath", monochrome: "monochrome" }, decls: 5, vars: 18, consts: [[1, "flex", "items-center", "gap-2", "rounded-full", "border", "px-1", "py-1"], [1, "language-chip", 3, "routerLink"]], template: function LanguageSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2, " IT ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 1);
      \u0275\u0275text(4, " EN ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("border-white/20", !ctx.monochrome)("border-[var(--site-border)]", ctx.monochrome);
      \u0275\u0275advance();
      \u0275\u0275classProp("language-chip--active", ctx.currentLanguage === "it")("text-[var(--site-text)]", ctx.monochrome && ctx.currentLanguage !== "it")("text-white", !ctx.monochrome && ctx.currentLanguage !== "it");
      \u0275\u0275property("routerLink", ctx.italianPath);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("language-chip--active", ctx.currentLanguage === "en")("text-[var(--site-text)]", ctx.monochrome && ctx.currentLanguage !== "en")("text-white", !ctx.monochrome && ctx.currentLanguage !== "en");
      \u0275\u0275property("routerLink", ctx.englishPath);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.language-chip[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-size: 0.7rem;\n  letter-spacing: 0.18em;\n  padding: 0.45rem 0.7rem;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.language-chip--active[_ngcontent-%COMP%] {\n  background: rgba(241, 228, 200, 0.95);\n  color: #1c1712;\n}\n/*# sourceMappingURL=language-switcher.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSwitcherComponent, [{
    type: Component,
    args: [{ selector: "app-language-switcher", standalone: true, imports: [RouterLink], template: `<div
  class="flex items-center gap-2 rounded-full border px-1 py-1"
  [class.border-white/20]="!monochrome"
  [class.border-[var(--site-border)]]="monochrome">
  <a
    [routerLink]="italianPath"
    class="language-chip"
    [class.language-chip--active]="currentLanguage === 'it'"
    [class.text-[var(--site-text)]]="monochrome && currentLanguage !== 'it'"
    [class.text-white]="!monochrome && currentLanguage !== 'it'">
    IT
  </a>

  <a
    [routerLink]="englishPath"
    class="language-chip"
    [class.language-chip--active]="currentLanguage === 'en'"
    [class.text-[var(--site-text)]]="monochrome && currentLanguage !== 'en'"
    [class.text-white]="!monochrome && currentLanguage !== 'en'">
    EN
  </a>
</div>
`, styles: ["/* sito-artista/src/app/components/language-switcher/language-switcher.component.sass */\n.language-chip {\n  border-radius: 999px;\n  font-size: 0.7rem;\n  letter-spacing: 0.18em;\n  padding: 0.45rem 0.7rem;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.language-chip--active {\n  background: rgba(241, 228, 200, 0.95);\n  color: #1c1712;\n}\n/*# sourceMappingURL=language-switcher.component.css.map */\n"] }]
  }], null, { currentLanguage: [{
    type: Input,
    args: [{ required: true }]
  }], italianPath: [{
    type: Input,
    args: [{ required: true }]
  }], englishPath: [{
    type: Input,
    args: [{ required: true }]
  }], monochrome: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSwitcherComponent, { className: "LanguageSwitcherComponent", filePath: "sito-artista/src/app/components/language-switcher/language-switcher.component.ts", lineNumber: 12 });
})();

// sito-artista/src/app/components/header/header.component.ts
var _c0 = (a0, a1) => ({ "header--solid": a0, "header--transparent": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function HeaderComponent_Conditional_22_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentLanguage === "it" ? "Scrivi almeno due caratteri per trovare rapidamente un\u2019opera vista sui social o nel catalogo." : "Type at least two characters to quickly find an artwork seen on social media or in the catalogue.", " ");
  }
}
function HeaderComponent_Conditional_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openArchive());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentLanguage === "it" ? "Nessuna opera trovata con questa ricerca." : "No artworks found for this search.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentLanguage === "it" ? "Apri archivio completo" : "Open full archive", " ");
  }
}
function HeaderComponent_Conditional_22_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_Conditional_15_For_2_Template_button_click_0_listener() {
      const artwork_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateToArtwork(artwork_r6));
    });
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "span", 28)(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const artwork_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", artwork_r6.images.main.sources.thumbnail || artwork_r6.images.main.sources.small || artwork_r6.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", artwork_r6.images.main.alt[ctx_r1.currentLanguage] || artwork_r6.images.main.alt.it);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", artwork_r6.title[ctx_r1.currentLanguage] || artwork_r6.title.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", artwork_r6.year, " \xB7 ", artwork_r6.technique[ctx_r1.currentLanguage] || artwork_r6.technique.it, " ");
  }
}
function HeaderComponent_Conditional_22_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, HeaderComponent_Conditional_22_Conditional_15_For_2_Template, 7, 5, "button", 25, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openArchive());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.searchResults());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentLanguage === "it" ? "Vai all\u2019archivio completo" : "Go to full archive", " ");
  }
}
function HeaderComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "section", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSearch());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 18)(10, "span", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 20);
    \u0275\u0275listener("ngModelChange", function HeaderComponent_Conditional_22_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSearchQuery($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, HeaderComponent_Conditional_22_Conditional_13_Template, 2, 1, "p", 21)(14, HeaderComponent_Conditional_22_Conditional_14_Template, 5, 2, "div", 22)(15, HeaderComponent_Conditional_22_Conditional_15_Template, 5, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentLanguage === "it" ? "Ricerca opere" : "Artwork search", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentLanguage === "it" ? "Chiudi" : "Close", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentLanguage === "it" ? "Cerca nel catalogo" : "Search the catalogue");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.searchQuery())("placeholder", ctx_r1.currentLanguage === "it" ? "Titolo, tecnica, anno, serie..." : "Title, technique, year, series...");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hasSearchQuery() ? 13 : ctx_r1.searchResults().length === 0 ? 14 : 15);
  }
}
function HeaderComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "nav", 31)(2, "a", 32);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 32);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 32);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 32);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(9, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 32);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 33);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSearch());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 34);
    \u0275\u0275element(15, "app-language-switcher", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 35);
    \u0275\u0275element(17, "app-social-links", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.currentLanguage === "it" ? "/it/opere" : "/en/artworks");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentLanguage === "it" ? "Opere" : "Artworks");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.currentLanguage === "it" ? "/it/disegni" : "/en/drawings");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentLanguage === "it" ? "Disegni" : "Drawings");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.currentLanguage === "it" ? "/it/commissioni" : "/en/commissions");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentLanguage === "it" ? "Commissioni" : "Commissions");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.currentLanguage === "it" ? "/it/about" : "/en/about");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.currentLanguage === "it" ? "/it/contatti" : "/en/contact");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentLanguage === "it" ? "Contatti" : "Contact");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentLanguage === "it" ? "Cerca un\u2019opera" : "Search an artwork", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("currentLanguage", ctx_r1.currentLanguage)("italianPath", ctx_r1.italianPath)("englishPath", ctx_r1.englishPath)("monochrome", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("socialLinks", ctx_r1.socialLinks)("compact", true)("monochrome", true);
  }
}
var HeaderComponent = class _HeaderComponent {
  artworkService;
  router;
  constructor(artworkService, router) {
    this.artworkService = artworkService;
    this.router = router;
    this.artworkService.getArtworks().subscribe((artworks) => {
      this.artworks.set(artworks);
    });
  }
  artistName = "";
  socialLinks;
  currentLanguage;
  italianPath;
  englishPath;
  menuOpen = signal(false, ...ngDevMode ? [{ debugName: "menuOpen" }] : []);
  scrolled = signal(false, ...ngDevMode ? [{ debugName: "scrolled" }] : []);
  searchOpen = signal(false, ...ngDevMode ? [{ debugName: "searchOpen" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  artworks = signal([], ...ngDevMode ? [{ debugName: "artworks" }] : []);
  searchResults = computed(() => {
    const query = this.normalizeSearchValue(this.searchQuery());
    if (query.length < 2) {
      return [];
    }
    return this.artworks().filter((artwork) => this.matchesArtworkSearch(artwork, query)).slice(0, 8);
  }, ...ngDevMode ? [{ debugName: "searchResults" }] : []);
  hasSearchQuery = computed(() => this.searchQuery().trim().length >= 2, ...ngDevMode ? [{ debugName: "hasSearchQuery" }] : []);
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 24);
  }
  onEscape() {
    this.closeSearch();
  }
  toggleMenu() {
    this.searchOpen.set(false);
    this.menuOpen.set(!this.menuOpen());
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
  toggleSearch() {
    this.menuOpen.set(false);
    this.searchOpen.set(!this.searchOpen());
  }
  closeSearch() {
    this.searchOpen.set(false);
    this.searchQuery.set("");
  }
  updateSearchQuery(value) {
    this.searchQuery.set(value);
  }
  navigateToArtwork(artwork) {
    const commands = this.currentLanguage === "it" ? ["/it/opere", artwork.slug] : ["/en/artworks", artwork.slug];
    this.closeSearch();
    this.router.navigate(commands);
  }
  openArchive() {
    const commands = this.currentLanguage === "it" ? ["/it/opere"] : ["/en/artworks"];
    this.closeSearch();
    this.router.navigate(commands);
  }
  matchesArtworkSearch(artwork, query) {
    const searchableFields = [
      artwork.title.it,
      artwork.title.en,
      artwork.subtitle.it,
      artwork.subtitle.en,
      artwork.technique.it,
      artwork.technique.en,
      artwork.support.it,
      artwork.support.en,
      artwork.texts.description.it,
      artwork.texts.description.en,
      artwork.texts.poetic.it,
      artwork.texts.poetic.en,
      String(artwork.year),
      ...artwork.tags.flatMap((tag) => [tag.name.it, tag.name.en])
    ];
    const haystack = this.normalizeSearchValue(searchableFields.join(" "));
    return haystack.includes(query);
  }
  normalizeSearchValue(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(ArtworkService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow)("keydown.escape", function HeaderComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { artistName: "artistName", socialLinks: "socialLinks", currentLanguage: "currentLanguage", italianPath: "italianPath", englishPath: "englishPath" }, decls: 24, vars: 33, consts: [[1, "header", "fixed", "inset-x-0", "top-0", "z-50", "transition", "duration-300", 3, "ngClass"], [1, "mx-auto", "flex", "max-w-7xl", "items-center", "justify-between", "px-5", "py-4", "sm:px-8", "lg:px-12"], [1, "max-w-[12rem]", "text-sm", "uppercase", "tracking-[0.24em]", "no-underline", 3, "click", "routerLink"], [1, "hidden", "items-center", "gap-6", "lg:flex"], ["routerLinkActive", "header-link--active", 1, "header-link", 3, "routerLink"], ["type", "button", 1, "header-search-trigger", 3, "click"], [3, "currentLanguage", "italianPath", "englishPath", "monochrome"], [1, "hidden", "lg:block"], [3, "socialLinks", "compact", "monochrome"], ["type", "button", "aria-label", "Apri menu", 1, "header-toggle", "lg:hidden", 3, "click"], [1, "border-t", "border-[rgba(29,27,25,0.08)]", "bg-[var(--site-surface)]", "lg:hidden"], ["type", "button", "aria-label", "Chiudi ricerca", 1, "header-search-backdrop", 3, "click"], [1, "header-search-panel"], [1, "mx-auto", "max-w-4xl", "px-5", "py-4", "sm:px-8", "lg:px-12"], [1, "header-search-shell"], [1, "header-search-topline"], [1, "header-search-label"], ["type", "button", 1, "header-search-close", 3, "click"], [1, "header-search-field"], [1, "sr-only"], ["type", "search", 1, "header-search-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "header-search-helper"], [1, "header-search-empty"], ["type", "button", 1, "header-search-archive-link", 3, "click"], [1, "header-search-results"], ["type", "button", 1, "header-search-result"], ["type", "button", 1, "header-search-result", 3, "click"], [1, "header-search-result__image", 3, "src", "alt"], [1, "header-search-result__body"], [1, "header-search-result__title"], [1, "header-search-result__meta"], [1, "mx-auto", "flex", "max-w-7xl", "flex-col", "gap-3", "px-5", "py-6", "sm:px-8"], [1, "mobile-link", 3, "click", "routerLink"], ["type", "button", 1, "mobile-link", "mobile-link--button", 3, "click"], [1, "pt-2"], [1, "pt-4"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_2_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 3)(5, "a", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 4);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 4);
      \u0275\u0275text(12, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 4);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 5);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_15_listener() {
        return ctx.toggleSearch();
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "app-language-switcher", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 7);
      \u0275\u0275element(19, "app-social-links", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 9);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_20_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(22, HeaderComponent_Conditional_22_Template, 16, 6);
      \u0275\u0275conditionalCreate(23, HeaderComponent_Conditional_23_Template, 18, 17, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(30, _c0, ctx.scrolled() || ctx.menuOpen(), !ctx.scrolled() && !ctx.menuOpen()));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-[var(--site-text)]", true);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it" : "/en");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.artistName, " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-[var(--site-text)]", true);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/opere" : "/en/artworks");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Opere" : "Artworks");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/disegni" : "/en/drawings");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Disegni" : "Drawings");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/commissioni" : "/en/commissions");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Commissioni" : "Commissions");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/about" : "/en/about");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/contatti" : "/en/contact");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Contatti" : "Contact");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.currentLanguage === "it" ? "Cerca" : "Search", " ");
      \u0275\u0275advance();
      \u0275\u0275property("currentLanguage", ctx.currentLanguage)("italianPath", ctx.italianPath)("englishPath", ctx.englishPath)("monochrome", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("socialLinks", ctx.socialLinks)("compact", true)("monochrome", true);
      \u0275\u0275advance();
      \u0275\u0275classProp("text-[var(--site-text)]", true);
      \u0275\u0275attribute("aria-expanded", ctx.menuOpen());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.menuOpen() ? "Chiudi" : "Menu", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchOpen() ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.menuOpen() ? 23 : -1);
    }
  }, dependencies: [
    NgClass,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    RouterLink,
    RouterLinkActive,
    SocialLinksComponent,
    LanguageSwitcherComponent
  ], styles: ["\n\n.header--transparent[_ngcontent-%COMP%] {\n  background: rgba(255, 253, 248, 0.92);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border-bottom: 1px solid rgba(29, 27, 25, 0.05);\n}\n.header--solid[_ngcontent-%COMP%] {\n  background: rgba(255, 253, 248, 0.96);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(29, 27, 25, 0.06);\n}\n.header-link[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 0.8rem;\n  letter-spacing: 0.18em;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.header-search-trigger[_ngcontent-%COMP%] {\n  color: inherit;\n  background: transparent;\n  border: 0;\n  font-size: 0.8rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.header-link--active[_ngcontent-%COMP%] {\n  opacity: 0.58;\n}\n.header-toggle[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.mobile-link[_ngcontent-%COMP%] {\n  color: var(--site-text);\n  font-size: 0.95rem;\n  text-decoration: none;\n}\n.mobile-link--button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  text-align: left;\n}\n.header-search-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  border: 0;\n  background: rgba(18, 16, 14, 0.24);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.header-search-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 4.75rem 0 auto 0;\n  z-index: 60;\n}\n.header-search-shell[_ngcontent-%COMP%] {\n  border: 1px solid rgba(29, 27, 25, 0.08);\n  border-radius: 1.8rem;\n  background: rgba(255, 253, 248, 0.96);\n  box-shadow: 0 24px 64px rgba(34, 24, 18, 0.14);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  padding: 1.2rem;\n}\n.header-search-topline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.9rem;\n}\n.header-search-label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-close[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-field[_ngcontent-%COMP%] {\n  display: block;\n}\n.header-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgba(29, 27, 25, 0.1);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.82);\n  color: var(--site-text);\n  padding: 0.95rem 1.2rem;\n  font-size: 0.98rem;\n  outline: none;\n}\n.header-search-input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(159, 116, 82, 0.28);\n}\n.header-search-helper[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.92rem;\n  line-height: 1.8;\n  color: var(--site-muted);\n}\n.header-search-empty[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n  color: var(--site-muted);\n}\n.header-search-results[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n  max-height: min(60vh, 32rem);\n  overflow-y: auto;\n}\n.header-search-result[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 4.5rem minmax(0, 1fr);\n  gap: 1rem;\n  align-items: center;\n  width: 100%;\n  border: 1px solid rgba(29, 27, 25, 0.06);\n  border-radius: 1.35rem;\n  background: rgba(255, 255, 255, 0.72);\n  padding: 0.7rem;\n  text-align: left;\n  transition:\n    transform 0.22s ease,\n    border-color 0.22s ease,\n    background-color 0.22s ease;\n}\n.header-search-result[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(159, 116, 82, 0.2);\n  background: rgba(255, 255, 255, 0.9);\n}\n.header-search-result__image[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 1rem;\n  object-fit: cover;\n}\n.header-search-result__body[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: grid;\n  gap: 0.35rem;\n}\n.header-search-result__title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.25;\n  color: var(--site-text);\n}\n.header-search-result__meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-archive-link[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  font-size: 0.76rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--site-accent);\n}\n@media (max-width: 1023px) {\n  .header-search-panel[_ngcontent-%COMP%] {\n    inset: 4.3rem 0 auto 0;\n  }\n  .header-search-shell[_ngcontent-%COMP%] {\n    border-radius: 1.4rem;\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [
      NgClass,
      FormsModule,
      RouterLink,
      RouterLinkActive,
      SocialLinksComponent,
      LanguageSwitcherComponent
    ], template: `<header
  class="header fixed inset-x-0 top-0 z-50 transition duration-300"
  [ngClass]="{
    'header--solid': scrolled() || menuOpen(),
    'header--transparent': !scrolled() && !menuOpen()
  }">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
    <a
      [routerLink]="currentLanguage === 'it' ? '/it' : '/en'"
      class="max-w-[12rem] text-sm uppercase tracking-[0.24em] no-underline"
      [class.text-[var(--site-text)]]="true"
      (click)="closeMenu()">
      {{ artistName }}
    </a>

    <nav
      class="hidden items-center gap-6 lg:flex"
      [class.text-[var(--site-text)]]="true">
      <a [routerLink]="currentLanguage === 'it' ? '/it/opere' : '/en/artworks'" routerLinkActive="header-link--active" class="header-link">{{ currentLanguage === 'it' ? 'Opere' : 'Artworks' }}</a>
      <a [routerLink]="currentLanguage === 'it' ? '/it/disegni' : '/en/drawings'" routerLinkActive="header-link--active" class="header-link">{{ currentLanguage === 'it' ? 'Disegni' : 'Drawings' }}</a>
      <a [routerLink]="currentLanguage === 'it' ? '/it/commissioni' : '/en/commissions'" routerLinkActive="header-link--active" class="header-link">{{ currentLanguage === 'it' ? 'Commissioni' : 'Commissions' }}</a>
      <a [routerLink]="currentLanguage === 'it' ? '/it/about' : '/en/about'" routerLinkActive="header-link--active" class="header-link">About</a>
      <a [routerLink]="currentLanguage === 'it' ? '/it/contatti' : '/en/contact'" routerLinkActive="header-link--active" class="header-link">{{ currentLanguage === 'it' ? 'Contatti' : 'Contact' }}</a>
      <button type="button" class="header-search-trigger" (click)="toggleSearch()">
        {{ currentLanguage === 'it' ? 'Cerca' : 'Search' }}
      </button>

      <app-language-switcher
        [currentLanguage]="currentLanguage"
        [italianPath]="italianPath"
        [englishPath]="englishPath"
        [monochrome]="true" />
    </nav>

    <div class="hidden lg:block">
      <app-social-links [socialLinks]="socialLinks" [compact]="true" [monochrome]="true" />
    </div>

    <button
      type="button"
      class="header-toggle lg:hidden"
      [class.text-[var(--site-text)]]="true"
      (click)="toggleMenu()"
      [attr.aria-expanded]="menuOpen()"
      aria-label="Apri menu">
      {{ menuOpen() ? 'Chiudi' : 'Menu' }}
    </button>
  </div>

  @if (searchOpen()) {
    <button
      type="button"
      class="header-search-backdrop"
      aria-label="Chiudi ricerca"
      (click)="closeSearch()"></button>

    <section class="header-search-panel">
      <div class="mx-auto max-w-4xl px-5 py-4 sm:px-8 lg:px-12">
        <div class="header-search-shell">
          <div class="header-search-topline">
            <p class="header-search-label">
              {{ currentLanguage === 'it' ? 'Ricerca opere' : 'Artwork search' }}
            </p>
            <button type="button" class="header-search-close" (click)="closeSearch()">
              {{ currentLanguage === 'it' ? 'Chiudi' : 'Close' }}
            </button>
          </div>

          <label class="header-search-field">
            <span class="sr-only">{{ currentLanguage === 'it' ? 'Cerca nel catalogo' : 'Search the catalogue' }}</span>
            <input
              type="search"
              class="header-search-input"
              [ngModel]="searchQuery()"
              (ngModelChange)="updateSearchQuery($event)"
              [placeholder]="currentLanguage === 'it'
                ? 'Titolo, tecnica, anno, serie...'
                : 'Title, technique, year, series...'" />
          </label>

          @if (!hasSearchQuery()) {
            <p class="header-search-helper">
              {{ currentLanguage === 'it'
                ? 'Scrivi almeno due caratteri per trovare rapidamente un\u2019opera vista sui social o nel catalogo.'
                : 'Type at least two characters to quickly find an artwork seen on social media or in the catalogue.' }}
            </p>
          } @else if (searchResults().length === 0) {
            <div class="header-search-empty">
              <p>{{ currentLanguage === 'it' ? 'Nessuna opera trovata con questa ricerca.' : 'No artworks found for this search.' }}</p>
              <button type="button" class="header-search-archive-link" (click)="openArchive()">
                {{ currentLanguage === 'it' ? 'Apri archivio completo' : 'Open full archive' }}
              </button>
            </div>
          } @else {
            <div class="header-search-results">
              @for (artwork of searchResults(); track artwork.id) {
                <button
                  type="button"
                  class="header-search-result"
                  (click)="navigateToArtwork(artwork)">
                  <img
                    class="header-search-result__image"
                    [src]="artwork.images.main.sources.thumbnail || artwork.images.main.sources.small || artwork.images.main.sources.large"
                    [alt]="artwork.images.main.alt[currentLanguage] || artwork.images.main.alt.it" />

                  <span class="header-search-result__body">
                    <span class="header-search-result__title">
                      {{ artwork.title[currentLanguage] || artwork.title.it }}
                    </span>
                    <span class="header-search-result__meta">
                      {{ artwork.year }} \xB7 {{ artwork.technique[currentLanguage] || artwork.technique.it }}
                    </span>
                  </span>
                </button>
              }
            </div>

            <button type="button" class="header-search-archive-link" (click)="openArchive()">
              {{ currentLanguage === 'it' ? 'Vai all\u2019archivio completo' : 'Go to full archive' }}
            </button>
          }
        </div>
      </div>
    </section>
  }

  @if (menuOpen()) {
    <div class="border-t border-[rgba(29,27,25,0.08)] bg-[var(--site-surface)] lg:hidden">
      <nav class="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 sm:px-8">
        <a [routerLink]="currentLanguage === 'it' ? '/it/opere' : '/en/artworks'" class="mobile-link" (click)="closeMenu()">{{ currentLanguage === 'it' ? 'Opere' : 'Artworks' }}</a>
        <a [routerLink]="currentLanguage === 'it' ? '/it/disegni' : '/en/drawings'" class="mobile-link" (click)="closeMenu()">{{ currentLanguage === 'it' ? 'Disegni' : 'Drawings' }}</a>
        <a [routerLink]="currentLanguage === 'it' ? '/it/commissioni' : '/en/commissions'" class="mobile-link" (click)="closeMenu()">{{ currentLanguage === 'it' ? 'Commissioni' : 'Commissions' }}</a>
        <a [routerLink]="currentLanguage === 'it' ? '/it/about' : '/en/about'" class="mobile-link" (click)="closeMenu()">About</a>
        <a [routerLink]="currentLanguage === 'it' ? '/it/contatti' : '/en/contact'" class="mobile-link" (click)="closeMenu()">{{ currentLanguage === 'it' ? 'Contatti' : 'Contact' }}</a>
        <button type="button" class="mobile-link mobile-link--button" (click)="toggleSearch()">
          {{ currentLanguage === 'it' ? 'Cerca un\u2019opera' : 'Search an artwork' }}
        </button>

        <div class="pt-2">
          <app-language-switcher
            [currentLanguage]="currentLanguage"
            [italianPath]="italianPath"
            [englishPath]="englishPath"
            [monochrome]="true" />
        </div>

        <div class="pt-4">
          <app-social-links [socialLinks]="socialLinks" [compact]="true" [monochrome]="true" />
        </div>
      </nav>
    </div>
  }
</header>
`, styles: ["/* sito-artista/src/app/components/header/header.component.sass */\n.header--transparent {\n  background: rgba(255, 253, 248, 0.92);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border-bottom: 1px solid rgba(29, 27, 25, 0.05);\n}\n.header--solid {\n  background: rgba(255, 253, 248, 0.96);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(29, 27, 25, 0.06);\n}\n.header-link {\n  color: inherit;\n  font-size: 0.8rem;\n  letter-spacing: 0.18em;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.header-search-trigger {\n  color: inherit;\n  background: transparent;\n  border: 0;\n  font-size: 0.8rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.header-link--active {\n  opacity: 0.58;\n}\n.header-toggle {\n  background: transparent;\n  border: 0;\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.mobile-link {\n  color: var(--site-text);\n  font-size: 0.95rem;\n  text-decoration: none;\n}\n.mobile-link--button {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  text-align: left;\n}\n.header-search-backdrop {\n  position: fixed;\n  inset: 0;\n  border: 0;\n  background: rgba(18, 16, 14, 0.24);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.header-search-panel {\n  position: fixed;\n  inset: 4.75rem 0 auto 0;\n  z-index: 60;\n}\n.header-search-shell {\n  border: 1px solid rgba(29, 27, 25, 0.08);\n  border-radius: 1.8rem;\n  background: rgba(255, 253, 248, 0.96);\n  box-shadow: 0 24px 64px rgba(34, 24, 18, 0.14);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  padding: 1.2rem;\n}\n.header-search-topline {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.9rem;\n}\n.header-search-label {\n  font-size: 0.74rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-close {\n  border: 0;\n  background: transparent;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-field {\n  display: block;\n}\n.header-search-input {\n  width: 100%;\n  border: 1px solid rgba(29, 27, 25, 0.1);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.82);\n  color: var(--site-text);\n  padding: 0.95rem 1.2rem;\n  font-size: 0.98rem;\n  outline: none;\n}\n.header-search-input:focus {\n  border-color: rgba(159, 116, 82, 0.28);\n}\n.header-search-helper {\n  margin-top: 1rem;\n  font-size: 0.92rem;\n  line-height: 1.8;\n  color: var(--site-muted);\n}\n.header-search-empty {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n  color: var(--site-muted);\n}\n.header-search-results {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n  max-height: min(60vh, 32rem);\n  overflow-y: auto;\n}\n.header-search-result {\n  display: grid;\n  grid-template-columns: 4.5rem minmax(0, 1fr);\n  gap: 1rem;\n  align-items: center;\n  width: 100%;\n  border: 1px solid rgba(29, 27, 25, 0.06);\n  border-radius: 1.35rem;\n  background: rgba(255, 255, 255, 0.72);\n  padding: 0.7rem;\n  text-align: left;\n  transition:\n    transform 0.22s ease,\n    border-color 0.22s ease,\n    background-color 0.22s ease;\n}\n.header-search-result:hover {\n  transform: translateY(-1px);\n  border-color: rgba(159, 116, 82, 0.2);\n  background: rgba(255, 255, 255, 0.9);\n}\n.header-search-result__image {\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 1rem;\n  object-fit: cover;\n}\n.header-search-result__body {\n  min-width: 0;\n  display: grid;\n  gap: 0.35rem;\n}\n.header-search-result__title {\n  font-size: 1.05rem;\n  line-height: 1.25;\n  color: var(--site-text);\n}\n.header-search-result__meta {\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-archive-link {\n  margin-top: 1rem;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  font-size: 0.76rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--site-accent);\n}\n@media (max-width: 1023px) {\n  .header-search-panel {\n    inset: 4.3rem 0 auto 0;\n  }\n  .header-search-shell {\n    border-radius: 1.4rem;\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [{ type: ArtworkService }, { type: Router }], { artistName: [{
    type: Input,
    args: [{ required: true }]
  }], socialLinks: [{
    type: Input,
    args: [{ required: true }]
  }], currentLanguage: [{
    type: Input,
    args: [{ required: true }]
  }], italianPath: [{
    type: Input,
    args: [{ required: true }]
  }], englishPath: [{
    type: Input,
    args: [{ required: true }]
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "sito-artista/src/app/components/header/header.component.ts", lineNumber: 26 });
})();

// sito-artista/src/app/services/analytics.service.ts
var AnalyticsService = class _AnalyticsService {
  document;
  initializedMeasurementId = null;
  constructor(document2) {
    this.document = document2;
  }
  initialize(config) {
    if (!config.enabled || !config.googleAnalyticsId) {
      return;
    }
    if (this.initializedMeasurementId === config.googleAnalyticsId) {
      return;
    }
    this.ensureGoogleScript(config.googleAnalyticsId);
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(...args) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", /* @__PURE__ */ new Date());
    window.gtag("config", config.googleAnalyticsId, {
      send_page_view: false
    });
    this.initializedMeasurementId = config.googleAnalyticsId;
  }
  trackPageView(url, title) {
    if (!this.initializedMeasurementId || !window.gtag) {
      return;
    }
    window.gtag("event", "page_view", {
      page_title: title,
      page_location: url,
      page_path: new URL(url).pathname
    });
  }
  ensureGoogleScript(measurementId) {
    const existingScript = this.document.head.querySelector(`script[data-analytics-id="${measurementId}"]`);
    if (existingScript) {
      return;
    }
    const script = this.document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.setAttribute("data-analytics-id", measurementId);
    this.document.head.appendChild(script);
  }
  static \u0275fac = function AnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsService)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();

// sito-artista/src/app/app.component.ts
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "main", 1);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-footer", 2)(4, "app-cookie-banner", 3);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275property("artistName", vm_r1.siteConfig.artistName)("socialLinks", vm_r1.siteConfig.social)("currentLanguage", vm_r1.currentLanguage)("italianPath", vm_r1.italianPath)("englishPath", vm_r1.englishPath);
    \u0275\u0275advance(3);
    \u0275\u0275property("artistName", vm_r1.siteConfig.artistName)("email", vm_r1.siteConfig.email)("socialLinks", vm_r1.siteConfig.social)("currentLanguage", vm_r1.currentLanguage)("siteConfig", vm_r1.siteConfig);
    \u0275\u0275advance();
    \u0275\u0275property("language", vm_r1.currentLanguage);
  }
}
var AppComponent = class _AppComponent {
  destroyRef = inject(DestroyRef);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  siteService = inject(SiteService);
  languageService = inject(LanguageService);
  cookieConsentService = inject(CookieConsentService);
  analyticsService = inject(AnalyticsService);
  seoService = inject(SeoService);
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), startWith(null))
  ]).pipe(map(([siteConfig]) => {
    const leafRoute = this.getLeafRoute(this.activatedRoute);
    const currentLanguage = this.languageService.getRouteLanguage(leafRoute.snapshot);
    const pageKey = this.languageService.getRoutePageKey(leafRoute.snapshot);
    const slug = leafRoute.snapshot.paramMap.get("slug") ?? void 0;
    return {
      siteConfig,
      currentLanguage,
      italianPath: this.languageService.buildLocalizedPath("it", pageKey, { slug }),
      englishPath: this.languageService.buildLocalizedPath("en", pageKey, { slug })
    };
  }));
  constructor() {
    this.siteService.getSiteConfig().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((siteConfig) => {
      this.seoService.applyFavicon(siteConfig.seo.favicon);
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    });
    combineLatest([
      this.siteService.getSiteConfig(),
      this.cookieConsentService.getConsent$(),
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd), startWith(null))
    ]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([siteConfig, consent]) => {
      if (!consent?.analytics) {
        return;
      }
      this.analyticsService.initialize(siteConfig.analytics);
      this.analyticsService.trackPageView(`${window.location.origin}${this.router.url}`, document.title);
    });
  }
  getLeafRoute(route) {
    let currentRoute = route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return currentRoute;
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 3, consts: [[3, "artistName", "socialLinks", "currentLanguage", "italianPath", "englishPath"], [1, "site-shell", "min-h-dvh", "bg-[var(--site-background)]", "pt-20"], [3, "artistName", "email", "socialLinks", "currentLanguage", "siteConfig"], [3, "language"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppComponent_Conditional_0_Template, 5, 11);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CookieBannerComponent,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100dvh;\n}\n.site-shell[_ngcontent-%COMP%] {\n  view-transition-name: site-shell;\n}\n@media (prefers-reduced-motion: no-preference) {\n  [_ngcontent-%COMP%]::view-transition-old(site-shell) {\n    animation: _ngcontent-%COMP%_siteShellFadeOut 220ms ease both;\n  }\n  [_ngcontent-%COMP%]::view-transition-new(site-shell) {\n    animation: _ngcontent-%COMP%_siteShellFadeIn 320ms ease both;\n  }\n}\n@keyframes _ngcontent-%COMP%_siteShellFadeOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_siteShellFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\nbody.artwork-fullscreen-open[_nghost-%COMP%]   app-header[_ngcontent-%COMP%], body.artwork-fullscreen-open   [_nghost-%COMP%]   app-header[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\nbody.artwork-fullscreen-open[_nghost-%COMP%]   app-footer[_ngcontent-%COMP%], body.artwork-fullscreen-open   [_nghost-%COMP%]   app-footer[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      AsyncPipe,
      RouterOutlet,
      HeaderComponent,
      FooterComponent,
      CookieBannerComponent
    ], template: '@if (vm$ | async; as vm) {\n  <app-header\n    [artistName]="vm.siteConfig.artistName"\n    [socialLinks]="vm.siteConfig.social"\n    [currentLanguage]="vm.currentLanguage"\n    [italianPath]="vm.italianPath"\n    [englishPath]="vm.englishPath" />\n\n  <main class="site-shell min-h-dvh bg-[var(--site-background)] pt-20">\n    <router-outlet />\n  </main>\n\n  <app-footer\n    [artistName]="vm.siteConfig.artistName"\n    [email]="vm.siteConfig.email"\n    [socialLinks]="vm.siteConfig.social"\n    [currentLanguage]="vm.currentLanguage"\n    [siteConfig]="vm.siteConfig" />\n\n  <app-cookie-banner [language]="vm.currentLanguage" />\n}\n', styles: ["/* sito-artista/src/app/app.component.sass */\n:host {\n  display: block;\n  min-height: 100dvh;\n}\n.site-shell {\n  view-transition-name: site-shell;\n}\n@media (prefers-reduced-motion: no-preference) {\n  ::view-transition-old(site-shell) {\n    animation: siteShellFadeOut 220ms ease both;\n  }\n  ::view-transition-new(site-shell) {\n    animation: siteShellFadeIn 320ms ease both;\n  }\n}\n@keyframes siteShellFadeOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n}\n@keyframes siteShellFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n:host-context(body.artwork-fullscreen-open) app-header {\n  opacity: 0;\n  pointer-events: none;\n}\n:host-context(body.artwork-fullscreen-open) app-footer {\n  opacity: 0;\n  pointer-events: none;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "sito-artista/src/app/app.component.ts", lineNumber: 27 });
})();

// sito-artista/src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
