import {
  ArtworkGridComponent
} from "./chunk-VEVII2HT.js";
import "./chunk-B2JSZP5S.js";
import {
  ArtworkService
} from "./chunk-VLPNPYTG.js";
import {
  ArtworkGalleryComponent
} from "./chunk-4WHPFY7X.js";
import {
  NewsletterComponent
} from "./chunk-DBQUGMHR.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CurrencyPipe,
  LanguageService,
  RouterLink,
  SeoService,
  SiteService
} from "./chunk-5ZWV2562.js";
import {
  Component,
  Input,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  switchMap,
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/components/artwork-info/artwork-info.component.ts
function ArtworkInfoComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(2, 1, ctx_r0.artwork.price.amount, ctx_r0.artwork.price.currency, "symbol", "1.0-0"), " ");
  }
}
function ArtworkInfoComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.artwork.subtitle[ctx_r0.language] || ctx_r0.artwork.subtitle.it, " ");
  }
}
function ArtworkInfoComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "a", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.auctionLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.auctionMessage, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.auctionPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.primaryCtaLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.mailtoLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.secondaryCtaLabel, " ");
  }
}
function ArtworkInfoComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.mailtoLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.primaryCtaLabel, " ");
  }
}
function ArtworkInfoComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xD7 ", ctx_r0.artwork.dimensions.depthCm);
  }
}
function ArtworkInfoComponent_Conditional_0_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "h2", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Descrizione" : "Description", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.artwork.texts.description[ctx_r0.language] || ctx_r0.artwork.texts.description.it, " ");
  }
}
function ArtworkInfoComponent_Conditional_0_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20)(1, "h2", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Nota poetica" : "Poetic note", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.artwork.texts.poetic[ctx_r0.language] || ctx_r0.artwork.texts.poetic.it, " ");
  }
}
function ArtworkInfoComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, ArtworkInfoComponent_Conditional_0_Conditional_29_Conditional_1_Template, 5, 2, "section", 19);
    \u0275\u0275conditionalCreate(2, ArtworkInfoComponent_Conditional_0_Conditional_29_Conditional_2_Template, 5, 2, "section", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowDescription && (ctx_r0.artwork.texts.description[ctx_r0.language] || ctx_r0.artwork.texts.description.it) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowPoetic && (ctx_r0.artwork.texts.poetic[ctx_r0.language] || ctx_r0.artwork.texts.poetic.it) ? 2 : -1);
  }
}
function ArtworkInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ArtworkInfoComponent_Conditional_0_Conditional_5_Template, 3, 6, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ArtworkInfoComponent_Conditional_0_Conditional_8_Template, 2, 1, "p", 7);
    \u0275\u0275conditionalCreate(9, ArtworkInfoComponent_Conditional_0_Conditional_9_Template, 10, 6, "section", 8)(10, ArtworkInfoComponent_Conditional_0_Conditional_10_Template, 2, 2, "a", 9);
    \u0275\u0275elementStart(11, "dl", 10)(12, "div")(13, "dt", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt", 11);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd", 12);
    \u0275\u0275text(21);
    \u0275\u0275conditionalCreate(22, ArtworkInfoComponent_Conditional_0_Conditional_22_Template, 2, 1, "span");
    \u0275\u0275text(23, " cm ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "dt", 11);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd", 12);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(29, ArtworkInfoComponent_Conditional_0_Conditional_29_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowPrice ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.artwork.title[ctx_r0.language] || ctx_r0.artwork.title.it, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.artwork.subtitle[ctx_r0.language] || ctx_r0.artwork.subtitle.it ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auctionSummary && ctx_r0.auctionPath ? 9 : 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Tecnica" : "Technique", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.techniqueSupportLabel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Dimensioni" : "Dimensions", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.artwork.dimensions.widthCm, " \xD7 ", ctx_r0.artwork.dimensions.heightCm, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.artwork.dimensions.depthCm ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Anno" : "Year", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.artwork.year);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowDescription || ctx_r0.shouldShowPoetic ? 29 : -1);
  }
}
function ArtworkInfoComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.artwork.subtitle[ctx_r0.language] || ctx_r0.artwork.subtitle.it, " ");
  }
}
function ArtworkInfoComponent_Conditional_1_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.artwork.texts.description[ctx_r0.language] || ctx_r0.artwork.texts.description.it);
  }
}
function ArtworkInfoComponent_Conditional_1_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.artwork.texts.poetic[ctx_r0.language] || ctx_r0.artwork.texts.poetic.it, " ");
  }
}
function ArtworkInfoComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275conditionalCreate(1, ArtworkInfoComponent_Conditional_1_Conditional_8_Conditional_1_Template, 2, 1, "p");
    \u0275\u0275conditionalCreate(2, ArtworkInfoComponent_Conditional_1_Conditional_8_Conditional_2_Template, 2, 1, "p", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowDescription && (ctx_r0.artwork.texts.description[ctx_r0.language] || ctx_r0.artwork.texts.description.it) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowPoetic && (ctx_r0.artwork.texts.poetic[ctx_r0.language] || ctx_r0.artwork.texts.poetic.it) ? 2 : -1);
  }
}
function ArtworkInfoComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xD7 ", ctx_r0.artwork.dimensions.depthCm);
  }
}
function ArtworkInfoComponent_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Prezzo" : "Price", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(5, 2, ctx_r0.artwork.price.amount, ctx_r0.artwork.price.currency, "symbol", "1.0-0"), " ");
  }
}
function ArtworkInfoComponent_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "a", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.auctionLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.auctionMessage, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.auctionPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.primaryCtaLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.mailtoLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.secondaryCtaLabel, " ");
  }
}
function ArtworkInfoComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.mailtoLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.primaryCtaLabel, " ");
  }
}
function ArtworkInfoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 24)(2, "div", 25)(3, "p", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ArtworkInfoComponent_Conditional_1_Conditional_7_Template, 2, 1, "p", 7);
    \u0275\u0275conditionalCreate(8, ArtworkInfoComponent_Conditional_1_Conditional_8_Template, 3, 2, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "aside", 28)(10, "dl", 29)(11, "div")(12, "dt", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd", 30)(15, "span", 4);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "dt", 11);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd", 12);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt", 11);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd", 12);
    \u0275\u0275text(26);
    \u0275\u0275conditionalCreate(27, ArtworkInfoComponent_Conditional_1_Conditional_27_Template, 2, 1, "span");
    \u0275\u0275text(28, " cm ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "dt", 11);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd", 12);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, ArtworkInfoComponent_Conditional_1_Conditional_34_Template, 6, 7, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, ArtworkInfoComponent_Conditional_1_Conditional_35_Template, 10, 6, "section", 8)(36, ArtworkInfoComponent_Conditional_1_Conditional_36_Template, 2, 2, "a", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.artwork.title[ctx_r0.language] || ctx_r0.artwork.title.it, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.artwork.subtitle[ctx_r0.language] || ctx_r0.artwork.subtitle.it ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowDescription || ctx_r0.shouldShowPoetic ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Stato" : "Status", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Tecnica" : "Technique", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.techniqueSupportLabel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Dimensioni" : "Dimensions", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.artwork.dimensions.widthCm, " \xD7 ", ctx_r0.artwork.dimensions.heightCm, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.artwork.dimensions.depthCm ? 27 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Anno" : "Year", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.artwork.year);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowPrice ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auctionSummary && ctx_r0.auctionPath ? 35 : 36);
  }
}
var ArtworkInfoComponent = class _ArtworkInfoComponent {
  artwork;
  language;
  artistEmail;
  layout = "default";
  auctionPath = null;
  auctionSummary = null;
  get statusLabel() {
    const labels = {
      it: {
        available: "Disponibile",
        sold: "Venduta",
        reserved: "Riservata",
        private_collection: "Collezione privata",
        not_available: "Non disponibile"
      },
      en: {
        available: "Available",
        sold: "Sold",
        reserved: "Reserved",
        private_collection: "Private Collection",
        not_available: "Not Available"
      }
    };
    return labels[this.language][this.artwork.status];
  }
  get shouldShowDescription() {
    return this.artwork.texts.visibleMode === "description" || this.artwork.texts.visibleMode === "both";
  }
  get shouldShowPoetic() {
    return this.artwork.texts.visibleMode === "poetic" || this.artwork.texts.visibleMode === "both";
  }
  get shouldShowPrice() {
    return this.artwork.price.amount !== null;
  }
  get techniqueSupportLabel() {
    const technique = this.artwork.technique[this.language] || this.artwork.technique.it;
    const support = this.normalizeSupportLabel(this.artwork.support[this.language] || this.artwork.support.it);
    return support ? `${technique} ${this.language === "it" ? "su" : "on"} ${support}` : technique;
  }
  get hasAuctionPriority() {
    return this.auctionSummary?.publicStatus === "live" || this.auctionSummary?.publicStatus === "upcoming";
  }
  get isUnavailable() {
    return this.artwork.status === "sold" || this.artwork.status === "private_collection" || this.artwork.status === "not_available";
  }
  get auctionLabel() {
    if (!this.auctionSummary) {
      return "";
    }
    if (this.auctionSummary.publicStatus === "live") {
      return this.language === "it" ? "Asta in corso" : "Auction live";
    }
    if (this.auctionSummary.publicStatus === "upcoming") {
      return this.language === "it" ? "Asta in apertura" : "Auction opening soon";
    }
    return this.language === "it" ? "Asta conclusa" : "Auction closed";
  }
  get primaryCtaLabel() {
    if (this.hasAuctionPriority) {
      return this.language === "it" ? "Vai all asta" : "Go to auction";
    }
    return this.isUnavailable ? this.language === "it" ? "Richiedi dettagli" : "Request details" : this.language === "it" ? "Richiedi informazioni" : "Request information";
  }
  get secondaryCtaLabel() {
    return this.isUnavailable ? this.language === "it" ? "Contatta l artista" : "Contact the artist" : this.language === "it" ? "Richiedi informazioni" : "Request information";
  }
  get auctionMessage() {
    if (!this.auctionSummary) {
      return "";
    }
    if (this.auctionSummary.publicStatus === "live") {
      return this.language === "it" ? "Quest opera e attualmente in asta. Per seguire rilanci e stato pubblico usa la pagina dedicata." : "This artwork is currently at auction. Use the dedicated page to follow bids and the public status.";
    }
    if (this.auctionSummary.publicStatus === "upcoming") {
      return this.language === "it" ? "Quest opera andra in asta a breve. La pagina dedicata raccoglie tempi e dettagli pubblici." : "This artwork will go to auction soon. The dedicated page collects timing and public details.";
    }
    return this.language === "it" ? "Per questa opera e disponibile anche la scheda dell asta conclusa." : "A public page is also available for this closed auction.";
  }
  get mailtoLink() {
    const title = this.language === "it" ? this.artwork.title.it : this.artwork.title.en || this.artwork.title.it;
    const subject = this.language === "it" ? `Richiesta informazioni: ${title}` : `Request information: ${title}`;
    return `mailto:${this.artistEmail}?subject=${encodeURIComponent(subject)}`;
  }
  normalizeSupportLabel(rawSupport) {
    const support = String(rawSupport || "").trim();
    if (!support) {
      return "";
    }
    const lowered = support.toLowerCase();
    const supportMap = [
      { pattern: /\btela\b|\bcanvas\b/, it: "tela", en: "canvas" },
      { pattern: /\bcarta\b|\bpaper\b/, it: "carta", en: "paper" },
      { pattern: /\btavola\b|\bpanel\b/, it: "tavola", en: "panel" },
      { pattern: /\blegno\b|\bwood\b/, it: "legno", en: "wood" },
      { pattern: /\bpuzzle\b/, it: "puzzle", en: "puzzle" },
      { pattern: /\bcartone\b|\bcardboard\b/, it: "cartone", en: "cardboard" },
      { pattern: /\brame\b|\bcopper\b/, it: "rame", en: "copper" },
      { pattern: /\balluminio\b|\baluminum\b|\baluminium\b/, it: "alluminio", en: "aluminium" }
    ];
    const matched = supportMap.find((entry) => entry.pattern.test(lowered));
    if (matched) {
      return this.language === "it" ? matched.it : matched.en;
    }
    if (lowered.length > 40 || lowered.includes("dipinto") || lowered.includes("opera")) {
      return this.language === "it" ? "tela" : "canvas";
    }
    return support;
  }
  static \u0275fac = function ArtworkInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtworkInfoComponent, selectors: [["app-artwork-info"]], inputs: { artwork: "artwork", language: "language", artistEmail: "artistEmail", layout: "layout", auctionPath: "auctionPath", auctionSummary: "auctionSummary" }, decls: 2, vars: 1, consts: [[1, "artwork-info", "artwork-info--product"], [1, "artwork-info", "mx-auto", "max-w-7xl", "px-5", "py-6", "sm:px-8", "lg:px-12"], [1, "artwork-info__product-panel", "rounded-[1.7rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]", "p-6", "sm:p-7", "lg:sticky", "lg:top-28"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "artwork-info__status-pill", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "uppercase", "tracking-[0.18em]"], [1, "artwork-info__product-price", "text-lg", "text-[var(--site-text)]"], [1, "mt-4", "text-4xl", "leading-none", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-4", "text-lg", "text-[var(--site-muted)]"], [1, "artwork-info__auction-callout", "mt-8", "rounded-[1.35rem]", "border", "border-[var(--site-border)]", "px-5", "py-5"], [1, "artwork-info__cta", "mt-8", "inline-flex", "rounded-full", "bg-[var(--site-text)]", "px-5", "py-3", "text-xs", "uppercase", "tracking-[0.2em]", "text-white", "no-underline", 3, "href"], [1, "artwork-info__product-specs", "mt-8", "grid", "gap-x-5", "gap-y-5", "text-sm", "text-[var(--site-text)]", "sm:grid-cols-2"], [1, "uppercase", "tracking-[0.18em]", "text-[var(--site-muted)]"], [1, "mt-2"], [1, "mt-8", "border-t", "border-[var(--site-border)]", "pt-7"], [1, "text-[11px]", "uppercase", "tracking-[0.24em]", "text-[var(--site-accent)]"], [1, "mt-3", "text-sm", "leading-7", "text-[var(--site-text)]/84"], [1, "mt-5", "flex", "flex-wrap", "gap-3"], [1, "artwork-info__cta", "inline-flex", "rounded-full", "bg-[var(--site-text)]", "px-5", "py-3", "text-xs", "uppercase", "tracking-[0.2em]", "text-white", "no-underline", 3, "routerLink"], [1, "artwork-info__secondary-cta", "inline-flex", "rounded-full", "border", "border-[var(--site-border)]", "px-5", "py-3", "text-xs", "uppercase", "tracking-[0.2em]", "text-[var(--site-text)]", "no-underline", 3, "href"], [1, "artwork-info__text-block"], [1, "artwork-info__text-block", "artwork-info__text-block--poetic", "mt-7", "rounded-[1.35rem]", "px-5", "py-5"], [1, "text-xs", "uppercase", "tracking-[0.24em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-sm", "leading-8", "text-[var(--site-text)]/82", "sm:text-base"], [1, "mt-4", "text-sm", "italic", "leading-8", "text-[var(--site-muted)]", "sm:text-base"], [1, "artwork-info__layout", "grid", "gap-10", "lg:grid-cols-[1.15fr_0.85fr]"], [1, "artwork-info__body"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-8", "space-y-5", "text-sm", "leading-8", "text-[var(--site-text)]/82", "sm:text-base"], [1, "artwork-info__aside", "rounded-[1.75rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]", "p-6"], [1, "space-y-4", "text-sm", "text-[var(--site-text)]"], [1, "mt-3"], [1, "italic", "text-[var(--site-muted)]"]], template: function ArtworkInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ArtworkInfoComponent_Conditional_0_Template, 30, 14, "section", 0)(1, ArtworkInfoComponent_Conditional_1_Template, 37, 16, "section", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.layout === "product" ? 0 : 1);
    }
  }, dependencies: [RouterLink, CurrencyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.artwork-info--product[_ngcontent-%COMP%] {\n  display: block;\n}\n.artwork-info__product-panel[_ngcontent-%COMP%] {\n  box-shadow: var(--site-shadow-soft);\n}\n.artwork-info__product-specs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-bottom: 0.15rem;\n}\n.artwork-info__layout[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (min-width: 1024px) {\n  .artwork-info__layout[_ngcontent-%COMP%] {\n    margin-top: -4.75rem;\n    align-items: start;\n  }\n}\n.artwork-info__body[_ngcontent-%COMP%] {\n  padding: 1.75rem 0 0;\n}\n.artwork-info__aside[_ngcontent-%COMP%] {\n  box-shadow: var(--site-shadow-soft);\n}\n.artwork-info__status-pill[_ngcontent-%COMP%] {\n  border: 1px solid rgba(159, 116, 82, 0.18);\n  background: rgba(159, 116, 82, 0.08);\n  color: var(--site-accent);\n}\n.artwork-info__product-price[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.artwork-info__text-block--poetic[_ngcontent-%COMP%] {\n  border: 1px solid rgba(159, 116, 82, 0.12);\n  background: rgba(247, 241, 234, 0.72);\n}\n.artwork-info__auction-callout[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(245, 238, 228, 0.94),\n      rgba(255, 252, 248, 0.98));\n}\n.artwork-info__cta[_ngcontent-%COMP%] {\n  transition: transform 0.25s ease, background-color 0.25s ease;\n}\n.artwork-info__cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: var(--site-accent);\n}\n.artwork-info__secondary-cta[_ngcontent-%COMP%] {\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    color 0.25s ease;\n}\n.artwork-info__secondary-cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(159, 116, 82, 0.34);\n  color: var(--site-accent);\n}\n/*# sourceMappingURL=artwork-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkInfoComponent, [{
    type: Component,
    args: [{ selector: "app-artwork-info", standalone: true, imports: [CurrencyPipe, RouterLink], template: `@if (layout === 'product') {
  <section class="artwork-info artwork-info--product">
    <div class="artwork-info__product-panel rounded-[1.7rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-6 sm:p-7 lg:sticky lg:top-28">
      <div class="flex flex-wrap items-center gap-3">
        <span class="artwork-info__status-pill inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]">
          {{ statusLabel }}
        </span>

        @if (shouldShowPrice) {
          <span class="artwork-info__product-price text-lg text-[var(--site-text)]">
            {{ artwork.price.amount | currency : artwork.price.currency : 'symbol' : '1.0-0' }}
          </span>
        }
      </div>

      <h1 class="mt-4 text-4xl leading-none text-[var(--site-text)] sm:text-5xl">
        {{ artwork.title[language] || artwork.title.it }}
      </h1>

      @if (artwork.subtitle[language] || artwork.subtitle.it) {
        <p class="mt-4 text-lg text-[var(--site-muted)]">
          {{ artwork.subtitle[language] || artwork.subtitle.it }}
        </p>
      }

      @if (auctionSummary && auctionPath) {
        <section class="artwork-info__auction-callout mt-8 rounded-[1.35rem] border border-[var(--site-border)] px-5 py-5">
          <p class="text-[11px] uppercase tracking-[0.24em] text-[var(--site-accent)]">
            {{ auctionLabel }}
          </p>
          <p class="mt-3 text-sm leading-7 text-[var(--site-text)]/84">
            {{ auctionMessage }}
          </p>
          <div class="mt-5 flex flex-wrap gap-3">
            <a
              [routerLink]="auctionPath"
              class="artwork-info__cta inline-flex rounded-full bg-[var(--site-text)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-white no-underline">
              {{ primaryCtaLabel }}
            </a>
            <a
              [href]="mailtoLink"
              class="artwork-info__secondary-cta inline-flex rounded-full border border-[var(--site-border)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[var(--site-text)] no-underline">
              {{ secondaryCtaLabel }}
            </a>
          </div>
        </section>
      } @else {
        <a
          [href]="mailtoLink"
          class="artwork-info__cta mt-8 inline-flex rounded-full bg-[var(--site-text)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-white no-underline">
          {{ primaryCtaLabel }}
        </a>
      }

      <dl class="artwork-info__product-specs mt-8 grid gap-x-5 gap-y-5 text-sm text-[var(--site-text)] sm:grid-cols-2">
        <div>
          <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
            {{ language === 'it' ? 'Tecnica' : 'Technique' }}
          </dt>
          <dd class="mt-2">{{ techniqueSupportLabel }}</dd>
        </div>

        <div>
          <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
            {{ language === 'it' ? 'Dimensioni' : 'Dimensions' }}
          </dt>
          <dd class="mt-2">
            {{ artwork.dimensions.widthCm }} \xD7 {{ artwork.dimensions.heightCm }}
            @if (artwork.dimensions.depthCm) {
              <span> \xD7 {{ artwork.dimensions.depthCm }}</span>
            }
            cm
          </dd>
        </div>

        <div>
          <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
            {{ language === 'it' ? 'Anno' : 'Year' }}
          </dt>
          <dd class="mt-2">{{ artwork.year }}</dd>
        </div>
      </dl>

      @if (shouldShowDescription || shouldShowPoetic) {
        <div class="mt-8 border-t border-[var(--site-border)] pt-7">
          @if (shouldShowDescription && (artwork.texts.description[language] || artwork.texts.description.it)) {
            <section class="artwork-info__text-block">
              <h2 class="text-xs uppercase tracking-[0.24em] text-[var(--site-muted)]">
                {{ language === 'it' ? 'Descrizione' : 'Description' }}
              </h2>
              <p class="mt-4 text-sm leading-8 text-[var(--site-text)]/82 sm:text-base">
                {{ artwork.texts.description[language] || artwork.texts.description.it }}
              </p>
            </section>
          }

          @if (shouldShowPoetic && (artwork.texts.poetic[language] || artwork.texts.poetic.it)) {
            <section class="artwork-info__text-block artwork-info__text-block--poetic mt-7 rounded-[1.35rem] px-5 py-5">
              <h2 class="text-xs uppercase tracking-[0.24em] text-[var(--site-muted)]">
                {{ language === 'it' ? 'Nota poetica' : 'Poetic note' }}
              </h2>
              <p class="mt-4 text-sm italic leading-8 text-[var(--site-muted)] sm:text-base">
                {{ artwork.texts.poetic[language] || artwork.texts.poetic.it }}
              </p>
            </section>
          }
        </div>
      }
    </div>
  </section>
} @else {
  <section class="artwork-info mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
    <div class="artwork-info__layout grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="artwork-info__body">
        <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">
          {{ statusLabel }}
        </p>
        <h1 class="mt-4 text-4xl leading-none text-[var(--site-text)] sm:text-5xl">
          {{ artwork.title[language] || artwork.title.it }}
        </h1>

        @if (artwork.subtitle[language] || artwork.subtitle.it) {
          <p class="mt-4 text-lg text-[var(--site-muted)]">
            {{ artwork.subtitle[language] || artwork.subtitle.it }}
          </p>
        }

        @if (shouldShowDescription || shouldShowPoetic) {
          <div class="mt-8 space-y-5 text-sm leading-8 text-[var(--site-text)]/82 sm:text-base">
            @if (shouldShowDescription && (artwork.texts.description[language] || artwork.texts.description.it)) {
              <p>{{ artwork.texts.description[language] || artwork.texts.description.it }}</p>
            }

            @if (shouldShowPoetic && (artwork.texts.poetic[language] || artwork.texts.poetic.it)) {
              <p class="italic text-[var(--site-muted)]">
                {{ artwork.texts.poetic[language] || artwork.texts.poetic.it }}
              </p>
            }
          </div>
        }
      </div>

      <aside class="artwork-info__aside rounded-[1.75rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-6">
        <dl class="space-y-4 text-sm text-[var(--site-text)]">
          <div>
            <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
              {{ language === 'it' ? 'Stato' : 'Status' }}
            </dt>
            <dd class="mt-3">
              <span class="artwork-info__status-pill inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]">
                {{ statusLabel }}
              </span>
            </dd>
          </div>

          <div>
            <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
              {{ language === 'it' ? 'Tecnica' : 'Technique' }}
            </dt>
            <dd class="mt-2">{{ techniqueSupportLabel }}</dd>
          </div>

          <div>
            <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
              {{ language === 'it' ? 'Dimensioni' : 'Dimensions' }}
            </dt>
            <dd class="mt-2">
              {{ artwork.dimensions.widthCm }} \xD7 {{ artwork.dimensions.heightCm }}
              @if (artwork.dimensions.depthCm) {
                <span> \xD7 {{ artwork.dimensions.depthCm }}</span>
              }
              cm
            </dd>
          </div>

          <div>
            <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
              {{ language === 'it' ? 'Anno' : 'Year' }}
            </dt>
            <dd class="mt-2">{{ artwork.year }}</dd>
          </div>

          @if (shouldShowPrice) {
            <div>
              <dt class="uppercase tracking-[0.18em] text-[var(--site-muted)]">
                {{ language === 'it' ? 'Prezzo' : 'Price' }}
              </dt>
              <dd class="mt-2">
                {{ artwork.price.amount | currency : artwork.price.currency : 'symbol' : '1.0-0' }}
              </dd>
            </div>
          }
        </dl>

        @if (auctionSummary && auctionPath) {
          <section class="artwork-info__auction-callout mt-8 rounded-[1.35rem] border border-[var(--site-border)] px-5 py-5">
            <p class="text-[11px] uppercase tracking-[0.24em] text-[var(--site-accent)]">
              {{ auctionLabel }}
            </p>
            <p class="mt-3 text-sm leading-7 text-[var(--site-text)]/84">
              {{ auctionMessage }}
            </p>
            <div class="mt-5 flex flex-wrap gap-3">
              <a
                [routerLink]="auctionPath"
                class="artwork-info__cta inline-flex rounded-full bg-[var(--site-text)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-white no-underline">
                {{ primaryCtaLabel }}
              </a>
              <a
                [href]="mailtoLink"
                class="artwork-info__secondary-cta inline-flex rounded-full border border-[var(--site-border)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[var(--site-text)] no-underline">
                {{ secondaryCtaLabel }}
              </a>
            </div>
          </section>
        } @else {
          <a
            [href]="mailtoLink"
            class="artwork-info__cta mt-8 inline-flex rounded-full bg-[var(--site-text)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-white no-underline">
            {{ primaryCtaLabel }}
          </a>
        }
      </aside>
    </div>
  </section>
}
`, styles: ["/* sito-artista/src/app/components/artwork-info/artwork-info.component.sass */\n:host {\n  display: block;\n}\n.artwork-info--product {\n  display: block;\n}\n.artwork-info__product-panel {\n  box-shadow: var(--site-shadow-soft);\n}\n.artwork-info__product-specs div {\n  padding-bottom: 0.15rem;\n}\n.artwork-info__layout {\n  position: relative;\n}\n@media (min-width: 1024px) {\n  .artwork-info__layout {\n    margin-top: -4.75rem;\n    align-items: start;\n  }\n}\n.artwork-info__body {\n  padding: 1.75rem 0 0;\n}\n.artwork-info__aside {\n  box-shadow: var(--site-shadow-soft);\n}\n.artwork-info__status-pill {\n  border: 1px solid rgba(159, 116, 82, 0.18);\n  background: rgba(159, 116, 82, 0.08);\n  color: var(--site-accent);\n}\n.artwork-info__product-price {\n  font-weight: 500;\n}\n.artwork-info__text-block--poetic {\n  border: 1px solid rgba(159, 116, 82, 0.12);\n  background: rgba(247, 241, 234, 0.72);\n}\n.artwork-info__auction-callout {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(245, 238, 228, 0.94),\n      rgba(255, 252, 248, 0.98));\n}\n.artwork-info__cta {\n  transition: transform 0.25s ease, background-color 0.25s ease;\n}\n.artwork-info__cta:hover {\n  transform: translateY(-2px);\n  background: var(--site-accent);\n}\n.artwork-info__secondary-cta {\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    color 0.25s ease;\n}\n.artwork-info__secondary-cta:hover {\n  transform: translateY(-2px);\n  border-color: rgba(159, 116, 82, 0.34);\n  color: var(--site-accent);\n}\n/*# sourceMappingURL=artwork-info.component.css.map */\n"] }]
  }], null, { artwork: [{
    type: Input,
    args: [{ required: true }]
  }], language: [{
    type: Input,
    args: [{ required: true }]
  }], artistEmail: [{
    type: Input,
    args: [{ required: true }]
  }], layout: [{
    type: Input
  }], auctionPath: [{
    type: Input
  }], auctionSummary: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtworkInfoComponent, { className: "ArtworkInfoComponent", filePath: "sito-artista/src/app/components/artwork-info/artwork-info.component.ts", lineNumber: 15 });
})();

