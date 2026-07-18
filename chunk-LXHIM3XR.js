import {
  AuctionPublicService
} from "./chunk-7CDU4BI7.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  LanguageService,
  RouterLink,
  SeoService,
  SiteService
} from "./chunk-5ZWV2562.js";
import {
  Component,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/pages/auctions/auctions.page.ts
var _forTrack0 = ($index, $item) => $item.id;
function AuctionsPage_Conditional_0_Conditional_14_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "In evidenza" : "Featured", " ");
  }
}
function AuctionsPage_Conditional_0_Conditional_14_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auction_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(auction_r2.artwork.year);
  }
}
function AuctionsPage_Conditional_0_Conditional_14_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auction_r2 = \u0275\u0275nextContext().$implicit;
    const vm_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", auction_r2.artwork.technique[vm_r1.language] || auction_r2.artwork.technique.it);
  }
}
function AuctionsPage_Conditional_0_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 13)(1, "a", 14)(2, "div", 15)(3, "div", 16);
    \u0275\u0275element(4, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19)(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, AuctionsPage_Conditional_0_Conditional_14_For_2_Conditional_9_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 23);
    \u0275\u0275conditionalCreate(13, AuctionsPage_Conditional_0_Conditional_14_For_2_Conditional_13_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(14, AuctionsPage_Conditional_0_Conditional_14_For_2_Conditional_14_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dl", 24)(16, "div")(17, "dt", 25);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd", 26);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt", 25);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd", 26);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "dt", 25);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd", 26);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "dt", 25);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd", 26);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "p", 27);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const auction_r2 = ctx.$implicit;
    const vm_r1 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r2.getAuctionPath(vm_r1.language, auction_r2.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", auction_r2.artwork.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", auction_r2.artwork.images.main.alt[vm_r1.language] || auction_r2.artwork.images.main.alt.it);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(vm_r1.language, auction_r2.publicStatus), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(auction_r2.isFeatured ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", auction_r2.artwork.title[vm_r1.language] || auction_r2.artwork.title.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(auction_r2.artwork.year ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(auction_r2.artwork.technique[vm_r1.language] || auction_r2.artwork.technique.it ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Apertura" : "Opening", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(21, 17, auction_r2.openingAt, "d MMMM y, HH:mm", void 0, vm_r1.language));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Chiusura" : "Closing", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(27, 22, auction_r2.closingAt, "d MMMM y, HH:mm", void 0, vm_r1.language));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Base d asta" : "Starting bid", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(33, 27, auction_r2.startingBidAmount, auction_r2.currency, "symbol", "1.0-0"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Rialzo minimo" : "Minimum increment", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(39, 32, auction_r2.minimumIncrementAmount, auction_r2.currency, "symbol", "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Apri la scheda asta" : "Open auction page", " ");
  }
}
function AuctionsPage_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, AuctionsPage_Conditional_0_Conditional_14_For_2_Template, 42, 37, "article", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(vm_r1.auctions);
  }
}
function AuctionsPage_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Nessuna asta pubblica al momento" : "No public auctions right now", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Quando una nuova asta verra resa pubblica, apparira qui insieme al collegamento diretto alla relativa opera." : "When a new auction is made public, it will appear here together with the direct link to the related artwork.", " ");
  }
}
function AuctionsPage_Conditional_0_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "section", 10);
    \u0275\u0275conditionalCreate(14, AuctionsPage_Conditional_0_Conditional_14_Template, 3, 0, "div", 11)(15, AuctionsPage_Conditional_0_Conditional_15_Template, 5, 2, "section", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", vm_r1.heroImage, \u0275\u0275sanitizeUrl)("alt", "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Opere in asta" : "Works at auction", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Aste pubbliche" : "Public auctions", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Qui alcune mie opere attendono la casa, lo sguardo e la storia che verranno dopo di me." : "Here, some of my works await the home, the gaze and the story that will come after me.", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(vm_r1.auctions.length > 0 ? 14 : 15);
  }
}
var AuctionsPage = class _AuctionsPage {
  auctionService = inject(AuctionPublicService);
  languageService = inject(LanguageService);
  siteService = inject(SiteService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.siteService.getPagesConfig(),
    this.auctionService.getAuctions()
  ]).pipe(map(([siteConfig, pagesConfig, auctions]) => {
    const language = this.languageService.getRouteLanguage(this.route.snapshot);
    const heroImage = pagesConfig.auctions?.heroImage || auctions[0]?.artwork.images.main.sources.large || siteConfig.seo.defaultOgImage;
    return {
      siteConfig,
      auctions,
      language,
      heroImage
    };
  }), tap(({ siteConfig, language, heroImage }) => {
    this.seoService.applyLocalizedAlternates(siteConfig.domain, this.route.snapshot, void 0, siteConfig.defaultLanguage);
    this.seoService.applyPageMetadata({
      title: language === "it" ? `Aste | ${siteConfig.artistName}` : `Auctions | ${siteConfig.artistName}`,
      description: language === "it" ? `Aste pubbliche e opere in dialogo con il collezionismo sul sito di ${siteConfig.artistName}.` : `Public auctions and works in dialogue with collectors on ${siteConfig.artistName}'s website.`,
      url: `${siteConfig.domain}${this.languageService.buildLocalizedPath(language, "auctions")}`,
      image: `${siteConfig.domain}${heroImage}`,
      siteName: siteConfig.artistName,
      language
    });
  }));
  getAuctionPath(language, slug) {
    return language === "it" ? ["/it/aste", slug] : ["/en/auctions", slug];
  }
  getStatusLabel(language, status) {
    if (status === "live") {
      return language === "it" ? "Asta in corso" : "Auction live";
    }
    if (status === "upcoming") {
      return language === "it" ? "Asta in apertura" : "Auction opening soon";
    }
    return language === "it" ? "Asta conclusa" : "Auction closed";
  }
  static \u0275fac = function AuctionsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuctionsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuctionsPage, selectors: [["app-auctions-page"]], decls: 2, vars: 3, consts: [[1, "auctions-page__hero", "relative", "overflow-hidden", "px-5", "pb-4", "pt-12", "sm:px-8", "lg:px-12"], ["aria-hidden", "true", 1, "auctions-page__hero-background"], [1, "auctions-page__hero-image", 3, "src", "alt"], [1, "auctions-page__hero-wash"], [1, "auctions-page__hero-fade"], [1, "mx-auto", "max-w-7xl"], [1, "auctions-page__hero-copy", "relative", "z-[1]", "max-w-3xl", "py-10", "sm:py-14"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-4xl", "leading-none", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-5", "max-w-2xl", "text-sm", "leading-8", "text-[var(--site-muted)]", "sm:text-base"], [1, "mx-auto", "max-w-7xl", "px-5", "pb-20", "pt-6", "sm:px-8", "lg:px-12"], [1, "grid", "gap-8"], [1, "rounded-[1.8rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]", "px-6", "py-10", "text-center"], [1, "auctions-page__card", "overflow-hidden", "rounded-[1.9rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]"], [1, "block", "no-underline", 3, "routerLink"], [1, "grid", "gap-0", "lg:grid-cols-[minmax(20rem,0.88fr)_minmax(0,1.12fr)]"], [1, "auctions-page__media"], [1, "auctions-page__artwork-image", 3, "src", "alt"], [1, "p-6", "sm:p-7"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "auctions-page__pill", "inline-flex", "rounded-full", "px-3", "py-1", "text-[11px]", "uppercase", "tracking-[0.22em]"], [1, "inline-flex", "rounded-full", "border", "border-[var(--site-border)]", "px-3", "py-1", "text-[11px]", "uppercase", "tracking-[0.22em]", "text-[var(--site-muted)]"], [1, "mt-5", "text-3xl", "leading-tight", "text-[var(--site-text)]"], [1, "mt-3", "text-sm", "uppercase", "tracking-[0.18em]", "text-[var(--site-muted)]"], [1, "mt-6", "grid", "gap-4", "text-sm", "text-[var(--site-text)]", "sm:grid-cols-2"], [1, "uppercase", "tracking-[0.18em]", "text-[var(--site-muted)]"], [1, "mt-2"], [1, "mt-6", "text-xs", "uppercase", "tracking-[0.22em]", "text-[var(--site-accent)]"], [1, "text-3xl", "text-[var(--site-text)]"], [1, "mx-auto", "mt-4", "max-w-2xl", "text-sm", "leading-8", "text-[var(--site-muted)]"]], template: function AuctionsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AuctionsPage_Conditional_0_Template, 16, 6);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, AsyncPipe, CurrencyPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auctions-page__hero[_ngcontent-%COMP%] {\n  position: relative;\n}\n.auctions-page__hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n.auctions-page__hero-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: saturate(0.9);\n  transform: scale(1.02);\n}\n.auctions-page__hero-wash[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(247, 238, 227, 0.9),\n      rgba(247, 238, 227, 0.58));\n}\n.auctions-page__hero-fade[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0;\n  height: 9rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(247, 238, 227, 0),\n      rgb(250, 246, 241));\n}\n.auctions-page__card[_ngcontent-%COMP%] {\n  box-shadow: var(--site-shadow-soft);\n  transition: transform 280ms ease, box-shadow 280ms ease;\n}\n.auctions-page__card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 24px 60px rgba(69, 48, 34, 0.14);\n}\n.auctions-page__media[_ngcontent-%COMP%] {\n  min-height: 25rem;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      #efe3d3,\n      #e5d4be);\n}\n.auctions-page__artwork-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: 38rem;\n  object-fit: contain;\n  border-radius: 1.15rem;\n}\n@media (min-width: 1024px) {\n  .auctions-page__media[_ngcontent-%COMP%] {\n    min-height: 32rem;\n  }\n}\n.auctions-page__pill[_ngcontent-%COMP%] {\n  border: 1px solid rgba(159, 116, 82, 0.2);\n  background: rgba(245, 238, 228, 0.94);\n  color: var(--site-accent);\n}\n/*# sourceMappingURL=auctions.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuctionsPage, [{
    type: Component,
    args: [{ selector: "app-auctions-page", standalone: true, imports: [AsyncPipe, RouterLink, CurrencyPipe, DatePipe], template: `@if (vm$ | async; as vm) {
  <section class="auctions-page__hero relative overflow-hidden px-5 pb-4 pt-12 sm:px-8 lg:px-12">
    <div class="auctions-page__hero-background" aria-hidden="true">
      <img
        class="auctions-page__hero-image"
        [src]="vm.heroImage"
        [alt]="''" />
      <div class="auctions-page__hero-wash"></div>
      <div class="auctions-page__hero-fade"></div>
    </div>

    <div class="mx-auto max-w-7xl">
      <div class="auctions-page__hero-copy relative z-[1] max-w-3xl py-10 sm:py-14">
        <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">
          {{ vm.language === 'it' ? 'Opere in asta' : 'Works at auction' }}
        </p>
        <h1 class="mt-4 text-4xl leading-none text-[var(--site-text)] sm:text-5xl">
          {{ vm.language === 'it' ? 'Aste pubbliche' : 'Public auctions' }}
        </h1>
        <p class="mt-5 max-w-2xl text-sm leading-8 text-[var(--site-muted)] sm:text-base">
          {{
            vm.language === 'it'
              ? 'Qui alcune mie opere attendono la casa, lo sguardo e la storia che verranno dopo di me.'
              : 'Here, some of my works await the home, the gaze and the story that will come after me.'
          }}
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 lg:px-12">
    @if (vm.auctions.length > 0) {
      <div class="grid gap-8">
        @for (auction of vm.auctions; track auction.id) {
          <article class="auctions-page__card overflow-hidden rounded-[1.9rem] border border-[var(--site-border)] bg-[var(--site-surface)]">
            <a [routerLink]="getAuctionPath(vm.language, auction.slug)" class="block no-underline">
              <div class="grid gap-0 lg:grid-cols-[minmax(20rem,0.88fr)_minmax(0,1.12fr)]">
                <div class="auctions-page__media">
                  <img
                    class="auctions-page__artwork-image"
                    [src]="auction.artwork.images.main.sources.large"
                    [alt]="auction.artwork.images.main.alt[vm.language] || auction.artwork.images.main.alt.it" />
                </div>

                <div class="p-6 sm:p-7">
                  <div class="flex flex-wrap items-center gap-3">
                    <span class="auctions-page__pill inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]">
                      {{ getStatusLabel(vm.language, auction.publicStatus) }}
                    </span>

                    @if (auction.isFeatured) {
                      <span class="inline-flex rounded-full border border-[var(--site-border)] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[var(--site-muted)]">
                        {{ vm.language === 'it' ? 'In evidenza' : 'Featured' }}
                      </span>
                    }
                  </div>

                  <h2 class="mt-5 text-3xl leading-tight text-[var(--site-text)]">
                    {{ auction.artwork.title[vm.language] || auction.artwork.title.it }}
                  </h2>

                  <p class="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--site-muted)]">
                    @if (auction.artwork.year) {
                      <span>{{ auction.artwork.year }}</span>
                    }
                    @if (auction.artwork.technique[vm.language] || auction.artwork.technique.it) {
                      <span> \xB7 {{ auction.artwork.technique[vm.language] || auction.artwork.technique.it }}</span>
                    }
                  </p>

                  <dl class="mt-6 grid gap-4 text-sm text-[var(--site-text)] sm:grid-cols-2">
                    <div>
                      <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
                        {{ vm.language === 'it' ? 'Apertura' : 'Opening' }}
                      </dt>
                      <dd class="mt-2">{{ auction.openingAt | date : 'd MMMM y, HH:mm' : undefined : vm.language }}</dd>
                    </div>

                    <div>
                      <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
                        {{ vm.language === 'it' ? 'Chiusura' : 'Closing' }}
                      </dt>
                      <dd class="mt-2">{{ auction.closingAt | date : 'd MMMM y, HH:mm' : undefined : vm.language }}</dd>
                    </div>

                    <div>
                      <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
                        {{ vm.language === 'it' ? 'Base d asta' : 'Starting bid' }}
                      </dt>
                      <dd class="mt-2">
                        {{ auction.startingBidAmount | currency : auction.currency : 'symbol' : '1.0-0' }}
                      </dd>
                    </div>

                    <div>
                      <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
                        {{ vm.language === 'it' ? 'Rialzo minimo' : 'Minimum increment' }}
                      </dt>
                      <dd class="mt-2">
                        {{ auction.minimumIncrementAmount | currency : auction.currency : 'symbol' : '1.0-0' }}
                      </dd>
                    </div>
                  </dl>

                  <p class="mt-6 text-xs uppercase tracking-[0.22em] text-[var(--site-accent)]">
                    {{ vm.language === 'it' ? 'Apri la scheda asta' : 'Open auction page' }}
                  </p>
                </div>
              </div>
            </a>
          </article>
        }
      </div>
    } @else {
      <section class="rounded-[1.8rem] border border-[var(--site-border)] bg-[var(--site-surface)] px-6 py-10 text-center">
        <h2 class="text-3xl text-[var(--site-text)]">
          {{ vm.language === 'it' ? 'Nessuna asta pubblica al momento' : 'No public auctions right now' }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[var(--site-muted)]">
          {{
            vm.language === 'it'
              ? 'Quando una nuova asta verra resa pubblica, apparira qui insieme al collegamento diretto alla relativa opera.'
              : 'When a new auction is made public, it will appear here together with the direct link to the related artwork.'
          }}
        </p>
      </section>
    }
  </section>
}
`, styles: ["/* sito-artista/src/app/pages/auctions/auctions.page.sass */\n:host {\n  display: block;\n}\n.auctions-page__hero {\n  position: relative;\n}\n.auctions-page__hero-background {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n.auctions-page__hero-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: saturate(0.9);\n  transform: scale(1.02);\n}\n.auctions-page__hero-wash {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(247, 238, 227, 0.9),\n      rgba(247, 238, 227, 0.58));\n}\n.auctions-page__hero-fade {\n  position: absolute;\n  inset: auto 0 0;\n  height: 9rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(247, 238, 227, 0),\n      rgb(250, 246, 241));\n}\n.auctions-page__card {\n  box-shadow: var(--site-shadow-soft);\n  transition: transform 280ms ease, box-shadow 280ms ease;\n}\n.auctions-page__card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 24px 60px rgba(69, 48, 34, 0.14);\n}\n.auctions-page__media {\n  min-height: 25rem;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      #efe3d3,\n      #e5d4be);\n}\n.auctions-page__artwork-image {\n  width: 100%;\n  height: 100%;\n  max-height: 38rem;\n  object-fit: contain;\n  border-radius: 1.15rem;\n}\n@media (min-width: 1024px) {\n  .auctions-page__media {\n    min-height: 32rem;\n  }\n}\n.auctions-page__pill {\n  border: 1px solid rgba(159, 116, 82, 0.2);\n  background: rgba(245, 238, 228, 0.94);\n  color: var(--site-accent);\n}\n/*# sourceMappingURL=auctions.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuctionsPage, { className: "AuctionsPage", filePath: "sito-artista/src/app/pages/auctions/auctions.page.ts", lineNumber: 17 });
})();
export {
  AuctionsPage
};
//# sourceMappingURL=chunk-LXHIM3XR.js.map
