import {
  NgClass,
  RouterLink
} from "./chunk-5ZWV2562.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/components/hero/hero.component.ts
var _c0 = (a0, a1, a2) => ({ "hero--fullscreen": a0, "hero--large": a1, "hero--compact": a2 });
function HeroComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.eyebrow);
  }
}
function HeroComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function HeroComponent_Conditional_9_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const primaryAction_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("href", primaryAction_r2.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", primaryAction_r2.label, " ");
  }
}
function HeroComponent_Conditional_9_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const primaryAction_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", primaryAction_r2.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", primaryAction_r2.label, " ");
  }
}
function HeroComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HeroComponent_Conditional_9_Conditional_1_Conditional_0_Template, 2, 2, "a", 9)(1, HeroComponent_Conditional_9_Conditional_1_Conditional_1_Template, 2, 2, "a", 10);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.external ? 0 : 1);
  }
}
function HeroComponent_Conditional_9_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const secondaryAction_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("href", secondaryAction_r3.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", secondaryAction_r3.label, " ");
  }
}
function HeroComponent_Conditional_9_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const secondaryAction_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", secondaryAction_r3.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", secondaryAction_r3.label, " ");
  }
}
function HeroComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HeroComponent_Conditional_9_Conditional_2_Conditional_0_Template, 2, 2, "a", 11)(1, HeroComponent_Conditional_9_Conditional_2_Conditional_1_Template, 2, 2, "a", 12);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.external ? 0 : 1);
  }
}
function HeroComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, HeroComponent_Conditional_9_Conditional_1_Template, 2, 1);
    \u0275\u0275conditionalCreate(2, HeroComponent_Conditional_9_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.ctaPrimary) ? 1 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.ctaSecondary) ? 2 : -1, tmp_2_0);
  }
}
var HeroComponent = class _HeroComponent {
  image = "";
  title = "";
  subtitle = "";
  eyebrow = "";
  ctaPrimary = null;
  ctaSecondary = null;
  height = "large";
  alignment = "start";
  get backgroundStyle() {
    return `linear-gradient(180deg, rgba(20, 18, 16, 0.25), rgba(20, 18, 16, 0.72)), url('${this.image}')`;
  }
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], inputs: { image: "image", title: "title", subtitle: "subtitle", eyebrow: "eyebrow", ctaPrimary: "ctaPrimary", ctaSecondary: "ctaSecondary", height: "height", alignment: "alignment" }, decls: 10, vars: 15, consts: [[1, "hero", "relative", "overflow-hidden", 3, "ngClass"], [1, "hero__background", "absolute", "inset-0"], [1, "hero__veil", "absolute", "inset-0"], [1, "relative", "mx-auto", "flex", "h-full", "max-w-7xl", "items-end", "px-5", "pb-10", "pt-24", "sm:px-8", "lg:px-12"], [1, "hero__panel", "max-w-3xl", "rounded-[2rem]", "border", "border-white/15", "p-6", "text-white", "backdrop-blur-sm", "sm:p-10"], [1, "mb-4", "text-xs", "uppercase", "tracking-[0.28em]", "text-white/70"], [1, "text-4xl", "leading-none", "sm:text-5xl", "lg:text-6xl"], [1, "mt-5", "max-w-2xl", "text-sm", "leading-7", "text-white/82", "sm:text-base"], [1, "mt-8", "flex", "flex-wrap", "gap-3"], ["target", "_blank", "rel", "noopener noreferrer", 1, "hero__button", "hero__button--primary", 3, "href"], [1, "hero__button", "hero__button--primary", 3, "routerLink"], ["target", "_blank", "rel", "noopener noreferrer", 1, "hero__button", "hero__button--secondary", 3, "href"], [1, "hero__button", "hero__button--secondary", 3, "routerLink"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275conditionalCreate(5, HeroComponent_Conditional_5_Template, 2, 1, "p", 5);
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, HeroComponent_Conditional_8_Template, 2, 1, "p", 7);
      \u0275\u0275conditionalCreate(9, HeroComponent_Conditional_9_Template, 3, 2, "div", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c0, ctx.height === "fullscreen", ctx.height === "large", ctx.height === "compact"));
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-image", ctx.backgroundStyle);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("justify-center", ctx.alignment === "center");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-center", ctx.alignment === "center");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.eyebrow ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subtitle ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.ctaPrimary || ctx.ctaSecondary ? 9 : -1);
    }
  }, dependencies: [NgClass, RouterLink], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #1a1612,\n      #2d251d);\n}\n.hero--fullscreen[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n}\n.hero--large[_ngcontent-%COMP%] {\n  min-height: 82dvh;\n}\n.hero--compact[_ngcontent-%COMP%] {\n  min-height: 60dvh;\n}\n.hero__background[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transform: scale(1.02);\n  animation: _ngcontent-%COMP%_heroDrift 16s ease-in-out infinite alternate;\n}\n.hero__veil[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(241, 228, 200, 0.22),\n      transparent 30%),\n    linear-gradient(\n      180deg,\n      rgba(14, 12, 10, 0.12),\n      rgba(14, 12, 10, 0.38));\n  animation: _ngcontent-%COMP%_heroVeilArrival 1.1s ease-out both;\n}\n.hero__panel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(19, 17, 15, 0.18),\n      rgba(19, 17, 15, 0.34));\n  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_heroPanelArrival 900ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both;\n}\n.hero__button[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0.9rem 1.35rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition:\n    transform 0.25s ease,\n    background-color 0.25s ease,\n    border-color 0.25s ease,\n    color 0.25s ease;\n}\n.hero__button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.hero__button--primary[_ngcontent-%COMP%] {\n  background: #f1e4c8;\n  color: #1c1712;\n}\n.hero__button--secondary[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_heroDrift {\n  from {\n    transform: scale(1.02) translate3d(0, 0, 0);\n  }\n  to {\n    transform: scale(1.07) translate3d(0, -8px, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_heroVeilArrival {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_heroPanelArrival {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 1.5rem, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero__background[_ngcontent-%COMP%], \n   .hero__veil[_ngcontent-%COMP%], \n   .hero__panel[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", standalone: true, imports: [NgClass, RouterLink], template: `<section
  class="hero relative overflow-hidden"
  [ngClass]="{
    'hero--fullscreen': height === 'fullscreen',
    'hero--large': height === 'large',
    'hero--compact': height === 'compact'
  }">
  <div
    class="hero__background absolute inset-0"
    [style.background-image]="backgroundStyle"></div>

  <div class="hero__veil absolute inset-0"></div>

  <div class="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-10 pt-24 sm:px-8 lg:px-12"
    [class.justify-center]="alignment === 'center'">
    <div class="hero__panel max-w-3xl rounded-[2rem] border border-white/15 p-6 text-white backdrop-blur-sm sm:p-10"
      [class.text-center]="alignment === 'center'">
      @if (eyebrow) {
        <p class="mb-4 text-xs uppercase tracking-[0.28em] text-white/70">{{ eyebrow }}</p>
      }

      <h1 class="text-4xl leading-none sm:text-5xl lg:text-6xl">{{ title }}</h1>

      @if (subtitle) {
        <p class="mt-5 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">{{ subtitle }}</p>
      }

      @if (ctaPrimary || ctaSecondary) {
        <div class="mt-8 flex flex-wrap gap-3">
          @if (ctaPrimary; as primaryAction) {
            @if (primaryAction.external) {
              <a
                class="hero__button hero__button--primary"
                [href]="primaryAction.url"
                target="_blank"
                rel="noopener noreferrer">
                {{ primaryAction.label }}
              </a>
            } @else {
              <a
                class="hero__button hero__button--primary"
                [routerLink]="primaryAction.url">
                {{ primaryAction.label }}
              </a>
            }
          }

          @if (ctaSecondary; as secondaryAction) {
            @if (secondaryAction.external) {
              <a
                class="hero__button hero__button--secondary"
                [href]="secondaryAction.url"
                target="_blank"
                rel="noopener noreferrer">
                {{ secondaryAction.label }}
              </a>
            } @else {
              <a
                class="hero__button hero__button--secondary"
                [routerLink]="secondaryAction.url">
                {{ secondaryAction.label }}
              </a>
            }
          }
        </div>
      }
    </div>
  </div>
