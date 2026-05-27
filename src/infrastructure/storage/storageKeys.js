export const STORAGE_KEYS = {
  completedLevels: 'aprendifluxo-completed-levels',
  totalXp: 'aprendifluxo-total-xp',
  achievements: 'aprendifluxo-achievements',
  userStats: 'aprendifluxo-user-stats',
  theme: 'aprendifluxo-theme',
  userProfile: 'aprendifluxo-user-profile',
  reportPrefix: 'aprendifluxo-report',
};

const LEGACY_MAP = {
  [STORAGE_KEYS.completedLevels]: 'quizzer-completed-levels',
  [STORAGE_KEYS.totalXp]: 'quizzer-total-xp',
  [STORAGE_KEYS.achievements]: 'apeLevel_achievements',
  [STORAGE_KEYS.userStats]: 'apeLevel_userStats',
  [STORAGE_KEYS.theme]: 'quizzer-theme',
  [STORAGE_KEYS.reportPrefix]: 'quizzReport',
};

/** Migra chaves Quizzer/APE → AprendiFluxo (uma vez por chave). */
export function migrateLegacyStorage() {
  Object.entries(LEGACY_MAP).forEach(([nextKey, legacyKey]) => {
    if (localStorage.getItem(nextKey) != null) return;
    const legacy = localStorage.getItem(legacyKey);
    if (legacy != null) {
      localStorage.setItem(nextKey, legacy);
    }
  });
}

export function readJson(key, fallback) {
  migrateLegacyStorage();
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/** Chave do relatório diário (US027). */
export function getDailyReportKey(dateIso = new Date().toISOString().slice(0, 10)) {
  return `${STORAGE_KEYS.reportPrefix}_${dateIso}`;
}

export function readText(key) {
  migrateLegacyStorage();
  return localStorage.getItem(key);
}

export function writeText(key, value) {
  localStorage.setItem(key, value);
}

export function readTheme() {
  const stored = readJson(STORAGE_KEYS.theme, null);
  if (stored === 'light' || stored === 'dark') return stored;
  return null;
}

export function writeTheme(mode) {
  writeJson(STORAGE_KEYS.theme, mode);
}