// sito-artista/src/app/components/artwork-related/artwork-related.component.ts
function ArtworkRelatedComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-artwork-grid", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("artworks", ctx_r0.sameSeries)("language", ctx_r0.language)("title", ctx_r0.language === "it" ? "Dalla stessa serie" : "From the same series")("subtitle", ctx_r0.language === "it" ? "Una continuit\xE0 naturale per proseguire la lettura dell\u2019opera." : "A natural continuity to keep reading the artwork.")("emptyMessage", "");
  }
}
function ArtworkRelatedComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-artwork-grid", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("artworks", ctx_r0.availableArtworks)("language", ctx_r0.language)("title", ctx_r0.language === "it" ? "Continua tra le opere" : "Continue through the artworks")("subtitle", ctx_r0.language === "it" ? "Il percorso riprende dall\u2019archivio e prosegue nelle opere successive." : "The sequence resumes from the archive and continues through the following works.")("emptyMessage", "");
  }
}
var ArtworkRelatedComponent = class _ArtworkRelatedComponent {
  language;
  sameSeries = [];
  availableArtworks = [];
  static \u0275fac = function ArtworkRelatedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkRelatedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtworkRelatedComponent, selectors: [["app-artwork-related"]], inputs: { language: "language", sameSeries: "sameSeries", availableArtworks: "availableArtworks" }, decls: 2, vars: 2, consts: [[3, "artworks", "language", "title", "subtitle", "emptyMessage"], ["layout", "editorial", 3, "artworks", "language", "title", "subtitle", "emptyMessage"]], template: function ArtworkRelatedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ArtworkRelatedComponent_Conditional_0_Template, 1, 5, "app-artwork-grid", 0);
      \u0275\u0275conditionalCreate(1, ArtworkRelatedComponent_Conditional_1_Template, 1, 5, "app-artwork-grid", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.sameSeries.length > 0 ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.availableArtworks.length > 0 ? 1 : -1);
    }
  }, dependencies: [ArtworkGridComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=artwork-related.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkRelatedComponent, [{
    type: Component,
    args: [{ selector: "app-artwork-related", standalone: true, imports: [ArtworkGridComponent], template: `@if (sameSeries.length > 0) {
  <app-artwork-grid
    [artworks]="sameSeries"
    [language]="language"
    [title]="language === 'it' ? 'Dalla stessa serie' : 'From the same series'"
    [subtitle]="language === 'it' ? 'Una continuit\xE0 naturale per proseguire la lettura dell\u2019opera.' : 'A natural continuity to keep reading the artwork.'"
    [emptyMessage]="''" />
}

@if (availableArtworks.length > 0) {
  <app-artwork-grid
    [artworks]="availableArtworks"
    [language]="language"
    layout="editorial"
    [title]="language === 'it' ? 'Continua tra le opere' : 'Continue through the artworks'"
    [subtitle]="language === 'it' ? 'Il percorso riprende dall\u2019archivio e prosegue nelle opere successive.' : 'The sequence resumes from the archive and continues through the following works.'"
    [emptyMessage]="''" />
}
`, styles: ["/* sito-artista/src/app/components/artwork-related/artwork-related.component.sass */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=artwork-related.component.css.map */\n"] }]
  }], null, { language: [{
    type: Input,
    args: [{ required: true }]
  }], sameSeries: [{
    type: Input
  }], availableArtworks: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtworkRelatedComponent, { className: "ArtworkRelatedComponent", filePath: "sito-artista/src/app/components/artwork-related/artwork-related.component.ts", lineNumber: 13 });
})();

