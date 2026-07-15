import {
  ArtworkGridComponent
} from "./chunk-VQAAUBO7.js";
import "./chunk-QAX2I4YF.js";
import {
  ArtworkService
} from "./chunk-IL7ZEAF5.js";
import {
  NewsletterComponent
} from "./chunk-A3ZGQU3B.js";
import {
  HeroComponent
} from "./chunk-SXMXTFLE.js";
import {
  ActivatedRoute,
  AsyncPipe,
  Component,
  LanguageService,
  RouterLink,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-D22KB4XF.js";

// sito-artista/src/content/home.content.ts
var HOME_CONTENT = {
  manifestoTitle: {
    it: "La pittura come presenza, non come esposizione di prodotto",
    en: "Painting as presence, not as product display"
  },
  manifestoBody: {
    it: "La home non introduce soltanto un archivio. Introduce un ritmo: opere, materia, silenzio, ricerca. Ogni sezione deve accompagnare verso il lavoro, non distrarre da esso.",
    en: "The homepage does not introduce an archive alone. It introduces a rhythm: artworks, matter, silence and research. Each section should lead toward the work, not distract from it."
  },
  featuredTitle: {
    it: "Opere in evidenza",
    en: "Featured artworks"
  },
  featuredSubtitle: {
    it: "Una selezione iniziale per entrare nel linguaggio dell\u2019artista.",
    en: "An initial selection to enter the artist\u2019s visual language."
  },
  drawingsTitle: {
    it: "Disegni e opere su carta",
    en: "Drawings and works on paper"
  },
  drawingsSubtitle: {
    it: "Una soglia pi\xF9 intima, essenziale, ravvicinata.",
    en: "A more intimate, essential and close threshold."
  },
  commissionsTitle: {
    it: "Un\u2019opera nata dal dialogo",
    en: "Commissions"
  },
  commissionsBody: {
    it: "Le commissioni non sono varianti decorative. Sono opere costruite attraverso ascolto, contesto e linguaggio pittorico, in un confronto diretto con l\u2019artista.",
    en: "Commissions are not decorative variations. They are artworks built through listening, context and pictorial language, in direct conversation with the artist."
  }
};

// sito-artista/src/app/pages/home/home.page.ts
var _c0 = (a0, a1) => ({ label: a0, url: a1 });
function HomePage_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 15)(2, "figure", 16);
    \u0275\u0275element(3, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", vm_r1.pagesConfig.home.commissionsImage, \u0275\u0275sanitizeUrl)("alt", vm_r1.language === "it" ? "Immagine commissioni home" : "Homepage commissions image");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Commissioni" : "Commissions");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.content.commissionsTitle[vm_r1.language] || vm_r1.content.commissionsTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.content.commissionsBody[vm_r1.language] || vm_r1.content.commissionsBody.it, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", vm_r1.commissionsPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Richiedi una commissione" : "Request a commission", " ");
  }
}
function HomePage_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-newsletter", 14);
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("siteConfig", vm_r1.siteConfig)("language", vm_r1.language);
  }
}
function HomePage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hero", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div")(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "section", 6)(11, "div", 7)(12, "figure", 8);
    \u0275\u0275element(13, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "p", 3);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h2", 4);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(21, "app-artwork-grid", 12)(22, "app-artwork-grid", 12);
    \u0275\u0275conditionalCreate(23, HomePage_Conditional_0_Conditional_23_Template, 13, 7, "section", 13);
    \u0275\u0275conditionalCreate(24, HomePage_Conditional_0_Conditional_24_Template, 1, 2, "app-newsletter", 14);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275property("image", vm_r1.heroArtwork.images.main.sources.large)("title", vm_r1.heroArtwork.title[vm_r1.language] || vm_r1.heroArtwork.title.it)("subtitle", vm_r1.siteConfig.claim[vm_r1.language] || vm_r1.siteConfig.claim.it)("ctaPrimary", \u0275\u0275pureFunction2(23, _c0, vm_r1.language === "it" ? "Vedi opere" : "View works", vm_r1.artworksPath))("ctaSecondary", \u0275\u0275pureFunction2(26, _c0, vm_r1.language === "it" ? "Contatti" : "Contact", vm_r1.contactsPath));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Selezione" : "Selection");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Una soglia visiva verso il lavoro dell\u2019artista" : "A visual threshold into the artist\u2019s work", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "La home deve orientare con chiarezza, ma lasciare alle opere il ruolo principale. Per questo il racconto resta misurato e le immagini lavorano come presenze, non come riempitivi." : "The homepage should orient clearly while leaving the leading role to the artworks. For this reason the narrative remains measured and images act as presences, not fillers.", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", vm_r1.pagesConfig.home.manifestoImage, \u0275\u0275sanitizeUrl)("alt", vm_r1.language === "it" ? "Immagine manifesto home" : "Homepage manifesto image");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Manifesto" : "Manifesto");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.content.manifestoTitle[vm_r1.language] || vm_r1.content.manifestoTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.content.manifestoBody[vm_r1.language] || vm_r1.content.manifestoBody.it, " ");
    \u0275\u0275advance();
    \u0275\u0275property("artworks", vm_r1.featuredArtworks)("language", vm_r1.language)("title", vm_r1.content.featuredTitle[vm_r1.language] || vm_r1.content.featuredTitle.it)("subtitle", vm_r1.content.featuredSubtitle[vm_r1.language] || vm_r1.content.featuredSubtitle.it);
    \u0275\u0275advance();
    \u0275\u0275property("artworks", vm_r1.featuredDrawings)("language", vm_r1.language)("title", vm_r1.content.drawingsTitle[vm_r1.language] || vm_r1.content.drawingsTitle.it)("subtitle", vm_r1.content.drawingsSubtitle[vm_r1.language] || vm_r1.content.drawingsSubtitle.it);
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r1.pagesConfig.home.showCommissions ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r1.pagesConfig.home.showNewsletter && vm_r1.siteConfig.mailchimp.enabled ? 24 : -1);
  }
}
var HomePage = class _HomePage {
  artworkService = inject(ArtworkService);
  siteService = inject(SiteService);
  languageService = inject(LanguageService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.siteService.getPagesConfig(),
    this.artworkService.getArtworks()
  ]).pipe(map(([siteConfig, pagesConfig, artworks]) => {
    const language = this.languageService.getRouteLanguage(this.route.snapshot);
    const heroArtwork = artworks.find((artwork) => artwork.id === pagesConfig.home.heroArtworkId) ?? artworks[0];
    const featuredArtworks = artworks.filter((artwork) => pagesConfig.home.featuredArtworkIds.includes(artwork.id));
    const featuredDrawings = artworks.filter((artwork) => pagesConfig.home.featuredDrawingIds.includes(artwork.id));
    return {
      siteConfig,
      pagesConfig,
      language,
      heroArtwork,
      featuredArtworks,
      featuredDrawings,
      content: HOME_CONTENT,
      artworksPath: this.languageService.buildLocalizedPath(language, "artworks"),
      contactsPath: this.languageService.buildLocalizedPath(language, "contacts"),
      commissionsPath: this.languageService.buildLocalizedPath(language, "commissions")
    };
  }), tap(({ siteConfig, language, heroArtwork }) => {
    this.seoService.applyLocalizedAlternates(siteConfig.domain, this.route.snapshot, void 0, siteConfig.defaultLanguage);
    this.seoService.applyPageMetadata({
      title: siteConfig.seo.defaultTitle[language] || siteConfig.seo.defaultTitle.it,
      description: siteConfig.seo.defaultDescription[language] || siteConfig.seo.defaultDescription.it,
      url: `${siteConfig.domain}${this.languageService.buildLocalizedPath(language, "home")}`.replace(/\/$/, ""),
      image: heroArtwork ? `${siteConfig.domain}${heroArtwork.images.main.sources.large || heroArtwork.images.main.sources.small}` : `${siteConfig.domain}${siteConfig.seo.defaultOgImage}`,
      siteName: siteConfig.artistName,
      language
    });
  }));
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home-page"]], decls: 2, vars: 3, consts: [["height", "fullscreen", 3, "image", "title", "subtitle", "ctaPrimary", "ctaSecondary"], [1, "home-intro", "mx-auto", "max-w-7xl", "px-5", "py-10", "sm:px-8", "lg:px-12"], [1, "home-intro__panel", "rounded-[2rem]", "px-6", "py-7", "sm:px-10", "sm:py-8", "lg:grid", "lg:grid-cols-[0.9fr_1.1fr]", "lg:gap-12", "lg:items-end"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-3xl", "leading-tight", "text-[var(--site-text)]", "sm:text-4xl"], [1, "mt-5", "text-sm", "leading-8", "text-[var(--site-text)]/78", "sm:text-base", "lg:mt-0"], [1, "home-manifesto", "mx-auto", "max-w-7xl", "px-5", "py-14", "sm:px-8", "lg:px-12"], [1, "home-manifesto__panel", "rounded-[2rem]", "overflow-hidden", "px-6", "py-10", "sm:px-10", "lg:grid", "lg:grid-cols-[0.92fr_1.08fr]", "lg:gap-10", "lg:items-center"], [1, "home-manifesto__visual", "order-2", "mt-8", "overflow-hidden", "rounded-[1.5rem]", "lg:order-1", "lg:mt-0"], [1, "aspect-[4/5]", "w-full", "object-cover", "lg:aspect-[4/4.4]", 3, "src", "alt"], [1, "order-1", "lg:order-2"], [1, "mt-6", "text-sm", "leading-8", "text-[var(--site-text)]/82", "lg:mt-0"], [3, "artworks", "language", "title", "subtitle"], [1, "home-commissions", "mx-auto", "max-w-7xl", "px-5", "py-14", "sm:px-8", "lg:px-12"], [3, "siteConfig", "language"], [1, "home-commissions__panel", "rounded-[2rem]", "overflow-hidden", "lg:grid", "lg:grid-cols-[0.94fr_1.06fr]", "lg:items-stretch"], [1, "home-commissions__visual", "min-h-[18rem]"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "home-commissions__copy", "px-6", "py-8", "text-white", "sm:px-10", "sm:py-10", "lg:flex", "lg:flex-col", "lg:justify-end"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-white/55"], [1, "mt-4", "max-w-2xl", "text-3xl", "leading-tight", "sm:text-4xl"], [1, "mt-4", "max-w-2xl", "text-sm", "leading-8", "text-white/75"], [1, "home-commissions__cta", "mt-8", "inline-flex", "w-fit", "rounded-full", "border", "border-white/20", "px-5", "py-3", "text-xs", "uppercase", "tracking-[0.22em]", "text-white", "no-underline", 3, "routerLink"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, HomePage_Conditional_0_Template, 25, 29);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, ArtworkGridComponent, HeroComponent, NewsletterComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.home-intro__panel[_ngcontent-%COMP%] {\n  border: 1px solid rgba(194, 168, 142, 0.22);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 246, 0.98),\n      rgb(252, 246, 239));\n  box-shadow: 0 18px 56px rgba(108, 78, 55, 0.05);\n}\n.home-manifesto__panel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(232, 220, 203, 0.9),\n      rgba(255, 250, 244, 0.99));\n  box-shadow: var(--site-shadow-soft);\n}\n.home-manifesto__visual[_ngcontent-%COMP%] {\n  box-shadow: var(--site-shadow-strong);\n}\n.home-commissions__panel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f1a15,\n      #30261d);\n  box-shadow: var(--site-shadow-strong);\n}\n.home-commissions__visual[_ngcontent-%COMP%] {\n  position: relative;\n}\n.home-commissions__copy[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(24, 19, 15, 0.92),\n      rgba(47, 37, 28, 0.98));\n}\n.home-commissions__cta[_ngcontent-%COMP%] {\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    background-color 0.25s ease;\n}\n.home-commissions__cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.45);\n  background: rgba(255, 255, 255, 0.06);\n}\n/*# sourceMappingURL=home.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home-page", standalone: true, imports: [AsyncPipe, RouterLink, ArtworkGridComponent, HeroComponent, NewsletterComponent], template: `@if (vm$ | async; as vm) {
  <app-hero
    [image]="vm.heroArtwork.images.main.sources.large"
    [title]="vm.heroArtwork.title[vm.language] || vm.heroArtwork.title.it"
    [subtitle]="vm.siteConfig.claim[vm.language] || vm.siteConfig.claim.it"
    [ctaPrimary]="{ label: vm.language === 'it' ? 'Vedi opere' : 'View works', url: vm.artworksPath }"
    [ctaSecondary]="{ label: vm.language === 'it' ? 'Contatti' : 'Contact', url: vm.contactsPath }"
    height="fullscreen" />

  <section class="home-intro mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
    <div class="home-intro__panel rounded-[2rem] px-6 py-7 sm:px-10 sm:py-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:items-end">
      <div>
        <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ vm.language === 'it' ? 'Selezione' : 'Selection' }}</p>
        <h2 class="mt-4 text-3xl leading-tight text-[var(--site-text)] sm:text-4xl">
          {{ vm.language === 'it' ? 'Una soglia visiva verso il lavoro dell\u2019artista' : 'A visual threshold into the artist\u2019s work' }}
        </h2>
      </div>

      <p class="mt-5 text-sm leading-8 text-[var(--site-text)]/78 sm:text-base lg:mt-0">
        {{
          vm.language === 'it'
            ? 'La home deve orientare con chiarezza, ma lasciare alle opere il ruolo principale. Per questo il racconto resta misurato e le immagini lavorano come presenze, non come riempitivi.'
            : 'The homepage should orient clearly while leaving the leading role to the artworks. For this reason the narrative remains measured and images act as presences, not fillers.'
        }}
      </p>
    </div>
  </section>

  <section class="home-manifesto mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
    <div class="home-manifesto__panel rounded-[2rem] overflow-hidden px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:items-center">
      <figure class="home-manifesto__visual order-2 mt-8 overflow-hidden rounded-[1.5rem] lg:order-1 lg:mt-0">
        <img
          class="aspect-[4/5] w-full object-cover lg:aspect-[4/4.4]"
          [src]="vm.pagesConfig.home.manifestoImage"
          [alt]="vm.language === 'it' ? 'Immagine manifesto home' : 'Homepage manifesto image'" />
      </figure>

      <div class="order-1 lg:order-2">
        <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ vm.language === 'it' ? 'Manifesto' : 'Manifesto' }}</p>
        <h2 class="mt-4 text-3xl leading-tight text-[var(--site-text)] sm:text-4xl">
          {{ vm.content.manifestoTitle[vm.language] || vm.content.manifestoTitle.it }}
        </h2>

        <p class="mt-6 text-sm leading-8 text-[var(--site-text)]/82 lg:mt-0">
          {{ vm.content.manifestoBody[vm.language] || vm.content.manifestoBody.it }}
        </p>
      </div>
    </div>
  </section>

  <app-artwork-grid
    [artworks]="vm.featuredArtworks"
    [language]="vm.language"
    [title]="vm.content.featuredTitle[vm.language] || vm.content.featuredTitle.it"
    [subtitle]="vm.content.featuredSubtitle[vm.language] || vm.content.featuredSubtitle.it" />

  <app-artwork-grid
    [artworks]="vm.featuredDrawings"
    [language]="vm.language"
    [title]="vm.content.drawingsTitle[vm.language] || vm.content.drawingsTitle.it"
    [subtitle]="vm.content.drawingsSubtitle[vm.language] || vm.content.drawingsSubtitle.it" />

  @if (vm.pagesConfig.home.showCommissions) {
    <section class="home-commissions mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
      <div class="home-commissions__panel rounded-[2rem] overflow-hidden lg:grid lg:grid-cols-[0.94fr_1.06fr] lg:items-stretch">
        <figure class="home-commissions__visual min-h-[18rem]">
          <img
            class="h-full w-full object-cover"
            [src]="vm.pagesConfig.home.commissionsImage"
            [alt]="vm.language === 'it' ? 'Immagine commissioni home' : 'Homepage commissions image'" />
        </figure>

        <div class="home-commissions__copy px-6 py-8 text-white sm:px-10 sm:py-10 lg:flex lg:flex-col lg:justify-end">
          <p class="text-xs uppercase tracking-[0.28em] text-white/55">{{ vm.language === 'it' ? 'Commissioni' : 'Commissions' }}</p>
          <h2 class="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            {{ vm.content.commissionsTitle[vm.language] || vm.content.commissionsTitle.it }}
          </h2>
          <p class="mt-4 max-w-2xl text-sm leading-8 text-white/75">
            {{ vm.content.commissionsBody[vm.language] || vm.content.commissionsBody.it }}
          </p>

          <a
            [routerLink]="vm.commissionsPath"
            class="home-commissions__cta mt-8 inline-flex w-fit rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.22em] text-white no-underline">
            {{ vm.language === 'it' ? 'Richiedi una commissione' : 'Request a commission' }}
          </a>
        </div>
      </div>
    </section>
  }

  @if (vm.pagesConfig.home.showNewsletter && vm.siteConfig.mailchimp.enabled) {
    <app-newsletter [siteConfig]="vm.siteConfig" [language]="vm.language" />
  }
}
`, styles: ["/* sito-artista/src/app/pages/home/home.page.sass */\n:host {\n  display: block;\n}\n.home-intro__panel {\n  border: 1px solid rgba(194, 168, 142, 0.22);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 246, 0.98),\n      rgb(252, 246, 239));\n  box-shadow: 0 18px 56px rgba(108, 78, 55, 0.05);\n}\n.home-manifesto__panel {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(232, 220, 203, 0.9),\n      rgba(255, 250, 244, 0.99));\n  box-shadow: var(--site-shadow-soft);\n}\n.home-manifesto__visual {\n  box-shadow: var(--site-shadow-strong);\n}\n.home-commissions__panel {\n  background:\n    linear-gradient(\n      135deg,\n      #1f1a15,\n      #30261d);\n  box-shadow: var(--site-shadow-strong);\n}\n.home-commissions__visual {\n  position: relative;\n}\n.home-commissions__copy {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(24, 19, 15, 0.92),\n      rgba(47, 37, 28, 0.98));\n}\n.home-commissions__cta {\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    background-color 0.25s ease;\n}\n.home-commissions__cta:hover {\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.45);\n  background: rgba(255, 255, 255, 0.06);\n}\n/*# sourceMappingURL=home.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "sito-artista/src/app/pages/home/home.page.ts", lineNumber: 21 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-6EL7ALJZ.js.map
