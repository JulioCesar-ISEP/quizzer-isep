/**
 * Adaptador de conteúdo estático (legado).
 * Será substituído pelo adaptador RAG quando o pipeline estiver ativo.
 */
import cadeiras from '../../../../data/cadeiras';

export function listSubjects() {
  return cadeiras;
}

export function findSubject(subjectId) {
  return cadeiras.find((c) => c.id === subjectId) ?? null;
}

export function findLevel(subjectId, levelId) {
  const subject = findSubject(subjectId);
  return subject?.levels.find((l) => l.id === levelId) ?? null;
}

export default cadeiras;
