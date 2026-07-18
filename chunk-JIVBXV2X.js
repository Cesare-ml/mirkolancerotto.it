import {
  RevealOnScrollDirective
} from "./chunk-CVTQ3CL2.js";
import {
  ActivatedRoute,
  AsyncPipe,
  LanguageService,
  RouterLink,
  SeoService,
  SiteService
} from "./chunk-5ZWV2562.js";
import {
  Component,
  Input,
  __spreadProps,
  __spreadValues,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/components/cta-section/cta-section.component.ts
var _forTrack0 = ($index, $item) => $item.url;
function CtaSectionComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", action_r1.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r1.label, " ");
  }
}
var CtaSectionComponent = class _CtaSectionComponent {
  image = "";
  imageAlt = "";
  title = "";
  body = "";
  actions = [];
  static \u0275fac = function CtaSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CtaSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaSectionComponent, selectors: [["app-cta-section"]], inputs: { image: "image", imageAlt: "imageAlt", title: "title", body: "body", actions: "actions" }, decls: 12, vars: 4, consts: [[1, "cta-section", "mx-auto", "max-w-7xl", "px-5", "py-16", "sm:px-8", "lg:px-12", "lg:py-24"], [1, "cta-section__panel", "overflow-hidden", "rounded-[2rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]", "lg:grid", "lg:grid-cols-[0.95fr_1.05fr]"], [1, "cta-section__visual"], [1, "cta-section__image", "w-full", 3, "src", "alt"], [1, "cta-section__copy", "p-6", "sm:p-10", "lg:p-12"], [1, "text-4xl", "leading-tight", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-6", "max-w-2xl", "text-sm", "leading-8", "text-[var(--site-text)]/82", "sm:text-base"], [1, "mt-8", "flex", "flex-wrap", "gap-3"], [1, "cta-section__button", "inline-flex", "rounded-full", "px-5", "py-3", "text-xs", "uppercase", "tracking-[0.2em]", "no-underline", 3, "routerLink"]], template: function CtaSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "figure", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275repeaterCreate(10, CtaSectionComponent_For_11_Template, 2, 2, "a", 8, _forTrack0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.image, \u0275\u0275sanitizeUrl)("alt", ctx.imageAlt);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.body, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.actions);
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.cta-section__panel[_ngcontent-%COMP%] {\n  box-shadow: var(--site-shadow-soft);\n  animation: _ngcontent-%COMP%_ctaSectionReveal 0.4s ease-out both;\n}\n.cta-section__visual[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #efe3d3,\n      #e5d4be);\n}\n.cta-section__image[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 24rem;\n  object-fit: cover;\n}\n.cta-section__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.cta-section__button[_ngcontent-%COMP%] {\n  border: 1px solid rgba(32, 27, 22, 0.12);\n  background: white;\n  color: var(--site-text);\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    background-color 0.25s ease;\n}\n.cta-section__button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(159, 116, 82, 0.3);\n  background: rgb(255, 249, 242);\n}\n@keyframes _ngcontent-%COMP%_ctaSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cta-section__panel[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=cta-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CtaSectionComponent, [{
    type: Component,
    args: [{ selector: "app-cta-section", standalone: true, imports: [RouterLink], template: '<section class="cta-section mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">\n  <div class="cta-section__panel overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)] lg:grid lg:grid-cols-[0.95fr_1.05fr]">\n    <figure class="cta-section__visual">\n      <img class="cta-section__image w-full" [src]="image" [alt]="imageAlt" />\n    </figure>\n\n    <div class="cta-section__copy p-6 sm:p-10 lg:p-12">\n      <h2 class="text-4xl leading-tight text-[var(--site-text)] sm:text-5xl">{{ title }}</h2>\n      <p class="mt-6 max-w-2xl text-sm leading-8 text-[var(--site-text)]/82 sm:text-base">\n        {{ body }}\n      </p>\n\n      <div class="mt-8 flex flex-wrap gap-3">\n        @for (action of actions; track action.url) {\n          <a\n            [routerLink]="action.url"\n            class="cta-section__button inline-flex rounded-full px-5 py-3 text-xs uppercase tracking-[0.2em] no-underline">\n            {{ action.label }}\n          </a>\n        }\n      </div>\n    </div>\n  </div>\n</section>\n', styles: ["/* sito-artista/src/app/components/cta-section/cta-section.component.sass */\n:host {\n  display: block;\n}\n.cta-section__panel {\n  box-shadow: var(--site-shadow-soft);\n  animation: ctaSectionReveal 0.4s ease-out both;\n}\n.cta-section__visual {\n  background:\n    linear-gradient(\n      180deg,\n      #efe3d3,\n      #e5d4be);\n}\n.cta-section__image {\n  display: block;\n  min-height: 24rem;\n  object-fit: cover;\n}\n.cta-section__copy {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.cta-section__button {\n  border: 1px solid rgba(32, 27, 22, 0.12);\n  background: white;\n  color: var(--site-text);\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    background-color 0.25s ease;\n}\n.cta-section__button:hover {\n  transform: translateY(-2px);\n  border-color: rgba(159, 116, 82, 0.3);\n  background: rgb(255, 249, 242);\n}\n@keyframes ctaSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cta-section__panel {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=cta-section.component.css.map */\n"] }]
  }], null, { image: [{
    type: Input
  }], imageAlt: [{
    type: Input
  }], title: [{
    type: Input
  }], body: [{
    type: Input
  }], actions: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaSectionComponent, { className: "CtaSectionComponent", filePath: "sito-artista/src/app/components/cta-section/cta-section.component.ts", lineNumber: 16 });
})();

