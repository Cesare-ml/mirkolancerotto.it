import {
  ArtworkCardComponent
} from "./chunk-QAX2I4YF.js";
import {
  ArtworkService
} from "./chunk-IL7ZEAF5.js";
import {
  HeroComponent
} from "./chunk-SXMXTFLE.js";
import {
  ActivatedRoute,
  AsyncPipe,
  Component,
  CurrencyPipe,
  LanguageService,
  RouterLink,
  SeoService,
  SiteService,
  __spreadProps,
  __spreadValues,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-D22KB4XF.js";

// sito-artista/src/content/commissions.content.ts
var COMMISSIONS_CONTENT = {
  heroTitle: {
    it: "Commissioni",
    en: "Commissions"
  },
  heroSubtitle: {
    it: "Un\u2019opera che nasce dal dialogo, ma resta pienamente fedele al linguaggio dell\u2019artista.",
    en: "An artwork born from dialogue while remaining fully faithful to the artist\u2019s language."
  },
  introEyebrow: {
    it: "Percorso",
    en: "Approach"
  },
  introTitle: {
    it: "Un incontro tra ascolto, visione e forma.",
    en: "A meeting point between listening, vision and form."
  },
  introBody: {
    it: "Una commissione non \xE8 l\u2019esecuzione di un\u2019immagine gi\xE0 decisa. \xC8 un processo condiviso in cui soggetto, composizione, colori e spazio reale incontrano una ricerca pittorica gi\xE0 viva.",
    en: "A commission is not the execution of a pre-decided image. It is a shared process where subject, composition, colors and real space meet an already living pictorial research."
  },
  processEyebrow: {
    it: "Metodo",
    en: "Method"
  },
  processTitle: {
    it: "Ogni lavoro su richiesta nasce con un ritmo chiaro, ma resta vivo.",
    en: "Each bespoke work begins with a clear rhythm, while remaining alive."
  },
  processBody: {
    it: "Il processo resta diretto, essenziale e trasparente: si parte da un confronto reale, si passa per un bozzetto molto vicino all\u2019opera finale e si lascia poi spazio anche a ci\xF2 che la tela chiede mentre prende forma.",
    en: "The process remains direct, essential and transparent: it begins with real conversation, moves through a sketch that is close to the final work, and still leaves room for what the canvas asks for as it takes shape."
  },
  steps: [
    {
      title: {
        it: "Dialogo iniziale",
        en: "Initial dialogue"
      },
      body: {
        it: "Si chiariscono soggetto, composizione, colori, formato e luogo in cui l\u2019opera vivr\xE0, cos\xEC da capire davvero la direzione del lavoro.",
        en: "Subject, composition, colors, format and the place where the artwork will live are clarified, so the direction of the work can be understood properly."
      },
      image: "/assets/images/static/commissions-step-dialogue-placeholder.svg",
      imageAlt: {
        it: "Placeholder dialogo iniziale commissione",
        en: "Initial commission dialogue placeholder"
      }
    },
    {
      title: {
        it: "Bozzetto",
        en: "Sketch"
      },
      body: {
        it: "Prima di iniziare a dipingere preparo un bozzetto molto vicino all\u2019opera finale. Non \xE8 identico, ma definisce con chiarezza atmosfera, struttura e presenza del lavoro.",
        en: "Before painting begins, I prepare a sketch that is very close to the final work. It is not identical, but it clearly defines atmosphere, structure and presence."
      },
      image: "/assets/images/static/commissions-step-sketch-placeholder.svg",
      imageAlt: {
        it: "Placeholder bozzetto commissione",
        en: "Commission sketch placeholder"
      }
    },
    {
      title: {
        it: "Pittura",
        en: "Painting"
      },
      body: {
        it: "Accettato il bozzetto, inizia la pittura. Durante il processo resta spazio per l\u2019unicit\xE0 dell\u2019opera: la tela non viene forzata, ma ascoltata. I tempi vengono definiti volta per volta in base al periodo e alla dimensione.",
        en: "Once the sketch is approved, painting begins. During the process, room remains for the uniqueness of the work: the canvas is not forced, but listened to. Timing is defined case by case according to the period and the size."
      },
      image: "/assets/images/static/commissions-step-painting-placeholder.svg",
      imageAlt: {
        it: "Placeholder fase di pittura commissione",
        en: "Commission painting phase placeholder"
      }
    },
    {
      title: {
        it: "Saldo e spedizione",
        en: "Final payment and shipping"
      },
      body: {
        it: "Per iniziare chiedo il 68% del valore dell\u2019opera. A opera conclusa si versa il restante 32%, poi procedo con la spedizione. I costi di spedizione sono esclusi dal preventivo e vengono chiariti via mail.",
        en: "To begin, I ask for 68% of the artwork value. Once the work is completed, the remaining 32% is due, and only then does shipping proceed. Shipping costs are excluded from the estimate and clarified by email."
      },
      image: "/assets/images/static/commissions-step-shipping-placeholder.svg",
      imageAlt: {
        it: "Placeholder saldo e spedizione commissione",
        en: "Commission payment and shipping placeholder"
      }
    }
  ],
  estimateEyebrow: {
    it: "Preventivo indicativo",
    en: "Indicative estimate"
  },
  estimateTitle: {
    it: "Una prima idea del budget, basata sul formato.",
    en: "A first budget indication, based on format."
  },
  estimateBody: {
    it: "Questo calcolo non sostituisce il confronto diretto, ma aiuta a orientarsi prima del contatto. Dopo il dialogo iniziale preparo un bozzetto; solo dopo la sua approvazione inizia la pittura vera e propria.",
    en: "This calculation does not replace direct conversation, but helps set expectations before getting in touch. After the initial dialogue I prepare a sketch; only after its approval does the painting itself begin."
  },
  estimateDisclaimer: {
    it: "Stima orientativa, non vincolante. Spedizione esclusa.",
    en: "Indicative, non-binding estimate. Shipping excluded."
  },
  estimateNote: {
    it: "Formati disponibili da 30 \xD7 40 cm a 80 \xD7 100 cm, anche in orizzontale. In Italia la spedizione si aggira spesso intorno ai 40 \u20AC.",
    en: "Available formats range from 30 \xD7 40 cm to 80 \xD7 100 cm, including horizontal formats. Within Italy, shipping is often around \u20AC40."
  },
  reflectionsEyebrow: {
    it: "Percezione",
    en: "Perception"
  },
  reflectionsTitle: {
    it: "Ci\xF2 che alcune persone hanno riconosciuto nelle opere.",
    en: "What some people have recognized in the artworks."
  },
  reflections: [
    {
      quote: {
        it: "Colori intensi, armonia e profondit\xE0 che lasciano spazio all\u2019immaginazione.",
        en: "Intense colors, harmony and depth that leave room for imagination."
      },
      author: "Arianna",
      context: {
        it: "Collezionista privata",
        en: "Private collector"
      },
      image: "/assets/images/static/commissions-testimonial-arianna-placeholder.svg",
      imageAlt: {
        it: "Placeholder ritratto Arianna",
        en: "Arianna portrait placeholder"
      }
    },
    {
      quote: {
        it: "Un linguaggio capace di comunicare qualcosa di personale e insieme universale.",
        en: "A language capable of communicating something personal and, at the same time, universal."
      },
      author: "Matteo",
      context: {
        it: "Collezionista e committente",
        en: "Collector and commissioner"
      },
      image: "/assets/images/static/commissions-testimonial-matteo-placeholder.svg",
      imageAlt: {
        it: "Placeholder ritratto Matteo",
        en: "Matteo portrait placeholder"
      }
    },
    {
      quote: {
        it: "La sensazione che l\u2019opera raccolga non solo un soggetto, ma anche tutto ci\xF2 che lo circonda.",
        en: "The sense that the artwork gathers not only a subject, but also everything that surrounds it."
      },
      author: "Elena",
      context: {
        it: "Abitazione privata",
        en: "Private home"
      },
      image: "/assets/images/static/commissions-testimonial-elena-placeholder.svg",
      imageAlt: {
        it: "Placeholder ritratto Elena",
        en: "Elena portrait placeholder"
      }
    }
  ],
  featuredEyebrow: {
    it: "Selezione",
    en: "Selection"
  },
  featuredTitle: {
    it: "Lavori su commissione da evidenziare.",
    en: "Commissioned works to highlight."
  },
  featuredBody: {
    it: "Questa sezione pu\xF2 ospitare una selezione di opere nate da un dialogo diretto con collezionisti, spazi o richieste specifiche.",
    en: "This section can host a selection of artworks born from direct dialogue with collectors, spaces or specific requests."
  },
  ctaTitle: {
    it: "Se desideri iniziare una conversazione, il passo successivo \xE8 semplice.",
    en: "If you would like to begin a conversation, the next step is simple."
  },
  ctaBody: {
    it: "Condividi il formato che immagini, il luogo in cui l\u2019opera vivr\xE0 e l\u2019atmosfera che stai cercando. Da l\xEC pu\xF2 emergere una direzione autentica.",
    en: "Share the format you imagine, the place where the work will live and the atmosphere you are looking for. From there, an authentic direction can emerge."
  }
};

// sito-artista/src/app/pages/commissions/commissions.page.ts
var _c0 = (a0, a1) => ({ label: a0, url: a1 });
var _c1 = (a0, a1) => [a0, "EUR", "symbol", "1.0-0", a1];
var _forTrack0 = ($index, $item) => $item.title.it;
var _forTrack1 = ($index, $item) => $item.quote.it;
var _forTrack2 = ($index, $item) => $item.id;
function CommissionsPage_Conditional_0_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const width_r3 = ctx.$implicit;
    const vm_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", width_r3)("disabled", !ctx_r1.isFormatAvailable(width_r3, ctx_r1.getSelectedHeight(vm_r4.heightOptions), vm_r4.siteConfig.commissions));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", width_r3, " cm ");
  }
}
function CommissionsPage_Conditional_0_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const height_r5 = ctx.$implicit;
    const vm_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", height_r5)("disabled", !ctx_r1.isFormatAvailable(ctx_r1.getSelectedWidth(vm_r4.widthOptions), height_r5, vm_r4.siteConfig.commissions));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", height_r5, " cm ");
  }
}
function CommissionsPage_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32)(5, "p", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 32)(11, "p", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 34);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBindV(2, 5, \u0275\u0275pureFunction2(23, _c1, ctx_r1.calculateEstimate(vm_r4.siteConfig.commissions.pricePerSquareCm, ctx_r1.getSelectedWidth(vm_r4.widthOptions), ctx_r1.getSelectedHeight(vm_r4.heightOptions)), vm_r4.currencyLocale)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", vm_r4.language === "it" ? "Acconto 68%" : "68% upfront", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBindV(9, 11, \u0275\u0275pureFunction2(26, _c1, ctx_r1.calculateDeposit(ctx_r1.calculateEstimate(vm_r4.siteConfig.commissions.pricePerSquareCm, ctx_r1.getSelectedWidth(vm_r4.widthOptions), ctx_r1.getSelectedHeight(vm_r4.heightOptions))), vm_r4.currencyLocale)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", vm_r4.language === "it" ? "Saldo 32%" : "32% balance", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBindV(15, 17, \u0275\u0275pureFunction2(29, _c1, ctx_r1.calculateBalance(ctx_r1.calculateEstimate(vm_r4.siteConfig.commissions.pricePerSquareCm, ctx_r1.getSelectedWidth(vm_r4.widthOptions), ctx_r1.getSelectedHeight(vm_r4.heightOptions))), vm_r4.currencyLocale)), " ");
  }
}
function CommissionsPage_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r4.language === "it" ? "Formato non disponibile per le commissioni attuali." : "This format is not available for current commissions.", " ");
  }
}
function CommissionsPage_Conditional_0_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 24)(1, "figure", 35);
    \u0275\u0275element(2, "img", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const vm_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", step_r6.image, \u0275\u0275sanitizeUrl)("alt", step_r6.imageAlt[vm_r4.language] || step_r6.imageAlt.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r4.language === "it" ? "Fase" : "Step");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r6.title[vm_r4.language] || step_r6.title.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r6.body[vm_r4.language] || step_r6.body.it);
  }
}
function CommissionsPage_Conditional_0_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "blockquote", 26)(1, "figure", 35);
    \u0275\u0275element(2, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "footer", 42)(6, "p", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reflection_r7 = ctx.$implicit;
    const vm_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", reflection_r7.image, \u0275\u0275sanitizeUrl)("alt", reflection_r7.imageAlt[vm_r4.language] || reflection_r7.imageAlt.it);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u201C", reflection_r7.quote[vm_r4.language] || reflection_r7.quote.it, "\u201D ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reflection_r7.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", reflection_r7.context[vm_r4.language] || reflection_r7.context.it, " ");
  }
}
function CommissionsPage_Conditional_0_Conditional_59_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-artwork-card", 45);
  }
  if (rf & 2) {
    const artwork_r8 = ctx.$implicit;
    const vm_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("artwork", artwork_r8)("language", vm_r4.language)("variant", "editorial");
  }
}
function CommissionsPage_Conditional_0_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 20)(2, "p", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44);
    \u0275\u0275repeaterCreate(9, CommissionsPage_Conditional_0_Conditional_59_For_10_Template, 1, 3, "app-artwork-card", 45, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.featuredEyebrow[vm_r4.language] || vm_r4.content.featuredEyebrow.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.featuredTitle[vm_r4.language] || vm_r4.content.featuredTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.featuredBody[vm_r4.language] || vm_r4.content.featuredBody.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(vm_r4.featuredWorks);
  }
}
function CommissionsPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-hero", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "aside", 7)(11, "p", 4);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2", 8);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 9);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "label", 11)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 12);
    \u0275\u0275listener("change", function CommissionsPage_Conditional_0_Template_select_change_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWidthChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(22, CommissionsPage_Conditional_0_For_23_Template, 2, 3, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label", 11)(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 12);
    \u0275\u0275listener("change", function CommissionsPage_Conditional_0_Template_select_change_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHeightChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(28, CommissionsPage_Conditional_0_For_29_Template, 2, 3, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 14)(31, "p", 15);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, CommissionsPage_Conditional_0_Conditional_33_Template, 16, 32)(34, CommissionsPage_Conditional_0_Conditional_34_Template, 2, 1, "p", 16);
    \u0275\u0275elementStart(35, "p", 17);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 18);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "section", 19)(40, "div", 20)(41, "p", 4);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h2", 21);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 22);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 23);
    \u0275\u0275repeaterCreate(48, CommissionsPage_Conditional_0_For_49_Template, 9, 5, "article", 24, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "section", 19)(51, "div", 20)(52, "p", 4);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "h2", 21);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 25);
    \u0275\u0275repeaterCreate(57, CommissionsPage_Conditional_0_For_58_Template, 10, 5, "blockquote", 26, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(59, CommissionsPage_Conditional_0_Conditional_59_Template, 11, 3, "section", 19);
    \u0275\u0275elementStart(60, "section", 19)(61, "div", 27)(62, "div", 20)(63, "h2", 28);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 22);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "a", 29);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("image", vm_r4.pagesConfig.commissions.heroImage)("title", vm_r4.content.heroTitle[vm_r4.language] || vm_r4.content.heroTitle.it)("subtitle", vm_r4.content.heroSubtitle[vm_r4.language] || vm_r4.content.heroSubtitle.it)("ctaPrimary", \u0275\u0275pureFunction2(28, _c0, vm_r4.language === "it" ? "Contatta l\u2019artista" : "Contact the artist", vm_r4.contactsPath));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.introEyebrow[vm_r4.language] || vm_r4.content.introEyebrow.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.introTitle[vm_r4.language] || vm_r4.content.introTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.introBody[vm_r4.language] || vm_r4.content.introBody.it, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.estimateEyebrow[vm_r4.language] || vm_r4.content.estimateEyebrow.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.estimateTitle[vm_r4.language] || vm_r4.content.estimateTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.estimateBody[vm_r4.language] || vm_r4.content.estimateBody.it, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r4.language === "it" ? "Larghezza" : "Width");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSelectedWidth(vm_r4.widthOptions));
    \u0275\u0275advance();
    \u0275\u0275repeater(vm_r4.widthOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r4.language === "it" ? "Altezza" : "Height");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getSelectedHeight(vm_r4.heightOptions));
    \u0275\u0275advance();
    \u0275\u0275repeater(vm_r4.heightOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", vm_r4.language === "it" ? "Stima attuale" : "Current estimate", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormatAvailable(ctx_r1.getSelectedWidth(vm_r4.widthOptions), ctx_r1.getSelectedHeight(vm_r4.heightOptions), vm_r4.siteConfig.commissions) ? 33 : 34);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.estimateDisclaimer[vm_r4.language] || vm_r4.content.estimateDisclaimer.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.estimateNote[vm_r4.language] || vm_r4.content.estimateNote.it, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.processEyebrow[vm_r4.language] || vm_r4.content.processEyebrow.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.processTitle[vm_r4.language] || vm_r4.content.processTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.processBody[vm_r4.language] || vm_r4.content.processBody.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(vm_r4.content.steps);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.reflectionsEyebrow[vm_r4.language] || vm_r4.content.reflectionsEyebrow.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.reflectionsTitle[vm_r4.language] || vm_r4.content.reflectionsTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(vm_r4.content.reflections);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(vm_r4.featuredWorks.length > 0 ? 59 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.ctaTitle[vm_r4.language] || vm_r4.content.ctaTitle.it, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r4.content.ctaBody[vm_r4.language] || vm_r4.content.ctaBody.it, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", vm_r4.contactsPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vm_r4.language === "it" ? "Apri la conversazione" : "Start the conversation", " ");
  }
}
var CommissionsPage = class _CommissionsPage {
  siteService = inject(SiteService);
  artworkService = inject(ArtworkService);
  languageService = inject(LanguageService);
  seoService = inject(SeoService);
  route = inject(ActivatedRoute);
  selectedWidthCm = null;
  selectedHeightCm = null;
  vm$ = combineLatest([
    this.siteService.getSiteConfig(),
    this.siteService.getPagesConfig(),
    this.artworkService.getArtworks()
  ]).pipe(map(([siteConfig, pagesConfig, artworks]) => {
    const language = this.languageService.getRouteLanguage(this.route.snapshot);
    const featuredArtworkIds = Array.isArray(pagesConfig.commissions.featuredArtworkIds) ? pagesConfig.commissions.featuredArtworkIds : [];
    const widthOptions = this.buildDimensionOptions(siteConfig.commissions);
    const heightOptions = this.buildDimensionOptions(siteConfig.commissions);
    const featuredWorks = artworks.filter((artwork) => featuredArtworkIds.includes(artwork.id));
    return {
      siteConfig,
      pagesConfig,
      language,
      content: this.buildPageContent(pagesConfig),
      contactsPath: this.languageService.buildLocalizedPath(language, "contacts"),
      currencyLocale: language === "it" ? "it" : "en",
      widthOptions,
      heightOptions,
      featuredWorks
    };
  }), tap(({ siteConfig, language }) => {
    this.seoService.applyLocalizedAlternates(siteConfig.domain, this.route.snapshot, void 0, siteConfig.defaultLanguage);
    this.seoService.applyPageMetadata({
      title: language === "en" ? `Commissions | ${siteConfig.artistName}` : `Commissioni | ${siteConfig.artistName}`,
      description: language === "en" ? `Commissioned artworks and bespoke requests for collectors, interiors and curatorial projects.` : `Opere su commissione e richieste personalizzate per collezionisti, interni e progetti curatoriali.`,
      url: `${siteConfig.domain}${this.languageService.buildLocalizedPath(language, "commissions")}`,
      image: `${siteConfig.domain}${siteConfig.seo.defaultOgImage}`,
      siteName: siteConfig.artistName,
      language
    });
  }));
  onWidthChange(rawValue) {
    const parsed = Number(rawValue);
    this.selectedWidthCm = Number.isFinite(parsed) ? parsed : null;
  }
  onHeightChange(rawValue) {
    const parsed = Number(rawValue);
    this.selectedHeightCm = Number.isFinite(parsed) ? parsed : null;
  }
  getSelectedWidth(options) {
    return this.resolveSelectedValue(this.selectedWidthCm, options, 30);
  }
  getSelectedHeight(options) {
    return this.resolveSelectedValue(this.selectedHeightCm, options, 40);
  }
  calculateEstimate(rate, widthCm, heightCm) {
    return Math.round(rate * widthCm * heightCm * 100) / 100;
  }
  calculateDeposit(amount) {
    return Math.round(amount * 0.68 * 100) / 100;
  }
  calculateBalance(amount) {
    return Math.round(amount * 0.32 * 100) / 100;
  }
  isFormatAvailable(widthCm, heightCm, config) {
    const shortSide = Math.min(widthCm, heightCm);
    const longSide = Math.max(widthCm, heightCm);
    return shortSide >= config.minWidthCm && shortSide <= config.maxWidthCm && longSide >= config.minHeightCm && longSide <= config.maxHeightCm;
  }
  buildDimensionOptions(config) {
    const min = Math.min(config.minWidthCm, config.minHeightCm);
    const max = Math.max(config.maxWidthCm, config.maxHeightCm);
    const options = [];
    for (let value = min; value <= max; value += 10) {
      options.push(value);
    }
    return options;
  }
  resolveSelectedValue(selectedValue, options, preferredValue) {
    if (selectedValue !== null && options.includes(selectedValue)) {
      return selectedValue;
    }
    if (options.includes(preferredValue)) {
      return preferredValue;
    }
    return options[0] ?? 0;
  }
  buildPageContent(pagesConfig) {
    const defaultContent = COMMISSIONS_CONTENT;
    const configuredSteps = Array.isArray(pagesConfig.commissions?.steps) ? pagesConfig.commissions.steps : [];
    const configuredTestimonials = Array.isArray(pagesConfig.commissions?.testimonials) ? pagesConfig.commissions.testimonials : [];
    return __spreadProps(__spreadValues({}, defaultContent), {
      steps: defaultContent.steps.map((step, index) => __spreadProps(__spreadValues({}, step), {
        image: configuredSteps[index]?.image || step.image,
        imageAlt: configuredSteps[index]?.imageAlt || step.imageAlt
      })),
      reflections: defaultContent.reflections.map((reflection, index) => __spreadProps(__spreadValues({}, reflection), {
        author: configuredTestimonials[index]?.author || reflection.author,
        context: configuredTestimonials[index]?.context || reflection.context,
        quote: configuredTestimonials[index]?.quote || reflection.quote,
        image: configuredTestimonials[index]?.image || reflection.image,
        imageAlt: configuredTestimonials[index]?.imageAlt || reflection.imageAlt
      }))
    });
  }
  static \u0275fac = function CommissionsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommissionsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionsPage, selectors: [["app-commissions-page"]], decls: 2, vars: 3, consts: [["height", "large", 3, "image", "title", "subtitle", "ctaPrimary"], [1, "commissions-shell", "mx-auto", "max-w-7xl", "px-5", "py-14", "sm:px-8", "lg:px-12"], [1, "commissions-intro", "grid", "gap-8", "lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)]", "lg:items-start"], [1, "commissions-panel", "rounded-[2rem]", "p-7", "sm:p-9"], [1, "text-xs", "uppercase", "tracking-[0.3em]", "text-[var(--site-muted)]"], [1, "mt-5", "max-w-3xl", "text-4xl", "leading-tight", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-6", "max-w-3xl", "text-base", "leading-8", "text-[var(--site-text)]/76", "sm:text-lg"], [1, "commissions-panel", "commissions-estimate", "rounded-[2rem]", "p-7", "sm:p-9"], [1, "mt-5", "text-3xl", "leading-tight", "text-[var(--site-text)]"], [1, "mt-5", "text-sm", "leading-8", "text-[var(--site-muted)]"], [1, "mt-8", "grid", "gap-4", "sm:grid-cols-2"], [1, "commissions-estimate__field"], [1, "commissions-estimate__select", 3, "change", "value"], [3, "value", "disabled"], [1, "commissions-estimate__result", "mt-8", "rounded-[1.5rem]", "px-5", "py-5"], [1, "text-[11px]", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-3", "text-xl", "leading-8", "text-[var(--site-text)]"], [1, "mt-3", "text-sm", "leading-7", "text-[var(--site-muted)]"], [1, "mt-2", "text-sm", "leading-7", "text-[var(--site-muted)]"], [1, "mt-16"], [1, "max-w-3xl"], [1, "mt-5", "text-4xl", "leading-tight", "text-[var(--site-text)]", "sm:text-5xl"], [1, "mt-5", "text-base", "leading-8", "text-[var(--site-text)]/76", "sm:text-lg"], [1, "mt-10", "grid", "gap-5", "lg:grid-cols-2"], [1, "commissions-panel", "rounded-[1.75rem]", "p-6", "sm:p-7"], [1, "mt-10", "grid", "gap-5", "lg:grid-cols-3"], [1, "commissions-panel", "commissions-panel--quote", "rounded-[1.75rem]", "p-6", "sm:p-7"], [1, "commissions-panel", "rounded-[2rem]", "p-7", "sm:p-9", "lg:grid", "lg:grid-cols-[minmax(0,1fr)_auto]", "lg:items-end", "lg:gap-10"], [1, "text-3xl", "leading-tight", "text-[var(--site-text)]", "sm:text-4xl"], [1, "mt-8", "inline-flex", "rounded-full", "bg-[var(--site-text)]", "px-6", "py-3", "text-xs", "uppercase", "tracking-[0.22em]", "text-white", "no-underline", "lg:mt-0", 3, "routerLink"], [1, "mt-3", "text-3xl", "text-[var(--site-text)]", "sm:text-4xl"], [1, "mt-5", "grid", "gap-3", "sm:grid-cols-2"], [1, "commissions-estimate__split", "rounded-[1.2rem]", "px-4", "py-4"], [1, "text-[11px]", "uppercase", "tracking-[0.24em]", "text-[var(--site-muted)]"], [1, "mt-2", "text-xl", "text-[var(--site-text)]"], [1, "overflow-hidden", "rounded-[1.2rem]"], [1, "h-56", "w-full", "object-cover", 3, "src", "alt"], [1, "text-xs", "uppercase", "tracking-[0.28em]", "text-[var(--site-muted)]"], [1, "mt-4", "text-2xl", "text-[var(--site-text)]"], [1, "mt-4", "text-sm", "leading-8", "text-[var(--site-muted)]"], [1, "h-48", "w-full", "object-cover", 3, "src", "alt"], [1, "text-lg", "leading-9", "text-[var(--site-text)]/85"], [1, "mt-6", "border-t", "border-[rgba(188,160,129,0.18)]", "pt-4"], [1, "text-sm", "uppercase", "tracking-[0.24em]", "text-[var(--site-text)]"], [1, "mt-10", "space-y-8"], [3, "artwork", "language", "variant"]], template: function CommissionsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CommissionsPage_Conditional_0_Template, 69, 31);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, HeroComponent, ArtworkCardComponent, AsyncPipe, CurrencyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.commissions-shell[_ngcontent-%COMP%] {\n  position: relative;\n}\n.commissions-panel[_ngcontent-%COMP%] {\n  border: 1px solid rgba(188, 160, 129, 0.22);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 246, 0.96),\n      rgba(252, 246, 239, 0.98));\n  box-shadow: 0 24px 70px rgba(105, 72, 44, 0.08);\n}\n.commissions-panel--quote[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 252, 248, 0.98),\n      rgba(250, 244, 236, 0.98));\n}\n.commissions-panel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 1.4rem;\n}\n.commissions-estimate__field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.commissions-estimate__field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--site-muted);\n}\n.commissions-estimate__select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgba(188, 160, 129, 0.28);\n  border-radius: 999px;\n  background: rgba(255, 253, 249, 0.96);\n  padding: 0.95rem 1.1rem;\n  color: var(--site-text);\n  font-size: 0.98rem;\n  outline: none;\n  transition: border-color 0.24s ease, box-shadow 0.24s ease;\n}\n.commissions-estimate__select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(159, 116, 82, 0.42);\n  box-shadow: 0 0 0 3px rgba(159, 116, 82, 0.08);\n}\n.commissions-estimate__result[_ngcontent-%COMP%] {\n  border: 1px solid rgba(188, 160, 129, 0.18);\n  background: rgba(255, 253, 249, 0.85);\n}\n.commissions-estimate__split[_ngcontent-%COMP%] {\n  border: 1px solid rgba(188, 160, 129, 0.16);\n  background: rgba(255, 255, 255, 0.72);\n}\n/*# sourceMappingURL=commissions.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionsPage, [{
    type: Component,
    args: [{ selector: "app-commissions-page", standalone: true, imports: [AsyncPipe, CurrencyPipe, RouterLink, HeroComponent, ArtworkCardComponent], template: `@if (vm$ | async; as vm) {
  <app-hero
    [image]="vm.pagesConfig.commissions.heroImage"
    [title]="vm.content.heroTitle[vm.language] || vm.content.heroTitle.it"
    [subtitle]="vm.content.heroSubtitle[vm.language] || vm.content.heroSubtitle.it"
    [ctaPrimary]="{ label: vm.language === 'it' ? 'Contatta l\u2019artista' : 'Contact the artist', url: vm.contactsPath }"
    height="large" />

  <section class="commissions-shell mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
    <div class="commissions-intro grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-start">
      <div class="commissions-panel rounded-[2rem] p-7 sm:p-9">
        <p class="text-xs uppercase tracking-[0.3em] text-[var(--site-muted)]">
          {{ vm.content.introEyebrow[vm.language] || vm.content.introEyebrow.it }}
        </p>
        <h1 class="mt-5 max-w-3xl text-4xl leading-tight text-[var(--site-text)] sm:text-5xl">
          {{ vm.content.introTitle[vm.language] || vm.content.introTitle.it }}
        </h1>
        <p class="mt-6 max-w-3xl text-base leading-8 text-[var(--site-text)]/76 sm:text-lg">
          {{ vm.content.introBody[vm.language] || vm.content.introBody.it }}
        </p>
      </div>

      <aside class="commissions-panel commissions-estimate rounded-[2rem] p-7 sm:p-9">
        <p class="text-xs uppercase tracking-[0.3em] text-[var(--site-muted)]">
          {{ vm.content.estimateEyebrow[vm.language] || vm.content.estimateEyebrow.it }}
        </p>
        <h2 class="mt-5 text-3xl leading-tight text-[var(--site-text)]">
          {{ vm.content.estimateTitle[vm.language] || vm.content.estimateTitle.it }}
        </h2>
        <p class="mt-5 text-sm leading-8 text-[var(--site-muted)]">
          {{ vm.content.estimateBody[vm.language] || vm.content.estimateBody.it }}
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <label class="commissions-estimate__field">
            <span>{{ vm.language === 'it' ? 'Larghezza' : 'Width' }}</span>
            <select
              class="commissions-estimate__select"
              [value]="getSelectedWidth(vm.widthOptions)"
              (change)="onWidthChange(($any($event.target).value))">
              @for (width of vm.widthOptions; track width) {
                <option
                  [value]="width"
                  [disabled]="!isFormatAvailable(width, getSelectedHeight(vm.heightOptions), vm.siteConfig.commissions)">
                  {{ width }} cm
                </option>
              }
            </select>
          </label>

          <label class="commissions-estimate__field">
            <span>{{ vm.language === 'it' ? 'Altezza' : 'Height' }}</span>
            <select
              class="commissions-estimate__select"
              [value]="getSelectedHeight(vm.heightOptions)"
              (change)="onHeightChange(($any($event.target).value))">
              @for (height of vm.heightOptions; track height) {
                <option
                  [value]="height"
                  [disabled]="!isFormatAvailable(getSelectedWidth(vm.widthOptions), height, vm.siteConfig.commissions)">
                  {{ height }} cm
                </option>
              }
            </select>
          </label>
        </div>

        <div class="commissions-estimate__result mt-8 rounded-[1.5rem] px-5 py-5">
          <p class="text-[11px] uppercase tracking-[0.28em] text-[var(--site-muted)]">
            {{ vm.language === 'it' ? 'Stima attuale' : 'Current estimate' }}
          </p>
          @if (isFormatAvailable(getSelectedWidth(vm.widthOptions), getSelectedHeight(vm.heightOptions), vm.siteConfig.commissions)) {
            <p class="mt-3 text-3xl text-[var(--site-text)] sm:text-4xl">
              {{
                calculateEstimate(
                  vm.siteConfig.commissions.pricePerSquareCm,
                  getSelectedWidth(vm.widthOptions),
                  getSelectedHeight(vm.heightOptions)
                ) | currency : 'EUR' : 'symbol' : '1.0-0' : vm.currencyLocale
              }}
            </p>
            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <div class="commissions-estimate__split rounded-[1.2rem] px-4 py-4">
                <p class="text-[11px] uppercase tracking-[0.24em] text-[var(--site-muted)]">
                  {{ vm.language === 'it' ? 'Acconto 68%' : '68% upfront' }}
                </p>
                <p class="mt-2 text-xl text-[var(--site-text)]">
                  {{
                    calculateDeposit(
                      calculateEstimate(
                        vm.siteConfig.commissions.pricePerSquareCm,
                        getSelectedWidth(vm.widthOptions),
                        getSelectedHeight(vm.heightOptions)
                      )
                    ) | currency : 'EUR' : 'symbol' : '1.0-0' : vm.currencyLocale
                  }}
                </p>
              </div>
              <div class="commissions-estimate__split rounded-[1.2rem] px-4 py-4">
                <p class="text-[11px] uppercase tracking-[0.24em] text-[var(--site-muted)]">
                  {{ vm.language === 'it' ? 'Saldo 32%' : '32% balance' }}
                </p>
                <p class="mt-2 text-xl text-[var(--site-text)]">
                  {{
                    calculateBalance(
                      calculateEstimate(
                        vm.siteConfig.commissions.pricePerSquareCm,
                        getSelectedWidth(vm.widthOptions),
                        getSelectedHeight(vm.heightOptions)
                      )
                    ) | currency : 'EUR' : 'symbol' : '1.0-0' : vm.currencyLocale
                  }}
                </p>
              </div>
            </div>
          } @else {
            <p class="mt-3 text-xl leading-8 text-[var(--site-text)]">
              {{ vm.language === 'it' ? 'Formato non disponibile per le commissioni attuali.' : 'This format is not available for current commissions.' }}
            </p>
          }
          <p class="mt-3 text-sm leading-7 text-[var(--site-muted)]">
            {{ vm.content.estimateDisclaimer[vm.language] || vm.content.estimateDisclaimer.it }}
          </p>
          <p class="mt-2 text-sm leading-7 text-[var(--site-muted)]">
            {{ vm.content.estimateNote[vm.language] || vm.content.estimateNote.it }}
          </p>
        </div>
      </aside>
    </div>

    <section class="mt-16">
      <div class="max-w-3xl">
        <p class="text-xs uppercase tracking-[0.3em] text-[var(--site-muted)]">
          {{ vm.content.processEyebrow[vm.language] || vm.content.processEyebrow.it }}
        </p>
        <h2 class="mt-5 text-4xl leading-tight text-[var(--site-text)] sm:text-5xl">
          {{ vm.content.processTitle[vm.language] || vm.content.processTitle.it }}
        </h2>
        <p class="mt-5 text-base leading-8 text-[var(--site-text)]/76 sm:text-lg">
          {{ vm.content.processBody[vm.language] || vm.content.processBody.it }}
        </p>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-2">
        @for (step of vm.content.steps; track step.title.it) {
          <article class="commissions-panel rounded-[1.75rem] p-6 sm:p-7">
            <figure class="overflow-hidden rounded-[1.2rem]">
              <img
                [src]="step.image"
                [alt]="step.imageAlt[vm.language] || step.imageAlt.it"
                class="h-56 w-full object-cover" />
            </figure>
            <p class="text-xs uppercase tracking-[0.28em] text-[var(--site-muted)]">{{ vm.language === 'it' ? 'Fase' : 'Step' }}</p>
            <h3 class="mt-4 text-2xl text-[var(--site-text)]">{{ step.title[vm.language] || step.title.it }}</h3>
            <p class="mt-4 text-sm leading-8 text-[var(--site-muted)]">{{ step.body[vm.language] || step.body.it }}</p>
          </article>
        }
      </div>
    </section>

    <section class="mt-16">
      <div class="max-w-3xl">
        <p class="text-xs uppercase tracking-[0.3em] text-[var(--site-muted)]">
          {{ vm.content.reflectionsEyebrow[vm.language] || vm.content.reflectionsEyebrow.it }}
        </p>
        <h2 class="mt-5 text-4xl leading-tight text-[var(--site-text)] sm:text-5xl">
          {{ vm.content.reflectionsTitle[vm.language] || vm.content.reflectionsTitle.it }}
        </h2>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        @for (reflection of vm.content.reflections; track reflection.quote.it) {
          <blockquote class="commissions-panel commissions-panel--quote rounded-[1.75rem] p-6 sm:p-7">
            <figure class="overflow-hidden rounded-[1.2rem]">
              <img
                [src]="reflection.image"
                [alt]="reflection.imageAlt[vm.language] || reflection.imageAlt.it"
                class="h-48 w-full object-cover" />
            </figure>
            <p class="text-lg leading-9 text-[var(--site-text)]/85">
              \u201C{{ reflection.quote[vm.language] || reflection.quote.it }}\u201D
            </p>
            <footer class="mt-6 border-t border-[rgba(188,160,129,0.18)] pt-4">
              <p class="text-sm uppercase tracking-[0.24em] text-[var(--site-text)]">{{ reflection.author }}</p>
              <p class="mt-2 text-sm leading-7 text-[var(--site-muted)]">
                {{ reflection.context[vm.language] || reflection.context.it }}
              </p>
            </footer>
          </blockquote>
        }
      </div>
    </section>

    @if (vm.featuredWorks.length > 0) {
      <section class="mt-16">
        <div class="max-w-3xl">
          <p class="text-xs uppercase tracking-[0.3em] text-[var(--site-muted)]">
            {{ vm.content.featuredEyebrow[vm.language] || vm.content.featuredEyebrow.it }}
          </p>
          <h2 class="mt-5 text-4xl leading-tight text-[var(--site-text)] sm:text-5xl">
            {{ vm.content.featuredTitle[vm.language] || vm.content.featuredTitle.it }}
          </h2>
          <p class="mt-5 text-base leading-8 text-[var(--site-text)]/76 sm:text-lg">
            {{ vm.content.featuredBody[vm.language] || vm.content.featuredBody.it }}
          </p>
        </div>

        <div class="mt-10 space-y-8">
          @for (artwork of vm.featuredWorks; track artwork.id) {
            <app-artwork-card [artwork]="artwork" [language]="vm.language" [variant]="'editorial'"></app-artwork-card>
          }
        </div>
      </section>
    }

    <section class="mt-16">
      <div class="commissions-panel rounded-[2rem] p-7 sm:p-9 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
        <div class="max-w-3xl">
          <h2 class="text-3xl leading-tight text-[var(--site-text)] sm:text-4xl">
            {{ vm.content.ctaTitle[vm.language] || vm.content.ctaTitle.it }}
          </h2>
          <p class="mt-5 text-base leading-8 text-[var(--site-text)]/76 sm:text-lg">
            {{ vm.content.ctaBody[vm.language] || vm.content.ctaBody.it }}
          </p>
        </div>

        <a
          [routerLink]="vm.contactsPath"
          class="mt-8 inline-flex rounded-full bg-[var(--site-text)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-white no-underline lg:mt-0">
          {{ vm.language === 'it' ? 'Apri la conversazione' : 'Start the conversation' }}
        </a>
      </div>
    </section>
  </section>
}
`, styles: ["/* sito-artista/src/app/pages/commissions/commissions.page.sass */\n:host {\n  display: block;\n}\n.commissions-shell {\n  position: relative;\n}\n.commissions-panel {\n  border: 1px solid rgba(188, 160, 129, 0.22);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 246, 0.96),\n      rgba(252, 246, 239, 0.98));\n  box-shadow: 0 24px 70px rgba(105, 72, 44, 0.08);\n}\n.commissions-panel--quote {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 252, 248, 0.98),\n      rgba(250, 244, 236, 0.98));\n}\n.commissions-panel figure + p {\n  margin-top: 1.4rem;\n}\n.commissions-estimate__field {\n  display: grid;\n  gap: 0.75rem;\n}\n.commissions-estimate__field span {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--site-muted);\n}\n.commissions-estimate__select {\n  width: 100%;\n  border: 1px solid rgba(188, 160, 129, 0.28);\n  border-radius: 999px;\n  background: rgba(255, 253, 249, 0.96);\n  padding: 0.95rem 1.1rem;\n  color: var(--site-text);\n  font-size: 0.98rem;\n  outline: none;\n  transition: border-color 0.24s ease, box-shadow 0.24s ease;\n}\n.commissions-estimate__select:focus {\n  border-color: rgba(159, 116, 82, 0.42);\n  box-shadow: 0 0 0 3px rgba(159, 116, 82, 0.08);\n}\n.commissions-estimate__result {\n  border: 1px solid rgba(188, 160, 129, 0.18);\n  background: rgba(255, 253, 249, 0.85);\n}\n.commissions-estimate__split {\n  border: 1px solid rgba(188, 160, 129, 0.16);\n  background: rgba(255, 255, 255, 0.72);\n}\n/*# sourceMappingURL=commissions.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionsPage, { className: "CommissionsPage", filePath: "sito-artista/src/app/pages/commissions/commissions.page.ts", lineNumber: 21 });
})();
export {
  CommissionsPage
};
//# sourceMappingURL=chunk-XOF4V36S.js.map