// sito-artista/src/app/pages/artwork-detail/artwork-detail.page.ts
function ArtworkDetailPage_Conditional_0_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-newsletter", 7);
  }
  if (rf & 2) {
    const page_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("siteConfig", page_r1.siteConfig)("language", page_r1.language)("source", "artwork")("title", page_r1.language === "it" ? "Rimani vicino alle opere" : "Stay close to the artworks")("subtitle", page_r1.language === "it" ? "Una lista privata per seguire nuovi lavori, disegni e pubblicazioni senza rumore commerciale." : "A private list to follow new works, drawings and publications without commercial noise.");
  }
}
function ArtworkDetailPage_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 0)(1, "section", 2)(2, "div", 3);
    \u0275\u0275element(3, "app-artwork-gallery", 4)(4, "app-artwork-info", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "app-artwork-related", 6);
    \u0275\u0275conditionalCreate(6, ArtworkDetailPage_Conditional_0_Conditional_0_Conditional_6_Template, 1, 5, "app-newsletter", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r1 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275property("mainImage", page_r1.artwork.images.main)("galleryItems", page_r1.artwork.images.gallery)("video", page_r1.artwork.video)("language", page_r1.language)("variant", "product")("showHeader", false);
    \u0275\u0275advance();
    \u0275\u0275property("artwork", page_r1.artwork)("language", page_r1.language)("artistEmail", page_r1.siteConfig.email)("auctionSummary", page_r1.artwork.auction)("auctionPath", page_r1.auctionPath)("layout", "product");
    \u0275\u0275advance();
    \u0275\u0275property("language", page_r1.language)("sameSeries", page_r1.sameSeries)("availableArtworks", page_r1.availableArtworks);
    \u0275\u0275advance();
    \u0275\u0275conditional(page_r1.shouldShowNewsletter ? 6 : -1);
  }
}
function ArtworkDetailPage_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "h1", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.route.snapshot.data["language"] === "it" ? "Opera non trovata" : "Artwork not found");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.route.snapshot.data["language"] === "it" ? "/it/opere" : "/en/artworks");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.route.snapshot.data["language"] === "it" ? "Torna alle opere" : "Back to artworks", " ");
  }
}
function ArtworkDetailPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ArtworkDetailPage_Conditional_0_Conditional_0_Template, 7, 16, "article", 0)(1, ArtworkDetailPage_Conditional_0_Conditional_1_Template, 5, 3, "section", 1);
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275conditional((tmp_2_0 = ctx) ? 0 : 1, tmp_2_0);
  }
}
var ArtworkDetailPage = class _ArtworkDetailPage {
  artworkService = inject(ArtworkService);
  siteService = inject(SiteService);
  languageService = inject(LanguageService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  vm$ = this.route.paramMap.pipe(switchMap((params) => {
    const slug = params.get("slug") ?? "";
    return combineLatest([
      this.siteService.getSiteConfig(),
      this.artworkService.getArtworkBySlug(slug),
      this.artworkService.getArtworks()
    ]);
  }), map(([siteConfig, artwork, artworks]) => {
    if (!artwork) {
      return null;
    }
    const language = this.languageService.getRouteLanguage(this.route.snapshot);
    const archivePaintings = artworks.filter((candidate) => candidate.type === "painting" || candidate.type === "other");
    const currentArchiveIndex = archivePaintings.findIndex((candidate) => candidate.id === artwork.id);
    const firstSeriesTag = artwork.tags.find((tag) => tag.type === "series");
    const sameSeries = artworks.filter((candidate) => candidate.id !== artwork.id).filter((candidate) => !!firstSeriesTag && candidate.tags.some((tag) => tag.slug === firstSeriesTag.slug)).slice(0, 3);
    const availableArtworks = currentArchiveIndex >= 0 ? [
      ...archivePaintings.slice(currentArchiveIndex + 1),
      ...archivePaintings.slice(0, currentArchiveIndex)
    ] : archivePaintings.filter((candidate) => candidate.id !== artwork.id);
    return {
      siteConfig,
      artwork,
      sameSeries,
      availableArtworks,
      language,
      auctionPath: artwork.auction ? this.languageService.buildLocalizedPath(language, "auction-detail", {
        slug: artwork.auction.slug
      }) : null,
      contactsPath: this.languageService.buildLocalizedPath(language, "contacts"),
      shouldShowNewsletter: true
    };
  }), tap((vm) => {
    if (!vm) {
      this.seoService.clearStructuredData("artwork-jsonld");
      return;
    }
    this.seoService.applyLocalizedAlternates(vm.siteConfig.domain, this.route.snapshot, { slug: vm.artwork.slug }, vm.siteConfig.defaultLanguage);
    this.seoService.applyPageMetadata({
      title: vm.artwork.seo.title[vm.language] || vm.artwork.seo.title.it,
      description: vm.artwork.seo.description[vm.language] || vm.artwork.seo.description.it,
      url: `${vm.siteConfig.domain}${this.languageService.buildLocalizedPath(vm.language, "artwork-detail", {
        slug: vm.artwork.slug
      })}`,
      image: `${vm.siteConfig.domain}${vm.artwork.images.main.sources.large}`,
      siteName: vm.siteConfig.artistName,
      language: vm.language,
      type: "article"
    });
    this.seoService.applyStructuredData("artwork-jsonld", {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: vm.artwork.title[vm.language] || vm.artwork.title.it,
      description: vm.artwork.texts.description[vm.language] || vm.artwork.texts.description.it || void 0,
      image: `${vm.siteConfig.domain}${vm.artwork.images.main.sources.large}`,
      url: `${vm.siteConfig.domain}${this.languageService.buildLocalizedPath(vm.language, "artwork-detail", {
        slug: vm.artwork.slug
      })}`,
      creator: {
        "@type": "Person",
        name: vm.siteConfig.artistName
      },
      artMedium: vm.artwork.technique[vm.language] || vm.artwork.technique.it,
      artworkSurface: vm.artwork.support[vm.language] || vm.artwork.support.it,
      dateCreated: vm.artwork.year || void 0,
      width: vm.artwork.dimensions.widthCm ? {
        "@type": "QuantitativeValue",
        value: vm.artwork.dimensions.widthCm,
        unitCode: "CMT"
      } : void 0,
      height: vm.artwork.dimensions.heightCm ? {
        "@type": "QuantitativeValue",
        value: vm.artwork.dimensions.heightCm,
        unitCode: "CMT"
      } : void 0
    });
  }));
  static \u0275fac = function ArtworkDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtworkDetailPage, selectors: [["app-artwork-detail-page"]], decls: 2, vars: 3, consts: [[1, "artwork-detail-page"], [1, "mx-auto", "max-w-5xl", "px-5", "py-28", "text-center", "sm:px-8"], [1, "artwork-detail-page__atf", "mx-auto", "max-w-[96rem]", "px-5", "pb-8", "pt-10", "sm:px-8", "lg:px-12"], [1, "artwork-detail-page__atf-layout", "grid", "gap-4", "lg:items-start"], [3, "mainImage", "galleryItems", "video", "language", "variant", "showHeader"], [3, "artwork", "language", "artistEmail", "auctionSummary", "auctionPath", "layout"], [3, "language", "sameSeries", "availableArtworks"], [3, "siteConfig", "language", "source", "title", "subtitle"], [1, "text-4xl", "text-[var(--site-text)]"], [1, "mt-6", "inline-block", "text-sm", "uppercase", "tracking-[0.18em]", "text-[var(--site-muted)]", "no-underline", 3, "routerLink"]], template: function ArtworkDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ArtworkDetailPage_Conditional_0_Template, 2, 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [
    RouterLink,
    ArtworkInfoComponent,
    ArtworkGalleryComponent,
    ArtworkRelatedComponent,
    NewsletterComponent,
    AsyncPipe
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.artwork-detail-page[_ngcontent-%COMP%] {\n  position: relative;\n}\n.artwork-detail-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 34rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(232, 220, 203, 0.38),\n      transparent);\n  pointer-events: none;\n}\n.artwork-detail-page__atf[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n}\n.artwork-detail-page__atf-layout[_ngcontent-%COMP%] {\n  align-items: start;\n}\n@media (min-width: 1024px) {\n  .artwork-detail-page__atf-layout[_ngcontent-%COMP%] {\n    justify-content: start;\n    column-gap: 1rem;\n    grid-template-columns: fit-content(54rem) minmax(22rem, 34rem);\n  }\n}\n/*# sourceMappingURL=artwork-detail.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkDetailPage, [{
    type: Component,
    args: [{ selector: "app-artwork-detail-page", standalone: true, imports: [
      AsyncPipe,
      RouterLink,
      ArtworkInfoComponent,
      ArtworkGalleryComponent,
      ArtworkRelatedComponent,
      NewsletterComponent
    ], template: `@if (vm$ | async; as vm) {
  @if (vm; as page) {
    <article class="artwork-detail-page">
      <section class="artwork-detail-page__atf mx-auto max-w-[96rem] px-5 pb-8 pt-10 sm:px-8 lg:px-12">
        <div class="artwork-detail-page__atf-layout grid gap-4 lg:items-start">
          <app-artwork-gallery
            [mainImage]="page.artwork.images.main"
            [galleryItems]="page.artwork.images.gallery"
            [video]="page.artwork.video"
            [language]="page.language"
            [variant]="'product'"
            [showHeader]="false" />

          <app-artwork-info
            [artwork]="page.artwork"
            [language]="page.language"
            [artistEmail]="page.siteConfig.email"
            [auctionSummary]="page.artwork.auction"
            [auctionPath]="page.auctionPath"
            [layout]="'product'" />
        </div>
      </section>

      <app-artwork-related
        [language]="page.language"
        [sameSeries]="page.sameSeries"
        [availableArtworks]="page.availableArtworks" />

      @if (page.shouldShowNewsletter) {
        <app-newsletter
          [siteConfig]="page.siteConfig"
          [language]="page.language"
          [source]="'artwork'"
          [title]="page.language === 'it' ? 'Rimani vicino alle opere' : 'Stay close to the artworks'"
          [subtitle]="page.language === 'it' ? 'Una lista privata per seguire nuovi lavori, disegni e pubblicazioni senza rumore commerciale.' : 'A private list to follow new works, drawings and publications without commercial noise.'" />
      }
    </article>
  } @else {
    <section class="mx-auto max-w-5xl px-5 py-28 text-center sm:px-8">
      <h1 class="text-4xl text-[var(--site-text)]">{{ route.snapshot.data['language'] === 'it' ? 'Opera non trovata' : 'Artwork not found' }}</h1>
      <a [routerLink]="route.snapshot.data['language'] === 'it' ? '/it/opere' : '/en/artworks'" class="mt-6 inline-block text-sm uppercase tracking-[0.18em] text-[var(--site-muted)] no-underline">
        {{ route.snapshot.data['language'] === 'it' ? 'Torna alle opere' : 'Back to artworks' }}
      </a>
    </section>
  }
}
`, styles: ['/* sito-artista/src/app/pages/artwork-detail/artwork-detail.page.sass */\n:host {\n  display: block;\n}\n.artwork-detail-page {\n  position: relative;\n}\n.artwork-detail-page::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 34rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(232, 220, 203, 0.38),\n      transparent);\n  pointer-events: none;\n}\n.artwork-detail-page__atf {\n  position: relative;\n  z-index: 0;\n}\n.artwork-detail-page__atf-layout {\n  align-items: start;\n}\n@media (min-width: 1024px) {\n  .artwork-detail-page__atf-layout {\n    justify-content: start;\n    column-gap: 1rem;\n    grid-template-columns: fit-content(54rem) minmax(22rem, 34rem);\n  }\n}\n/*# sourceMappingURL=artwork-detail.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtworkDetailPage, { className: "ArtworkDetailPage", filePath: "sito-artista/src/app/pages/artwork-detail/artwork-detail.page.ts", lineNumber: 28 });
})();
export {
  ArtworkDetailPage
};
//# sourceMappingURL=chunk-IPKX4JR4.js.map