// sito-artista/src/app/components/editorial-section/editorial-section.component.ts
var _forTrack02 = ($index, $item) => $item.title;
function EditorialSectionComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 5)(1, "h3", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.body);
  }
}
var EditorialSectionComponent = class _EditorialSectionComponent {
  eyebrow = "";
  title = "";
  items = [];
  image = "";
  imageAlt = "";
  static \u0275fac = function EditorialSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditorialSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditorialSectionComponent, selectors: [["app-editorial-section"]], inputs: { eyebrow: "eyebrow", title: "title", items: "items", image: "image", imageAlt: "imageAlt" }, decls: 11, vars: 4, consts: [[1, "editorial-section", "mx-auto", "max-w-7xl", "px-5", "py-16", "sm:px-8", "lg:px-12", "lg:py-24"], [1, "editorial-section__head", "max-w-3xl"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-4xl", "leading-tight", "text-[var(--site-text)]", "sm:text-5xl"], [1, "editorial-section__items", "mt-12", "grid", "gap-10", "lg:grid-cols-3"], [1, "editorial-section__item"], [1, "editorial-section__figure", "mt-12", "overflow-hidden", "rounded-[2rem]"], [1, "editorial-section__image", "w-full", 3, "src", "alt"], [1, "text-xs", "uppercase", "tracking-[0.26em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-sm", "leading-8", "text-[var(--site-text)]/82", "sm:text-base"]], template: function EditorialSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 4);
      \u0275\u0275repeaterCreate(7, EditorialSectionComponent_For_8_Template, 5, 2, "article", 5, _forTrack02);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "figure", 6);
      \u0275\u0275domElement(10, "img", 7);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.eyebrow);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.items);
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("src", ctx.image, \u0275\u0275sanitizeUrl)("alt", ctx.imageAlt);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.editorial-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_editorialSectionReveal 0.4s ease-out both;\n}\n.editorial-section__item[_ngcontent-%COMP%] {\n  padding-top: 1.25rem;\n  border-top: 1px solid rgba(32, 27, 22, 0.12);\n}\n.editorial-section__figure[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f2e8dd,\n      #fbf6ef);\n  box-shadow: var(--site-shadow-soft);\n}\n.editorial-section__image[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 20rem;\n  object-fit: cover;\n}\n@keyframes _ngcontent-%COMP%_editorialSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .editorial-section[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=editorial-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorialSectionComponent, [{
    type: Component,
    args: [{ selector: "app-editorial-section", standalone: true, template: '<section class="editorial-section mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">\n  <div class="editorial-section__head max-w-3xl">\n    <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ eyebrow }}</p>\n    <h2 class="mt-4 text-4xl leading-tight text-[var(--site-text)] sm:text-5xl">{{ title }}</h2>\n  </div>\n\n  <div class="editorial-section__items mt-12 grid gap-10 lg:grid-cols-3">\n    @for (item of items; track item.title) {\n      <article class="editorial-section__item">\n        <h3 class="text-xs uppercase tracking-[0.26em] text-[var(--site-muted)]">{{ item.title }}</h3>\n        <p class="mt-4 text-sm leading-8 text-[var(--site-text)]/82 sm:text-base">{{ item.body }}</p>\n      </article>\n    }\n  </div>\n\n  <figure class="editorial-section__figure mt-12 overflow-hidden rounded-[2rem]">\n    <img class="editorial-section__image w-full" [src]="image" [alt]="imageAlt" />\n  </figure>\n</section>\n', styles: ["/* sito-artista/src/app/components/editorial-section/editorial-section.component.sass */\n:host {\n  display: block;\n}\n.editorial-section {\n  animation: editorialSectionReveal 0.4s ease-out both;\n}\n.editorial-section__item {\n  padding-top: 1.25rem;\n  border-top: 1px solid rgba(32, 27, 22, 0.12);\n}\n.editorial-section__figure {\n  background:\n    linear-gradient(\n      180deg,\n      #f2e8dd,\n      #fbf6ef);\n  box-shadow: var(--site-shadow-soft);\n}\n.editorial-section__image {\n  display: block;\n  min-height: 20rem;\n  object-fit: cover;\n}\n@keyframes editorialSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .editorial-section {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=editorial-section.component.css.map */\n"] }]
  }], null, { eyebrow: [{
    type: Input
  }], title: [{
    type: Input
  }], items: [{
    type: Input
  }], image: [{
    type: Input
  }], imageAlt: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditorialSectionComponent, { className: "EditorialSectionComponent", filePath: "sito-artista/src/app/components/editorial-section/editorial-section.component.ts", lineNumber: 14 });
})();

// sito-artista/src/app/components/hero-section/hero-section.component.ts
var HeroSectionComponent = class _HeroSectionComponent {
  image = "";
  title = "";
  subtitle = "";
  scrollLabel = "";
  static \u0275fac = function HeroSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroSectionComponent, selectors: [["app-hero-section"]], inputs: { image: "image", title: "title", subtitle: "subtitle", scrollLabel: "scrollLabel" }, decls: 15, vars: 5, consts: [[1, "hero-section"], [1, "hero-section__image"], [1, "hero-section__overlay"], [1, "hero-section__inner", "mx-auto", "flex", "min-h-[100dvh]", "max-w-7xl", "flex-col", "justify-end", "px-5", "pb-10", "pt-28", "sm:px-8", "lg:px-12"], [1, "hero-section__copy", "max-w-4xl"], [1, "text-5xl", "leading-[0.95]", "text-white", "sm:text-6xl", "lg:text-7xl"], [1, "mt-6", "max-w-2xl", "text-base", "leading-8", "text-white/82", "sm:text-lg"], [1, "hero-section__scroll", "mt-12", "inline-flex", "items-center", "gap-4", "text-xs", "uppercase", "tracking-[0.28em]", "text-white/72"], [1, "hero-section__scroll-line"], [1, "hero-section__scroll-arrow"]], template: function HeroSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0);
      \u0275\u0275domElement(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 6);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "div", 7)(10, "span");
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(12, "span", 8);
      \u0275\u0275domElementStart(13, "span", 9);
      \u0275\u0275text(14, "\u2193");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-image", "url(" + ctx.image + ")");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.subtitle, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.scrollLabel);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #171310;\n}\n.hero-section__image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transform: scale(1.02);\n  animation: _ngcontent-%COMP%_heroSectionDrift 18s ease-in-out infinite alternate;\n}\n.hero-section__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(15, 12, 10, 0.18),\n      rgba(15, 12, 10, 0.62));\n}\n.hero-section__copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_aboutFadeUp 0.4s ease-out both;\n}\n.hero-section__scroll[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_aboutFadeUp 0.4s ease-out 0.1s both;\n}\n.hero-section__scroll-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3.75rem;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.34);\n}\n.hero-section__scroll-arrow[_ngcontent-%COMP%] {\n  transform: translateY(-1px);\n}\n@keyframes _ngcontent-%COMP%_heroSectionDrift {\n  from {\n    transform: scale(1.02) translate3d(0, 0, 0);\n  }\n  to {\n    transform: scale(1.05) translate3d(0, -8px, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_aboutFadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero-section__image[_ngcontent-%COMP%], \n   .hero-section__copy[_ngcontent-%COMP%], \n   .hero-section__scroll[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=hero-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroSectionComponent, [{
    type: Component,
    args: [{ selector: "app-hero-section", standalone: true, template: `<section class="hero-section">
  <div class="hero-section__image" [style.background-image]="'url(' + image + ')'"></div>
  <div class="hero-section__overlay"></div>

  <div class="hero-section__inner mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 lg:px-12">
    <div class="hero-section__copy max-w-4xl">
      <h1 class="text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">{{ title }}</h1>
      <p class="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
        {{ subtitle }}
      </p>
    </div>

    <div class="hero-section__scroll mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-white/72">
      <span>{{ scrollLabel }}</span>
      <span class="hero-section__scroll-line"></span>
      <span class="hero-section__scroll-arrow">\u2193</span>
    </div>
  </div>
</section>
`, styles: ["/* sito-artista/src/app/components/hero-section/hero-section.component.sass */\n:host {\n  display: block;\n}\n.hero-section {\n  position: relative;\n  overflow: hidden;\n  background: #171310;\n}\n.hero-section__image {\n  position: absolute;\n  inset: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transform: scale(1.02);\n  animation: heroSectionDrift 18s ease-in-out infinite alternate;\n}\n.hero-section__overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(15, 12, 10, 0.18),\n      rgba(15, 12, 10, 0.62));\n}\n.hero-section__copy {\n  position: relative;\n  z-index: 1;\n  animation: aboutFadeUp 0.4s ease-out both;\n}\n.hero-section__scroll {\n  position: relative;\n  z-index: 1;\n  animation: aboutFadeUp 0.4s ease-out 0.1s both;\n}\n.hero-section__scroll-line {\n  display: inline-block;\n  width: 3.75rem;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.34);\n}\n.hero-section__scroll-arrow {\n  transform: translateY(-1px);\n}\n@keyframes heroSectionDrift {\n  from {\n    transform: scale(1.02) translate3d(0, 0, 0);\n  }\n  to {\n    transform: scale(1.05) translate3d(0, -8px, 0);\n  }\n}\n@keyframes aboutFadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero-section__image,\n  .hero-section__copy,\n  .hero-section__scroll {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=hero-section.component.css.map */\n"] }]
  }], null, { image: [{
    type: Input,
    args: [{ required: true }]
  }], title: [{
    type: Input,
    args: [{ required: true }]
  }], subtitle: [{
    type: Input,
    args: [{ required: true }]
  }], scrollLabel: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroSectionComponent, { className: "HeroSectionComponent", filePath: "sito-artista/src/app/components/hero-section/hero-section.component.ts", lineNumber: 9 });
})();

