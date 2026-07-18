import {
  SocialLinksComponent
} from "./chunk-23UCQ33B.js";
import {
  CookieConsentService
} from "./chunk-PWVYDVUF.js";
import {
  ArtworkService
} from "./chunk-VLPNPYTG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NewsletterComponent,
  NgControlStatus,
  NgModel,
  takeUntilDestroyed
} from "./chunk-DBQUGMHR.js";
import {
  ActivatedRoute,
  AsyncPipe,
  DomRendererFactory2,
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
  provideHttpClient,
  provideRouter,
  registerLocaleData,
  withInMemoryScrolling,
  withViewTransitions
} from "./chunk-5ZWV2562.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  Component,
  DOCUMENT,
  DestroyRef,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgZone,
  RendererFactory2,
  RuntimeError,
  combineLatest,
  computed,
  filter,
  inject,
  makeEnvironmentProviders,
  map,
  performanceMarkFeature,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  startWith,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-O37V3GPT.js";

// node_modules/@angular/common/locales/it.js
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 1 && v === 0)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var it_default = ["it", [["m.", "p."], ["AM", "PM"]], u, [["D", "L", "M", "M", "G", "V", "S"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"]], u, [["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]], u, [["aC", "dC"], ["a.C.", "d.C."], ["avanti Cristo", "dopo Cristo"]], 1, [6, 0], ["dd/MM/yy", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, "{1} {0}", u], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "BRL": [u, "R$"], "BYN": [u, "Br"], "EGP": [u, "\xA3E"], "HKD": [u, "$"], "INR": [u, "\u20B9"], "JPY": [u, "\xA5"], "KRW": [u, "\u20A9"], "MXN": [u, "$"], "NOK": [u, "NKr"], "THB": ["\u0E3F"], "TWD": [u, "NT$"], "USD": [u, "$"], "VND": [u, "\u20AB"] }, "ltr", plural];

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-H7EVYMXK.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

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
        loadComponent: () => import("./chunk-RVQSJMZM.js").then((module) => module.HomePage)
      },
      {
        path: "opere",
        data: { language: "it", pageKey: "artworks" },
        loadComponent: () => import("./chunk-MP2L5X2G.js").then((module) => module.ArtworksPage)
      },
      {
        path: "aste",
        data: { language: "it", pageKey: "auctions" },
        loadComponent: () => import("./chunk-LXHIM3XR.js").then((module) => module.AuctionsPage)
      },
      {
        path: "disegni",
        data: { language: "it", pageKey: "drawings" },
        loadComponent: () => import("./chunk-GH2Y755H.js").then((module) => module.DrawingsPage)
      },
      {
        path: "opere/:slug",
        data: { language: "it", pageKey: "artwork-detail" },
        loadComponent: () => import("./chunk-IPKX4JR4.js").then((module) => module.ArtworkDetailPage)
      },
      {
        path: "aste/:slug",
        data: { language: "it", pageKey: "auction-detail" },
        loadComponent: () => import("./chunk-EAKVFBBF.js").then((module) => module.AuctionDetailPage)
      },
      {
        path: "about",
        data: { language: "it", pageKey: "about" },
        loadComponent: () => import("./chunk-JIVBXV2X.js").then((module) => module.AboutPage)
      },
      {
        path: "commissioni",
        data: { language: "it", pageKey: "commissions" },
        loadComponent: () => import("./chunk-BFUHQPJ7.js").then((module) => module.CommissionsPage)
      },
      {
        path: "contatti",
        data: { language: "it", pageKey: "contacts" },
        loadComponent: () => import("./chunk-74MQZTBR.js").then((module) => module.ContactsPage)
      },
      {
        path: "privacy",
        data: { language: "it", pageKey: "privacy", legalDocument: "privacy" },
        loadComponent: () => import("./chunk-IPLS5B3K.js").then((module) => module.LegalPage)
      },
      {
        path: "cookie-policy",
        data: { language: "it", pageKey: "cookie-policy", legalDocument: "cookies" },
        loadComponent: () => import("./chunk-IPLS5B3K.js").then((module) => module.LegalPage)
      }
    ]
  },
  {
    path: "en",
    children: [
      {
        path: "",
        data: { language: "en", pageKey: "home" },
        loadComponent: () => import("./chunk-RVQSJMZM.js").then((module) => module.HomePage)
      },
      {
        path: "artworks",
        data: { language: "en", pageKey: "artworks" },
        loadComponent: () => import("./chunk-MP2L5X2G.js").then((module) => module.ArtworksPage)
      },
      {
        path: "auctions",
        data: { language: "en", pageKey: "auctions" },
        loadComponent: () => import("./chunk-LXHIM3XR.js").then((module) => module.AuctionsPage)
      },
      {
        path: "drawings",
        data: { language: "en", pageKey: "drawings" },
        loadComponent: () => import("./chunk-GH2Y755H.js").then((module) => module.DrawingsPage)
      },
      {
        path: "artworks/:slug",
        data: { language: "en", pageKey: "artwork-detail" },
        loadComponent: () => import("./chunk-IPKX4JR4.js").then((module) => module.ArtworkDetailPage)
      },
      {
        path: "auctions/:slug",
        data: { language: "en", pageKey: "auction-detail" },
        loadComponent: () => import("./chunk-EAKVFBBF.js").then((module) => module.AuctionDetailPage)
      },
      {
        path: "about",
        data: { language: "en", pageKey: "about" },
        loadComponent: () => import("./chunk-JIVBXV2X.js").then((module) => module.AboutPage)
      },
      {
        path: "commissions",
        data: { language: "en", pageKey: "commissions" },
        loadComponent: () => import("./chunk-BFUHQPJ7.js").then((module) => module.CommissionsPage)
      },
      {
        path: "contact",
        data: { language: "en", pageKey: "contacts" },
        loadComponent: () => import("./chunk-74MQZTBR.js").then((module) => module.ContactsPage)
      },
      {
        path: "privacy",
        data: { language: "en", pageKey: "privacy", legalDocument: "privacy" },
        loadComponent: () => import("./chunk-IPLS5B3K.js").then((module) => module.LegalPage)
      },
      {
        path: "cookie-policy",
        data: { language: "en", pageKey: "cookie-policy", legalDocument: "cookies" },
        loadComponent: () => import("./chunk-IPLS5B3K.js").then((module) => module.LegalPage)
      }
    ]
  },
  {
    path: "opere",
    redirectTo: "it/opere"
  },
  {
    path: "aste",
    redirectTo: "it/aste"
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
    path: "auctions",
    redirectTo: "en/auctions"
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
    path: "privacy",
    redirectTo: "it/privacy"
  },
  {
    path: "cookie-policy",
    redirectTo: "it/cookie-policy"
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
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled"
    }), withViewTransitions())
  ]
};

