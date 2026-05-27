export interface UploadExamPdfInput {
  subjectId: string;
  documentType: 'EXAMS';
  examYear?: number;
  fileName: string;
  mimeType: 'application/pdf';
  sizeBytes: number;
  bytes?: Uint8Array;
  path?: string;
}