// sito-artista/src/app/components/large-image-section/large-image-section.component.ts
function LargeImageSectionComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r1);
  }
}
var LargeImageSectionComponent = class _LargeImageSectionComponent {
  eyebrow = "";
  title = "";
  image = "";
  imageAlt = "";
  paragraphs = [];
  static \u0275fac = function LargeImageSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LargeImageSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LargeImageSectionComponent, selectors: [["app-large-image-section"]], inputs: { eyebrow: "eyebrow", title: "title", image: "image", imageAlt: "imageAlt", paragraphs: "paragraphs" }, decls: 11, vars: 4, consts: [[1, "large-image-section", "mx-auto", "max-w-7xl", "px-5", "py-16", "sm:px-8", "lg:px-12", "lg:py-24"], [1, "large-image-section__visual", "overflow-hidden", "rounded-[2rem]"], [1, "large-image-section__image", "w-full", 3, "src", "alt"], [1, "mt-10", "max-w-4xl"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-4xl", "leading-tight", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-8", "space-y-5", "text-sm", "leading-8", "text-[var(--site-text)]/82", "sm:text-base"]], template: function LargeImageSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "figure", 1);
      \u0275\u0275domElement(2, "img", 2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 3)(4, "p", 4);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "h2", 5);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 6);
      \u0275\u0275repeaterCreate(9, LargeImageSectionComponent_For_10_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("src", ctx.image, \u0275\u0275sanitizeUrl)("alt", ctx.imageAlt);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.eyebrow);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.paragraphs);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.large-image-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_largeImageSectionReveal 0.4s ease-out both;\n}\n.large-image-section__visual[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f2e8dd,\n      #fbf6ef);\n  box-shadow: var(--site-shadow-soft);\n}\n.large-image-section__image[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 26rem;\n  object-fit: cover;\n}\n@keyframes _ngcontent-%COMP%_largeImageSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .large-image-section[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=large-image-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LargeImageSectionComponent, [{
    type: Component,
    args: [{ selector: "app-large-image-section", standalone: true, template: '<section class="large-image-section mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">\n  <figure class="large-image-section__visual overflow-hidden rounded-[2rem]">\n    <img class="large-image-section__image w-full" [src]="image" [alt]="imageAlt" />\n  </figure>\n\n  <div class="mt-10 max-w-4xl">\n    <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ eyebrow }}</p>\n    <h2 class="mt-4 text-4xl leading-tight text-[var(--site-text)] sm:text-5xl">{{ title }}</h2>\n\n    <div class="mt-8 space-y-5 text-sm leading-8 text-[var(--site-text)]/82 sm:text-base">\n      @for (paragraph of paragraphs; track paragraph) {\n        <p>{{ paragraph }}</p>\n      }\n    </div>\n  </div>\n</section>\n', styles: ["/* sito-artista/src/app/components/large-image-section/large-image-section.component.sass */\n:host {\n  display: block;\n}\n.large-image-section {\n  animation: largeImageSectionReveal 0.4s ease-out both;\n}\n.large-image-section__visual {\n  background:\n    linear-gradient(\n      180deg,\n      #f2e8dd,\n      #fbf6ef);\n  box-shadow: var(--site-shadow-soft);\n}\n.large-image-section__image {\n  display: block;\n  min-height: 26rem;\n  object-fit: cover;\n}\n@keyframes largeImageSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .large-image-section {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=large-image-section.component.css.map */\n"] }]
  }], null, { eyebrow: [{
    type: Input
  }], title: [{
    type: Input
  }], image: [{
    type: Input
  }], imageAlt: [{
    type: Input
  }], paragraphs: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LargeImageSectionComponent, { className: "LargeImageSectionComponent", filePath: "sito-artista/src/app/components/large-image-section/large-image-section.component.ts", lineNumber: 9 });
})();

// sito-artista/src/app/components/manifesto-section/manifesto-section.component.ts
function ManifestoSectionComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "p", 5);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const phrase_r1 = ctx.$implicit;
    const \u0275$index_10_r2 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275styleProp("animation-delay", \u0275$index_10_r2 * 80, "ms");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", phrase_r1, " ");
  }
}
var ManifestoSectionComponent = class _ManifestoSectionComponent {
  eyebrow = "";
  phrases = [];
  static \u0275fac = function ManifestoSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManifestoSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManifestoSectionComponent, selectors: [["app-manifesto-section"]], inputs: { eyebrow: "eyebrow", phrases: "phrases" }, decls: 7, vars: 1, consts: [[1, "manifesto-section", "bg-white", "px-5", "py-12", "sm:px-8", "lg:px-12"], [1, "mx-auto", "max-w-7xl"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-8"], [1, "manifesto-section__phrase-wrap"], [1, "manifesto-section__phrase"]], template: function ManifestoSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 3);
      \u0275\u0275repeaterCreate(5, ManifestoSectionComponent_For_6_Template, 3, 3, "div", 4, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.eyebrow);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.phrases);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.manifesto-section__phrase-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: min(82vh, 52rem);\n  border-top: 1px solid rgba(32, 27, 22, 0.08);\n}\n.manifesto-section__phrase-wrap[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid rgba(32, 27, 22, 0.08);\n}\n.manifesto-section__phrase[_ngcontent-%COMP%] {\n  max-width: 15ch;\n  font-size: clamp(2.6rem, 7vw, 6.4rem);\n  line-height: 0.98;\n  color: var(--site-text);\n  opacity: 0;\n  transform: translateY(14px);\n  animation: _ngcontent-%COMP%_manifestoReveal 0.4s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_manifestoReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .manifesto-section__phrase[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: none;\n    animation: none;\n  }\n}\n/*# sourceMappingURL=manifesto-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManifestoSectionComponent, [{
    type: Component,
    args: [{ selector: "app-manifesto-section", standalone: true, template: '<section class="manifesto-section bg-white px-5 py-12 sm:px-8 lg:px-12">\n  <div class="mx-auto max-w-7xl">\n    <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ eyebrow }}</p>\n\n    <div class="mt-8">\n      @for (phrase of phrases; track phrase; let index = $index) {\n        <div class="manifesto-section__phrase-wrap">\n          <p class="manifesto-section__phrase" [style.animation-delay.ms]="index * 80">\n            {{ phrase }}\n          </p>\n        </div>\n      }\n    </div>\n  </div>\n</section>\n', styles: ["/* sito-artista/src/app/components/manifesto-section/manifesto-section.component.sass */\n:host {\n  display: block;\n}\n.manifesto-section__phrase-wrap {\n  display: flex;\n  align-items: center;\n  min-height: min(82vh, 52rem);\n  border-top: 1px solid rgba(32, 27, 22, 0.08);\n}\n.manifesto-section__phrase-wrap:last-child {\n  border-bottom: 1px solid rgba(32, 27, 22, 0.08);\n}\n.manifesto-section__phrase {\n  max-width: 15ch;\n  font-size: clamp(2.6rem, 7vw, 6.4rem);\n  line-height: 0.98;\n  color: var(--site-text);\n  opacity: 0;\n  transform: translateY(14px);\n  animation: manifestoReveal 0.4s ease-out forwards;\n}\n@keyframes manifestoReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .manifesto-section__phrase {\n    opacity: 1;\n    transform: none;\n    animation: none;\n  }\n}\n/*# sourceMappingURL=manifesto-section.component.css.map */\n"] }]
  }], null, { eyebrow: [{
    type: Input
  }], phrases: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManifestoSectionComponent, { className: "ManifestoSectionComponent", filePath: "sito-artista/src/app/components/manifesto-section/manifesto-section.component.ts", lineNumber: 9 });
})();