// sito-artista/src/app/components/cookie-banner/cookie-banner.component.ts
function CookieBannerComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Privacy choices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8)(7, "a", 9);
    \u0275\u0275text(8, "Cookie Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 9);
    \u0275\u0275text(10, "Privacy Policy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "button", 11);
    \u0275\u0275listener("click", function CookieBannerComponent_Conditional_0_Conditional_6_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.acceptAll());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 12);
    \u0275\u0275listener("click", function CookieBannerComponent_Conditional_0_Conditional_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectOptional());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 12);
    \u0275\u0275listener("click", function CookieBannerComponent_Conditional_0_Conditional_6_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPreferences());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "La tua visita, alle tue condizioni." : "Your visit, on your terms.", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Usiamo strumenti tecnici necessari al funzionamento del sito. Con il tuo consenso, Google Analytics ci aiuta a capire in forma statistica come vengono visitate le pagine. Puoi accettare, rifiutare o scegliere: il sito funziona comunque." : "We use technical tools required for the website to work. With your consent, Google Analytics helps us understand website usage statistically. You can accept, reject or choose: the website works either way.", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.cookiePolicyPath);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.privacyPath);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Accetta tutti" : "Accept all", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Rifiuta facoltativi" : "Reject optional", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Personalizza" : "Customize", " ");
  }
}
function CookieBannerComponent_Conditional_0_Conditional_7_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.language === "it" ? "Non attivo nella configurazione del sito." : "Not enabled in the website configuration.");
  }
}
function CookieBannerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Cookie control");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15)(8, "div")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label", 15)(16, "div")(17, "strong");
    \u0275\u0275text(18, "Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, CookieBannerComponent_Conditional_0_Conditional_7_Conditional_21_Template, 2, 1, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 17);
    \u0275\u0275listener("change", function CookieBannerComponent_Conditional_0_Conditional_7_Template_input_change_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateAnalyticsSelection($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 8)(24, "a", 9);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 9);
    \u0275\u0275text(27, "Privacy Policy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "button", 11);
    \u0275\u0275listener("click", function CookieBannerComponent_Conditional_0_Conditional_7_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.savePreferences());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 12);
    \u0275\u0275listener("click", function CookieBannerComponent_Conditional_0_Conditional_7_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectOptional());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Preferenze cookie" : "Cookie preferences", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Le categorie facoltative sono disattivate per impostazione predefinita. Puoi cambiare questa scelta in qualsiasi momento dal footer." : "Optional categories are disabled by default. You can change this choice at any time from the footer.", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.language === "it" ? "Necessari" : "Necessary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.language === "it" ? "Memorizzano la scelta cookie e le sessioni tecniche richieste." : "Store cookie choices and requested technical sessions.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.language === "it" ? "Sempre attivi" : "Always active");
    \u0275\u0275advance();
    \u0275\u0275classProp("consent-category--disabled", !ctx_r1.analyticsEnabled);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.language === "it" ? "Google Analytics 4, caricato soltanto dopo il consenso." : "Google Analytics 4, loaded only after consent.");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.analyticsEnabled ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.analyticsSelected && ctx_r1.analyticsEnabled)("disabled", !ctx_r1.analyticsEnabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.cookiePolicyPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.language === "it" ? "Dettagli sui cookie" : "Cookie details");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.privacyPath);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Salva preferenze" : "Save preferences", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.language === "it" ? "Rifiuta facoltativi" : "Reject optional", " ");
  }
}
function CookieBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function CookieBannerComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectOptional());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "aside", 2)(3, "button", 3);
    \u0275\u0275listener("click", function CookieBannerComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectOptional());
    });
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, CookieBannerComponent_Conditional_0_Conditional_6_Template, 18, 7)(7, CookieBannerComponent_Conditional_0_Conditional_7_Template, 33, 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.language === "it" ? "Continua senza cookie facoltativi" : "Continue without optional cookies");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-labelledby", ctx_r1.preferencesOpen ? "cookie-preferences-title" : "cookie-banner-title");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.language === "it" ? "Chiudi e rifiuta i cookie facoltativi" : "Close and reject optional cookies");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.preferencesOpen ? 6 : 7);
  }
}
var CookieBannerComponent = class _CookieBannerComponent {
  cookieConsentService;
  language = "it";
  analyticsEnabled = false;
  consent = null;
  preferencesOpen = false;
  analyticsSelected = false;
  constructor(cookieConsentService) {
    this.cookieConsentService = cookieConsentService;
    this.cookieConsentService.getConsent$().pipe(takeUntilDestroyed()).subscribe((consent) => {
      this.consent = consent;
      this.analyticsSelected = consent?.analytics ?? false;
    });
    this.cookieConsentService.getPreferencesRequests$().pipe(takeUntilDestroyed()).subscribe(() => this.openPreferences());
  }
  get visible() {
    return this.preferencesOpen || this.analyticsEnabled && !this.consent;
  }
  get privacyPath() {
    return this.language === "it" ? "/it/privacy" : "/en/privacy";
  }
  get cookiePolicyPath() {
    return this.language === "it" ? "/it/cookie-policy" : "/en/cookie-policy";
  }
  acceptAll() {
    this.cookieConsentService.saveConsent({ analytics: this.analyticsEnabled });
    this.preferencesOpen = false;
  }
  rejectOptional() {
    this.cookieConsentService.saveConsent({ analytics: false });
    this.preferencesOpen = false;
  }
  openPreferences() {
    this.analyticsSelected = this.consent?.analytics ?? false;
    this.preferencesOpen = true;
  }
  savePreferences() {
    this.cookieConsentService.saveConsent({
      analytics: this.analyticsEnabled && this.analyticsSelected
    });
    this.preferencesOpen = false;
  }
  updateAnalyticsSelection(event) {
    this.analyticsSelected = event.target.checked;
  }
  static \u0275fac = function CookieBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CookieBannerComponent)(\u0275\u0275directiveInject(CookieConsentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CookieBannerComponent, selectors: [["app-cookie-banner"]], inputs: { language: "language", analyticsEnabled: "analyticsEnabled" }, decls: 1, vars: 1, consts: [[1, "consent-layer"], ["type", "button", 1, "consent-layer__backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "consent-panel"], ["type", "button", 1, "consent-panel__close", 3, "click"], ["aria-hidden", "true"], [1, "consent-panel__eyebrow"], ["id", "cookie-banner-title"], [1, "consent-panel__intro"], [1, "consent-panel__links"], [3, "routerLink"], [1, "consent-panel__actions"], ["type", "button", 1, "consent-button", "consent-button--primary", 3, "click"], ["type", "button", 1, "consent-button", 3, "click"], ["id", "cookie-preferences-title"], [1, "consent-categories"], [1, "consent-category"], [1, "consent-category__status"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "consent-panel__actions", "consent-panel__actions--preferences"]], template: function CookieBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CookieBannerComponent_Conditional_0_Template, 8, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible ? 0 : -1);
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.consent-layer[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  inset: 0;\n  display: grid;\n  align-items: end;\n  padding: 1rem;\n}\n.consent-layer__backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border: 0;\n  background: rgba(18, 16, 14, 0.34);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.consent-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 54rem);\n  max-height: calc(100dvh - 2rem);\n  overflow-y: auto;\n  margin: 0 auto;\n  border: 1px solid var(--site-border);\n  border-radius: 1.75rem;\n  background: var(--site-surface);\n  box-shadow: 0 30px 90px rgba(34, 24, 18, 0.2);\n  padding: clamp(1.35rem, 4vw, 2.25rem);\n  animation: _ngcontent-%COMP%_consent-reveal 0.3s ease both;\n}\n.consent-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 0.7rem 0 0;\n  color: var(--site-text);\n  font-family: var(--site-font-display);\n  font-size: clamp(1.75rem, 5vw, 3rem);\n  line-height: 1.05;\n}\n.consent-panel__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border: 1px solid var(--site-border);\n  border-radius: 50%;\n  background: transparent;\n  color: var(--site-text);\n  font-size: 1.45rem;\n}\n.consent-panel__eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--site-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.23em;\n  text-transform: uppercase;\n}\n.consent-panel__intro[_ngcontent-%COMP%] {\n  max-width: 46rem;\n  margin: 1rem 0 0;\n  color: var(--site-muted);\n  font-size: 0.9rem;\n  line-height: 1.75;\n}\n.consent-panel__links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem 1.25rem;\n  margin-top: 1.25rem;\n}\n.consent-panel__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--site-text);\n  font-size: 0.76rem;\n  text-underline-offset: 0.25rem;\n}\n.consent-panel__actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.7rem;\n  margin-top: 1.5rem;\n}\n.consent-panel__actions--preferences[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.consent-button[_ngcontent-%COMP%] {\n  min-height: 3rem;\n  border: 1px solid var(--site-border);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--site-text);\n  padding: 0.7rem 1rem;\n  font-size: 0.68rem;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.consent-button--primary[_ngcontent-%COMP%] {\n  border-color: var(--site-text);\n  background: var(--site-text);\n  color: white;\n}\n.consent-categories[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n.consent-category[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 1.25rem;\n  border: 1px solid var(--site-border);\n  border-radius: 1.15rem;\n  padding: 1rem;\n}\n.consent-category[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.consent-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.consent-category[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.consent-category[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--site-text);\n  font-size: 0.88rem;\n}\n.consent-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.consent-category[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  color: var(--site-muted);\n  font-size: 0.78rem;\n  line-height: 1.55;\n}\n.consent-category[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  accent-color: var(--site-text);\n}\n.consent-category__status[_ngcontent-%COMP%] {\n  color: var(--site-muted);\n  font-size: 0.66rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.consent-category--disabled[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n@keyframes _ngcontent-%COMP%_consent-reveal {\n  from {\n    opacity: 0;\n    transform: translateY(1rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 640px) {\n  .consent-panel__actions[_ngcontent-%COMP%], \n   .consent-panel__actions--preferences[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .consent-category[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .consent-panel[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=cookie-banner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookieBannerComponent, [{
    type: Component,
    args: [{ selector: "app-cookie-banner", standalone: true, imports: [RouterLink], template: `@if (visible) {
  <div class="consent-layer">
    <button
      type="button"
      class="consent-layer__backdrop"
      [attr.aria-label]="language === 'it' ? 'Continua senza cookie facoltativi' : 'Continue without optional cookies'"
      (click)="rejectOptional()"></button>

    <aside
      class="consent-panel"
      role="dialog"
      aria-modal="true"
      [attr.aria-labelledby]="preferencesOpen ? 'cookie-preferences-title' : 'cookie-banner-title'">
      <button
        type="button"
        class="consent-panel__close"
        [attr.aria-label]="language === 'it' ? 'Chiudi e rifiuta i cookie facoltativi' : 'Close and reject optional cookies'"
        (click)="rejectOptional()">
        <span aria-hidden="true">\xD7</span>
      </button>

      @if (!preferencesOpen) {
        <p class="consent-panel__eyebrow">Privacy choices</p>
        <h2 id="cookie-banner-title">
          {{ language === 'it' ? 'La tua visita, alle tue condizioni.' : 'Your visit, on your terms.' }}
        </h2>
        <p class="consent-panel__intro">
          {{ language === 'it'
            ? 'Usiamo strumenti tecnici necessari al funzionamento del sito. Con il tuo consenso, Google Analytics ci aiuta a capire in forma statistica come vengono visitate le pagine. Puoi accettare, rifiutare o scegliere: il sito funziona comunque.'
            : 'We use technical tools required for the website to work. With your consent, Google Analytics helps us understand website usage statistically. You can accept, reject or choose: the website works either way.' }}
        </p>

        <div class="consent-panel__links">
          <a [routerLink]="cookiePolicyPath">Cookie Policy</a>
          <a [routerLink]="privacyPath">Privacy Policy</a>
        </div>

        <div class="consent-panel__actions">
          <button type="button" class="consent-button consent-button--primary" (click)="acceptAll()">
            {{ language === 'it' ? 'Accetta tutti' : 'Accept all' }}
          </button>
          <button type="button" class="consent-button" (click)="rejectOptional()">
            {{ language === 'it' ? 'Rifiuta facoltativi' : 'Reject optional' }}
          </button>
          <button type="button" class="consent-button" (click)="openPreferences()">
            {{ language === 'it' ? 'Personalizza' : 'Customize' }}
          </button>
        </div>
      } @else {
        <p class="consent-panel__eyebrow">Cookie control</p>
        <h2 id="cookie-preferences-title">
          {{ language === 'it' ? 'Preferenze cookie' : 'Cookie preferences' }}
        </h2>
        <p class="consent-panel__intro">
          {{ language === 'it'
            ? 'Le categorie facoltative sono disattivate per impostazione predefinita. Puoi cambiare questa scelta in qualsiasi momento dal footer.'
            : 'Optional categories are disabled by default. You can change this choice at any time from the footer.' }}
        </p>

        <div class="consent-categories">
          <div class="consent-category">
            <div>
              <strong>{{ language === 'it' ? 'Necessari' : 'Necessary' }}</strong>
              <p>{{ language === 'it' ? 'Memorizzano la scelta cookie e le sessioni tecniche richieste.' : 'Store cookie choices and requested technical sessions.' }}</p>
            </div>
            <span class="consent-category__status">{{ language === 'it' ? 'Sempre attivi' : 'Always active' }}</span>
          </div>

          <label class="consent-category" [class.consent-category--disabled]="!analyticsEnabled">
            <div>
              <strong>Analytics</strong>
              <p>{{ language === 'it' ? 'Google Analytics 4, caricato soltanto dopo il consenso.' : 'Google Analytics 4, loaded only after consent.' }}</p>
              @if (!analyticsEnabled) {
                <small>{{ language === 'it' ? 'Non attivo nella configurazione del sito.' : 'Not enabled in the website configuration.' }}</small>
              }
            </div>
            <input
              type="checkbox"
              [checked]="analyticsSelected && analyticsEnabled"
              [disabled]="!analyticsEnabled"
              (change)="updateAnalyticsSelection($event)" />
          </label>
        </div>

        <div class="consent-panel__links">
          <a [routerLink]="cookiePolicyPath">{{ language === 'it' ? 'Dettagli sui cookie' : 'Cookie details' }}</a>
          <a [routerLink]="privacyPath">Privacy Policy</a>
        </div>

        <div class="consent-panel__actions consent-panel__actions--preferences">
          <button type="button" class="consent-button consent-button--primary" (click)="savePreferences()">
            {{ language === 'it' ? 'Salva preferenze' : 'Save preferences' }}
          </button>
          <button type="button" class="consent-button" (click)="rejectOptional()">
            {{ language === 'it' ? 'Rifiuta facoltativi' : 'Reject optional' }}
          </button>
        </div>
      }
    </aside>
  </div>
}
`, styles: ["/* sito-artista/src/app/components/cookie-banner/cookie-banner.component.sass */\n:host {\n  display: block;\n}\n.consent-layer {\n  position: fixed;\n  z-index: 100;\n  inset: 0;\n  display: grid;\n  align-items: end;\n  padding: 1rem;\n}\n.consent-layer__backdrop {\n  position: absolute;\n  inset: 0;\n  border: 0;\n  background: rgba(18, 16, 14, 0.34);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.consent-panel {\n  position: relative;\n  width: min(100%, 54rem);\n  max-height: calc(100dvh - 2rem);\n  overflow-y: auto;\n  margin: 0 auto;\n  border: 1px solid var(--site-border);\n  border-radius: 1.75rem;\n  background: var(--site-surface);\n  box-shadow: 0 30px 90px rgba(34, 24, 18, 0.2);\n  padding: clamp(1.35rem, 4vw, 2.25rem);\n  animation: consent-reveal 0.3s ease both;\n}\n.consent-panel h2 {\n  max-width: 40rem;\n  margin: 0.7rem 0 0;\n  color: var(--site-text);\n  font-family: var(--site-font-display);\n  font-size: clamp(1.75rem, 5vw, 3rem);\n  line-height: 1.05;\n}\n.consent-panel__close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border: 1px solid var(--site-border);\n  border-radius: 50%;\n  background: transparent;\n  color: var(--site-text);\n  font-size: 1.45rem;\n}\n.consent-panel__eyebrow {\n  margin: 0;\n  color: var(--site-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.23em;\n  text-transform: uppercase;\n}\n.consent-panel__intro {\n  max-width: 46rem;\n  margin: 1rem 0 0;\n  color: var(--site-muted);\n  font-size: 0.9rem;\n  line-height: 1.75;\n}\n.consent-panel__links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem 1.25rem;\n  margin-top: 1.25rem;\n}\n.consent-panel__links a {\n  color: var(--site-text);\n  font-size: 0.76rem;\n  text-underline-offset: 0.25rem;\n}\n.consent-panel__actions {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.7rem;\n  margin-top: 1.5rem;\n}\n.consent-panel__actions--preferences {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.consent-button {\n  min-height: 3rem;\n  border: 1px solid var(--site-border);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--site-text);\n  padding: 0.7rem 1rem;\n  font-size: 0.68rem;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.consent-button--primary {\n  border-color: var(--site-text);\n  background: var(--site-text);\n  color: white;\n}\n.consent-categories {\n  display: grid;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n.consent-category {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 1.25rem;\n  border: 1px solid var(--site-border);\n  border-radius: 1.15rem;\n  padding: 1rem;\n}\n.consent-category strong,\n.consent-category p,\n.consent-category small {\n  display: block;\n}\n.consent-category strong {\n  color: var(--site-text);\n  font-size: 0.88rem;\n}\n.consent-category p,\n.consent-category small {\n  margin: 0.3rem 0 0;\n  color: var(--site-muted);\n  font-size: 0.78rem;\n  line-height: 1.55;\n}\n.consent-category input {\n  width: 1.25rem;\n  height: 1.25rem;\n  accent-color: var(--site-text);\n}\n.consent-category__status {\n  color: var(--site-muted);\n  font-size: 0.66rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.consent-category--disabled {\n  opacity: 0.55;\n}\n@keyframes consent-reveal {\n  from {\n    opacity: 0;\n    transform: translateY(1rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 640px) {\n  .consent-panel__actions,\n  .consent-panel__actions--preferences {\n    grid-template-columns: 1fr;\n  }\n  .consent-category {\n    gap: 0.75rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .consent-panel {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=cookie-banner.component.css.map */\n"] }]
  }], () => [{ type: CookieConsentService }], { language: [{
    type: Input
  }], analyticsEnabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CookieBannerComponent, { className: "CookieBannerComponent", filePath: "sito-artista/src/app/components/cookie-banner/cookie-banner.component.ts", lineNumber: 14 });
})();

// sito-artista/src/app/components/footer/footer.component.ts
function FooterComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.siteConfig.claim[ctx_r0.currentLanguage] || ctx_r0.siteConfig.claim.it, " ");
  }
}
function FooterComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-newsletter", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("siteConfig", ctx_r0.siteConfig)("language", ctx_r0.currentLanguage)("source", "footer")("variant", "footer")("title", ctx_r0.currentLanguage === "it" ? "Ricevi aggiornamenti dallo studio" : "Receive studio updates")("subtitle", ctx_r0.currentLanguage === "it" ? "Nuove opere, disponibilita private e studio notes." : "New works, private availability and studio notes.");
  }
}
function FooterComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", "mailto:" + ctx_r0.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.email);
  }
}
function FooterComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.currentLanguage === "it" ? "Codice fiscale / P. IVA" : "Tax / VAT ID", ": ", ctx_r0.siteConfig.legal.taxId);
  }
}
var FooterComponent = class _FooterComponent {
  cookieConsentService = inject(CookieConsentService);
  artistName = "";
  email = "";
  socialLinks;
  currentLanguage;
  siteConfig;
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  openCookiePreferences() {
    this.cookieConsentService.requestPreferences();
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], inputs: { artistName: "artistName", email: "email", socialLinks: "socialLinks", currentLanguage: "currentLanguage", siteConfig: "siteConfig" }, decls: 50, vars: 29, consts: [[1, "footer", "mt-16", "text-white"], [1, "footer__main", "mx-auto", "grid", "max-w-7xl", "gap-12", "px-5", "py-14", "sm:px-8", "lg:grid-cols-[minmax(0,0.9fr)_minmax(34rem,1.1fr)]", "lg:px-12", "lg:py-16"], [1, "footer__identity"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-white/55"], [1, "mt-4", "max-w-xl", "text-3xl", "leading-tight", "sm:text-4xl"], [1, "mt-4", "max-w-xl", "text-sm", "leading-7", "text-white/68", "sm:text-base"], [1, "mt-6"], [3, "socialLinks", "compact"], [1, "mt-8", "max-w-xl"], [1, "footer__navigation", "grid", "gap-9", "sm:grid-cols-3"], [1, "text-xs", "uppercase", "tracking-[0.24em]", "text-white/55"], [1, "mt-4", "flex", "flex-col", "gap-3", "text-sm", "text-white/80"], [1, "footer-link", 3, "routerLink"], [1, "footer-link", "footer-link--email", 3, "href"], [1, "mt-4", "flex", "flex-col", "gap-3", "text-sm", "text-white/70"], ["type", "button", 1, "footer-cookie-button", 3, "click"], [1, "footer__legal", "border-t", "border-white/10"], [1, "mx-auto", "flex", "max-w-7xl", "flex-col", "gap-3", "px-5", "py-5", "text-xs", "text-white/45", "sm:px-8", "md:flex-row", "md:items-center", "md:justify-between", "lg:px-12"], [3, "siteConfig", "language", "source", "variant", "title", "subtitle"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, FooterComponent_Conditional_7_Template, 2, 1, "p", 5);
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275element(9, "app-social-links", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, FooterComponent_Conditional_10_Template, 2, 6, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "nav", 9)(12, "div")(13, "p", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11)(16, "a", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 12);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 12);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 12);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div")(25, "p", 10);
      \u0275\u0275text(26, "Studio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "a", 12);
      \u0275\u0275text(29, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 12);
      \u0275\u0275text(31, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 12);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, FooterComponent_Conditional_34_Template, 2, 2, "a", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div")(36, "p", 10);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 14)(39, "a", 12);
      \u0275\u0275text(40, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 12);
      \u0275\u0275text(42, "Cookie Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 15);
      \u0275\u0275listener("click", function FooterComponent_Template_button_click_43_listener() {
        return ctx.openCookiePreferences();
      });
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 16)(46, "div", 17)(47, "span");
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(49, FooterComponent_Conditional_49_Template, 2, 2, "span");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.currentLanguage === "it" ? "Studio d\u2019artista" : "Artist studio", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.artistName);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.siteConfig.claim[ctx.currentLanguage] || ctx.siteConfig.claim.it ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("socialLinks", ctx.socialLinks)("compact", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.siteConfig.newsletterEnabled ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.currentLanguage === "it" ? "Navigazione del footer" : "Footer navigation");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Opere" : "Works");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/opere" : "/en/artworks");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Opere" : "Artworks");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/aste" : "/en/auctions");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Aste" : "Auctions");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/disegni" : "/en/drawings");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Disegni" : "Drawings");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/commissioni" : "/en/commissions");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Commissioni" : "Commissions");
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it" : "/en");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/about" : "/en/about");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/contatti" : "/en/contact");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Contatti" : "Contact");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.email ? 34 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentLanguage === "it" ? "Informazioni" : "Information");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/privacy" : "/en/privacy");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it/cookie-policy" : "/en/cookie-policy");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.currentLanguage === "it" ? "Rivedi le scelte cookie" : "Review cookie choices", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate3("\xA9 ", ctx.currentYear, " ", ctx.artistName, ". ", ctx.currentLanguage === "it" ? "Tutti i diritti riservati." : "All rights reserved.");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.siteConfig.legal.taxId ? 49 : -1);
    }
  }, dependencies: [RouterLink, SocialLinksComponent, NewsletterComponent], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 12% 0%,\n      rgba(159, 116, 82, 0.2),\n      transparent 32rem),\n    #1c1712;\n}\n.footer__main[_ngcontent-%COMP%] {\n  position: relative;\n}\n.footer__identity[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.footer__navigation[_ngcontent-%COMP%] {\n  align-content: start;\n  padding-top: 0.15rem;\n}\n.footer-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: color 180ms ease;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.footer-link[_ngcontent-%COMP%]:focus-visible {\n  color: white;\n  outline: 1px solid rgba(255, 255, 255, 0.7);\n  outline-offset: 0.3rem;\n}\n.footer-link--email[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n.footer-cookie-button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: inherit;\n  padding: 0;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: color 180ms ease;\n}\n.footer-cookie-button[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.footer-cookie-button[_ngcontent-%COMP%]:focus-visible {\n  color: white;\n  outline: 1px solid rgba(255, 255, 255, 0.7);\n  outline-offset: 0.3rem;\n}\n.footer__legal[_ngcontent-%COMP%] {\n  letter-spacing: 0.04em;\n}\n@media (max-width: 639px) {\n  .footer__navigation[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .footer__navigation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    grid-column: 1/-1;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink, SocialLinksComponent, NewsletterComponent], template: `<footer class="footer mt-16 text-white">
  <div class="footer__main mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(34rem,1.1fr)] lg:px-12 lg:py-16">
    <div class="footer__identity">
      <p class="text-xs uppercase tracking-[0.28em] text-white/55">
        {{ currentLanguage === 'it' ? 'Studio d\u2019artista' : 'Artist studio' }}
      </p>
      <h2 class="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">{{ artistName }}</h2>

      @if (siteConfig.claim[currentLanguage] || siteConfig.claim.it) {
        <p class="mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
          {{ siteConfig.claim[currentLanguage] || siteConfig.claim.it }}
        </p>
      }

      <div class="mt-6">
        <app-social-links [socialLinks]="socialLinks" [compact]="true" />
      </div>

      @if (siteConfig.newsletterEnabled) {
        <div class="mt-8 max-w-xl">
          <app-newsletter
            [siteConfig]="siteConfig"
            [language]="currentLanguage"
            [source]="'footer'"
            [variant]="'footer'"
            [title]="currentLanguage === 'it' ? 'Ricevi aggiornamenti dallo studio' : 'Receive studio updates'"
            [subtitle]="currentLanguage === 'it' ? 'Nuove opere, disponibilita private e studio notes.' : 'New works, private availability and studio notes.'" />
        </div>
      }
    </div>

    <nav class="footer__navigation grid gap-9 sm:grid-cols-3" [attr.aria-label]="currentLanguage === 'it' ? 'Navigazione del footer' : 'Footer navigation'">
      <div>
        <p class="text-xs uppercase tracking-[0.24em] text-white/55">{{ currentLanguage === 'it' ? 'Opere' : 'Works' }}</p>
        <div class="mt-4 flex flex-col gap-3 text-sm text-white/80">
          <a [routerLink]="currentLanguage === 'it' ? '/it/opere' : '/en/artworks'" class="footer-link">{{ currentLanguage === 'it' ? 'Opere' : 'Artworks' }}</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/aste' : '/en/auctions'" class="footer-link">{{ currentLanguage === 'it' ? 'Aste' : 'Auctions' }}</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/disegni' : '/en/drawings'" class="footer-link">{{ currentLanguage === 'it' ? 'Disegni' : 'Drawings' }}</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/commissioni' : '/en/commissions'" class="footer-link">{{ currentLanguage === 'it' ? 'Commissioni' : 'Commissions' }}</a>
        </div>
      </div>

      <div>
        <p class="text-xs uppercase tracking-[0.24em] text-white/55">Studio</p>
        <div class="mt-4 flex flex-col gap-3 text-sm text-white/80">
          <a [routerLink]="currentLanguage === 'it' ? '/it' : '/en'" class="footer-link">Home</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/about' : '/en/about'" class="footer-link">About</a>
          <a [routerLink]="currentLanguage === 'it' ? '/it/contatti' : '/en/contact'" class="footer-link">{{ currentLanguage === 'it' ? 'Contatti' : 'Contact' }}</a>
          @if (email) {
            <a class="footer-link footer-link--email" [href]="'mailto:' + email">{{ email }}</a>
          }
        </div>
      </div>

      <div>
        <p class="text-xs uppercase tracking-[0.24em] text-white/55">{{ currentLanguage === 'it' ? 'Informazioni' : 'Information' }}</p>
        <div class="mt-4 flex flex-col gap-3 text-sm text-white/70">
          <a class="footer-link" [routerLink]="currentLanguage === 'it' ? '/it/privacy' : '/en/privacy'">Privacy Policy</a>
          <a class="footer-link" [routerLink]="currentLanguage === 'it' ? '/it/cookie-policy' : '/en/cookie-policy'">Cookie Policy</a>
          <button type="button" class="footer-cookie-button" (click)="openCookiePreferences()">
            {{ currentLanguage === 'it' ? 'Rivedi le scelte cookie' : 'Review cookie choices' }}
          </button>
        </div>
      </div>
    </nav>
  </div>

  <div class="footer__legal border-t border-white/10">
    <div class="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
      <span>\xA9 {{ currentYear }} {{ artistName }}. {{ currentLanguage === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.' }}</span>
      @if (siteConfig.legal.taxId) {
        <span>{{ currentLanguage === 'it' ? 'Codice fiscale / P. IVA' : 'Tax / VAT ID' }}: {{ siteConfig.legal.taxId }}</span>
      }
    </div>
  </div>
</footer>
`, styles: ["/* sito-artista/src/app/components/footer/footer.component.sass */\n.footer {\n  background:\n    radial-gradient(\n      circle at 12% 0%,\n      rgba(159, 116, 82, 0.2),\n      transparent 32rem),\n    #1c1712;\n}\n.footer__main {\n  position: relative;\n}\n.footer__identity {\n  min-width: 0;\n}\n.footer__navigation {\n  align-content: start;\n  padding-top: 0.15rem;\n}\n.footer-link {\n  color: inherit;\n  text-decoration: none;\n  transition: color 180ms ease;\n}\n.footer-link:hover {\n  color: white;\n}\n.footer-link:focus-visible {\n  color: white;\n  outline: 1px solid rgba(255, 255, 255, 0.7);\n  outline-offset: 0.3rem;\n}\n.footer-link--email {\n  overflow-wrap: anywhere;\n}\n.footer-cookie-button {\n  border: 0;\n  background: transparent;\n  color: inherit;\n  padding: 0;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: color 180ms ease;\n}\n.footer-cookie-button:hover {\n  color: white;\n}\n.footer-cookie-button:focus-visible {\n  color: white;\n  outline: 1px solid rgba(255, 255, 255, 0.7);\n  outline-offset: 0.3rem;\n}\n.footer__legal {\n  letter-spacing: 0.04em;\n}\n@media (max-width: 639px) {\n  .footer__navigation {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .footer__navigation > div:last-child {\n    grid-column: 1/-1;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "sito-artista/src/app/components/footer/footer.component.ts", lineNumber: 16 });
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
function _forTrack0($index, $item) {
  return this.navPath($item);
}
var _forTrack1 = ($index, $item) => $item.id;
function HeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.logoUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.artistName);
  }
}
function HeaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.artistName);
  }
}
function HeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.navPath(item_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.navLabel(item_r2), " ");
  }
}
function HeaderComponent_Conditional_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLanguage === "it" ? "Scrivi almeno due caratteri per trovare rapidamente un\u2019opera vista sui social o nel catalogo." : "Type at least two characters to quickly find an artwork seen on social media or in the catalogue.", " ");
  }
}
function HeaderComponent_Conditional_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 28);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openArchive());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentLanguage === "it" ? "Nessuna opera trovata con questa ricerca." : "No artworks found for this search.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLanguage === "it" ? "Apri archivio completo" : "Open full archive", " ");
  }
}
function HeaderComponent_Conditional_23_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Conditional_15_For_2_Template_button_click_0_listener() {
      const artwork_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.navigateToArtwork(artwork_r7));
    });
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementStart(2, "span", 33)(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const artwork_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", artwork_r7.images.main.sources.thumbnail || artwork_r7.images.main.sources.small || artwork_r7.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", artwork_r7.images.main.alt[ctx_r0.currentLanguage] || artwork_r7.images.main.alt.it);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", artwork_r7.title[ctx_r0.currentLanguage] || artwork_r7.title.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", artwork_r7.year, " \xB7 ", artwork_r7.technique[ctx_r0.currentLanguage] || artwork_r7.technique.it, " ");
  }
}
function HeaderComponent_Conditional_23_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, HeaderComponent_Conditional_23_Conditional_15_For_2_Template, 7, 5, "button", 30, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 28);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openArchive());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.searchResults());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLanguage === "it" ? "Vai all\u2019archivio completo" : "Go to full archive", " ");
  }
}
function HeaderComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "section", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 22);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSearch());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 23)(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 25);
    \u0275\u0275listener("ngModelChange", function HeaderComponent_Conditional_23_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateSearchQuery($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, HeaderComponent_Conditional_23_Conditional_13_Template, 2, 1, "p", 26)(14, HeaderComponent_Conditional_23_Conditional_14_Template, 5, 2, "div", 27)(15, HeaderComponent_Conditional_23_Conditional_15_Template, 5, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLanguage === "it" ? "Ricerca opere" : "Artwork search", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLanguage === "it" ? "Chiudi" : "Close", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.currentLanguage === "it" ? "Cerca nel catalogo" : "Search the catalogue");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.searchQuery())("placeholder", ctx_r0.currentLanguage === "it" ? "Titolo, tecnica, anno, serie..." : "Title, technique, year, series...");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hasSearchQuery() ? 13 : ctx_r0.searchResults().length === 0 ? 14 : 15);
  }
}
function HeaderComponent_Conditional_24_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_24_For_10_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeMenu());
    });
    \u0275\u0275elementStart(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const \u0275$index_121_r11 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.navPath(item_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((\u0275$index_121_r11 + 1).toString().padStart(2, "0"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.navLabel(item_r10));
  }
}
function HeaderComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMenu());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "section", 37)(2, "div", 38)(3, "div", 39)(4, "p", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nav", 42);
    \u0275\u0275repeaterCreate(9, HeaderComponent_Conditional_24_For_10_Template, 5, 3, "a", 43, _forTrack0, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 44)(12, "button", 45);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_24_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSearch());
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 46);
    \u0275\u0275text(16, "\u2197");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 47);
    \u0275\u0275element(18, "app-language-switcher", 13)(19, "app-social-links", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.currentLanguage === "it" ? "Indice" : "Index");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLanguage === "it" ? "Arte visiva, ricerca e progetti." : "Visual art, research and projects.", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.currentLanguage === "it" ? "Tutte le sezioni" : "All sections");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.studioNavigation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.currentLanguage === "it" ? "Cerca nel catalogo" : "Search the catalogue");
    \u0275\u0275advance(4);
    \u0275\u0275property("currentLanguage", ctx_r0.currentLanguage)("italianPath", ctx_r0.italianPath)("englishPath", ctx_r0.englishPath)("monochrome", true);
    \u0275\u0275advance();
    \u0275\u0275property("socialLinks", ctx_r0.socialLinks)("compact", true)("monochrome", true);
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
  logoUrl = "";
  socialLinks;
  currentLanguage;
  italianPath;
  englishPath;
  menuOpen = signal(false, ...ngDevMode ? [{ debugName: "menuOpen" }] : []);
  scrolled = signal(false, ...ngDevMode ? [{ debugName: "scrolled" }] : []);
  searchOpen = signal(false, ...ngDevMode ? [{ debugName: "searchOpen" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  artworks = signal([], ...ngDevMode ? [{ debugName: "artworks" }] : []);
  primaryNavigation = [
    { label: { it: "Opere", en: "Artworks" }, path: { it: "/it/opere", en: "/en/artworks" } },
    { label: { it: "Aste", en: "Auctions" }, path: { it: "/it/aste", en: "/en/auctions" } },
    { label: { it: "Disegni", en: "Drawings" }, path: { it: "/it/disegni", en: "/en/drawings" } },
    { label: { it: "Commissioni", en: "Commissions" }, path: { it: "/it/commissioni", en: "/en/commissions" } }
  ];
  studioNavigation = [
    ...this.primaryNavigation,
    { label: { it: "About", en: "About" }, path: { it: "/it/about", en: "/en/about" } },
    { label: { it: "Contatti", en: "Contact" }, path: { it: "/it/contatti", en: "/en/contact" } }
  ];
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
    this.closeMenu();
    this.closeSearch();
  }
  navLabel(item) {
    return item.label[this.currentLanguage];
  }
  navPath(item) {
    return item.path[this.currentLanguage];
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
  }, inputs: { artistName: "artistName", logoUrl: "logoUrl", socialLinks: "socialLinks", currentLanguage: "currentLanguage", italianPath: "italianPath", englishPath: "englishPath" }, decls: 25, vars: 24, consts: [[1, "header", "fixed", "inset-x-0", "top-0", "z-50", "transition", "duration-300", 3, "ngClass"], [1, "header-bar"], [1, "header-brand", 3, "click", "routerLink"], [1, "block", "h-12", "w-auto", "max-w-[10.5rem]", "object-contain", "object-left", "sm:h-[3.2rem]", "sm:max-w-[14rem]", 3, "src", "alt"], [1, "header-primary"], ["routerLinkActive", "header-link--active", 1, "header-link", 3, "routerLink"], [1, "header-actions"], ["type", "button", 1, "header-search-trigger", 3, "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["cx", "11", "cy", "11", "r", "6.5"], ["d", "m16 16 4 4"], [1, "header-search-label-short"], [1, "header-language"], [3, "currentLanguage", "italianPath", "englishPath", "monochrome"], ["type", "button", 1, "header-toggle", 3, "click"], ["aria-hidden", "true", 1, "header-toggle__icon"], ["type", "button", "aria-label", "Chiudi ricerca", 1, "header-search-backdrop", 3, "click"], [1, "header-search-panel"], [1, "mx-auto", "max-w-4xl", "px-5", "py-4", "sm:px-8", "lg:px-12"], [1, "header-search-shell"], [1, "header-search-topline"], [1, "header-search-label"], ["type", "button", 1, "header-search-close", 3, "click"], [1, "header-search-field"], [1, "sr-only"], ["type", "search", 1, "header-search-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "header-search-helper"], [1, "header-search-empty"], ["type", "button", 1, "header-search-archive-link", 3, "click"], [1, "header-search-results"], ["type", "button", 1, "header-search-result"], ["type", "button", 1, "header-search-result", 3, "click"], [1, "header-search-result__image", 3, "src", "alt"], [1, "header-search-result__body"], [1, "header-search-result__title"], [1, "header-search-result__meta"], ["type", "button", "aria-label", "Chiudi menu", 1, "header-menu-backdrop", 3, "click"], [1, "header-menu-panel"], [1, "header-menu-inner"], [1, "header-menu-intro"], [1, "header-menu-eyebrow"], [1, "header-menu-statement"], [1, "header-menu-navigation"], ["routerLinkActive", "header-menu-link--active", 1, "header-menu-link", 3, "routerLink"], [1, "header-menu-tools"], ["type", "button", 1, "header-menu-search", 3, "click"], ["aria-hidden", "true"], [1, "header-menu-meta"], [3, "socialLinks", "compact", "monochrome"], ["routerLinkActive", "header-menu-link--active", 1, "header-menu-link", 3, "click", "routerLink"], [1, "header-menu-link__number"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_2_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275conditionalCreate(3, HeaderComponent_Conditional_3_Template, 1, 2, "img", 3)(4, HeaderComponent_Conditional_4_Template, 2, 1, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "nav", 4);
      \u0275\u0275repeaterCreate(6, HeaderComponent_For_7_Template, 2, 2, "a", 5, _forTrack0, true);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_9_listener() {
        return ctx.toggleSearch();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "circle", 9)(12, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275element(16, "app-language-switcher", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 14);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_17_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 15);
      \u0275\u0275element(21, "i")(22, "i");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(23, HeaderComponent_Conditional_23_Template, 16, 6);
      \u0275\u0275conditionalCreate(24, HeaderComponent_Conditional_24_Template, 20, 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(21, _c0, ctx.scrolled() || ctx.menuOpen(), !ctx.scrolled() && !ctx.menuOpen()));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-[var(--site-text)]", true);
      \u0275\u0275property("routerLink", ctx.currentLanguage === "it" ? "/it" : "/en");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.logoUrl ? 3 : 4);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.currentLanguage === "it" ? "Navigazione principale" : "Primary navigation");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.primaryNavigation);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-[var(--site-text)]", true);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-expanded", ctx.searchOpen());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.currentLanguage === "it" ? "Cerca" : "Search", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("currentLanguage", ctx.currentLanguage)("italianPath", ctx.italianPath)("englishPath", ctx.englishPath)("monochrome", true);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-expanded", ctx.menuOpen())("aria-label", ctx.menuOpen() ? ctx.currentLanguage === "it" ? "Chiudi menu" : "Close menu" : ctx.currentLanguage === "it" ? "Apri menu" : "Open menu");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.menuOpen() ? ctx.currentLanguage === "it" ? "Chiudi" : "Close" : "Menu");
      \u0275\u0275advance();
      \u0275\u0275classProp("header-toggle__icon--open", ctx.menuOpen());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.searchOpen() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.menuOpen() ? 24 : -1);
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
  ], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  --header-height: 5rem;\n}\n.header--transparent[_ngcontent-%COMP%] {\n  background: rgba(255, 253, 248, 0.92);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border-bottom: 1px solid rgba(29, 27, 25, 0.05);\n}\n.header--solid[_ngcontent-%COMP%] {\n  background: rgba(255, 253, 248, 0.98);\n  -webkit-backdrop-filter: blur(18px);\n  backdrop-filter: blur(18px);\n  border-bottom: 1px solid rgba(29, 27, 25, 0.08);\n}\n.header-bar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 70;\n  display: grid;\n  grid-template-columns: minmax(10rem, 1fr) auto;\n  align-items: center;\n  gap: 2rem;\n  width: min(100%, 96rem);\n  min-height: var(--header-height);\n  margin: 0 auto;\n  padding: 0 1.25rem;\n}\n.header-brand[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.78rem;\n  letter-spacing: 0.25em;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.header-primary[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  gap: clamp(1.4rem, 2.25vw, 2.75rem);\n  color: var(--site-text);\n}\n.header-link[_ngcontent-%COMP%] {\n  position: relative;\n  color: inherit;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.header-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  bottom: -0.55rem;\n  left: 0;\n  height: 1px;\n  background: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.25s ease;\n}\n.header-link[_ngcontent-%COMP%]:hover::after, \n.header-link.header-link--active[_ngcontent-%COMP%]::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n.header-link--active[_ngcontent-%COMP%] {\n  opacity: 0.62;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-self: end;\n  gap: 0.65rem;\n  white-space: nowrap;\n}\n.header-search-trigger[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 0.55rem;\n  color: inherit;\n  background: transparent;\n  border: 0;\n  padding: 0.6rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.17em;\n  text-transform: uppercase;\n}\n.header-search-trigger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-width: 1.5;\n}\n.header-language[_ngcontent-%COMP%] {\n  display: none;\n}\n.header-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  min-height: 2.65rem;\n  border: 1px solid var(--site-border);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.36);\n  color: inherit;\n  padding: 0 1rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.header-toggle__icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 1.05rem;\n  height: 0.7rem;\n}\n.header-toggle__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: currentColor;\n  transition: top 0.25s ease, transform 0.25s ease;\n}\n.header-toggle__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  top: 0.18rem;\n}\n.header-toggle__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  top: 0.52rem;\n}\n.header-toggle__icon--open[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: 0.35rem;\n}\n.header-toggle__icon--open[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  transform: rotate(45deg);\n}\n.header-toggle__icon--open[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  transform: rotate(-45deg);\n}\n.header-menu-backdrop[_ngcontent-%COMP%], \n.header-search-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  border: 0;\n  background: rgba(18, 16, 14, 0.28);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.header-menu-backdrop[_ngcontent-%COMP%] {\n  z-index: 51;\n}\n.header-menu-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 60;\n  inset: var(--header-height) 0 auto;\n  max-height: calc(100dvh - var(--header-height));\n  overflow-y: auto;\n  border-top: 1px solid rgba(29, 27, 25, 0.07);\n  background: var(--site-surface);\n  box-shadow: 0 30px 80px rgba(34, 24, 18, 0.18);\n  animation: _ngcontent-%COMP%_reveal-menu 0.28s ease both;\n}\n.header-menu-inner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2.5rem;\n  width: min(100%, 96rem);\n  margin: 0 auto;\n  padding: 2.2rem 1.25rem 2.5rem;\n}\n.header-menu-eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  color: var(--site-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.23em;\n  text-transform: uppercase;\n}\n.header-menu-statement[_ngcontent-%COMP%] {\n  max-width: 18rem;\n  margin: 0;\n  color: var(--site-text);\n  font-family: var(--site-font-display);\n  font-size: clamp(1.65rem, 5vw, 2.5rem);\n  line-height: 1.05;\n}\n.header-menu-navigation[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0 1.5rem;\n}\n.header-menu-link[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.8rem minmax(0, 1fr);\n  align-items: baseline;\n  gap: 0.7rem;\n  border-bottom: 1px solid var(--site-border);\n  color: var(--site-text);\n  padding: 0.8rem 0;\n  font-family: var(--site-font-display);\n  font-size: clamp(1.25rem, 4.8vw, 2rem);\n  line-height: 1.1;\n  text-decoration: none;\n  transition: color 0.2s ease, padding-left 0.2s ease;\n}\n.header-menu-link[_ngcontent-%COMP%]:hover, \n.header-menu-link.header-menu-link--active[_ngcontent-%COMP%] {\n  color: var(--site-accent);\n  padding-left: 0.25rem;\n}\n.header-menu-link__number[_ngcontent-%COMP%] {\n  color: var(--site-muted);\n  font-family: var(--site-font-body);\n  font-size: 0.58rem;\n  letter-spacing: 0.12em;\n}\n.header-menu-tools[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.header-menu-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  border-bottom: 1px solid var(--site-text);\n  background: transparent;\n  color: var(--site-text);\n  padding: 0 0 0.8rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-align: left;\n  text-transform: uppercase;\n}\n.header-menu-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.25rem;\n}\n.header-search-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: var(--header-height) 0 auto 0;\n  z-index: 60;\n}\n.header-search-shell[_ngcontent-%COMP%] {\n  border: 1px solid rgba(29, 27, 25, 0.08);\n  border-radius: 1.8rem;\n  background: rgba(255, 253, 248, 0.96);\n  box-shadow: 0 24px 64px rgba(34, 24, 18, 0.14);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  padding: 1.2rem;\n}\n.header-search-topline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.9rem;\n}\n.header-search-label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-close[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-field[_ngcontent-%COMP%] {\n  display: block;\n}\n.header-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgba(29, 27, 25, 0.1);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.82);\n  color: var(--site-text);\n  padding: 0.95rem 1.2rem;\n  font-size: 0.98rem;\n  outline: none;\n}\n.header-search-input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(159, 116, 82, 0.28);\n}\n.header-search-helper[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.92rem;\n  line-height: 1.8;\n  color: var(--site-muted);\n}\n.header-search-empty[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n  color: var(--site-muted);\n}\n.header-search-results[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n  max-height: min(60vh, 32rem);\n  overflow-y: auto;\n}\n.header-search-result[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 4.5rem minmax(0, 1fr);\n  gap: 1rem;\n  align-items: center;\n  width: 100%;\n  border: 1px solid rgba(29, 27, 25, 0.06);\n  border-radius: 1.35rem;\n  background: rgba(255, 255, 255, 0.72);\n  padding: 0.7rem;\n  text-align: left;\n  transition:\n    transform 0.22s ease,\n    border-color 0.22s ease,\n    background-color 0.22s ease;\n}\n.header-search-result[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(159, 116, 82, 0.2);\n  background: rgba(255, 255, 255, 0.9);\n}\n.header-search-result__image[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 1rem;\n  object-fit: cover;\n}\n.header-search-result__body[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: grid;\n  gap: 0.35rem;\n}\n.header-search-result__title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.25;\n  color: var(--site-text);\n}\n.header-search-result__meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-archive-link[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  font-size: 0.76rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--site-accent);\n}\n@media (min-width: 640px) {\n  .header-bar[_ngcontent-%COMP%], \n   .header-menu-inner[_ngcontent-%COMP%] {\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n  .header-search-trigger[_ngcontent-%COMP%], \n   .header-language[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .header-menu-inner[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(12rem, 0.7fr) minmax(24rem, 1.3fr);\n  }\n  .header-menu-tools[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    grid-template-columns: minmax(16rem, 1fr) auto;\n    align-items: end;\n  }\n  .header-menu-meta[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n}\n@media (min-width: 1280px) {\n  .header-bar[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(12rem, 0.8fr) minmax(31rem, auto) minmax(19rem, 0.8fr);\n    padding-right: 3rem;\n    padding-left: 3rem;\n  }\n  .header-primary[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .header-menu-inner[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(15rem, 0.7fr) minmax(30rem, 1.3fr) minmax(16rem, 0.65fr);\n    padding: 3.25rem 3rem 3.5rem;\n  }\n  .header-menu-navigation[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .header-menu-link[_ngcontent-%COMP%] {\n    padding: 0.65rem 0;\n    font-size: clamp(1.55rem, 2.2vw, 2.25rem);\n  }\n  .header-menu-tools[_ngcontent-%COMP%] {\n    grid-column: auto;\n    grid-template-columns: 1fr;\n    align-content: space-between;\n  }\n  .header-menu-meta[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 639px) {\n  .header[_ngcontent-%COMP%] {\n    --header-height: 4.5rem;\n  }\n  .header-bar[_ngcontent-%COMP%] {\n    gap: 0.8rem;\n  }\n  .header-brand[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n    letter-spacing: 0.2em;\n  }\n  .header-toggle[_ngcontent-%COMP%] {\n    min-height: 2.45rem;\n    padding: 0 0.85rem;\n  }\n  .header-menu-navigation[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .header-search-shell[_ngcontent-%COMP%] {\n    border-radius: 1.4rem;\n    padding: 1rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_reveal-menu {\n  from {\n    opacity: 0;\n    transform: translateY(-0.75rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .header-menu-panel[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */'] });
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
  <div class="header-bar">
    <a
      [routerLink]="currentLanguage === 'it' ? '/it' : '/en'"
      class="header-brand"
      [class.text-[var(--site-text)]]="true"
      (click)="closeMenu()">
      @if (logoUrl) {
        <img
          class="block h-12 w-auto max-w-[10.5rem] object-contain object-left sm:h-[3.2rem] sm:max-w-[14rem]"
          [src]="logoUrl"
          [alt]="artistName" />
      } @else {
        <span>{{ artistName }}</span>
      }
    </a>

    <nav class="header-primary" [attr.aria-label]="currentLanguage === 'it' ? 'Navigazione principale' : 'Primary navigation'">
      @for (item of primaryNavigation; track navPath(item)) {
        <a [routerLink]="navPath(item)" routerLinkActive="header-link--active" class="header-link">
          {{ navLabel(item) }}
        </a>
      }
    </nav>

    <div class="header-actions" [class.text-[var(--site-text)]]="true">
      <button type="button" class="header-search-trigger" (click)="toggleSearch()" [attr.aria-expanded]="searchOpen()">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5"></circle>
          <path d="m16 16 4 4"></path>
        </svg>
        <span class="header-search-label-short">
        {{ currentLanguage === 'it' ? 'Cerca' : 'Search' }}
        </span>
      </button>

      <div class="header-language">
        <app-language-switcher
          [currentLanguage]="currentLanguage"
          [italianPath]="italianPath"
          [englishPath]="englishPath"
          [monochrome]="true" />
      </div>

      <button
        type="button"
        class="header-toggle"
        (click)="toggleMenu()"
        [attr.aria-expanded]="menuOpen()"
        [attr.aria-label]="menuOpen()
          ? (currentLanguage === 'it' ? 'Chiudi menu' : 'Close menu')
          : (currentLanguage === 'it' ? 'Apri menu' : 'Open menu')">
        <span>{{ menuOpen() ? (currentLanguage === 'it' ? 'Chiudi' : 'Close') : 'Menu' }}</span>
        <span class="header-toggle__icon" [class.header-toggle__icon--open]="menuOpen()" aria-hidden="true">
          <i></i><i></i>
        </span>
      </button>
    </div>
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
    <button type="button" class="header-menu-backdrop" aria-label="Chiudi menu" (click)="closeMenu()"></button>
    <section class="header-menu-panel">
      <div class="header-menu-inner">
        <div class="header-menu-intro">
          <p class="header-menu-eyebrow">{{ currentLanguage === 'it' ? 'Indice' : 'Index' }}</p>
          <p class="header-menu-statement">
            {{ currentLanguage === 'it'
              ? 'Arte visiva, ricerca e progetti.'
              : 'Visual art, research and projects.' }}
          </p>
        </div>

        <nav class="header-menu-navigation" [attr.aria-label]="currentLanguage === 'it' ? 'Tutte le sezioni' : 'All sections'">
          @for (item of studioNavigation; track navPath(item); let index = $index) {
            <a [routerLink]="navPath(item)" class="header-menu-link" routerLinkActive="header-menu-link--active" (click)="closeMenu()">
              <span class="header-menu-link__number">{{ (index + 1).toString().padStart(2, '0') }}</span>
              <span>{{ navLabel(item) }}</span>
            </a>
          }
        </nav>

        <div class="header-menu-tools">
          <button type="button" class="header-menu-search" (click)="toggleSearch()">
            <span>{{ currentLanguage === 'it' ? 'Cerca nel catalogo' : 'Search the catalogue' }}</span>
            <span aria-hidden="true">\u2197</span>
          </button>

          <div class="header-menu-meta">
          <app-language-switcher
            [currentLanguage]="currentLanguage"
            [italianPath]="italianPath"
            [englishPath]="englishPath"
            [monochrome]="true" />
          <app-social-links [socialLinks]="socialLinks" [compact]="true" [monochrome]="true" />
          </div>
        </div>
      </div>
    </section>
  }
</header>
`, styles: ['/* sito-artista/src/app/components/header/header.component.sass */\n.header {\n  --header-height: 5rem;\n}\n.header--transparent {\n  background: rgba(255, 253, 248, 0.92);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border-bottom: 1px solid rgba(29, 27, 25, 0.05);\n}\n.header--solid {\n  background: rgba(255, 253, 248, 0.98);\n  -webkit-backdrop-filter: blur(18px);\n  backdrop-filter: blur(18px);\n  border-bottom: 1px solid rgba(29, 27, 25, 0.08);\n}\n.header-bar {\n  position: relative;\n  z-index: 70;\n  display: grid;\n  grid-template-columns: minmax(10rem, 1fr) auto;\n  align-items: center;\n  gap: 2rem;\n  width: min(100%, 96rem);\n  min-height: var(--header-height);\n  margin: 0 auto;\n  padding: 0 1.25rem;\n}\n.header-brand {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.78rem;\n  letter-spacing: 0.25em;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.header-primary {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  gap: clamp(1.4rem, 2.25vw, 2.75rem);\n  color: var(--site-text);\n}\n.header-link {\n  position: relative;\n  color: inherit;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.header-link::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  bottom: -0.55rem;\n  left: 0;\n  height: 1px;\n  background: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.25s ease;\n}\n.header-link:hover::after,\n.header-link.header-link--active::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n.header-link--active {\n  opacity: 0.62;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  justify-self: end;\n  gap: 0.65rem;\n  white-space: nowrap;\n}\n.header-search-trigger {\n  display: none;\n  align-items: center;\n  gap: 0.55rem;\n  color: inherit;\n  background: transparent;\n  border: 0;\n  padding: 0.6rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.17em;\n  text-transform: uppercase;\n}\n.header-search-trigger svg {\n  width: 1rem;\n  height: 1rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-width: 1.5;\n}\n.header-language {\n  display: none;\n}\n.header-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  min-height: 2.65rem;\n  border: 1px solid var(--site-border);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.36);\n  color: inherit;\n  padding: 0 1rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.header-toggle__icon {\n  position: relative;\n  display: block;\n  width: 1.05rem;\n  height: 0.7rem;\n}\n.header-toggle__icon i {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: currentColor;\n  transition: top 0.25s ease, transform 0.25s ease;\n}\n.header-toggle__icon i:first-child {\n  top: 0.18rem;\n}\n.header-toggle__icon i:last-child {\n  top: 0.52rem;\n}\n.header-toggle__icon--open i {\n  top: 0.35rem;\n}\n.header-toggle__icon--open i:first-child {\n  transform: rotate(45deg);\n}\n.header-toggle__icon--open i:last-child {\n  transform: rotate(-45deg);\n}\n.header-menu-backdrop,\n.header-search-backdrop {\n  position: fixed;\n  inset: 0;\n  border: 0;\n  background: rgba(18, 16, 14, 0.28);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.header-menu-backdrop {\n  z-index: 51;\n}\n.header-menu-panel {\n  position: fixed;\n  z-index: 60;\n  inset: var(--header-height) 0 auto;\n  max-height: calc(100dvh - var(--header-height));\n  overflow-y: auto;\n  border-top: 1px solid rgba(29, 27, 25, 0.07);\n  background: var(--site-surface);\n  box-shadow: 0 30px 80px rgba(34, 24, 18, 0.18);\n  animation: reveal-menu 0.28s ease both;\n}\n.header-menu-inner {\n  display: grid;\n  gap: 2.5rem;\n  width: min(100%, 96rem);\n  margin: 0 auto;\n  padding: 2.2rem 1.25rem 2.5rem;\n}\n.header-menu-eyebrow {\n  margin: 0 0 0.8rem;\n  color: var(--site-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.23em;\n  text-transform: uppercase;\n}\n.header-menu-statement {\n  max-width: 18rem;\n  margin: 0;\n  color: var(--site-text);\n  font-family: var(--site-font-display);\n  font-size: clamp(1.65rem, 5vw, 2.5rem);\n  line-height: 1.05;\n}\n.header-menu-navigation {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0 1.5rem;\n}\n.header-menu-link {\n  display: grid;\n  grid-template-columns: 1.8rem minmax(0, 1fr);\n  align-items: baseline;\n  gap: 0.7rem;\n  border-bottom: 1px solid var(--site-border);\n  color: var(--site-text);\n  padding: 0.8rem 0;\n  font-family: var(--site-font-display);\n  font-size: clamp(1.25rem, 4.8vw, 2rem);\n  line-height: 1.1;\n  text-decoration: none;\n  transition: color 0.2s ease, padding-left 0.2s ease;\n}\n.header-menu-link:hover,\n.header-menu-link.header-menu-link--active {\n  color: var(--site-accent);\n  padding-left: 0.25rem;\n}\n.header-menu-link__number {\n  color: var(--site-muted);\n  font-family: var(--site-font-body);\n  font-size: 0.58rem;\n  letter-spacing: 0.12em;\n}\n.header-menu-tools {\n  display: grid;\n  gap: 1.5rem;\n}\n.header-menu-search {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  border-bottom: 1px solid var(--site-text);\n  background: transparent;\n  color: var(--site-text);\n  padding: 0 0 0.8rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-align: left;\n  text-transform: uppercase;\n}\n.header-menu-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.25rem;\n}\n.header-search-panel {\n  position: fixed;\n  inset: var(--header-height) 0 auto 0;\n  z-index: 60;\n}\n.header-search-shell {\n  border: 1px solid rgba(29, 27, 25, 0.08);\n  border-radius: 1.8rem;\n  background: rgba(255, 253, 248, 0.96);\n  box-shadow: 0 24px 64px rgba(34, 24, 18, 0.14);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  padding: 1.2rem;\n}\n.header-search-topline {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.9rem;\n}\n.header-search-label {\n  font-size: 0.74rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-close {\n  border: 0;\n  background: transparent;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-field {\n  display: block;\n}\n.header-search-input {\n  width: 100%;\n  border: 1px solid rgba(29, 27, 25, 0.1);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.82);\n  color: var(--site-text);\n  padding: 0.95rem 1.2rem;\n  font-size: 0.98rem;\n  outline: none;\n}\n.header-search-input:focus {\n  border-color: rgba(159, 116, 82, 0.28);\n}\n.header-search-helper {\n  margin-top: 1rem;\n  font-size: 0.92rem;\n  line-height: 1.8;\n  color: var(--site-muted);\n}\n.header-search-empty {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n  color: var(--site-muted);\n}\n.header-search-results {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n  max-height: min(60vh, 32rem);\n  overflow-y: auto;\n}\n.header-search-result {\n  display: grid;\n  grid-template-columns: 4.5rem minmax(0, 1fr);\n  gap: 1rem;\n  align-items: center;\n  width: 100%;\n  border: 1px solid rgba(29, 27, 25, 0.06);\n  border-radius: 1.35rem;\n  background: rgba(255, 255, 255, 0.72);\n  padding: 0.7rem;\n  text-align: left;\n  transition:\n    transform 0.22s ease,\n    border-color 0.22s ease,\n    background-color 0.22s ease;\n}\n.header-search-result:hover {\n  transform: translateY(-1px);\n  border-color: rgba(159, 116, 82, 0.2);\n  background: rgba(255, 255, 255, 0.9);\n}\n.header-search-result__image {\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 1rem;\n  object-fit: cover;\n}\n.header-search-result__body {\n  min-width: 0;\n  display: grid;\n  gap: 0.35rem;\n}\n.header-search-result__title {\n  font-size: 1.05rem;\n  line-height: 1.25;\n  color: var(--site-text);\n}\n.header-search-result__meta {\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.header-search-archive-link {\n  margin-top: 1rem;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  font-size: 0.76rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--site-accent);\n}\n@media (min-width: 640px) {\n  .header-bar,\n  .header-menu-inner {\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n  .header-search-trigger,\n  .header-language {\n    display: flex;\n  }\n  .header-menu-inner {\n    grid-template-columns: minmax(12rem, 0.7fr) minmax(24rem, 1.3fr);\n  }\n  .header-menu-tools {\n    grid-column: 1/-1;\n    grid-template-columns: minmax(16rem, 1fr) auto;\n    align-items: end;\n  }\n  .header-menu-meta {\n    justify-content: flex-end;\n  }\n}\n@media (min-width: 1280px) {\n  .header-bar {\n    grid-template-columns: minmax(12rem, 0.8fr) minmax(31rem, auto) minmax(19rem, 0.8fr);\n    padding-right: 3rem;\n    padding-left: 3rem;\n  }\n  .header-primary {\n    display: flex;\n  }\n  .header-menu-inner {\n    grid-template-columns: minmax(15rem, 0.7fr) minmax(30rem, 1.3fr) minmax(16rem, 0.65fr);\n    padding: 3.25rem 3rem 3.5rem;\n  }\n  .header-menu-navigation {\n    grid-template-columns: 1fr;\n  }\n  .header-menu-link {\n    padding: 0.65rem 0;\n    font-size: clamp(1.55rem, 2.2vw, 2.25rem);\n  }\n  .header-menu-tools {\n    grid-column: auto;\n    grid-template-columns: 1fr;\n    align-content: space-between;\n  }\n  .header-menu-meta {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 639px) {\n  .header {\n    --header-height: 4.5rem;\n  }\n  .header-bar {\n    gap: 0.8rem;\n  }\n  .header-brand {\n    font-size: 0.68rem;\n    letter-spacing: 0.2em;\n  }\n  .header-toggle {\n    min-height: 2.45rem;\n    padding: 0 0.85rem;\n  }\n  .header-menu-navigation {\n    grid-template-columns: 1fr;\n  }\n  .header-search-shell {\n    border-radius: 1.4rem;\n    padding: 1rem;\n  }\n}\n@keyframes reveal-menu {\n  from {\n    opacity: 0;\n    transform: translateY(-0.75rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .header-menu-panel {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n'] }]
  }], () => [{ type: ArtworkService }, { type: Router }], { artistName: [{
    type: Input,
    args: [{ required: true }]
  }], logoUrl: [{
    type: Input
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "sito-artista/src/app/components/header/header.component.ts", lineNumber: 31 });
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
  disable() {
    if (window.gtag) {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    this.document.head.querySelectorAll("script[data-analytics-id]").forEach((script) => script.remove());
    this.removeAnalyticsCookies();
    this.initializedMeasurementId = null;
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
  removeAnalyticsCookies() {
    const cookieNames = this.document.cookie.split(";").map((entry) => entry.split("=")[0]?.trim()).filter((name) => name && (name === "_gid" || name === "_gat" || name.startsWith("_ga")));
    const hostname = this.document.location?.hostname || "";
    const domainCandidates = ["", hostname, hostname ? `.${hostname}` : ""];
    for (const cookieName of cookieNames) {
      for (const domain of domainCandidates) {
        this.document.cookie = [
          `${cookieName}=`,
          "Path=/",
          "Max-Age=0",
          "SameSite=Lax",
          domain ? `Domain=${domain}` : ""
        ].filter(Boolean).join("; ");
      }
    }
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
    \u0275\u0275property("artistName", vm_r1.siteConfig.artistName)("logoUrl", vm_r1.siteConfig.headerLogo)("socialLinks", vm_r1.siteConfig.social)("currentLanguage", vm_r1.currentLanguage)("italianPath", vm_r1.italianPath)("englishPath", vm_r1.englishPath);
    \u0275\u0275advance(3);
    \u0275\u0275property("artistName", vm_r1.siteConfig.artistName)("email", vm_r1.siteConfig.email)("socialLinks", vm_r1.siteConfig.social)("currentLanguage", vm_r1.currentLanguage)("siteConfig", vm_r1.siteConfig);
    \u0275\u0275advance();
    \u0275\u0275property("language", vm_r1.currentLanguage)("analyticsEnabled", vm_r1.siteConfig.analytics.enabled);
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
      if (!siteConfig.analytics.enabled || !consent?.analytics) {
        this.analyticsService.disable();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 3, consts: [[3, "artistName", "logoUrl", "socialLinks", "currentLanguage", "italianPath", "englishPath"], [1, "site-shell", "min-h-dvh", "bg-[var(--site-background)]", "pt-20"], [3, "artistName", "email", "socialLinks", "currentLanguage", "siteConfig"], [3, "language", "analyticsEnabled"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppComponent_Conditional_0_Template, 5, 13);
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
    ], template: '@if (vm$ | async; as vm) {\n  <app-header\n    [artistName]="vm.siteConfig.artistName"\n    [logoUrl]="vm.siteConfig.headerLogo"\n    [socialLinks]="vm.siteConfig.social"\n    [currentLanguage]="vm.currentLanguage"\n    [italianPath]="vm.italianPath"\n    [englishPath]="vm.englishPath" />\n\n  <main class="site-shell min-h-dvh bg-[var(--site-background)] pt-20">\n    <router-outlet />\n  </main>\n\n  <app-footer\n    [artistName]="vm.siteConfig.artistName"\n    [email]="vm.siteConfig.email"\n    [socialLinks]="vm.siteConfig.social"\n    [currentLanguage]="vm.currentLanguage"\n    [siteConfig]="vm.siteConfig" />\n\n  <app-cookie-banner\n    [language]="vm.currentLanguage"\n    [analyticsEnabled]="vm.siteConfig.analytics.enabled" />\n}\n', styles: ["/* sito-artista/src/app/app.component.sass */\n:host {\n  display: block;\n  min-height: 100dvh;\n}\n.site-shell {\n  view-transition-name: site-shell;\n}\n@media (prefers-reduced-motion: no-preference) {\n  ::view-transition-old(site-shell) {\n    animation: siteShellFadeOut 220ms ease both;\n  }\n  ::view-transition-new(site-shell) {\n    animation: siteShellFadeIn 320ms ease both;\n  }\n}\n@keyframes siteShellFadeOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n}\n@keyframes siteShellFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n:host-context(body.artwork-fullscreen-open) app-header {\n  opacity: 0;\n  pointer-events: none;\n}\n:host-context(body.artwork-fullscreen-open) app-footer {\n  opacity: 0;\n  pointer-events: none;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "sito-artista/src/app/app.component.ts", lineNumber: 27 });
})();

// sito-artista/src/main.ts
registerLocaleData(it_default);
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/common/locales/it.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.3.4
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
