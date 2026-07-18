import {
  HttpClient,
  generatedDataUrl
} from "./chunk-5ZWV2562.js";
import {
  Injectable,
  map,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/services/auction-public.service.ts
var AuctionPublicService = class _AuctionPublicService {
  http;
  auctions$;
  constructor(http) {
    this.http = http;
    this.auctions$ = this.http.get(generatedDataUrl("auctions.json")).pipe(shareReplay(1));
  }
  getAuctions() {
    return this.auctions$;
  }
  getAuctionBySlug(slug) {
    return this.auctions$.pipe(map((auctions) => auctions.find((auction) => auction.slug === slug)));
  }
  static \u0275fac = function AuctionPublicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuctionPublicService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuctionPublicService, factory: _AuctionPublicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuctionPublicService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuctionPublicService
};
//# sourceMappingURL=chunk-7CDU4BI7.js.map