</section>
`, styles: ["/* sito-artista/src/app/components/hero/hero.component.sass */\n.hero {\n  background:\n    linear-gradient(\n      180deg,\n      #1a1612,\n      #2d251d);\n}\n.hero--fullscreen {\n  min-height: 100dvh;\n}\n.hero--large {\n  min-height: 82dvh;\n}\n.hero--compact {\n  min-height: 60dvh;\n}\n.hero__background {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transform: scale(1.02);\n  animation: heroDrift 16s ease-in-out infinite alternate;\n}\n.hero__veil {\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(241, 228, 200, 0.22),\n      transparent 30%),\n    linear-gradient(\n      180deg,\n      rgba(14, 12, 10, 0.12),\n      rgba(14, 12, 10, 0.38));\n  animation: heroVeilArrival 1.1s ease-out both;\n}\n.hero__panel {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(19, 17, 15, 0.18),\n      rgba(19, 17, 15, 0.34));\n  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.18);\n  animation: heroPanelArrival 900ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both;\n}\n.hero__button {\n  border-radius: 999px;\n  padding: 0.9rem 1.35rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition:\n    transform 0.25s ease,\n    background-color 0.25s ease,\n    border-color 0.25s ease,\n    color 0.25s ease;\n}\n.hero__button:hover {\n  transform: translateY(-2px);\n}\n.hero__button--primary {\n  background: #f1e4c8;\n  color: #1c1712;\n}\n.hero__button--secondary {\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  color: white;\n}\n@keyframes heroDrift {\n  from {\n    transform: scale(1.02) translate3d(0, 0, 0);\n  }\n  to {\n    transform: scale(1.07) translate3d(0, -8px, 0);\n  }\n}\n@keyframes heroVeilArrival {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes heroPanelArrival {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 1.5rem, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero__background,\n  .hero__veil,\n  .hero__panel {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */\n"] }]
  }], null, { image: [{
    type: Input
  }], title: [{
    type: Input,
    args: [{ required: true }]
  }], subtitle: [{
    type: Input
  }], eyebrow: [{
    type: Input
  }], ctaPrimary: [{
    type: Input
  }], ctaSecondary: [{
    type: Input
  }], height: [{
    type: Input
  }], alignment: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "sito-artista/src/app/components/hero/hero.component.ts", lineNumber: 18 });
})();

export {
  HeroComponent
};
//# sourceMappingURL=chunk-KPIQVZBI.js.map
