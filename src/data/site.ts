// Zentrale Inhalts- und Kontaktdaten der Kita.
// Selten geändert -> hier an EINER Stelle pflegen, Rest der Seite zieht daraus.

export const site = {
  name: 'Kindergarten Marienkäfer',
  legalName: 'Kindergarten Marienkäfer Hamburg-Wandsbek e.V.',
  tagline: 'Liebevolle Betreuung in familiärer Atmosphäre – seit 1994 in Hamburg-Marienthal.',
  address: {
    street: 'Zikadenweg 18',
    zip: '22043',
    city: 'Hamburg',
    district: 'Hamburg-Wandsbek / Marienthal',
  },
  phone: '040 – 68 41 51',
  phoneHref: '+4940684151',
  email: 'leitung@marienkaefer-hamburg.de',
  emailGeneral: 'info@marienkaefer-hamburg.de',
  hours: 'Montag bis Freitag, 8:00–16:00 Uhr',
  coreHours: 'Pädagogische Kernzeit 8:30–13:30 Uhr',
};

export const nav = [
  { href: '/', label: 'Start' },
  { href: '/konzept/', label: 'Konzept' },
  { href: '/team/', label: 'Team' },
  { href: '/traeger/', label: 'Träger' },
  { href: '/aktuelles/', label: 'Aktuelles' },
  { href: '/galerie/', label: 'Galerie' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export const facts = [
  { value: 'seit 1994', label: 'Elterninitiative' },
  { value: 'max. 55', label: 'Kinder' },
  { value: '14 Monate–6 Jahre', label: 'Krippe & Elementar' },
  { value: 'SOALQE', label: 'zertifiziert seit 2013' },
];

export const team = [
  { name: 'Tine', role: 'Pädagogische Leitung', img: '/bilder/team/Tine.jpg' },
  { name: 'Freia', role: 'Stellvertretende Leitung', img: '/bilder/team/Freia.jpg' },
  { name: 'Isabel', role: 'Pädagogische Fachkraft', img: '/bilder/team/Isabel.jpg' },
  { name: 'Malte', role: 'Pädagogische Fachkraft', img: '/bilder/team/Malte.jpg' },
  { name: 'Sibel', role: 'Pädagogische Fachkraft', img: '/bilder/team/Sibel.jpg' },
  { name: 'Güler', role: 'Pädagogische Fachkraft', img: '/bilder/team/Gueler.jpg' },
  { name: 'Maryam', role: 'Pädagogische Fachkraft', img: '/bilder/team/Maryam.jpg' },
  { name: 'Effi', role: 'Pädagogische Fachkraft', img: '/bilder/team/Effi.jpg' },
];

export const kuechenfee = { name: 'Lilia', role: 'Unsere Küchenfee', img: '/bilder/team/Lilia.jpg' };
