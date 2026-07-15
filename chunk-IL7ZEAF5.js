import {
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-D22KB4XF.js";

// sito-artista/src/app/services/artwork.service.ts
var ArtworkService = class _ArtworkService {
  http;
  artworks$;
  constructor(http) {
    this.http = http;
    this.artworks$ = this.http.get("assets/data/artworks.json").pipe(shareReplay(1));
  }
  getArtworks() {
    return this.artworks$;
  }
  getArtworkBySlug(slug) {
    return this.artworks$.pipe(map((artworks) => artworks.find((artwork) => artwork.slug === slug)));
  }
  getPaintings() {
    return this.artworks$.pipe(map((artworks) => artworks.filter((artwork) => artwork.type === "painting" || artwork.type === "other")));
  }
  getDrawings() {
    return this.artworks$.pipe(map((artworks) => artworks.filter((artwork) => artwork.type === "drawing" || artwork.type === "work_on_paper")));
  }
  static \u0275fac = function ArtworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ArtworkService, factory: _ArtworkService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ArtworkService
};
//# sourceMappingURL=chunk-IL7ZEAF5.js.map
