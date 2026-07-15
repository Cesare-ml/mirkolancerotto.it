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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-D22KB4XF.js";

// sito-artista/src/app/pages/drawings/drawings.page.ts
function DrawingsPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "app-artwork-grid", 5);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Opere su carta" : "Works on paper");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Disegni" : "Drawings");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Disegni e opere su carta ampliano il racconto senza trasformarsi in una sezione secondaria." : "Drawings and works on paper broaden the narrative without becoming a secondary section.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("artworks", vm_r1.artworks)("language", vm_r1.language);
  }
}
var DrawingsPage = class _DrawingsPage {
  artworkService = inject(ArtworkService);
  languageService = inject(LanguageService);
  siteService = inject(SiteService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.artworkService.getDrawings()
  ]).pipe(map(([siteConfig, artworks]) => ({
    siteConfig,
    artworks,
    language: this.languageService.getRouteLanguage(this.route.snapshot)
  })), tap(({ siteConfig, language }) => {
    this.seoService.applyLocalizedAlternates(siteConfig.domain, this.route.snapshot, void 0, siteConfig.defaultLanguage);
    this.seoService.applyPageMetadata({
      title: language === "en" ? `Drawings | ${siteConfig.artistName}` : `Disegni | ${siteConfig.artistName}`,
      description: language === "en" ? `Drawings and works on paper by ${siteConfig.artistName}.` : `Disegni e opere su carta di ${siteConfig.artistName}.`,
      url: `${siteConfig.domain}${this.languageService.buildLocalizedPath(language, "drawings")}`,
      image: `${siteConfig.domain}${siteConfig.seo.defaultOgImage}`,
      siteName: siteConfig.artistName,
      language
    });
  }));
  static \u0275fac = function DrawingsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawingsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DrawingsPage, selectors: [["app-drawings-page"]], decls: 2, vars: 3, consts: [[1, "mx-auto", "max-w-7xl", "px-5", "pb-4", "pt-16", "sm:px-8", "lg:px-12"], [1, "max-w-3xl", "py-10"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-4xl", "leading-none", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-5", "text-sm", "leading-8", "text-[var(--site-muted)]", "sm:text-base"], ["layout", "editorial", "title", "", "subtitle", "", 3, "artworks", "language"]], template: function DrawingsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DrawingsPage_Conditional_0_Template, 9, 5);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [ArtworkGridComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=drawings.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawingsPage, [{
    type: Component,
    args: [{ selector: "app-drawings-page", standalone: true, imports: [AsyncPipe, ArtworkGridComponent], template: `@if (vm$ | async; as vm) {
  <section class="mx-auto max-w-7xl px-5 pb-4 pt-16 sm:px-8 lg:px-12">
    <div class="max-w-3xl py-10">
      <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ vm.language === 'it' ? 'Opere su carta' : 'Works on paper' }}</p>
      <h1 class="mt-4 text-4xl leading-none text-[var(--site-text)] sm:text-5xl">{{ vm.language === 'it' ? 'Disegni' : 'Drawings' }}</h1>
      <p class="mt-5 text-sm leading-8 text-[var(--site-muted)] sm:text-base">
        {{
          vm.language === 'it'
            ? 'Disegni e opere su carta ampliano il racconto senza trasformarsi in una sezione secondaria.'
            : 'Drawings and works on paper broaden the narrative without becoming a secondary section.'
        }}
      </p>
    </div>
  </section>

  <app-artwork-grid
    [artworks]="vm.artworks"
    [language]="vm.language"
    layout="editorial"
    title=""
    subtitle="" />
}
`, styles: ["/* sito-artista/src/app/pages/drawings/drawings.page.sass */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=drawings.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrawingsPage, { className: "DrawingsPage", filePath: "sito-artista/src/app/pages/drawings/drawings.page.ts", lineNumber: 18 });
})();
export {
  DrawingsPage
};
//# sourceMappingURL=chunk-QBEWXHZY.js.map
