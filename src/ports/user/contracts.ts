/**
 * US001 — Contratos do perfil de utilizador (ports).
 *
 * Fonte de verdade no código. A doc re-exporta estes tipos.
 */

export interface UserProfile {
  name: string;
  course: string;
  year: number;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

export interface UserProfileInput {
  name: string;
  course: string;
  year: number;
}

export const AVAILABLE_COURSES = [
  'Engenharia Informática',
  'Engenharia de Software',
  'Ciências da Computação',
  'Engenharia Electrotécnica',
  'Outro',
] as const;

export type AvailableCourse = (typeof AVAILABLE_COURSES)[number];

export function validateUserProfileInput(input: UserProfileInput): string[] {
  const errors: string[] = [];
  if (!input.name || input.name.trim().length === 0) {
    errors.push('name é obrigatório');
  }
  if (!input.course) {
    errors.push('course é obrigatório');
  }
  if (typeof input.year !== 'number' || input.year < 1 || input.year > 5) {
    errors.push('year deve ser um número entre 1 e 5');
  }
  return errors;
}

