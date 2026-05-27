export type PipelineStatus = 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED';

export interface PipelineRun {
  id: string;
  subjectId: string;
  status: PipelineStatus;
  startedAtISO?: string;
  finishedAtISO?: string;
  errorMessage?: string;
}
