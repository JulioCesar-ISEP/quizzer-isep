/**
 * Adaptador temporário: níveis estáticos (data/prcmp) → contrato Survival.
 * Obsoleto quando o RAG for a única fonte. Mantém a UI isolada do formato legado.
 */

/** @typedef {import('@shared/types/SubjectType').SubjectType} SubjectType */
/** @typedef {import('@ports/survival/contracts').SurvivalSessionPayload} SurvivalSessionPayload */
/** @typedef {import('@ports/survival/ISurvivalContentPort').ISurvivalContentPort} ISurvivalContentPort */

/** Mapeamento provisório cadeira → SubjectType (AprendiFluxo). */
const CADEIRA_SUBJECT_MAP = /** @type {Record<number, SubjectType>} */ ({
  1: 'SYSTEMS', // PRCMP — SO, processos, Linux
  2: 'SYSTEMS', // ARQCP (quando reativado)
});

/**
 * @param {Object} level - nível com exercises no formato legado
 * @param {Object} [context]
 * @param {number} [context.cadeiraId]
 * @param {SubjectType} [context.subjectType]
 * @returns {SurvivalSessionPayload}
 */
export function mapLegacyLevelToSurvivalPayload(level, context = {}) {
  const subjectType =
    context.subjectType ??
    CADEIRA_SUBJECT_MAP[context.cadeiraId] ??
    'SYSTEMS';

  return {
    sessionId: `legacy-${context.cadeiraId ?? 'x'}-level-${level.id}`,
    subjectType,
    title: level.name,
    description: level.description,
    questions: (level.exercises ?? []).map((ex) => ({
      id: String(ex.id),
      question: ex.question,
      code: ex.code ?? '',
      options: [...ex.options],
      correctIndex: ex.correct,
      explanation: ex.explanation,
      theoryPoints: ex.theoryPoints,
      hints: ex.hints,
      tags: [subjectType],
    })),
    metadata: {
      source: 'static-level-adapter',
      levelId: level.id,
      xp: level.xp,
    },
  };
}

/**
 * Cria um adapter que implementa ISurvivalContentPort (US015) para um nível específico.
 * Isto permite manter a UI (Levels → Survival) sem acoplar a UI ao mapper legado.
 *
 * @param {Object} level - nível no formato legado (level.exercises[])
 * @param {Object} [context]
 * @param {number} [context.cadeiraId]
 * @param {SubjectType} [context.subjectType]
 * @returns {ISurvivalContentPort}
 */
export function createStaticSurvivalContentPort(level, context = {}) {
  return {
    async getSession(subjectType, options) {
      // subjectType/options são aceites para compatibilidade com o port;
      // nesta implementação estática, o conteúdo vem do `level` já selecionado pela UI.
      return mapLegacyLevelToSurvivalPayload(level, {
        ...context,
        subjectType: context.subjectType ?? subjectType,
        // TODO: mapear options.timeLimitSeconds/maxQuestions/tags quando o conteúdo deixar de ser "por nível".
      });
    },
  };
}

/**
 * Converte pergunta em runtime de volta ao shape que QuizView espera (correct, não correctIndex).
 * @param {import('@ports/survival/contracts').RuntimeSurvivalQuestion} runtimeQuestion
 */
export function toQuizViewExercise(runtimeQuestion) {
  if (!runtimeQuestion) return null;
  return {
    ...runtimeQuestion,
    correct: runtimeQuestion.correctIndex,
    id: runtimeQuestion.id,
    originalId: runtimeQuestion.originalId ?? runtimeQuestion.id,
  };
}
