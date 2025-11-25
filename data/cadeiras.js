import prcmp from './prcmp/prcmp';
// import aprog from './aprog';
import arqcp from './arqcp/arqcp';

const cadeiras = [
  {
    id: 1,
    name: "PRCMP - Princípios da Computação",
    description: "Fundamentos de sistemas operativos Linux, linha de comandos, gestão de processos e manipulação de ficheiros",
    icon: "Cpu",
    color: "#3b82f6",
    xp: 100,
    levels: prcmp
  },
  // {
  //   id: 2,
  //   name: "ARQCP - Arquitetura de Sistemas de Computadores",
  //   description: "Visão geral dos componentes e modelos de sistemas computacionais",
  //   icon: "Computer",
  //   color: "#8b5cf6",
  //   xp: 100,
  //   levels: arqcp
  // }
];

export default cadeiras;
