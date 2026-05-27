export type SubjectId = string;

export interface Subject {
  id: SubjectId;
  name: string;
  createdAtISO: string;
}

export interface CreateSubjectInput {
  name: string;
}
