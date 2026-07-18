import {
  CommonModule,
  DomSanitizer
} from "./chunk-5ZWV2562.js";
import {
  Component,
  DOCUMENT,
  HostListener,
  Inject,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/components/artwork-gallery/artwork-gallery.component.ts
var _forTrack0 = ($index, $item) => $item.thumbnailSrc;
function ArtworkGalleryComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "p", 4);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Galleria" : "Gallery", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Dettagli e immagini dell\u2019opera" : "Artwork images and details", " ");
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 18);
    \u0275\u0275domListener("mouseenter", function ArtworkGalleryComponent_Conditional_2_Conditional_3_Conditional_3_Template_button_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deactivateZoom());
    })("click", function ArtworkGalleryComponent_Conditional_2_Conditional_3_Conditional_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.openFullscreen();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Apri grande" : "Open large", " ");
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("left", ctx_r0.zoomX, "%")("top", ctx_r0.zoomY, "%")("background-image", "url(" + ctx_r0.selectedImageItem.zoomSrc + ")")("background-position", ctx_r0.zoomX + "% " + ctx_r0.zoomY + "%")("background-size", ctx_r0.zoomBackgroundSize);
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275domListener("mouseenter", function ArtworkGalleryComponent_Conditional_2_Conditional_3_Template_div_mouseenter_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activateZoom());
    })("mouseleave", function ArtworkGalleryComponent_Conditional_2_Conditional_3_Template_div_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deactivateZoom());
    })("mousemove", function ArtworkGalleryComponent_Conditional_2_Conditional_3_Template_div_mousemove_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateZoomPosition($event));
    });
    \u0275\u0275domElementStart(2, "img", 15);
    \u0275\u0275domListener("load", function ArtworkGalleryComponent_Conditional_2_Conditional_3_Template_img_load_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const currentItem_r3 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.trackImageOrientation($event, currentItem_r3));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, ArtworkGalleryComponent_Conditional_2_Conditional_3_Conditional_3_Template, 2, 1, "button", 16);
    \u0275\u0275conditionalCreate(4, ArtworkGalleryComponent_Conditional_2_Conditional_3_Conditional_4_Template, 1, 10, "span", 17);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const currentItem_r3 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("artwork-gallery__image-stage--zoomable", ctx_r0.variant === "product")("artwork-gallery__image-stage--portrait-stage", ctx_r0.shouldUsePortraitGalleryStage);
    \u0275\u0275advance();
    \u0275\u0275classProp("artwork-gallery__image-canvas--portrait-stage", ctx_r0.shouldUsePortraitGalleryStage);
    \u0275\u0275advance();
    \u0275\u0275classProp("max-h-[42rem]", ctx_r0.variant === "default");
    \u0275\u0275domProperty("src", currentItem_r3.src, \u0275\u0275sanitizeUrl)("alt", currentItem_r3.alt);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.variant === "product" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.zoomActive && ctx_r0.selectedImageItem && ctx_r0.variant === "product" ? 4 : -1);
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275domElement(1, "iframe", 22);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx_r0.trustedEmbedUrl, \u0275\u0275sanitizeResourceUrl)("title", ctx_r0.language === "it" ? "Video dell\u2019opera" : "Artwork video");
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "a", 24);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Per questa opera il video \xE8 disponibile come contenuto esterno." : "For this artwork, the video is available as an external resource.", " ");
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", ctx_r0.selectedVideoItem.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Apri il video" : "Open video", " ");
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, ArtworkGalleryComponent_Conditional_2_Conditional_4_Conditional_1_Template, 2, 2, "div", 20)(2, ArtworkGalleryComponent_Conditional_2_Conditional_4_Conditional_2_Template, 5, 3, "div", 21);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isEmbeddableVideo && ctx_r0.trustedEmbedUrl ? 1 : ctx_r0.selectedVideoItem ? 2 : -1);
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "figcaption", 11);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const currentItem_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", currentItem_r3.description, " ");
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_6_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 29)(1, "span", 30);
    \u0275\u0275text(2, "\u25B6");
    \u0275\u0275domElementEnd()();
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 26);
    \u0275\u0275domListener("click", function ArtworkGalleryComponent_Conditional_2_Conditional_6_For_2_Template_button_click_0_listener() {
      const \u0275$index_57_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectItem(\u0275$index_57_r6));
    });
    \u0275\u0275domElementStart(1, "div", 27);
    \u0275\u0275domElement(2, "img", 28);
    \u0275\u0275conditionalCreate(3, ArtworkGalleryComponent_Conditional_2_Conditional_6_For_2_Conditional_3_Template, 3, 0, "span", 29);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const \u0275$index_57_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("artwork-gallery__thumb--active", \u0275$index_57_r6 === ctx_r0.selectedIndex);
    \u0275\u0275attribute("aria-label", item_r7.description || item_r7.alt);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", item_r7.thumbnailSrc, \u0275\u0275sanitizeUrl)("alt", item_r7.alt);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.kind === "video" ? 3 : -1);
  }
}
function ArtworkGalleryComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ArtworkGalleryComponent_Conditional_2_Conditional_6_For_2_Template, 4, 6, "button", 25, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.items);
  }
}
function ArtworkGalleryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "figure", 7)(2, "div", 8);
    \u0275\u0275conditionalCreate(3, ArtworkGalleryComponent_Conditional_2_Conditional_3_Template, 5, 12, "div", 9)(4, ArtworkGalleryComponent_Conditional_2_Conditional_4_Template, 3, 1, "div", 10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, ArtworkGalleryComponent_Conditional_2_Conditional_5_Template, 2, 1, "figcaption", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, ArtworkGalleryComponent_Conditional_2_Conditional_6_Template, 3, 0, "div", 12);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const currentItem_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("artwork-gallery__layout--product", ctx_r0.variant === "product");
    \u0275\u0275advance();
    \u0275\u0275classProp("artwork-gallery__viewer--product", ctx_r0.variant === "product");
    \u0275\u0275advance();
    \u0275\u0275classProp("artwork-gallery__viewer-frame--product", ctx_r0.variant === "product")("artwork-gallery__viewer-frame--portrait-stage", ctx_r0.shouldUsePortraitGalleryStage);
    \u0275\u0275advance();
    \u0275\u0275conditional(currentItem_r3.kind === "image" ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(currentItem_r3.description && ctx_r0.variant !== "product" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldShowThumbnails ? 6 : -1);
  }
}
function ArtworkGalleryComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 31);
    \u0275\u0275domListener("click", function ArtworkGalleryComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFullscreen());
    });
    \u0275\u0275domElementStart(1, "button", 32);
    \u0275\u0275domListener("click", function ArtworkGalleryComponent_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.closeFullscreen();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 33);
    \u0275\u0275domListener("click", function ArtworkGalleryComponent_Conditional_3_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElement(4, "img", 34);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.language === "it" ? "Chiudi" : "Close", " ");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", ctx_r0.selectedImageItem.zoomSrc || ctx_r0.selectedImageItem.src, \u0275\u0275sanitizeUrl)("alt", ctx_r0.selectedImageItem.alt);
  }
}
var ArtworkGalleryComponent = class _ArtworkGalleryComponent {
  sanitizer;
  document;
  imageOrientations = /* @__PURE__ */ new Map();
  fullscreenScrollY = 0;
  constructor(sanitizer, document) {
    this.sanitizer = sanitizer;
    this.document = document;
  }
  mainImage;
  galleryItems = [];
  language;
  video = null;
  variant = "default";
  showHeader = true;
  selectedIndex = 0;
  zoomActive = false;
  zoomX = 50;
  zoomY = 50;
  fullscreenOpen = false;
  zoomScale = 8;
  get items() {
    const gallery = this.galleryItems.map((item) => ({
      kind: "image",
      src: item.sources.large || item.sources.medium || item.sources.small,
      zoomSrc: item.sources.original || item.sources.large || item.sources.medium || item.sources.small,
      thumbnailSrc: item.sources.thumbnail || item.sources.small || item.sources.large,
      alt: item.description[this.language] || item.description.it,
      description: item.description[this.language] || item.description.it
    }));
    const items = [
      {
        kind: "image",
        src: this.mainImage.sources.large || this.mainImage.sources.medium || this.mainImage.sources.small,
        zoomSrc: this.mainImage.sources.original || this.mainImage.sources.large || this.mainImage.sources.medium || this.mainImage.sources.small,
        thumbnailSrc: this.mainImage.sources.thumbnail || this.mainImage.sources.small || this.mainImage.sources.large,
        alt: this.mainImage.alt[this.language] || this.mainImage.alt.it,
        description: this.mainImage.alt[this.language] || this.mainImage.alt.it
      },
      ...gallery
    ];
    if (this.video) {
      items.push({
        kind: "video",
        videoType: this.video.type,
        thumbnailSrc: this.mainImage.sources.thumbnail || this.mainImage.sources.small || this.mainImage.sources.large,
        alt: this.language === "it" ? "Video dell\u2019opera" : "Artwork video",
        description: this.language === "it" ? "Video dell\u2019opera" : "Artwork video",
        url: this.video.url,
        embedUrl: this.video.embedUrl
      });
    }
    return items;
  }
  get selectedImageItem() {
    return this.selectedItem?.kind === "image" ? this.selectedItem : null;
  }
  get selectedVideoItem() {
    return this.selectedItem?.kind === "video" ? this.selectedItem : null;
  }
  get shouldShowThumbnails() {
    return this.items.length > 1;
  }
  get selectedImageOrientation() {
    if (!this.selectedImageItem) {
      return "landscape";
    }
    return this.imageOrientations.get(this.selectedImageItem.zoomSrc || this.selectedImageItem.src) || "landscape";
  }
  get shouldUsePortraitGalleryStage() {
    return this.variant === "product" && this.shouldShowThumbnails && this.selectedImageOrientation === "portrait";
  }
  get zoomBackgroundSize() {
    return `${this.zoomScale * 100}% auto`;
  }
  get trustedEmbedUrl() {
    const video = this.selectedVideoItem;
    if (!video || video.videoType !== "youtube") {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.embedUrl);
  }
  get isEmbeddableVideo() {
    return this.selectedVideoItem?.videoType === "youtube";
  }
  get selectedItem() {
    return this.items[this.selectedIndex] || this.items[0] || null;
  }
  onEscape() {
    if (this.fullscreenOpen) {
      this.closeFullscreen();
    }
  }
  ngOnChanges(changes) {
    if (changes["mainImage"] || changes["galleryItems"] || changes["video"]) {
      this.selectedIndex = 0;
      this.zoomActive = false;
      this.setFullscreen(false);
    }
  }
  ngOnDestroy() {
    this.setFullscreen(false);
  }
  selectItem(index) {
    this.selectedIndex = index;
    this.zoomActive = false;
  }
  trackImageOrientation(event, item) {
    const image = event.target;
    if (!image?.naturalWidth || !image.naturalHeight) {
      return;
    }
    this.imageOrientations.set(item.zoomSrc || item.src, image.naturalHeight > image.naturalWidth ? "portrait" : "landscape");
  }
  openFullscreen() {
    if (this.variant !== "product" || !this.selectedImageItem) {
      return;
    }
    this.setFullscreen(true);
    this.zoomActive = false;
  }
  closeFullscreen() {
    this.setFullscreen(false);
  }
  activateZoom() {
    if (this.variant !== "product" || !this.selectedImageItem) {
      return;
    }
    this.zoomActive = true;
  }
  deactivateZoom() {
    this.zoomActive = false;
  }
  updateZoomPosition(event) {
    if (this.variant !== "product" || !this.selectedImageItem) {
      return;
    }
    const target = event.currentTarget;
    if (!target) {
      return;
    }
    const rect = target.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width * 100;
    const relativeY = (event.clientY - rect.top) / rect.height * 100;
    this.zoomX = Math.max(0, Math.min(100, relativeX));
    this.zoomY = Math.max(0, Math.min(100, relativeY));
  }
  setFullscreen(open) {
    this.fullscreenOpen = open;
    const body = this.document.body;
    const html = this.document.documentElement;
    const windowRef = this.document.defaultView;
    if (open) {
      this.fullscreenScrollY = windowRef?.scrollY || 0;
      body.classList.add("artwork-fullscreen-open");
      html.classList.add("artwork-fullscreen-open");
      body.style.position = "fixed";
      body.style.top = `-${this.fullscreenScrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      html.style.overflow = "hidden";
      return;
    }
    body.classList.remove("artwork-fullscreen-open");
    html.classList.remove("artwork-fullscreen-open");
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    html.style.overflow = "";
    if (windowRef) {
      windowRef.scrollTo({ top: this.fullscreenScrollY, left: 0, behavior: "auto" });
    }
  }
  static \u0275fac = function ArtworkGalleryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkGalleryComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtworkGalleryComponent, selectors: [["app-artwork-gallery"]], hostBindings: function ArtworkGalleryComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function ArtworkGalleryComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { mainImage: "mainImage", galleryItems: "galleryItems", language: "language", video: "video", variant: "variant", showHeader: "showHeader" }, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 15, consts: [[1, "artwork-gallery"], [1, "artwork-gallery__header", "mb-8", "max-w-3xl"], [1, "artwork-gallery__layout", "grid", "gap-5", 3, "artwork-gallery__layout--product"], [1, "artwork-gallery__fullscreen"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-3xl", "leading-tight", "text-[var(--site-text)]", "sm:text-4xl"], [1, "artwork-gallery__layout", "grid", "gap-5"], [1, "artwork-gallery__viewer", "overflow-hidden"], [1, "artwork-gallery__viewer-frame", "flex", "min-h-[22rem]", "items-center", "justify-center", "p-4", "sm:min-h-[32rem]", "sm:p-6", "lg:min-h-[45rem]"], [1, "artwork-gallery__image-stage", 3, "artwork-gallery__image-stage--zoomable", "artwork-gallery__image-stage--portrait-stage"], [1, "artwork-gallery__video-stage", "w-full"], [1, "px-5", "py-4", "text-sm", "leading-7", "text-[var(--site-muted)]", "sm:px-6"], [1, "artwork-gallery__thumbnails", "flex", "gap-3", "overflow-x-auto", "pb-2"], [1, "artwork-gallery__image-stage"], [1, "artwork-gallery__image-canvas", 3, "mouseenter", "mouseleave", "mousemove"], [1, "artwork-gallery__main-image", "object-contain", 3, "load", "src", "alt"], ["type", "button", 1, "artwork-gallery__expand-button"], [1, "artwork-gallery__zoom-lens", 3, "left", "top", "background-image", "background-position", "background-size"], ["type", "button", 1, "artwork-gallery__expand-button", 3, "mouseenter", "click"], [1, "artwork-gallery__zoom-lens"], [1, "aspect-video", "overflow-hidden", "rounded-[1.35rem]", "bg-[#1e1a16]", "shadow-[0_20px_60px_rgba(22,18,15,0.14)]"], [1, "rounded-[1.5rem]", "border", "border-[var(--site-border)]", "bg-[var(--site-surface)]", "p-8", "text-left"], ["loading", "lazy", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 1, "h-full", "w-full", 3, "src", "title"], [1, "text-sm", "leading-8", "text-[var(--site-muted)]"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-6", "inline-flex", "rounded-full", "bg-[var(--site-text)]", "px-5", "py-3", "text-xs", "uppercase", "tracking-[0.2em]", "text-white", "no-underline", 3, "href"], ["type", "button", 1, "artwork-gallery__thumb", "shrink-0", "overflow-hidden", "rounded-[1.25rem]", "border", "bg-[var(--site-surface)]", 3, "artwork-gallery__thumb--active"], ["type", "button", 1, "artwork-gallery__thumb", "shrink-0", "overflow-hidden", "rounded-[1.25rem]", "border", "bg-[var(--site-surface)]", 3, "click"], [1, "relative"], ["loading", "lazy", 1, "h-24", "w-24", "object-cover", "lg:h-28", "lg:w-28", 3, "src", "alt"], [1, "artwork-gallery__thumb-play", "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-black/60", "text-white"], [1, "artwork-gallery__fullscreen", 3, "click"], ["type", "button", 1, "artwork-gallery__fullscreen-close", 3, "click"], [1, "artwork-gallery__fullscreen-stage", 3, "click"], [1, "artwork-gallery__fullscreen-image", 3, "src", "alt"]], template: function ArtworkGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, ArtworkGalleryComponent_Conditional_1_Template, 5, 2, "div", 1);
      \u0275\u0275conditionalCreate(2, ArtworkGalleryComponent_Conditional_2_Template, 7, 11, "div", 2);
      \u0275\u0275conditionalCreate(3, ArtworkGalleryComponent_Conditional_3_Template, 5, 3, "div", 3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275classProp("mx-auto", ctx.variant === "default")("max-w-7xl", ctx.variant === "default")("px-5", ctx.variant === "default")("py-10", ctx.variant === "default")("sm:px-8", ctx.variant === "default")("lg:px-12", ctx.variant === "default");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showHeader ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.selectedItem) ? 2 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.fullscreenOpen && ctx.selectedImageItem ? 3 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --product-gallery-max-height: min(50rem, calc(100dvh - 10rem));\n  --product-gallery-thumbnails-height: 7.75rem;\n}\n.artwork-gallery__header[_ngcontent-%COMP%]::before {\n  content: "";\n  display: block;\n  width: 3.5rem;\n  height: 1px;\n  margin-bottom: 1.25rem;\n  background: rgba(32, 27, 22, 0.2);\n}\n.artwork-gallery__viewer[_ngcontent-%COMP%] {\n  position: relative;\n}\n.artwork-gallery__viewer--product[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.artwork-gallery__layout--product[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__layout--product[_ngcontent-%COMP%] {\n    max-height: var(--product-gallery-max-height);\n    grid-template-rows: minmax(0, 1fr) auto;\n  }\n}\n.artwork-gallery__thumb[_ngcontent-%COMP%] {\n  border-color: rgba(32, 27, 22, 0.08);\n  transition:\n    border-color 0.24s ease,\n    transform 0.24s ease,\n    box-shadow 0.24s ease;\n}\n.artwork-gallery__thumb[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(159, 116, 82, 0.32);\n}\n.artwork-gallery__thumb--active[_ngcontent-%COMP%] {\n  border-color: rgba(159, 116, 82, 0.5);\n  box-shadow: 0 0 0 1px rgba(159, 116, 82, 0.15);\n}\n.artwork-gallery__thumb-play[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.artwork-gallery__viewer-frame[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.artwork-gallery__viewer-frame--product[_ngcontent-%COMP%] {\n  min-height: var(--product-gallery-mobile-min-height, 20rem);\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__viewer-frame--product[_ngcontent-%COMP%] {\n    min-height: 0;\n    height: 100%;\n    padding: 0;\n  }\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__viewer-frame--portrait-stage[_ngcontent-%COMP%] {\n    border-radius: 1.8rem;\n    background:\n      linear-gradient(\n        180deg,\n        rgba(20, 18, 24, 0.96),\n        rgba(27, 23, 31, 0.92));\n    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 18px 42px rgba(20, 18, 24, 0.18);\n    padding: 0 1.25rem;\n  }\n}\n.artwork-gallery__image-stage[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n}\n.artwork-gallery__image-stage--zoomable[_ngcontent-%COMP%] {\n  cursor: zoom-in;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__image-stage[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__image-stage--portrait-stage[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n}\n.artwork-gallery__image-canvas[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: auto;\n  max-width: 100%;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__image-canvas[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    height: 100%;\n  }\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__image-canvas--portrait-stage[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.artwork-gallery__main-image[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  box-shadow: 0 20px 44px rgba(30, 22, 18, 0.08);\n}\n@media (max-width: 1023px) {\n  .artwork-gallery__main-image[_ngcontent-%COMP%] {\n    max-height: var(--product-gallery-mobile-max-height, none);\n  }\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__main-image[_ngcontent-%COMP%] {\n    max-height: calc(var(--product-gallery-max-height) - var(--product-gallery-thumbnails-height) - 1rem);\n  }\n}\n.artwork-gallery__expand-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  border: 1px solid rgba(32, 27, 22, 0.08);\n  border-radius: 999px;\n  background: rgba(255, 251, 246, 0.92);\n  padding: 0.5rem 0.9rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: var(--site-text);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 3;\n}\n.artwork-gallery__zoom-lens[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10rem;\n  height: 10rem;\n  overflow: hidden;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.72);\n  box-shadow: 0 18px 44px rgba(34, 24, 18, 0.16);\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  background: rgba(255, 251, 246, 0.96);\n  background-repeat: no-repeat;\n  background-origin: border-box;\n  -webkit-backdrop-filter: blur(1px);\n  backdrop-filter: blur(1px);\n  z-index: 2;\n}\n.artwork-gallery__video-stage[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.artwork-gallery__thumbnails[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  align-items: flex-start;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__thumbnails[_ngcontent-%COMP%] {\n    min-height: var(--product-gallery-thumbnails-height);\n    max-height: var(--product-gallery-thumbnails-height);\n    padding-bottom: 0;\n  }\n}\n.artwork-gallery__fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 2147483647;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background: rgba(16, 13, 11, 0.84);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  isolation: isolate;\n}\n.artwork-gallery__fullscreen-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 2;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  padding: 0.7rem 1rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: white;\n  cursor: pointer;\n}\n.artwork-gallery__fullscreen-stage[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: min(94vw, 120rem);\n  max-height: 92vh;\n}\n.artwork-gallery__fullscreen-image[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  max-height: 92vh;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.28);\n}\n/*# sourceMappingURL=artwork-gallery.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkGalleryComponent, [{
    type: Component,
    args: [{ selector: "app-artwork-gallery", standalone: true, imports: [CommonModule], template: `<section
  class="artwork-gallery"
  [class.mx-auto]="variant === 'default'"
  [class.max-w-7xl]="variant === 'default'"
  [class.px-5]="variant === 'default'"
  [class.py-10]="variant === 'default'"
  [class.sm:px-8]="variant === 'default'"
  [class.lg:px-12]="variant === 'default'">
  @if (showHeader) {
    <div class="artwork-gallery__header mb-8 max-w-3xl">
      <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">
        {{ language === 'it' ? 'Galleria' : 'Gallery' }}
      </p>
      <h2 class="mt-4 text-3xl leading-tight text-[var(--site-text)] sm:text-4xl">
        {{ language === 'it' ? 'Dettagli e immagini dell\u2019opera' : 'Artwork images and details' }}
      </h2>
    </div>
  }

  @if (selectedItem; as currentItem) {
    <div
      class="artwork-gallery__layout grid gap-5"
      [class.artwork-gallery__layout--product]="variant === 'product'">
      <figure
        class="artwork-gallery__viewer overflow-hidden"
        [class.artwork-gallery__viewer--product]="variant === 'product'">
        <div
          class="artwork-gallery__viewer-frame flex min-h-[22rem] items-center justify-center p-4 sm:min-h-[32rem] sm:p-6 lg:min-h-[45rem]"
          [class.artwork-gallery__viewer-frame--product]="variant === 'product'"
          [class.artwork-gallery__viewer-frame--portrait-stage]="shouldUsePortraitGalleryStage">
          @if (currentItem.kind === 'image') {
            <div
              class="artwork-gallery__image-stage"
              [class.artwork-gallery__image-stage--zoomable]="variant === 'product'"
              [class.artwork-gallery__image-stage--portrait-stage]="shouldUsePortraitGalleryStage"
              >
              <div
                class="artwork-gallery__image-canvas"
                [class.artwork-gallery__image-canvas--portrait-stage]="shouldUsePortraitGalleryStage"
                (mouseenter)="activateZoom()"
                (mouseleave)="deactivateZoom()"
                (mousemove)="updateZoomPosition($event)">
                <img
                  class="artwork-gallery__main-image object-contain"
                  [class.max-h-[42rem]]="variant === 'default'"
                  [src]="currentItem.src"
                  [alt]="currentItem.alt"
                  (load)="trackImageOrientation($event, currentItem)" />

                @if (variant === 'product') {
                  <button
                    type="button"
                    class="artwork-gallery__expand-button"
                    (mouseenter)="deactivateZoom()"
                    (click)="openFullscreen(); $event.stopPropagation()">
                    {{ language === 'it' ? 'Apri grande' : 'Open large' }}
                  </button>
                }

                @if (zoomActive && selectedImageItem && variant === 'product') {
                  <span
                    class="artwork-gallery__zoom-lens"
                    [style.left.%]="zoomX"
                    [style.top.%]="zoomY"
                    [style.background-image]="'url(' + selectedImageItem.zoomSrc + ')'"
                    [style.background-position]="zoomX + '% ' + zoomY + '%'"
                    [style.background-size]="zoomBackgroundSize">
                  </span>
                }
              </div>
            </div>
          } @else {
            <div class="artwork-gallery__video-stage w-full">
              @if (isEmbeddableVideo && trustedEmbedUrl) {
                <div class="aspect-video overflow-hidden rounded-[1.35rem] bg-[#1e1a16] shadow-[0_20px_60px_rgba(22,18,15,0.14)]">
                  <iframe
                    class="h-full w-full"
                    [src]="trustedEmbedUrl"
                    [title]="language === 'it' ? 'Video dell\u2019opera' : 'Artwork video'"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                  </iframe>
                </div>
              } @else if (selectedVideoItem) {
                <div class="rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-8 text-left">
                  <p class="text-sm leading-8 text-[var(--site-muted)]">
                    {{ language === 'it' ? 'Per questa opera il video \xE8 disponibile come contenuto esterno.' : 'For this artwork, the video is available as an external resource.' }}
                  </p>
                  <a
                    class="mt-6 inline-flex rounded-full bg-[var(--site-text)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-white no-underline"
                    [href]="selectedVideoItem.url"
                    target="_blank"
                    rel="noopener noreferrer">
                    {{ language === 'it' ? 'Apri il video' : 'Open video' }}
                  </a>
                </div>
              }
            </div>
          }
        </div>

        @if (currentItem.description && variant !== 'product') {
          <figcaption class="px-5 py-4 text-sm leading-7 text-[var(--site-muted)] sm:px-6">
            {{ currentItem.description }}
          </figcaption>
        }
      </figure>

      @if (shouldShowThumbnails) {
        <div class="artwork-gallery__thumbnails flex gap-3 overflow-x-auto pb-2">
          @for (item of items; track item.thumbnailSrc; let index = $index) {
            <button
              type="button"
              class="artwork-gallery__thumb shrink-0 overflow-hidden rounded-[1.25rem] border bg-[var(--site-surface)]"
              [class.artwork-gallery__thumb--active]="index === selectedIndex"
              (click)="selectItem(index)"
              [attr.aria-label]="item.description || item.alt">
              <div class="relative">
                <img
                  class="h-24 w-24 object-cover lg:h-28 lg:w-28"
                  [src]="item.thumbnailSrc"
                  [alt]="item.alt"
                  loading="lazy" />
                @if (item.kind === 'video') {
                  <span class="artwork-gallery__thumb-play absolute inset-0 flex items-center justify-center">
                    <span class="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white">\u25B6</span>
                  </span>
                }
              </div>
            </button>
          }
        </div>
      }
    </div>
  }

  @if (fullscreenOpen && selectedImageItem) {
    <div class="artwork-gallery__fullscreen" (click)="closeFullscreen()">
      <button
        type="button"
        class="artwork-gallery__fullscreen-close"
        (click)="closeFullscreen(); $event.stopPropagation()">
        {{ language === 'it' ? 'Chiudi' : 'Close' }}
      </button>

      <div class="artwork-gallery__fullscreen-stage" (click)="$event.stopPropagation()">
        <img
          class="artwork-gallery__fullscreen-image"
          [src]="selectedImageItem.zoomSrc || selectedImageItem.src"
          [alt]="selectedImageItem.alt" />
      </div>
    </div>
  }
</section>
`, styles: ['/* sito-artista/src/app/components/artwork-gallery/artwork-gallery.component.sass */\n:host {\n  display: block;\n  --product-gallery-max-height: min(50rem, calc(100dvh - 10rem));\n  --product-gallery-thumbnails-height: 7.75rem;\n}\n.artwork-gallery__header::before {\n  content: "";\n  display: block;\n  width: 3.5rem;\n  height: 1px;\n  margin-bottom: 1.25rem;\n  background: rgba(32, 27, 22, 0.2);\n}\n.artwork-gallery__viewer {\n  position: relative;\n}\n.artwork-gallery__viewer--product {\n  overflow: visible;\n}\n.artwork-gallery__layout--product {\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__layout--product {\n    max-height: var(--product-gallery-max-height);\n    grid-template-rows: minmax(0, 1fr) auto;\n  }\n}\n.artwork-gallery__thumb {\n  border-color: rgba(32, 27, 22, 0.08);\n  transition:\n    border-color 0.24s ease,\n    transform 0.24s ease,\n    box-shadow 0.24s ease;\n}\n.artwork-gallery__thumb:hover {\n  transform: translateY(-1px);\n  border-color: rgba(159, 116, 82, 0.32);\n}\n.artwork-gallery__thumb--active {\n  border-color: rgba(159, 116, 82, 0.5);\n  box-shadow: 0 0 0 1px rgba(159, 116, 82, 0.15);\n}\n.artwork-gallery__thumb-play {\n  pointer-events: none;\n}\n.artwork-gallery__viewer-frame {\n  background: transparent;\n}\n.artwork-gallery__viewer-frame--product {\n  min-height: var(--product-gallery-mobile-min-height, 20rem);\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__viewer-frame--product {\n    min-height: 0;\n    height: 100%;\n    padding: 0;\n  }\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__viewer-frame--portrait-stage {\n    border-radius: 1.8rem;\n    background:\n      linear-gradient(\n        180deg,\n        rgba(20, 18, 24, 0.96),\n        rgba(27, 23, 31, 0.92));\n    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 18px 42px rgba(20, 18, 24, 0.18);\n    padding: 0 1.25rem;\n  }\n}\n.artwork-gallery__image-stage {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n}\n.artwork-gallery__image-stage--zoomable {\n  cursor: zoom-in;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__image-stage {\n    height: 100%;\n  }\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__image-stage--portrait-stage {\n    align-items: center;\n    justify-content: center;\n  }\n}\n.artwork-gallery__image-canvas {\n  position: relative;\n  display: inline-block;\n  width: auto;\n  max-width: 100%;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__image-canvas {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    height: 100%;\n  }\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__image-canvas--portrait-stage {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.artwork-gallery__main-image {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  box-shadow: 0 20px 44px rgba(30, 22, 18, 0.08);\n}\n@media (max-width: 1023px) {\n  .artwork-gallery__main-image {\n    max-height: var(--product-gallery-mobile-max-height, none);\n  }\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__main-image {\n    max-height: calc(var(--product-gallery-max-height) - var(--product-gallery-thumbnails-height) - 1rem);\n  }\n}\n.artwork-gallery__expand-button {\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  border: 1px solid rgba(32, 27, 22, 0.08);\n  border-radius: 999px;\n  background: rgba(255, 251, 246, 0.92);\n  padding: 0.5rem 0.9rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: var(--site-text);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 3;\n}\n.artwork-gallery__zoom-lens {\n  position: absolute;\n  width: 10rem;\n  height: 10rem;\n  overflow: hidden;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.72);\n  box-shadow: 0 18px 44px rgba(34, 24, 18, 0.16);\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  background: rgba(255, 251, 246, 0.96);\n  background-repeat: no-repeat;\n  background-origin: border-box;\n  -webkit-backdrop-filter: blur(1px);\n  backdrop-filter: blur(1px);\n  z-index: 2;\n}\n.artwork-gallery__video-stage {\n  width: 100%;\n}\n.artwork-gallery__thumbnails {\n  scrollbar-width: thin;\n  align-items: flex-start;\n}\n@media (min-width: 1024px) {\n  .artwork-gallery__thumbnails {\n    min-height: var(--product-gallery-thumbnails-height);\n    max-height: var(--product-gallery-thumbnails-height);\n    padding-bottom: 0;\n  }\n}\n.artwork-gallery__fullscreen {\n  position: fixed;\n  inset: 0;\n  z-index: 2147483647;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background: rgba(16, 13, 11, 0.84);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  isolation: isolate;\n}\n.artwork-gallery__fullscreen-close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 2;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  padding: 0.7rem 1rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: white;\n  cursor: pointer;\n}\n.artwork-gallery__fullscreen-stage {\n  position: relative;\n  z-index: 1;\n  max-width: min(94vw, 120rem);\n  max-height: 92vh;\n}\n.artwork-gallery__fullscreen-image {\n  display: block;\n  max-width: 100%;\n  max-height: 92vh;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.28);\n}\n/*# sourceMappingURL=artwork-gallery.component.css.map */\n'] }]
  }], () => [{ type: DomSanitizer }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { mainImage: [{
    type: Input,
    args: [{ required: true }]
  }], galleryItems: [{
    type: Input,
    args: [{ required: true }]
  }], language: [{
    type: Input,
    args: [{ required: true }]
  }], video: [{
    type: Input
  }], variant: [{
    type: Input
  }], showHeader: [{
    type: Input
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtworkGalleryComponent, { className: "ArtworkGalleryComponent", filePath: "sito-artista/src/app/components/artwork-gallery/artwork-gallery.component.ts", lineNumber: 35 });
})();

export {
  ArtworkGalleryComponent
};
//# sourceMappingURL=chunk-4WHPFY7X.js.map
