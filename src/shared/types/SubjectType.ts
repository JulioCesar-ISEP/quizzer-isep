export type SubjectType =
  | 'CALCULUS'
  | 'DISCRETE_MATH'
  | 'CODE'
  | 'SYSTEMS';

export const SUBJECT_TYPES: readonly SubjectType[] = [
  'CALCULUS',
  'DISCRETE_MATH',
  'CODE',
  'SYSTEMS',
] as const;

export function isSubjectType(value: unknown): value is SubjectType {
  return SUBJECT_TYPES.includes(value as SubjectType);
}
