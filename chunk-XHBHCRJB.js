import {
  Component,
  DestroyRef,
  Input,
  Observable,
  assertInInjectionContext,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-D22KB4XF.js";

// sito-artista/src/app/components/social-links/social-links.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function SocialLinksComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
function SocialLinksComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 3);
    \u0275\u0275domElement(2, "path", 4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, SocialLinksComponent_For_2_Conditional_3_Template, 2, 1, "span", 5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("social-link--compact", ctx_r1.compact);
    \u0275\u0275domProperty("href", link_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", link_r1.label)("title", link_r1.label);
    \u0275\u0275advance();
    \u0275\u0275attribute("viewBox", link_r1.viewBox);
    \u0275\u0275advance();
    \u0275\u0275attribute("d", link_r1.path);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.compact ? 3 : -1);
  }
}
var SocialLinksComponent = class _SocialLinksComponent {
  socialLinks;
  compact = false;
  monochrome = false;
  get links() {
    const links = [
      {
        key: "instagram",
        label: "Instagram",
        href: this.socialLinks.instagram,
        viewBox: "0 0 24 24",
        path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.9 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.3A5.7 5.7 0 1 1 6.3 12 5.7 5.7 0 0 1 12 6.3Zm0 1.8A3.9 3.9 0 1 0 15.9 12 3.9 3.9 0 0 0 12 8.1Z"
      },
      {
        key: "tiktok",
        label: "TikTok",
        href: this.socialLinks.tiktok,
        viewBox: "0 0 24 24",
        path: "M14.25 2c.35 2.98 2.1 4.78 4.9 4.96v2.62a8.05 8.05 0 0 1-3.1-.83v6.43a6.19 6.19 0 1 1-6.18-6.15c.33 0 .63.03.93.08v2.7a3.56 3.56 0 1 0 2.63 3.42V2h2.82Z"
      },
      {
        key: "youtube",
        label: "YouTube",
        href: this.socialLinks.youtube,
        viewBox: "0 0 24 24",
        path: "M21.58 7.19a2.99 2.99 0 0 0-2.1-2.12C17.63 4.56 12 4.56 12 4.56s-5.63 0-7.48.51A2.99 2.99 0 0 0 2.42 7.2C1.91 9.05 1.91 12 1.91 12s0 2.95.51 4.8a2.99 2.99 0 0 0 2.1 2.12c1.85.51 7.48.51 7.48.51s5.63 0 7.48-.51a2.99 2.99 0 0 0 2.1-2.12c.51-1.85.51-4.8.51-4.8s0-2.95-.51-4.8ZM9.75 15.38V8.62L15.7 12l-5.95 3.38Z"
      },
      {
        key: "spotify",
        label: "Spotify",
        href: this.socialLinks.spotify,
        viewBox: "0 0 24 24",
        path: "M12 2.1a9.9 9.9 0 1 0 9.9 9.9A9.9 9.9 0 0 0 12 2.1Zm4.54 14.27a1.23 1.23 0 0 1-1.7.4 9.93 9.93 0 0 0-5.33-1.4 15.1 15.1 0 0 0-3.3.38 1.23 1.23 0 1 1-.5-2.41 17.52 17.52 0 0 1 3.85-.44 12.34 12.34 0 0 1 6.59 1.77 1.23 1.23 0 0 1 .39 1.7Zm1.7-3.07a1.53 1.53 0 0 1-2.1.5 12.14 12.14 0 0 0-6.5-1.68 18.74 18.74 0 0 0-4.17.48 1.53 1.53 0 1 1-.67-2.98 21.7 21.7 0 0 1 4.86-.56 15.06 15.06 0 0 1 8.12 2.14 1.53 1.53 0 0 1 .46 2.1Zm.2-3.2A15.03 15.03 0 0 0 9.4 7.94a22.17 22.17 0 0 0-4.5.5 1.83 1.83 0 1 1-.76-3.58 25.63 25.63 0 0 1 5.25-.57 18.05 18.05 0 0 1 10.2 2.5 1.83 1.83 0 1 1-1.15 3.3Z"
      }
    ];
    return links.filter((link) => Boolean(link.href));
  }
  static \u0275fac = function SocialLinksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialLinksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SocialLinksComponent, selectors: [["app-social-links"]], inputs: { socialLinks: "socialLinks", compact: "compact", monochrome: "monochrome" }, decls: 3, vars: 4, consts: [[1, "social-links", "flex", "flex-wrap", "items-center", "gap-3"], ["target", "_blank", "rel", "noopener noreferrer", 1, "social-link", 3, "social-link--compact", "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "social-link", 3, "href"], ["aria-hidden", "true", "focusable", "false", 1, "social-link__icon"], ["fill", "currentColor"], [1, "social-link__label"]], template: function SocialLinksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, SocialLinksComponent_For_2_Template, 4, 8, "a", 1, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("text-[var(--site-text)]", ctx.monochrome)("text-white", !ctx.monochrome);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.links);
    }
  }, styles: ["\n\n.social-links[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n}\n.social-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  color: inherit;\n  text-decoration: none;\n  transition:\n    transform 0.2s ease,\n    opacity 0.2s ease,\n    color 0.2s ease;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  opacity: 0.82;\n}\n.social-link--compact[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 999px;\n  border: 1px solid currentColor;\n  background: rgba(255, 255, 255, 0.18);\n  opacity: 0.8;\n}\n.social-link__icon[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  display: block;\n  flex: 0 0 auto;\n}\n.social-link__label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=social-links.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SocialLinksComponent, [{
    type: Component,
    args: [{ selector: "app-social-links", standalone: true, template: '<div\n  class="social-links flex flex-wrap items-center gap-3"\n  [class.text-[var(--site-text)]]="monochrome"\n  [class.text-white]="!monochrome">\n  @for (link of links; track link.key) {\n    <a\n      class="social-link"\n      [class.social-link--compact]="compact"\n      [href]="link.href"\n      target="_blank"\n      rel="noopener noreferrer"\n      [attr.aria-label]="link.label"\n      [attr.title]="link.label">\n      <svg\n        class="social-link__icon"\n        [attr.viewBox]="link.viewBox"\n        aria-hidden="true"\n        focusable="false">\n        <path [attr.d]="link.path" fill="currentColor"></path>\n      </svg>\n\n      @if (!compact) {\n        <span class="social-link__label">{{ link.label }}</span>\n      }\n    </a>\n  }\n</div>\n', styles: ["/* sito-artista/src/app/components/social-links/social-links.component.sass */\n.social-links {\n  min-height: 2.5rem;\n}\n.social-link {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  color: inherit;\n  text-decoration: none;\n  transition:\n    transform 0.2s ease,\n    opacity 0.2s ease,\n    color 0.2s ease;\n}\n.social-link:hover {\n  transform: translateY(-1px);\n  opacity: 0.82;\n}\n.social-link--compact {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 999px;\n  border: 1px solid currentColor;\n  background: rgba(255, 255, 255, 0.18);\n  opacity: 0.8;\n}\n.social-link__icon {\n  width: 1.15rem;\n  height: 1.15rem;\n  display: block;\n  flex: 0 0 auto;\n}\n.social-link__label {\n  font-size: 0.76rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=social-links.component.css.map */\n"] }]
  }], null, { socialLinks: [{
    type: Input,
    args: [{ required: true }]
  }], compact: [{
    type: Input
  }], monochrome: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SocialLinksComponent, { className: "SocialLinksComponent", filePath: "sito-artista/src/app/components/social-links/social-links.component.ts", lineNumber: 18 });
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

export {
  takeUntilDestroyed,
  SocialLinksComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.4
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-XHBHCRJB.js.map
