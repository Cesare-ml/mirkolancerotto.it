import {
  CookieConsentService
} from "./chunk-PWVYDVUF.js";
import {
  ActivatedRoute,
  AsyncPipe,
  LanguageService,
  RouterLink,
  SeoService,
  SiteService
} from "./chunk-5ZWV2562.js";
import {
  Component,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O37V3GPT.js";

// sito-artista/src/app/pages/legal/legal.page.ts
function LegalPage_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Come vengono trattati i dati personali quando visiti il sito, scrivi allo studio, ti iscrivi alla newsletter o partecipi a un\u2019asta." : "How personal data is processed when you browse the website, contact the studio, subscribe to the newsletter or take part in an auction.", " ");
  }
}
function LegalPage_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Quali tecnologie di memorizzazione e tracciamento utilizza il sito, perch\xE9 vengono usate e come puoi controllarle." : "Which storage and tracking technologies the website uses, why they are used and how you can control them.", " ");
  }
}
function LegalPage_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("01 \xB7 ", vm_r1.language === "it" ? "Titolare" : "Controller");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("02 \xB7 ", vm_r1.language === "it" ? "Trattamenti" : "Processing");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("03 \xB7 ", vm_r1.language === "it" ? "Destinatari" : "Recipients");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("04 \xB7 ", vm_r1.language === "it" ? "Trasferimenti" : "Transfers");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("05 \xB7 ", vm_r1.language === "it" ? "Diritti" : "Rights");
  }
}
function LegalPage_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("01 \xB7 ", vm_r1.language === "it" ? "Tecnologie usate" : "Technologies");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("02 \xB7 ", vm_r1.language === "it" ? "Elenco dettagliato" : "Detailed list");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("03 \xB7 ", vm_r1.language === "it" ? "Le tue scelte" : "Your choices");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("04 \xB7 ", vm_r1.language === "it" ? "Terze parti" : "Third parties");
  }
}
function LegalPage_Conditional_0_Conditional_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Sede" : "Address");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.siteConfig.legal.controllerAddress);
  }
}
function LegalPage_Conditional_0_Conditional_19_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Codice fiscale / P. IVA" : "Tax / VAT ID");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.siteConfig.legal.taxId);
  }
}
function LegalPage_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "span", 19);
    \u0275\u0275text(2, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dl", 20)(6, "div")(7, "dt");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, LegalPage_Conditional_0_Conditional_19_Conditional_11_Template, 5, 2, "div");
    \u0275\u0275conditionalCreate(12, LegalPage_Conditional_0_Conditional_19_Conditional_12_Template, 5, 2, "div");
    \u0275\u0275elementStart(13, "div")(14, "dt");
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd")(17, "a", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "section", 22)(22, "span", 19);
    \u0275\u0275text(23, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h2");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 23)(27, "table")(28, "thead")(29, "tr")(30, "th");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody")(39, "tr")(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "tr")(49, "td");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "tr")(58, "td");
    \u0275\u0275text(59, "Newsletter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "td");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "tr")(76, "td");
    \u0275\u0275text(77, "Google Analytics 4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "td");
    \u0275\u0275text(81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "td");
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(84, "p");
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p");
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "section", 24)(89, "span", 19);
    \u0275\u0275text(90, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "h2");
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p");
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p");
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "section", 25)(98, "span", 19);
    \u0275\u0275text(99, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "h2");
    \u0275\u0275text(101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "p");
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "section", 26)(105, "span", 19);
    \u0275\u0275text(106, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "h2");
    \u0275\u0275text(108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "p");
    \u0275\u0275text(110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p")(112, "a", 21);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "p");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "a", 27);
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "section")(119, "span", 19);
    \u0275\u0275text(120, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "h2");
    \u0275\u0275text(122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p");
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Titolare del trattamento" : "Data controller");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Titolare" : "Controller");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.siteConfig.legal.controllerName);
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r1.siteConfig.legal.controllerAddress ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r1.siteConfig.legal.taxId ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", "mailto:" + vm_r1.siteConfig.legal.contactEmail, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vm_r1.siteConfig.legal.contactEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Puoi usare questo indirizzo per domande sul trattamento dei dati e per esercitare i diritti descritti di seguito." : "You can use this address for questions about data processing and to exercise the rights described below.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Dati, finalit\xE0 e conservazione" : "Data, purposes and retention");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Attivit\xE0" : "Activity");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Dati e finalit\xE0" : "Data and purpose");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Base giuridica" : "Legal basis");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Conservazione" : "Retention");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Navigazione e sicurezza" : "Browsing and security");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Indirizzo IP, log tecnici, dispositivo e richieste di rete, per erogare e proteggere il sito." : "IP address, technical logs, device and network requests, to deliver and protect the website.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Legittimo interesse alla sicurezza e corretta erogazione." : "Legitimate interest in security and service delivery.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Per il tempo strettamente necessario; i log del provider seguono i suoi termini." : "Only as long as necessary; provider logs follow its terms.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Modulo contatti" : "Contact form");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Nome, email, oggetto, messaggio e dati anti-spam per rispondere alla richiesta." : "Name, email, subject, message and anti-spam data to answer your request.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Misure precontrattuali richieste dall\u2019interessato e legittimo interesse alla gestione della corrispondenza." : "Pre-contractual steps requested by the user and legitimate interest in correspondence management.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", vm_r1.siteConfig.legal.contactRetentionMonths, " ", vm_r1.language === "it" ? "mesi, salvo necessit\xE0 contrattuali o difensive." : "months, unless contractual or legal defence needs apply.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Email e, facoltativamente, nome e cognome per inviare aggiornamenti dello studio." : "Email and, optionally, first and last name to send studio updates.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Consenso, revocabile in ogni momento." : "Consent, withdrawable at any time.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Fino alla revoca o disiscrizione; prova del consenso e suppression list nei limiti necessari." : "Until withdrawal or unsubscribe; consent evidence and suppression list as necessary.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Partecipazione alle aste" : "Auction participation");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Nome, cognome, email verificata, offerte, orari e dati tecnici per identificare il partecipante, registrare offerte e gestire l\u2019eventuale vendita." : "Name, surname, verified email, bids, timestamps and technical data to identify participants, record bids and manage any sale.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Esecuzione di misure precontrattuali e del rapporto contrattuale; obblighi legali." : "Pre-contractual and contractual performance; legal obligations.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Per la durata dell\u2019asta e, per dati contrattuali e contabili, fino a 10 anni secondo gli obblighi applicabili." : "For the auction duration and, for contractual/accounting records, up to 10 years under applicable obligations.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Identificatori online e dati d\u2019uso per statistiche aggregate sul sito, solo dopo consenso." : "Online identifiers and usage data for website statistics, only after consent.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Consenso." : "Consent.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", vm_r1.siteConfig.legal.analyticsRetentionMonths, " ", vm_r1.language === "it" ? "mesi per i dati evento, secondo la configurazione della propriet\xE0 Analytics." : "months for event data, according to the Analytics property configuration.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Il conferimento dei dati nei moduli \xE8 facoltativo, ma i campi indicati come obbligatori sono necessari per rispondere, iscrivere alla newsletter o registrare un\u2019offerta." : "Providing form data is optional, but fields marked as required are necessary to reply, subscribe you or register a bid.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Non vengono adottate decisioni esclusivamente automatizzate che producano effetti giuridici sulla persona." : "No solely automated decisions producing legal effects on individuals are made.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Destinatari e fornitori" : "Recipients and providers");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "I dati possono essere trattati da fornitori che operano come responsabili o autonomi titolari secondo il servizio: provider di hosting e infrastruttura, Cloudflare per Worker e Turnstile, Mailchimp per la newsletter, Google per Analytics, provider email e consulenti tecnici o professionali. I dati delle offerte pubblicati sul sito sono anonimizzati." : "Data may be processed by providers acting as processors or independent controllers depending on the service: hosting and infrastructure providers, Cloudflare for Workers and Turnstile, Mailchimp for newsletters, Google for Analytics, email providers and technical or professional advisers. Bid data displayed publicly is anonymised.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "I dati non sono venduti n\xE9 utilizzati per pubblicit\xE0 comportamentale dal titolare." : "The controller does not sell data or use it for behavioural advertising.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Trasferimenti fuori dallo SEE" : "Transfers outside the EEA");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Alcuni fornitori possono trattare dati negli Stati Uniti o in altri Paesi. Quando necessario, il trasferimento si basa su decisioni di adeguatezza, Data Privacy Framework UE-USA per i soggetti aderenti o Clausole Contrattuali Standard, insieme alle misure supplementari applicabili. Consulta le informative dei singoli fornitori per i dettagli aggiornati." : "Some providers may process data in the United States or other countries. Where required, transfers rely on adequacy decisions, the EU-US Data Privacy Framework for participating organisations or Standard Contractual Clauses, together with applicable supplementary measures. See each provider\u2019s notice for current details.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "I tuoi diritti" : "Your rights");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Nei casi previsti dagli articoli 15-22 GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilit\xE0 e opposizione. Puoi revocare il consenso in qualsiasi momento senza pregiudicare la liceit\xE0 del trattamento precedente." : "Where Articles 15-22 GDPR apply, you may request access, rectification, erasure, restriction, portability and object to processing. You may withdraw consent at any time without affecting prior lawful processing.");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + vm_r1.siteConfig.legal.contactEmail, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vm_r1.siteConfig.legal.contactEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali o all\u2019autorit\xE0 di controllo competente del tuo Stato membro." : "You also have the right to lodge a complaint with the Italian Data Protection Authority or the competent supervisory authority in your Member State.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", vm_r1.language === "it" ? "Presentare un reclamo al Garante" : "Lodge a complaint with the Italian DPA", " \u2197");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Sicurezza e aggiornamenti" : "Security and updates");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Sono adottate misure tecniche e organizzative proporzionate per limitare accessi non autorizzati, perdita o uso improprio dei dati. Questa informativa pu\xF2 essere aggiornata quando cambiano servizi, fornitori o norme; la data in apertura identifica la versione corrente." : "Proportionate technical and organisational measures are used to limit unauthorised access, loss or misuse. This notice may be updated when services, providers or laws change; the date above identifies the current version.");
  }
}
function LegalPage_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 28)(1, "span", 19);
    \u0275\u0275text(2, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "section", 29)(10, "span", 19);
    \u0275\u0275text(11, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h2");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 23)(15, "table")(16, "thead")(17, "tr")(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody")(27, "tr")(28, "td")(29, "code");
    \u0275\u0275text(30, "site_cookie_consent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "tr")(38, "td")(39, "code");
    \u0275\u0275text(40, "site-cookie-consent-v2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tr")(48, "td")(49, "code");
    \u0275\u0275text(50, "auction-session:<id>");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "tr")(58, "td");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "td")(68, "code");
    \u0275\u0275text(69, "_ga");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, ", ");
    \u0275\u0275elementStart(71, "code");
    \u0275\u0275text(72, "_ga_*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "td");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "td");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "tr")(80, "td")(81, "code");
    \u0275\u0275text(82, "_gid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, ", ");
    \u0275\u0275elementStart(84, "code");
    \u0275\u0275text(85, "_gat*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "td");
    \u0275\u0275text(87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "td");
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "td");
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(92, "p");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "section", 30)(95, "span", 19);
    \u0275\u0275text(96, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "h2");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p");
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "button", 31);
    \u0275\u0275listener("click", function LegalPage_Conditional_0_Conditional_20_Template_button_click_101_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCookiePreferences());
    });
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p");
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "section", 32)(106, "span", 19);
    \u0275\u0275text(107, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "h2");
    \u0275\u0275text(109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 33)(111, "a", 34);
    \u0275\u0275text(112, "Google Privacy \u2197");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "a", 35);
    \u0275\u0275text(114, "Cloudflare Privacy \u2197");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "p");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "section")(118, "span", 19);
    \u0275\u0275text(119, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "h2");
    \u0275\u0275text(121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "p");
    \u0275\u0275text(123);
    \u0275\u0275elementStart(124, "a", 21);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "p");
    \u0275\u0275text(128);
    \u0275\u0275elementStart(129, "a", 36);
    \u0275\u0275text(130, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(131, ".");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Cookie e tecnologie simili" : "Cookies and similar technologies");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "I cookie sono piccoli dati salvati dal browser. Il sito usa anche localStorage, che conserva preferenze e sessioni tecniche nel dispositivo. Classifichiamo gli strumenti in necessari e analytics in base alla loro finalit\xE0." : "Cookies are small pieces of data stored by the browser. The website also uses localStorage to keep preferences and technical sessions on the device. Tools are classified as necessary or analytics according to purpose.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Gli strumenti necessari non richiedono consenso perch\xE9 servono a erogare funzionalit\xE0 richieste o a ricordare le scelte privacy. Gli analytics vengono attivati solo dopo una scelta positiva." : "Necessary tools do not require consent because they deliver requested features or remember privacy choices. Analytics tools are activated only after a positive choice.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Elenco degli strumenti" : "Technology list");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Nome" : "Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Tipo / fornitore" : "Type / provider");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Finalit\xE0" : "Purpose");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Durata" : "Duration");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Cookie tecnico, prima parte" : "Technical first-party cookie");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Registra versione, data e preferenza Analytics." : "Stores version, date and Analytics preference.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("180 ", vm_r1.language === "it" ? "giorni" : "days");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("localStorage, ", vm_r1.language === "it" ? "prima parte" : "first party");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Copia locale della scelta cookie per renderla stabile." : "Local copy of cookie choices for reliable persistence.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("180 ", vm_r1.language === "it" ? "giorni" : "days");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("localStorage, ", vm_r1.language === "it" ? "prima parte" : "first party");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Mantiene la sessione verificata del partecipante per l\u2019asta richiesta." : "Keeps a verified participant session for the requested auction.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Fino alla scadenza della sessione o alla rimozione locale." : "Until session expiry or local removal.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Identificatori Turnstile" : "Turnstile identifiers");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Cloudflare, necessari" : "Cloudflare, necessary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Prevenzione di spam e abusi nel modulo contatti." : "Spam and abuse prevention in the contact form.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Secondo la configurazione e l\u2019informativa Cloudflare." : "According to Cloudflare configuration and notice.");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Google Analytics 4, ", vm_r1.language === "it" ? "facoltativi" : "optional");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Distinguono visite e sessioni per produrre statistiche d\u2019uso." : "Distinguish visits and sessions for usage statistics.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Fino a 2 anni" : "Up to 2 years");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Google Analytics, ", vm_r1.language === "it" ? "possibili e facoltativi" : "possible and optional");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Statistiche e limitazione della frequenza delle richieste." : "Statistics and request-rate limiting.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Da 1 minuto a 24 ore" : "From 1 minute to 24 hours");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "L\u2019elenco effettivo pu\xF2 variare in base al browser e agli aggiornamenti dei fornitori. Il sito non utilizza cookie pubblicitari o di profilazione commerciale propri." : "The actual list may vary by browser and provider updates. The website does not use its own advertising or commercial profiling cookies.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Gestire o revocare il consenso" : "Manage or withdraw consent");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Al primo accesso gli Analytics sono disattivati. Accetta e rifiuta sono disponibili allo stesso livello; chiudere il banner equivale a mantenere i soli strumenti necessari. La scelta viene richiesta nuovamente dopo 180 giorni o quando cambia in modo sostanziale la configurazione." : "On first access Analytics is disabled. Accept and reject are available at the same level; closing the banner keeps necessary tools only. The choice is requested again after 180 days or when the configuration changes substantially.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vm_r1.language === "it" ? "Rivedi le tue scelte sui cookie" : "Review your cookie choices", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Puoi anche eliminare cookie e dati dei siti dalle impostazioni del browser. La revoca impedisce nuovi eventi Analytics e il sito prova a eliminare i relativi cookie accessibili dal proprio dominio." : "You can also delete cookies and site data in your browser settings. Withdrawal prevents new Analytics events and the website attempts to remove related cookies accessible from its domain.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Servizi di terze parti" : "Third-party services");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Google Analytics viene caricato soltanto se \xE8 abilitato dal titolare e accettato dall\u2019utente. Turnstile viene caricato nella pagina contatti come misura tecnica anti-abuso necessaria alla sicurezza del modulo." : "Google Analytics is loaded only when enabled by the controller and accepted by the user. Turnstile is loaded on the contact page as a technical anti-abuse measure necessary for form security.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "Contatti e aggiornamenti" : "Contact and updates");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", vm_r1.language === "it" ? "Per domande su questa policy scrivi a" : "For questions about this policy, write to", " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + vm_r1.siteConfig.legal.contactEmail, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vm_r1.siteConfig.legal.contactEmail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", vm_r1.language === "it" ? "Consulta anche la" : "See also the", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", vm_r1.language === "it" ? "/it/privacy" : "/en/privacy");
  }
}
function LegalPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "p", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275conditionalCreate(8, LegalPage_Conditional_0_Conditional_8_Template, 1, 1)(9, LegalPage_Conditional_0_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 5);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 6)(13, "aside", 7)(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, LegalPage_Conditional_0_Conditional_16_Template, 10, 5)(17, LegalPage_Conditional_0_Conditional_17_Template, 8, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "article", 8);
    \u0275\u0275conditionalCreate(19, LegalPage_Conditional_0_Conditional_19_Template, 125, 48)(20, LegalPage_Conditional_0_Conditional_20_Template, 132, 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r1.document === "privacy" ? "Data protection" : "Tracking transparency");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.document === "privacy" ? "Privacy Policy" : "Cookie Policy");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(vm_r1.document === "privacy" ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", vm_r1.language === "it" ? "Ultimo aggiornamento" : "Last updated", " \xB7 ", vm_r1.lastUpdated);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r1.language === "it" ? "In questa pagina" : "On this page");
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r1.document === "privacy" ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(vm_r1.document === "privacy" ? 19 : 20);
  }
}
var LegalPage = class _LegalPage {
  route = inject(ActivatedRoute);
  siteService = inject(SiteService);
  languageService = inject(LanguageService);
  seoService = inject(SeoService);
  cookieConsentService = inject(CookieConsentService);
  vm$ = this.siteService.getSiteConfig().pipe(map((siteConfig) => {
    const language = this.languageService.getRouteLanguage(this.route.snapshot);
    const document = this.route.snapshot.data["legalDocument"] || "privacy";
    return {
      siteConfig,
      language,
      document,
      lastUpdated: this.formatDate(siteConfig.legal.lastUpdated, language)
    };
  }), tap(({ siteConfig, language, document }) => {
    this.seoService.applyLocalizedAlternates(siteConfig.domain, this.route.snapshot, void 0, siteConfig.defaultLanguage);
    const isPrivacy = document === "privacy";
    const title = isPrivacy ? "Privacy Policy" : "Cookie Policy";
    const description = language === "it" ? `${title} del sito ufficiale di ${siteConfig.artistName}.` : `${title} for the official website of ${siteConfig.artistName}.`;
    this.seoService.applyPageMetadata({
      title: `${title} | ${siteConfig.artistName}`,
      description,
      url: `${siteConfig.domain}${this.languageService.buildLocalizedPath(language, isPrivacy ? "privacy" : "cookie-policy")}`,
      siteName: siteConfig.artistName,
      language
    });
  }));
  openCookiePreferences() {
    this.cookieConsentService.requestPreferences();
  }
  formatDate(value, language) {
    const date = /* @__PURE__ */ new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return new Intl.DateTimeFormat(language === "it" ? "it-IT" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }
  static \u0275fac = function LegalPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LegalPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegalPage, selectors: [["app-legal-page"]], decls: 2, vars: 3, consts: [[1, "legal-page"], [1, "legal-hero"], [1, "legal-shell"], [1, "legal-eyebrow"], [1, "legal-hero__intro"], [1, "legal-updated"], [1, "legal-layout", "legal-shell"], [1, "legal-index"], [1, "legal-content"], ["href", "#controller"], ["href", "#processing"], ["href", "#recipients"], ["href", "#transfers"], ["href", "#rights"], ["href", "#technologies"], ["href", "#cookie-table"], ["href", "#choices"], ["href", "#third-parties"], ["id", "controller"], [1, "legal-section-number"], [1, "legal-identity"], [3, "href"], ["id", "processing"], [1, "legal-table-wrap"], ["id", "recipients"], ["id", "transfers"], ["id", "rights"], ["href", "https://www.garanteprivacy.it/home/modulistica-e-servizi-online/reclamo", "target", "_blank", "rel", "noopener noreferrer", 1, "legal-external"], ["id", "technologies"], ["id", "cookie-table"], ["id", "choices"], ["type", "button", 1, "legal-preferences-button", 3, "click"], ["id", "third-parties"], [1, "legal-provider-links"], ["href", "https://policies.google.com/privacy", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.cloudflare.com/privacypolicy/", "target", "_blank", "rel", "noopener noreferrer"], [3, "routerLink"]], template: function LegalPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, LegalPage_Conditional_0_Template, 21, 8, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, AsyncPipe], styles: ["\n\n.legal-page[_ngcontent-%COMP%] {\n  color: var(--site-text);\n}\n.legal-shell[_ngcontent-%COMP%] {\n  width: min(100%, 80rem);\n  margin: 0 auto;\n  padding-right: 1.25rem;\n  padding-left: 1.25rem;\n}\n.legal-hero[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--site-border);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(232, 220, 199, 0.7),\n      rgba(255, 253, 248, 0.82) 55%,\n      rgba(204, 223, 219, 0.45));\n  padding: clamp(5rem, 11vw, 9rem) 0 clamp(3rem, 7vw, 5.5rem);\n}\n.legal-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 58rem;\n  margin: 0.8rem 0 0;\n  font-family: var(--site-font-display);\n  font-size: clamp(3rem, 9vw, 7rem);\n  font-weight: 400;\n  line-height: 0.92;\n}\n.legal-eyebrow[_ngcontent-%COMP%], \n.legal-updated[_ngcontent-%COMP%], \n.legal-section-number[_ngcontent-%COMP%] {\n  color: var(--site-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n.legal-hero__intro[_ngcontent-%COMP%] {\n  max-width: 44rem;\n  margin: 1.5rem 0 0;\n  color: var(--site-muted);\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  line-height: 1.75;\n}\n.legal-updated[_ngcontent-%COMP%] {\n  margin: 2rem 0 0;\n}\n.legal-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 13rem minmax(0, 1fr);\n  gap: clamp(3rem, 7vw, 7rem);\n  padding-top: 4rem;\n  padding-bottom: 6rem;\n}\n.legal-index[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 7rem;\n  align-self: start;\n  display: grid;\n  gap: 0.8rem;\n}\n.legal-index[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  color: var(--site-muted);\n  font-size: 0.65rem;\n  letter-spacing: 0.17em;\n  text-transform: uppercase;\n}\n.legal-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--site-muted);\n  font-size: 0.78rem;\n  text-decoration: none;\n}\n.legal-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--site-text);\n}\n.legal-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.legal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  scroll-margin-top: 7rem;\n}\n.legal-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n  margin-top: 4.5rem;\n  border-top: 1px solid var(--site-border);\n  padding-top: 4.5rem;\n}\n.legal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 46rem;\n  margin: 0.7rem 0 1.4rem;\n  font-family: var(--site-font-display);\n  font-size: clamp(2rem, 5vw, 3.4rem);\n  font-weight: 400;\n  line-height: 1.04;\n}\n.legal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.legal-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  max-width: 52rem;\n  color: var(--site-muted);\n  font-size: 0.98rem;\n  line-height: 1.9;\n}\n.legal-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--site-text);\n  text-underline-offset: 0.25rem;\n}\n.legal-identity[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin: 1.5rem 0;\n}\n.legal-identity[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 1px solid var(--site-border);\n  border-radius: 1rem;\n  padding: 1rem;\n}\n.legal-identity[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--site-muted);\n  font-size: 0.64rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.legal-identity[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0;\n  overflow-wrap: anywhere;\n  font-size: 0.92rem;\n}\n.legal-table-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  margin: 1.5rem 0;\n}\n.legal-table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 46rem;\n  border-collapse: collapse;\n}\n.legal-table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.legal-table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--site-border);\n  padding: 0.9rem 0.8rem;\n  text-align: left;\n  vertical-align: top;\n}\n.legal-table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--site-muted);\n  font-size: 0.62rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.legal-table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--site-muted);\n  font-size: 0.78rem;\n  line-height: 1.6;\n}\n.legal-table-wrap[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--site-text);\n}\n.legal-preferences-button[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 1rem;\n  border: 1px solid var(--site-text);\n  border-radius: 999px;\n  background: var(--site-text);\n  color: white;\n  padding: 0.9rem 1.25rem;\n  font-size: 0.68rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.legal-provider-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin: 1.25rem 0;\n}\n.legal-provider-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid var(--site-border);\n  border-radius: 999px;\n  padding: 0.65rem 0.9rem;\n  font-size: 0.75rem;\n  text-decoration: none;\n}\n@media (min-width: 640px) {\n  .legal-shell[_ngcontent-%COMP%] {\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n}\n@media (max-width: 800px) {\n  .legal-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n  .legal-index[_ngcontent-%COMP%] {\n    position: static;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    border-bottom: 1px solid var(--site-border);\n    padding-bottom: 2rem;\n  }\n  .legal-index[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 560px) {\n  .legal-identity[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=legal.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegalPage, [{
    type: Component,
    args: [{ selector: "app-legal-page", standalone: true, imports: [AsyncPipe, RouterLink], template: `@if (vm$ | async; as vm) {
  <div class="legal-page">
    <header class="legal-hero">
      <div class="legal-shell">
        <p class="legal-eyebrow">{{ vm.document === 'privacy' ? 'Data protection' : 'Tracking transparency' }}</p>
        <h1>{{ vm.document === 'privacy' ? 'Privacy Policy' : 'Cookie Policy' }}</h1>
        <p class="legal-hero__intro">
          @if (vm.document === 'privacy') {
            {{ vm.language === 'it'
              ? 'Come vengono trattati i dati personali quando visiti il sito, scrivi allo studio, ti iscrivi alla newsletter o partecipi a un\u2019asta.'
              : 'How personal data is processed when you browse the website, contact the studio, subscribe to the newsletter or take part in an auction.' }}
          } @else {
            {{ vm.language === 'it'
              ? 'Quali tecnologie di memorizzazione e tracciamento utilizza il sito, perch\xE9 vengono usate e come puoi controllarle.'
              : 'Which storage and tracking technologies the website uses, why they are used and how you can control them.' }}
          }
        </p>
        <p class="legal-updated">{{ vm.language === 'it' ? 'Ultimo aggiornamento' : 'Last updated' }} \xB7 {{ vm.lastUpdated }}</p>
      </div>
    </header>

    <div class="legal-layout legal-shell">
      <aside class="legal-index">
        <p>{{ vm.language === 'it' ? 'In questa pagina' : 'On this page' }}</p>
        @if (vm.document === 'privacy') {
          <a href="#controller">01 \xB7 {{ vm.language === 'it' ? 'Titolare' : 'Controller' }}</a>
          <a href="#processing">02 \xB7 {{ vm.language === 'it' ? 'Trattamenti' : 'Processing' }}</a>
          <a href="#recipients">03 \xB7 {{ vm.language === 'it' ? 'Destinatari' : 'Recipients' }}</a>
          <a href="#transfers">04 \xB7 {{ vm.language === 'it' ? 'Trasferimenti' : 'Transfers' }}</a>
          <a href="#rights">05 \xB7 {{ vm.language === 'it' ? 'Diritti' : 'Rights' }}</a>
        } @else {
          <a href="#technologies">01 \xB7 {{ vm.language === 'it' ? 'Tecnologie usate' : 'Technologies' }}</a>
          <a href="#cookie-table">02 \xB7 {{ vm.language === 'it' ? 'Elenco dettagliato' : 'Detailed list' }}</a>
          <a href="#choices">03 \xB7 {{ vm.language === 'it' ? 'Le tue scelte' : 'Your choices' }}</a>
          <a href="#third-parties">04 \xB7 {{ vm.language === 'it' ? 'Terze parti' : 'Third parties' }}</a>
        }
      </aside>

      <article class="legal-content">
        @if (vm.document === 'privacy') {
          <section id="controller">
            <span class="legal-section-number">01</span>
            <h2>{{ vm.language === 'it' ? 'Titolare del trattamento' : 'Data controller' }}</h2>
            <dl class="legal-identity">
              <div><dt>{{ vm.language === 'it' ? 'Titolare' : 'Controller' }}</dt><dd>{{ vm.siteConfig.legal.controllerName }}</dd></div>
              @if (vm.siteConfig.legal.controllerAddress) {
                <div><dt>{{ vm.language === 'it' ? 'Sede' : 'Address' }}</dt><dd>{{ vm.siteConfig.legal.controllerAddress }}</dd></div>
              }
              @if (vm.siteConfig.legal.taxId) {
                <div><dt>{{ vm.language === 'it' ? 'Codice fiscale / P. IVA' : 'Tax / VAT ID' }}</dt><dd>{{ vm.siteConfig.legal.taxId }}</dd></div>
              }
              <div><dt>Email</dt><dd><a [href]="'mailto:' + vm.siteConfig.legal.contactEmail">{{ vm.siteConfig.legal.contactEmail }}</a></dd></div>
            </dl>
            <p>{{ vm.language === 'it'
              ? 'Puoi usare questo indirizzo per domande sul trattamento dei dati e per esercitare i diritti descritti di seguito.'
              : 'You can use this address for questions about data processing and to exercise the rights described below.' }}</p>
          </section>

          <section id="processing">
            <span class="legal-section-number">02</span>
            <h2>{{ vm.language === 'it' ? 'Dati, finalit\xE0 e conservazione' : 'Data, purposes and retention' }}</h2>
            <div class="legal-table-wrap">
              <table>
                <thead><tr><th>{{ vm.language === 'it' ? 'Attivit\xE0' : 'Activity' }}</th><th>{{ vm.language === 'it' ? 'Dati e finalit\xE0' : 'Data and purpose' }}</th><th>{{ vm.language === 'it' ? 'Base giuridica' : 'Legal basis' }}</th><th>{{ vm.language === 'it' ? 'Conservazione' : 'Retention' }}</th></tr></thead>
                <tbody>
                  <tr><td>{{ vm.language === 'it' ? 'Navigazione e sicurezza' : 'Browsing and security' }}</td><td>{{ vm.language === 'it' ? 'Indirizzo IP, log tecnici, dispositivo e richieste di rete, per erogare e proteggere il sito.' : 'IP address, technical logs, device and network requests, to deliver and protect the website.' }}</td><td>{{ vm.language === 'it' ? 'Legittimo interesse alla sicurezza e corretta erogazione.' : 'Legitimate interest in security and service delivery.' }}</td><td>{{ vm.language === 'it' ? 'Per il tempo strettamente necessario; i log del provider seguono i suoi termini.' : 'Only as long as necessary; provider logs follow its terms.' }}</td></tr>
                  <tr><td>{{ vm.language === 'it' ? 'Modulo contatti' : 'Contact form' }}</td><td>{{ vm.language === 'it' ? 'Nome, email, oggetto, messaggio e dati anti-spam per rispondere alla richiesta.' : 'Name, email, subject, message and anti-spam data to answer your request.' }}</td><td>{{ vm.language === 'it' ? 'Misure precontrattuali richieste dall\u2019interessato e legittimo interesse alla gestione della corrispondenza.' : 'Pre-contractual steps requested by the user and legitimate interest in correspondence management.' }}</td><td>{{ vm.siteConfig.legal.contactRetentionMonths }} {{ vm.language === 'it' ? 'mesi, salvo necessit\xE0 contrattuali o difensive.' : 'months, unless contractual or legal defence needs apply.' }}</td></tr>
                  <tr><td>Newsletter</td><td>{{ vm.language === 'it' ? 'Email e, facoltativamente, nome e cognome per inviare aggiornamenti dello studio.' : 'Email and, optionally, first and last name to send studio updates.' }}</td><td>{{ vm.language === 'it' ? 'Consenso, revocabile in ogni momento.' : 'Consent, withdrawable at any time.' }}</td><td>{{ vm.language === 'it' ? 'Fino alla revoca o disiscrizione; prova del consenso e suppression list nei limiti necessari.' : 'Until withdrawal or unsubscribe; consent evidence and suppression list as necessary.' }}</td></tr>
                  <tr><td>{{ vm.language === 'it' ? 'Partecipazione alle aste' : 'Auction participation' }}</td><td>{{ vm.language === 'it' ? 'Nome, cognome, email verificata, offerte, orari e dati tecnici per identificare il partecipante, registrare offerte e gestire l\u2019eventuale vendita.' : 'Name, surname, verified email, bids, timestamps and technical data to identify participants, record bids and manage any sale.' }}</td><td>{{ vm.language === 'it' ? 'Esecuzione di misure precontrattuali e del rapporto contrattuale; obblighi legali.' : 'Pre-contractual and contractual performance; legal obligations.' }}</td><td>{{ vm.language === 'it' ? 'Per la durata dell\u2019asta e, per dati contrattuali e contabili, fino a 10 anni secondo gli obblighi applicabili.' : 'For the auction duration and, for contractual/accounting records, up to 10 years under applicable obligations.' }}</td></tr>
                  <tr><td>Google Analytics 4</td><td>{{ vm.language === 'it' ? 'Identificatori online e dati d\u2019uso per statistiche aggregate sul sito, solo dopo consenso.' : 'Online identifiers and usage data for website statistics, only after consent.' }}</td><td>{{ vm.language === 'it' ? 'Consenso.' : 'Consent.' }}</td><td>{{ vm.siteConfig.legal.analyticsRetentionMonths }} {{ vm.language === 'it' ? 'mesi per i dati evento, secondo la configurazione della propriet\xE0 Analytics.' : 'months for event data, according to the Analytics property configuration.' }}</td></tr>
                </tbody>
              </table>
            </div>
            <p>{{ vm.language === 'it'
              ? 'Il conferimento dei dati nei moduli \xE8 facoltativo, ma i campi indicati come obbligatori sono necessari per rispondere, iscrivere alla newsletter o registrare un\u2019offerta.'
              : 'Providing form data is optional, but fields marked as required are necessary to reply, subscribe you or register a bid.' }}</p>
            <p>{{ vm.language === 'it' ? 'Non vengono adottate decisioni esclusivamente automatizzate che producano effetti giuridici sulla persona.' : 'No solely automated decisions producing legal effects on individuals are made.' }}</p>
          </section>

          <section id="recipients">
            <span class="legal-section-number">03</span>
            <h2>{{ vm.language === 'it' ? 'Destinatari e fornitori' : 'Recipients and providers' }}</h2>
            <p>{{ vm.language === 'it'
              ? 'I dati possono essere trattati da fornitori che operano come responsabili o autonomi titolari secondo il servizio: provider di hosting e infrastruttura, Cloudflare per Worker e Turnstile, Mailchimp per la newsletter, Google per Analytics, provider email e consulenti tecnici o professionali. I dati delle offerte pubblicati sul sito sono anonimizzati.'
              : 'Data may be processed by providers acting as processors or independent controllers depending on the service: hosting and infrastructure providers, Cloudflare for Workers and Turnstile, Mailchimp for newsletters, Google for Analytics, email providers and technical or professional advisers. Bid data displayed publicly is anonymised.' }}</p>
            <p>{{ vm.language === 'it' ? 'I dati non sono venduti n\xE9 utilizzati per pubblicit\xE0 comportamentale dal titolare.' : 'The controller does not sell data or use it for behavioural advertising.' }}</p>
          </section>

          <section id="transfers">
            <span class="legal-section-number">04</span>
            <h2>{{ vm.language === 'it' ? 'Trasferimenti fuori dallo SEE' : 'Transfers outside the EEA' }}</h2>
            <p>{{ vm.language === 'it'
              ? 'Alcuni fornitori possono trattare dati negli Stati Uniti o in altri Paesi. Quando necessario, il trasferimento si basa su decisioni di adeguatezza, Data Privacy Framework UE-USA per i soggetti aderenti o Clausole Contrattuali Standard, insieme alle misure supplementari applicabili. Consulta le informative dei singoli fornitori per i dettagli aggiornati.'
              : 'Some providers may process data in the United States or other countries. Where required, transfers rely on adequacy decisions, the EU-US Data Privacy Framework for participating organisations or Standard Contractual Clauses, together with applicable supplementary measures. See each provider\u2019s notice for current details.' }}</p>
          </section>

          <section id="rights">
            <span class="legal-section-number">05</span>
            <h2>{{ vm.language === 'it' ? 'I tuoi diritti' : 'Your rights' }}</h2>
            <p>{{ vm.language === 'it'
              ? 'Nei casi previsti dagli articoli 15-22 GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilit\xE0 e opposizione. Puoi revocare il consenso in qualsiasi momento senza pregiudicare la liceit\xE0 del trattamento precedente.'
              : 'Where Articles 15-22 GDPR apply, you may request access, rectification, erasure, restriction, portability and object to processing. You may withdraw consent at any time without affecting prior lawful processing.' }}</p>
            <p><a [href]="'mailto:' + vm.siteConfig.legal.contactEmail">{{ vm.siteConfig.legal.contactEmail }}</a></p>
            <p>{{ vm.language === 'it'
              ? 'Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali o all\u2019autorit\xE0 di controllo competente del tuo Stato membro.'
              : 'You also have the right to lodge a complaint with the Italian Data Protection Authority or the competent supervisory authority in your Member State.' }}</p>
            <a class="legal-external" href="https://www.garanteprivacy.it/home/modulistica-e-servizi-online/reclamo" target="_blank" rel="noopener noreferrer">{{ vm.language === 'it' ? 'Presentare un reclamo al Garante' : 'Lodge a complaint with the Italian DPA' }} \u2197</a>
          </section>

          <section>
            <span class="legal-section-number">06</span>
            <h2>{{ vm.language === 'it' ? 'Sicurezza e aggiornamenti' : 'Security and updates' }}</h2>
            <p>{{ vm.language === 'it'
              ? 'Sono adottate misure tecniche e organizzative proporzionate per limitare accessi non autorizzati, perdita o uso improprio dei dati. Questa informativa pu\xF2 essere aggiornata quando cambiano servizi, fornitori o norme; la data in apertura identifica la versione corrente.'
              : 'Proportionate technical and organisational measures are used to limit unauthorised access, loss or misuse. This notice may be updated when services, providers or laws change; the date above identifies the current version.' }}</p>
          </section>
        } @else {
          <section id="technologies">
            <span class="legal-section-number">01</span>
            <h2>{{ vm.language === 'it' ? 'Cookie e tecnologie simili' : 'Cookies and similar technologies' }}</h2>
            <p>{{ vm.language === 'it'
              ? 'I cookie sono piccoli dati salvati dal browser. Il sito usa anche localStorage, che conserva preferenze e sessioni tecniche nel dispositivo. Classifichiamo gli strumenti in necessari e analytics in base alla loro finalit\xE0.'
              : 'Cookies are small pieces of data stored by the browser. The website also uses localStorage to keep preferences and technical sessions on the device. Tools are classified as necessary or analytics according to purpose.' }}</p>
            <p>{{ vm.language === 'it'
              ? 'Gli strumenti necessari non richiedono consenso perch\xE9 servono a erogare funzionalit\xE0 richieste o a ricordare le scelte privacy. Gli analytics vengono attivati solo dopo una scelta positiva.'
              : 'Necessary tools do not require consent because they deliver requested features or remember privacy choices. Analytics tools are activated only after a positive choice.' }}</p>
          </section>

          <section id="cookie-table">
            <span class="legal-section-number">02</span>
            <h2>{{ vm.language === 'it' ? 'Elenco degli strumenti' : 'Technology list' }}</h2>
            <div class="legal-table-wrap">
              <table>
                <thead><tr><th>{{ vm.language === 'it' ? 'Nome' : 'Name' }}</th><th>{{ vm.language === 'it' ? 'Tipo / fornitore' : 'Type / provider' }}</th><th>{{ vm.language === 'it' ? 'Finalit\xE0' : 'Purpose' }}</th><th>{{ vm.language === 'it' ? 'Durata' : 'Duration' }}</th></tr></thead>
                <tbody>
                  <tr><td><code>site_cookie_consent</code></td><td>{{ vm.language === 'it' ? 'Cookie tecnico, prima parte' : 'Technical first-party cookie' }}</td><td>{{ vm.language === 'it' ? 'Registra versione, data e preferenza Analytics.' : 'Stores version, date and Analytics preference.' }}</td><td>180 {{ vm.language === 'it' ? 'giorni' : 'days' }}</td></tr>
                  <tr><td><code>site-cookie-consent-v2</code></td><td>localStorage, {{ vm.language === 'it' ? 'prima parte' : 'first party' }}</td><td>{{ vm.language === 'it' ? 'Copia locale della scelta cookie per renderla stabile.' : 'Local copy of cookie choices for reliable persistence.' }}</td><td>180 {{ vm.language === 'it' ? 'giorni' : 'days' }}</td></tr>
                  <tr><td><code>auction-session:&lt;id&gt;</code></td><td>localStorage, {{ vm.language === 'it' ? 'prima parte' : 'first party' }}</td><td>{{ vm.language === 'it' ? 'Mantiene la sessione verificata del partecipante per l\u2019asta richiesta.' : 'Keeps a verified participant session for the requested auction.' }}</td><td>{{ vm.language === 'it' ? 'Fino alla scadenza della sessione o alla rimozione locale.' : 'Until session expiry or local removal.' }}</td></tr>
                  <tr><td>{{ vm.language === 'it' ? 'Identificatori Turnstile' : 'Turnstile identifiers' }}</td><td>{{ vm.language === 'it' ? 'Cloudflare, necessari' : 'Cloudflare, necessary' }}</td><td>{{ vm.language === 'it' ? 'Prevenzione di spam e abusi nel modulo contatti.' : 'Spam and abuse prevention in the contact form.' }}</td><td>{{ vm.language === 'it' ? 'Secondo la configurazione e l\u2019informativa Cloudflare.' : 'According to Cloudflare configuration and notice.' }}</td></tr>
                  <tr><td><code>_ga</code>, <code>_ga_*</code></td><td>Google Analytics 4, {{ vm.language === 'it' ? 'facoltativi' : 'optional' }}</td><td>{{ vm.language === 'it' ? 'Distinguono visite e sessioni per produrre statistiche d\u2019uso.' : 'Distinguish visits and sessions for usage statistics.' }}</td><td>{{ vm.language === 'it' ? 'Fino a 2 anni' : 'Up to 2 years' }}</td></tr>
                  <tr><td><code>_gid</code>, <code>_gat*</code></td><td>Google Analytics, {{ vm.language === 'it' ? 'possibili e facoltativi' : 'possible and optional' }}</td><td>{{ vm.language === 'it' ? 'Statistiche e limitazione della frequenza delle richieste.' : 'Statistics and request-rate limiting.' }}</td><td>{{ vm.language === 'it' ? 'Da 1 minuto a 24 ore' : 'From 1 minute to 24 hours' }}</td></tr>
                </tbody>
              </table>
            </div>
            <p>{{ vm.language === 'it'
              ? 'L\u2019elenco effettivo pu\xF2 variare in base al browser e agli aggiornamenti dei fornitori. Il sito non utilizza cookie pubblicitari o di profilazione commerciale propri.'
              : 'The actual list may vary by browser and provider updates. The website does not use its own advertising or commercial profiling cookies.' }}</p>
          </section>

          <section id="choices">
            <span class="legal-section-number">03</span>
            <h2>{{ vm.language === 'it' ? 'Gestire o revocare il consenso' : 'Manage or withdraw consent' }}</h2>
            <p>{{ vm.language === 'it'
              ? 'Al primo accesso gli Analytics sono disattivati. Accetta e rifiuta sono disponibili allo stesso livello; chiudere il banner equivale a mantenere i soli strumenti necessari. La scelta viene richiesta nuovamente dopo 180 giorni o quando cambia in modo sostanziale la configurazione.'
              : 'On first access Analytics is disabled. Accept and reject are available at the same level; closing the banner keeps necessary tools only. The choice is requested again after 180 days or when the configuration changes substantially.' }}</p>
            <button type="button" class="legal-preferences-button" (click)="openCookiePreferences()">
              {{ vm.language === 'it' ? 'Rivedi le tue scelte sui cookie' : 'Review your cookie choices' }}
            </button>
            <p>{{ vm.language === 'it'
              ? 'Puoi anche eliminare cookie e dati dei siti dalle impostazioni del browser. La revoca impedisce nuovi eventi Analytics e il sito prova a eliminare i relativi cookie accessibili dal proprio dominio.'
              : 'You can also delete cookies and site data in your browser settings. Withdrawal prevents new Analytics events and the website attempts to remove related cookies accessible from its domain.' }}</p>
          </section>

          <section id="third-parties">
            <span class="legal-section-number">04</span>
            <h2>{{ vm.language === 'it' ? 'Servizi di terze parti' : 'Third-party services' }}</h2>
            <div class="legal-provider-links">
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy \u2197</a>
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare Privacy \u2197</a>
            </div>
            <p>{{ vm.language === 'it'
              ? 'Google Analytics viene caricato soltanto se \xE8 abilitato dal titolare e accettato dall\u2019utente. Turnstile viene caricato nella pagina contatti come misura tecnica anti-abuso necessaria alla sicurezza del modulo.'
              : 'Google Analytics is loaded only when enabled by the controller and accepted by the user. Turnstile is loaded on the contact page as a technical anti-abuse measure necessary for form security.' }}</p>
          </section>

          <section>
            <span class="legal-section-number">05</span>
            <h2>{{ vm.language === 'it' ? 'Contatti e aggiornamenti' : 'Contact and updates' }}</h2>
            <p>{{ vm.language === 'it' ? 'Per domande su questa policy scrivi a' : 'For questions about this policy, write to' }} <a [href]="'mailto:' + vm.siteConfig.legal.contactEmail">{{ vm.siteConfig.legal.contactEmail }}</a>.</p>
            <p>{{ vm.language === 'it' ? 'Consulta anche la' : 'See also the' }} <a [routerLink]="vm.language === 'it' ? '/it/privacy' : '/en/privacy'">Privacy Policy</a>.</p>
          </section>
        }
      </article>
    </div>
  </div>
}
`, styles: ["/* sito-artista/src/app/pages/legal/legal.page.sass */\n.legal-page {\n  color: var(--site-text);\n}\n.legal-shell {\n  width: min(100%, 80rem);\n  margin: 0 auto;\n  padding-right: 1.25rem;\n  padding-left: 1.25rem;\n}\n.legal-hero {\n  border-bottom: 1px solid var(--site-border);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(232, 220, 199, 0.7),\n      rgba(255, 253, 248, 0.82) 55%,\n      rgba(204, 223, 219, 0.45));\n  padding: clamp(5rem, 11vw, 9rem) 0 clamp(3rem, 7vw, 5.5rem);\n}\n.legal-hero h1 {\n  max-width: 58rem;\n  margin: 0.8rem 0 0;\n  font-family: var(--site-font-display);\n  font-size: clamp(3rem, 9vw, 7rem);\n  font-weight: 400;\n  line-height: 0.92;\n}\n.legal-eyebrow,\n.legal-updated,\n.legal-section-number {\n  color: var(--site-muted);\n  font-size: 0.68rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n.legal-hero__intro {\n  max-width: 44rem;\n  margin: 1.5rem 0 0;\n  color: var(--site-muted);\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  line-height: 1.75;\n}\n.legal-updated {\n  margin: 2rem 0 0;\n}\n.legal-layout {\n  display: grid;\n  grid-template-columns: 13rem minmax(0, 1fr);\n  gap: clamp(3rem, 7vw, 7rem);\n  padding-top: 4rem;\n  padding-bottom: 6rem;\n}\n.legal-index {\n  position: sticky;\n  top: 7rem;\n  align-self: start;\n  display: grid;\n  gap: 0.8rem;\n}\n.legal-index p {\n  margin: 0 0 0.35rem;\n  color: var(--site-muted);\n  font-size: 0.65rem;\n  letter-spacing: 0.17em;\n  text-transform: uppercase;\n}\n.legal-index a {\n  color: var(--site-muted);\n  font-size: 0.78rem;\n  text-decoration: none;\n}\n.legal-index a:hover {\n  color: var(--site-text);\n}\n.legal-content {\n  min-width: 0;\n}\n.legal-content section {\n  scroll-margin-top: 7rem;\n}\n.legal-content section + section {\n  margin-top: 4.5rem;\n  border-top: 1px solid var(--site-border);\n  padding-top: 4.5rem;\n}\n.legal-content h2 {\n  max-width: 46rem;\n  margin: 0.7rem 0 1.4rem;\n  font-family: var(--site-font-display);\n  font-size: clamp(2rem, 5vw, 3.4rem);\n  font-weight: 400;\n  line-height: 1.04;\n}\n.legal-content p,\n.legal-content li {\n  max-width: 52rem;\n  color: var(--site-muted);\n  font-size: 0.98rem;\n  line-height: 1.9;\n}\n.legal-content a {\n  color: var(--site-text);\n  text-underline-offset: 0.25rem;\n}\n.legal-identity {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin: 1.5rem 0;\n}\n.legal-identity div {\n  border: 1px solid var(--site-border);\n  border-radius: 1rem;\n  padding: 1rem;\n}\n.legal-identity dt {\n  color: var(--site-muted);\n  font-size: 0.64rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.legal-identity dd {\n  margin: 0.45rem 0 0;\n  overflow-wrap: anywhere;\n  font-size: 0.92rem;\n}\n.legal-table-wrap {\n  width: 100%;\n  overflow-x: auto;\n  margin: 1.5rem 0;\n}\n.legal-table-wrap table {\n  width: 100%;\n  min-width: 46rem;\n  border-collapse: collapse;\n}\n.legal-table-wrap th,\n.legal-table-wrap td {\n  border-bottom: 1px solid var(--site-border);\n  padding: 0.9rem 0.8rem;\n  text-align: left;\n  vertical-align: top;\n}\n.legal-table-wrap th {\n  color: var(--site-muted);\n  font-size: 0.62rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.legal-table-wrap td {\n  color: var(--site-muted);\n  font-size: 0.78rem;\n  line-height: 1.6;\n}\n.legal-table-wrap code {\n  color: var(--site-text);\n}\n.legal-preferences-button {\n  margin: 0.75rem 0 1rem;\n  border: 1px solid var(--site-text);\n  border-radius: 999px;\n  background: var(--site-text);\n  color: white;\n  padding: 0.9rem 1.25rem;\n  font-size: 0.68rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.legal-provider-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin: 1.25rem 0;\n}\n.legal-provider-links a {\n  border: 1px solid var(--site-border);\n  border-radius: 999px;\n  padding: 0.65rem 0.9rem;\n  font-size: 0.75rem;\n  text-decoration: none;\n}\n@media (min-width: 640px) {\n  .legal-shell {\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n}\n@media (max-width: 800px) {\n  .legal-layout {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n  .legal-index {\n    position: static;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    border-bottom: 1px solid var(--site-border);\n    padding-bottom: 2rem;\n  }\n  .legal-index p {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 560px) {\n  .legal-identity {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=legal.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegalPage, { className: "LegalPage", filePath: "sito-artista/src/app/pages/legal/legal.page.ts", lineNumber: 19 });
})();
export {
  LegalPage
};
//# sourceMappingURL=chunk-IPLS5B3K.js.map
