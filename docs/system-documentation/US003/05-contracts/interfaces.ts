export type SubjectId = string;

export type DocumentType = 'THEORY' | 'EXAMS';

export interface UploadPdfInput {
  subjectId: SubjectId;
  documentType: 'THEORY';
  fileName: string;
  mimeType: 'application/pdf';
  sizeBytes: number;
  bytes?: Uint8Array; // web
  path?: string;      // desktop/electron
}

export interface UploadPdfResult {
  documentId: string;
  sha256: string;
}
