import { isSubjectType, type SubjectType } from '@shared/types/SubjectType';

export type { SubjectType };

export interface SurvivalTheoryPoints {
  title: string;
  content: string;
  keyPoints?: string[];
  examples?: string;
}

export interface SurvivalQuestion {
  id: string;
  question: string;
  code?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  theoryPoints?: SurvivalTheoryPoints;
  hints?: string[];
  tags?: string[];
}

export interface SurvivalSessionPayload {
  sessionId: string;
  subjectType: SubjectType;
  title: string;
  description?: string;
  questions: SurvivalQuestion[];
  timeLimitSeconds?: number;
  metadata?: Record<string, unknown>;
}

export type RuntimeSurvivalQuestion = SurvivalQuestion & {
  originalId: string;
  originalCorrectIndex: number;
  shuffledIndex: number;
  originalIndex: number;
};

export function validateSurvivalPayload(
  payload: SurvivalSessionPayload | null | undefined
): string[] {
  const errors: string[] = [];
  if (!payload) {
    errors.push('payload é obrigatório');
    return errors;
  }
  if (!payload.sessionId) errors.push('sessionId em falta');
  if (!isSubjectType(payload.subjectType)) errors.push('subjectType inválido');
  if (!payload.title) errors.push('title em falta');
  if (!Array.isArray(payload.questions) || payload.questions.length === 0) {
    errors.push('questions deve ser um array não vazio');
  } else {
    payload.questions.forEach((q, i) => {
      if (!q.id) errors.push(`questions[${i}].id em falta`);
      if (!q.question) errors.push(`questions[${i}].question em falta`);
      if (!Array.isArray(q.options) || q.options.length < 2) {
        errors.push(`questions[${i}].options inválidas`);
      }
      if (
        typeof q.correctIndex !== 'number' ||
        q.correctIndex < 0 ||
        q.correctIndex >= (q.options?.length ?? 0)
      ) {
        errors.push(`questions[${i}].correctIndex inválido`);
      }
    });
  }
  return errors;
}
