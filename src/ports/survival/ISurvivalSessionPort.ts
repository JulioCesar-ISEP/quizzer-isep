import type { RuntimeSurvivalQuestion } from './contracts';

export type SurvivalSessionState =
  | { phase: 'idle' }
  | {
      phase: 'active';
      question: RuntimeSurvivalQuestion;
      questionIndex: number;
      total: number;
      timeLeft: number | null;
    }
  | {
      phase: 'feedback';
      question: RuntimeSurvivalQuestion;
      selectedIndex: number;
      isCorrect: boolean;
    }
  | {
      phase: 'finished';
      score: number;
      total: number;
      correctRate: number;
      elapsed: number;
    };

export interface ISurvivalSessionPort {
  /** Estado actual da sessão. */
  state: SurvivalSessionState;

  /** Responde à questão actual. Avança para a próxima questão. */
  answer(selectedIndex: number): void;

  /** Termina a sessão antecipadamente. */
  abort(): void;
}
