import type { CampsiteConfig } from "../types";

/**
 * Camping Alpenwelt · Tannheimer Tal (Tirol) — honest config, 100 % aus raw/digest abgeleitet.
 * Kein See am Platz (Vilsalpsee/Haldensee liegen in der Nähe) → kein `see`-Feld.
 * Kein `theme` (Original-Palette), heroVariant "center". Du-Anrede durchgehend.
 */
const IMG = "/campsites/alpenwelt-tannheimertal";

const alpenwelt: CampsiteConfig = {
  name: "Camping Alpenwelt",
  shortName: "Alpenwelt",
  slug: "alpenwelt-tannheimertal",
  ort: "Tannheim",
  region: "Tirol",
  brandKind: "Pension & Camping",
  regionLong: "Tannheimer Tal · Tirol · Österreich",

  heroVariant: "center",

  claim: "Camping auf der Sonnenseite des Tannheimer Tals",
  claimEmphasis: "der Sonnenseite",
  emailDetail: "eure Lage auf der Sonnenseite des Tannheimer Tals",
  intro:
    "Klein, fein und auf der Sonnenseite gelegen: Auf rund 1.100 Metern findest du terrassierte Stellplätze mit Bergblick, sechs gemütliche Appartements und eine Familie, die ihren Platz noch selbst führt.",

  statement: {
    text: "Seit 2012 führen wir den Platz als Familie — hier kennt man dich noch beim Namen.",
    emphasis: "beim Namen",
  },

  pillars: [
    {
      title: "Auf der Sonnenseite gelegen",
      text: "Am Südhang des Tannheimer Tals liegt der Platz ruhig, unverbaut und den ganzen Tag in der Sonne.",
      image: { src: `${IMG}/gallery-227487679a.webp`, alt: "Luftaufnahme von Camping Alpenwelt am sonnigen Südhang des Tannheimer Tals" },
    },
    {
      title: "Eine Familie, kein Konzern",
      text: "Seit 2012 führen Carolyn und Thomas den Platz selbst — als Familie, mit Kindern und viel Herz.",
      image: { src: `${IMG}/gallery-ed8144ecf0.webp`, alt: "Haupthaus von Camping Alpenwelt mit Kind im Sommer" },
    },
    {
      title: "Strom von der eigenen Sonne",
      text: "Eine Photovoltaikanlage auf dem Dach und Glasfaser bis zum Stellplatz: Bergidylle, modern gedacht.",
      image: { src: `${IMG}/gallery-ecfc93bce1.webp`, alt: "Gebäude mit Photovoltaik-Dach am Camping Alpenwelt im Sommer" },
    },
  ],

  usps: [
    "Sonnige Südhang-Lage",
    "65 terrassierte Stellplätze",
    "Glasfaser-WLAN gratis",
    "Sauna & Solarium",
    "Hunde willkommen",
    "Familiengeführt seit 2012",
  ],

  trust: {
    heading: "Ein Zuhause auf Zeit, mitten in Tirol",
    headingEmphasis: "Zuhause auf Zeit",
    intro:
      "Carolyn, Thomas und ihre Kinder leben hier — und teilen ihren Platz mit dir: persönlicher Kontakt, gepflegte Anlagen und kurze Wege zu den Seen und Bergen des Tannheimer Tals.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-b6577b9267.webp`, alt: "Blumenwiese, Kapelle und Bergpanorama im Tannheimer Tal" },
  },

  breather: {
    image: { src: `${IMG}/gallery-de2e857751.webp`, alt: "Sonnige Berghänge im Tannheimer Tal" },
    line: "Auf rund 1.100 Metern, mitten in den Bergen Tirols.",
  },

  camping: {
    heading: "Was dich am Platz erwartet",
    intro:
      "Terrassiert und mit Rasengittersteinen angelegt, finden Wohnwagen, Wohnmobil und Zelt sicheren Halt — dazu Sauna, Glasfaser-WLAN und ein Aufenthaltsraum mit Kaffeeautomat.",
    features: [
      {
        title: "Sonnenplätze über dem Tal",
        text: "Auf der Sonnenseite des Tals liegen die Plätze terrassiert am Hang — mit Bergblick von früh bis spät.",
        image: { src: `${IMG}/gallery-3698a7dd9c.webp`, alt: "Terrassierte Stellplätze von Camping Alpenwelt im Abendlicht" },
      },
      {
        title: "65 Stellplätze mit Bergblick",
        text: "Ob Wohnwagen, Wohnmobil oder Zelt: Auf 65 ebenen Stellplätzen findet bei uns jeder seinen festen Halt.",
        image: { src: `${IMG}/gallery-290d269b63.webp`, alt: "Wohnwagen auf den Stellplätzen mit Bergpanorama" },
      },
      {
        title: "Dein Hund ist willkommen",
        text: "Der Vierbeiner campt mit — an der Leine seid ihr gemeinsam auf dem ganzen Platz unterwegs.",
        image: { src: `${IMG}/gallery-c1ea75917c.webp`, alt: "Gast mit Hund entspannt vor dem Wohnwagen am Camping Alpenwelt" },
      },
      {
        title: "Auch im Winter geöffnet",
        text: "Stellplätze mit Strom und ein Skischuh-Trockenraum machen den Platz auch zur Winterzeit zum Zuhause.",
        image: { src: `${IMG}/gallery-c36e9421bd.webp`, alt: "Verschneite Stellplätze von Camping Alpenwelt im Sonnenschein" },
      },
      {
        title: "Ruhig und unverbaut",
        text: "Rundherum ist es still und unverbaut — nur Wiesen, Wald und die Berge des Tannheimer Tals.",
        image: { src: `${IMG}/gallery-10a16cf425.webp`, alt: "Camping Alpenwelt in grüner Wiesenlage mit Bergblick" },
      },
      {
        title: "Umgeben von Almwiesen",
        text: "Gleich nebenan grasen die Kühe — der Platz liegt mitten in den Wiesen des Hochtals auf der Sonnenseite.",
        image: { src: `${IMG}/gallery-ad4bb886de.webp`, alt: "Kühe auf der Almwiese neben dem Camping Alpenwelt" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber feste Wände? Unsere Appartements",
    intro:
      "Wer nicht zelten möchte, wohnt in einem der sechs Einraum-Appartements oder in der Ferienwohnung — gemütlich, ruhig und mit Bergblick.",
    items: [
      {
        name: "Einraum-Appartement",
        kind: "für 2 Personen",
        text: "Helle Einraum-Wohnung mit eigener Küche, Bad und Bergblick — ideal für Paare und kurze Auszeiten.",
        image: { src: `${IMG}/gallery-91ed730881.webp`, alt: "Helles Einraum-Appartement mit Doppelbett am Camping Alpenwelt" },
        features: ["Eigene Küche", "Glasfaser-WLAN"],
      },
      {
        name: "Ferienwohnung 6",
        kind: "für Familien",
        text: "Mehr Platz für die ganze Familie: Wohnküche, separater Schlafbereich und ein zusätzliches Bett.",
        image: { src: `${IMG}/gallery-f899c03e6a.webp`, alt: "Familien-Ferienwohnung mit Zusatzbett am Camping Alpenwelt" },
        features: ["Eigene Küche", "Glasfaser-WLAN"],
      },
      {
        name: "Appartement rustikal",
        kind: "gemütlich & urig",
        text: "Massivholz-Möbel, eine Sitzecke und viel Stube — hier wohnst du urig-warm mitten im Haus Alpenwelt.",
        image: { src: `${IMG}/gallery-fcf23ddc0e.webp`, alt: "Rustikales Appartement mit Massivholzschrank am Camping Alpenwelt" },
        features: ["Eigene Küche", "Glasfaser-WLAN"],
      },
    ],
  },

  anreise: {
    heading: "So kommst du ins Tannheimer Tal",
    modes: [
      { title: "Mit dem Auto", text: "Über Reutte und den Gaichtpass (B198) oder von Deutschland über den Oberjochpass ins Tannheimer Tal nach Tannheim." },
      { title: "Mit der Bahn", text: "Nächster Bahnhof ist Reutte in Tirol — von dort bringt dich der Regionalbus ins Tal." },
      { title: "Mit dem Flugzeug", text: "Die Flughäfen Innsbruck und Memmingen liegen beide rund eineinhalb Stunden mit dem Auto entfernt." },
    ],
  },

  galerie: {
    heading: "Alpenwelt in Bildern",
    headingEmphasis: "Alpenwelt",
    intro: "Sommer wie Winter, drinnen wie draußen — ein paar Eindrücke vom Platz und aus dem Tannheimer Tal.",
    tag: "Sommer & Winter",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-ce86fc4fca.webp`, alt: "Winterabend über dem Camping Alpenwelt mit Bergpanorama" },
      { src: `${IMG}/gallery-57057086b2.webp`, alt: "Wandern in den Bergen über dem Tannheimer Tal" },
      { src: `${IMG}/gallery-941f5195f7.webp`, alt: "Almwiese mit Kapelle und Bergen im Tannheimer Tal" },
      { src: `${IMG}/gallery-0a62e6a29e.webp`, alt: "Gemütliches Appartement am Camping Alpenwelt" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Sonnenplatz",
    headingEmphasis: "Sonnenplatz",
    intro: "Wähle Zeitraum und Personen — Familie Rinner-Gerstl meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise Nebensaison · pro Stellplatz inkl. 2 Personen · zzgl. Strom (0,70 €/kWh) und Kurtaxe (3,50 € ab 15 J.)",
    highlight: { title: "Persönlich gebucht", text: "Keine Hotline — die Familie meldet sich selbst bei dir zurück." },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Caravan)", perNight: 26, perExtraGuest: 10 },
      { id: "wohnmobil", label: "Wohnmobil / Kastenwagen", perNight: 26, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 21.5, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 47.508422, lng: 10.495019 },
    tel: "+43 5675 43070",
    telHref: "tel:+43567543070",
    mail: "alpenwelt@tirol.com",
    facebook: "https://www.facebook.com/CampingAlpenwelt/",
    adresse: "Kienzerle 3 · 6675 Tannheim · Tirol",
  },

  languages: ["DE", "IT", "EN"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Appartements", href: "#mobilheime" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default alpenwelt;
