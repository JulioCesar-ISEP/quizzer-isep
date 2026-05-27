import type { SubjectType } from '@shared/types/SubjectType';
import type { SurvivalSessionPayload } from './contracts';

export interface SessionOptions {
  maxQuestions?: number;
  timeLimitSeconds?: number;
  tags?: string[];
}

export interface ISurvivalContentPort {
  /**
   * Devolve um SurvivalSessionPayload para a cadeira e configuração indicadas.
   * Lança erro se não existir conteúdo disponível.
   */
  getSession(
    subjectType: SubjectType,
    options?: SessionOptions
  ): Promise<SurvivalSessionPayload>;
}
