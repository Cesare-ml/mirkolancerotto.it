import {
  RevealOnScrollDirective
} from "./chunk-CVTQ3CL2.js";
import {
  ArtworkService
} from "./chunk-VLPNPYTG.js";
import {
  AuctionPublicService
} from "./chunk-7CDU4BI7.js";
import {
  NewsletterComponent
} from "./chunk-DBQUGMHR.js";
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
  ViewChild,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-O37V3GPT.js";

// sito-artista/src/content/home.content.ts
var HOME_CONTENT = {
  heroTitle: {
    it: "La pittura \xE8 una presenza viva.",
    en: "Painting is a living presence."
  },
  heroSubtitle: {
    it: "Opere nate per continuare a parlare nello spazio, nel tempo e dentro chi le incontra.",
    en: "Artworks made to keep speaking through space, time and within those who encounter them."
  },
  statementTitle: {
    it: "Cerco immagini che non si esauriscano nello sguardo.",
    en: "I seek images that do not end with the gaze."
  },
  statementBody: {
    it: "Dipingo per dare un corpo a ci\xF2 che non riesce a restare soltanto pensiero. Ogni opera nasce dall\u2019ascolto e continua a vivere nel tempo, nello spazio e dentro chi sceglie di incontrarla.",
    en: "I paint to give a body to what cannot remain only a thought. Each artwork begins in listening and continues to live through time, space and within those who choose to encounter it."
  },
  featuredTitle: {
    it: "Opere scelte",
    en: "Selected works"
  },
  featuredSubtitle: {
    it: "Tre ingressi possibili nella mia ricerca pittorica.",
    en: "Three possible entrances into my pictorial research."
  },
  drawingsTitle: {
    it: "Prima delle parole",
    en: "Before words"
  },
  drawingsSubtitle: {
    it: "Nel disegno il gesto conserva ancora la vicinanza dell\u2019intuizione.",
    en: "In drawing, gesture still retains the closeness of intuition."
  },
  artistTitle: {
    it: "La creativit\xE0 come necessit\xE0 vitale",
    en: "Creativity as a vital necessity"
  },
  artistBody: {
    it: "Non ho mai vissuto la pittura e la musica come discipline separate. Per me sono linguaggi diversi attraverso cui qualcosa di invisibile prende forma nel mondo. In entrambe continuo a cercare la stessa cosa: la sorgente della creativit\xE0.",
    en: "I have never experienced painting and music as separate disciplines. To me they are different languages through which something invisible takes form in the world. In both I continue searching for the same thing: the source of creativity."
  },
  commissionsTitle: {
    it: "Creare un\u2019opera insieme",
    en: "Creating an artwork together"
  },
  commissionsBody: {
    it: "Mi emoziona incontrare chi crede ancora che un\u2019opera possa abitare una casa come una presenza viva: non un oggetto silenzioso, ma qualcosa capace di parlarci dentro ogni giorno.",
    en: "I love meeting those who still believe an artwork can inhabit a home as a living presence: not a silent object, but something able to speak within us every day."
  }
};