// sito-artista/src/app/components/quote-section/quote-section.component.ts
var QuoteSectionComponent = class _QuoteSectionComponent {
  image = "";
  imageAlt = "";
  quote = "";
  static \u0275fac = function QuoteSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuoteSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuoteSectionComponent, selectors: [["app-quote-section"]], inputs: { image: "image", imageAlt: "imageAlt", quote: "quote" }, decls: 6, vars: 3, consts: [[1, "quote-section", "mx-auto", "max-w-[96rem]", "px-4", "py-12", "sm:px-6", "lg:px-10", "lg:py-20"], [1, "quote-section__frame", "overflow-hidden", "rounded-[2.25rem]"], [1, "quote-section__quote-wrap", "px-6", "pb-0", "pt-8", "sm:px-10", "lg:px-14", "lg:pt-12"], [1, "max-w-5xl", "text-4xl", "leading-[1.02]", "text-[var(--site-text)]", "sm:text-6xl", "lg:text-7xl"], [1, "quote-section__image", "mt-8", "w-full", 3, "src", "alt"]], template: function QuoteSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "figure", 1)(2, "div", 2)(3, "blockquote", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(5, "img", 4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.quote, " ");
      \u0275\u0275advance();
      \u0275\u0275domProperty("src", ctx.image, \u0275\u0275sanitizeUrl)("alt", ctx.imageAlt);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.quote-section__frame[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 250, 244, 0.95),\n      rgba(244, 236, 226, 0.98));\n  box-shadow: var(--site-shadow-soft);\n  animation: _ngcontent-%COMP%_quoteSectionReveal 0.4s ease-out both;\n}\n.quote-section__image[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 26rem;\n  object-fit: cover;\n}\n@keyframes _ngcontent-%COMP%_quoteSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .quote-section__frame[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=quote-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuoteSectionComponent, [{
    type: Component,
    args: [{ selector: "app-quote-section", standalone: true, template: '<section class="quote-section mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">\n  <figure class="quote-section__frame overflow-hidden rounded-[2.25rem]">\n    <div class="quote-section__quote-wrap px-6 pb-0 pt-8 sm:px-10 lg:px-14 lg:pt-12">\n      <blockquote class="max-w-5xl text-4xl leading-[1.02] text-[var(--site-text)] sm:text-6xl lg:text-7xl">\n        {{ quote }}\n      </blockquote>\n    </div>\n\n    <img class="quote-section__image mt-8 w-full" [src]="image" [alt]="imageAlt" />\n  </figure>\n</section>\n', styles: ["/* sito-artista/src/app/components/quote-section/quote-section.component.sass */\n:host {\n  display: block;\n}\n.quote-section__frame {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 250, 244, 0.95),\n      rgba(244, 236, 226, 0.98));\n  box-shadow: var(--site-shadow-soft);\n  animation: quoteSectionReveal 0.4s ease-out both;\n}\n.quote-section__image {\n  display: block;\n  min-height: 26rem;\n  object-fit: cover;\n}\n@keyframes quoteSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .quote-section__frame {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=quote-section.component.css.map */\n"] }]
  }], null, { image: [{
    type: Input,
    args: [{ required: true }]
  }], imageAlt: [{
    type: Input,
    args: [{ required: true }]
  }], quote: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuoteSectionComponent, { className: "QuoteSectionComponent", filePath: "sito-artista/src/app/components/quote-section/quote-section.component.ts", lineNumber: 9 });
})();

