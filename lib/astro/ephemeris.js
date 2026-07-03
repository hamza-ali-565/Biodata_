/**
 * Lightweight geocentric ecliptic-longitude ephemeris.
 *
 * Uses Paul Schlyter's well-known simplified Keplerian-element method
 * ("Computing Planetary Positions — a tutorial with worked examples").
 * Accurate to roughly 0.5°–1° for Sun/Mars and a few tenths of a degree
 * for the Moon once the main perturbation terms are applied — sufficient
 * for Rashi (30° segments) and Nakshatra (13°20' segments) classification,
 * not for professional Kundali generation.
 */

const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;

function rev(deg) {
  return ((deg % 360) + 360) % 360;
}

/** Days since 1999-12-31 00:00 UT (Schlyter's epoch), from a UTC Date. */
function daysSinceEpoch(utcDate) {
  return (utcDate.getTime() - Date.UTC(1999, 11, 31)) / 86400000;
}

function solveKepler(mDeg, e) {
  let E = mDeg + (e * R2D * Math.sin(mDeg * D2R)) * (1 + e * Math.cos(mDeg * D2R));
  for (let i = 0; i < 4; i++) {
    const dM = mDeg - (E - e * R2D * Math.sin(E * D2R));
    const dE = dM / (1 - e * Math.cos(E * D2R));
    E += dE;
  }
  return E;
}

function keplerToEcliptic({ N, i, w, a, e, M }) {
  const E = solveKepler(M, e);
  const xv = a * (Math.cos(E * D2R) - e);
  const yv = a * (Math.sqrt(1 - e * e) * Math.sin(E * D2R));
  const v = rev(Math.atan2(yv, xv) * R2D);
  const r = Math.sqrt(xv * xv + yv * yv);

  const vw = (v + w) * D2R;
  const Nr = N * D2R;
  const ir = i * D2R;

  const xh = r * (Math.cos(Nr) * Math.cos(vw) - Math.sin(Nr) * Math.sin(vw) * Math.cos(ir));
  const yh = r * (Math.sin(Nr) * Math.cos(vw) + Math.cos(Nr) * Math.sin(vw) * Math.cos(ir));
  const zh = r * (Math.sin(vw) * Math.sin(ir));

  return { xh, yh, zh, r };
}

function sunPosition(d) {
  const elements = {
    N: 0,
    i: 0,
    w: rev(282.9404 + 4.70935e-5 * d),
    a: 1.0,
    e: 0.016709 - 1.151e-9 * d,
    M: rev(356.047 + 0.9856002585 * d),
  };
  const { xh, yh, r } = keplerToEcliptic(elements);
  const lon = rev(Math.atan2(yh, xh) * R2D);
  return { lon, xh, yh, r, w: elements.w, M: elements.M };
}

function moonPosition(d, sun) {
  const elements = {
    N: rev(125.1228 - 0.0529538083 * d),
    i: 5.1454,
    w: rev(318.0634 + 0.1643573223 * d),
    a: 60.2666,
    e: 0.0549,
    M: rev(115.3654 + 13.064993 * d),
  };
  const { xh, yh } = keplerToEcliptic(elements);
  let lon = rev(Math.atan2(yh, xh) * R2D);

  // Main perturbation terms (Schlyter), tenths-of-a-degree level correction.
  const Ms = sun.M;
  const Mm = elements.M;
  const Nm = elements.N;
  const wm = elements.w;
  const Lm = rev(Nm + wm + Mm);
  const Ls = rev(sun.w + Ms);
  const D = rev(Lm - Ls);
  const F = rev(Lm - Nm);

  lon +=
    -1.274 * Math.sin((Mm - 2 * D) * D2R) +
    0.658 * Math.sin(2 * D * D2R) -
    0.186 * Math.sin(Ms * D2R) -
    0.059 * Math.sin((2 * Mm - 2 * D) * D2R) -
    0.057 * Math.sin((Mm - 2 * D + Ms) * D2R) +
    0.053 * Math.sin((Mm + 2 * D) * D2R) +
    0.046 * Math.sin((2 * D - Ms) * D2R) +
    0.041 * Math.sin((Mm - Ms) * D2R) -
    0.035 * Math.sin(D * D2R) -
    0.031 * Math.sin((Mm + Ms) * D2R) -
    0.015 * Math.sin((2 * F - 2 * D) * D2R) +
    0.011 * Math.sin((Mm - 4 * D) * D2R);

  return { lon: rev(lon) };
}

function marsPosition(d, sun) {
  const elements = {
    N: rev(49.5574 + 2.11081e-5 * d),
    i: 1.8497 - 1.78e-8 * d,
    w: rev(286.5016 + 2.92961e-5 * d),
    a: 1.523688,
    e: 0.093405 + 2.516e-9 * d,
    M: rev(18.6021 + 0.524020769 * d),
  };
  const { xh, yh } = keplerToEcliptic(elements);
  const xg = xh + sun.xh;
  const yg = yh + sun.yh;
  const lon = rev(Math.atan2(yg, xg) * R2D);
  return { lon };
}

/** Lahiri (Chitrapaksha) ayanamsha, degrees, approximate linear model. */
function lahiriAyanamsha(utcDate) {
  const yearFraction = 2000 + (utcDate.getTime() - Date.UTC(2000, 0, 1)) / (365.25 * 86400000);
  return 23.85321 + (yearFraction - 2000) * 0.013972;
}

/** Ascendant (Lagna) tropical ecliptic longitude, degrees. */
function ascendantLongitude(d, latDeg, lonDeg) {
  const T = d / 36525;
  const jd = 2451543.5 + d;
  let gmst = rev(280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T);
  const lst = rev(gmst + lonDeg);
  const obliquity = 23.439291 - 0.0130042 * T;

  const lstR = lst * D2R;
  const oblR = obliquity * D2R;
  const latR = latDeg * D2R;

  const y = -Math.cos(lstR);
  const x = Math.sin(oblR) * Math.tan(latR) + Math.cos(oblR) * Math.sin(lstR);
  return rev(Math.atan2(y, x) * R2D);
}

/**
 * @param {Date} utcDate JS Date already representing the UTC instant of birth.
 * @param {number} latDeg birthplace latitude
 * @param {number} lonDeg birthplace longitude (east positive)
 */
export function computeSiderealLongitudes(utcDate, latDeg, lonDeg) {
  const d = daysSinceEpoch(utcDate);
  const sun = sunPosition(d);
  const moon = moonPosition(d, sun);
  const mars = marsPosition(d, sun);
  const ascTropical = ascendantLongitude(d, latDeg, lonDeg);
  const ayanamsha = lahiriAyanamsha(utcDate);

  return {
    ayanamsha,
    sunSidereal: rev(sun.lon - ayanamsha),
    moonSidereal: rev(moon.lon - ayanamsha),
    marsSidereal: rev(mars.lon - ayanamsha),
    ascendantSidereal: rev(ascTropical - ayanamsha),
  };
}
