import {
  isPlatformBrowser
} from "./chunk-5ZWV2562.js";
import {
  Directive,
  ElementRef,
  Input,
  PLATFORM_ID,
  Renderer2,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/directives/reveal-on-scroll.directive.ts
var RevealOnScrollDirective = class _RevealOnScrollDirective {
  element = inject(ElementRef);
  renderer = inject(Renderer2);
  platformId = inject(PLATFORM_ID);
  observer = null;
  revealDelay = 0;
  revealVariant = "up";
  ngOnInit() {
    const nativeElement = this.element.nativeElement;
    this.renderer.addClass(nativeElement, "site-reveal");
    this.renderer.addClass(nativeElement, `site-reveal--${this.revealVariant}`);
    this.renderer.setStyle(nativeElement, "--reveal-delay", `${Math.max(0, this.revealDelay)}ms`);
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.renderer.addClass(nativeElement, "site-reveal--visible");
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }
      this.renderer.addClass(nativeElement, "site-reveal--visible");
      this.observer?.disconnect();
      this.observer = null;
    }, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08
    });
    this.observer.observe(nativeElement);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static \u0275fac = function RevealOnScrollDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevealOnScrollDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RevealOnScrollDirective, selectors: [["", "appRevealOnScroll", ""]], inputs: { revealDelay: "revealDelay", revealVariant: "revealVariant" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevealOnScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[appRevealOnScroll]",
      standalone: true
    }]
  }], null, { revealDelay: [{
    type: Input
  }], revealVariant: [{
    type: Input
  }] });
})();

export {
  RevealOnScrollDirective
};
//# sourceMappingURL=chunk-CVTQ3CL2.js.map
