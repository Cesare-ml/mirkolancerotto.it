import {
  ArtworkGridComponent
} from "./chunk-VQAAUBO7.js";
import "./chunk-QAX2I4YF.js";
import {
  ArtworkService
} from "./chunk-IL7ZEAF5.js";
import {
  ActivatedRoute,
  AsyncPipe,
  Component,
  LanguageService,
  SeoService,
  SiteService,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-D22KB4XF.js";

// sito-artista/src/app/pages/artworks/artworks.page.ts
function ArtworksPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(15, "app-artwork-grid", 11);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", vm_r1.heroImage, \u0275\u0275sanitizeUrl)("alt", "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Catalogo pittorico" : "Painting catalogue");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Opere" : "Artworks");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Un percorso tra dipinti in cui la pittura viene lasciata parlare con il proprio tempo: materia, luce, silenzio, presenza." : "A path through paintings where the work is allowed to speak in its own time: matter, light, silence and presence.", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Ogni opera mantiene il proprio formato, il proprio respiro." : "Each work keeps its own format and its own breathing space.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("artworks", vm_r1.artworks)("language", vm_r1.language);
  }
}
var ArtworksPage = class _ArtworksPage {
  artworkService = inject(ArtworkService);
  languageService = inject(LanguageService);
  siteService = inject(SiteService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.artworkService.getPaintings()
  ]).pipe(map(([siteConfig, artworks]) => ({
    siteConfig,
    artworks,
    language: this.languageService.getRouteLanguage(this.route.snapshot),
    heroImage: artworks[0]?.images.main.sources.large || siteConfig.seo.defaultOgImage
  })), tap(({ siteConfig, language }) => {
    this.seoService.applyLocalizedAlternates(siteConfig.domain, this.route.snapshot, void 0, siteConfig.defaultLanguage);
    this.seoService.applyPageMetadata({
      title: language === "en" ? `Artworks | ${siteConfig.artistName}` : `Opere | ${siteConfig.artistName}`,
      description: language === "en" ? `Selection of paintings and original artworks by ${siteConfig.artistName}.` : `Selezione di dipinti e opere originali di ${siteConfig.artistName}.`,
      url: `${siteConfig.domain}${this.languageService.buildLocalizedPath(language, "artworks")}`,
      image: `${siteConfig.domain}${siteConfig.seo.defaultOgImage}`,
      siteName: siteConfig.artistName,
      language
    });
  }));
  static \u0275fac = function ArtworksPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworksPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtworksPage, selectors: [["app-artworks-page"]], decls: 2, vars: 3, consts: [[1, "artworks-page__hero", "relative", "overflow-hidden", "px-5", "pb-2", "pt-12", "sm:px-8", "lg:px-12"], ["aria-hidden", "true", 1, "artworks-page__hero-background"], [1, "artworks-page__hero-image", 3, "src", "alt"], [1, "artworks-page__hero-wash"], [1, "artworks-page__hero-fade"], [1, "mx-auto", "max-w-7xl"], [1, "artworks-page__hero-copy", "relative", "z-[1]", "max-w-2xl", "py-10", "sm:py-14"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-4xl", "leading-none", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-5", "max-w-xl", "text-sm", "leading-8", "text-[var(--site-muted)]", "sm:text-base"], [1, "artworks-page__hero-note", "relative", "z-[1]", "mt-8", "text-xs", "uppercase", "tracking-[0.24em]", "text-[var(--site-muted)]/82"], ["layout", "editorial", "spacing", "tight-top", "title", "", "subtitle", "", 3, "artworks", "language"]], template: function ArtworksPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ArtworksPage_Conditional_0_Template, 16, 8);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [ArtworkGridComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.artworks-page__hero[_ngcontent-%COMP%] {\n  position: relative;\n}\n.artworks-page__hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.artworks-page__hero-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8rem -6rem auto -6rem;\n  width: calc(100% + 12rem);\n  height: 34rem;\n  object-fit: cover;\n  opacity: 0.24;\n  filter: blur(42px) saturate(0.92);\n  transform: scale(1.08);\n  animation: _ngcontent-%COMP%_artworks-page-drift 24s ease-in-out infinite;\n}\n.artworks-page__hero-wash[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(246, 239, 228, 0.58),\n      rgba(249, 244, 236, 0.38) 34%,\n      rgba(249, 244, 236, 0.92) 78%,\n      rgb(249, 244, 236) 100%);\n}\n.artworks-page__hero-fade[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0;\n  height: 12rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(249, 244, 236, 0),\n      rgb(249, 244, 236));\n}\n.artworks-page__hero-copy[_ngcontent-%COMP%] {\n  align-self: center;\n  -webkit-backdrop-filter: blur(1px);\n  backdrop-filter: blur(1px);\n}\n@keyframes _ngcontent-%COMP%_artworks-page-drift {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(0.8rem, 0.4rem, 0) scale(1.06);\n  }\n}\n/*# sourceMappingURL=artworks.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworksPage, [{
    type: Component,
    args: [{ selector: "app-artworks-page", standalone: true, imports: [AsyncPipe, ArtworkGridComponent], template: `@if (vm$ | async; as vm) {
  <section class="artworks-page__hero relative overflow-hidden px-5 pb-2 pt-12 sm:px-8 lg:px-12">
    <div class="artworks-page__hero-background" aria-hidden="true">
      <img
        class="artworks-page__hero-image"
        [src]="vm.heroImage"
        [alt]="''" />
      <div class="artworks-page__hero-wash"></div>
      <div class="artworks-page__hero-fade"></div>
    </div>

    <div class="mx-auto max-w-7xl">
      <div class="artworks-page__hero-copy relative z-[1] max-w-2xl py-10 sm:py-14">
        <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ vm.language === 'it' ? 'Catalogo pittorico' : 'Painting catalogue' }}</p>
        <h1 class="mt-4 text-4xl leading-none text-[var(--site-text)] sm:text-5xl">{{ vm.language === 'it' ? 'Opere' : 'Artworks' }}</h1>
        <p class="mt-5 max-w-xl text-sm leading-8 text-[var(--site-muted)] sm:text-base">
          {{
            vm.language === 'it'
              ? 'Un percorso tra dipinti in cui la pittura viene lasciata parlare con il proprio tempo: materia, luce, silenzio, presenza.'
              : 'A path through paintings where the work is allowed to speak in its own time: matter, light, silence and presence.'
          }}
        </p>

        <p class="artworks-page__hero-note relative z-[1] mt-8 text-xs uppercase tracking-[0.24em] text-[var(--site-muted)]/82">
          {{
            vm.language === 'it'
              ? 'Ogni opera mantiene il proprio formato, il proprio respiro.'
              : 'Each work keeps its own format and its own breathing space.'
          }}
        </p>
      </div>
    </div>
  </section>

  <app-artwork-grid
    [artworks]="vm.artworks"
    [language]="vm.language"
    layout="editorial"
    spacing="tight-top"
    title=""
    subtitle="" />
}
`, styles: ["/* sito-artista/src/app/pages/artworks/artworks.page.sass */\n:host {\n  display: block;\n}\n.artworks-page__hero {\n  position: relative;\n}\n.artworks-page__hero-background {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.artworks-page__hero-image {\n  position: absolute;\n  inset: -8rem -6rem auto -6rem;\n  width: calc(100% + 12rem);\n  height: 34rem;\n  object-fit: cover;\n  opacity: 0.24;\n  filter: blur(42px) saturate(0.92);\n  transform: scale(1.08);\n  animation: artworks-page-drift 24s ease-in-out infinite;\n}\n.artworks-page__hero-wash {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(246, 239, 228, 0.58),\n      rgba(249, 244, 236, 0.38) 34%,\n      rgba(249, 244, 236, 0.92) 78%,\n      rgb(249, 244, 236) 100%);\n}\n.artworks-page__hero-fade {\n  position: absolute;\n  inset: auto 0 0;\n  height: 12rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(249, 244, 236, 0),\n      rgb(249, 244, 236));\n}\n.artworks-page__hero-copy {\n  align-self: center;\n  -webkit-backdrop-filter: blur(1px);\n  backdrop-filter: blur(1px);\n}\n@keyframes artworks-page-drift {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(0.8rem, 0.4rem, 0) scale(1.06);\n  }\n}\n/*# sourceMappingURL=artworks.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtworksPage, { className: "ArtworksPage", filePath: "sito-artista/src/app/pages/artworks/artworks.page.ts", lineNumber: 18 });
})();
export {
  ArtworksPage
};
//# sourceMappingURL=chunk-SM42VFE3.js.map
