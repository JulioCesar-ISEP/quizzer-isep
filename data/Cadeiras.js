import ProgWebLevels from './ProgWeblevels';
import APROGLevels from './AprogLevels';
import BDLevels from './BDLevels';

const cadeiras = [
  {
    id: 1,
    name: "Programação Web",
    description: "Fundamentos de JavaScript e desenvolvimento web",
    icon: "Code",
    color: "#3b82f6",
    levels: ProgWebLevels
  },
  {
    id: 2,
    name: "Algoritmos",
    description: "Estruturas de dados e algoritmos essenciais",
    icon: "Brain",
    color: "#8b5cf6",
    levels: APROGLevels
  },
  {
    id: 3,
    name: "Bases de Dados",
    description: "SQL e modelagem de dados",
    icon: "Grid3x3",
    color: "#f59e0b",
    levels: BDLevels
  }
];

export default cadeiras;