// sito-artista/src/app/components/split-section/split-section.component.ts
function SplitSectionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.eyebrow);
  }
}
function SplitSectionComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function SplitSectionComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const paragraph_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r2);
  }
}
var SplitSectionComponent = class _SplitSectionComponent {
  eyebrow = "";
  title = "";
  paragraphs = [];
  image = "";
  imageAlt = "";
  reverse = false;
  static \u0275fac = function SplitSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SplitSectionComponent, selectors: [["app-split-section"]], inputs: { eyebrow: "eyebrow", title: "title", paragraphs: "paragraphs", image: "image", imageAlt: "imageAlt", reverse: "reverse" }, decls: 10, vars: 6, consts: [[1, "split-section", "mx-auto", "max-w-7xl", "px-5", "py-16", "sm:px-8", "lg:px-12", "lg:py-24"], [1, "split-section__layout", "grid", "gap-10", "lg:grid-cols-[0.92fr_1.08fr]", "lg:gap-14"], [1, "split-section__copy"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "max-w-2xl", "text-4xl", "leading-tight", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-8", "space-y-5", "text-sm", "leading-8", "text-[var(--site-text)]/82", "sm:text-base"], [1, "split-section__visual"], [1, "split-section__image", 3, "src", "alt"]], template: function SplitSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, SplitSectionComponent_Conditional_3_Template, 2, 1, "p", 3);
      \u0275\u0275conditionalCreate(4, SplitSectionComponent_Conditional_4_Template, 2, 1, "h2", 4);
      \u0275\u0275domElementStart(5, "div", 5);
      \u0275\u0275repeaterCreate(6, SplitSectionComponent_For_7_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "figure", 6);
      \u0275\u0275domElement(9, "img", 7);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("split-section__layout--reverse", ctx.reverse);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.eyebrow ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.title ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.paragraphs);
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("src", ctx.image, \u0275\u0275sanitizeUrl)("alt", ctx.imageAlt);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.split-section__layout[_ngcontent-%COMP%] {\n  align-items: center;\n  animation: _ngcontent-%COMP%_splitSectionReveal 0.4s ease-out both;\n}\n@media (min-width: 1024px) {\n  .split-section__layout--reverse[_ngcontent-%COMP%]   .split-section__copy[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .split-section__layout--reverse[_ngcontent-%COMP%]   .split-section__visual[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n.split-section__visual[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f2e8dd,\n      #fbf6ef);\n  box-shadow: var(--site-shadow-soft);\n}\n.split-section__image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 26rem;\n  object-fit: cover;\n}\n@keyframes _ngcontent-%COMP%_splitSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .split-section__layout[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=split-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitSectionComponent, [{
    type: Component,
    args: [{ selector: "app-split-section", standalone: true, template: '<section class="split-section mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">\n  <div class="split-section__layout grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14" [class.split-section__layout--reverse]="reverse">\n    <div class="split-section__copy">\n      @if (eyebrow) {\n        <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ eyebrow }}</p>\n      }\n\n      @if (title) {\n        <h2 class="mt-4 max-w-2xl text-4xl leading-tight text-[var(--site-text)] sm:text-5xl">{{ title }}</h2>\n      }\n\n      <div class="mt-8 space-y-5 text-sm leading-8 text-[var(--site-text)]/82 sm:text-base">\n        @for (paragraph of paragraphs; track paragraph) {\n          <p>{{ paragraph }}</p>\n        }\n      </div>\n    </div>\n\n    <figure class="split-section__visual">\n      <img class="split-section__image" [src]="image" [alt]="imageAlt" />\n    </figure>\n  </div>\n</section>\n', styles: ["/* sito-artista/src/app/components/split-section/split-section.component.sass */\n:host {\n  display: block;\n}\n.split-section__layout {\n  align-items: center;\n  animation: splitSectionReveal 0.4s ease-out both;\n}\n@media (min-width: 1024px) {\n  .split-section__layout--reverse .split-section__copy {\n    order: 2;\n  }\n  .split-section__layout--reverse .split-section__visual {\n    order: 1;\n  }\n}\n.split-section__visual {\n  overflow: hidden;\n  border-radius: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f2e8dd,\n      #fbf6ef);\n  box-shadow: var(--site-shadow-soft);\n}\n.split-section__image {\n  display: block;\n  width: 100%;\n  min-height: 26rem;\n  object-fit: cover;\n}\n@keyframes splitSectionReveal {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .split-section__layout {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=split-section.component.css.map */\n"] }]
  }], null, { eyebrow: [{
    type: Input
  }], title: [{
    type: Input
  }], paragraphs: [{
    type: Input
  }], image: [{
    type: Input
  }], imageAlt: [{
    type: Input
  }], reverse: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SplitSectionComponent, { className: "SplitSectionComponent", filePath: "sito-artista/src/app/components/split-section/split-section.component.ts", lineNumber: 9 });
})();

// sito-artista/src/content/about.content.ts
var ABOUT_CONTENT = {
  seoDescription: {
    it: "Una pagina curatoriale che introduce la ricerca artistica, il rapporto tra pittura, musica e presenza, e invita a entrare nelle opere.",
    en: "A curatorial page introducing the artistic research, the dialogue between painting, music and presence, and inviting the viewer into the artworks."
  },
  hero: {
    image: "/assets/images/static/about/about-hero-studio-placeholder.svg",
    title: {
      it: "La vita cerca una forma attraverso di me.",
      en: "Life seeks a form through me."
    },
    subtitle: {
      it: "Pittura, musica e ricerca interiore sono espressioni di un unico processo creativo.",
      en: "Painting, music and inner research are expressions of a single creative process."
    },
    scrollLabel: {
      it: "Scorri",
      en: "Scroll"
    }
  },
  research: {
    eyebrow: {
      it: "La mia ricerca",
      en: "My research"
    },
    title: {
      it: "La creativit\xE0 come necessit\xE0 vitale",
      en: "Creativity as a vital necessity"
    },
    paragraphs: [
      {
        it: "Non ho mai vissuto la pittura e la musica come discipline separate.",
        en: "I have never lived painting and music as separate disciplines."
      },
      {
        it: "Per me sono linguaggi diversi attraverso cui qualcosa di invisibile prende forma nel mondo.",
        en: "To me they are different languages through which something invisible takes form in the world."
      },
      {
        it: "Non creo per raccontare uno stato d\u2019animo. Creo perch\xE9 sento che la creativit\xE0 \xE8 una necessit\xE0 vitale.",
        en: "I do not create to narrate a mood. I create because creativity feels like a vital necessity."
      },
      {
        it: "Ogni opera nasce dall\u2019ascolto. Ogni quadro \xE8 un dialogo. Ogni composizione \xE8 un tentativo di dare corpo a qualcosa che ancora non aveva trovato manifestazione.",
        en: "Each work begins in listening. Each painting is a dialogue. Each composition is an attempt to give body to something that had not yet found manifestation."
      },
      {
        it: "La musica mi ha insegnato l\u2019improvvisazione. La pittura mi ha insegnato il tempo.",
        en: "Music taught me improvisation. Painting taught me time."
      },
      {
        it: "In entrambe continuo a cercare la stessa cosa: la sorgente della creativit\xE0.",
        en: "In both I continue searching for the same thing: the source of creativity."
      }
    ],
    image: "/assets/images/static/about/about-research-studio-placeholder.svg",
    imageAlt: {
      it: "Placeholder studio, tele, pennelli e luce naturale",
      en: "Placeholder for studio, canvases, brushes and natural light"
    }
  },
  quote: {
    image: "/assets/images/static/about/about-quote-artwork-placeholder.svg",
    imageAlt: {
      it: "Placeholder grande opera per sezione citazione",
      en: "Placeholder for large artwork in quote section"
    },
    text: {
      it: "La prima opera sono io.",
      en: "The first artwork is myself."
    }
  },
  beyondPainting: {
    eyebrow: {
      it: "Oltre la pittura",
      en: "Beyond painting"
    },
    title: {
      it: "Tre linguaggi, una sola ricerca",
      en: "Three languages, one single research"
    },
    items: [
      {
        title: {
          it: "Pittura",
          en: "Painting"
        },
        body: {
          it: "La pittura \xE8 il luogo dove il pensiero rallenta e la materia diventa presenza. \xC8 un esercizio di ascolto, di attesa, di trasformazione.",
          en: "Painting is the place where thought slows down and matter becomes presence. It is an exercise in listening, waiting and transformation."
        }
      },
      {
        title: {
          it: "Musica",
          en: "Music"
        },
        body: {
          it: "La musica mi restituisce il gesto immediato, il rischio, l\u2019improvvisazione. Mi ricorda che la forma pu\xF2 nascere anche nel respiro di un istante.",
          en: "Music returns the immediate gesture, risk and improvisation to me. It reminds me that form can also emerge within the breath of a single instant."
        }
      },
      {
        title: {
          it: "Tecnologia",
          en: "Technology"
        },
        body: {
          it: "La tecnologia \xE8 un altro linguaggio creativo: uno spazio di possibilit\xE0 in cui osservare, costruire connessioni e dare continuit\xE0 alla ricerca interiore.",
          en: "Technology is another creative language: a field of possibilities where connections can be observed, built and carried forward within the inner research."
        }
      }
    ],
    image: "/assets/images/static/about/about-beyond-painting-placeholder.svg",
    imageAlt: {
      it: "Placeholder fotografia larga per oltre la pittura",
      en: "Placeholder wide photograph for beyond painting section"
    }
  },
  presence: {
    eyebrow: {
      it: "Presenza",
      en: "Presence"
    },
    title: {
      it: "L\u2019opera continua nell\u2019incontro",
      en: "The work continues in the encounter"
    },
    paragraphs: [
      {
        it: "Credo che il vero valore dell\u2019arte non risieda soltanto nell\u2019opera.",
        en: "I believe the true value of art does not reside only in the artwork."
      },
      {
        it: "Risieda nella qualit\xE0 della presenza con cui nasce.",
        en: "It resides in the quality of presence from which it is born."
      },
      {
        it: "Per questo anche il rapporto con il pubblico \xE8 parte del processo creativo.",
        en: "For this reason, the relationship with the audience is also part of the creative process."
      },
      {
        it: "Non considero i social una semplice vetrina. Sono uno spazio di ricerca. Un luogo dove l\u2019opera continua a vivere attraverso l\u2019incontro con gli altri.",
        en: "I do not consider social platforms a simple showcase. They are a space of research. A place where the work continues to live through the encounter with others."
      },
      {
        it: "Ogni messaggio. Ogni dialogo. Ogni sguardo. Diventa parte del percorso.",
        en: "Every message. Every dialogue. Every gaze. Becomes part of the journey."
      }
    ],
    image: "/assets/images/static/about/about-presence-placeholder.svg",
    imageAlt: {
      it: "Placeholder mostra o presenza pubblica",
      en: "Placeholder exhibition or public presence image"
    },
    reverse: true
  },
  search: {
    eyebrow: {
      it: "Ci\xF2 che cerco",
      en: "What I seek"
    },
    title: {
      it: "Quando l\u2019opera smette di appartenermi",
      en: "When the work stops belonging to me"
    },
    image: "/assets/images/static/about/about-search-placeholder.svg",
    imageAlt: {
      it: "Placeholder natura morta con frutta e luce",
      en: "Placeholder still life with fruit and light"
    },
    paragraphs: [
      {
        it: "Non mi interessa che le persone comprendano esattamente ci\xF2 che volevo dire.",
        en: "I am not interested in people understanding exactly what I meant to say."
      },
      {
        it: "Mi interessa che possano incontrare qualcosa di loro stesse.",
        en: "What matters to me is that they may encounter something of themselves."
      },
      {
        it: "Credo che un\u2019opera diventi davvero viva quando smette di appartenere all\u2019artista.",
        en: "I believe a work becomes truly alive when it stops belonging to the artist."
      },
      {
        it: "Se anche una sola persona, davanti a un quadro, riesce per un istante a sentirsi pi\xF9 vicina a s\xE9 stessa, allora quell\u2019opera ha trovato il suo senso.",
        en: "If even one person, standing before a painting, can for a moment feel closer to themselves, then that work has found its meaning."
      }
    ]
  },
  manifesto: {
    eyebrow: {
      it: "Manifesto",
      en: "Manifesto"
    },
    phrases: [
      {
        it: "La vita cerca una forma attraverso di me.",
        en: "Life seeks a form through me."
      },
      {
        it: "La musica vola. La pittura rimane.",
        en: "Music flies. Painting remains."
      },
      {
        it: "Non mi mancava il successo. Mi mancava il dialogo.",
        en: "It was not success I was missing. It was dialogue."
      },
      {
        it: "La prima opera sono io.",
        en: "The first artwork is myself."
      },
      {
        it: "Creare e conoscersi sono sempre stati la stessa cosa.",
        en: "Creating and knowing myself have always been the same thing."
      }
    ]
  },
  cta: {
    image: "/assets/images/static/about/about-cta-portrait-placeholder.svg",
    imageAlt: {
      it: "Placeholder ritratto finale naturale",
      en: "Placeholder final natural portrait"
    },
    title: {
      it: "Continua il viaggio",
      en: "Continue the journey"
    },
    body: {
      it: "Se desideri conoscere meglio il mio lavoro, visitare lo studio, parlare di un\u2019opera o semplicemente entrare in contatto, sar\xF2 felice di ascoltarti.",
      en: "If you would like to know my work more deeply, visit the studio, speak about an artwork or simply get in touch, I will be glad to listen."
    },
    actions: [
      {
        label: {
          it: "View artworks",
          en: "View artworks"
        },
        urlKey: "artworks"
      },
      {
        label: {
          it: "Contact",
          en: "Contact"
        },
        urlKey: "contacts"
      }
    ]
  }
};

// sito-artista/src/app/pages/about/about.page.ts
var _c0 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c1 = (a0, a1) => ({ title: a0, body: a1 });
var _c2 = (a0, a1, a2) => [a0, a1, a2];
var _c3 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0, a1) => ({ label: a0, url: a1 });
var _c6 = (a0, a1) => [a0, a1];
function AboutPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 0);
    \u0275\u0275element(1, "app-hero-section", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "app-split-section", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275element(5, "app-quote-section", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275element(7, "app-editorial-section", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275element(9, "app-split-section", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 4);
    \u0275\u0275element(11, "app-large-image-section", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11);
    \u0275\u0275element(13, "app-manifesto-section", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275element(15, "app-cta-section", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275advance();
    \u0275\u0275property("image", vm_r1.content.hero.image)("title", vm_r1.content.hero.title[vm_r1.language] || vm_r1.content.hero.title.it)("subtitle", vm_r1.content.hero.subtitle[vm_r1.language] || vm_r1.content.hero.subtitle.it)("scrollLabel", vm_r1.content.hero.scrollLabel[vm_r1.language] || vm_r1.content.hero.scrollLabel.it);
    \u0275\u0275advance(2);
    \u0275\u0275property("eyebrow", vm_r1.content.research.eyebrow[vm_r1.language] || vm_r1.content.research.eyebrow.it)("title", vm_r1.content.research.title[vm_r1.language] || vm_r1.content.research.title.it)("paragraphs", \u0275\u0275pureFunction6(36, _c0, vm_r1.content.research.paragraphs[0][vm_r1.language] || vm_r1.content.research.paragraphs[0].it, vm_r1.content.research.paragraphs[1][vm_r1.language] || vm_r1.content.research.paragraphs[1].it, vm_r1.content.research.paragraphs[2][vm_r1.language] || vm_r1.content.research.paragraphs[2].it, vm_r1.content.research.paragraphs[3][vm_r1.language] || vm_r1.content.research.paragraphs[3].it, vm_r1.content.research.paragraphs[4][vm_r1.language] || vm_r1.content.research.paragraphs[4].it, vm_r1.content.research.paragraphs[5][vm_r1.language] || vm_r1.content.research.paragraphs[5].it))("image", vm_r1.content.research.image)("imageAlt", vm_r1.content.research.imageAlt[vm_r1.language] || vm_r1.content.research.imageAlt.it);
    \u0275\u0275advance(2);
    \u0275\u0275property("image", vm_r1.content.quote.image)("imageAlt", vm_r1.content.quote.imageAlt[vm_r1.language] || vm_r1.content.quote.imageAlt.it)("quote", vm_r1.content.quote.text[vm_r1.language] || vm_r1.content.quote.text.it);
    \u0275\u0275advance(2);
    \u0275\u0275property("eyebrow", vm_r1.content.beyondPainting.eyebrow[vm_r1.language] || vm_r1.content.beyondPainting.eyebrow.it)("title", vm_r1.content.beyondPainting.title[vm_r1.language] || vm_r1.content.beyondPainting.title.it)("items", \u0275\u0275pureFunction3(52, _c2, \u0275\u0275pureFunction2(43, _c1, vm_r1.content.beyondPainting.items[0].title[vm_r1.language] || vm_r1.content.beyondPainting.items[0].title.it, vm_r1.content.beyondPainting.items[0].body[vm_r1.language] || vm_r1.content.beyondPainting.items[0].body.it), \u0275\u0275pureFunction2(46, _c1, vm_r1.content.beyondPainting.items[1].title[vm_r1.language] || vm_r1.content.beyondPainting.items[1].title.it, vm_r1.content.beyondPainting.items[1].body[vm_r1.language] || vm_r1.content.beyondPainting.items[1].body.it), \u0275\u0275pureFunction2(49, _c1, vm_r1.content.beyondPainting.items[2].title[vm_r1.language] || vm_r1.content.beyondPainting.items[2].title.it, vm_r1.content.beyondPainting.items[2].body[vm_r1.language] || vm_r1.content.beyondPainting.items[2].body.it)))("image", vm_r1.content.beyondPainting.image)("imageAlt", vm_r1.content.beyondPainting.imageAlt[vm_r1.language] || vm_r1.content.beyondPainting.imageAlt.it);
    \u0275\u0275advance(2);
    \u0275\u0275property("eyebrow", vm_r1.content.presence.eyebrow[vm_r1.language] || vm_r1.content.presence.eyebrow.it)("title", vm_r1.content.presence.title[vm_r1.language] || vm_r1.content.presence.title.it)("paragraphs", \u0275\u0275pureFunction5(56, _c3, vm_r1.content.presence.paragraphs[0][vm_r1.language] || vm_r1.content.presence.paragraphs[0].it, vm_r1.content.presence.paragraphs[1][vm_r1.language] || vm_r1.content.presence.paragraphs[1].it, vm_r1.content.presence.paragraphs[2][vm_r1.language] || vm_r1.content.presence.paragraphs[2].it, vm_r1.content.presence.paragraphs[3][vm_r1.language] || vm_r1.content.presence.paragraphs[3].it, vm_r1.content.presence.paragraphs[4][vm_r1.language] || vm_r1.content.presence.paragraphs[4].it))("image", vm_r1.content.presence.image)("imageAlt", vm_r1.content.presence.imageAlt[vm_r1.language] || vm_r1.content.presence.imageAlt.it)("reverse", vm_r1.content.presence.reverse === true);
    \u0275\u0275advance(2);
    \u0275\u0275property("eyebrow", vm_r1.content.search.eyebrow[vm_r1.language] || vm_r1.content.search.eyebrow.it)("title", vm_r1.content.search.title[vm_r1.language] || vm_r1.content.search.title.it)("image", vm_r1.content.search.image)("imageAlt", vm_r1.content.search.imageAlt[vm_r1.language] || vm_r1.content.search.imageAlt.it)("paragraphs", \u0275\u0275pureFunction4(62, _c4, vm_r1.content.search.paragraphs[0][vm_r1.language] || vm_r1.content.search.paragraphs[0].it, vm_r1.content.search.paragraphs[1][vm_r1.language] || vm_r1.content.search.paragraphs[1].it, vm_r1.content.search.paragraphs[2][vm_r1.language] || vm_r1.content.search.paragraphs[2].it, vm_r1.content.search.paragraphs[3][vm_r1.language] || vm_r1.content.search.paragraphs[3].it));
    \u0275\u0275advance();
    \u0275\u0275property("revealDelay", 80);
    \u0275\u0275advance();
    \u0275\u0275property("eyebrow", vm_r1.content.manifesto.eyebrow[vm_r1.language] || vm_r1.content.manifesto.eyebrow.it)("phrases", \u0275\u0275pureFunction5(67, _c3, vm_r1.content.manifesto.phrases[0][vm_r1.language] || vm_r1.content.manifesto.phrases[0].it, vm_r1.content.manifesto.phrases[1][vm_r1.language] || vm_r1.content.manifesto.phrases[1].it, vm_r1.content.manifesto.phrases[2][vm_r1.language] || vm_r1.content.manifesto.phrases[2].it, vm_r1.content.manifesto.phrases[3][vm_r1.language] || vm_r1.content.manifesto.phrases[3].it, vm_r1.content.manifesto.phrases[4][vm_r1.language] || vm_r1.content.manifesto.phrases[4].it));
    \u0275\u0275advance(2);
    \u0275\u0275property("image", vm_r1.content.cta.image)("imageAlt", vm_r1.content.cta.imageAlt[vm_r1.language] || vm_r1.content.cta.imageAlt.it)("title", vm_r1.content.cta.title[vm_r1.language] || vm_r1.content.cta.title.it)("body", vm_r1.content.cta.body[vm_r1.language] || vm_r1.content.cta.body.it)("actions", \u0275\u0275pureFunction2(79, _c6, \u0275\u0275pureFunction2(73, _c5, vm_r1.content.cta.actions[0].label[vm_r1.language] || vm_r1.content.cta.actions[0].label.it, vm_r1.artworksPath), \u0275\u0275pureFunction2(76, _c5, vm_r1.content.cta.actions[1].label[vm_r1.language] || vm_r1.content.cta.actions[1].label.it, vm_r1.contactsPath)));
  }
}
var AboutPage = class _AboutPage {
  siteService = inject(SiteService);
  languageService = inject(LanguageService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.siteService.getPagesConfig()
  ]).pipe(map(([siteConfig, pagesConfig]) => {
    const language = this.languageService.getRouteLanguage(this.route.snapshot);
    const content = __spreadProps(__spreadValues({}, ABOUT_CONTENT), {
      hero: __spreadProps(__spreadValues({}, ABOUT_CONTENT.hero), {
        image: pagesConfig.about?.heroImage || ABOUT_CONTENT.hero.image
      }),
      research: __spreadProps(__spreadValues({}, ABOUT_CONTENT.research), {
        image: pagesConfig.about?.researchImage || ABOUT_CONTENT.research.image
      }),
      quote: __spreadProps(__spreadValues({}, ABOUT_CONTENT.quote), {
        image: pagesConfig.about?.quoteImage || ABOUT_CONTENT.quote.image
      }),
      beyondPainting: __spreadProps(__spreadValues({}, ABOUT_CONTENT.beyondPainting), {
        image: pagesConfig.about?.beyondPaintingImage || ABOUT_CONTENT.beyondPainting.image
      }),
      presence: __spreadProps(__spreadValues({}, ABOUT_CONTENT.presence), {
        image: pagesConfig.about?.presenceImage || ABOUT_CONTENT.presence.image
      }),
      search: __spreadProps(__spreadValues({}, ABOUT_CONTENT.search), {
        image: pagesConfig.about?.searchImage || ABOUT_CONTENT.search.image
      }),
      cta: __spreadProps(__spreadValues({}, ABOUT_CONTENT.cta), {
        image: pagesConfig.about?.ctaImage || ABOUT_CONTENT.cta.image
      })
    });
    return {
      siteConfig,
      language,
      content,
      artworksPath: this.languageService.buildLocalizedPath(language, "artworks"),
      contactsPath: this.languageService.buildLocalizedPath(language, "contacts")
    };
  }), tap(({ siteConfig, language }) => {
    this.seoService.applyLocalizedAlternates(siteConfig.domain, this.route.snapshot, void 0, siteConfig.defaultLanguage);
    this.seoService.applyPageMetadata({
      title: language === "en" ? `About | ${siteConfig.artistName}` : `About | ${siteConfig.artistName}`,
      description: ABOUT_CONTENT.seoDescription[language] || ABOUT_CONTENT.seoDescription.it,
      url: `${siteConfig.domain}${this.languageService.buildLocalizedPath(language, "about")}`,
      image: `${siteConfig.domain}${ABOUT_CONTENT.hero.image}`,
      siteName: siteConfig.artistName,
      language
    });
  }));
  static \u0275fac = function AboutPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutPage, selectors: [["app-about-page"]], decls: 2, vars: 3, consts: [[1, "about-page"], [3, "image", "title", "subtitle", "scrollLabel"], ["appRevealOnScroll", "", "revealVariant", "right", 1, "about-motion"], [3, "eyebrow", "title", "paragraphs", "image", "imageAlt"], ["appRevealOnScroll", "", "revealVariant", "image", 1, "about-motion", "about-motion--wide"], [3, "image", "imageAlt", "quote"], ["appRevealOnScroll", "", 1, "about-motion"], [3, "eyebrow", "title", "items", "image", "imageAlt"], ["appRevealOnScroll", "", "revealVariant", "left", 1, "about-motion"], [3, "eyebrow", "title", "paragraphs", "image", "imageAlt", "reverse"], [3, "eyebrow", "title", "image", "imageAlt", "paragraphs"], ["appRevealOnScroll", "", 1, "about-motion", 3, "revealDelay"], [3, "eyebrow", "phrases"], ["appRevealOnScroll", "", "revealVariant", "scale", 1, "about-motion"], [3, "image", "imageAlt", "title", "body", "actions"]], template: function AboutPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AboutPage_Conditional_0_Template, 16, 82, "article", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [
    HeroSectionComponent,
    SplitSectionComponent,
    QuoteSectionComponent,
    EditorialSectionComponent,
    LargeImageSectionComponent,
    ManifestoSectionComponent,
    CtaSectionComponent,
    RevealOnScrollDirective,
    AsyncPipe
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.about-page[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      rgb(255, 252, 248) 0%,\n      rgba(248, 242, 234, 0.62) 34%,\n      rgb(255, 252, 248) 100%);\n}\n.about-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 35rem;\n  right: -18rem;\n  width: 42rem;\n  height: 42rem;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(159, 116, 82, 0.08),\n      transparent 68%);\n  pointer-events: none;\n}\n.about-motion[_ngcontent-%COMP%] {\n  position: relative;\n}\n.about-motion--wide[_ngcontent-%COMP%] {\n  transform-origin: center top;\n}\n/*# sourceMappingURL=about.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutPage, [{
    type: Component,
    args: [{ selector: "app-about-page", standalone: true, imports: [
      AsyncPipe,
      HeroSectionComponent,
      SplitSectionComponent,
      QuoteSectionComponent,
      EditorialSectionComponent,
      LargeImageSectionComponent,
      ManifestoSectionComponent,
      CtaSectionComponent,
      RevealOnScrollDirective
    ], template: '@if (vm$ | async; as vm) {\n  <article class="about-page">\n    <app-hero-section\n      [image]="vm.content.hero.image"\n      [title]="vm.content.hero.title[vm.language] || vm.content.hero.title.it"\n      [subtitle]="vm.content.hero.subtitle[vm.language] || vm.content.hero.subtitle.it"\n      [scrollLabel]="vm.content.hero.scrollLabel[vm.language] || vm.content.hero.scrollLabel.it" />\n\n    <div class="about-motion" appRevealOnScroll revealVariant="right">\n      <app-split-section\n      [eyebrow]="vm.content.research.eyebrow[vm.language] || vm.content.research.eyebrow.it"\n      [title]="vm.content.research.title[vm.language] || vm.content.research.title.it"\n      [paragraphs]="[\n        vm.content.research.paragraphs[0][vm.language] || vm.content.research.paragraphs[0].it,\n        vm.content.research.paragraphs[1][vm.language] || vm.content.research.paragraphs[1].it,\n        vm.content.research.paragraphs[2][vm.language] || vm.content.research.paragraphs[2].it,\n        vm.content.research.paragraphs[3][vm.language] || vm.content.research.paragraphs[3].it,\n        vm.content.research.paragraphs[4][vm.language] || vm.content.research.paragraphs[4].it,\n        vm.content.research.paragraphs[5][vm.language] || vm.content.research.paragraphs[5].it\n      ]"\n      [image]="vm.content.research.image"\n        [imageAlt]="vm.content.research.imageAlt[vm.language] || vm.content.research.imageAlt.it" />\n    </div>\n\n    <div class="about-motion about-motion--wide" appRevealOnScroll revealVariant="image">\n      <app-quote-section\n      [image]="vm.content.quote.image"\n      [imageAlt]="vm.content.quote.imageAlt[vm.language] || vm.content.quote.imageAlt.it"\n        [quote]="vm.content.quote.text[vm.language] || vm.content.quote.text.it" />\n    </div>\n\n    <div class="about-motion" appRevealOnScroll>\n      <app-editorial-section\n      [eyebrow]="vm.content.beyondPainting.eyebrow[vm.language] || vm.content.beyondPainting.eyebrow.it"\n      [title]="vm.content.beyondPainting.title[vm.language] || vm.content.beyondPainting.title.it"\n      [items]="[\n        {\n          title: vm.content.beyondPainting.items[0].title[vm.language] || vm.content.beyondPainting.items[0].title.it,\n          body: vm.content.beyondPainting.items[0].body[vm.language] || vm.content.beyondPainting.items[0].body.it\n        },\n        {\n          title: vm.content.beyondPainting.items[1].title[vm.language] || vm.content.beyondPainting.items[1].title.it,\n          body: vm.content.beyondPainting.items[1].body[vm.language] || vm.content.beyondPainting.items[1].body.it\n        },\n        {\n          title: vm.content.beyondPainting.items[2].title[vm.language] || vm.content.beyondPainting.items[2].title.it,\n          body: vm.content.beyondPainting.items[2].body[vm.language] || vm.content.beyondPainting.items[2].body.it\n        }\n      ]"\n      [image]="vm.content.beyondPainting.image"\n        [imageAlt]="vm.content.beyondPainting.imageAlt[vm.language] || vm.content.beyondPainting.imageAlt.it" />\n    </div>\n\n    <div class="about-motion" appRevealOnScroll revealVariant="left">\n      <app-split-section\n      [eyebrow]="vm.content.presence.eyebrow[vm.language] || vm.content.presence.eyebrow.it"\n      [title]="vm.content.presence.title[vm.language] || vm.content.presence.title.it"\n      [paragraphs]="[\n        vm.content.presence.paragraphs[0][vm.language] || vm.content.presence.paragraphs[0].it,\n        vm.content.presence.paragraphs[1][vm.language] || vm.content.presence.paragraphs[1].it,\n        vm.content.presence.paragraphs[2][vm.language] || vm.content.presence.paragraphs[2].it,\n        vm.content.presence.paragraphs[3][vm.language] || vm.content.presence.paragraphs[3].it,\n        vm.content.presence.paragraphs[4][vm.language] || vm.content.presence.paragraphs[4].it\n      ]"\n      [image]="vm.content.presence.image"\n      [imageAlt]="vm.content.presence.imageAlt[vm.language] || vm.content.presence.imageAlt.it"\n        [reverse]="vm.content.presence.reverse === true" />\n    </div>\n\n    <div class="about-motion about-motion--wide" appRevealOnScroll revealVariant="image">\n      <app-large-image-section\n      [eyebrow]="vm.content.search.eyebrow[vm.language] || vm.content.search.eyebrow.it"\n      [title]="vm.content.search.title[vm.language] || vm.content.search.title.it"\n      [image]="vm.content.search.image"\n      [imageAlt]="vm.content.search.imageAlt[vm.language] || vm.content.search.imageAlt.it"\n      [paragraphs]="[\n        vm.content.search.paragraphs[0][vm.language] || vm.content.search.paragraphs[0].it,\n        vm.content.search.paragraphs[1][vm.language] || vm.content.search.paragraphs[1].it,\n        vm.content.search.paragraphs[2][vm.language] || vm.content.search.paragraphs[2].it,\n        vm.content.search.paragraphs[3][vm.language] || vm.content.search.paragraphs[3].it\n        ]" />\n    </div>\n\n    <div class="about-motion" appRevealOnScroll [revealDelay]="80">\n      <app-manifesto-section\n      [eyebrow]="vm.content.manifesto.eyebrow[vm.language] || vm.content.manifesto.eyebrow.it"\n      [phrases]="[\n        vm.content.manifesto.phrases[0][vm.language] || vm.content.manifesto.phrases[0].it,\n        vm.content.manifesto.phrases[1][vm.language] || vm.content.manifesto.phrases[1].it,\n        vm.content.manifesto.phrases[2][vm.language] || vm.content.manifesto.phrases[2].it,\n        vm.content.manifesto.phrases[3][vm.language] || vm.content.manifesto.phrases[3].it,\n        vm.content.manifesto.phrases[4][vm.language] || vm.content.manifesto.phrases[4].it\n        ]" />\n    </div>\n\n    <div class="about-motion" appRevealOnScroll revealVariant="scale">\n      <app-cta-section\n      [image]="vm.content.cta.image"\n      [imageAlt]="vm.content.cta.imageAlt[vm.language] || vm.content.cta.imageAlt.it"\n      [title]="vm.content.cta.title[vm.language] || vm.content.cta.title.it"\n      [body]="vm.content.cta.body[vm.language] || vm.content.cta.body.it"\n      [actions]="[\n        {\n          label: vm.content.cta.actions[0].label[vm.language] || vm.content.cta.actions[0].label.it,\n          url: vm.artworksPath\n        },\n        {\n          label: vm.content.cta.actions[1].label[vm.language] || vm.content.cta.actions[1].label.it,\n          url: vm.contactsPath\n        }\n        ]" />\n    </div>\n  </article>\n}\n', styles: ['/* sito-artista/src/app/pages/about/about.page.sass */\n:host {\n  display: block;\n}\n.about-page {\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      rgb(255, 252, 248) 0%,\n      rgba(248, 242, 234, 0.62) 34%,\n      rgb(255, 252, 248) 100%);\n}\n.about-page::before {\n  content: "";\n  position: absolute;\n  top: 35rem;\n  right: -18rem;\n  width: 42rem;\n  height: 42rem;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(159, 116, 82, 0.08),\n      transparent 68%);\n  pointer-events: none;\n}\n.about-motion {\n  position: relative;\n}\n.about-motion--wide {\n  transform-origin: center top;\n}\n/*# sourceMappingURL=about.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutPage, { className: "AboutPage", filePath: "sito-artista/src/app/pages/about/about.page.ts", lineNumber: 35 });
})();
export {
  AboutPage
};
//# sourceMappingURL=chunk-JIVBXV2X.js.map
