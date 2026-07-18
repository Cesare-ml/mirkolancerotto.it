import {
  HeroComponent
} from "./chunk-KPIQVZBI.js";
import {
  SocialLinksComponent
} from "./chunk-23UCQ33B.js";
import {
  RevealOnScrollDirective
} from "./chunk-CVTQ3CL2.js";
import {
  BrowserContextService
} from "./chunk-IDDMDBGC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NewsletterComponent,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  takeUntilDestroyed,
  ɵNgNoValidate
} from "./chunk-DBQUGMHR.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  HttpClient,
  HttpErrorResponse,
  LanguageService,
  RouterLink,
  SeoService,
  SiteService,
  isPlatformBrowser
} from "./chunk-5ZWV2562.js";
import {
  Component,
  DOCUMENT,
  DestroyRef,
  Inject,
  Injectable,
  Input,
  PLATFORM_ID,
  ViewChild,
  __async,
  catchError,
  combineLatest,
  finalize,
  inject,
  map,
  setClassMetadata,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/core/services/contact.service.ts
var ContactSubmissionError = class extends Error {
  kind;
  constructor(kind, message) {
    super(message);
    this.kind = kind;
    this.name = "ContactSubmissionError";
  }
};
var ContactService = class _ContactService {
  http;
  constructor(http) {
    this.http = http;
  }
  submitContact(config, payload) {
    if (!config.enabled || !config.contactApiUrl.trim() || !config.contactSiteId.trim() || !config.turnstileSiteKey.trim()) {
      return throwError(() => new ContactSubmissionError("unavailable", "Contact form unavailable"));
    }
    return this.http.post(config.contactApiUrl, payload).pipe(map((response) => {
      if (response.status === "received") {
        return response;
      }
      throw new ContactSubmissionError("server", "Unexpected contact service response");
    }), catchError((error) => throwError(() => this.mapSubmissionError(error))));
  }
  mapSubmissionError(error) {
    if (error instanceof ContactSubmissionError) {
      return error;
    }
    if (!(error instanceof HttpErrorResponse)) {
      return new ContactSubmissionError("server", "Unknown contact service error");
    }
    if (error.status === 0) {
      return new ContactSubmissionError("network", "Network error");
    }
    const code = error.error?.error?.code;
    if (code === "validation_error" || error.status === 400) {
      if (code === "turnstile_verification_failed") {
        return new ContactSubmissionError("turnstile", "Turnstile verification failed");
      }
      return new ContactSubmissionError("validation", "Validation error");
    }
    if (code === "turnstile_verification_failed" || code === "turnstile_not_configured") {
      return new ContactSubmissionError("turnstile", "Turnstile verification failed");
    }
    if (error.status >= 500) {
      return new ContactSubmissionError("server", "Server error");
    }
    return new ContactSubmissionError("server", "Contact request failed");
  }
  static \u0275fac = function ContactService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactService, factory: _ContactService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// sito-artista/src/app/core/services/turnstile-script.service.ts
var TURNSTILE_SCRIPT_ID = "cf-turnstile-script";
var TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
var TurnstileScriptService = class _TurnstileScriptService {
  document;
  platformId;
  loadPromise;
  constructor(document, platformId) {
    this.document = document;
    this.platformId = platformId;
  }
  load() {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.reject(new Error("Turnstile requires a browser environment"));
    }
    const existingApi = this.document.defaultView?.turnstile;
    if (existingApi) {
      return Promise.resolve(existingApi);
    }
    if (this.loadPromise) {
      return this.loadPromise;
    }
    this.loadPromise = new Promise((resolve, reject) => {
      const existingScript = this.document.getElementById(TURNSTILE_SCRIPT_ID);
      const onResolve = () => {
        const api = this.document.defaultView?.turnstile;
        if (!api) {
          reject(new Error("Turnstile API unavailable after script load"));
          return;
        }
        resolve(api);
      };
      if (existingScript) {
        existingScript.addEventListener("load", onResolve, { once: true });
        existingScript.addEventListener("error", () => reject(new Error("Unable to load Turnstile script")), { once: true });
        return;
      }
      const script = this.document.createElement("script");
      script.id = TURNSTILE_SCRIPT_ID;
      script.src = TURNSTILE_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.addEventListener("load", onResolve, { once: true });
      script.addEventListener("error", () => reject(new Error("Unable to load Turnstile script")), { once: true });
      this.document.head.appendChild(script);
    });
    return this.loadPromise;
  }
  static \u0275fac = function TurnstileScriptService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TurnstileScriptService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TurnstileScriptService, factory: _TurnstileScriptService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TurnstileScriptService, [{
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

// sito-artista/src/app/components/contact-form/contact-form.component.ts
var _c0 = ["turnstileContainer"];
var _c1 = ["statusMessage"];
function ContactFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "a", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Messaggio" : "Message", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.intro, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.privacyNotice, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.language === "it" ? "/it/privacy" : "/en/privacy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.language === "it" ? "Leggi la Privacy Policy." : "Read the Privacy Policy.");
  }
}
function ContactFormComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4, 0)(2, "p", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "p", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dl", 14)(12, "div")(13, "dt");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15)(23, "dt");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 15)(28, "dt");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd", 16);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Messaggio inviato" : "Message sent", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Grazie per avermi scritto." : "Thank you for writing.", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusMessageText, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Riepilogo della richiesta" : "Request summary", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.fieldLabel("name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.submittedMessage.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fieldLabel("email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.submittedMessage.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fieldLabel("subject"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.submittedMessage.subject);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fieldLabel("message"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.submittedMessage.message);
  }
}
function ContactFormComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17, 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusMessageText, " ");
  }
}
function ContactFormComponent_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r0.errorId("name"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldError("name"), " ");
  }
}
function ContactFormComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r0.errorId("email"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldError("email"), " ");
  }
}
function ContactFormComponent_Conditional_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r0.errorId("subject"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldError("subject"), " ");
  }
}
function ContactFormComponent_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r0.errorId("message"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldError("message"), " ");
  }
}
function ContactFormComponent_Conditional_3_Conditional_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ContactFormComponent_Conditional_3_Conditional_28_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.retryTurnstileWidget());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Riprova verifica" : "Retry verification", " ");
  }
}
function ContactFormComponent_Conditional_3_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ContactFormComponent_Conditional_3_Conditional_28_Conditional_3_Template, 2, 1, "button", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.turnstileError, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showTurnstileRetry ? 3 : -1);
  }
}
function ContactFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ContactFormComponent_Conditional_3_Conditional_0_Template, 3, 1, "div", 17);
    \u0275\u0275elementStart(1, "form", 18);
    \u0275\u0275listener("ngSubmit", function ContactFormComponent_Conditional_3_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 20)(4, "label", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 22);
    \u0275\u0275conditionalCreate(7, ContactFormComponent_Conditional_3_Conditional_7_Template, 2, 2, "p", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20)(9, "label", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 24);
    \u0275\u0275conditionalCreate(12, ContactFormComponent_Conditional_3_Conditional_12_Template, 2, 2, "p", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 20)(14, "label", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 25);
    \u0275\u0275conditionalCreate(17, ContactFormComponent_Conditional_3_Conditional_17_Template, 2, 2, "p", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 20)(19, "label", 21);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 26);
    \u0275\u0275conditionalCreate(22, ContactFormComponent_Conditional_3_Conditional_22_Template, 2, 2, "p", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 20)(24, "p", 27);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "div", 28, 1);
    \u0275\u0275conditionalCreate(28, ContactFormComponent_Conditional_3_Conditional_28_Template, 4, 2, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 30)(30, "button", 31);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.statusKind === "error" && ctx_r0.statusMessageText ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", ctx_r0.controlId("name"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldLabel("name"));
    \u0275\u0275advance();
    \u0275\u0275classProp("contact-form__input--invalid", ctx_r0.hasFieldError("name"));
    \u0275\u0275property("id", ctx_r0.controlId("name"));
    \u0275\u0275attribute("aria-invalid", ctx_r0.hasFieldError("name"))("aria-describedby", ctx_r0.hasFieldError("name") ? ctx_r0.errorId("name") : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasFieldError("name") ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", ctx_r0.controlId("email"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldLabel("email"));
    \u0275\u0275advance();
    \u0275\u0275classProp("contact-form__input--invalid", ctx_r0.hasFieldError("email"));
    \u0275\u0275property("id", ctx_r0.controlId("email"));
    \u0275\u0275attribute("aria-invalid", ctx_r0.hasFieldError("email"))("aria-describedby", ctx_r0.hasFieldError("email") ? ctx_r0.errorId("email") : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasFieldError("email") ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", ctx_r0.controlId("subject"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldLabel("subject"));
    \u0275\u0275advance();
    \u0275\u0275classProp("contact-form__input--invalid", ctx_r0.hasFieldError("subject"));
    \u0275\u0275property("id", ctx_r0.controlId("subject"));
    \u0275\u0275attribute("aria-invalid", ctx_r0.hasFieldError("subject"))("aria-describedby", ctx_r0.hasFieldError("subject") ? ctx_r0.errorId("subject") : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasFieldError("subject") ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", ctx_r0.controlId("message"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldLabel("message"));
    \u0275\u0275advance();
    \u0275\u0275classProp("contact-form__input--invalid", ctx_r0.hasFieldError("message"));
    \u0275\u0275property("id", ctx_r0.controlId("message"));
    \u0275\u0275attribute("aria-invalid", ctx_r0.hasFieldError("message"))("aria-describedby", ctx_r0.hasFieldError("message") ? ctx_r0.errorId("message") : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasFieldError("message") ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.turnstileLabel);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-hidden", !ctx_r0.widgetReady && !ctx_r0.turnstileError ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.turnstileError ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canSubmit);
    \u0275\u0275attribute("aria-disabled", !ctx_r0.canSubmit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitLabel, " ");
  }
}
var ContactFormComponent = class _ContactFormComponent {
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  contactService = inject(ContactService);
  turnstileScriptService = inject(TurnstileScriptService);
  browserContextService = inject(BrowserContextService);
  language;
  config;
  turnstileContainer;
  statusMessage;
  sending = false;
  turnstileToken = "";
  turnstileError = "";
  statusKind = null;
  statusMessageText = "";
  widgetReady = false;
  submittedMessage = null;
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.maxLength(120)]],
    email: ["", [Validators.required, Validators.email, Validators.maxLength(254)]],
    subject: ["", [Validators.required, Validators.maxLength(160)]],
    message: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(4e3)]]
  });
  turnstileApi;
  widgetId = null;
  get title() {
    return this.language === "it" ? "Scrivimi" : "Write to me";
  }
  get intro() {
    return this.language === "it" ? "Per informazioni su opere, visite in studio o commissioni, compila il modulo." : "For information about artworks, studio visits or commissions, complete the form.";
  }
  get submitLabel() {
    if (this.sending) {
      return this.language === "it" ? "Invio in corso..." : "Sending...";
    }
    return this.language === "it" ? "Invia messaggio" : "Send message";
  }
  get privacyNotice() {
    return this.language === "it" ? "I dati inseriti saranno utilizzati esclusivamente per rispondere alla richiesta." : "The data entered will be used exclusively to respond to your request.";
  }
  get turnstileLabel() {
    return this.language === "it" ? "Verifica anti-spam" : "Anti-spam verification";
  }
  get isConfigured() {
    return this.config.enabled && !!this.config.contactApiUrl.trim() && !!this.config.contactSiteId.trim() && !!this.config.turnstileSiteKey.trim();
  }
  get canSubmit() {
    return !this.sending && this.form.valid && !!this.turnstileToken && this.isConfigured;
  }
  get showTurnstileRetry() {
    return !!this.turnstileError && !this.sending;
  }
  ngAfterViewInit() {
    if (!this.isConfigured || !this.browserContextService.isBrowser()) {
      if (!this.isConfigured) {
        this.setStatus("error", this.language === "it" ? "Il servizio contatti non \xE8 ancora configurato." : "The contact service is not configured yet.");
      }
      return;
    }
    void this.initializeTurnstile();
  }
  ngOnDestroy() {
    this.destroyTurnstileWidget();
  }
  fieldLabel(field) {
    const labels = {
      it: {
        name: "Nome",
        email: "Email",
        subject: "Oggetto",
        message: "Messaggio"
      },
      en: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message"
      }
    };
    return labels[this.language][field];
  }
  fieldError(field) {
    const control = this.form.controls[field];
    if (!control.touched || !control.errors) {
      return "";
    }
    if (control.errors["required"]) {
      return this.language === "it" ? "Questo campo \xE8 obbligatorio." : "This field is required.";
    }
    if (control.errors["email"]) {
      return this.language === "it" ? "Inserisci un indirizzo email valido." : "Enter a valid email address.";
    }
    if (control.errors["minlength"]) {
      return this.language === "it" ? "Il messaggio \xE8 troppo breve." : "The message is too short.";
    }
    if (control.errors["maxlength"]) {
      return this.language === "it" ? "Il contenuto supera la lunghezza consentita." : "The content exceeds the allowed length.";
    }
    return this.language === "it" ? "Controlla il valore inserito." : "Check the value entered.";
  }
  hasFieldError(field) {
    return !!this.fieldError(field);
  }
  controlId(field) {
    return `contact-${field}`;
  }
  errorId(field) {
    return `contact-${field}-error`;
  }
  submit() {
    this.form.markAllAsTouched();
    this.turnstileError = "";
    this.clearStatus();
    if (!this.isConfigured) {
      this.setStatus("error", this.language === "it" ? "Il servizio contatti non \xE8 disponibile in questo momento." : "The contact service is currently unavailable.");
      return;
    }
    if (this.form.invalid) {
      return;
    }
    if (!this.turnstileToken) {
      this.turnstileError = this.language === "it" ? "Completa la verifica anti-spam prima di inviare il messaggio." : "Complete the anti-spam verification before sending your message.";
      return;
    }
    const rawValue = this.form.getRawValue();
    const payload = {
      siteId: this.config.contactSiteId.trim(),
      name: rawValue.name.trim(),
      email: rawValue.email.trim(),
      subject: rawValue.subject.trim(),
      message: rawValue.message.trim(),
      pageUrl: this.browserContextService.getCurrentUrl(),
      turnstileToken: this.turnstileToken
    };
    this.sending = true;
    this.contactService.submitContact(this.config, payload).pipe(finalize(() => {
      this.sending = false;
    }), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.submittedMessage = {
          name: payload.name,
          email: payload.email,
          subject: payload.subject ?? "",
          message: payload.message
        };
        this.form.reset({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        this.turnstileError = "";
        this.destroyTurnstileWidget();
        this.setStatus("success", this.language === "it" ? "Ti risponder\xF2 appena possibile, solitamente entro 24 ore lavorative." : "I will reply as soon as possible, usually within 24 business hours.");
      },
      error: (error) => {
        const submissionError = error instanceof ContactSubmissionError ? error : new ContactSubmissionError("server", "Unexpected submission error");
        if (submissionError.kind === "turnstile") {
          this.turnstileError = this.language === "it" ? "La verifica anti-spam non \xE8 valida. Riprova." : "The anti-spam verification is not valid. Please try again.";
          this.resetTurnstileWidget();
        }
        this.setStatus("error", this.userMessageForError(submissionError));
      }
    });
  }
  initializeTurnstile() {
    return __async(this, null, function* () {
      try {
        this.turnstileApi = yield this.turnstileScriptService.load();
        this.renderTurnstileWidget();
      } catch {
        this.widgetReady = false;
        this.turnstileError = this.language === "it" ? "La verifica anti-spam non \xE8 disponibile. Riprova pi\xF9 tardi." : "The anti-spam verification is unavailable. Please try again later.";
        this.setStatus("error", this.turnstileError);
      }
    });
  }
  renderTurnstileWidget() {
    if (!this.turnstileApi || !this.turnstileContainer?.nativeElement || this.widgetId) {
      return;
    }
    this.widgetId = this.turnstileApi.render(this.turnstileContainer.nativeElement, {
      sitekey: this.config.turnstileSiteKey.trim(),
      callback: (token) => {
        this.turnstileToken = token;
        this.turnstileError = "";
      },
      "expired-callback": () => {
        this.turnstileToken = "";
        this.turnstileError = this.language === "it" ? "La verifica anti-spam \xE8 scaduta. Eseguila di nuovo." : "The anti-spam verification has expired. Please complete it again.";
        this.resetTurnstileWidget();
      },
      "error-callback": () => {
        this.turnstileToken = "";
        this.turnstileError = this.language === "it" ? "Errore nella verifica anti-spam. Riprova." : "Error during anti-spam verification. Please try again.";
      }
    });
    this.widgetReady = true;
  }
  retryTurnstileWidget() {
    this.turnstileError = "";
    this.resetTurnstileWidget();
  }
  resetTurnstileWidget() {
    this.turnstileToken = "";
    if (!this.turnstileApi || !this.widgetId) {
      return;
    }
    this.turnstileApi.reset(this.widgetId);
  }
  destroyTurnstileWidget() {
    if (this.turnstileApi && this.widgetId) {
      this.turnstileApi.remove(this.widgetId);
    }
    this.widgetId = null;
    this.widgetReady = false;
    this.turnstileToken = "";
  }
  clearStatus() {
    this.statusKind = null;
    this.statusMessageText = "";
  }
  setStatus(kind, message) {
    this.statusKind = kind;
    this.statusMessageText = message;
    setTimeout(() => {
      this.statusMessage?.nativeElement.focus();
    });
  }
  userMessageForError(error) {
    if (error.kind === "validation") {
      return this.language === "it" ? "Controlla i dati inseriti e riprova." : "Check the information entered and try again.";
    }
    if (error.kind === "turnstile") {
      return this.language === "it" ? "La verifica anti-spam non \xE8 andata a buon fine." : "The anti-spam verification did not complete successfully.";
    }
    if (error.kind === "network") {
      return this.language === "it" ? "Connessione non disponibile. Riprova tra poco." : "Connection unavailable. Please try again shortly.";
    }
    if (error.kind === "unavailable") {
      return this.language === "it" ? "Il servizio contatti non \xE8 disponibile in questo momento." : "The contact service is currently unavailable.";
    }
    return this.language === "it" ? "Invio non riuscito. Puoi usare il contatto email diretto qui sotto." : "Sending failed. You can use the direct email contact below.";
  }
  static \u0275fac = function ContactFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactFormComponent, selectors: [["app-contact-form"]], viewQuery: function ContactFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.turnstileContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.statusMessage = _t.first);
    }
  }, inputs: { language: "language", config: "config" }, decls: 4, vars: 2, consts: [["statusMessage", ""], ["turnstileContainer", ""], [1, "contact-form", "rounded-[1.9rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]", "p-6", "sm:p-8"], [1, "max-w-2xl"], ["role", "status", "aria-live", "polite", "tabindex", "-1", 1, "contact-form__success", "rounded-[1.5rem]", "p-5", "sm:p-7"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-3xl", "leading-tight", "text-[var(--site-text)]", "sm:text-4xl"], [1, "mt-4", "text-sm", "leading-8", "text-[var(--site-text)]/76", "sm:text-base"], [1, "mt-4", "text-xs", "leading-6", "text-[var(--site-muted)]"], [3, "routerLink"], [1, "mt-3", "text-2xl", "leading-tight", "text-[var(--site-text)]", "sm:text-3xl"], [1, "mt-3", "text-sm", "leading-7", "text-[var(--site-text)]/76"], [1, "contact-form__summary", "mt-7"], [1, "contact-form__summary-title"], [1, "mt-4", "grid", "gap-4", "sm:grid-cols-2"], [1, "sm:col-span-2"], [1, "contact-form__summary-message"], ["aria-live", "assertive", "tabindex", "-1", 1, "contact-form__feedback", "contact-form__feedback--error", "mt-8", "rounded-[1.4rem]", "px-5", "py-4", "text-sm"], ["novalidate", "", 1, "mt-8", "grid", "gap-4", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-4", "md:grid-cols-2"], [1, "contact-form__field"], [1, "contact-form__label", 3, "for"], ["type", "text", "formControlName", "name", "autocomplete", "name", 1, "contact-form__input", 3, "id"], [1, "contact-form__field-error", 3, "id"], ["type", "email", "formControlName", "email", "autocomplete", "email", 1, "contact-form__input", 3, "id"], ["type", "text", "formControlName", "subject", "autocomplete", "off", 1, "contact-form__input", 3, "id"], ["rows", "7", "formControlName", "message", 1, "contact-form__input", "contact-form__textarea", 3, "id"], [1, "contact-form__label"], [1, "contact-form__turnstile"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "pt-2"], ["type", "submit", 1, "contact-form__submit", 3, "disabled"], ["aria-live", "assertive", 1, "contact-form__field-error"], ["type", "button", 1, "contact-form__retry"], ["type", "button", 1, "contact-form__retry", 3, "click"]], template: function ContactFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2);
      \u0275\u0275conditionalCreate(1, ContactFormComponent_Conditional_1_Template, 11, 6, "div", 3);
      \u0275\u0275conditionalCreate(2, ContactFormComponent_Conditional_2_Template, 32, 12, "div", 4)(3, ContactFormComponent_Conditional_3_Template, 32, 40);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.submittedMessage ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submittedMessage ? 2 : 3);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.contact-form[_ngcontent-%COMP%] {\n  box-shadow: var(--site-shadow-soft);\n}\n.contact-form__feedback[_ngcontent-%COMP%] {\n  border: 1px solid rgba(41, 69, 51, 0.14);\n  background: rgba(225, 238, 227, 0.9);\n  color: #294533;\n}\n.contact-form__feedback[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(159, 116, 82, 0.45);\n  outline-offset: 3px;\n}\n.contact-form__feedback--error[_ngcontent-%COMP%] {\n  border-color: rgba(120, 61, 45, 0.14);\n  background: rgba(248, 235, 229, 0.9);\n  color: #6f3d2e;\n}\n.contact-form__success[_ngcontent-%COMP%] {\n  border: 1px solid rgba(41, 69, 51, 0.14);\n  background: rgba(225, 238, 227, 0.72);\n}\n.contact-form__success[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(159, 116, 82, 0.45);\n  outline-offset: 3px;\n}\n.contact-form__summary[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(41, 69, 51, 0.14);\n  padding-top: 1.5rem;\n}\n.contact-form__summary[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.contact-form__summary[_ngcontent-%COMP%]   .contact-form__summary-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--site-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.contact-form__summary[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0;\n  color: var(--site-text);\n  font-size: 0.92rem;\n  line-height: 1.65;\n  overflow-wrap: anywhere;\n}\n.contact-form__summary-message[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.contact-form__field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n}\n.contact-form__label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.contact-form__input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgba(32, 27, 22, 0.12);\n  border-radius: 1.1rem;\n  background: rgba(255, 252, 248, 0.96);\n  padding: 1rem 1.05rem;\n  color: var(--site-text);\n  transition: border-color 0.25s ease, box-shadow 0.25s ease;\n}\n.contact-form__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(159, 116, 82, 0.34);\n  box-shadow: 0 0 0 3px rgba(159, 116, 82, 0.08);\n}\n.contact-form__input--invalid[_ngcontent-%COMP%] {\n  border-color: rgba(120, 61, 45, 0.36);\n  box-shadow: 0 0 0 3px rgba(120, 61, 45, 0.06);\n}\n.contact-form__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 12rem;\n}\n.contact-form__field-error[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  line-height: 1.5;\n  color: #8a4936;\n}\n.contact-form__turnstile[_ngcontent-%COMP%] {\n  min-height: 65px;\n}\n.contact-form__retry[_ngcontent-%COMP%] {\n  border: 1px solid rgba(32, 27, 22, 0.12);\n  border-radius: 999px;\n  background: rgba(255, 252, 248, 0.96);\n  color: var(--site-text);\n  padding: 0.55rem 0.9rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  transition: border-color 0.25s ease, transform 0.25s ease;\n}\n.contact-form__retry[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(159, 116, 82, 0.34);\n}\n.contact-form__submit[_ngcontent-%COMP%] {\n  border: 1px solid rgba(32, 27, 22, 0.12);\n  border-radius: 999px;\n  background: var(--site-text);\n  color: white;\n  padding: 0.95rem 1.45rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  transition:\n    transform 0.25s ease,\n    background-color 0.25s ease,\n    opacity 0.25s ease;\n}\n.contact-form__submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  background: var(--site-accent);\n}\n.contact-form__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=contact-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactFormComponent, [{
    type: Component,
    args: [{ selector: "app-contact-form", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<section class="contact-form rounded-[1.9rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-6 sm:p-8">
  @if (!submittedMessage) {
    <div class="max-w-2xl">
      <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">
        {{ language === 'it' ? 'Messaggio' : 'Message' }}
      </p>
      <h2 class="mt-4 text-3xl leading-tight text-[var(--site-text)] sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mt-4 text-sm leading-8 text-[var(--site-text)]/76 sm:text-base">
        {{ intro }}
      </p>
      <p class="mt-4 text-xs leading-6 text-[var(--site-muted)]">
        {{ privacyNotice }}
        <a [routerLink]="language === 'it' ? '/it/privacy' : '/en/privacy'">{{ language === 'it' ? 'Leggi la Privacy Policy.' : 'Read the Privacy Policy.' }}</a>
      </p>
    </div>
  }

  @if (submittedMessage) {
    <div
      #statusMessage
      class="contact-form__success rounded-[1.5rem] p-5 sm:p-7"
      role="status"
      aria-live="polite"
      tabindex="-1">
      <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">
        {{ language === 'it' ? 'Messaggio inviato' : 'Message sent' }}
      </p>
      <h3 class="mt-3 text-2xl leading-tight text-[var(--site-text)] sm:text-3xl">
        {{ language === 'it' ? 'Grazie per avermi scritto.' : 'Thank you for writing.' }}
      </h3>
      <p class="mt-3 text-sm leading-7 text-[var(--site-text)]/76">
        {{ statusMessageText }}
      </p>

      <div class="contact-form__summary mt-7">
        <p class="contact-form__summary-title">
          {{ language === 'it' ? 'Riepilogo della richiesta' : 'Request summary' }}
        </p>
        <dl class="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <dt>{{ fieldLabel('name') }}</dt>
            <dd>{{ submittedMessage.name }}</dd>
          </div>
          <div>
            <dt>{{ fieldLabel('email') }}</dt>
            <dd>{{ submittedMessage.email }}</dd>
          </div>
          <div class="sm:col-span-2">
            <dt>{{ fieldLabel('subject') }}</dt>
            <dd>{{ submittedMessage.subject }}</dd>
          </div>
          <div class="sm:col-span-2">
            <dt>{{ fieldLabel('message') }}</dt>
            <dd class="contact-form__summary-message">{{ submittedMessage.message }}</dd>
          </div>
        </dl>
      </div>
    </div>
  } @else {
    @if (statusKind === 'error' && statusMessageText) {
      <div
        #statusMessage
        class="contact-form__feedback contact-form__feedback--error mt-8 rounded-[1.4rem] px-5 py-4 text-sm"
        aria-live="assertive"
        tabindex="-1">
        {{ statusMessageText }}
      </div>
    }

    <form class="mt-8 grid gap-4" [formGroup]="form" (ngSubmit)="submit()" novalidate>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="contact-form__field">
        <label class="contact-form__label" [for]="controlId('name')">{{ fieldLabel('name') }}</label>
        <input
          class="contact-form__input"
          [class.contact-form__input--invalid]="hasFieldError('name')"
          [id]="controlId('name')"
          type="text"
          formControlName="name"
          autocomplete="name"
          [attr.aria-invalid]="hasFieldError('name')"
          [attr.aria-describedby]="hasFieldError('name') ? errorId('name') : null" />
        @if (hasFieldError('name')) {
          <p class="contact-form__field-error" [id]="errorId('name')">
            {{ fieldError('name') }}
          </p>
        }
      </div>

      <div class="contact-form__field">
        <label class="contact-form__label" [for]="controlId('email')">{{ fieldLabel('email') }}</label>
        <input
          class="contact-form__input"
          [class.contact-form__input--invalid]="hasFieldError('email')"
          [id]="controlId('email')"
          type="email"
          formControlName="email"
          autocomplete="email"
          [attr.aria-invalid]="hasFieldError('email')"
          [attr.aria-describedby]="hasFieldError('email') ? errorId('email') : null" />
        @if (hasFieldError('email')) {
          <p class="contact-form__field-error" [id]="errorId('email')">
            {{ fieldError('email') }}
          </p>
        }
      </div>
    </div>

    <div class="contact-form__field">
      <label class="contact-form__label" [for]="controlId('subject')">{{ fieldLabel('subject') }}</label>
      <input
        class="contact-form__input"
        [class.contact-form__input--invalid]="hasFieldError('subject')"
        [id]="controlId('subject')"
        type="text"
        formControlName="subject"
        autocomplete="off"
        [attr.aria-invalid]="hasFieldError('subject')"
        [attr.aria-describedby]="hasFieldError('subject') ? errorId('subject') : null" />
      @if (hasFieldError('subject')) {
        <p class="contact-form__field-error" [id]="errorId('subject')">
          {{ fieldError('subject') }}
        </p>
      }
    </div>

    <div class="contact-form__field">
      <label class="contact-form__label" [for]="controlId('message')">{{ fieldLabel('message') }}</label>
      <textarea
        class="contact-form__input contact-form__textarea"
        [class.contact-form__input--invalid]="hasFieldError('message')"
        [id]="controlId('message')"
        rows="7"
        formControlName="message"
        [attr.aria-invalid]="hasFieldError('message')"
        [attr.aria-describedby]="hasFieldError('message') ? errorId('message') : null"></textarea>
      @if (hasFieldError('message')) {
        <p class="contact-form__field-error" [id]="errorId('message')">
          {{ fieldError('message') }}
        </p>
      }
    </div>

    <div class="contact-form__field">
      <p class="contact-form__label">{{ turnstileLabel }}</p>
      <div
        #turnstileContainer
        class="contact-form__turnstile"
        [attr.aria-hidden]="!widgetReady && !turnstileError ? 'true' : null"></div>
      @if (turnstileError) {
        <div class="flex flex-wrap items-center gap-3">
          <p class="contact-form__field-error" aria-live="assertive">
            {{ turnstileError }}
          </p>

          @if (showTurnstileRetry) {
            <button class="contact-form__retry" type="button" (click)="retryTurnstileWidget()">
              {{ language === 'it' ? 'Riprova verifica' : 'Retry verification' }}
            </button>
          }
        </div>
      }
    </div>

    <div class="pt-2">
      <button class="contact-form__submit" type="submit" [disabled]="!canSubmit" [attr.aria-disabled]="!canSubmit">
        {{ submitLabel }}
      </button>
    </div>
    </form>
  }
</section>
`, styles: ["/* sito-artista/src/app/components/contact-form/contact-form.component.sass */\n:host {\n  display: block;\n}\n.contact-form {\n  box-shadow: var(--site-shadow-soft);\n}\n.contact-form__feedback {\n  border: 1px solid rgba(41, 69, 51, 0.14);\n  background: rgba(225, 238, 227, 0.9);\n  color: #294533;\n}\n.contact-form__feedback:focus {\n  outline: 2px solid rgba(159, 116, 82, 0.45);\n  outline-offset: 3px;\n}\n.contact-form__feedback--error {\n  border-color: rgba(120, 61, 45, 0.14);\n  background: rgba(248, 235, 229, 0.9);\n  color: #6f3d2e;\n}\n.contact-form__success {\n  border: 1px solid rgba(41, 69, 51, 0.14);\n  background: rgba(225, 238, 227, 0.72);\n}\n.contact-form__success:focus {\n  outline: 2px solid rgba(159, 116, 82, 0.45);\n  outline-offset: 3px;\n}\n.contact-form__summary {\n  border-top: 1px solid rgba(41, 69, 51, 0.14);\n  padding-top: 1.5rem;\n}\n.contact-form__summary dt,\n.contact-form__summary .contact-form__summary-title {\n  margin: 0;\n  color: var(--site-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.contact-form__summary dd {\n  margin: 0.45rem 0 0;\n  color: var(--site-text);\n  font-size: 0.92rem;\n  line-height: 1.65;\n  overflow-wrap: anywhere;\n}\n.contact-form__summary-message {\n  white-space: pre-wrap;\n}\n.contact-form__field {\n  display: grid;\n  gap: 0.7rem;\n}\n.contact-form__label {\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.contact-form__input {\n  width: 100%;\n  border: 1px solid rgba(32, 27, 22, 0.12);\n  border-radius: 1.1rem;\n  background: rgba(255, 252, 248, 0.96);\n  padding: 1rem 1.05rem;\n  color: var(--site-text);\n  transition: border-color 0.25s ease, box-shadow 0.25s ease;\n}\n.contact-form__input:focus {\n  outline: none;\n  border-color: rgba(159, 116, 82, 0.34);\n  box-shadow: 0 0 0 3px rgba(159, 116, 82, 0.08);\n}\n.contact-form__input--invalid {\n  border-color: rgba(120, 61, 45, 0.36);\n  box-shadow: 0 0 0 3px rgba(120, 61, 45, 0.06);\n}\n.contact-form__textarea {\n  resize: vertical;\n  min-height: 12rem;\n}\n.contact-form__field-error {\n  margin: 0;\n  font-size: 0.82rem;\n  line-height: 1.5;\n  color: #8a4936;\n}\n.contact-form__turnstile {\n  min-height: 65px;\n}\n.contact-form__retry {\n  border: 1px solid rgba(32, 27, 22, 0.12);\n  border-radius: 999px;\n  background: rgba(255, 252, 248, 0.96);\n  color: var(--site-text);\n  padding: 0.55rem 0.9rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  transition: border-color 0.25s ease, transform 0.25s ease;\n}\n.contact-form__retry:hover {\n  transform: translateY(-1px);\n  border-color: rgba(159, 116, 82, 0.34);\n}\n.contact-form__submit {\n  border: 1px solid rgba(32, 27, 22, 0.12);\n  border-radius: 999px;\n  background: var(--site-text);\n  color: white;\n  padding: 0.95rem 1.45rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  transition:\n    transform 0.25s ease,\n    background-color 0.25s ease,\n    opacity 0.25s ease;\n}\n.contact-form__submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  background: var(--site-accent);\n}\n.contact-form__submit:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=contact-form.component.css.map */\n"] }]
  }], null, { language: [{
    type: Input,
    args: [{ required: true }]
  }], config: [{
    type: Input,
    args: [{ required: true }]
  }], turnstileContainer: [{
    type: ViewChild,
    args: ["turnstileContainer"]
  }], statusMessage: [{
    type: ViewChild,
    args: ["statusMessage"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactFormComponent, { className: "ContactFormComponent", filePath: "sito-artista/src/app/components/contact-form/contact-form.component.ts", lineNumber: 43 });
})();

// sito-artista/src/content/contacts.content.ts
var CONTACTS_CONTENT = {
  heroTitle: {
    it: "Contatti",
    en: "Contacts"
  },
  heroSubtitle: {
    it: "Per informazioni, disponibilit\xE0 opere, studio visit e commissioni.",
    en: "For information, artwork availability, studio visits and commissions."
  }
};

// sito-artista/src/app/pages/contacts/contacts.page.ts
var _c02 = (a0, a1) => ({ label: a0, url: a1, external: true });
function ContactsPage_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-newsletter", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("revealDelay", 80);
    \u0275\u0275advance();
    \u0275\u0275property("siteConfig", vm_r1.siteConfig)("language", vm_r1.language)("source", "contact");
  }
}
function ContactsPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hero", 0);
    \u0275\u0275elementStart(1, "section", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "app-contact-form", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "p", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275element(13, "app-social-links", 11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(14, ContactsPage_Conditional_0_Conditional_14_Template, 2, 4, "div", 12);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275property("image", vm_r1.pagesConfig.contacts.heroImage)("title", vm_r1.content.heroTitle[vm_r1.language] || vm_r1.content.heroTitle.it)("subtitle", vm_r1.content.heroSubtitle[vm_r1.language] || vm_r1.content.heroSubtitle.it)("ctaPrimary", \u0275\u0275pureFunction2(13, _c02, vm_r1.language === "it" ? "Scrivi una email" : "Write an email", "mailto:" + vm_r1.siteConfig.email));
    \u0275\u0275advance(5);
    \u0275\u0275property("language", vm_r1.language)("config", vm_r1.siteConfig.contactForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("revealDelay", 120);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Email studio" : "Studio email", " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + vm_r1.siteConfig.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r1.siteConfig.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("socialLinks", vm_r1.siteConfig.social)("monochrome", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r1.pagesConfig.contacts.showNewsletter ? 14 : -1);
  }
}
var ContactsPage = class _ContactsPage {
  siteService = inject(SiteService);
  languageService = inject(LanguageService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.siteService.getPagesConfig()
  ]).pipe(map(([siteConfig, pagesConfig]) => {
    const language = this.languageService.getRouteLanguage(this.route.snapshot);
    return {
      siteConfig,
      pagesConfig,
      language,
      content: CONTACTS_CONTENT
    };
  }), tap(({ siteConfig, pagesConfig, language }) => {
    this.seoService.applyLocalizedAlternates(siteConfig.domain, this.route.snapshot, void 0, siteConfig.defaultLanguage);
    this.seoService.applyPageMetadata({
      title: language === "en" ? `Contact | ${siteConfig.artistName}` : `Contatti | ${siteConfig.artistName}`,
      description: language === "en" ? `Contact ${siteConfig.artistName} for availability, commissions and studio conversations.` : `Contatta ${siteConfig.artistName} per disponibilita', commissioni e dialogo con lo studio.`,
      url: `${siteConfig.domain}${this.languageService.buildLocalizedPath(language, "contacts")}`,
      image: `${siteConfig.domain}${pagesConfig.contacts.heroImage}`,
      siteName: siteConfig.artistName,
      language
    });
  }));
  static \u0275fac = function ContactsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsPage, selectors: [["app-contacts-page"]], decls: 2, vars: 3, consts: [["height", "compact", 3, "image", "title", "subtitle", "ctaPrimary"], [1, "contacts-stage", "mx-auto", "max-w-7xl", "px-5", "py-14", "sm:px-8", "lg:px-12"], ["appRevealOnScroll", "", "revealVariant", "line", 1, "contacts-stage__line"], [1, "grid", "gap-6", "xl:grid-cols-[1.08fr_0.92fr]"], ["appRevealOnScroll", "", "revealVariant", "left"], [3, "language", "config"], [1, "space-y-6"], ["appRevealOnScroll", "", "revealVariant", "right", 1, "contacts-studio-card", "rounded-[1.75rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]", "p-8", 3, "revealDelay"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "block", "text-2xl", "text-[var(--site-text)]", "no-underline", 3, "href"], [1, "mt-8"], [3, "socialLinks", "monochrome"], ["appRevealOnScroll", "", 1, "contacts-newsletter", 3, "revealDelay"], [3, "siteConfig", "language", "source"]], template: function ContactsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ContactsPage_Conditional_0_Template, 15, 16);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [HeroComponent, ContactFormComponent, NewsletterComponent, SocialLinksComponent, RevealOnScrollDirective, AsyncPipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.contacts-stage[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contacts-stage[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  right: -10rem;\n  width: 28rem;\n  height: 28rem;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(159, 116, 82, 0.09),\n      transparent 70%);\n  pointer-events: none;\n}\n.contacts-stage__line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  margin-bottom: 2rem;\n  background: rgba(32, 27, 22, 0.14);\n}\n.contacts-studio-card[_ngcontent-%COMP%] {\n  box-shadow: var(--site-shadow-soft);\n  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms ease;\n}\n.contacts-studio-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.3rem);\n  box-shadow: 0 28px 70px rgba(48, 37, 28, 0.11);\n}\n.contacts-newsletter[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n@media (prefers-reduced-motion: reduce) {\n  .contacts-studio-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=contacts.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactsPage, [{
    type: Component,
    args: [{ selector: "app-contacts-page", standalone: true, imports: [AsyncPipe, HeroComponent, ContactFormComponent, NewsletterComponent, SocialLinksComponent, RevealOnScrollDirective], template: `@if (vm$ | async; as vm) {
  <app-hero
    [image]="vm.pagesConfig.contacts.heroImage"
    [title]="vm.content.heroTitle[vm.language] || vm.content.heroTitle.it"
    [subtitle]="vm.content.heroSubtitle[vm.language] || vm.content.heroSubtitle.it"
    [ctaPrimary]="{ label: vm.language === 'it' ? 'Scrivi una email' : 'Write an email', url: 'mailto:' + vm.siteConfig.email, external: true }"
    height="compact" />

  <section class="contacts-stage mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
    <div class="contacts-stage__line" appRevealOnScroll revealVariant="line"></div>
    <div class="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
      <div appRevealOnScroll revealVariant="left">
        <app-contact-form
          [language]="vm.language"
          [config]="vm.siteConfig.contactForm" />
      </div>

      <div class="space-y-6">
        <div class="contacts-studio-card rounded-[1.75rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-8" appRevealOnScroll revealVariant="right" [revealDelay]="120">
          <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">
            {{ vm.language === 'it' ? 'Email studio' : 'Studio email' }}
          </p>

          <a
            class="mt-4 block text-2xl text-[var(--site-text)] no-underline"
            [href]="'mailto:' + vm.siteConfig.email">
            {{ vm.siteConfig.email }}
          </a>

          <div class="mt-8">
            <app-social-links [socialLinks]="vm.siteConfig.social" [monochrome]="true" />
          </div>
        </div>
      </div>
    </div>
  </section>

  @if (vm.pagesConfig.contacts.showNewsletter) {
    <div class="contacts-newsletter" appRevealOnScroll [revealDelay]="80">
      <app-newsletter [siteConfig]="vm.siteConfig" [language]="vm.language" [source]="'contact'" />
    </div>
  }
}
`, styles: ['/* sito-artista/src/app/pages/contacts/contacts.page.sass */\n:host {\n  display: block;\n}\n.contacts-stage {\n  position: relative;\n}\n.contacts-stage::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  right: -10rem;\n  width: 28rem;\n  height: 28rem;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(159, 116, 82, 0.09),\n      transparent 70%);\n  pointer-events: none;\n}\n.contacts-stage__line {\n  width: 100%;\n  height: 1px;\n  margin-bottom: 2rem;\n  background: rgba(32, 27, 22, 0.14);\n}\n.contacts-studio-card {\n  box-shadow: var(--site-shadow-soft);\n  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms ease;\n}\n.contacts-studio-card:hover {\n  transform: translateY(-0.3rem);\n  box-shadow: 0 28px 70px rgba(48, 37, 28, 0.11);\n}\n.contacts-newsletter {\n  overflow: hidden;\n}\n@media (prefers-reduced-motion: reduce) {\n  .contacts-studio-card {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=contacts.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsPage, { className: "ContactsPage", filePath: "sito-artista/src/app/pages/contacts/contacts.page.ts", lineNumber: 22 });
})();
export {
  ContactsPage
};
//# sourceMappingURL=chunk-74MQZTBR.js.map
