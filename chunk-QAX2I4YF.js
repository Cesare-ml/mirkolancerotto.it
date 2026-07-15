import {
  Component,
  CurrencyPipe,
  Input,
  Pipe,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-D22KB4XF.js";

// sito-artista/src/app/pipes/localized-text.pipe.ts
var LocalizedTextPipe = class _LocalizedTextPipe {
  transform(value, language = "it") {
    if (!value) {
      return "";
    }
    return value[language] || value.it || "";
  }
  static \u0275fac = function LocalizedTextPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedTextPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "localizedText", type: _LocalizedTextPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedTextPipe, [{
    type: Pipe,
    args: [{
      name: "localizedText",
      standalone: true
    }]
  }], null, null);
})();

// sito-artista/src/app/components/artwork-card/artwork-card.component.ts
function ArtworkCardComponent_Conditional_1_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("artwork-card__status--available", ctx_r0.isAvailable)("artwork-card__status--sold", ctx_r0.isSold);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.artwork.status), " ");
  }
}
function ArtworkCardComponent_Conditional_1_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(2, 1, ctx_r0.artwork.price.amount, ctx_r0.artwork.price.currency, "symbol", "1.0-0"), " ");
  }
}
function ArtworkCardComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, ArtworkCardComponent_Conditional_1_Conditional_5_Conditional_1_Template, 2, 5, "p", 10);
    \u0275\u0275conditionalCreate(2, ArtworkCardComponent_Conditional_1_Conditional_5_Conditional_2_Template, 3, 6, "p", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showStatus ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.artwork.price.visible && ctx_r0.artwork.price.amount ? 2 : -1);
  }
}
function ArtworkCardComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
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
function ArtworkCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1)(1, "div", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275pipe(3, "localizedText");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275conditionalCreate(5, ArtworkCardComponent_Conditional_1_Conditional_5_Template, 3, 2, "div", 6);
    \u0275\u0275elementStart(6, "h3", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "localizedText");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "localizedText");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "localizedText");
    \u0275\u0275conditionalCreate(15, ArtworkCardComponent_Conditional_1_Conditional_15_Template, 2, 1, "span");
    \u0275\u0275text(16, " cm ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.artworkLink);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.artwork.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind2(3, 11, ctx_r0.artwork.images.main.alt, ctx_r0.language));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.shouldShowMetaRow ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 14, ctx_r0.artwork.title, ctx_r0.language), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.artwork.year, " \xB7 ", \u0275\u0275pipeBind2(11, 17, ctx_r0.artwork.technique, ctx_r0.language), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(14, 20, ctx_r0.artwork.support, ctx_r0.language), " \xB7 ", ctx_r0.artwork.dimensions.widthCm, " \xD7 ", ctx_r0.artwork.dimensions.heightCm, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.artwork.dimensions.depthCm ? 15 : -1);
  }
}
function ArtworkCardComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.artwork.status), " ");
  }
}
function ArtworkCardComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
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
function ArtworkCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275pipe(3, "localizedText");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275conditionalCreate(5, ArtworkCardComponent_Conditional_2_Conditional_5_Template, 2, 1, "p", 16);
    \u0275\u0275elementStart(6, "h3", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "localizedText");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 18);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "localizedText");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ArtworkCardComponent_Conditional_2_Conditional_12_Template, 3, 6, "p", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.artworkLink);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.artwork.images.main.sources.large, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind2(3, 8, ctx_r0.artwork.images.main.alt, ctx_r0.language));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.showStatus ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 11, ctx_r0.artwork.title, ctx_r0.language), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.artwork.year, " \xB7 ", \u0275\u0275pipeBind2(11, 14, ctx_r0.artwork.technique, ctx_r0.language), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.artwork.price.visible && ctx_r0.artwork.price.amount ? 12 : -1);
  }
}
var ArtworkCardComponent = class _ArtworkCardComponent {
  artwork;
  language = "it";
  showStatus = true;
  variant = "grid";
  get artworkLink() {
    return this.language === "it" ? ["/it/opere", this.artwork.slug] : ["/en/artworks", this.artwork.slug];
  }
  getStatusLabel(status) {
    const italianLabels = {
      available: "Disponibile",
      sold: "Venduta",
      reserved: "Riservata",
      private_collection: "Collezione privata",
      not_available: "Non disponibile"
    };
    const englishLabels = {
      available: "Available",
      sold: "Sold",
      reserved: "Reserved",
      private_collection: "Private Collection",
      not_available: "Not Available"
    };
    return this.language === "it" ? italianLabels[status] : englishLabels[status];
  }
  get isAvailable() {
    return this.artwork.status === "available";
  }
  get isSold() {
    return this.artwork.status === "sold";
  }
  get shouldShowMetaRow() {
    return this.showStatus || Boolean(this.artwork.price.visible && this.artwork.price.amount);
  }
  static \u0275fac = function ArtworkCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtworkCardComponent, selectors: [["app-artwork-card"]], inputs: { artwork: "artwork", language: "language", showStatus: "showStatus", variant: "variant" }, decls: 3, vars: 1, consts: [[1, "artwork-card", "group"], [1, "artwork-card__link", "artwork-card__link--editorial", "block", "no-underline", 3, "routerLink"], [1, "artwork-card__link", "block", "no-underline", 3, "routerLink"], [1, "artwork-card__media", "artwork-card__media--editorial"], ["loading", "lazy", 1, "artwork-card__image--editorial", "transition", "duration-500", "group-hover:scale-[1.01]", 3, "src", "alt"], [1, "artwork-card__content", "artwork-card__content--editorial"], [1, "artwork-card__meta-row", "mb-4", "flex", "flex-wrap", "items-center", "gap-3"], [1, "text-3xl", "leading-tight", "text-[var(--site-text)]"], [1, "mt-2", "text-xs", "uppercase", "tracking-[0.18em]", "text-[var(--site-muted)]"], [1, "mt-6", "text-sm", "leading-8", "text-[var(--site-text)]/76"], [1, "artwork-card__status", "artwork-card__status--editorial", "text-[11px]", "uppercase", "tracking-[0.25em]", 3, "artwork-card__status--available", "artwork-card__status--sold"], [1, "artwork-card__price", "artwork-card__price--editorial", "text-sm", "text-[var(--site-text)]"], [1, "artwork-card__status", "artwork-card__status--editorial", "text-[11px]", "uppercase", "tracking-[0.25em]"], [1, "artwork-card__media", "aspect-[4/5]", "overflow-hidden"], ["loading", "lazy", 1, "h-full", "w-full", "object-cover", "transition", "duration-500", "group-hover:scale-[1.04]", 3, "src", "alt"], [1, "artwork-card__content", "p-5", "sm:p-6"], [1, "artwork-card__status", "mb-3", "text-[11px]", "uppercase", "tracking-[0.25em]", "text-[var(--site-muted)]"], [1, "text-2xl", "leading-tight", "text-[var(--site-text)]"], [1, "mt-2", "text-sm", "uppercase", "tracking-[0.18em]", "text-[var(--site-muted)]"], [1, "artwork-card__price", "mt-4", "text-sm", "text-[var(--site-text)]"]], template: function ArtworkCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "article", 0);
      \u0275\u0275conditionalCreate(1, ArtworkCardComponent_Conditional_1_Template, 17, 23, "a", 1)(2, ArtworkCardComponent_Conditional_2_Template, 13, 17, "a", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.variant === "editorial" ? 1 : 2);
    }
  }, dependencies: [RouterLink, CurrencyPipe, LocalizedTextPipe], styles: ["\n\n.artwork-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.artwork-card__link[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  border: 1px solid var(--site-border);\n  border-radius: 1.75rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 250, 244, 0.96),\n      rgb(255, 250, 244));\n  box-shadow: var(--site-shadow-soft);\n  transition:\n    transform 0.28s ease,\n    border-color 0.28s ease,\n    box-shadow 0.28s ease;\n}\n.artwork-card__link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(159, 116, 82, 0.28);\n  box-shadow: var(--site-shadow-strong);\n}\n.artwork-card__link--editorial[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: visible;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  transition: transform 0.28s ease;\n  max-width: 100%;\n}\n.artwork-card__link--editorial[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: transparent;\n  box-shadow: none;\n}\n.artwork-card__media[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #efe3d3,\n      #e5d4be);\n}\n.artwork-card__media--editorial[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0;\n  background: transparent;\n  overflow: visible;\n  border-radius: 0;\n}\n.artwork-card__image--editorial[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: min(72vh, 56rem);\n  min-height: 0;\n  object-fit: contain;\n  margin: 0;\n  border-radius: 0.65rem;\n  box-shadow: 0 10px 26px rgba(86, 58, 34, 0.05);\n  background: transparent;\n}\n.artwork-card__content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.artwork-card__content--editorial[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-top: 1.15rem;\n  padding: 1rem 0 1.8rem;\n  border-top: 1px solid rgba(32, 27, 22, 0.12);\n}\n@media (min-width: 640px) {\n  .artwork-card__content--editorial[_ngcontent-%COMP%] {\n    margin-top: 1.3rem;\n    padding: 1.05rem 0 2.25rem;\n  }\n}\n.artwork-card__meta-row[_ngcontent-%COMP%] {\n  min-height: 1.9rem;\n}\n.artwork-card__status[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n}\n.artwork-card__status--editorial[_ngcontent-%COMP%] {\n  padding-top: 0;\n  border: 1px solid rgba(32, 27, 22, 0.1);\n  border-radius: 999px;\n  padding: 0.55rem 0.8rem 0.48rem;\n  color: var(--site-muted);\n  background: rgba(255, 251, 246, 0.9);\n}\n.artwork-card__status--available[_ngcontent-%COMP%] {\n  border-color: rgba(86, 125, 92, 0.22);\n  background: rgba(232, 241, 234, 0.92);\n  color: #52755a;\n}\n.artwork-card__status--sold[_ngcontent-%COMP%] {\n  border-color: rgba(144, 102, 84, 0.2);\n  background: rgba(244, 235, 228, 0.92);\n  color: #8b6454;\n}\n.artwork-card__price[_ngcontent-%COMP%] {\n  color: var(--site-accent);\n}\n.artwork-card__price--editorial[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=artwork-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkCardComponent, [{
    type: Component,
    args: [{ selector: "app-artwork-card", standalone: true, imports: [CurrencyPipe, RouterLink, LocalizedTextPipe], template: `<article class="artwork-card group">
  @if (variant === 'editorial') {
    <a [routerLink]="artworkLink" class="artwork-card__link artwork-card__link--editorial block no-underline">
      <div class="artwork-card__media artwork-card__media--editorial">
        <img
          class="artwork-card__image--editorial transition duration-500 group-hover:scale-[1.01]"
          [src]="artwork.images.main.sources.large"
          [alt]="artwork.images.main.alt | localizedText : language"
          loading="lazy" />
      </div>

      <div class="artwork-card__content artwork-card__content--editorial">
        @if (shouldShowMetaRow) {
          <div class="artwork-card__meta-row mb-4 flex flex-wrap items-center gap-3">
            @if (showStatus) {
              <p
                class="artwork-card__status artwork-card__status--editorial text-[11px] uppercase tracking-[0.25em]"
                [class.artwork-card__status--available]="isAvailable"
                [class.artwork-card__status--sold]="isSold">
                {{ getStatusLabel(artwork.status) }}
              </p>
            }

            @if (artwork.price.visible && artwork.price.amount) {
              <p class="artwork-card__price artwork-card__price--editorial text-sm text-[var(--site-text)]">
                {{ artwork.price.amount | currency : artwork.price.currency : 'symbol' : '1.0-0' }}
              </p>
            }
          </div>
        }

        <h3 class="text-3xl leading-tight text-[var(--site-text)]">
          {{ artwork.title | localizedText : language }}
        </h3>

        <p class="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--site-muted)]">
          {{ artwork.year }} \xB7 {{ artwork.technique | localizedText : language }}
        </p>

        <p class="mt-6 text-sm leading-8 text-[var(--site-text)]/76">
          {{ artwork.support | localizedText : language }} \xB7
          {{ artwork.dimensions.widthCm }} \xD7 {{ artwork.dimensions.heightCm }}
          @if (artwork.dimensions.depthCm) {
            <span> \xD7 {{ artwork.dimensions.depthCm }}</span>
          }
          cm
        </p>
      </div>
    </a>
  } @else {
    <a [routerLink]="artworkLink" class="artwork-card__link block no-underline">
      <div class="artwork-card__media aspect-[4/5] overflow-hidden">
        <img
          class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          [src]="artwork.images.main.sources.large"
          [alt]="artwork.images.main.alt | localizedText : language"
          loading="lazy" />
      </div>

      <div class="artwork-card__content p-5 sm:p-6">
        @if (showStatus) {
          <p class="artwork-card__status mb-3 text-[11px] uppercase tracking-[0.25em] text-[var(--site-muted)]">
            {{ getStatusLabel(artwork.status) }}
          </p>
        }

        <h3 class="text-2xl leading-tight text-[var(--site-text)]">
          {{ artwork.title | localizedText : language }}
        </h3>

        <p class="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--site-muted)]">
          {{ artwork.year }} \xB7 {{ artwork.technique | localizedText : language }}
        </p>

        @if (artwork.price.visible && artwork.price.amount) {
          <p class="artwork-card__price mt-4 text-sm text-[var(--site-text)]">
            {{ artwork.price.amount | currency : artwork.price.currency : 'symbol' : '1.0-0' }}
          </p>
        }
      </div>
    </a>
  }
</article>
`, styles: ["/* sito-artista/src/app/components/artwork-card/artwork-card.component.sass */\n.artwork-card {\n  position: relative;\n}\n.artwork-card__link {\n  display: block;\n  overflow: hidden;\n  border: 1px solid var(--site-border);\n  border-radius: 1.75rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 250, 244, 0.96),\n      rgb(255, 250, 244));\n  box-shadow: var(--site-shadow-soft);\n  transition:\n    transform 0.28s ease,\n    border-color 0.28s ease,\n    box-shadow 0.28s ease;\n}\n.artwork-card__link:hover {\n  transform: translateY(-4px);\n  border-color: rgba(159, 116, 82, 0.28);\n  box-shadow: var(--site-shadow-strong);\n}\n.artwork-card__link--editorial {\n  display: inline-block;\n  overflow: visible;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  transition: transform 0.28s ease;\n  max-width: 100%;\n}\n.artwork-card__link--editorial:hover {\n  transform: translateY(-2px);\n  border-color: transparent;\n  box-shadow: none;\n}\n.artwork-card__media {\n  background:\n    linear-gradient(\n      180deg,\n      #efe3d3,\n      #e5d4be);\n}\n.artwork-card__media--editorial {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0;\n  background: transparent;\n  overflow: visible;\n  border-radius: 0;\n}\n.artwork-card__image--editorial {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: min(72vh, 56rem);\n  min-height: 0;\n  object-fit: contain;\n  margin: 0;\n  border-radius: 0.65rem;\n  box-shadow: 0 10px 26px rgba(86, 58, 34, 0.05);\n  background: transparent;\n}\n.artwork-card__content {\n  position: relative;\n}\n.artwork-card__content--editorial {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-top: 1.15rem;\n  padding: 1rem 0 1.8rem;\n  border-top: 1px solid rgba(32, 27, 22, 0.12);\n}\n@media (min-width: 640px) {\n  .artwork-card__content--editorial {\n    margin-top: 1.3rem;\n    padding: 1.05rem 0 2.25rem;\n  }\n}\n.artwork-card__meta-row {\n  min-height: 1.9rem;\n}\n.artwork-card__status {\n  padding-top: 0.75rem;\n}\n.artwork-card__status--editorial {\n  padding-top: 0;\n  border: 1px solid rgba(32, 27, 22, 0.1);\n  border-radius: 999px;\n  padding: 0.55rem 0.8rem 0.48rem;\n  color: var(--site-muted);\n  background: rgba(255, 251, 246, 0.9);\n}\n.artwork-card__status--available {\n  border-color: rgba(86, 125, 92, 0.22);\n  background: rgba(232, 241, 234, 0.92);\n  color: #52755a;\n}\n.artwork-card__status--sold {\n  border-color: rgba(144, 102, 84, 0.2);\n  background: rgba(244, 235, 228, 0.92);\n  color: #8b6454;\n}\n.artwork-card__price {\n  color: var(--site-accent);\n}\n.artwork-card__price--editorial {\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=artwork-card.component.css.map */\n"] }]
  }], null, { artwork: [{
    type: Input,
    args: [{ required: true }]
  }], language: [{
    type: Input
  }], showStatus: [{
    type: Input
  }], variant: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtworkCardComponent, { className: "ArtworkCardComponent", filePath: "sito-artista/src/app/components/artwork-card/artwork-card.component.ts", lineNumber: 14 });
})();

export {
  ArtworkCardComponent
};
//# sourceMappingURL=chunk-QAX2I4YF.js.map
