import {
  ArtworkCardComponent
} from "./chunk-B2JSZP5S.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/components/artwork-grid/artwork-grid.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ArtworkGridComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function ArtworkGridComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function ArtworkGridComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, ArtworkGridComponent_Conditional_1_Conditional_1_Template, 2, 1, "h2", 3);
    \u0275\u0275conditionalCreate(2, ArtworkGridComponent_Conditional_1_Conditional_2_Template, 2, 1, "p", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.title ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.subtitle ? 2 : -1);
  }
}
function ArtworkGridComponent_Conditional_2_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-artwork-card", 7);
  }
  if (rf & 2) {
    const artwork_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("artwork", artwork_r2)("language", ctx_r0.language)("showStatus", ctx_r0.showStatus);
  }
}
function ArtworkGridComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ArtworkGridComponent_Conditional_2_Conditional_0_For_2_Template, 1, 3, "app-artwork-card", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.artworks);
  }
}
function ArtworkGridComponent_Conditional_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-artwork-card", 8);
  }
  if (rf & 2) {
    const artwork_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("artwork", artwork_r3)("language", ctx_r0.language)("showStatus", ctx_r0.showStatus);
  }
}
function ArtworkGridComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, ArtworkGridComponent_Conditional_2_Conditional_1_For_2_Template, 1, 3, "app-artwork-card", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.artworks);
  }
}
function ArtworkGridComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ArtworkGridComponent_Conditional_2_Conditional_0_Template, 3, 0, "div", 5)(1, ArtworkGridComponent_Conditional_2_Conditional_1_Template, 3, 0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.layout === "editorial" ? 0 : 1);
  }
}
function ArtworkGridComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessage, " ");
  }
}
var ArtworkGridComponent = class _ArtworkGridComponent {
  artworks = [];
  language = "it";
  title = "";
  subtitle = "";
  showStatus = true;
  layout = "grid";
  spacing = "normal";
  emptyMessage = "Nessuna opera disponibile.";
  static \u0275fac = function ArtworkGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtworkGridComponent, selectors: [["app-artwork-grid"]], inputs: { artworks: "artworks", language: "language", title: "title", subtitle: "subtitle", showStatus: "showStatus", layout: "layout", spacing: "spacing", emptyMessage: "emptyMessage" }, decls: 4, vars: 4, consts: [[1, "artwork-grid", "mx-auto", "max-w-7xl", "px-5", "py-14", "sm:px-8", "lg:px-12"], [1, "artwork-grid__header", "mb-8", "max-w-2xl"], [1, "rounded-[1.75rem]", "border", "border-dashed", "border-[var(--site-border)]", "px-6", "py-10", "text-sm", "text-[var(--site-muted)]"], [1, "text-3xl", "leading-tight", "text-[var(--site-text)]", "sm:text-4xl"], [1, "mt-3", "text-sm", "leading-7", "text-[var(--site-muted)]", "sm:text-base"], [1, "artwork-grid__items", "artwork-grid__items--editorial", "grid", "gap-8"], [1, "artwork-grid__items", "grid", "gap-5", "md:grid-cols-2", "xl:grid-cols-3"], ["variant", "editorial", 3, "artwork", "language", "showStatus"], ["variant", "grid", 3, "artwork", "language", "showStatus"]], template: function ArtworkGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, ArtworkGridComponent_Conditional_1_Template, 3, 2, "div", 1);
      \u0275\u0275conditionalCreate(2, ArtworkGridComponent_Conditional_2_Template, 2, 1)(3, ArtworkGridComponent_Conditional_3_Template, 2, 1, "p", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("artwork-grid--tight-top", ctx.spacing === "tight-top");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.title || ctx.subtitle ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.artworks.length > 0 ? 2 : 3);
    }
  }, dependencies: [ArtworkCardComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.artwork-grid--tight-top[_ngcontent-%COMP%] {\n  padding-top: 1.75rem;\n}\n@media (min-width: 640px) {\n  .artwork-grid--tight-top[_ngcontent-%COMP%] {\n    padding-top: 2.25rem;\n  }\n}\n.artwork-grid__header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.artwork-grid__header[_ngcontent-%COMP%]::before {\n  content: "";\n  display: block;\n  width: 3.5rem;\n  height: 1px;\n  margin-bottom: 1.25rem;\n  background: rgba(32, 27, 22, 0.2);\n}\n.artwork-grid__items--editorial[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n}\n/*# sourceMappingURL=artwork-grid.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkGridComponent, [{
    type: Component,
    args: [{ selector: "app-artwork-grid", standalone: true, imports: [ArtworkCardComponent], template: `<section
  class="artwork-grid mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12"
  [class.artwork-grid--tight-top]="spacing === 'tight-top'">
  @if (title || subtitle) {
    <div class="artwork-grid__header mb-8 max-w-2xl">
      @if (title) {
        <h2 class="text-3xl leading-tight text-[var(--site-text)] sm:text-4xl">{{ title }}</h2>
      }

      @if (subtitle) {
        <p class="mt-3 text-sm leading-7 text-[var(--site-muted)] sm:text-base">{{ subtitle }}</p>
      }
    </div>
  }

  @if (artworks.length > 0) {
    @if (layout === 'editorial') {
      <div class="artwork-grid__items artwork-grid__items--editorial grid gap-8">
        @for (artwork of artworks; track artwork.id) {
          <app-artwork-card
            [artwork]="artwork"
            [language]="language"
            [showStatus]="showStatus"
            variant="editorial" />
        }
      </div>
    } @else {
      <div class="artwork-grid__items grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        @for (artwork of artworks; track artwork.id) {
          <app-artwork-card
            [artwork]="artwork"
            [language]="language"
            [showStatus]="showStatus"
            variant="grid" />
        }
      </div>
    }
  } @else {
    <p class="rounded-[1.75rem] border border-dashed border-[var(--site-border)] px-6 py-10 text-sm text-[var(--site-muted)]">
      {{ emptyMessage }}
    </p>
  }
</section>
`, styles: ['/* sito-artista/src/app/components/artwork-grid/artwork-grid.component.sass */\n:host {\n  display: block;\n}\n.artwork-grid--tight-top {\n  padding-top: 1.75rem;\n}\n@media (min-width: 640px) {\n  .artwork-grid--tight-top {\n    padding-top: 2.25rem;\n  }\n}\n.artwork-grid__header {\n  position: relative;\n}\n.artwork-grid__header::before {\n  content: "";\n  display: block;\n  width: 3.5rem;\n  height: 1px;\n  margin-bottom: 1.25rem;\n  background: rgba(32, 27, 22, 0.2);\n}\n.artwork-grid__items--editorial {\n  grid-template-columns: minmax(0, 1fr);\n}\n/*# sourceMappingURL=artwork-grid.component.css.map */\n'] }]
  }], null, { artworks: [{
    type: Input,
    args: [{ required: true }]
  }], language: [{
    type: Input
  }], title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], showStatus: [{
    type: Input
  }], layout: [{
    type: Input
  }], spacing: [{
    type: Input
  }], emptyMessage: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtworkGridComponent, { className: "ArtworkGridComponent", filePath: "sito-artista/src/app/components/artwork-grid/artwork-grid.component.ts", lineNumber: 12 });
})();

export {
  ArtworkGridComponent
};
//# sourceMappingURL=chunk-VEVII2HT.js.map
