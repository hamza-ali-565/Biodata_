export const RASHIS = [
  { sanskrit: "Mesha", english: "Aries" },
  { sanskrit: "Vrishabha", english: "Taurus" },
  { sanskrit: "Mithuna", english: "Gemini" },
  { sanskrit: "Karka", english: "Cancer" },
  { sanskrit: "Simha", english: "Leo" },
  { sanskrit: "Kanya", english: "Virgo" },
  { sanskrit: "Tula", english: "Libra" },
  { sanskrit: "Vrishchika", english: "Scorpio" },
  { sanskrit: "Dhanu", english: "Sagittarius" },
  { sanskrit: "Makara", english: "Capricorn" },
  { sanskrit: "Kumbha", english: "Aquarius" },
  { sanskrit: "Meena", english: "Pisces" },
];

export const NAKSHATRAS = [
  { name: "Ashwini", gan: "Deva", nadi: "Adi" },
  { name: "Bharani", gan: "Manav", nadi: "Madhya" },
  { name: "Krittika", gan: "Rakshasa", nadi: "Antya" },
  { name: "Rohini", gan: "Manav", nadi: "Antya" },
  { name: "Mrigashira", gan: "Deva", nadi: "Madhya" },
  { name: "Ardra", gan: "Manav", nadi: "Adi" },
  { name: "Punarvasu", gan: "Deva", nadi: "Adi" },
  { name: "Pushya", gan: "Deva", nadi: "Madhya" },
  { name: "Ashlesha", gan: "Rakshasa", nadi: "Antya" },
  { name: "Magha", gan: "Rakshasa", nadi: "Antya" },
  { name: "Purva Phalguni", gan: "Manav", nadi: "Madhya" },
  { name: "Uttara Phalguni", gan: "Manav", nadi: "Adi" },
  { name: "Hasta", gan: "Deva", nadi: "Adi" },
  { name: "Chitra", gan: "Rakshasa", nadi: "Madhya" },
  { name: "Swati", gan: "Deva", nadi: "Antya" },
  { name: "Vishakha", gan: "Rakshasa", nadi: "Antya" },
  { name: "Anuradha", gan: "Deva", nadi: "Madhya" },
  { name: "Jyeshtha", gan: "Rakshasa", nadi: "Adi" },
  { name: "Moola", gan: "Rakshasa", nadi: "Adi" },
  { name: "Purva Ashadha", gan: "Manav", nadi: "Madhya" },
  { name: "Uttara Ashadha", gan: "Manav", nadi: "Antya" },
  { name: "Shravana", gan: "Deva", nadi: "Antya" },
  { name: "Dhanishtha", gan: "Rakshasa", nadi: "Madhya" },
  { name: "Shatabhisha", gan: "Rakshasa", nadi: "Adi" },
  { name: "Purva Bhadrapada", gan: "Manav", nadi: "Adi" },
  { name: "Uttara Bhadrapada", gan: "Manav", nadi: "Madhya" },
  { name: "Revati", gan: "Deva", nadi: "Antya" },
];

export function rashiFromLongitude(lonDeg) {
  const index = Math.floor(lonDeg / 30) % 12;
  return { index, ...RASHIS[index] };
}

export function nakshatraFromLongitude(lonDeg) {
  const nakSpan = 360 / 27;
  const index = Math.floor(lonDeg / nakSpan) % 27;
  const padaSpan = nakSpan / 4;
  const offsetInNak = lonDeg - index * nakSpan;
  const pada = Math.floor(offsetInNak / padaSpan) + 1;
  return { index, pada, ...NAKSHATRAS[index] };
}

/** Whole-sign house of a planet's Rashi relative to the Ascendant's Rashi (1-12). */
export function houseFromRashi(planetRashiIndex, ascendantRashiIndex) {
  return ((planetRashiIndex - ascendantRashiIndex + 12) % 12) + 1;
}

const MANGLIK_HOUSES_NORTH = new Set([1, 4, 7, 8, 12]);
const MANGLIK_HOUSES_SOUTH = new Set([1, 2, 4, 7, 8, 12]);

export function manglikStatus(marsHouse) {
  const north = MANGLIK_HOUSES_NORTH.has(marsHouse);
  const south = MANGLIK_HOUSES_SOUTH.has(marsHouse);
  if (north) return "Manglik";
  if (south) return "Partial Manglik";
  return "Non-Manglik";
}
