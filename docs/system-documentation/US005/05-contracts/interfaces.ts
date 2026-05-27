export type SubjectType = 'CALCULUS' | 'DISCRETE_MATH' | 'CODE' | 'SYSTEMS';

export interface SubjectClassification {
  subjectId: string;
  subjectType: SubjectType;
  confidence?: number;
  rationale?: string;
}