// sito-artista/src/app/pages/home/home.page.ts
var _c0 = ["homeHero"];
var _forTrack0 = ($index, $item) => $item.id;
function HomePage_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1, 0)(2, "div", 20);
    \u0275\u0275element(3, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 22);
    \u0275\u0275elementStart(5, "div", 23)(6, "div", 24)(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 28)(14, "a", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 30);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "a", 31)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 32)(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "i");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const heroArtwork_r1 = ctx;
    const vm_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", heroArtwork_r1.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", vm_r2.siteConfig.artistName, " \xB7 ", vm_r2.language === "it" ? "Artista" : "Artist", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r2.content.heroTitle[vm_r2.language] || vm_r2.content.heroTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r2.siteConfig.claim[vm_r2.language] || vm_r2.siteConfig.claim.it || vm_r2.content.heroSubtitle[vm_r2.language] || vm_r2.content.heroSubtitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", vm_r2.artworksPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r2.language === "it" ? "Entra nelle opere" : "Enter the artworks", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", vm_r2.aboutPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r2.language === "it" ? "La mia ricerca" : "My research", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r2.getArtworkPath(vm_r2.language, heroArtwork_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(heroArtwork_r1.title[vm_r2.language] || heroArtwork_r1.title.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(heroArtwork_r1.year);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r2.language === "it" ? "Scorri" : "Scroll");
  }
}
function HomePage_Conditional_0_Conditional_14_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 37)(1, "a", 38)(2, "figure", 39);
    \u0275\u0275element(3, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "div")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const artwork_r4 = ctx.$implicit;
    const \u0275$index_88_r5 = ctx.$index;
    const vm_r2 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("home-selected__item--lead", \u0275$index_88_r5 === 0);
    \u0275\u0275property("revealDelay", \u0275$index_88_r5 * 110);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r2.getArtworkPath(vm_r2.language, artwork_r4.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", artwork_r4.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", artwork_r4.images.main.alt[vm_r2.language] || artwork_r4.images.main.alt.it);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", (\u0275$index_88_r5 + 1).toString().padStart(2, "0"), " \xB7 ", vm_r2.language === "it" ? "Opera scelta" : "Selected work");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(artwork_r4.title[vm_r2.language] || artwork_r4.title.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", artwork_r4.year, " \xB7 ", artwork_r4.technique[vm_r2.language] || artwork_r4.technique.it);
  }
}
function HomePage_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "header", 33)(2, "div")(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275repeaterCreate(10, HomePage_Conditional_0_Conditional_14_For_11_Template, 12, 11, "article", 35, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 36)(13, "a", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r2.language === "it" ? "Pittura" : "Painting");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.content.featuredTitle[vm_r2.language] || vm_r2.content.featuredTitle.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.content.featuredSubtitle[vm_r2.language] || vm_r2.content.featuredSubtitle.it);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(vm_r2.featuredArtworks);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", vm_r2.artworksPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r2.language === "it" ? "Tutte le opere" : "All artworks", " ");
  }
}
function HomePage_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "div", 41)(2, "figure", 42);
    \u0275\u0275element(3, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 44);
    \u0275\u0275element(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dl")(13, "div")(14, "dt");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "dt");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "a", 29);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const auction_r6 = ctx;
    const vm_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", auction_r6.artwork.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", auction_r6.artwork.images.main.alt[vm_r2.language] || auction_r6.artwork.images.main.alt.it);
    \u0275\u0275advance();
    \u0275\u0275property("revealDelay", 130);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getAuctionStatusLabel(vm_r2.language, auction_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(auction_r6.artwork.title[vm_r2.language] || auction_r6.artwork.title.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", auction_r6.artwork.year, " \xB7 ", auction_r6.artwork.technique[vm_r2.language] || auction_r6.artwork.technique.it, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r2.language === "it" ? "Chiusura" : "Closing");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(18, 13, auction_r6.closingAt, "d MMMM y, HH:mm", void 0, vm_r2.language));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r2.language === "it" ? "Base d\u2019asta" : "Starting bid");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(24, 18, auction_r6.startingBidAmount, auction_r6.currency, "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r2.getAuctionPath(vm_r2.language, auction_r6.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r2.language === "it" ? "Partecipa all\u2019asta" : "Join the auction", " ");
  }
}
function HomePage_Conditional_0_Conditional_16_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 48)(1, "a", 38)(2, "figure");
    \u0275\u0275element(3, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const drawing_r7 = ctx.$implicit;
    const \u0275$index_180_r8 = ctx.$index;
    const vm_r2 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("revealDelay", \u0275$index_180_r8 * 90);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r2.getArtworkPath(vm_r2.language, drawing_r7.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", drawing_r7.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", drawing_r7.images.main.alt[vm_r2.language] || drawing_r7.images.main.alt.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(drawing_r7.title[vm_r2.language] || drawing_r7.title.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", drawing_r7.year, " \xB7 ", drawing_r7.technique[vm_r2.language] || drawing_r7.technique.it);
  }
}
function HomePage_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 46)(2, "header", 33)(3, "div")(4, "p", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 47);
    \u0275\u0275repeaterCreate(11, HomePage_Conditional_0_Conditional_16_For_12_Template, 8, 7, "article", 48, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 36)(14, "a", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r2.language === "it" ? "Opere su carta" : "Works on paper");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.content.drawingsTitle[vm_r2.language] || vm_r2.content.drawingsTitle.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.content.drawingsSubtitle[vm_r2.language] || vm_r2.content.drawingsSubtitle.it);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(vm_r2.featuredDrawings);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", vm_r2.drawingsPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r2.language === "it" ? "Esplora i disegni" : "Explore drawings", " ");
  }
}
function HomePage_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 49)(2, "figure", 50);
    \u0275\u0275element(3, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51)(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", vm_r2.pagesConfig.home.commissionsImage, \u0275\u0275sanitizeUrl)("alt", vm_r2.language === "it" ? "Opera commissionata" : "Commissioned artwork");
    \u0275\u0275advance();
    \u0275\u0275property("revealDelay", 120);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.language === "it" ? "Commissioni" : "Commissions");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.content.commissionsTitle[vm_r2.language] || vm_r2.content.commissionsTitle.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.content.commissionsBody[vm_r2.language] || vm_r2.content.commissionsBody.it);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", vm_r2.commissionsPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r2.language === "it" ? "Parliamo della tua opera" : "Let\u2019s discuss your artwork", " ");
  }
}
function HomePage_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "app-newsletter", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("siteConfig", vm_r2.siteConfig)("language", vm_r2.language)("source", "home");
  }
}
function HomePage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HomePage_Conditional_0_Conditional_0_Template, 27, 14, "section", 1);
    \u0275\u0275elementStart(1, "section", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "p", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(14, HomePage_Conditional_0_Conditional_14_Template, 15, 5, "section", 11);
    \u0275\u0275conditionalCreate(15, HomePage_Conditional_0_Conditional_15_Template, 27, 23, "section", 12);
    \u0275\u0275conditionalCreate(16, HomePage_Conditional_0_Conditional_16_Template, 16, 5, "section", 13);
    \u0275\u0275elementStart(17, "section", 14)(18, "figure", 15);
    \u0275\u0275element(19, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17)(21, "p", 6);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h2");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 10);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(29, HomePage_Conditional_0_Conditional_29_Template, 13, 8, "section", 18);
    \u0275\u0275conditionalCreate(30, HomePage_Conditional_0_Conditional_30_Template, 2, 3, "div", 19);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_10_0;
    const vm_r2 = ctx;
    \u0275\u0275conditional((tmp_2_0 = vm_r2.heroArtwork) ? 0 : -1, tmp_2_0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(vm_r2.language === "it" ? "La mia ricerca" : "My research");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r2.content.statementTitle[vm_r2.language] || vm_r2.content.statementTitle.it, " ");
    \u0275\u0275advance();
    \u0275\u0275property("revealDelay", 120);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r2.content.statementBody[vm_r2.language] || vm_r2.content.statementBody.it, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", vm_r2.aboutPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r2.language === "it" ? "Scopri la mia ricerca" : "Discover my research", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r2.featuredArtworks.length > 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = vm_r2.featuredAuction) ? 15 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r2.featuredDrawings.length > 0 ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", vm_r2.pagesConfig.home.manifestoImage, \u0275\u0275sanitizeUrl)("alt", vm_r2.language === "it" ? "Mirko Lancerotto nel suo studio" : "Mirko Lancerotto in his studio");
    \u0275\u0275advance();
    \u0275\u0275property("revealDelay", 130);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.language === "it" ? "L\u2019artista" : "The artist");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.content.artistTitle[vm_r2.language] || vm_r2.content.artistTitle.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r2.content.artistBody[vm_r2.language] || vm_r2.content.artistBody.it);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", vm_r2.aboutPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r2.language === "it" ? "Conosci l\u2019artista" : "Meet the artist", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r2.pagesConfig.home.showCommissions ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r2.pagesConfig.home.showNewsletter && vm_r2.siteConfig.newsletterEnabled ? 30 : -1);
  }
}
var HomePage = class _HomePage {
  artworkService = inject(ArtworkService);
  auctionService = inject(AuctionPublicService);
  siteService = inject(SiteService);
  languageService = inject(LanguageService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  homeHero;
  animationFrameId = null;
  heroMotionEnabled = false;
  onHeroScroll = () => {
    if (this.animationFrameId !== null) {
      return;
    }
    this.animationFrameId = window.requestAnimationFrame(() => {
      this.animationFrameId = null;
      this.updateHeroMotion();
    });
  };
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.siteService.getPagesConfig(),
    this.artworkService.getArtworks(),
    this.auctionService.getAuctions()
  ]).pipe(map(([siteConfig, pagesConfig, artworks, auctions]) => {
    const language = this.languageService.getRouteLanguage(this.route.snapshot);
    const paintings = artworks.filter((artwork) => artwork.type === "painting" || artwork.type === "other");
    const drawings = artworks.filter((artwork) => artwork.type === "drawing" || artwork.type === "work_on_paper");
    const heroArtwork = artworks.find((artwork) => artwork.id === pagesConfig.home.heroArtworkId) ?? paintings[0] ?? artworks[0];
    return {
      siteConfig,
      pagesConfig,
      language,
      heroArtwork,
      featuredArtworks: this.selectArtworks(pagesConfig.home.featuredArtworkIds, artworks, 3),
      featuredDrawings: this.selectArtworks(pagesConfig.home.featuredDrawingIds, drawings, 3),
      featuredAuction: this.selectFeaturedAuction(auctions),
      content: HOME_CONTENT,
      artworksPath: this.languageService.buildLocalizedPath(language, "artworks"),
      drawingsPath: this.languageService.buildLocalizedPath(language, "drawings"),
      aboutPath: this.languageService.buildLocalizedPath(language, "about"),
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
  ngAfterViewInit() {
    this.heroMotionEnabled = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!this.heroMotionEnabled) {
      return;
    }
    window.addEventListener("scroll", this.onHeroScroll, { passive: true });
    this.updateHeroMotion();
  }
  ngOnDestroy() {
    if (this.heroMotionEnabled) {
      window.removeEventListener("scroll", this.onHeroScroll);
    }
    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
  getArtworkPath(language, slug) {
    return language === "it" ? ["/it/opere", slug] : ["/en/artworks", slug];
  }
  getAuctionPath(language, slug) {
    return language === "it" ? ["/it/aste", slug] : ["/en/auctions", slug];
  }
  getAuctionStatusLabel(language, auction) {
    if (auction.publicStatus === "live") {
      return language === "it" ? "Asta in corso" : "Auction live";
    }
    return language === "it" ? "Prossima asta" : "Upcoming auction";
  }
  selectArtworks(configuredIds, candidates, limit) {
    const configured = configuredIds.map((id) => candidates.find((artwork) => artwork.id === id)).filter((artwork) => Boolean(artwork));
    const remaining = candidates.filter((artwork) => !configured.some((selected) => selected.id === artwork.id));
    return [...configured, ...remaining].slice(0, limit);
  }
  selectFeaturedAuction(auctions) {
    const priority = (status, featured) => auctions.find((auction) => auction.publicStatus === status && auction.isFeatured === featured);
    return priority("live", true) ?? priority("live", false) ?? priority("upcoming", true) ?? priority("upcoming", false) ?? null;
  }
  updateHeroMotion() {
    const heroElement = this.homeHero?.nativeElement;
    if (!heroElement) {
      return;
    }
    const progress = Math.min(Math.max(window.scrollY / Math.max(window.innerHeight, 1), 0), 1);
    heroElement.style.setProperty("--home-hero-shift", `${Math.round(progress * 72)}px`);
    heroElement.style.setProperty("--home-hero-copy-opacity", String(1 - progress * 0.58));
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home-page"]], viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.homeHero = _t.first);
    }
  }, decls: 2, vars: 3, consts: [["homeHero", ""], [1, "home-hero"], [1, "home-statement", "home-shell"], ["appRevealOnScroll", "", "revealVariant", "line", 1, "home-statement__line"], [1, "home-statement__layout"], ["appRevealOnScroll", ""], [1, "home-eyebrow"], [1, "home-statement__title"], ["appRevealOnScroll", "", 3, "revealDelay"], [1, "home-statement__body"], [1, "home-text-link", 3, "routerLink"], [1, "home-selected", "home-shell"], [1, "home-auction"], [1, "home-drawings"], [1, "home-artist", "home-shell"], ["appRevealOnScroll", "", "revealVariant", "image", 1, "home-artist__visual"], ["loading", "lazy", 3, "src", "alt"], ["appRevealOnScroll", "", 1, "home-artist__copy", 3, "revealDelay"], [1, "home-commissions", "home-shell"], ["appRevealOnScroll", "", 1, "home-newsletter"], ["aria-hidden", "true", 1, "home-hero__media"], [1, "home-hero__image", 3, "src", "alt"], [1, "home-hero__veil"], [1, "home-hero__shell", "mx-auto", "flex", "h-full", "max-w-7xl", "items-end", "px-5", "pb-9", "pt-28", "sm:px-8", "sm:pb-12", "lg:px-12", "lg:pb-14"], [1, "home-hero__copy", "max-w-3xl", "text-white"], [1, "home-hero__eyebrow", "text-xs", "uppercase", "tracking-[0.3em]", "text-white/65"], [1, "home-hero__title", "mt-5", "text-5xl", "leading-[0.94]", "sm:text-6xl", "lg:text-7xl"], [1, "home-hero__subtitle", "mt-6", "max-w-2xl", "text-base", "leading-8", "text-white/80", "sm:text-lg"], [1, "home-hero__actions", "mt-8", "flex", "flex-wrap", "gap-3"], [1, "home-button", "home-button--light", 3, "routerLink"], [1, "home-button", "home-button--ghost", 3, "routerLink"], [1, "home-hero__caption", 3, "routerLink"], ["aria-hidden", "true", 1, "home-hero__scroll"], ["appRevealOnScroll", "", 1, "home-section-heading"], [1, "home-selected__grid"], ["appRevealOnScroll", "", "revealVariant", "image", 1, "home-selected__item", 3, "home-selected__item--lead", "revealDelay"], ["appRevealOnScroll", "", 1, "home-section-action"], ["appRevealOnScroll", "", "revealVariant", "image", 1, "home-selected__item", 3, "revealDelay"], [3, "routerLink"], [1, "home-selected__media"], [1, "home-selected__caption"], [1, "home-auction__shell", "home-shell"], ["appRevealOnScroll", "", "revealVariant", "image", 1, "home-auction__visual"], ["appRevealOnScroll", "", 1, "home-auction__copy", 3, "revealDelay"], [1, "home-auction__status"], [1, "home-auction__meta"], [1, "home-shell"], [1, "home-drawings__track"], ["appRevealOnScroll", "", 1, "home-drawings__item", 3, "revealDelay"], [1, "home-commissions__panel"], ["appRevealOnScroll", "", "revealVariant", "image", 1, "home-commissions__visual"], ["appRevealOnScroll", "", 1, "home-commissions__copy", 3, "revealDelay"], [3, "siteConfig", "language", "source"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, HomePage_Conditional_0_Template, 31, 20);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, NewsletterComponent, RevealOnScrollDirective, AsyncPipe, CurrencyPipe, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n.home-shell[_ngcontent-%COMP%] {\n  width: min(100%, 80rem);\n  margin-inline: auto;\n  padding-inline: 1.25rem;\n}\n.home-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.home-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  padding: 0.92rem 1.35rem;\n  font-size: 0.69rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition:\n    transform 240ms ease,\n    background-color 240ms ease,\n    border-color 240ms ease;\n}\n.home-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.home-button--light[_ngcontent-%COMP%] {\n  background: #f3e6c9;\n  color: #1c1712;\n}\n.home-button--ghost[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.34);\n  color: white;\n}\n.home-button--ghost[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.64);\n  background: rgba(255, 255, 255, 0.07);\n}\n.home-text-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-top: 2rem;\n  color: var(--site-text);\n  font-size: 0.72rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n.home-text-link[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 2.8rem;\n  height: 1px;\n  background: currentColor;\n  transition: width 240ms ease;\n}\n.home-text-link[_ngcontent-%COMP%]:hover::after {\n  width: 4rem;\n}\n.home-hero[_ngcontent-%COMP%] {\n  --home-hero-shift: 0px;\n  --home-hero-copy-opacity: 1;\n  position: relative;\n  min-height: calc(100svh - 4.75rem);\n  max-height: 68rem;\n  background: #17130f;\n  overflow: hidden;\n}\n.home-hero__media[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -5rem 0;\n  transform: translate3d(0, var(--home-hero-shift), 0);\n  will-change: transform;\n}\n.home-hero__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  animation: _ngcontent-%COMP%_homeHeroArrival 1.5s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.home-hero__veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(14, 12, 10, 0.7) 0%,\n      rgba(14, 12, 10, 0.24) 58%,\n      rgba(14, 12, 10, 0.2) 100%),\n    linear-gradient(\n      180deg,\n      rgba(14, 12, 10, 0.08),\n      rgba(14, 12, 10, 0.68));\n}\n.home-hero__shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: inherit;\n}\n.home-hero__copy[_ngcontent-%COMP%] {\n  opacity: var(--home-hero-copy-opacity);\n  will-change: opacity;\n}\n.home-hero__eyebrow[_ngcontent-%COMP%], \n.home-hero__title[_ngcontent-%COMP%], \n.home-hero__subtitle[_ngcontent-%COMP%], \n.home-hero__actions[_ngcontent-%COMP%], \n.home-hero__caption[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_homeHeroCopy 900ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.home-hero__title[_ngcontent-%COMP%] {\n  max-width: 12ch;\n  animation-delay: 120ms;\n}\n.home-hero__subtitle[_ngcontent-%COMP%] {\n  animation-delay: 230ms;\n}\n.home-hero__actions[_ngcontent-%COMP%] {\n  animation-delay: 340ms;\n}\n.home-hero__caption[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.3rem;\n  margin-left: auto;\n  max-width: 18rem;\n  padding-left: 2rem;\n  color: rgba(255, 255, 255, 0.68);\n  font-size: 0.67rem;\n  letter-spacing: 0.16em;\n  line-height: 1.7;\n  text-align: right;\n  text-transform: uppercase;\n  text-decoration: none;\n  animation-delay: 480ms;\n}\n.home-hero__caption[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.home-hero__scroll[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 0.62rem;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n  transform: rotate(90deg) translateX(50%);\n  transform-origin: right center;\n}\n.home-hero__scroll[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  width: 2.8rem;\n  height: 1px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.28);\n}\n.home-hero__scroll[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.85);\n  animation: _ngcontent-%COMP%_homeScrollLine 2.2s ease-in-out infinite;\n}\n.home-statement[_ngcontent-%COMP%] {\n  padding-top: clamp(6rem, 10vw, 10rem);\n  padding-bottom: clamp(6rem, 10vw, 10rem);\n}\n.home-statement__line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  margin-bottom: clamp(3rem, 6vw, 5rem);\n  background: rgba(32, 27, 22, 0.16);\n  transform-origin: left center;\n}\n.home-statement__layout[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2.5rem;\n}\n.home-statement__title[_ngcontent-%COMP%] {\n  max-width: 13ch;\n  margin-top: 1.2rem;\n  color: var(--site-text);\n  font-size: clamp(2.65rem, 6vw, 5.7rem);\n  line-height: 0.98;\n}\n.home-statement__body[_ngcontent-%COMP%] {\n  max-width: 37rem;\n  color: rgba(32, 27, 22, 0.76);\n  font-size: clamp(1rem, 1.5vw, 1.2rem);\n  line-height: 1.9;\n}\n.home-selected[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: clamp(7rem, 12vw, 11rem);\n}\n.home-section-heading[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  margin-bottom: clamp(3rem, 6vw, 5rem);\n}\n.home-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: var(--site-text);\n  font-size: clamp(2.6rem, 5vw, 4.6rem);\n  line-height: 1;\n}\n.home-section-heading[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 29rem;\n  color: var(--site-muted);\n  font-size: 0.95rem;\n  line-height: 1.8;\n}\n.home-selected__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3.5rem;\n}\n.home-selected__item[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.home-selected__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n}\n.home-selected__media[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(235, 224, 209, 0.54),\n      rgba(250, 246, 240, 0.2));\n}\n.home-selected__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.home-selected__item[_ngcontent-%COMP%]:hover   .home-selected__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.025);\n}\n.home-selected__caption[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-top: 0.9rem;\n  border-top: 1px solid rgba(32, 27, 22, 0.14);\n}\n.home-selected__caption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.home-selected__caption[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.42rem;\n  color: var(--site-muted);\n  font-size: 0.6rem;\n  letter-spacing: 0.17em;\n  text-transform: uppercase;\n}\n.home-selected__caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--site-text);\n  font-size: 1.5rem;\n  line-height: 1.2;\n}\n.home-selected__caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--site-muted);\n  font-size: 0.65rem;\n  letter-spacing: 0.16em;\n  text-align: right;\n  text-transform: uppercase;\n}\n.home-section-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.home-auction[_ngcontent-%COMP%] {\n  position: relative;\n  color: white;\n  background:\n    radial-gradient(\n      circle at 18% 20%,\n      rgba(159, 116, 82, 0.24),\n      transparent 34rem),\n    #1c1712;\n}\n.home-auction__shell[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3rem;\n  padding-top: clamp(4rem, 8vw, 7rem);\n  padding-bottom: clamp(4rem, 8vw, 7rem);\n}\n.home-auction__visual[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 28rem;\n  background: rgba(255, 255, 255, 0.035);\n}\n.home-auction__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: 42rem;\n  object-fit: contain;\n}\n.home-auction__copy[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.home-auction__copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 12ch;\n  margin-top: 1.6rem;\n  font-size: clamp(3rem, 6vw, 5.7rem);\n  line-height: 0.98;\n}\n.home-auction__copy[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.5rem;\n  margin-block: 2.5rem;\n  padding-block: 1.5rem;\n  border-block: 1px solid rgba(255, 255, 255, 0.12);\n}\n.home-auction__copy[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.48);\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n}\n.home-auction__copy[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin-top: 0.65rem;\n  color: rgba(255, 255, 255, 0.86);\n  font-size: 0.92rem;\n}\n.home-auction__status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  color: #e7cdb2;\n  font-size: 0.68rem;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n}\n.home-auction__status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  background: #d89c6c;\n  box-shadow: 0 0 0 0 rgba(216, 156, 108, 0.45);\n  animation: _ngcontent-%COMP%_homeAuctionPulse 2.8s ease-out infinite;\n}\n.home-auction__meta[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 0.68rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.home-drawings[_ngcontent-%COMP%] {\n  padding-block: clamp(6rem, 10vw, 10rem);\n  background:\n    radial-gradient(\n      circle at 88% 10%,\n      rgba(185, 157, 124, 0.18),\n      transparent 28rem),\n    linear-gradient(\n      180deg,\n      #f4ecdf,\n      #faf6f0);\n}\n.home-drawings__track[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: minmax(17rem, 82vw);\n  gap: 1.25rem;\n  margin-inline: -1.25rem;\n  padding-inline: 1.25rem;\n  padding-bottom: 1.25rem;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: thin;\n}\n.home-drawings__item[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n}\n.home-drawings__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.home-drawings__item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  height: 28rem;\n  padding: 1.25rem;\n  background: rgba(255, 252, 247, 0.68);\n  box-shadow: 0 18px 50px rgba(85, 61, 40, 0.07);\n}\n.home-drawings__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.home-drawings__item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.025);\n}\n.home-drawings__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n  color: var(--site-text);\n  font-size: 1.5rem;\n}\n.home-drawings__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.45rem;\n  color: var(--site-muted);\n  font-size: 0.65rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.home-artist[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3rem;\n  padding-top: clamp(7rem, 12vw, 12rem);\n  padding-bottom: clamp(7rem, 12vw, 12rem);\n}\n.home-artist__visual[_ngcontent-%COMP%] {\n  min-height: 34rem;\n  overflow: hidden;\n}\n.home-artist__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.home-artist[_ngcontent-%COMP%]:hover   .home-artist__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.018);\n}\n.home-artist__copy[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.home-artist__copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 12ch;\n  margin-top: 1.2rem;\n  color: var(--site-text);\n  font-size: clamp(2.8rem, 5vw, 4.8rem);\n  line-height: 1;\n}\n.home-artist__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 35rem;\n  margin-top: 2rem;\n  color: rgba(32, 27, 22, 0.74);\n  font-size: 1rem;\n  line-height: 1.9;\n}\n.home-commissions[_ngcontent-%COMP%] {\n  padding-bottom: clamp(6rem, 10vw, 10rem);\n}\n.home-commissions__panel[_ngcontent-%COMP%] {\n  display: grid;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 90% 20%,\n      rgba(159, 116, 82, 0.2),\n      transparent 26rem),\n    #211b16;\n  box-shadow: 0 30px 80px rgba(63, 42, 28, 0.16);\n}\n.home-commissions__visual[_ngcontent-%COMP%] {\n  min-height: 25rem;\n  overflow: hidden;\n}\n.home-commissions__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 800ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.home-commissions__panel[_ngcontent-%COMP%]:hover   .home-commissions__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.025);\n}\n.home-commissions__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: clamp(2rem, 6vw, 5rem);\n  color: white;\n}\n.home-commissions__copy[_ngcontent-%COMP%]   .home-eyebrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.home-commissions__copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 12ch;\n  margin-top: 1.2rem;\n  font-size: clamp(2.8rem, 5vw, 4.8rem);\n  line-height: 1;\n}\n.home-commissions__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 34rem;\n  margin-top: 1.6rem;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.98rem;\n  line-height: 1.9;\n}\n.home-commissions__copy[_ngcontent-%COMP%]   .home-button[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.home-newsletter[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n@keyframes _ngcontent-%COMP%_homeHeroArrival {\n  from {\n    opacity: 0.35;\n    transform: scale(1.055);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_homeHeroCopy {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 1.4rem, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_homeScrollLine {\n  0% {\n    transform: translateX(-110%);\n  }\n  55%, 100% {\n    transform: translateX(110%);\n  }\n}\n@keyframes _ngcontent-%COMP%_homeAuctionPulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(216, 156, 108, 0.44);\n  }\n  70%, 100% {\n    box-shadow: 0 0 0 0.65rem rgba(216, 156, 108, 0);\n  }\n}\n@media (min-width: 640px) {\n  .home-shell[_ngcontent-%COMP%] {\n    padding-inline: 2rem;\n  }\n  .home-section-heading[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.58fr);\n    align-items: end;\n  }\n}\n@media (min-width: 900px) {\n  .home-statement__layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.05fr) minmax(22rem, 0.65fr);\n    align-items: end;\n  }\n  .home-selected__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n    align-items: start;\n    gap: 4rem 2rem;\n  }\n  .home-selected__item[_ngcontent-%COMP%] {\n    grid-column: 8/13;\n  }\n  .home-selected__item[_ngcontent-%COMP%]:nth-child(3) {\n    grid-column: 7/12;\n  }\n  .home-selected__item--lead[_ngcontent-%COMP%] {\n    grid-column: 1/8;\n    grid-row: 1/3;\n  }\n  .home-auction__shell[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(24rem, 0.95fr) minmax(0, 1.05fr);\n    gap: clamp(4rem, 8vw, 8rem);\n  }\n  .home-drawings__track[_ngcontent-%COMP%] {\n    grid-auto-flow: initial;\n    grid-auto-columns: initial;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 2rem;\n    margin-inline: 0;\n    padding-inline: 0;\n    overflow: visible;\n  }\n  .home-drawings__item[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 4rem;\n  }\n  .home-artist[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(24rem, 0.9fr) minmax(0, 1.1fr);\n    gap: clamp(4rem, 8vw, 8rem);\n  }\n  .home-commissions__panel[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);\n  }\n}\n@media (min-width: 1024px) {\n  .home-shell[_ngcontent-%COMP%] {\n    padding-inline: 3rem;\n  }\n}\n@media (max-width: 767px) {\n  .home-hero__shell[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding-bottom: 6.5rem;\n  }\n  .home-hero__caption[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 1.25rem;\n    bottom: 1.6rem;\n    left: 1.25rem;\n    flex-direction: row;\n    justify-content: space-between;\n    max-width: none;\n    padding-top: 1rem;\n    padding-left: 0;\n    border-top: 1px solid rgba(255, 255, 255, 0.22);\n    text-align: left;\n  }\n  .home-hero__scroll[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .home-selected__caption[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .home-selected__caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    text-align: left;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .home-hero__media[_ngcontent-%COMP%], \n   .home-hero__copy[_ngcontent-%COMP%] {\n    transform: none;\n    opacity: 1;\n  }\n  .home-hero__image[_ngcontent-%COMP%], \n   .home-hero__eyebrow[_ngcontent-%COMP%], \n   .home-hero__title[_ngcontent-%COMP%], \n   .home-hero__subtitle[_ngcontent-%COMP%], \n   .home-hero__actions[_ngcontent-%COMP%], \n   .home-hero__caption[_ngcontent-%COMP%], \n   .home-hero__scroll[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after, \n   .home-auction__status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .home-selected__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .home-drawings__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .home-artist__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .home-commissions__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home-page", standalone: true, imports: [AsyncPipe, CurrencyPipe, DatePipe, RouterLink, NewsletterComponent, RevealOnScrollDirective], template: `@if (vm$ | async; as vm) {
  @if (vm.heroArtwork; as heroArtwork) {
    <section #homeHero class="home-hero">
      <div class="home-hero__media" aria-hidden="true">
        <img
          class="home-hero__image"
          [src]="heroArtwork.images.main.sources.large"
          [alt]="''" />
      </div>
      <div class="home-hero__veil"></div>

      <div class="home-hero__shell mx-auto flex h-full max-w-7xl items-end px-5 pb-9 pt-28 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
        <div class="home-hero__copy max-w-3xl text-white">
          <p class="home-hero__eyebrow text-xs uppercase tracking-[0.3em] text-white/65">
            {{ vm.siteConfig.artistName }} \xB7 {{ vm.language === 'it' ? 'Artista' : 'Artist' }}
          </p>
          <h1 class="home-hero__title mt-5 text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
            {{ vm.content.heroTitle[vm.language] || vm.content.heroTitle.it }}
          </h1>
          <p class="home-hero__subtitle mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            {{ vm.siteConfig.claim[vm.language] || vm.siteConfig.claim.it || vm.content.heroSubtitle[vm.language] || vm.content.heroSubtitle.it }}
          </p>
          <div class="home-hero__actions mt-8 flex flex-wrap gap-3">
            <a class="home-button home-button--light" [routerLink]="vm.artworksPath">
              {{ vm.language === 'it' ? 'Entra nelle opere' : 'Enter the artworks' }}
            </a>
            <a class="home-button home-button--ghost" [routerLink]="vm.aboutPath">
              {{ vm.language === 'it' ? 'La mia ricerca' : 'My research' }}
            </a>
          </div>
        </div>

        <a class="home-hero__caption" [routerLink]="getArtworkPath(vm.language, heroArtwork.slug)">
          <span>{{ heroArtwork.title[vm.language] || heroArtwork.title.it }}</span>
          <span>{{ heroArtwork.year }}</span>
        </a>
      </div>

      <div class="home-hero__scroll" aria-hidden="true">
        <span>{{ vm.language === 'it' ? 'Scorri' : 'Scroll' }}</span>
        <i></i>
      </div>
    </section>
  }

  <section class="home-statement home-shell">
    <div class="home-statement__line" appRevealOnScroll revealVariant="line"></div>
    <div class="home-statement__layout">
      <div appRevealOnScroll>
        <p class="home-eyebrow">{{ vm.language === 'it' ? 'La mia ricerca' : 'My research' }}</p>
        <h2 class="home-statement__title">
          {{ vm.content.statementTitle[vm.language] || vm.content.statementTitle.it }}
        </h2>
      </div>
      <div appRevealOnScroll [revealDelay]="120">
        <p class="home-statement__body">
          {{ vm.content.statementBody[vm.language] || vm.content.statementBody.it }}
        </p>
        <a class="home-text-link" [routerLink]="vm.aboutPath">
          {{ vm.language === 'it' ? 'Scopri la mia ricerca' : 'Discover my research' }}
        </a>
      </div>
    </div>
  </section>

  @if (vm.featuredArtworks.length > 0) {
    <section class="home-selected home-shell">
      <header class="home-section-heading" appRevealOnScroll>
        <div>
          <p class="home-eyebrow">{{ vm.language === 'it' ? 'Pittura' : 'Painting' }}</p>
          <h2>{{ vm.content.featuredTitle[vm.language] || vm.content.featuredTitle.it }}</h2>
        </div>
        <p>{{ vm.content.featuredSubtitle[vm.language] || vm.content.featuredSubtitle.it }}</p>
      </header>

      <div class="home-selected__grid">
        @for (artwork of vm.featuredArtworks; track artwork.id; let index = $index) {
          <article
            class="home-selected__item"
            [class.home-selected__item--lead]="index === 0"
            appRevealOnScroll
            revealVariant="image"
            [revealDelay]="index * 110">
            <a [routerLink]="getArtworkPath(vm.language, artwork.slug)">
              <figure class="home-selected__media">
                <img
                  [src]="artwork.images.main.sources.large"
                  [alt]="artwork.images.main.alt[vm.language] || artwork.images.main.alt.it"
                  loading="lazy" />
              </figure>
              <div class="home-selected__caption">
                <div>
                  <span>{{ (index + 1).toString().padStart(2, '0') }} \xB7 {{ vm.language === 'it' ? 'Opera scelta' : 'Selected work' }}</span>
                  <h3>{{ artwork.title[vm.language] || artwork.title.it }}</h3>
                </div>
                <p>{{ artwork.year }} \xB7 {{ artwork.technique[vm.language] || artwork.technique.it }}</p>
              </div>
            </a>
          </article>
        }
      </div>

      <div class="home-section-action" appRevealOnScroll>
        <a class="home-text-link" [routerLink]="vm.artworksPath">
          {{ vm.language === 'it' ? 'Tutte le opere' : 'All artworks' }}
        </a>
      </div>
    </section>
  }

  @if (vm.featuredAuction; as auction) {
    <section class="home-auction">
      <div class="home-auction__shell home-shell">
        <figure class="home-auction__visual" appRevealOnScroll revealVariant="image">
          <img
            [src]="auction.artwork.images.main.sources.large"
            [alt]="auction.artwork.images.main.alt[vm.language] || auction.artwork.images.main.alt.it"
            loading="lazy" />
        </figure>

        <div class="home-auction__copy" appRevealOnScroll [revealDelay]="130">
          <p class="home-auction__status"><span></span>{{ getAuctionStatusLabel(vm.language, auction) }}</p>
          <h2>{{ auction.artwork.title[vm.language] || auction.artwork.title.it }}</h2>
          <p class="home-auction__meta">
            {{ auction.artwork.year }} \xB7 {{ auction.artwork.technique[vm.language] || auction.artwork.technique.it }}
          </p>
          <dl>
            <div>
              <dt>{{ vm.language === 'it' ? 'Chiusura' : 'Closing' }}</dt>
              <dd>{{ auction.closingAt | date : 'd MMMM y, HH:mm' : undefined : vm.language }}</dd>
            </div>
            <div>
              <dt>{{ vm.language === 'it' ? 'Base d\u2019asta' : 'Starting bid' }}</dt>
              <dd>{{ auction.startingBidAmount | currency : auction.currency : 'symbol' : '1.0-0' }}</dd>
            </div>
          </dl>
          <a class="home-button home-button--light" [routerLink]="getAuctionPath(vm.language, auction.slug)">
            {{ vm.language === 'it' ? 'Partecipa all\u2019asta' : 'Join the auction' }}
          </a>
        </div>
      </div>
    </section>
  }

  @if (vm.featuredDrawings.length > 0) {
    <section class="home-drawings">
      <div class="home-shell">
        <header class="home-section-heading" appRevealOnScroll>
          <div>
            <p class="home-eyebrow">{{ vm.language === 'it' ? 'Opere su carta' : 'Works on paper' }}</p>
            <h2>{{ vm.content.drawingsTitle[vm.language] || vm.content.drawingsTitle.it }}</h2>
          </div>
          <p>{{ vm.content.drawingsSubtitle[vm.language] || vm.content.drawingsSubtitle.it }}</p>
        </header>

        <div class="home-drawings__track">
          @for (drawing of vm.featuredDrawings; track drawing.id; let index = $index) {
            <article class="home-drawings__item" appRevealOnScroll [revealDelay]="index * 90">
              <a [routerLink]="getArtworkPath(vm.language, drawing.slug)">
                <figure>
                  <img
                    [src]="drawing.images.main.sources.large"
                    [alt]="drawing.images.main.alt[vm.language] || drawing.images.main.alt.it"
                    loading="lazy" />
                </figure>
                <h3>{{ drawing.title[vm.language] || drawing.title.it }}</h3>
                <p>{{ drawing.year }} \xB7 {{ drawing.technique[vm.language] || drawing.technique.it }}</p>
              </a>
            </article>
          }
        </div>

        <div class="home-section-action" appRevealOnScroll>
          <a class="home-text-link" [routerLink]="vm.drawingsPath">
            {{ vm.language === 'it' ? 'Esplora i disegni' : 'Explore drawings' }}
          </a>
        </div>
      </div>
    </section>
  }

  <section class="home-artist home-shell">
    <figure class="home-artist__visual" appRevealOnScroll revealVariant="image">
      <img
        [src]="vm.pagesConfig.home.manifestoImage"
        [alt]="vm.language === 'it' ? 'Mirko Lancerotto nel suo studio' : 'Mirko Lancerotto in his studio'"
        loading="lazy" />
    </figure>
    <div class="home-artist__copy" appRevealOnScroll [revealDelay]="130">
      <p class="home-eyebrow">{{ vm.language === 'it' ? 'L\u2019artista' : 'The artist' }}</p>
      <h2>{{ vm.content.artistTitle[vm.language] || vm.content.artistTitle.it }}</h2>
      <p>{{ vm.content.artistBody[vm.language] || vm.content.artistBody.it }}</p>
      <a class="home-text-link" [routerLink]="vm.aboutPath">
        {{ vm.language === 'it' ? 'Conosci l\u2019artista' : 'Meet the artist' }}
      </a>
    </div>
  </section>

  @if (vm.pagesConfig.home.showCommissions) {
    <section class="home-commissions home-shell">
      <div class="home-commissions__panel">
        <figure class="home-commissions__visual" appRevealOnScroll revealVariant="image">
          <img
            [src]="vm.pagesConfig.home.commissionsImage"
            [alt]="vm.language === 'it' ? 'Opera commissionata' : 'Commissioned artwork'"
            loading="lazy" />
        </figure>
        <div class="home-commissions__copy" appRevealOnScroll [revealDelay]="120">
          <p class="home-eyebrow">{{ vm.language === 'it' ? 'Commissioni' : 'Commissions' }}</p>
          <h2>{{ vm.content.commissionsTitle[vm.language] || vm.content.commissionsTitle.it }}</h2>
          <p>{{ vm.content.commissionsBody[vm.language] || vm.content.commissionsBody.it }}</p>
          <a class="home-button home-button--ghost" [routerLink]="vm.commissionsPath">
            {{ vm.language === 'it' ? 'Parliamo della tua opera' : 'Let\u2019s discuss your artwork' }}
          </a>
        </div>
      </div>
    </section>
  }

  @if (vm.pagesConfig.home.showNewsletter && vm.siteConfig.newsletterEnabled) {
    <div class="home-newsletter" appRevealOnScroll>
      <app-newsletter [siteConfig]="vm.siteConfig" [language]="vm.language" [source]="'home'" />
    </div>
  }
}
`, styles: ['/* sito-artista/src/app/pages/home/home.page.sass */\n:host {\n  display: block;\n  overflow: hidden;\n}\n.home-shell {\n  width: min(100%, 80rem);\n  margin-inline: auto;\n  padding-inline: 1.25rem;\n}\n.home-eyebrow {\n  font-size: 0.7rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--site-muted);\n}\n.home-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  padding: 0.92rem 1.35rem;\n  font-size: 0.69rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition:\n    transform 240ms ease,\n    background-color 240ms ease,\n    border-color 240ms ease;\n}\n.home-button:hover {\n  transform: translateY(-2px);\n}\n.home-button--light {\n  background: #f3e6c9;\n  color: #1c1712;\n}\n.home-button--ghost {\n  border: 1px solid rgba(255, 255, 255, 0.34);\n  color: white;\n}\n.home-button--ghost:hover {\n  border-color: rgba(255, 255, 255, 0.64);\n  background: rgba(255, 255, 255, 0.07);\n}\n.home-text-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-top: 2rem;\n  color: var(--site-text);\n  font-size: 0.72rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n.home-text-link::after {\n  content: "";\n  width: 2.8rem;\n  height: 1px;\n  background: currentColor;\n  transition: width 240ms ease;\n}\n.home-text-link:hover::after {\n  width: 4rem;\n}\n.home-hero {\n  --home-hero-shift: 0px;\n  --home-hero-copy-opacity: 1;\n  position: relative;\n  min-height: calc(100svh - 4.75rem);\n  max-height: 68rem;\n  background: #17130f;\n  overflow: hidden;\n}\n.home-hero__media {\n  position: absolute;\n  inset: -5rem 0;\n  transform: translate3d(0, var(--home-hero-shift), 0);\n  will-change: transform;\n}\n.home-hero__image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  animation: homeHeroArrival 1.5s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.home-hero__veil {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(14, 12, 10, 0.7) 0%,\n      rgba(14, 12, 10, 0.24) 58%,\n      rgba(14, 12, 10, 0.2) 100%),\n    linear-gradient(\n      180deg,\n      rgba(14, 12, 10, 0.08),\n      rgba(14, 12, 10, 0.68));\n}\n.home-hero__shell {\n  position: relative;\n  min-height: inherit;\n}\n.home-hero__copy {\n  opacity: var(--home-hero-copy-opacity);\n  will-change: opacity;\n}\n.home-hero__eyebrow,\n.home-hero__title,\n.home-hero__subtitle,\n.home-hero__actions,\n.home-hero__caption {\n  animation: homeHeroCopy 900ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.home-hero__title {\n  max-width: 12ch;\n  animation-delay: 120ms;\n}\n.home-hero__subtitle {\n  animation-delay: 230ms;\n}\n.home-hero__actions {\n  animation-delay: 340ms;\n}\n.home-hero__caption {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.3rem;\n  margin-left: auto;\n  max-width: 18rem;\n  padding-left: 2rem;\n  color: rgba(255, 255, 255, 0.68);\n  font-size: 0.67rem;\n  letter-spacing: 0.16em;\n  line-height: 1.7;\n  text-align: right;\n  text-transform: uppercase;\n  text-decoration: none;\n  animation-delay: 480ms;\n}\n.home-hero__caption:hover {\n  color: white;\n}\n.home-hero__scroll {\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 0.62rem;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n  transform: rotate(90deg) translateX(50%);\n  transform-origin: right center;\n}\n.home-hero__scroll i {\n  display: block;\n  width: 2.8rem;\n  height: 1px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.28);\n}\n.home-hero__scroll i::after {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.85);\n  animation: homeScrollLine 2.2s ease-in-out infinite;\n}\n.home-statement {\n  padding-top: clamp(6rem, 10vw, 10rem);\n  padding-bottom: clamp(6rem, 10vw, 10rem);\n}\n.home-statement__line {\n  width: 100%;\n  height: 1px;\n  margin-bottom: clamp(3rem, 6vw, 5rem);\n  background: rgba(32, 27, 22, 0.16);\n  transform-origin: left center;\n}\n.home-statement__layout {\n  display: grid;\n  gap: 2.5rem;\n}\n.home-statement__title {\n  max-width: 13ch;\n  margin-top: 1.2rem;\n  color: var(--site-text);\n  font-size: clamp(2.65rem, 6vw, 5.7rem);\n  line-height: 0.98;\n}\n.home-statement__body {\n  max-width: 37rem;\n  color: rgba(32, 27, 22, 0.76);\n  font-size: clamp(1rem, 1.5vw, 1.2rem);\n  line-height: 1.9;\n}\n.home-selected {\n  padding-top: 2rem;\n  padding-bottom: clamp(7rem, 12vw, 11rem);\n}\n.home-section-heading {\n  display: grid;\n  gap: 1.5rem;\n  margin-bottom: clamp(3rem, 6vw, 5rem);\n}\n.home-section-heading h2 {\n  margin-top: 1rem;\n  color: var(--site-text);\n  font-size: clamp(2.6rem, 5vw, 4.6rem);\n  line-height: 1;\n}\n.home-section-heading > p {\n  max-width: 29rem;\n  color: var(--site-muted);\n  font-size: 0.95rem;\n  line-height: 1.8;\n}\n.home-selected__grid {\n  display: grid;\n  gap: 3.5rem;\n}\n.home-selected__item {\n  min-width: 0;\n}\n.home-selected__item a {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n}\n.home-selected__media {\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(235, 224, 209, 0.54),\n      rgba(250, 246, 240, 0.2));\n}\n.home-selected__media img {\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.home-selected__item:hover .home-selected__media img {\n  transform: scale(1.025);\n}\n.home-selected__caption {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-top: 0.9rem;\n  border-top: 1px solid rgba(32, 27, 22, 0.14);\n}\n.home-selected__caption > div {\n  min-width: 0;\n}\n.home-selected__caption > div span {\n  display: block;\n  margin-bottom: 0.42rem;\n  color: var(--site-muted);\n  font-size: 0.6rem;\n  letter-spacing: 0.17em;\n  text-transform: uppercase;\n}\n.home-selected__caption h3 {\n  color: var(--site-text);\n  font-size: 1.5rem;\n  line-height: 1.2;\n}\n.home-selected__caption p {\n  color: var(--site-muted);\n  font-size: 0.65rem;\n  letter-spacing: 0.16em;\n  text-align: right;\n  text-transform: uppercase;\n}\n.home-section-action {\n  display: flex;\n  justify-content: flex-end;\n}\n.home-auction {\n  position: relative;\n  color: white;\n  background:\n    radial-gradient(\n      circle at 18% 20%,\n      rgba(159, 116, 82, 0.24),\n      transparent 34rem),\n    #1c1712;\n}\n.home-auction__shell {\n  display: grid;\n  gap: 3rem;\n  padding-top: clamp(4rem, 8vw, 7rem);\n  padding-bottom: clamp(4rem, 8vw, 7rem);\n}\n.home-auction__visual {\n  display: grid;\n  place-items: center;\n  min-height: 28rem;\n  background: rgba(255, 255, 255, 0.035);\n}\n.home-auction__visual img {\n  width: 100%;\n  height: 100%;\n  max-height: 42rem;\n  object-fit: contain;\n}\n.home-auction__copy {\n  align-self: center;\n}\n.home-auction__copy h2 {\n  max-width: 12ch;\n  margin-top: 1.6rem;\n  font-size: clamp(3rem, 6vw, 5.7rem);\n  line-height: 0.98;\n}\n.home-auction__copy dl {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.5rem;\n  margin-block: 2.5rem;\n  padding-block: 1.5rem;\n  border-block: 1px solid rgba(255, 255, 255, 0.12);\n}\n.home-auction__copy dt {\n  color: rgba(255, 255, 255, 0.48);\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n}\n.home-auction__copy dd {\n  margin-top: 0.65rem;\n  color: rgba(255, 255, 255, 0.86);\n  font-size: 0.92rem;\n}\n.home-auction__status {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  color: #e7cdb2;\n  font-size: 0.68rem;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n}\n.home-auction__status span {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  background: #d89c6c;\n  box-shadow: 0 0 0 0 rgba(216, 156, 108, 0.45);\n  animation: homeAuctionPulse 2.8s ease-out infinite;\n}\n.home-auction__meta {\n  margin-top: 1.2rem;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 0.68rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.home-drawings {\n  padding-block: clamp(6rem, 10vw, 10rem);\n  background:\n    radial-gradient(\n      circle at 88% 10%,\n      rgba(185, 157, 124, 0.18),\n      transparent 28rem),\n    linear-gradient(\n      180deg,\n      #f4ecdf,\n      #faf6f0);\n}\n.home-drawings__track {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: minmax(17rem, 82vw);\n  gap: 1.25rem;\n  margin-inline: -1.25rem;\n  padding-inline: 1.25rem;\n  padding-bottom: 1.25rem;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: thin;\n}\n.home-drawings__item {\n  scroll-snap-align: start;\n}\n.home-drawings__item a {\n  color: inherit;\n  text-decoration: none;\n}\n.home-drawings__item figure {\n  display: grid;\n  place-items: center;\n  height: 28rem;\n  padding: 1.25rem;\n  background: rgba(255, 252, 247, 0.68);\n  box-shadow: 0 18px 50px rgba(85, 61, 40, 0.07);\n}\n.home-drawings__item img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.home-drawings__item:hover img {\n  transform: scale(1.025);\n}\n.home-drawings__item h3 {\n  margin-top: 1.2rem;\n  color: var(--site-text);\n  font-size: 1.5rem;\n}\n.home-drawings__item p {\n  margin-top: 0.45rem;\n  color: var(--site-muted);\n  font-size: 0.65rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.home-artist {\n  display: grid;\n  gap: 3rem;\n  padding-top: clamp(7rem, 12vw, 12rem);\n  padding-bottom: clamp(7rem, 12vw, 12rem);\n}\n.home-artist__visual {\n  min-height: 34rem;\n  overflow: hidden;\n}\n.home-artist__visual img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.home-artist:hover .home-artist__visual img {\n  transform: scale(1.018);\n}\n.home-artist__copy {\n  align-self: center;\n}\n.home-artist__copy h2 {\n  max-width: 12ch;\n  margin-top: 1.2rem;\n  color: var(--site-text);\n  font-size: clamp(2.8rem, 5vw, 4.8rem);\n  line-height: 1;\n}\n.home-artist__copy p {\n  max-width: 35rem;\n  margin-top: 2rem;\n  color: rgba(32, 27, 22, 0.74);\n  font-size: 1rem;\n  line-height: 1.9;\n}\n.home-commissions {\n  padding-bottom: clamp(6rem, 10vw, 10rem);\n}\n.home-commissions__panel {\n  display: grid;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 90% 20%,\n      rgba(159, 116, 82, 0.2),\n      transparent 26rem),\n    #211b16;\n  box-shadow: 0 30px 80px rgba(63, 42, 28, 0.16);\n}\n.home-commissions__visual {\n  min-height: 25rem;\n  overflow: hidden;\n}\n.home-commissions__visual img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 800ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.home-commissions__panel:hover .home-commissions__visual img {\n  transform: scale(1.025);\n}\n.home-commissions__copy {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: clamp(2rem, 6vw, 5rem);\n  color: white;\n}\n.home-commissions__copy .home-eyebrow {\n  color: rgba(255, 255, 255, 0.5);\n}\n.home-commissions__copy h2 {\n  max-width: 12ch;\n  margin-top: 1.2rem;\n  font-size: clamp(2.8rem, 5vw, 4.8rem);\n  line-height: 1;\n}\n.home-commissions__copy p {\n  max-width: 34rem;\n  margin-top: 1.6rem;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.98rem;\n  line-height: 1.9;\n}\n.home-commissions__copy .home-button {\n  margin-top: 2rem;\n}\n.home-newsletter {\n  padding-bottom: 2rem;\n}\n@keyframes homeHeroArrival {\n  from {\n    opacity: 0.35;\n    transform: scale(1.055);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes homeHeroCopy {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 1.4rem, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes homeScrollLine {\n  0% {\n    transform: translateX(-110%);\n  }\n  55%, 100% {\n    transform: translateX(110%);\n  }\n}\n@keyframes homeAuctionPulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(216, 156, 108, 0.44);\n  }\n  70%, 100% {\n    box-shadow: 0 0 0 0.65rem rgba(216, 156, 108, 0);\n  }\n}\n@media (min-width: 640px) {\n  .home-shell {\n    padding-inline: 2rem;\n  }\n  .home-section-heading {\n    grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.58fr);\n    align-items: end;\n  }\n}\n@media (min-width: 900px) {\n  .home-statement__layout {\n    grid-template-columns: minmax(0, 1.05fr) minmax(22rem, 0.65fr);\n    align-items: end;\n  }\n  .home-selected__grid {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n    align-items: start;\n    gap: 4rem 2rem;\n  }\n  .home-selected__item {\n    grid-column: 8/13;\n  }\n  .home-selected__item:nth-child(3) {\n    grid-column: 7/12;\n  }\n  .home-selected__item--lead {\n    grid-column: 1/8;\n    grid-row: 1/3;\n  }\n  .home-auction__shell {\n    grid-template-columns: minmax(24rem, 0.95fr) minmax(0, 1.05fr);\n    gap: clamp(4rem, 8vw, 8rem);\n  }\n  .home-drawings__track {\n    grid-auto-flow: initial;\n    grid-auto-columns: initial;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 2rem;\n    margin-inline: 0;\n    padding-inline: 0;\n    overflow: visible;\n  }\n  .home-drawings__item:nth-child(2) {\n    margin-top: 4rem;\n  }\n  .home-artist {\n    grid-template-columns: minmax(24rem, 0.9fr) minmax(0, 1.1fr);\n    gap: clamp(4rem, 8vw, 8rem);\n  }\n  .home-commissions__panel {\n    grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);\n  }\n}\n@media (min-width: 1024px) {\n  .home-shell {\n    padding-inline: 3rem;\n  }\n}\n@media (max-width: 767px) {\n  .home-hero__shell {\n    align-items: flex-end;\n    padding-bottom: 6.5rem;\n  }\n  .home-hero__caption {\n    position: absolute;\n    right: 1.25rem;\n    bottom: 1.6rem;\n    left: 1.25rem;\n    flex-direction: row;\n    justify-content: space-between;\n    max-width: none;\n    padding-top: 1rem;\n    padding-left: 0;\n    border-top: 1px solid rgba(255, 255, 255, 0.22);\n    text-align: left;\n  }\n  .home-hero__scroll {\n    display: none;\n  }\n  .home-selected__caption {\n    display: block;\n  }\n  .home-selected__caption p {\n    margin-top: 0.5rem;\n    text-align: left;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .home-hero__media,\n  .home-hero__copy {\n    transform: none;\n    opacity: 1;\n  }\n  .home-hero__image,\n  .home-hero__eyebrow,\n  .home-hero__title,\n  .home-hero__subtitle,\n  .home-hero__actions,\n  .home-hero__caption,\n  .home-hero__scroll i::after,\n  .home-auction__status span {\n    animation: none;\n  }\n  .home-selected__media img,\n  .home-drawings__item img,\n  .home-artist__visual img,\n  .home-commissions__visual img {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */\n'] }]
  }], null, { homeHero: [{
    type: ViewChild,
    args: ["homeHero"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "sito-artista/src/app/pages/home/home.page.ts", lineNumber: 23 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-RVQSJMZM.js.map
